import React from "react";
import { AnimatedSectionTitle } from "../effects/AnimatedSectionTitle";
import { ComicPanel } from "../effects/ComicPanel";
import { SpiderWeb } from "../effects/SpiderWeb";
import { HalftoneBackground } from "../effects/HalftoneBackground";
import { portfolioData } from "../../data/portfolio";
import { CheckCircle2, Zap } from "lucide-react";
import { useWebAudio } from "../../hooks/useWebAudio";

export const About: React.FC = () => {
  const { personal } = portfolioData;
  const { playClick } = useWebAudio();

  const corePhilosophy = [
    { title: "Frontend Specialization", desc: "5+ years architecting high-performance React & TypeScript web applications." },
    { title: "MERN Stack Mastery", desc: "Building seamless end-to-end applications with MongoDB, Express, React, and Node.js." },
    { title: "Enterprise Scaling", desc: "Optimizing state workflows, virtual list rendering, and zero-lag data structures." },
    { title: "Clean UI/UX Advocacy", desc: "Combining accessible WCAG standards with vibrant modern design and smooth micro-interactions." },
  ];

  return (
    <section
      id="about"
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "var(--color-bg-dark)",
        overflow: "hidden",
      }}
    >
      <HalftoneBackground variant="dots" opacity={0.3} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Animated Section Header */}
        <AnimatedSectionTitle
          chapterNumber="CHAPTER 01"
          title="THE PERSON BEHIND THE MASK"
          subtitle="Discover the engineering philosophy, experience, and drive powering every line of code."
        />

        {/* Content Layout Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          {/* Left Side: Interactive Profile Radar Visual */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div
              style={{
                position: "relative",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background: "var(--color-bg-surface)",
                border: "3px solid var(--color-spidey-red)",
                boxShadow: "0 0 40px rgba(230, 36, 41, 0.35), inset 0 0 20px rgba(0, 0, 0, 0.8)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              {/* Outer Web Ring Graphic */}
              <div
                style={{
                  position: "absolute",
                  inset: "-20px",
                  pointerEvents: "none",
                  opacity: 0.4,
                  animation: "spin-web 30s linear infinite",
                }}
              >
                <SpiderWeb size={360} color="var(--color-spidey-red)" opacity={0.6} />
              </div>

              {/* Central Developer Avatar Crest */}
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--color-spidey-red) 0%, #800010 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "4px 4px 0px #000000",
                  marginBottom: "1rem",
                  border: "2px solid #ffffff",
                }}
              >
                <span className="font-comic" style={{ fontSize: "2.2rem", color: "#ffffff" }}>
                  RKG
                </span>
              </div>

              <h4 className="font-comic" style={{ fontSize: "1.6rem", color: "#ffffff", margin: "0.2rem 0" }}>
                {personal.name}
              </h4>
              <p style={{ fontSize: "0.95rem", color: "var(--color-spidey-blue)", margin: 0 }}>
                {personal.role}
              </p>

              {/* Status Badge */}
              <div
                style={{
                  marginTop: "1rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(0, 240, 255, 0.1)",
                  border: "1px solid var(--color-spidey-blue)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  color: "#ffffff",
                }}
              >
                <Zap size={14} color="var(--color-spidey-blue)" />
                <span>5+ Years Experience</span>
              </div>
            </div>

            <style>{`
              @keyframes spin-web {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}</style>
          </div>

          {/* Right Side: Developer Bio & Key Pillars */}
          <div>
            <ComicPanel badgeText="ORIGIN STORY" accentColor="var(--color-spidey-red)">
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.7,
                  color: "var(--color-text-secondary)",
                  marginBottom: "1.75rem",
                }}
              >
                {personal.bio}
              </p>

              {/* Core Philosophy Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                  gap: "1.25rem",
                  marginBottom: "1.75rem",
                }}
              >
                {corePhilosophy.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={playClick}
                    style={{
                      background: "rgba(18, 18, 24, 0.7)",
                      border: "1px solid var(--color-border-ink)",
                      padding: "1rem",
                      borderRadius: "6px",
                      transition: "border-color 0.2s, transform 0.2s",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.35rem" }}>
                      <CheckCircle2 size={18} color="var(--color-spidey-red)" />
                      <h5 className="font-comic" style={{ fontSize: "1.15rem", color: "#ffffff", margin: 0 }}>
                        {item.title}
                      </h5>
                    </div>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0, lineHeight: 1.4 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Key Metrics Strip */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                  borderTop: "1px dashed var(--color-border-ink)",
                  paddingTop: "1.25rem",
                  textAlign: "center",
                }}
              >
                {personal.stats.slice(0, 3).map((stat, idx) => (
                  <div key={idx}>
                    <div className="font-comic" style={{ fontSize: "2rem", color: "var(--color-spidey-red)", lineHeight: 1 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", textTransform: "uppercase", marginTop: "2px" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ComicPanel>
          </div>
        </div>
      </div>
    </section>
  );
};
