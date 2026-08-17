import React, { useState, useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
import { Experience } from "./components/experience/Experience";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/layout/Footer";
import { SpiderCursor } from "./components/effects/SpiderCursor";
import "./styles/globals.css";

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // IntersectionObserver for tracking active section in navigation
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Custom Spider Desktop Cursor */}
      <SpiderCursor />

      {/* Header Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
