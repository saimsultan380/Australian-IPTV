import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const raw = fs.readFileSync(path.join(root, "prompt.md"), "utf8");
const chunks = raw.split(/^SEO Title:\s*$/m).filter(Boolean);

function cleanLine(line) {
  return line
    .replace(/<\/?em>/gi, "")
    .replace(/<a href="([^"]+)">([^<]+)<\/a>/gi, "$2 ($1)")
    .replace(/<[^>]+>/g, "")
    .trim();
}

function parseMeta(chunk) {
  const lines = chunk.replace(/\r\n/g, "\n").split("\n");
  const seoTitle = cleanLine(lines[0] || lines[1] || "");
  let i = 1;
  while (i < lines.length && !/^Meta Description:/i.test(lines[i])) i++;
  i++;
  const descLines = [];
  while (i < lines.length && !/^URL Slug:/i.test(lines[i])) {
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
  const body = lines.slice(i).join("\n");
  return {
    seoTitle,
    description: descLines.join(" ").trim(),
    slug,
    path: `/${slug}/`,
    title,
    body,
  };
}

const H2_SET = new Set([
  // Blog 1
  "What Is an IPTV Online Player?",
  "How Does an IPTV Web Browser Player Work?",
  "IPTV Browser vs IPTV App: Which Should You Choose?",
  "How to Choose the Best Web IPTV Player",
  "Can You Use a Free IPTV Web Browser?",
  "How to Watch IPTV on the Web in Australia",
  "IPTV Online Player on Windows, Mac and Other Devices",
  "Common IPTV Web Player Problems and Fixes",
  "Why Consider Australians IPTV?",
  "Is IPTV Web Browser Streaming Legal in Australia?",
  "Frequently Asked Questions",
  "Choose an IPTV Setup That Works for You",

  // Blog 2
  "What Is an M3U Playlist?",
  "What Is an M3U File?",
  "What Is an IPTV M3U Playlist?",
  "What Is an IPTV M3U Playlist URL?",
  "How Does an M3U IPTV Playlist Work?",
  "M3U vs M3U8: What Is the Difference?",
  "How to Add an IPTV M3U Playlist to a Player",
  "How to Use an M3U Playlist on Different Devices in Australia",
  "IPTV M3U Playlist vs Xtream Codes",
  "What Makes a Good IPTV Playlist?",
  "Common IPTV M3U Playlist Problems and How to Fix Them",
  "Why Is My M3U Playlist Not Working?",
  "Can You Create or Edit Your Own M3U IPTV Playlist?",
  "Is an M3U Playlist Free?",
  "Is Using an IPTV M3U Playlist Legal in Australia?",
  "Why Choose a Reliable IPTV Subscription in Australia?",
  "Frequently Asked Questions About IPTV M3U Playlists",
  "Final Thoughts",
]);

const H3_SET = new Set([
  // Blog 1
  "1. Playlist Compatibility",
  "2. Browser Compatibility",
  "3. Channel Organisation",
  "4. Video Quality and Playback",
  "5. Privacy and Security",
  "Step 1: Check your IPTV service",
  "Step 2: Choose an IPTV website player",
  "Step 3: Prepare your login information",
  "Step 4: Connect your playlist",
  "Step 5: Test your stream",

  // Blog 2
  "1. M3U Playlist File",
  "2. IPTV M3U Playlist URL",
  "Step 1: Get Your M3U Playlist",
  "Step 2: Install a Compatible IPTV Player",
  "Step 3: Open the Playlist Settings",
  "Step 4: Enter the Playlist URL or Upload the File",
  "Step 5: Load the Playlist",
  "Step 6: Browse Available Channels",
  "M3U Playlist on Smart TV",
  "M3U Playlist on Amazon Firestick",
  "M3U Playlist on Android TV and Android Boxes",
  "M3U Playlist on Windows PC and Mac",
  "M3U Playlist on iPhone and iPad",
  "What About Roku and Other Devices?",
  "1. Working Stream Links",
  "2. Proper Channel Names",
  "3. Useful Categories",
  "4. Electronic Programme Guide Support",
  "5. Regular Maintenance",
  "6. Device Compatibility",
]);

const KNOWN_TABLES = [
  {
    headerMatch: (lines, i) => lines[i] === "Feature" && lines[i+1] === "IPTV Web Browser" && lines[i+2] === "IPTV Application",
    cols: 3,
  },
  {
    headerMatch: (lines, i) => lines[i] === "Device" && lines[i+1] === "Browser-Based IPTV",
    cols: 2,
  },
  {
    headerMatch: (lines, i) => lines[i] === "Problem" && lines[i+1] === "What to Check",
    cols: 2,
  },
  {
    headerMatch: (lines, i) => lines[i] === "Plan" && lines[i+1] === "Duration" && lines[i+2] === "Price",
    cols: 3,
  },
  {
    headerMatch: (lines, i) => lines[i] === "Playlist information" && lines[i+1] === "Purpose",
    cols: 2,
  },
  {
    headerMatch: (lines, i) => lines[i] === "M3U playlist file" && lines[i+1] === "IPTV M3U playlist URL",
    cols: 2,
  },
  {
    headerMatch: (lines, i) => lines[i] === "Feature" && lines[i+1] === "M3U" && lines[i+2] === "M3U8",
    cols: 3,
  },
  {
    headerMatch: (lines, i) => lines[i] === "Feature" && lines[i+1] === "M3U Playlist" && lines[i+2] === "Xtream Codes Login",
    cols: 3,
  },
  {
    headerMatch: (lines, i) => lines[i] === "Problem" && lines[i+1] === "Possible reason" && lines[i+2] === "What to do",
    cols: 3,
  },
  {
    headerMatch: (lines, i) => lines[i] === "Plan" && lines[i+1] === "Subscription duration" && lines[i+2] === "Price",
    cols: 3,
  },
];

function isKnownListItem(line) {
  const items = [
    "Australian entertainment", "News and current affairs", "Sports", "Movies",
    "Documentaries", "Children's programming", "International channels",
    "Playlist information: Details that help identify the content, such as channel names and other metadata.",
    "Media locations: The URLs or file paths that point to the actual streams.",
    "Free player: The software may be available without a purchase.",
    "Free playlist: A playlist may contain free-to-access streams, but its availability and reliability can vary.",
    "Paid IPTV subscription: A service may require a subscription to provide access to its content.",
    "Content rights: Free or paid access does not automatically establish that a stream is authorised for distribution.",
    "Choose a compatible player: Find an IPTV web player that supports your device and the connection format provided by your service.",
    "Open the player: Visit its website using a supported browser.",
    "Enter your details: Some players accept an M3U playlist URL, while others support Xtream Codes login details or another connection method.",
    "Load your playlist: The player processes the supported playlist and displays available channels or categories.",
    "Start streaming: Select a channel and watch it through your browser.",
    "The IPTV service provides a playlist: You receive an M3U file or a playlist URL.",
    "You open an IPTV player: The player must support M3U playlists.",
    "You add the playlist: You upload the file or enter the playlist URL.",
    "The player reads the entries: It processes the channel names, links and supported metadata.",
    "The channels appear: Available entries are organised into a list or categories.",
    "You select a stream: The player attempts to connect to the selected media source.",
    "Add Playlist", "Add M3U URL", "Load Playlist", "Import Playlist", "Add Network Stream",
    "Open the television's app store.", "Find a compatible IPTV player.", "Install the application.",
    "Open its playlist settings.", "Enter your M3U URL or import a supported file.", "Load the playlist and test playback.",
    "Install a compatible IPTV player.", "Open the application.", "Select the option to add an M3U playlist.",
    "Enter the playlist URL or import the file if supported.", "Save and load the playlist.",
    "Install an IPTV player that supports M3U.", "Open its playlist management section.",
    "Select the M3U URL or file option.", "Enter the required information.", "Refresh the playlist and test a channel.",
    "Confirm that you copied the complete playlist URL.", "Check for accidental spaces or missing characters.",
    "Make sure your subscription or access permission is still active.",
    "Confirm that your IPTV player supports the playlist format.",
    "Test your internet connection.", "Ask the provider whether the playlist link has changed.",
    "Add supported stream URLs.", "Change channel names.", "Organise entries.", "Remove broken references.",
    "Add supported metadata.",
    "M3U player: Software used to read and play supported playlists.",
    "M3U playlist: A file or list of media references.",
    "IPTV subscription: A service that may provide access to channels and streams.",
    "Streaming content: The actual media delivered through the stream links.",
    "Check whether the provider is authorised to distribute the content.",
    "Look for clear information about the service and its content.",
    "Be cautious of offers that promise access to premium channels without explaining their distribution rights.",
    "Avoid downloading playlists from unknown websites.",
    "Do not assume that a free or paid playlist is automatically authorised.",
    "Playlist support: Confirm whether the service provides an M3U playlist URL, a downloadable file or another connection method.",
    "Device compatibility: Check support for your Smart TV, Firestick, Android TV, mobile device or computer.",
    "Content availability: Ask which channels and content categories are included in the selected plan.",
    "Streaming requirements: Check the recommended internet speed and supported video quality.",
    "Customer assistance: Find out how to get help if your playlist stops loading or your device has a compatibility issue.",
    "Content rights: Confirm that the provider has the necessary rights to distribute the content.",
  ];
  return items.includes(line);
}

function flushList(blocks, items) {
  if (!items.length) return;
  blocks.push({ type: "ul", items: [...items] });
  items.length = 0;
}

function parseBody(body) {
  const rawLines = body.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let i = 0;
  const listBuf = [];

  while (i < rawLines.length) {
    const rawLine = rawLines[i];
    const line = cleanLine(rawLine);

    if (!line) {
      flushList(blocks, listBuf);
      i++;
      continue;
    }

    if (H2_SET.has(line)) {
      flushList(blocks, listBuf);
      blocks.push({ type: "h2", text: line });
      i++;
      continue;
    }

    if (H3_SET.has(line)) {
      flushList(blocks, listBuf);
      blocks.push({ type: "h3", text: line });
      i++;
      continue;
    }

    // FAQ numbered questions
    const faq = line.match(/^(\d+)\.\s+(.+\?)$/);
    if (faq) {
      flushList(blocks, listBuf);
      blocks.push({ type: "h3", text: `${faq[1]}. ${faq[2]}` });
      i++;
      const ans = [];
      while (i < rawLines.length) {
        const nextClean = cleanLine(rawLines[i]);
        if (!nextClean) {
          i++;
          break;
        }
        if (/^\d+\.\s+/.test(nextClean) || H2_SET.has(nextClean) || H3_SET.has(nextClean)) break;
        ans.push(nextClean);
        i++;
      }
      if (ans.length) blocks.push({ type: "p", text: ans.join(" ") });
      continue;
    }

    // Table detection
    const tableDef = KNOWN_TABLES.find((t) => t.headerMatch(rawLines.map(cleanLine), i));
    if (tableDef) {
      flushList(blocks, listBuf);
      const cols = tableDef.cols;
      const headers = [];
      for (let c = 0; c < cols; c++) {
        headers.push(cleanLine(rawLines[i + c]));
      }
      i += cols;

      const rows = [];
      while (i < rawLines.length) {
        // Table ends at empty line in rawLines
        if (!rawLines[i].trim()) {
          i++;
          break;
        }
        const firstCell = cleanLine(rawLines[i]);
        if (H2_SET.has(firstCell) || H3_SET.has(firstCell) || /^\d+\.\s+/.test(firstCell)) break;

        const row = [];
        let breakTable = false;
        for (let c = 0; c < cols; c++) {
          if (i + c >= rawLines.length || !rawLines[i + c].trim()) {
            breakTable = true;
            break;
          }
          const cell = cleanLine(rawLines[i + c]);
          if (H2_SET.has(cell) || H3_SET.has(cell)) {
            breakTable = true;
            break;
          }
          row.push(cell);
        }
        if (breakTable || row.length < cols) break;
        rows.push(row);
        i += cols;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    // List item
    if (isKnownListItem(line)) {
      listBuf.push(line);
      i++;
      continue;
    }

    flushList(blocks, listBuf);

    // Regular paragraph
    const para = [line];
    i++;
    while (i < rawLines.length) {
      if (!rawLines[i].trim()) {
        i++;
        break;
      }
      const nextClean = cleanLine(rawLines[i]);
      if (
        H2_SET.has(nextClean) ||
        H3_SET.has(nextClean) ||
        /^\d+\.\s+/.test(nextClean) ||
        KNOWN_TABLES.some((t) => t.headerMatch(rawLines.map(cleanLine), i)) ||
        isKnownListItem(nextClean)
      ) {
        break;
      }
      para.push(nextClean);
      i++;
    }
    blocks.push({ type: "p", text: para.join(" ") });
  }

  flushList(blocks, listBuf);
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

const postsMeta = [
  {
    meta: parseMeta(chunks[0]),
    exportName: "onlinePlayerPost",
    file: "src/lib/blog-online-player.ts",
    date: "2026-11-24",
    dateLabel: "24 Nov 2026",
    category: "Guides",
    excerpt:
      "Explore how IPTV online players work in Australia: browser streaming options, device compatibility, setup steps, and tips before you subscribe.",
    coverImage: "/images/blog/iptv-online-player-cover.jpg",
    coverAlt: "IPTV online player watching live TV through web browser in Australia",
  },
  {
    meta: parseMeta(chunks[1]),
    exportName: "m3uPlaylistPost",
    file: "src/lib/blog-m3u-playlist.ts",
    date: "2026-11-24",
    dateLabel: "24 Nov 2026",
    category: "Setup",
    excerpt:
      "Complete guide to IPTV M3U playlists in Australia: M3U vs M3U8, playlist URLs, setup on Smart TVs and Firestick, troubleshooting, and legal points.",
    coverImage: "/images/blog/m3u-playlist-iptv-cover.jpg",
    coverAlt: "What is an M3U playlist IPTV guide and setup for Australia",
  },
];

for (const post of postsMeta) {
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
  console.log(`Generated ${post.file}: ${blocks.length} blocks, slug: ${post.meta.slug}`);
}
