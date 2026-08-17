import React from "react";
import { HalftoneBackground } from "./HalftoneBackground";
import { WebCorner } from "./WebCorner";

interface ComicPanelProps {
  children: React.ReactNode;
  title?: string;
  badgeText?: string;
  accentColor?: string;
  showCorners?: boolean;
  className?: string;
  onClick?: () => void;
}

export const ComicPanel: React.FC<ComicPanelProps> = ({
  children,
  title,
  badgeText,
  accentColor = "var(--color-spidey-red)",
  showCorners = true,
  className = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`comic-panel-container ${className}`}
      style={{
        position: "relative",
        background: "var(--color-bg-surface)",
        border: `2px solid var(--color-border-ink)`,
        boxShadow: `5px 5px 0px #000000`,
        borderRadius: "8px",
        padding: "1.75rem",
        overflow: "hidden",
        transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s, border-color 0.25s",
      }}
    >
      {/* Background Halftone Pattern */}
      <HalftoneBackground variant="dots" opacity={0.35} />

      {/* Decorative Web Corners */}
      {showCorners && (
        <>
          <WebCorner position="top-left" size={90} color={accentColor} />
          <WebCorner position="bottom-right" size={90} color={accentColor} />
        </>
      )}

      {/* Comic Panel Header Badge if supplied */}
      {(badgeText || title) && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem", position: "relative", zIndex: 2 }}>
          {badgeText && (
            <span
              className="font-comic"
              style={{
                background: accentColor,
                color: "#ffffff",
                padding: "0.2rem 0.6rem",
                fontSize: "0.95rem",
                letterSpacing: "0.08em",
                borderRadius: "2px",
                boxShadow: "2px 2px 0px #000000",
                transform: "rotate(-1deg)",
              }}
            >
              {badgeText}
            </span>
          )}
          {title && (
            <h3
              className="font-comic"
              style={{
                fontSize: "1.5rem",
                color: "#ffffff",
                letterSpacing: "0.04em",
                margin: 0,
              }}
            >
              {title}
            </h3>
          )}
        </div>
      )}

      {/* Panel Inner Content */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </div>
  );
};
