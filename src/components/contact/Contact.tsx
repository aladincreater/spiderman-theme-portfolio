import React, { useState } from "react";
import { AnimatedSectionTitle } from "../effects/AnimatedSectionTitle";
import { ComicPanel } from "../effects/ComicPanel";
import { HalftoneBackground } from "../effects/HalftoneBackground";
import { SpiderSenseIndicator } from "../effects/SpiderSenseIndicator";
import { portfolioData } from "../../data/portfolio";
import { Mail, Send, MapPin, CheckCircle2 } from "lucide-react";
import { SocialIcon } from "../effects/SocialIcon";
import { useWebAudio } from "../../hooks/useWebAudio";

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { playThwip, playClick, playSensePulse } = useWebAudio();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playSensePulse();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      playThwip();
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "6rem 0",
        background: "var(--color-bg-dark)",
        overflow: "hidden",
      }}
    >
      <HalftoneBackground variant="dots" opacity={0.35} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <AnimatedSectionTitle
          chapterNumber="CHAPTER 05"
          title="NEED A FRIENDLY NEIGHBORHOOD DEVELOPER?"
          subtitle="LET'S BUILD SOMETHING AMAZING TOGETHER."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          {/* Left Column: Direct Links & Social Channels */}
          <div>
            <ComicPanel badgeText="DIRECT SIGNAL" accentColor="var(--color-spidey-blue)">
              <h3 className="font-comic" style={{ fontSize: "2rem", color: "#ffffff", marginBottom: "1rem" }}>
                GET IN TOUCH
              </h3>
              <p
                style={{
                  fontSize: "1.15rem",
                  color: "var(--color-text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                }}
              >
                Whether you have an enterprise React/MERN stack role, a complex web project, or just want to connect over engineering architecture — my web-shooters are ready!
              </p>

              {/* Direct Info List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                <a
                  href={`mailto:${contact.email}`}
                  onMouseEnter={playClick}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "rgba(18, 18, 24, 0.8)",
                    border: "1px solid var(--color-border-ink)",
                    padding: "1rem 1.25rem",
                    borderRadius: "6px",
                    color: "#ffffff",
                    transition: "border-color 0.2s, transform 0.2s",
                  }}
                >
                  <Mail size={22} color="var(--color-spidey-red)" />
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", textTransform: "uppercase" }}>
                      Direct Email
                    </div>
                    <div style={{ fontWeight: 600 }}>{contact.email}</div>
                  </div>
                </a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "rgba(18, 18, 24, 0.8)",
                    border: "1px solid var(--color-border-ink)",
                    padding: "1rem 1.25rem",
                    borderRadius: "6px",
                    color: "#ffffff",
                  }}
                >
                  <MapPin size={22} color="var(--color-spidey-blue)" />
                  <div>
                    <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", textTransform: "uppercase" }}>
                      Location
                    </div>
                    <div style={{ fontWeight: 600 }}>{contact.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Icons Bar */}
              <div>
                <h4 className="font-comic" style={{ fontSize: "1.3rem", color: "#ffffff", marginBottom: "0.75rem" }}>
                  SOCIAL NETWORK
                </h4>
                <div style={{ display: "flex", gap: "0.75rem" }}>
                  {contact.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playClick}
                      title={social.platform}
                      style={{
                        width: "44px",
                        height: "44px",
                        background: "var(--color-bg-dark)",
                        border: "1.5px solid var(--color-border-ink)",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#ffffff",
                        boxShadow: "3px 3px 0px #000000",
                        transition: "border-color 0.2s, transform 0.2s",
                      }}
                    >
                      <SocialIcon name={social.platform} size={20} color={social.platform === "GitHub" ? "var(--color-spidey-red)" : social.platform === "LinkedIn" ? "var(--color-spidey-blue)" : "#ffffff"} />
                    </a>
                  ))}
                </div>
              </div>
            </ComicPanel>
          </div>

          {/* Right Column: Interactive Comic Form */}
          <div>
            <ComicPanel badgeText="SEND SIGNAL" accentColor="var(--color-spidey-red)">
              {isSubmitted ? (
                <div
                  style={{
                    padding: "3rem 1.5rem",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.25rem",
                  }}
                >
                  <div style={{ marginBottom: "0.5rem" }}>
                    <SpiderSenseIndicator label="THWIP! SENT!" />
                  </div>
                  <CheckCircle2 size={60} color="var(--color-spidey-red)" />
                  <h3 className="font-comic" style={{ fontSize: "2.4rem", color: "#ffffff" }}>
                    SIGNAL RECEIVED!
                  </h3>
                  <p style={{ color: "var(--color-text-secondary)", maxWidth: "400px" }}>
                    Thank you for reaching out! Rishi will respond to your message shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="font-comic"
                    style={{
                      marginTop: "1rem",
                      padding: "0.6rem 1.5rem",
                      background: "var(--color-spidey-red)",
                      color: "#ffffff",
                      border: "2px solid #000000",
                      boxShadow: "3px 3px 0px #000000",
                      fontSize: "1.1rem",
                      borderRadius: "4px",
                    }}
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {/* Name Input */}
                  <div>
                    <label
                      className="font-comic"
                      htmlFor="name"
                      style={{ display: "block", fontSize: "1.15rem", color: "#ffffff", marginBottom: "0.4rem" }}
                    >
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Peter Parker"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        background: "var(--color-bg-dark)",
                        border: "1.5px solid var(--color-border-ink)",
                        borderRadius: "4px",
                        color: "#ffffff",
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      className="font-comic"
                      htmlFor="email"
                      style={{ display: "block", fontSize: "1.15rem", color: "#ffffff", marginBottom: "0.4rem" }}
                    >
                      YOUR EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. peter@dailybugle.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        background: "var(--color-bg-dark)",
                        border: "1.5px solid var(--color-border-ink)",
                        borderRadius: "4px",
                        color: "#ffffff",
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                      }}
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label
                      className="font-comic"
                      htmlFor="message"
                      style={{ display: "block", fontSize: "1.15rem", color: "#ffffff", marginBottom: "0.4rem" }}
                    >
                      YOUR MESSAGE
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Write your message or project requirements here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.85rem 1rem",
                        background: "var(--color-bg-dark)",
                        border: "1.5px solid var(--color-border-ink)",
                        borderRadius: "4px",
                        color: "#ffffff",
                        fontFamily: "var(--font-body)",
                        fontSize: "1rem",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={playClick}
                    className="font-comic"
                    style={{
                      marginTop: "0.5rem",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                      padding: "0.85rem 2rem",
                      background: "var(--color-spidey-red)",
                      color: "#ffffff",
                      fontSize: "1.3rem",
                      letterSpacing: "0.08em",
                      border: "2px solid #000000",
                      boxShadow: "5px 5px 0px #000000",
                      borderRadius: "4px",
                      opacity: isSubmitting ? 0.7 : 1,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      transition: "transform 0.2s, box-shadow 0.2s",
                    }}
                  >
                    <span>{isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}</span>
                    <Send size={20} />
                  </button>
                </form>
              )}
            </ComicPanel>
          </div>
        </div>
      </div>
    </section>
  );
};
