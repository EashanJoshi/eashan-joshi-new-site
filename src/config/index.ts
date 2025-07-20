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
    { text: "Contact", href: "#contact" },
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
      "Software Engineer with deep expertise in AI and system design, driven by a passion for fitness and mental resilience. I build intelligent, high-performance apps, and if we’re building together, don’t be surprised  if you start optimizing your health like your code, and tune into the Huberman Lab podcast.",
    email: "eashan.m.joshi@gmail.com",
  },
  experience: [
    {
      company: "Rochester Institute of Technology",
      position: "Graduate Research Assistant",
      startDate: "Aug 2023",
      endDate: "May 2025",
      summary: [
        "Architected backend infrastructure for a retrieval-augmented generation (RAG) system using Python, LLM (GPT-4), and vector search, boosting downstream task performance by 3x through context aware prompt injection",
        "Designed high-throughput GPU data pipelines with CUDA, processing 5M+ ChatGPT prompt logs and analyzed 220K+ open-source Maven Central libraries using Neo4j to uncover dependency patterns and inform IEEE ICMI research",
        "Developed a tool to detect multi-test data leakage in ML workflows, integrating GPT-4 for auto-fixes and testing across 100+ GitHub pipelines"
,
      ],
    },
    // {
    //   company: "FinSharpe",
    //   position: "Software Engineer Intern",
    //   startDate: "May 2023",
    //   endDate: "Aug 2023",
    //   summary: [
    //     "Built backend services in Python to process financial market data and support execution of rule-based trading strategies",
    //     "Containerized and orchestrated core services using Docker and Kubernetes, reducing deployment downtime from 3 hours/month to under 15 minutes and improving system reliability",
    //     "Integrated Python-based machine learning models to analyze high-risk securities and embed VaR-driven logic into backend pipelines, contributing to an $850,000 investment",
    //   ],
    // },
    {
      company: "Yardi",
      position: "Software Engineer",
      startDate: "Sep 2020",
      endDate: "Sep 2021",
      summary: [
        "Developed and maintained 80+ backend components in Python and PostgreSQL, supporting multi-tenant accounting operations across insurance, tax, and escrow workflows in production environments",
        "Created RESTful APIs to integrate backend services with React-based frontends, enabling seamless client-side interaction with fiduciary and compliance modules",
        "Automated custom workflows and designed schema-based validation logic using Python and PostgreSQL, reducing manual effort by 60+ hours/month and improving data integrity by 15%",
        "Collaborated with QA to design unit tests and integration test cases, boosting code coverage and reducing defect turnaround by 50% across trust accounting modules",
        "Adopted PySpark for periodic financial data processing and reporting tasks, improving data pipeline performance and batch job reliability by streamlining ETL operations",
        "Logged and resolved 60+ production issues via CRM tickets, applying root-cause debugging using PostgreSQL logs and Python profiling tools during sprint cycles"
      ],
    },
  ],
 projects: [
  // {
  //   name: "DebugMate - GenAI Software Debugging & Refactoring Assistant",
  //   summary: "Engineered a GenAI-powered debugging tool using Retrieval-Augmented Generation (RAG) and prompt engineering, earning a 4.6/5 user rating and reducing bug resolution time by 40% across programming languages.",
  //   bullets: [
  //     "Built with LangChain & OpenAI",
  //     "RAG-powered prompt injection",
  //     "40% faster bug fixes"
  //   ],
  //   tech: ["Python", "LangChain", "GPT-4", "LLMs", "RAG", "Open Source"],
  //   linkPreview: "https://drive.google.com/file/d/1EGoHrzpngKs1glMsIQ4hvR_KEcHa5NtJ/view?usp=sharing",
  //   linkSource: "https://github.com/EashanJoshi/DebugMate-Debugging-Prompt-Enhancer",
  // },
  {
  name: "CodeIntellect - Multi-Agent AI Systems Lab",
  summary: "Built a Python, FastAPI, and React platform leveraging a multi-agent AI system for automated code debugging, critique, and ML leakage checks. Added logging and Excel exports for full auditability across 120+ code sessions. Reduced manual debugging by ~2 hours/session through intelligent agent collaboration and classification.",
  bullets: [
    "Deployed multi-agent AI architecture",
    "120+ debug sessions",
    "Excel log exports"
  ],
  tech: ["Python", "FastAPI", "React", "AWS (S3, EKS)", "GPT-4", "LLMs"],
  linkPreview: "https://drive.google.com/file/d/1M7IAAqdmXa3HPyzMt-RB90UEvGe3jr8c/view?usp=sharing",
  linkSource: "https://github.com/EashanJoshi/CodeIntellect-MultiAgent-Debugger"
},

{
    name: "Graph-Based Analysis of the Maven Central Ecosystem (Open-Source Java Libraries)",
    summary: "Performed large-scale graph analytics on 15M+ Maven package releases using Cypher and Neo4j to study dependency evolution, versioning cadence, and ecosystem risk patterns in open-source Java libraries, with ongoing GraphRAG integration for natural language insights. Paper accepted at IEEE IC_ETC 2025.",
    bullets: [
    "Queried 130M+ dependency edges",
    "Computed metrics via Goblin & Weaver",
    "Extending to GraphRAG interface"
    ],
    tech: ["Python", "CUDA", "Cypher", "Neo4j", "GraphRAG", "Weaver API", "Graph Theory", "Open Source"],
    linkPreview: "https://drive.google.com/file/d/1JtBgr1S6ZlkuFrPmkicmcwhi-oORWC26/view?usp=sharing",
    linkSource: "https://github.com/EashanJoshi/Graph-Based-Analysis-of-the-Maven-Central-Ecosystem",
  },

  {
  name: "Detecting and Recommending Fixes for Multi-Test Data Leakage in Machine Learning Pipelines",
  summary: "Built a Python-based tool to detect multi-test leakage in machine learning workflows, enhancing model reliability by flagging common pipeline flaws like preprocessing before train-test split. Currently working on version 1.2 which will integrate LLMs (via GPT-4) to generate context-aware fix suggestions and automate corrections.",
  bullets: [
    "Flags leakage patterns",
    "Suggests fix strategies",
    "v1.2: LLM-powered auto-fixes",
    
  ],
  tech: ["Python", "GPT-4", "LLMs", "Scikit-learn"],
  linkPreview: "https://drive.google.com/file/d/1NOMVlR8y-azXHbp6_6LHglqu63hR70_g/view?usp=sharing",
  linkSource: "https://github.com/EashanJoshi/DataLeakage",
},

  {
  name: "Bug Report Similarity Detection using Information Retrieval & Siamese Neural Networks",
  summary: "Developed a full-stack pipeline to measure CRM ticket and bug report similarity using BM25, LDA+GloVe, and Siamese CNNs across Eclipse, Firefox, and Mobile datasets.",
  bullets: [
    "Preprocessed bug report data",
    "Applied BM25 & LDA+GloVe",
    "Trained domain-specific Siamese CNN"
  ],
  tech: ["Python", "TensorFlow", "GloVe", "BM25", "LDA"],
  linkPreview: "https://drive.google.com/file/d/1FEi4QPhCwTrMbIQjRUaDRuIaftjWzt_s/view?usp=sharing",
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
    linkPreview: "https://github.com/EashanJoshi/Options-Pricing-Models",
    linkSource: "https://github.com/EashanJoshi/Options-Pricing-Models",
  },
//   {
//   name: "Multiclass Image Classification with Deep CNN (Tiny ImageNet)",
//   summary: "Trained a deep convolutional neural network (DCNN) on Tiny ImageNet for multiclass image classification, achieving category-wise insights using TensorFlow and GPU-optimized workflows.",
//   bullets: [
//     "Built DCNN in TensorFlow",
//     "Preprocessed Tiny ImageNet data",
//     "Analyzed class-wise accuracy patterns"
//   ],
//   tech: ["Python", "TensorFlow", "CNN", "Tiny ImageNet"],
//   linkPreview: "https://drive.google.com/file/d/1YnzIxTJ1WGjHB0Vv9OXfHNhMIDfyQQeh/view?usp=sharing",
//   linkSource: "https://github.com/EashanJoshi/Image-Classification-DCNN",
// },

  
],


  about: {
    description: `
      <p> Hi, I’m Eashan Joshi, a driven Software Engineer and AI Researcher passionate about building intelligent, high-performance systems. I hold a <strong> Master’s Degree in Data Science from Rochester Institute of Technology (May 2025) and a Bachelor’s Degree in Computer Engineering from Pune Institute of Computer Technology.</strong> </p> <br />
      <p> With hands-on experience in developing scalable backend services, LLM-integrated applications, and cloud-native infrastructures, I specialize in creating robust tools that blend performance with innovation. From financial technology to intelligent debugging platforms, my work spans multiple domains and leverages cutting-edge frameworks like LangChain, CUDA, PySpark, and Neo4j.</p><br />

      <p> I thrive at the intersection of AI and Software Engineering, designing GPU-accelerated pipelines, deploying cloud-native systems, and analyzing open-source ecosystems. Outside of tech, I’m a fitness enthusiast and endurance athlete who trains hard and stays curious through health science podcasts.</p>

    `,
    image: "/eashan-big.jpg",
  },
};

// #5755ff
