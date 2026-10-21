import type { ReactNode } from "react";

type Named = { name: string };

export function DevicePickIcon({
  icon,
}: {
  icon:
    | "firestick"
    | "samsung"
    | "lg"
    | "androidtv"
    | "android"
    | "apple"
    | "computer"
    | "appletv"
    | "chromecast"
    | "roku"
    | "googletv"
    | "box";
}) {
  const stroke = "currentColor";
  if (icon === "firestick" || icon === "chromecast") {
    return (
      <svg viewBox="0 0 24 24" className="device-pick-icon" aria-hidden="true" fill="none">
        <rect x="3" y="10" width="14" height="4" rx="2" stroke={stroke} strokeWidth="1.7" />
        <path d="M17 11h3v2h-3" stroke={stroke} strokeWidth="1.7" />
        <circle cx="7" cy="12" r="1.2" fill={stroke} />
      </svg>
    );
  }
  if (icon === "android") {
    return (
      <svg viewBox="0 0 24 24" className="device-pick-icon" aria-hidden="true" fill="none">
        <rect x="8" y="3" width="8" height="14" rx="1.5" stroke={stroke} strokeWidth="1.7" />
        <path d="M10 19h4M10 6h4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "apple") {
    return (
      <svg viewBox="0 0 24 24" className="device-pick-icon" aria-hidden="true" fill="none">
        <rect x="5" y="4" width="14" height="16" rx="2" stroke={stroke} strokeWidth="1.7" />
        <path d="M9 7h6M10 18h4" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "computer") {
    return (
      <svg viewBox="0 0 24 24" className="device-pick-icon" aria-hidden="true" fill="none">
        <rect x="3" y="5" width="18" height="11" rx="1.5" stroke={stroke} strokeWidth="1.7" />
        <path d="M8 19h8M10 16v3M14 16v3" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (icon === "appletv" || icon === "roku" || icon === "box") {
    return (
      <svg viewBox="0 0 24 24" className="device-pick-icon" aria-hidden="true" fill="none">
        <rect x="4" y="7" width="16" height="10" rx="2" stroke={stroke} strokeWidth="1.7" />
        <path d="M8 17h8" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="12" r="1.5" fill={stroke} />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="device-pick-icon" aria-hidden="true" fill="none">
      <rect x="3" y="5" width="18" height="12" rx="1.5" stroke={stroke} strokeWidth="1.7" />
      <path d="M8 20h8M10 17v3M14 17v3" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function OutlineIcon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="glyph glyph-plain" fill="none">
      {children}
    </svg>
  );
}

export function PointIcon({ name }: Named) {
  if (name.includes("Flexible")) {
    return (
      <OutlineIcon>
        <rect x="3" y="5" width="18" height="16" rx="2" stroke="#012169" strokeWidth="1.75" />
        <path d="M3 10h18M8 3v4M16 3v4" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M8 15h3M13 15h3" stroke="#E4002B" strokeWidth="1.75" strokeLinecap="round" />
      </OutlineIcon>
    );
  }
  if (name.includes("Compatible") || name.includes("Device") || name.includes("Streaming Devices")) {
    return (
      <OutlineIcon>
        <rect x="2" y="5" width="14" height="10" rx="1.5" stroke="#012169" strokeWidth="1.75" />
        <path d="M7 15v2h4v-2" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
        <rect x="16" y="9" width="6" height="10" rx="1.2" stroke="#E4002B" strokeWidth="1.75" />
        <path d="M18 17h2" stroke="#E4002B" strokeWidth="1.5" strokeLinecap="round" />
      </OutlineIcon>
    );
  }
  if (name.includes("Install")) {
    return (
      <OutlineIcon>
        <path d="M12 3v11" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M8 10l4 4 4-4" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 18h14" stroke="#E4002B" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M5 21h14" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
      </OutlineIcon>
    );
  }
  if (name.includes("Support")) {
    return (
      <OutlineIcon>
        <path
          d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1"
          stroke="#012169"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <rect x="3" y="11" width="4" height="6" rx="1.5" stroke="#012169" strokeWidth="1.75" />
        <rect x="17" y="11" width="4" height="6" rx="1.5" stroke="#012169" strokeWidth="1.75" />
        <path d="M12 19v2h3" stroke="#E4002B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </OutlineIcon>
    );
  }
  return (
    <OutlineIcon>
      <path
        d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
        stroke="#012169"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M14 3v5h5" stroke="#012169" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 13h6M9 17h4" stroke="#E4002B" strokeWidth="1.75" strokeLinecap="round" />
    </OutlineIcon>
  );
}

export function StepIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <OutlineIcon>
        <rect x="5" y="3" width="14" height="18" rx="2" stroke="#012169" strokeWidth="1.75" />
        <path d="M9 8h6M9 12h6M9 16h4" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="17" cy="16" r="3.5" fill="#fff" stroke="#E4002B" strokeWidth="1.5" />
        <path d="M15.7 16l1 1 1.7-1.8" stroke="#E4002B" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </OutlineIcon>
    );
  }
  if (index === 1) {
    return (
      <OutlineIcon>
        <rect x="2" y="5" width="14" height="10" rx="1.5" stroke="#012169" strokeWidth="1.75" />
        <path d="M7 15v2h4v-2" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
        <rect x="16" y="9" width="6" height="10" rx="1.2" stroke="#E4002B" strokeWidth="1.75" />
      </OutlineIcon>
    );
  }
  if (index === 2) {
    return (
      <OutlineIcon>
        <circle cx="12" cy="12" r="9" stroke="#012169" strokeWidth="1.75" />
        <path d="M10 8.5v7l6-3.5-6-3.5z" fill="#E4002B" stroke="#E4002B" strokeWidth="1" strokeLinejoin="round" />
      </OutlineIcon>
    );
  }
  if (index === 3) {
    return (
      <OutlineIcon>
        <rect x="2" y="6" width="20" height="12" rx="2" stroke="#012169" strokeWidth="1.75" />
        <path d="M2 10h20" stroke="#012169" strokeWidth="1.75" />
        <path d="M6 15h4" stroke="#E4002B" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M16 14.2l1.2 1.2 2.4-2.6" stroke="#E4002B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </OutlineIcon>
    );
  }
  return (
    <OutlineIcon>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="#012169" strokeWidth="1.75" />
      <path d="M10 10.5v3l4-1.5-4-1.5z" fill="#E4002B" />
      <path d="M8 20h8" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
    </OutlineIcon>
  );
}

export function HeroArtwork() {
  return (
    <div className="hero-art">
      <svg className="aus-map" viewBox="0 0 640 520" aria-hidden="true">
        <path
          fill="rgba(255,255,255,0.08)"
          d="M250 70c48-36 112-22 146 18 46-18 104 8 122 52 58 14 96 74 72 132 36 48 18 118-28 150 8 62-18 124-78 146-36 48-108 36-146 72-46 22-108-4-132-50-58 8-118-36-108-96-46-22-70-92-34-140 12-58 52-104 104-116 8-46 40-86 82-78z"
        />
        <ellipse cx="236" cy="430" rx="22" ry="16" fill="rgba(255,255,255,0.12)" />
        <g fill="#fff">
          <circle cx="470" cy="150" r="4" />
          <circle cx="520" cy="190" r="4.5" />
          <circle cx="430" cy="210" r="3.5" />
          <circle cx="490" cy="250" r="2.5" />
          <circle cx="500" cy="300" r="5" />
        </g>
      </svg>
      <div className="broadcast">
        <span />
        <span />
        <span />
      </div>
      <div className="screen-card">
        <div className="screen-top">
          <i />
          <strong>LIVE</strong>
          <em>AU</em>
        </div>
        <div className="screen-body">
          <div className="screen-play" />
          <ul>
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ResellerBenefitIcon({ name }: Named) {
  if (name.includes("Management")) {
    return (
      <OutlineIcon>
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#012169" strokeWidth="1.75" />
        <path d="M7 9h10M7 13h7" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="17" cy="18" r="3.5" fill="#fff" stroke="#E4002B" strokeWidth="1.5" />
        <path d="M15.7 18l1 1 1.6-1.7" stroke="#E4002B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </OutlineIcon>
    );
  }
  if (name.includes("Customer Accounts") || name.includes("Centralised")) {
    return (
      <OutlineIcon>
        <circle cx="9" cy="8" r="3" stroke="#012169" strokeWidth="1.75" />
        <circle cx="16" cy="8" r="3" stroke="#012169" strokeWidth="1.75" />
        <path d="M3 19c1-3.5 3.2-5 6-5s5 1.5 6 5" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M13 19c.6-2.2 1.8-3.4 4-3.8" stroke="#E4002B" strokeWidth="1.75" strokeLinecap="round" />
      </OutlineIcon>
    );
  }
  if (name.includes("Renewals")) {
    return (
      <OutlineIcon>
        <path d="M4 12a8 8 0 0 1 13.5-5.8" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M20 12a8 8 0 0 1-13.5 5.8" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M17 3v4h4" stroke="#E4002B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 21v-4H3" stroke="#E4002B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </OutlineIcon>
    );
  }
  if (name.includes("Packages") || name.includes("Flexible")) {
    return (
      <OutlineIcon>
        <path d="M3 8l9-4 9 4-9 4-9-4z" stroke="#012169" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M3 12l9 4 9-4" stroke="#012169" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M3 16l9 4 9-4" stroke="#E4002B" strokeWidth="1.75" strokeLinejoin="round" />
      </OutlineIcon>
    );
  }
  if (name.includes("Support")) {
    return (
      <OutlineIcon>
        <path d="M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-1" stroke="#012169" strokeWidth="1.75" strokeLinecap="round" />
        <rect x="3" y="11" width="4" height="6" rx="1.5" stroke="#012169" strokeWidth="1.75" />
        <rect x="17" y="11" width="4" height="6" rx="1.5" stroke="#012169" strokeWidth="1.75" />
        <path d="M12 19v2h3" stroke="#E4002B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </OutlineIcon>
    );
  }
  return (
    <OutlineIcon>
      <path d="M4 19V9l8-5 8 5v10" stroke="#012169" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 19v-6h6v6" stroke="#012169" strokeWidth="1.75" strokeLinejoin="round" />
      <path d="M9 12h6" stroke="#E4002B" strokeWidth="1.75" strokeLinecap="round" />
    </OutlineIcon>
  );
}

export function SpeedArt() {
  return (
    <svg viewBox="0 0 280 180" className="speed-art" aria-hidden="true">
      <rect width="280" height="180" rx="16" fill="#012169" />
      <path d="M40 130a100 100 0 0 1 200 0" fill="none" stroke="#fff" strokeWidth="14" strokeLinecap="round" opacity="0.25" />
      <path d="M40 130a100 100 0 0 1 168-54" fill="none" stroke="#E4002B" strokeWidth="14" strokeLinecap="round" />
      <circle cx="140" cy="130" r="8" fill="#fff" />
      <text x="40" y="162" fill="#fff" fontSize="13" fontFamily="Montserrat, sans-serif" fontWeight="700">
        HD 10
      </text>
      <text x="168" y="162" fill="#fff" fontSize="13" fontFamily="Montserrat, sans-serif" fontWeight="700">
        4K 25
      </text>
    </svg>
  );
}

export function CloseArt() {
  return (
    <svg viewBox="0 0 460 260" className="close-art" aria-hidden="true">
      <rect width="460" height="260" rx="18" fill="#012169" />
      <rect width="180" height="110" fill="#012169" />
      <path d="M0 0L180 110M180 0L0 110" stroke="#fff" strokeWidth="16" />
      <path d="M0 0L180 110M180 0L0 110" stroke="#E4002B" strokeWidth="6" />
      <path d="M90 0v110M0 55h180" stroke="#fff" strokeWidth="28" />
      <path d="M90 0v110M0 55h180" stroke="#E4002B" strokeWidth="16" />
      <g fill="#fff">
        <polygon points="300,70 306,86 324,86 310,98 316,116 300,106 284,116 290,98 276,86 294,86" />
        <polygon points="360,120 365,132 378,132 368,140 372,154 360,146 348,154 352,140 342,132 355,132" />
        <polygon points="250,140 254,150 266,150 256,156 260,168 250,162 240,168 244,156 234,150 246,150" />
        <polygon points="330,180 333,188 342,188 335,193 338,202 330,197 322,202 325,193 318,188 327,188" />
      </g>
    </svg>
  );
}
