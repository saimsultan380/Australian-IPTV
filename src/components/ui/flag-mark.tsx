type FlagMarkProps = {
  width: number;
  height: number;
  className?: string;
  label?: string;
  preserveAspectRatio?: string;
};

export function FlagMark({
  width,
  height,
  className,
  label,
  preserveAspectRatio = "xMidYMid meet",
}: FlagMarkProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1200 600"
      preserveAspectRatio={preserveAspectRatio}
      className={className ?? "flag-mark"}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <rect width="1200" height="600" fill="#012169" />
      <g>
        <path d="M0 0 L600 300 M600 0 L0 300" stroke="#fff" strokeWidth="54" />
        <path d="M0 0 L600 300 M600 0 L0 300" stroke="#E4002B" strokeWidth="18" />
        <path d="M300 0 V300 M0 150 H600" stroke="#fff" strokeWidth="100" />
        <path d="M300 0 V300 M0 150 H600" stroke="#E4002B" strokeWidth="60" />
      </g>
      <g fill="#fff">
        <polygon
          points="300,372 321,438 390,420 345,468 390,516 321,498 300,564 279,498 210,516 255,468 210,420 279,438"
        />
        <polygon
          points="860,114 870,144 902,136 880,158 902,180 870,172 860,202 850,172 818,180 840,158 818,136 850,144"
        />
        <polygon
          points="990,211 1001,244 1036,235 1012,259 1036,283 1001,274 990,307 979,274 944,283 968,259 944,235 979,244"
        />
        <polygon
          points="760,245 770,274 800,267 780,288 800,309 770,302 760,331 750,302 720,309 740,288 720,267 750,274"
        />
        <polygon points="860,311 867,332 890,326 875,341 890,356 867,350 860,371 853,350 830,356 845,341 830,326 853,332" />
        <polygon
          points="840,402 853,442 896,431 868,461 896,491 853,480 840,520 827,480 784,491 812,461 784,431 827,442"
        />
      </g>
    </svg>
  );
}

/** Kept for layout compatibility; flag is now self-contained. */
export function FlagDefs() {
  return null;
}
