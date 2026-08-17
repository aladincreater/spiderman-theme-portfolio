import React from "react";

interface SpiderWebProps {
  className?: string;
  color?: string;
  size?: number;
  opacity?: number;
}

export const SpiderWeb: React.FC<SpiderWebProps> = ({
  className = "",
  color = "var(--color-spidey-red)",
  size = 300,
  opacity = 0.2,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`spider-web-svg ${className}`}
      style={{ opacity, pointerEvents: "none" }}
    >
      {/* Radial Spokes */}
      <line x1="100" y1="100" x2="100" y2="0" stroke={color} strokeWidth="1.5" />
      <line x1="100" y1="100" x2="200" y2="100" stroke={color} strokeWidth="1.5" />
      <line x1="100" y1="100" x2="100" y2="200" stroke={color} strokeWidth="1.5" />
      <line x1="100" y1="100" x2="0" y2="100" stroke={color} strokeWidth="1.5" />
      <line x1="100" y1="100" x2="170.7" y2="29.3" stroke={color} strokeWidth="1.5" />
      <line x1="100" y1="100" x2="170.7" y2="170.7" stroke={color} strokeWidth="1.5" />
      <line x1="100" y1="100" x2="29.3" y2="170.7" stroke={color} strokeWidth="1.5" />
      <line x1="100" y1="100" x2="29.3" y2="29.3" stroke={color} strokeWidth="1.5" />

      {/* Concentric Web Rings */}
      <path d="M 100 80 Q 114 86 120 100 Q 114 114 100 120 Q 86 114 80 100 Q 86 86 100 80 Z" stroke={color} strokeWidth="1" fill="none" />
      <path d="M 100 60 Q 128 72 140 100 Q 128 128 100 140 Q 72 128 60 100 Q 72 72 100 60 Z" stroke={color} strokeWidth="1" fill="none" />
      <path d="M 100 40 Q 142 58 160 100 Q 142 142 100 160 Q 58 142 40 100 Q 58 58 100 40 Z" stroke={color} strokeWidth="1" fill="none" />
      <path d="M 100 20 Q 156 44 180 100 Q 156 156 100 180 Q 44 156 20 100 Q 44 44 100 20 Z" stroke={color} strokeWidth="1" fill="none" fillOpacity="0.05" />

      {/* Center Spider Emblem Dot */}
      <circle cx="100" cy="100" r="4" fill={color} />
    </svg>
  );
};
