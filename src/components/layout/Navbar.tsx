import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Menu, X, ShieldAlert, Music } from "lucide-react";
import { useWebAudio } from "../../hooks/useWebAudio";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isPlaying, toggleMute, playThwip, playClick, trackInfo } = useWebAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  const handleNavClick = (id: string) => {
    playThwip();
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "var(--nav-height)",
          zIndex: 1000,
          background: scrolled ? "rgba(10, 10, 12, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--color-border-ink)" : "1px solid transparent",
          transition: "background 0.3s, backdrop-filter 0.3s, border-color 0.3s",
        }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "none",
              border: "none",
              padding: 0,
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "var(--color-spidey-red)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                boxShadow: "3px 3px 0px #000000",
                transform: "rotate(-3deg)",
              }}
            >
              <ShieldAlert size={22} color="#ffffff" />
            </div>
            <span
              className="font-comic"
              style={{
                fontSize: "1.8rem",
                color: "#ffffff",
                letterSpacing: "0.08em",
                lineHeight: 1,
              }}
            >
              RISHI<span style={{ color: "var(--color-spidey-red)" }}>.DEV</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="font-comic"
                  style={{
                    fontSize: "1.15rem",
                    letterSpacing: "0.08em",
                    color: isActive ? "#ffffff" : "var(--color-text-muted)",
                    background: "none",
                    border: "none",
                    position: "relative",
                    padding: "0.25rem 0",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={playClick}
                >
                  {item.label}
                  {/* Red Active & Hover Web Underline */}
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-2px",
                      left: 0,
                      width: isActive ? "100%" : "0%",
                      height: "3px",
                      background: "var(--color-spidey-red)",
                      boxShadow: "0 0 8px var(--color-spidey-red)",
                      transition: "width 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </button>
              );
            })}
          </nav>

          {/* Controls: Sunflower Music & Audio Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {/* Background Music Track Info Pill & Toggle */}
            <button
              onClick={() => {
                toggleMute();
                playClick();
              }}
              className="music-toggle-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.4rem 0.9rem",
                background: isPlaying ? "rgba(230, 36, 41, 0.15)" : "var(--color-bg-surface)",
                border: `1.5px solid ${isPlaying ? "var(--color-spidey-red)" : "var(--color-border-ink)"}`,
                borderRadius: "20px",
                color: isPlaying ? "#ffffff" : "var(--color-text-muted)",
                boxShadow: isPlaying ? "0 0 14px rgba(230, 36, 41, 0.35)" : "none",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {isPlaying ? (
                <div style={{ display: "flex", alignItems: "center", gap: "3px", height: "14px" }}>
                  <span className="eq-bar eq-bar-1" />
                  <span className="eq-bar eq-bar-2" />
                  <span className="eq-bar eq-bar-3" />
                </div>
              ) : (
                <Music size={15} color="var(--color-spidey-blue)" />
              )}

              <span
                className="font-comic"
                style={{
                  fontSize: "0.95rem",
                  letterSpacing: "0.06em",
                  color: isPlaying ? "#ffffff" : "var(--color-text-muted)",
                }}
              >
                {isPlaying ? `${trackInfo.title}` : "PLAY SOUNDTRACK"}
              </span>

              {isPlaying ? <Volume2 size={16} color="var(--color-spidey-red)" /> : <VolumeX size={16} />}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-hamburger"
              onClick={() => {
                setMobileOpen((prev) => !prev);
                playThwip();
              }}
              aria-label="Toggle Navigation Menu"
              style={{
                display: "none",
                width: "42px",
                height: "42px",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-spidey-red)",
                color: "#ffffff",
                border: "2px solid #000000",
                boxShadow: "3px 3px 0px #000000",
                borderRadius: "4px",
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(10, 10, 12, 0.98)",
            backdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.75rem",
            padding: "2rem",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-comic"
              style={{
                fontSize: "2.5rem",
                color: activeSection === item.id ? "var(--color-spidey-red)" : "#ffffff",
                letterSpacing: "0.1em",
                background: "none",
                border: "none",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* Equalizer Wave CSS Animation */}
      <style>{`
        .eq-bar {
          display: inline-block;
          width: 3px;
          background-color: var(--color-spidey-red);
          border-radius: 2px;
          animation: eq-bounce 1s infinite ease-in-out alternate;
        }
        .eq-bar-1 { height: 12px; animation-delay: 0.1s; }
        .eq-bar-2 { height: 16px; animation-delay: 0.3s; }
        .eq-bar-3 { height: 8px; animation-delay: 0.2s; }

        @keyframes eq-bounce {
          0% { height: 4px; }
          100% { height: 14px; }
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
