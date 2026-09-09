import React, { useState, useEffect } from "react";
import { Volume2, Sparkles } from "lucide-react";
import { useWebAudio } from "../../hooks/useWebAudio";

interface SpiderIntroOverlayProps {
  onEnter?: () => void;
}

export const SpiderIntroOverlay: React.FC<SpiderIntroOverlayProps> = ({ onEnter }) => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isDismissing, setIsDismissing] = useState<boolean>(false);
  const { playMusic, playThwip, trackInfo } = useWebAudio();

  const handleEnter = () => {
    if (hasEntered || isDismissing) return;
    setIsDismissing(true);

    try {
      playThwip();
      playMusic();
    } catch {}

    if (onEnter) onEnter();

    setTimeout(() => {
      setHasEntered(true);
    }, 600);
  };

  // Allow pressing Space or Enter to enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        handleEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasEntered, isDismissing]);

  if (hasEntered) return null;

  return (
    <div
      onClick={handleEnter}
      role="button"
      tabIndex={0}
      aria-label="Click anywhere to enter Spider-Man portfolio with soundtrack"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "radial-gradient(circle at center, #151520 0%, #07070a 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        opacity: isDismissing ? 0 : 1,
        transform: isDismissing ? "scale(1.08)" : "scale(1)",
        pointerEvents: isDismissing ? "none" : "auto",
        overflow: "hidden",
        userSelect: "none",
      }}
    >
      {/* Spider-Sense Circular Pulses in Background */}
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          border: "2px dashed rgba(230, 36, 41, 0.35)",
          animation: "pulseGlow 2.5s infinite ease-in-out",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(0, 210, 255, 0.2)",
          animation: "pulseGlow 3.5s infinite ease-in-out reverse",
          pointerEvents: "none",
        }}
      />

      {/* Spider Mask Icon & Logo */}
      <div style={{ position: "relative", marginBottom: "1.5rem", textAlign: "center" }}>
        <div
          style={{
            fontSize: "4.5rem",
            filter: "drop-shadow(0 0 25px rgba(230, 36, 41, 0.8))",
            animation: "spiderBob 2.5s ease-in-out infinite",
          }}
        >
          🕷️
        </div>
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily: "var(--font-comic, 'Bebas Neue', sans-serif)",
          fontSize: "clamp(2rem, 5vw, 3.8rem)",
          color: "#ffffff",
          letterSpacing: "0.08em",
          textAlign: "center",
          textShadow: "0 0 30px rgba(230, 36, 41, 0.6), 3px 3px 0 #000000",
          marginBottom: "0.5rem",
        }}
      >
        RISHI KUMAR GOUD
      </div>

      <div
        style={{
          fontFamily: "var(--font-comic, 'Bebas Neue', sans-serif)",
          fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
          color: "var(--color-spidey-blue, #00d2ff)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "2.5rem",
          textAlign: "center",
        }}
      >
        Senior Frontend & MERN Stack Engineer
      </div>

      {/* Giant Interactive Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleEnter();
        }}
        className="btn-comic-primary"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          padding: "1rem 2.5rem",
          fontSize: "1.4rem",
          letterSpacing: "0.1em",
          backgroundColor: "var(--color-spidey-red, #e62429)",
          color: "#ffffff",
          border: "3px solid #000000",
          boxShadow: "5px 5px 0px #000000, 0 0 25px rgba(230, 36, 41, 0.6)",
          borderRadius: "6px",
          cursor: "pointer",
          transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          marginBottom: "2rem",
        }}
      >
        <Sparkles size={22} color="#ffe81f" />
        <span>ENTER MULTIVERSE</span>
        <Volume2 size={22} color="#ffffff" />
      </button>

      {/* Prompt Caption & Soundtrack Badge */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <div
          style={{
            fontSize: "0.95rem",
            color: "#ffffff",
            fontWeight: 500,
            letterSpacing: "0.06em",
            opacity: 0.9,
          }}
        >
          ⚡ Click anywhere to enter with cinematic audio
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 12px",
            background: "rgba(255, 255, 255, 0.08)",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            fontSize: "0.85rem",
            color: "var(--color-spidey-yellow, #ffe81f)",
          }}
        >
          🎵 Soundtrack: {trackInfo.title} — {trackInfo.artist}
        </div>
      </div>
    </div>
  );
};
