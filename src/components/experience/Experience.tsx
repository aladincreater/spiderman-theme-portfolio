import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedSectionTitle } from "../effects/AnimatedSectionTitle";
import { HalftoneBackground } from "../effects/HalftoneBackground";
import { portfolioData } from "../../data/portfolio";
import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from "lucide-react";
import { useWebAudio } from "../../hooks/useWebAudio";

gsap.registerPlugin(ScrollTrigger);

export const Experience: React.FC = () => {
  const { experience } = portfolioData;
  const sectionRef = useRef<HTMLDivElement>(null);
  const webLineRef = useRef<HTMLDivElement>(null);
  const { playClick } = useWebAudio();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Vertical Red Web Connection Line on Scroll
      gsap.fromTo(
        webLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );

      // Animate Timeline Cards in Sequence
      const cards = gsap.utils.toArray(".timeline-card");
      cards.forEach((card: any, idx) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: idx % 2 === 0 ? -40 : 40, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "var(--color-bg-dark)",
        overflow: "hidden",
      }}
    >
      <HalftoneBackground variant="dots" opacity={0.3} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Title */}
        <AnimatedSectionTitle
          chapterNumber="CHAPTER 03"
          title="THE JOURNEY"
          subtitle="5+ years of software engineering milestones, enterprise roles, and impact."
        />

        {/* Timeline Container */}
        <div
          style={{
            position: "relative",
            maxWidth: "900px",
            margin: "0 auto",
            padding: "2rem 0",
          }}
        >
          {/* Animated Central Red Web Connecting Line */}
          <div
            ref={webLineRef}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "24px",
              width: "3px",
              background: "linear-gradient(180deg, var(--color-spidey-red) 0%, var(--color-spidey-blue) 100%)",
              transformOrigin: "top center",
              boxShadow: "0 0 10px var(--color-spidey-red)",
              zIndex: 1,
            }}
          />

          {/* Timeline Experience Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {experience.map((item) => (
              <div
                key={item.id}
                className="timeline-card"
                onMouseEnter={playClick}
                style={{
                  position: "relative",
                  paddingLeft: "70px",
                  zIndex: 2,
                }}
              >
                {/* Node Spider Badge */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "4px",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    background: "var(--color-bg-surface)",
                    border: "2px solid var(--color-spidey-red)",
                    boxShadow: "0 0 15px rgba(230, 36, 41, 0.4), 3px 3px 0px #000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-spidey-red)",
                  }}
                >
                  <Briefcase size={22} />
                </div>

                {/* Main Experience Card */}
                <div
                  style={{
                    background: "var(--color-bg-surface)",
                    border: "2px solid var(--color-border-ink)",
                    borderRadius: "8px",
                    padding: "1.75rem",
                    boxShadow: "5px 5px 0px #000000",
                    position: "relative",
                  }}
                >
                  {/* Period & Role */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      marginBottom: "0.75rem",
                      borderBottom: "1px dashed var(--color-border-ink)",
                      paddingBottom: "0.75rem",
                    }}
                  >
                    <div>
                      <span
                        className="font-comic"
                        style={{
                          fontSize: "1.6rem",
                          color: "#ffffff",
                          letterSpacing: "0.04em",
                          display: "block",
                          lineHeight: 1.1,
                        }}
                      >
                        {item.role}
                      </span>
                      <span
                        style={{
                          fontSize: "1.1rem",
                          color: "var(--color-spidey-red)",
                          fontWeight: 600,
                        }}
                      >
                        {item.company}
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "0.9rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <Calendar size={15} color="var(--color-spidey-blue)" />
                        <span>{item.period}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                        <MapPin size={15} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {item.summary}
                  </p>

                  {/* Responsibilities */}
                  <div style={{ marginBottom: "1.25rem" }}>
                    {item.responsibilities.map((resp, rIdx) => (
                      <div
                        key={rIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "8px",
                          marginBottom: "0.5rem",
                          fontSize: "0.95rem",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        <CheckCircle2 size={16} color="var(--color-spidey-red)" style={{ marginTop: "3px", flexShrink: 0 }} />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Featured Achievement Callout if present */}
                  {item.featuredAchievement && (
                    <div
                      style={{
                        background: "rgba(230, 36, 41, 0.1)",
                        borderLeft: "3px solid var(--color-spidey-red)",
                        padding: "0.75rem 1rem",
                        borderRadius: "0 4px 4px 0",
                        marginBottom: "1.25rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Award size={20} color="var(--color-spidey-red)" />
                      <span style={{ fontSize: "0.92rem", color: "#ffffff", fontWeight: 500 }}>
                        {item.featuredAchievement}
                      </span>
                    </div>
                  )}

                  {/* Technologies Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {item.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          background: "var(--color-bg-dark)",
                          border: "1px solid var(--color-border-ink)",
                          color: "var(--color-spidey-blue)",
                          fontSize: "0.82rem",
                          padding: "0.2rem 0.65rem",
                          borderRadius: "4px",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
