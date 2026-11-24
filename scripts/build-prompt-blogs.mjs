import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const raw = fs.readFileSync(path.join(root, "prompt.md"), "utf8");
const chunks = raw.split(/^SEO title:\s*$/m).slice(1, 3);

function cleanLine(line) {
  return line
    .replace(/<\/?em>/gi, "")
    .replace(/<a href="([^"]+)">([^<]+)<\/a>/gi, "$2 ($1)")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function parseMeta(chunk) {
  const lines = chunk.replace(/\r\n/g, "\n").split("\n");
  const seoTitle = cleanLine(lines[1] || "");
  let i = 2;
  while (i < lines.length && !/^Meta description:/i.test(lines[i])) i++;
  i++;
  const descLines = [];
  while (i < lines.length && !/^URL slug:/i.test(lines[i])) {
    if (lines[i].trim()) descLines.push(cleanLine(lines[i]));
    i++;
  }
  i++;
  while (i < lines.length && !lines[i].trim()) i++;
  const slugLine = cleanLine(lines[i] || "");
  const slug = slugLine.replace(/^\/|\/$/g, "");
  i++;
  while (i < lines.length && !lines[i].trim()) i++;
  const title = cleanLine(lines[i] || "");
  i++;
  const body = lines.slice(i).join("\n").split(/^Meta title:/m)[0];
  return {
    seoTitle,
    description: descLines.join(" ").trim(),
    slug,
    path: `/${slug}/`,
    title,
    body,
  };
}

const H2 = new Set([
  "What Are Australian IPTV Channels?",
  "Popular Australian TV Channels to Look For",
  "Australian IPTV Sports Channels",
  "Australian News Channels on IPTV",
  "Movies and Entertainment Channels",
  "Children's and Family IPTV Channels",
  "Regional and International Channels for Australian Viewers",
  "What Should an Australian IPTV Channel List Include?",
  "How to Check Australian IPTV Channels Before Subscribing",
  "Can You Watch Australian IPTV Channels on Different Devices?",
  "Is IPTV Legal in Australia?",
  "Frequently Asked Questions About Australian IPTV Channels",
  "Final Thoughts",
  "What Is an IPTV Subscription?",
  "Why Do Australians Choose IPTV Subscriptions?",
  "Australians IPTV Subscription Plans and Prices",
  "Basic IPTV Subscription: $12 AUD for 1 Month",
  "Standard IPTV Subscription: $25 AUD for 3 Months",
  "Premium IPTV Subscription: $40 AUD for 6 Months",
  "Super IPTV Subscription: $55 AUD for 12 Months",
  "What Can You Watch with an Australian IPTV Subscription?",
  "Which Devices Support an IPTV Subscription in Australia?",
  "How to Set Up Your IPTV Subscription",
  "How Much Does an IPTV Subscription Cost in Australia?",
  "How to Choose the Best IPTV Subscription in Australia",
  "Is an IPTV Subscription Legal in Australia?",
  "Why Consider Australians IPTV?",
  "How to Get Started with Australians IPTV",
  "Frequently Asked Questions About IPTV Subscriptions in Australia",
  "Choose an IPTV Subscription That Fits Your Viewing Needs",
]);

const H3 = new Set([
  "1. Watch on Compatible Devices",
  "2. Access Different Entertainment Categories",
  "3. Choose a Subscription Period",
  "4. Get Setup Assistance",
  "Live TV Channels",
  "Sports and Live Events",
  "Movies and TV Series",
  "International Entertainment",
  "Step 1: Choose Your Subscription Plan",
  "Step 2: Check Your Device Compatibility",
  "Step 3: Install a Compatible IPTV Player",
  "Step 4: Complete Your Subscription",
  "Step 5: Receive Your Activation Details",
  "Step 6: Enter Your Login Details",
  "Step 7: Test Your IPTV Connection",
  "Check the Available Content",
  "Check Device Compatibility",
  "Review the Subscription Price",
  "Understand the Support Options",
  "Look for Clear Subscription Conditions",
  "Verify Content Rights",
]);

function isLikelyListItem(line) {
  if (!line || line.length > 90) return false;
  if (/^[A-Z0-9$]/.test(line) === false && !/^[A-Za-z]/.test(line)) return false;
  if (/[.!?]$/.test(line) && line.split(" ").length > 12) return false;
  return true;
}

function flushList(blocks, items, ordered) {
  if (!items.length) return;
  blocks.push({ type: ordered ? "ol" : "ul", items: [...items] });
  items.length = 0;
}

function parseBody(body) {
  const lines = body.replace(/\r\n/g, "\n").split("\n").map((l) => cleanLine(l));
  const blocks = [];
  let i = 0;
  const listBuf = [];
  let ordered = false;

  while (i < lines.length) {
    const line = lines[i];
    if (!line) {
      flushList(blocks, listBuf, ordered);
      i++;
      continue;
    }

    if (H2.has(line) || /^Final Thoughts$/i.test(line) || /^Choose an IPTV Subscription That Fits Your Viewing Needs$/i.test(line)) {
      flushList(blocks, listBuf, ordered);
      blocks.push({ type: "h2", text: line });
      i++;
      continue;
    }
    if (H3.has(line)) {
      flushList(blocks, listBuf, ordered);
      blocks.push({ type: "h3", text: line });
      i++;
      continue;
    }

    // FAQ numbered Q
    const faq = line.match(/^(\d+)\.\s+(.+)$/);
    if (faq && faq[2].endsWith("?")) {
      flushList(blocks, listBuf, ordered);
      blocks.push({ type: "h3", text: `${faq[1]}. ${faq[2]}` });
      i++;
      const ans = [];
      while (i < lines.length && lines[i] && !/^\d+\.\s+/.test(lines[i]) && !H2.has(lines[i]) && !H3.has(lines[i])) {
        ans.push(lines[i]);
        i++;
      }
      if (ans.length) blocks.push({ type: "p", text: ans.join(" ") });
      continue;
    }

    // Table detection: header row + short cells then rows of similar width
    if (
      i + 3 < lines.length &&
      lines[i + 1] &&
      lines[i + 2] &&
      !H2.has(lines[i + 1]) &&
      lines[i].split(" ").length <= 4 &&
      lines[i + 1].split(" ").length <= 6 &&
      lines[i + 2].split(" ").length <= 12 &&
      [
        "Broadcaster",
        "Category",
        "What to Check",
        "Plan",
        "Subscription Period",
        "Device",
      ].includes(line)
    ) {
      flushList(blocks, listBuf, ordered);
      const headers = [lines[i], lines[i + 1], lines[i + 2]];
      i += 3;
      const rows = [];
      while (i + 2 < lines.length && lines[i] && lines[i + 1] && lines[i + 2]) {
        if (H2.has(lines[i]) || H3.has(lines[i]) || /^\d+\.\s+/.test(lines[i])) break;
        // stop if next looks like paragraph
        if (lines[i].length > 70 && lines[i].includes(" ")) break;
        const a = lines[i];
        const b = lines[i + 1];
        const c = lines[i + 2];
        if (H2.has(b) || H2.has(c)) break;
        rows.push([a, b, c]);
        i += 3;
        while (i < lines.length && !lines[i]) i++;
      }
      if (rows.length) {
        blocks.push({ type: "table", headers, rows });
        continue;
      }
    }

    // bullet-ish short lines after intro
    if (
      isLikelyListItem(line) &&
      !line.includes(". ") &&
      line.split(" ").length <= 10 &&
      !/[.!?]$/.test(line)
    ) {
      // peek if previous was intro paragraph ending with :
      const prev = blocks[blocks.length - 1];
      const startList =
        listBuf.length > 0 ||
        (prev && prev.type === "p" && /:\s*$/.test(prev.text)) ||
        (prev && (prev.type === "h2" || prev.type === "h3"));
      if (startList || listBuf.length) {
        ordered = false;
        listBuf.push(line);
        i++;
        continue;
      }
    }

    flushList(blocks, listBuf, ordered);
    // merge consecutive paragraph lines until blank/heading
    const para = [line];
    i++;
    while (
      i < lines.length &&
      lines[i] &&
      !H2.has(lines[i]) &&
      !H3.has(lines[i]) &&
      !/^\d+\.\s+/.test(lines[i]) &&
      !(
        isLikelyListItem(lines[i]) &&
        !lines[i].includes(". ") &&
        lines[i].split(" ").length <= 10 &&
        !/[.!?]$/.test(lines[i])
      )
    ) {
      // don't swallow table headers
      if (
        ["Broadcaster", "Category", "What to Check", "Plan", "Subscription Period", "Device"].includes(
          lines[i],
        )
      )
        break;
      para.push(lines[i]);
      i++;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }
  flushList(blocks, listBuf, ordered);
  return blocks;
}

function tsString(s) {
  return JSON.stringify(s);
}

function emitBlocks(blocks) {
  return blocks
    .map((b) => {
      if (b.type === "p" || b.type === "h2" || b.type === "h3") {
        return `    { type: ${tsString(b.type)}, text: ${tsString(b.text)} },`;
      }
      if (b.type === "ul" || b.type === "ol") {
        const items = b.items.map((it) => `      ${tsString(it)},`).join("\n");
        return `    {\n      type: ${tsString(b.type)},\n      items: [\n${items}\n      ],\n    },`;
      }
      if (b.type === "table") {
        const headers = b.headers.map((h) => `      ${tsString(h)},`).join("\n");
        const rows = b.rows
          .map((r) => `      [${r.map((c) => tsString(c)).join(", ")}],`)
          .join("\n");
        return `    {\n      type: "table",\n      headers: [\n${headers}\n      ],\n      rows: [\n${rows}\n      ],\n    },`;
      }
      return "";
    })
    .filter(Boolean)
    .join("\n");
}

const posts = [
  {
    meta: parseMeta(chunks[0]),
    exportName: "channelsPost",
    file: "src/lib/blog-channels.ts",
    date: "2026-11-14",
    dateLabel: "14 Nov 2026",
    category: "Channels",
    excerpt:
      "Explore Australian IPTV channels — local TV, sports, news, movies, kids and international options — plus what to check before you subscribe.",
    coverImage: "/images/blog/australian-iptv-channels-cover.jpg",
    coverAlt: "Australian IPTV channels for sports, news, movies and more",
  },
  {
    meta: parseMeta(chunks[1]),
    exportName: "subscriptionPost",
    file: "src/lib/blog-subscription.ts",
    date: "2026-11-14",
    dateLabel: "14 Nov 2026",
    category: "Plans",
    excerpt:
      "Compare IPTV subscription plans in Australia from $12 AUD, check device support, setup steps and what to know before you subscribe.",
    coverImage: "/images/blog/iptv-subscription-australia-cover.jpg",
    coverAlt: "IPTV subscription plans, pricing and setup in Australia",
  },
];

for (const post of posts) {
  const blocks = parseBody(post.meta.body);
  const content = `import type { BlogPost } from "@/lib/blog-types";

export const ${post.exportName}: BlogPost = {
  slug: ${tsString(post.meta.slug)},
  path: ${tsString(post.meta.path)},
  title: ${tsString(post.meta.title)},
  seoTitle: ${tsString(post.meta.seoTitle)},
  description: ${tsString(post.meta.description)},
  date: ${tsString(post.date)},
  dateLabel: ${tsString(post.dateLabel)},
  category: ${tsString(post.category)},
  excerpt: ${tsString(post.excerpt)},
  coverImage: ${tsString(post.coverImage)},
  coverAlt: ${tsString(post.coverAlt)},
  blocks: [
${emitBlocks(blocks)}
  ],
};
`;
  fs.writeFileSync(path.join(root, post.file), content);
  console.log(post.file, "blocks", blocks.length, "slug", post.meta.slug);
}
