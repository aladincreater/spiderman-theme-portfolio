import React, { useState } from "react";
import { AnimatedSectionTitle } from "../effects/AnimatedSectionTitle";
import { HalftoneBackground } from "../effects/HalftoneBackground";
import { WebCorner } from "../effects/WebCorner";
import { portfolioData } from "../../data/portfolio";
import { SocialIcon } from "../effects/SocialIcon";
import {
  Code2,
  FileCode,
  Zap,
  Database,
  Sparkles,
  Globe,
  Palette,
  Server,
  Cpu,
  Network,
  Table,
  HardDrive,
  GitBranch,
  Workflow,
  Terminal,
  Layers,
  Wrench,
} from "lucide-react";
import { useWebAudio } from "../../hooks/useWebAudio";

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { playThwip, playClick } = useWebAudio();

  // Helper map for rendering Lucide icons dynamically
  const renderIcon = (iconName?: string) => {
    const props = { size: 24, color: "var(--color-spidey-red)" };
    switch (iconName) {
      case "Code2": return <Code2 {...props} />;
      case "FileCode": return <FileCode {...props} />;
      case "Zap": return <Zap {...props} />;
      case "Database": return <Database {...props} />;
      case "Sparkles": return <Sparkles {...props} />;
      case "Globe": return <Globe {...props} />;
      case "Palette": return <Palette {...props} />;
      case "Server": return <Server {...props} />;
      case "Cpu": return <Cpu {...props} />;
      case "Network": return <Network {...props} />;
      case "Table": return <Table {...props} />;
      case "HardDrive": return <HardDrive {...props} />;
      case "GitBranch": return <GitBranch {...props} />;
      case "Github": return <SocialIcon name="Github" size={24} color="var(--color-spidey-red)" />;
      case "Workflow": return <Workflow {...props} />;
      case "Terminal": return <Terminal {...props} />;
      default: return <Layers {...props} />;
    }
  };

  const categories = [
    { id: "all", label: "ALL POWERS" },
    { id: "frontend", label: "FRONTEND" },
    { id: "backend", label: "BACKEND" },
    { id: "database", label: "DATABASE" },
    { id: "tools", label: "TOOLS" },
  ];

  const filteredCategories =
    selectedCategory === "all"
      ? skills
      : skills.filter((c) => c.id === selectedCategory);

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "var(--color-bg-surface)",
        overflow: "hidden",
      }}
    >
      <HalftoneBackground variant="red-dots" opacity={0.25} />
      <WebCorner position="top-right" size={200} color="var(--color-spidey-red)" />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <AnimatedSectionTitle
          chapterNumber="CHAPTER 02"
          title="MY SUPERPOWERS"
          subtitle="Battle-tested technologies and architectural tools in my engineering arsenal."
        />

        {/* Category Filter Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playThwip();
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={playClick}
                className="font-comic"
                style={{
                  fontSize: "1.1rem",
                  letterSpacing: "0.08em",
                  padding: "0.4rem 1.25rem",
                  background: isSelected ? "var(--color-spidey-red)" : "var(--color-bg-dark)",
                  color: isSelected ? "#ffffff" : "var(--color-text-muted)",
                  border: `2px solid ${isSelected ? "var(--color-spidey-red)" : "var(--color-border-ink)"}`,
                  boxShadow: isSelected ? "3px 3px 0px #000000" : "none",
                  borderRadius: "4px",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skill Category Cards Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {filteredCategories.map((group) => (
            <div key={group.id}>
              {/* Category Subhead */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "1.5rem",
                  borderBottom: "1px dashed var(--color-border-ink)",
                  paddingBottom: "0.5rem",
                }}
              >
                <Wrench size={22} color="var(--color-spidey-blue)" />
                <h3 className="font-comic" style={{ fontSize: "1.8rem", color: "#ffffff", margin: 0 }}>
                  {group.category}
                </h3>
              </div>

              {/* Skills Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={playClick}
                    className="skill-card-item"
                    style={{
                      position: "relative",
                      background: "var(--color-bg-panel)",
                      border: "2px solid var(--color-border-ink)",
                      borderRadius: "8px",
                      padding: "1.25rem 1.5rem",
                      boxShadow: "4px 4px 0px #000000",
                      overflow: "hidden",
                      transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                    }}
                  >
                    {/* Top Card Bar */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <div
                        className="skill-icon-wrap"
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "6px",
                          background: "rgba(230, 36, 41, 0.12)",
                          border: "1px solid rgba(230, 36, 41, 0.3)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "transform 0.3s",
                        }}
                      >
                        {renderIcon(skill.iconName)}
                      </div>

                      {skill.featured && (
                        <span
                          className="font-comic"
                          style={{
                            fontSize: "0.85rem",
                            background: "var(--color-spidey-red)",
                            color: "#ffffff",
                            padding: "0.15rem 0.5rem",
                            borderRadius: "2px",
                            boxShadow: "2px 2px 0px #000000",
                          }}
                        >
                          CORE
                        </span>
                      )}
                    </div>

                    <h4
                      className="font-comic"
                      style={{
                        fontSize: "1.4rem",
                        color: "#ffffff",
                        margin: "0 0 0.25rem 0",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {skill.name}
                    </h4>

                    {skill.description && (
                      <p
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--color-text-muted)",
                          margin: 0,
                          lineHeight: 1.4,
                        }}
                      >
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-card-item:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: var(--color-spidey-red) !important;
          box-shadow: 0 12px 30px rgba(230, 36, 41, 0.3), 5px 5px 0px #000000 !important;
        }
        .skill-card-item:hover .skill-icon-wrap {
          transform: rotate(10deg) scale(1.1);
        }
      `}</style>
    </section>
  );
};
