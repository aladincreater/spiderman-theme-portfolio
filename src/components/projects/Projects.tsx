import React, { useState } from "react";
import { AnimatedSectionTitle } from "../effects/AnimatedSectionTitle";
import { HalftoneBackground } from "../effects/HalftoneBackground";
import { WebCorner } from "../effects/WebCorner";
import { portfolioData } from "../../data/portfolio";
import type { Project } from "../../types/portfolio";
import { ProjectModal } from "./ProjectModal";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SocialIcon } from "../effects/SocialIcon";
import { useWebAudio } from "../../hooks/useWebAudio";

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { playThwip, playClick } = useWebAudio();

  return (
    <section
      id="projects"
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "var(--color-bg-surface)",
        overflow: "hidden",
      }}
    >
      <HalftoneBackground variant="red-dots" opacity={0.25} />
      <WebCorner position="bottom-left" size={240} color="var(--color-spidey-red)" />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <AnimatedSectionTitle
          chapterNumber="CHAPTER 04"
          title="MY MISSIONS"
          subtitle="Explore key enterprise applications, full-stack MERN portals, and creative engineering projects."
        />

        {/* Project Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                playThwip();
                setSelectedProject(project);
              }}
              onMouseEnter={playClick}
              className="comic-project-card"
              style={{
                position: "relative",
                background: "var(--color-bg-panel)",
                border: `2px solid var(--color-border-ink)`,
                borderRadius: "8px",
                boxShadow: "6px 6px 0px #000000",
                padding: "2rem",
                cursor: "pointer",
                overflow: "hidden",
                transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s, border-color 0.3s",
              }}
            >
              {/* Corner Web graphic */}
              <WebCorner position="top-right" size={100} color={project.imageAccent || "var(--color-spidey-red)"} />

              {/* Top Issue Tag */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  className="font-comic"
                  style={{
                    background: project.imageAccent || "var(--color-spidey-red)",
                    color: "#ffffff",
                    padding: "0.2rem 0.65rem",
                    fontSize: "0.95rem",
                    letterSpacing: "0.08em",
                    borderRadius: "2px",
                    boxShadow: "2px 2px 0px #000000",
                  }}
                >
                  {project.issueNumber}
                </span>

                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-spidey-blue)",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                  }}
                >
                  {project.category}
                </span>
              </div>

              {/* Project Title & Subtitle */}
              <h3
                className="font-comic project-card-title"
                style={{
                  fontSize: "2.2rem",
                  color: "#ffffff",
                  lineHeight: 1,
                  margin: "0 0 0.5rem 0",
                  letterSpacing: "0.04em",
                  transition: "transform 0.2s, color 0.2s",
                }}
              >
                {project.title}
              </h3>

              <h4
                style={{
                  fontSize: "1rem",
                  color: "var(--color-text-muted)",
                  margin: "0 0 1.25rem 0",
                  fontWeight: 400,
                  lineHeight: 1.4,
                }}
              >
                {project.subtitle}
              </h4>

              {/* Tagline / Description */}
              <p
                style={{
                  fontSize: "0.98rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                {project.description}
              </p>

              {/* Tech Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                  marginBottom: "2rem",
                }}
              >
                {project.technologies.slice(0, 5).map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: "var(--color-bg-dark)",
                      border: "1px solid var(--color-border-ink)",
                      color: "#ffffff",
                      fontSize: "0.8rem",
                      padding: "0.2rem 0.55rem",
                      borderRadius: "4px",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom Card Action Link */}
              <div
                className="project-action-bar"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px dashed var(--color-border-ink)",
                  paddingTop: "1rem",
                }}
              >
                <span
                  className="font-comic"
                  style={{
                    fontSize: "1.2rem",
                    color: project.imageAccent || "var(--color-spidey-red)",
                    letterSpacing: "0.08em",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  VIEW MISSION <ArrowRight size={18} />
                </span>

                <div style={{ display: "flex", gap: "8px", color: "var(--color-text-muted)" }}>
                  {project.githubUrl && <SocialIcon name="Github" size={18} />}
                  {project.liveUrl && <ExternalLink size={18} />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <style>{`
        .comic-project-card:hover {
          transform: translateY(-8px) rotate(-0.5deg);
          border-color: var(--color-spidey-red) !important;
          box-shadow: 0 16px 40px rgba(230, 36, 41, 0.3), 6px 6px 0px #000000 !important;
        }
        .comic-project-card:hover .project-card-title {
          color: var(--color-spidey-red) !important;
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
};
