import React from "react";

interface SpiderSenseIndicatorProps {
  label?: string;
  className?: string;
  active?: boolean;
}

export const SpiderSenseIndicator: React.FC<SpiderSenseIndicatorProps> = ({
  label = "SPIDER-SENSE!",
  className = "",
  active = true,
}) => {
  if (!active) return null;

  return (
    <div
      className={`spider-sense-badge ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: "linear-gradient(135deg, #ffcc00 0%, #ff2a30 100%)",
        color: "#000000",
        fontFamily: "var(--font-comic)",
        fontSize: "0.95rem",
        fontWeight: "bold",
        padding: "0.2rem 0.6rem",
        borderRadius: "4px",
        boxShadow: "3px 3px 0px #000000",
        transform: "rotate(-3deg)",
        animation: "pulse-sense 1.5s infinite alternate ease-in-out",
        userSelect: "none",
      }}
    >
      <span style={{ fontSize: "1.1rem" }}>⚡</span>
      <span>{label}</span>
      <style>{`
        @keyframes pulse-sense {
          0% { transform: rotate(-3deg) scale(0.98); box-shadow: 2px 2px 0px #000; }
          100% { transform: rotate(-3deg) scale(1.05); box-shadow: 4px 4px 10px rgba(255, 204, 0, 0.6); }
        }
      `}</style>
    </div>
  );
};
