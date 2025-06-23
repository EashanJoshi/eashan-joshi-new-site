import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Eashan M. Joshi",
  author: "Eashan M. Joshi",
  description:
    "Software Engineer building intelligent, high-performance applications, ranging from backend systems and data pipelines to LLM-integrated tools and financial modeling platforms.",
  lang: "en",
  siteLogo: "/eashan-small.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Resume", href: "#resume" },
    { text: "Projects", href: "#projects" },
    { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Contact", href: "contact" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/eashanjoshi/" },
    { text: "Github", href: "https://github.com/EashanJoshi" },
  ],
  socialImage: "/eashan-og.png",
  canonicalURL: "https://eashan-m-joshi.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Eashan M. Joshi",
    specialty: "Software Engineer",
    summary:
      "Software Engineer with deep expertise in AI and systems design, driven by a passion for fitness and mental resilience. I build intelligent, high-performance apps, and if we’re building together, don’t be surprised  if you start optimizing your health like your code, and tune into the Huberman Lab podcast.",
    email: "eashan.m.joshi@gmail.com",
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
    summary: "Engineered a GenAI-powered debugging tool using Retrieval-Augmented Generation (RAG) and prompt engineering, earning a 4.6/5 user rating and reducing bug resolution time by 40% across programming languages.",
    bullets: [
      "Built with LangChain & OpenAI",
      "RAG-powered prompt injection",
      "40% faster bug fixes"
    ],
    tech: ["Python", "LangChain", "OpenAI API", "LLMs", "RAG", "Open Source"],
    linkPreview: "https://drive.google.com/file/d/1EGoHrzpngKs1glMsIQ4hvR_KEcHa5NtJ/view?usp=sharing",
    linkSource: "https://github.com/EashanJoshi/DebugMate-Debugging-Prompt-Enhancer",
  },

  {
  name: "Detecting and Recommending Fixes for Multi-Test Data Leakage in Machine Learning Pipelines",
  summary: "Built a Python-based tool to detect multi-test leakage in machine learning workflows, enhancing model reliability by flagging common pipeline flaws like preprocessing before train-test split. Currently working on version 1.2 which will integrate LLMs (via OpenAI API) to generate context-aware fix suggestions and automate corrections.",
  bullets: [
    "Flags leakage patterns",
    "Suggests fix strategies",
    "v1.2: LLM-powered auto-fixes",
    
  ],
  tech: ["Python", "OpenAI API", "LLMs", "Scikit-learn"],
  linkPreview: "https://drive.google.com/file/d/1NOMVlR8y-azXHbp6_6LHglqu63hR70_g/view?usp=sharing",
  linkSource: "https://github.com/EashanJoshi/DataLeakage",
},

{
    name: "Graph-Based Analysis of the Maven Central Ecosystem (Open-Source Java Libraries)",
    summary: "Performed large-scale graph analytics on 15M+ Maven package releases using Goblin and Neo4j to study dependency evolution, versioning cadence, and ecosystem risk patterns in open-source Java libraries.",
    bullets: [
    "Queried 130M+ dependency edges",
    "Computed metrics via Goblin & Weaver",
    "Revealed patterns in release cadence"
    ],
    tech: ["Python", "Neo4j", "Goblin", "Weaver API", "Graph Theory", "Open Source"],
    linkPreview: "https://drive.google.com/file/d/1JtBgr1S6ZlkuFrPmkicmcwhi-oORWC26/view?usp=sharing",
    linkSource: "https://github.com/EashanJoshi/MSR_GoblinDSCI602_Eashan",
  },

  {
  name: "CRM Ticket Similarity Detection using Information Retrieval & Siamese Neural Networks",
  summary: "Developed a full-stack pipeline to measure CRM ticket and bug report similarity using BM25, LDA+GloVe, and Siamese CNNs across Eclipse, Firefox, and Mobile datasets.",
  bullets: [
    "Preprocessed bug report data",
    "Applied BM25 & LDA+GloVe",
    "Trained domain-specific Siamese CNN"
  ],
  tech: ["Python", "TensorFlow", "GloVe", "BM25", "LDA"],
  linkPreview: "https://drive.google.com/file/d/1rB9b_w231Cjr4_VGW8KxHt2qNTnN6OPZ/view?usp=sharing",
  linkSource: "https://github.com/EashanJoshi/Duplicate-Bug-Report-Detection-using-Siamese-Convolutional-Neural-Network",
},

{
    name: "Options Pricing Models",
    summary: "Implements advanced pricing models for European and American call options with live data, sensitivity analysis, and ML predictions—designed for robust quantitative finance analysis.",
    bullets: [
      "Black-Scholes, binomial trees",
      "Live market data feed",
      "ML-based volatility prediction"
    ],
    tech: ["Python", "yfinance", "Black-Scholes", "binomial trees", "Greeks"],
    linkPreview: "/",
    linkSource: "https://github.com/EashanJoshi/Options-Pricing-Models",
  },
  {
  name: "Multiclass Image Classification with Deep CNN (Tiny ImageNet)",
  summary: "Trained a deep convolutional neural network (DCNN) on Tiny ImageNet for multiclass image classification, achieving category-wise insights using TensorFlow and GPU-optimized workflows.",
  bullets: [
    "Built DCNN in TensorFlow",
    "Preprocessed Tiny ImageNet data",
    "Analyzed class-wise accuracy patterns"
  ],
  tech: ["Python", "TensorFlow", "CNN", "Tiny ImageNet"],
  linkPreview: "https://drive.google.com/file/d/1YnzIxTJ1WGjHB0Vv9OXfHNhMIDfyQQeh/view?usp=sharing",
  linkSource: "https://github.com/EashanJoshi/Image-Classification-DCNN",
},

  
],


  about: {
    description: `
      Hi, I’m Eashan Joshi, a driven Software Engineer and AI Researcher passionate about building intelligent, high-performance systems. With hands-on experience in developing scalable backend services, LLM-integrated applications, and cloud-native infrastructures, I specialize in creating robust tools that blend performance with innovation. From financial technology to intelligent debugging platforms, my work spans multiple domains and leverages cutting-edge frameworks like LangChain, CUDA, PySpark, and Neo4j.

      \n\n I thrive at the intersection of AI and engineering, whether designing GPU-accelerated pipelines, deploying containerized architectures, or analyzing complex dependency graphs for open-source ecosystems. My mission is to engineer systems that are both smart and resilient.

      Outside of tech, I’m an avid fitness enthusiast and endurance athlete. You’ll likely find me on Strava after a long run or exploring the latest health science podcasts to optimize both mind and body.
    `,
    image: "/eashan-big.jpg",
  },
};

// #5755ff
