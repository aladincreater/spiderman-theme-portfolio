import React from "react";

interface HalftoneBackgroundProps {
  variant?: "dots" | "red-dots" | "grid";
  className?: string;
  opacity?: number;
}

export const HalftoneBackground: React.FC<HalftoneBackgroundProps> = ({
  variant = "dots",
  className = "",
  opacity = 0.5,
}) => {
  const getStyle = (): React.CSSProperties => {
    switch (variant) {
      case "red-dots":
        return {
          backgroundImage: "radial-gradient(rgba(230, 36, 41, 0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        };
      case "grid":
        return {
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        };
      default:
        return {
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        };
    }
  };

  return (
    <div
      className={`halftone-overlay ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity,
        zIndex: 0,
        ...getStyle(),
      }}
    />
  );
};
