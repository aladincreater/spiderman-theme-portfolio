import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Mail, ChevronDown, Sparkles } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { SpiderHeroCanvas } from "../effects/SpiderHeroCanvas";
import { SpiderMaskVisual } from "../effects/SpiderMaskVisual";
import { SpiderWeb } from "../effects/SpiderWeb";
import { WebCorner } from "../effects/WebCorner";
import { HalftoneBackground } from "../effects/HalftoneBackground";
import { SpiderSenseIndicator } from "../effects/SpiderSenseIndicator";
import { useWebAudio } from "../../hooks/useWebAudio";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const redLineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);
  const { playThwip, playClick } = useWebAudio();

  const { personal } = portfolioData;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Draw Red Comic Accent Line
      tl.to(redLineRef.current, {
        scaleX: 1,
        duration: 0.7,
        ease: "power4.inOut",
      })
      // 2. Badge & Chapter Title reveal
      .fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5 },
        "-=0.2"
      )
      // 3. Hero Headline reveal
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 40, skewY: 3 },
        { opacity: 1, y: 0, skewY: 0, duration: 0.8 },
        "-=0.3"
      )
      // 4. Subtitle & Bio
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      // 5. 3D Mask Reveal
      .fromTo(
        maskRef.current,
        { opacity: 0, scale: 0.7, rotate: -10 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: "back.out(1.4)" },
        "-=0.5"
      )
      // 6. CTA Buttons
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.4"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "calc(var(--nav-height) + 1rem)",
        paddingBottom: "3rem",
        overflow: "hidden",
        background: "radial-gradient(circle at 50% 40%, #161622 0%, #0a0a0c 80%)",
      }}
    >
      {/* Dynamic Ambient Web Particles Backdrop */}
      <SpiderHeroCanvas />

      {/* Halftone Overlay & Vector Corner Webs */}
      <HalftoneBackground variant="dots" opacity={0.35} />
      <WebCorner position="top-left" size={220} color="var(--color-spidey-red)" />
      <WebCorner position="top-right" size={220} color="var(--color-spidey-blue)" />

      {/* Central Red Comic Line Slice Animation */}
      <div
        ref={redLineRef}
        style={{
          position: "absolute",
          top: "14%",
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, transparent 0%, var(--color-spidey-red) 50%, transparent 100%)",
          transformOrigin: "center left",
          transform: "scaleX(0)",
          zIndex: 2,
          boxShadow: "0 0 15px var(--color-spidey-red)",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Column: Hero Text Content */}
          <div style={{ textAlign: "left" }}>
            {/* Top Comic Chapter Badge */}
            <div ref={badgeRef} style={{ marginBottom: "1rem" }}>
              <SpiderSenseIndicator label="ISSUE #2026 — ORIGIN" />
            </div>

            {/* Hero Name Typography */}
            <h1
              ref={titleRef}
              className="font-comic"
              style={{
                fontSize: "clamp(3.5rem, 6.5vw, 6.5rem)",
                lineHeight: 0.92,
                letterSpacing: "0.04em",
                margin: "0 0 1.25rem 0",
                textShadow: "4px 4px 0px #000000, 0 0 35px rgba(230, 36, 41, 0.4)",
              }}
            >
              <span style={{ color: "#ffffff" }}>RISHI KUMAR </span>
              <span style={{ color: "var(--color-spidey-red)" }}>GOUD</span>
            </h1>

            {/* Role Title Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(18, 18, 24, 0.9)",
                border: "1.5px solid var(--color-spidey-red)",
                padding: "0.45rem 1.25rem",
                borderRadius: "50px",
                boxShadow: "4px 4px 0px #000000, 0 0 20px rgba(230, 36, 41, 0.25)",
                marginBottom: "1.5rem",
              }}
            >
              <Sparkles size={18} color="var(--color-spidey-blue)" />
              <span
                className="font-comic"
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                  letterSpacing: "0.08em",
                  color: "#ffffff",
                }}
              >
                {personal.role}
              </span>
            </div>

            {/* Supporting Copy */}
            <p
              ref={subtitleRef}
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
                color: "var(--color-text-secondary)",
                maxWidth: "600px",
                lineHeight: 1.6,
                marginBottom: "2.25rem",
                fontWeight: 400,
              }}
            >
              {personal.heroSubheadline}
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1.25rem",
              }}
            >
              {/* Primary CTA: View My Work */}
              <button
                onClick={() => {
                  playThwip();
                  onNavigate("projects");
                }}
                onMouseEnter={playClick}
                className="font-comic"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "1.3rem",
                  letterSpacing: "0.08em",
                  padding: "0.8rem 2rem",
                  background: "var(--color-spidey-red)",
                  color: "#ffffff",
                  border: "2px solid #000000",
                  boxShadow: "5px 5px 0px #000000",
                  borderRadius: "4px",
                  transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
                }}
              >
                <span>VIEW MY WORK</span>
                <ArrowRight size={22} />
              </button>

              {/* Secondary CTA: Contact Me */}
              <button
                onClick={() => {
                  playThwip();
                  onNavigate("contact");
                }}
                onMouseEnter={playClick}
                className="font-comic"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "1.3rem",
                  letterSpacing: "0.08em",
                  padding: "0.8rem 2rem",
                  background: "var(--color-bg-surface)",
                  color: "#ffffff",
                  border: "2px solid var(--color-border-ink)",
                  boxShadow: "5px 5px 0px #000000",
                  borderRadius: "4px",
                  transition: "transform 0.2s, border-color 0.2s",
                }}
              >
                <Mail size={20} color="var(--color-spidey-blue)" />
                <span>CONTACT ME</span>
              </button>
            </div>
          </div>

          {/* Right Column: Authentic 3D Interactive Spider-Man Superhero Mask */}
          <div ref={maskRef} style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            <SpiderMaskVisual size={340} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            onClick={() => {
              playThwip();
              onNavigate("about");
            }}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-text-muted)",
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.95rem",
              fontFamily: "var(--font-comic)",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown
              size={20}
              color="var(--color-spidey-red)"
              style={{ animation: "bounce-down 1.8s infinite ease-in-out" }}
            />
          </button>
        </div>
      </div>

      {/* Decorative Web graphic bottom corner */}
      <div style={{ position: "absolute", bottom: "-50px", right: "-50px", zIndex: 3, opacity: 0.25, pointerEvents: "none" }}>
        <SpiderWeb size={360} color="var(--color-spidey-red)" />
      </div>

      <style>{`
        @keyframes bounce-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
};
