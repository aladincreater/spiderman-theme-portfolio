import React from "react";

interface AnimatedSectionTitleProps {
  chapterNumber?: string; // e.g. "CHAPTER 01"
  title: string; // e.g. "THE PERSON BEHIND THE MASK"
  subtitle?: string;
  accentColor?: string;
  centered?: boolean;
}

export const AnimatedSectionTitle: React.FC<AnimatedSectionTitleProps> = ({
  chapterNumber,
  title,
  subtitle,
  accentColor = "var(--color-spidey-red)",
  centered = false,
}) => {
  return (
    <div
      className="animated-section-title"
      style={{
        textAlign: centered ? "center" : "left",
        marginBottom: "3.5rem",
        position: "relative",
      }}
    >
      {/* Comic Chapter Header Badge */}
      {chapterNumber && (
        <div style={{ display: "inline-block", marginBottom: "0.5rem" }}>
          <span
            className="font-comic"
            style={{
              display: "inline-block",
              background: accentColor,
              color: "#ffffff",
              fontSize: "1.1rem",
              padding: "0.25rem 0.85rem",
              letterSpacing: "0.1em",
              transform: "skewX(-10deg)",
              boxShadow: "3px 3px 0px #000000",
            }}
          >
            {chapterNumber}
          </span>
        </div>
      )}

      {/* Main Title */}
      <h2
        className="font-comic"
        style={{
          fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
          lineHeight: 0.95,
          color: "#ffffff",
          letterSpacing: "0.04em",
          margin: "0.25rem 0 0.75rem 0",
          textShadow: "3px 3px 0px #000000",
          position: "relative",
          display: "inline-block",
        }}
      >
        {title}
        {/* Red Ink Accent Line under title */}
        <span
          style={{
            position: "absolute",
            bottom: "-6px",
            left: centered ? "50%" : "0",
            transform: centered ? "translateX(-50%)" : "none",
            width: "80px",
            height: "4px",
            background: accentColor,
            borderRadius: "2px",
            boxShadow: `0 0 10px ${accentColor}`,
          }}
        />
      </h2>

      {/* Subtitle / Description */}
      {subtitle && (
        <p
          style={{
            fontSize: "1.15rem",
            color: "var(--color-text-muted)",
            maxWidth: "650px",
            margin: centered ? "1.25rem auto 0 auto" : "1.25rem 0 0 0",
            fontWeight: 400,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
