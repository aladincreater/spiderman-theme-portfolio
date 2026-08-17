import type { Project } from "../../types/portfolio";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { SocialIcon } from "../effects/SocialIcon";
import { HalftoneBackground } from "../effects/HalftoneBackground";
import { useWebAudio } from "../../hooks/useWebAudio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { playClick, playThwip } = useWebAudio();

  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10, 10, 12, 0.85)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
      onClick={() => {
        playClick();
        onClose();
      }}
    >
      <div
        className="comic-modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "750px",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "var(--color-bg-surface)",
          border: `3px solid ${project.imageAccent || "var(--color-spidey-red)"}`,
          boxShadow: `8px 8px 0px #000000, 0 0 30px ${project.imageAccent || "rgba(230, 36, 41, 0.4)"}`,
          borderRadius: "8px",
          padding: "2rem",
        }}
      >
        <HalftoneBackground variant="dots" opacity={0.3} />

        {/* Close Button */}
        <button
          onClick={() => {
            playClick();
            onClose();
          }}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            width: "38px",
            height: "38px",
            background: "var(--color-spidey-red)",
            color: "#ffffff",
            border: "2px solid #000000",
            borderRadius: "4px",
            boxShadow: "3px 3px 0px #000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <X size={22} />
        </button>

        {/* Header */}
        <div style={{ position: "relative", zIndex: 2, marginBottom: "1.5rem" }}>
          <span
            className="font-comic"
            style={{
              background: project.imageAccent || "var(--color-spidey-red)",
              color: "#ffffff",
              padding: "0.25rem 0.75rem",
              fontSize: "1rem",
              letterSpacing: "0.1em",
              borderRadius: "2px",
              boxShadow: "2px 2px 0px #000000",
              display: "inline-block",
              marginBottom: "0.75rem",
            }}
          >
            {project.issueNumber} — {project.category}
          </span>

          <h2
            className="font-comic"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#ffffff",
              lineHeight: 1,
              margin: "0 0 0.5rem 0",
            }}
          >
            {project.title}
          </h2>

          <h4
            style={{
              fontSize: "1.15rem",
              color: "var(--color-spidey-blue)",
              margin: 0,
              fontWeight: 500,
            }}
          >
            {project.subtitle}
          </h4>
        </div>

        {/* Description & Long Overview */}
        <div style={{ position: "relative", zIndex: 2, marginBottom: "1.75rem" }}>
          <p
            style={{
              fontSize: "1.15rem",
              color: "#ffffff",
              fontStyle: "italic",
              borderLeft: `3px solid ${project.imageAccent || "var(--color-spidey-red)"}`,
              paddingLeft: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            "{project.tagline}"
          </p>

          <p style={{ fontSize: "1.05rem", color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
            {project.longDescription}
          </p>
        </div>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div style={{ position: "relative", zIndex: 2, marginBottom: "1.75rem" }}>
            <h4 className="font-comic" style={{ fontSize: "1.4rem", color: "#ffffff", marginBottom: "0.75rem" }}>
              MISSION HIGHLIGHTS
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {project.highlights.map((highlight, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <CheckCircle2 size={18} color="var(--color-spidey-red)" style={{ marginTop: "2px", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.95rem", color: "var(--color-text-muted)" }}>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div style={{ position: "relative", zIndex: 2, marginBottom: "2rem" }}>
          <h4 className="font-comic" style={{ fontSize: "1.4rem", color: "#ffffff", marginBottom: "0.75rem" }}>
            TECHS USED
          </h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                style={{
                  background: "var(--color-bg-dark)",
                  border: "1px solid var(--color-border-ink)",
                  color: "#ffffff",
                  fontSize: "0.88rem",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "4px",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ position: "relative", zIndex: 2, display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playThwip}
              className="font-comic"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.75rem 1.75rem",
                background: "var(--color-spidey-red)",
                color: "#ffffff",
                fontSize: "1.2rem",
                letterSpacing: "0.08em",
                border: "2px solid #000000",
                boxShadow: "4px 4px 0px #000000",
                borderRadius: "4px",
              }}
            >
              <ExternalLink size={18} />
              <span>LIVE DEMO</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playThwip}
              className="font-comic"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.75rem 1.75rem",
                background: "var(--color-bg-dark)",
                color: "#ffffff",
                fontSize: "1.2rem",
                letterSpacing: "0.08em",
                border: "2px solid var(--color-border-ink)",
                boxShadow: "4px 4px 0px #000000",
                borderRadius: "4px",
              }}
            >
              <SocialIcon name="Github" size={18} />
              <span>VIEW CODE</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
