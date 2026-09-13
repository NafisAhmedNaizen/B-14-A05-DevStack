import { useState } from "react";

const FALLBACK_PALETTE = [
  "bg-orange-100 text-orange-600",
  "bg-pink-100 text-pink-600",
  "bg-violet-100 text-violet-600",
  "bg-blue-100 text-blue-600",
  "bg-emerald-100 text-emerald-600",
  "bg-cyan-100 text-cyan-600",
];

function paletteFor(name) {
  const index = name.charCodeAt(0) % FALLBACK_PALETTE.length;
  return FALLBACK_PALETTE[index];
}

export default function TechIcon({ name, icon, size = 24, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={`grid place-items-center rounded-md font-bold ${paletteFor(name)} ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.42 }}
        aria-hidden="true"
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    <img
      src={icon}
      alt=""
      width={size}
      height={size}
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
