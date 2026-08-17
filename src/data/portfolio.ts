import type { PortfolioData } from "../types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Rishi Kumar Goud",
    alias: "THE WEB-SLINGER DEVELOPER",
    role: "Senior Frontend / MERN Stack Developer",
    heroHeadline: "CRAFTING HIGH-PERFORMANCE WEB EXPERIENCES WITH PRECISION & PASSION",
    heroSubheadline:
      "I build fast, scalable, and visually engaging web applications with React, Node.js, TypeScript, and modern JavaScript technologies.",
    bio: "Passionate Senior Frontend & MERN Stack Engineer with over 5 years of experience architecting high-scale enterprise applications, intuitive design systems, and responsive interactive web products. Known for transforming complex business requirements into sleek, accessible, and ultra-performant digital experiences.",
    experienceYears: 5,
    location: "Hyderabad, India (Remote Available)",
    availability: "Open for Senior / Staff Frontend & MERN Engineering Roles",
    avatarPlaceholderText: "RISHI KUMAR GOUD",
    stats: [
      {
        label: "Years Experience",
        value: "5+",
        subtext: "Professional Software Engineering",
      },
      {
        label: "Projects Shipped",
        value: "20+",
        subtext: "Enterprise & Modern Web Apps",
      },
      {
        label: "Code Quality",
        value: "99.9%",
        subtext: "Type Safety & Clean Architecture",
      },
      {
        label: "Tech Mastery",
        value: "MERN Stack",
        subtext: "React, Node, Express, MongoDB",
      },
    ],
  },
  skills: [
    {
      id: "frontend",
      category: "Frontend Superpowers",
      icon: "Layout",
      skills: [
        { name: "React", level: 95, iconName: "Code2", featured: true, description: "Hooks, Context, Custom Hooks, Performance Tuning, Fiber Architecture" },
        { name: "TypeScript", level: 92, iconName: "FileCode", featured: true, description: "Strict Typing, Generics, Utility Types, Enterprise Architecture" },
        { name: "JavaScript (ES6+)", level: 95, iconName: "Zap", featured: true, description: "Async/Await, Closures, Event Loop, DOM Manipulation" },
        { name: "Redux / Redux Toolkit", level: 90, iconName: "Database", featured: true, description: "RTK Query, Centralized State Management, Middleware" },
        { name: "Vite", level: 90, iconName: "Sparkles", featured: true, description: "Fast HMR, Bundling Optimization, Module Federation" },
        { name: "HTML5", level: 95, iconName: "Globe", featured: false, description: "Semantic Markup, Web Accessibility (a11y), SEO" },
        { name: "CSS3 / Modern CSS", level: 92, iconName: "Palette", featured: false, description: "CSS Modules, Animations, Grid, Flexbox, Custom Properties" },
      ],
    },
    {
      id: "backend",
      category: "Backend Engine",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 88, iconName: "Server", featured: true, description: "Event-driven Architecture, Streams, Asynchronous Workflows" },
        { name: "Express.js", level: 90, iconName: "Cpu", featured: true, description: "RESTful APIs, Middleware, Routing, Authentication & JWT" },
        { name: "REST APIs", level: 92, iconName: "Network", featured: true, description: "API Design, Swagger/Postman, Rate Limiting, CORS" },
      ],
    },
    {
      id: "database",
      category: "Data Vault",
      icon: "Database",
      skills: [
        { name: "MongoDB", level: 88, iconName: "Database", featured: true, description: "Schema Design, Aggregation Framework, Mongoose ORM" },
        { name: "MySQL", level: 82, iconName: "Table", featured: false, description: "Relational Queries, Joins, Indexing, Transactions" },
        { name: "PostgreSQL", level: 80, iconName: "HardDrive", featured: false, description: "Complex Queries, JSONB, Performance Tuning" },
      ],
    },
    {
      id: "tools",
      category: "Developer Arsenal",
      icon: "Wrench",
      skills: [
        { name: "Git", level: 92, iconName: "GitBranch", featured: true, description: "Branching Strategies, Rebase, Merge Conflict Resolution" },
        { name: "GitHub", level: 92, iconName: "Github", featured: true, description: "PR Reviews, Issue Tracking, Discussions" },
        { name: "GitHub Actions", level: 85, iconName: "Workflow", featured: false, description: "CI/CD Automation, Test Pipelines, Deployment Workflows" },
        { name: "VS Code", level: 95, iconName: "Terminal", featured: false, description: "Custom Workspaces, Debugging Tools, Profiling Extensions" },
      ],
    },
  ],
  experience: [
    {
      id: "exp-1",
      company: "Enterprise Software Innovations",
      role: "Senior Frontend / MERN Stack Engineer",
      period: "2023 - PRESENT",
      location: "Hyderabad, India",
      type: "Full-time",
      summary:
        "Lead frontend architect driving enterprise-grade React and MERN stack projects, setting UI performance standards, and mentoring junior engineers.",
      responsibilities: [
        "Architected scalable React & TypeScript frontends serving tens of thousands of daily active enterprise users.",
        "Implemented state management best practices using Redux Toolkit & RTK Query, reducing redundant API requests by 40%.",
        "Pioneered component design system libraries with automated accessibility auditing and smooth micro-animations.",
        "Collaborated with backend engineers to optimize RESTful endpoints and MongoDB aggregation pipelines for faster page rendering.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Redux Toolkit", "Vite", "GSAP"],
      featuredAchievement: "Boosted Core Web Vitals performance score from 62 to 96 across key enterprise dashboards.",
    },
    {
      id: "exp-2",
      company: "TechVerse Solutions",
      role: "MERN Stack Developer",
      period: "2021 - 2023",
      location: "Hyderabad, India",
      type: "Full-time",
      summary:
        "Full stack developer responsible for building end-to-end e-commerce and business operation portals (including VyapaarKit).",
      responsibilities: [
        "Developed full-stack web applications utilizing Node.js/Express APIs, MongoDB collections, and React single-page interfaces.",
        "Engineered real-time inventory management dashboard with WebSocket updates and dynamic chart analytics.",
        "Integrated secure payment gateways, JWT-based authentication, and role-based access controls.",
        "Created CI/CD pipelines with GitHub Actions for automated linting, unit testing, and zero-downtime deployment.",
      ],
      technologies: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "REST APIs", "Git", "CSS Modules"],
      featuredAchievement: "Successfully delivered VyapaarKit platform managing 50k+ product transactions monthly.",
    },
    {
      id: "exp-3",
      company: "Digital Dynamics",
      role: "Frontend Software Engineer",
      period: "2019 - 2021",
      location: "Hyderabad, India",
      type: "Full-time",
      summary:
        "Focused on crafting pixel-perfect interactive web interfaces, reusable UI components, and optimizing web performance.",
      responsibilities: [
        "Transformed Figma & Adobe XD design specifications into modern responsive HTML/CSS/JS frontend code.",
        "Built modular UI component library used across 8 distinct client projects.",
        "Optimized web assets, images, and bundle size to achieve sub-second initial page load times.",
        "Participated in agile sprints, daily standups, and rigorous code review cycles.",
      ],
      technologies: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs", "Git", "Webpack"],
      featuredAchievement: "Recognized as Top Contributor for outstanding UI polish and rapid deployment turnaround.",
    },
  ],
  projects: [
    {
      id: "vyapaarkit",
      issueNumber: "ISSUE #01",
      title: "VyapaarKit",
      subtitle: "Business & E-Commerce Operations Platform",
      tagline: "Empowering modern business workflows with full-stack MERN speed and seamless control.",
      description:
        "A comprehensive business and e-commerce management system engineered to streamline inventory tracking, order processing, and customer analytics for growing enterprises.",
      longDescription:
        "VyapaarKit is a robust full-stack solution built with React, Node.js, Express, and MongoDB. It features real-time transactional metrics, dynamic stock alerts, automated receipt generation, and an intuitive dashboard designed for high efficiency.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "REST APIs", "Chart.js"],
      category: "MERN",
      githubUrl: "https://github.com/rishikumargoud/vyapaarkit",
      liveUrl: "https://vyapaarkit.demo",
      featured: true,
      imageAccent: "#e62429",
      highlights: [
        "Real-time transactional inventory tracking with instant stock alert triggers.",
        "Role-based authorization system with encrypted JWT security.",
        "Responsive analytics dashboard with interactive data visualization.",
      ],
    },
    {
      id: "enterprise-react-suite",
      issueNumber: "ISSUE #02",
      title: "Enterprise React Suite",
      subtitle: "High-Scale UI Architecture & State Workflows",
      tagline: "Ultra-fast frontend engineering for high-density enterprise data operations.",
      description:
        "A modular, accessible frontend application framework tailored for enterprise organizations needing real-time data table filtering, dynamic form builders, and complex state management.",
      longDescription:
        "Built with React and TypeScript, this suite handles heavy data payloads through virtualized list rendering, custom state middleware, and granular component memoization to ensure sustained 60fps interaction speed.",
      technologies: ["React", "TypeScript", "Redux Toolkit", "Vite", "CSS Modules", "REST APIs"],
      category: "Enterprise",
      githubUrl: "https://github.com/rishikumargoud/enterprise-react-suite",
      liveUrl: "https://enterprise-react.demo",
      featured: true,
      imageAccent: "#00f0ff",
      highlights: [
        "Virtualized table components rendering 100,000+ data rows with zero lag.",
        "Strict TypeScript typing preventing runtime state mutations.",
        "Full WCAG 2.1 AA keyboard accessibility and screen reader support.",
      ],
    },
    {
      id: "rag-ai-copilot",
      issueNumber: "ISSUE #03",
      title: "Enterprise RAG / AI Copilot (POC)",
      subtitle: "Retrieval-Augmented Generation Proof of Concept",
      tagline: "Bridging enterprise knowledge graphs with modern LLM intelligence.",
      description:
        "An experimental enterprise AI assistant POC leveraging Databricks, Vector Search, Delta Lake, Unity Catalog, and custom React interface for contextual document querying.",
      longDescription:
        "Designed as an enterprise proof of concept, this application integrates vector embedding search with Delta Lake pipelines and an interactive web chat canvas, enabling employees to query complex internal technical documentation with high relevance scores.",
      technologies: ["React", "TypeScript", "Databricks", "Vector Search", "Delta Lake", "Unity Catalog", "LLM APIs"],
      category: "AI / RAG",
      githubUrl: "https://github.com/rishikumargoud/rag-ai-copilot-poc",
      featured: true,
      imageAccent: "#ff2a30",
      highlights: [
        "Interactive chat interface with markdown stream rendering and citation links.",
        "Vector search integration retrieving contextual snippets from Delta Lake.",
        "Enterprise Unity Catalog governance & access permission modeling.",
      ],
    },
    {
      id: "spider-verse-web",
      issueNumber: "ISSUE #04",
      title: "Spider-Verse Web Interactive",
      subtitle: "Awwwards-Style Creative Portfolio Experience",
      tagline: "Pushing the boundaries of web animation, comic aesthetics, and interactive storytelling.",
      description:
        "An original animated web application combining GSAP ScrollTrigger timelines, Three.js WebGL particles, custom SVG spider-web generators, and reactive comic panel transitions.",
      longDescription:
        "Created to demonstrate advanced frontend craft, creative coding, and performance optimization. Features custom sound synthesis, custom cursor dynamics, and responsive comic book framing.",
      technologies: ["React", "TypeScript", "GSAP", "ScrollTrigger", "Three.js", "Framer Motion", "Vite"],
      category: "Creative Web",
      githubUrl: "https://github.com/rishikumargoud/spiderman-theme-portfolio",
      liveUrl: "https://rishi-goud-portfolio.demo",
      featured: true,
      imageAccent: "#ff0033",
      highlights: [
        "GSAP ScrollTrigger cinematic timeline orchestrating 10+ section triggers.",
        "Web Audio API sound effect synthesizer with zero external media loading overhead.",
        "Custom SVG web drawer & comic halftone vector graphics.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "JNTU Hyderabad",
      period: "2015 - 2019",
      details: "Graduated with Distinction. Focused on Data Structures, Algorithms, Software Engineering, and Web Technologies.",
    },
  ],
  certifications: [
    {
      title: "Meta Frontend Developer Professional Certificate",
      issuer: "Meta / Coursera",
      year: "2022",
    },
    {
      title: "MongoDB Certified Developer Associate",
      issuer: "MongoDB Inc.",
      year: "2021",
    },
  ],
  contact: {
    email: "rishikumargoud.dev@gmail.com",
    phone: "+91 98765 43210",
    location: "Hyderabad, Telangana, India",
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com/rishikumargoud",
        icon: "Github",
        username: "rishikumargoud",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/rishikumargoud",
        icon: "Linkedin",
        username: "rishi-kumar-goud",
      },
      {
        platform: "Email",
        url: "mailto:rishikumargoud.dev@gmail.com",
        icon: "Mail",
        username: "rishikumargoud.dev@gmail.com",
      },
      {
        platform: "Twitter / X",
        url: "https://twitter.com/rishigoud_dev",
        icon: "Twitter",
        username: "@rishigoud_dev",
      },
    ],
  },
};
