import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Eashan M. Joshi",
  author: "Eashan M. Joshi",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/eashan-small.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/eashanjoshi/" },
    { text: "Github", href: "https://github.com/EashanJoshi" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Eashan M. Joshi",
    specialty: "Software Engineer",
    summary:
      "AI-focused Software Engineer by day, fitness enthusiast by lifestyle. I build intelligent, high-performance apps, and if we’re building together, don’t be surprised if you start moving more, learn a thing or two about dumbbells, and start tuning into the Huberman Lab podcast.",
    email: "example@email.com",
  },
  experience: [
    {
      company: "Rochester Institute of Technology",
      position: "Graduate Research Assistant",
      startDate: "Aug 2023",
      endDate: "May 2025",
      summary: [
        "Built backend infrastructure for a retrieval-augmented generation (RAG) system using Python, OpenAI API, and vector search to enhance LLM workflows, boosting downstream task performance by 3x through context aware prompt injection",
        "Designed high-throughput GPU data pipelines with CUDA, processing 5M+ ChatGPT prompt logs and extracting 15K+ unique prompt patterns to support model tuning and evaluation",
        "Architected graph-based systems in Neo4j using APOC procedures to analyze 220K+ open source Maven Central libraries, uncovering patterns in dependency growth and release cadence for IEEE - ICMI research",
      ],
    },
    {
      company: "FinSharpe",
      position: "Software Engineer Intern",
      startDate: "May 2023",
      endDate: "Aug 2023",
      summary: [
        "Built backend services in Python to process financial market data and support execution of rule-based trading strategies",
        "Containerized and orchestrated core services using Docker and Kubernetes, reducing deployment downtime from 3 hours/month to under 15 minutes and improving system reliability",
        "Integrated Python-based machine learning models to analyze high-risk securities and embed VaR-driven logic into backend pipelines, contributing to an $850,000 investment",
      ],
    },
    {
      company: "Yardi",
      position: "Software Engineer",
      startDate: "Sep 2020",
      endDate: "Sep 2021",
      summary: [
        "Improved financial management efficiency by developing 80+ components in the Trust Accounting Application using Python, JavaScript and PostgreSQL, leading to a $300,000 reduction in operational costs",
        "Implemented custom programming solutions using Python and PostgreSQL, automating manual workflows and reducing data processing time by 70%, saving 60+ hours of analyst effort per month",
        "Generated robust data pipelines and scalable business solutions using PySpark, reducing financial data error rate by 10% in insurance management systems",
        "Created REST APIs within the Trust Accounting module of Yardi Voyager, automating workflows and addressing custom programming requests to meet unique client requirements",
      ],
    },
  ],
  projects: [
    {
      name: "DebugMate - GenAI Software Debugging & Refactoring Assistant",
      summary: "Engineered a GenAI-powered debugging tool using Retrieval-Augmented Generation (RAG) and prompt engineering, earning a 4.6/5 user rating and reducing bug resolution time by 40% across programming languages",
      linkPreview: "/",
      linkSource: "https://github.com/EashanJoshi/DebugMate-Debugging-Prompt-Enhancer",
      image: "/spotifu.png",
    },
    {
      name: "Options Pricing Models",
      summary: "This project demonstrates the implementation of advanced option pricing models for European and American call options, incorporating real-time market data integration, sensitivity analysis, and machine learning predictions. The project is developed in Python and is aimed at providing a comprehensive tool for quantitative finance applications",
      linkPreview: "/",
      linkSource: "https://github.com/EashanJoshi/Options-Pricing-Models",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Hi, I’m Alejandro Múnez, a passionate Mobile and Web Developer with a knack for crafting seamless digital experiences. With a strong background in both Android and iOS development, as well as front-end web technologies, I thrive in the intersection where creativity meets technology.

      Over the years, I’ve honed my skills in building robust, user-friendly applications that not only meet the needs of users but also push the boundaries of what’s possible. My projects range from innovative mobile applications to responsive web designs, all with a focus on performance, security, and scalability.
    `,
    image: "/eashan-big.jpg",
  },
};

// #5755ff
