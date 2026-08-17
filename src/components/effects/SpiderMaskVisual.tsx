import React, { useState, useEffect } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface SpiderMaskVisualProps {
  size?: number;
  className?: string;
}

export const SpiderMaskVisual: React.FC<SpiderMaskVisualProps> = ({
  size = 380,
  className = "",
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const isReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const mouseX = (e.clientX - windowWidth / 2) / (windowWidth / 2);
      const mouseY = (e.clientY - windowHeight / 2) / (windowHeight / 2);

      setTilt({
        x: mouseX * 18, // Max 18 deg Y rotation
        y: -mouseY * 14, // Max 14 deg X rotation
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isReducedMotion]);

  return (
    <div
      className={`spider-mask-wrapper ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size * 1.25}px`,
        margin: "0 auto",
        perspective: "1000px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "auto",
        zIndex: 4,
      }}
    >
      {/* 3D Tilt Wrapper */}
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: isReducedMotion
            ? "none"
            : `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${isHovered ? 1.05 : 1})`,
          transition: isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
          filter: "drop-shadow(0 20px 35px rgba(230, 36, 41, 0.45))",
        }}
      >
        <svg
          viewBox="0 0 200 250"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Mask Red Gradient */}
            <radialGradient id="spideyRedGrad" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#ff2a30" />
              <stop offset="65%" stopColor="#e62429" />
              <stop offset="100%" stopColor="#800010" />
            </radialGradient>

            {/* Glowing Eye Lens Gradient */}
            <linearGradient id="eyeLensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* Emissive Eye Glow Filter */}
            <filter id="eyeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Spider-Man Head Silhouette */}
          <path
            d="M 100 12 C 160 12, 185 60, 185 130 C 185 205, 142 245, 100 245 C 58 245, 15 205, 15 130 C 15 60, 40 12, 100 12 Z"
            fill="url(#spideyRedGrad)"
            stroke="#0a0a0c"
            strokeWidth="3.5"
          />

          {/* 2. Web Lines Radiating from Nose Bridge (100, 125) */}
          <g stroke="#1a0003" strokeWidth="1.2" opacity="0.65">
            {/* Radial Spokes */}
            <line x1="100" y1="125" x2="100" y2="12" />
            <line x1="100" y1="125" x2="140" y2="18" />
            <line x1="100" y1="125" x2="170" y2="45" />
            <line x1="100" y1="125" x2="184" y2="90" />
            <line x1="100" y1="125" x2="184" y2="140" />
            <line x1="100" y1="125" x2="168" y2="190" />
            <line x1="100" y1="125" x2="135" y2="232" />
            <line x1="100" y1="125" x2="100" y2="245" />
            <line x1="100" y1="125" x2="65" y2="232" />
            <line x1="100" y1="125" x2="32" y2="190" />
            <line x1="100" y1="125" x2="16" y2="140" />
            <line x1="100" y1="125" x2="16" y2="90" />
            <line x1="100" y1="125" x2="30" y2="45" />
            <line x1="100" y1="125" x2="60" y2="18" />

            {/* Concentric Scalloped Web Arcs - Inner Ring */}
            <path d="M 88 100 Q 100 106 112 100" fill="none" />
            <path d="M 112 100 Q 120 110 122 122" fill="none" />
            <path d="M 122 122 Q 120 134 112 142" fill="none" />
            <path d="M 112 142 Q 100 148 88 142" fill="none" />
            <path d="M 88 142 Q 80 134 78 122" fill="none" />
            <path d="M 78 122 Q 80 110 88 100" fill="none" />

            {/* Middle Web Ring */}
            <path d="M 75 70 Q 100 80 125 70" fill="none" />
            <path d="M 125 70 Q 148 85 152 110" fill="none" />
            <path d="M 152 110 Q 155 140 138 165" fill="none" />
            <path d="M 138 165 Q 100 185 62 165" fill="none" />
            <path d="M 62 165 Q 45 140 48 110" fill="none" />
            <path d="M 48 110 Q 52 85 75 70" fill="none" />

            {/* Outer Web Ring */}
            <path d="M 58 40 Q 100 52 142 40" fill="none" />
            <path d="M 142 40 Q 172 65 178 105" fill="none" />
            <path d="M 178 105 Q 182 155 155 195" fill="none" />
            <path d="M 155 195 Q 100 222 45 195" fill="none" />
            <path d="M 45 195 Q 18 155 22 105" fill="none" />
            <path d="M 22 105 Q 28 65 58 40" fill="none" />
          </g>

          {/* 3. Iconic Angled Spider-Man Eyes */}
          {/* Left Eye Black Outline Rim */}
          <path
            d="M 94 116 L 36 78 C 24 112 30 156 68 182 C 86 194 96 172 94 116 Z"
            fill="#09090d"
            stroke="#000000"
            strokeWidth="3"
          />
          {/* Left Eye White Lens */}
          <path
            d="M 90 120 L 42 86 C 32 114 36 150 68 174 C 82 184 91 166 90 120 Z"
            fill="url(#eyeLensGrad)"
            filter="url(#eyeGlow)"
          />

          {/* Right Eye Black Outline Rim */}
          <path
            d="M 106 116 L 164 78 C 176 112 170 156 132 182 C 114 194 104 172 106 116 Z"
            fill="#09090d"
            stroke="#000000"
            strokeWidth="3"
          />
          {/* Right Eye White Lens */}
          <path
            d="M 110 120 L 158 86 C 168 114 164 150 132 174 C 118 184 109 166 110 120 Z"
            fill="url(#eyeLensGrad)"
            filter="url(#eyeGlow)"
          />

          {/* Eye Reflection Highlights */}
          <ellipse cx="62" cy="115" rx="10" ry="18" fill="#ffffff" opacity="0.35" transform="rotate(-15 62 115)" />
          <ellipse cx="138" cy="115" rx="10" ry="18" fill="#ffffff" opacity="0.35" transform="rotate(15 138 115)" />
        </svg>
      </div>
    </div>
  );
};
