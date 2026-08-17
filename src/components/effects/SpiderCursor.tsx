import React, { useEffect, useState } from "react";

export const SpiderCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch screen or small mobile
    if (window.matchMedia("(max-width: 1024px)").matches || "ontouchstart" in window) {
      return;
    }

    document.documentElement.classList.add("custom-cursor-enabled");

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest(".comic-card") ||
          target.getAttribute("role") === "button")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  // Smooth lerp trailing circle effect
  useEffect(() => {
    let animationFrameId: number;

    const updateTrailing = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.2,
          y: prev.y + dy * 0.2,
        };
      });
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <div className="spider-cursor-container" style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: 9999 }}>
      {/* Central Red Web Dot */}
      <div
        style={{
          position: "fixed",
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? "12px" : "8px",
          height: isHovered ? "12px" : "8px",
          backgroundColor: "#ff2a30",
          borderRadius: "50%",
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
          transition: "width 0.2s, height 0.2s, transform 0.1s, background-color 0.2s",
          boxShadow: "0 0 10px #ff2a30",
        }}
      />

      {/* Outer Web Ring with Spidey Crosshair lines */}
      <div
        style={{
          position: "fixed",
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? "46px" : "32px",
          height: isHovered ? "46px" : "32px",
          border: `1.5px dashed ${isHovered ? "#00f0ff" : "rgba(230, 36, 41, 0.6)"}`,
          borderRadius: "50%",
          transform: `translate(-50%, -50%) rotate(${isHovered ? "45deg" : "0deg"}) scale(${isClicking ? 0.85 : 1})`,
          transition: "width 0.25s, height 0.25s, border-color 0.25s, transform 0.3s",
        }}
      >
        {/* Subtle Web Crosshair Dots */}
        <div style={{ position: "absolute", top: "-3px", left: "50%", transform: "translateX(-50%)", width: "3px", height: "3px", background: "#ff2a30", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "-3px", left: "50%", transform: "translateX(-50%)", width: "3px", height: "3px", background: "#ff2a30", borderRadius: "50%" }} />
        <div style={{ position: "absolute", left: "-3px", top: "50%", transform: "translateY(-50%)", width: "3px", height: "3px", background: "#ff2a30", borderRadius: "50%" }} />
        <div style={{ position: "absolute", right: "-3px", top: "50%", transform: "translateY(-50%)", width: "3px", height: "3px", background: "#ff2a30", borderRadius: "50%" }} />
      </div>
    </div>
  );
};
