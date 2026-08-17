import React from "react";
import { portfolioData } from "../../data/portfolio";
import { ArrowUp, ShieldAlert } from "lucide-react";
import { useWebAudio } from "../../hooks/useWebAudio";

export const Footer: React.FC = () => {
  const { personal, contact } = portfolioData;
  const { playThwip, playClick } = useWebAudio();

  const scrollToTop = () => {
    playThwip();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#070709",
        borderTop: "1px solid var(--color-border-ink)",
        padding: "4rem 0 2.5rem 0",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            paddingBottom: "2.5rem",
            borderBottom: "1px dashed var(--color-border-ink)",
          }}
        >
          {/* Brand & Tagline */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.5rem" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  background: "var(--color-spidey-red)",
                  borderRadius: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "rotate(-3deg)",
                }}
              >
                <ShieldAlert size={18} color="#ffffff" />
              </div>
              <span className="font-comic" style={{ fontSize: "1.8rem", color: "#ffffff", letterSpacing: "0.06em" }}>
                {personal.name.toUpperCase()}
              </span>
            </div>
            <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", margin: 0 }}>
              {personal.role} • 5+ Years Experience
            </p>
          </div>

          {/* Quote & Tech Craft */}
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "0.98rem", color: "var(--color-text-secondary)", margin: "0 0 0.25rem 0" }}>
              Built with React, TypeScript & a little web-slinging energy.
            </p>
            <span style={{ fontSize: "0.85rem", color: "var(--color-spidey-blue)", fontFamily: "var(--font-mono)" }}>
              // WITH GREAT CODE COMES GREAT PERFORMANCE
            </span>
          </div>

          {/* Back To Top Action */}
          <div>
            <button
              onClick={scrollToTop}
              onMouseEnter={playClick}
              title="Back to Top"
              className="font-comic"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.6rem 1.25rem",
                background: "var(--color-bg-surface)",
                color: "#ffffff",
                border: "1.5px solid var(--color-border-ink)",
                boxShadow: "3px 3px 0px #000000",
                borderRadius: "4px",
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={18} color="var(--color-spidey-red)" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Social Links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            paddingTop: "1.75rem",
            fontSize: "0.88rem",
            color: "var(--color-text-muted)",
          }}
        >
          <div>© {new Date().getFullYear()} Rishi Kumar Goud. All rights reserved.</div>

          <div style={{ display: "flex", gap: "1.25rem" }}>
            {contact.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--color-text-muted)", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-spidey-red)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
