import React from "react";

interface WebCornerProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
  color?: string;
  className?: string;
}

export const WebCorner: React.FC<WebCornerProps> = ({
  position = "top-left",
  size = 140,
  color = "var(--color-spidey-red)",
  className = "",
}) => {
  const getTransform = () => {
    switch (position) {
      case "top-right":
        return "scaleX(-1)";
      case "bottom-left":
        return "scaleY(-1)";
      case "bottom-right":
        return "scale(-1, -1)";
      default:
        return "none";
    }
  };

  const getPositionStyles = (): React.CSSProperties => {
    switch (position) {
      case "top-left":
        return { top: 0, left: 0 };
      case "top-right":
        return { top: 0, right: 0 };
      case "bottom-left":
        return { bottom: 0, left: 0 };
      case "bottom-right":
        return { bottom: 0, right: 0 };
    }
  };

  return (
    <div
      className={`web-corner-container ${className}`}
      style={{
        position: "absolute",
        ...getPositionStyles(),
        pointerEvents: "none",
        zIndex: 1,
        transform: getTransform(),
      }}
    >
      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 L100 0 Q60 40 0 100 Z" fill={color} fillOpacity="0.06" />
        <path d="M0 0 L100 0 Q50 25 0 50 Z" stroke={color} strokeWidth="1" strokeOpacity="0.4" fill="none" />
        <path d="M0 0 L75 0 Q37.5 37.5 0 75 Z" stroke={color} strokeWidth="1" strokeOpacity="0.3" fill="none" />
        <path d="M0 0 L50 0 Q25 25 0 50 Z" stroke={color} strokeWidth="1" strokeOpacity="0.5" fill="none" />
        <path d="M0 0 L25 0 Q12.5 12.5 0 25 Z" stroke={color} strokeWidth="1" strokeOpacity="0.7" fill="none" />
        <line x1="0" y1="0" x2="100" y2="0" stroke={color} strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="0" y1="0" x2="0" y2="100" stroke={color} strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="0" y1="0" x2="70.7" y2="70.7" stroke={color} strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="0" y1="0" x2="90" y2="35" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
        <line x1="0" y1="0" x2="35" y2="90" stroke={color} strokeWidth="1" strokeOpacity="0.3" />
      </svg>
    </div>
  );
};
