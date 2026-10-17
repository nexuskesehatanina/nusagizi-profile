import type { ReactNode } from "react";

/** Pembungkus SVG 24x24 yang dipakai berulang (stroke diatur lewat CSS). */
export function Svg({ children }: { children: ReactNode }) {
  return <svg viewBox="0 0 24 24">{children}</svg>;
}

export function Check() {
  return (
    <Svg>
      <path d="M4 12.5l5 5L20 6.5" />
    </Svg>
  );
}

export function ArrowRight() {
  return (
    <Svg>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  );
}

export function Play() {
  return (
    <Svg>
      <path d="M8 5l11 7-11 7z" />
    </Svg>
  );
}

export function ArrowUp() {
  return (
    <Svg>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </Svg>
  );
}

export function LogoMark() {
  return (
    <span className="mark" aria-hidden="true">
      <Svg>
        <path d="M3 18l5-5 3 3 6.5-8" />
        <path d="M14 8h4v4" />
      </Svg>
    </span>
  );
}
