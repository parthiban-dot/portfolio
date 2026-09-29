export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "AI Engineering" | "Full-Stack" | "Hackathons" | "Tools";
  description: string;
  longDescription: string;
  highlights: readonly string[];
  architecture: readonly string[];
  techStack: readonly string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: "Completed" | "Active Development" | "Prototype";
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface Milestone {
  period: string;
  title: string;
  institution: string;
  type: "Education" | "Hackathon" | "Freelance" | "Building";
  description: string;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Parthiban V",
    handle: "@parthiban-dot",
    role: "AI Engineer & Full-Stack Developer",
    statusBadge: "Available for freelance & engineering roles",
    tagline: "Building intelligent agents and high-performance web systems with craft and clarity.",
    location: "Tamil Nadu, India",
    education: {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      year: "2nd Year Undergraduate",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      focus: "Artificial Intelligence, Autonomous Systems, and Full-Stack Engineering",
    },
    bio: [
      "I am an engineer at heart who thrives at the intersection of AI engineering, autonomous agent systems, and modern full-stack web architecture.",
      "Currently pursuing my 2nd year in Computer Science and Engineering at Sri Shakthi Institute of Engineering and Technology, I spend my days and late nights turning theoretical concepts into production-grade software and competing in hackathons.",
      "Whether developing multi-agent workflows, designing fluid web interfaces, or consulting on freelance client products, my priority is always the same: purposeful engineering, measurable performance, and seamless user experience.",
    ],
    socialLinks: {
      github: "https://github.com/parthiban-dot",
      repo: "https://github.com/parthiban-dot/portfolio",
      linkedin: "https://www.linkedin.com/in/parthi-xii-581493376?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/its_.prince._here?stkn=MXBld3RqdGVjZ3pnMw==",
      email: "vinayagamparthiban07@gmail.com",
    },
  },

  engineeringPrinciples: [
    {
      number: "01",
      title: "Reasoned AI Architecture",
      description: "Agents shouldn't be black boxes. I architect deterministic safeguards, structured tool-calling, and observable telemetry around LLMs.",
    },
    {
      number: "02",
      title: "Full-Stack Craftsmanship",
      description: "From database normalization to sub-millisecond frontend re-renders, every layer of the stack is treated with intentionality.",
    },
    {
      number: "03",
      title: "Hackathon Velocity",
      description: "Proven ability to synthesize complex real-world problems into functional, deployable prototypes within 24 to 48 hours.",
    },
    {
      number: "04",
      title: "Night-Shift Polish",
      description: "Like the moonlight aesthetic that inspires my work: calm, focused, high contrast, and refined down to the last interaction.",
    },
  ],

  projects: [
    {
      id: "aether-agent",
      title: "AetherAgent",
      tagline: "Autonomous multi-agent runtime with visual execution telemetry & tool sandboxing.",
      category: "AI Engineering",
      featured: true,
      status: "Active Development",
      description: "An orchestration engine that deploys cooperating AI agents capable of web browsing, code execution, and iterative self-reflection.",
      longDescription: "AetherAgent was designed to solve the brittleness of single-prompt AI workflows. By decoupling planning from tool execution, agents break down ambiguous user prompts into verifiable sub-tasks. It features real-time token telemetry, fallback retries, and an interactive DAG execution viewer.",
      highlights: [
        "Dynamic planning loop with memory retrieval and self-correction steps",
        "Deterministic JSON schema validation for multi-tool execution",
        "Live execution telemetry stream rendered via WebSockets",
        "Sandboxed Python & shell execution environment with safety limits",
      ],
      architecture: [
        "Orchestration: LangGraph & Custom State Machines",
        "Inference: OpenAI / Gemini / Local Ollama endpoints",
        "Frontend: Next.js 15, React, Tailwind CSS, Framer Motion",
        "Storage: Redis for active task state & PostgreSQL for audit logs",
      ],
      techStack: ["Next.js", "TypeScript", "Python", "Tailwind CSS", "LangGraph", "FastAPI", "Redis"],
      githubUrl: "https://github.com/parthiban-dot",
      liveUrl: "https://github.com",
    },
    {
      id: "neuro-flow",
      title: "NeuroFlow",
      tagline: "Node-based visual canvas for designing, testing, and benchmarking RAG pipelines.",
      category: "AI Engineering",
      featured: true,
      status: "Completed",
      description: "A developer-first playground to visually wire document loaders, chunking strategies, vector embeddings, and LLM re-ranking nodes.",
      longDescription: "Retrieval-Augmented Generation often fails in production because developers lack visibility into chunk quality and similarity scoring. NeuroFlow lets engineers visually build pipelines, test sample queries, and compare chunk retrieval precision across different distance metrics.",
      highlights: [
        "Drag-and-drop node graph with live dataflow propagation",
        "Comparative evaluation panel comparing BM25 vs dense embeddings",
        "Instant document preview with highlighted retrieved chunks",
        "Exportable pipeline code generated directly to Python / TypeScript",
      ],
      architecture: [
        "Canvas: React Flow with custom Moonlight night nodes",
        "Vector Engine: ChromaDB & Pinecone integration layer",
        "Backend: Next.js Server Actions & Edge runtime",
        "State Management: Zustand with undo/redo graph history",
      ],
      techStack: ["Next.js", "React Flow", "TypeScript", "Tailwind CSS", "ChromaDB", "Zustand"],
      githubUrl: "https://github.com/parthiban-dot",
      liveUrl: "https://github.com",
    },
    {
      id: "pulse-forge",
      title: "PulseForge",
      tagline: "High-velocity team collaboration hub built specifically for 24-48hr hackathon sprints.",
      category: "Full-Stack",
      featured: true,
      status: "Completed",
      description: "Engineered during intense hackathon sessions to eliminate coordination friction: contract-first API mockers, sprint kanban, and live demo rehearsal timers.",
      longDescription: "Built from personal hackathon experience where teams lose valuable hours negotiating API interfaces and demo timelines. PulseForge synchronizes team schemas, tracks blocker alerts in real-time, and generates pitch decks from recorded milestones.",
      highlights: [
        "Zero-latency real-time state synchronization across team members",
        "Built-in OpenAPI/TypeScript contract generator to unblock frontend and backend",
        "Pitch timer & live checklist specifically tuned for hackathon jury rubrics",
        "Optimistic UI updates with instant local cache rollbacks",
      ],
      architecture: [
        "Framework: Next.js App Router with Server Components",
        "Database: PostgreSQL with Prisma ORM",
        "Auth: NextAuth with GitHub & Google providers",
        "Styling: Tailwind CSS with dark mode moonlight palette",
      ],
      techStack: ["Next.js", "PostgreSQL", "Prisma", "TypeScript", "Tailwind CSS", "NextAuth"],
      githubUrl: "https://github.com/parthiban-dot",
      liveUrl: "https://github.com",
    },
    {
      id: "omni-search",
      title: "OmniSearch Code",
      tagline: "Local semantic code search engine with hybrid BM25 and AST embedding indexes.",
      category: "Tools",
      featured: false,
      status: "Prototype",
      description: "A lightweight desktop tool that indexes repositories locally and lets developers ask natural language questions about complex codebases.",
      longDescription: "Traditional grep searches fail when you do not remember exact variable names. OmniSearch parses the Abstract Syntax Tree of codebases and creates hybrid sparse-dense indexes locally without sending proprietary code to third-party cloud servers.",
      highlights: [
        "100% private offline search using lightweight ONNX embeddings",
        "Tree-sitter AST parsing for semantic function and class boundaries",
        "Ultra-low latency sub-50ms query responses on 50,000+ line repos",
        "Keyboard-first modal navigation built with custom command palettes",
      ],
      architecture: [
        "Parser: Tree-sitter for TypeScript, Python, and Go",
        "Embedding: MiniLM ONNX runtime run locally in WebAssembly",
        "Interface: Next.js + Tailwind CSS with keyboard shortcuts",
      ],
      techStack: ["TypeScript", "Next.js", "Tree-sitter", "WebAssembly", "Tailwind CSS"],
      githubUrl: "https://github.com/parthiban-dot",
    },
  ],

  skillCategories: [
    {
      title: "AI Engineering & Agents",
      subtitle: "Designing intelligent systems that act, reason, and adapt.",
      skills: [
        { name: "Autonomous Agents", level: "Advanced", description: "Multi-agent workflows, tool execution, memory graphs, reflection loops." },
        { name: "LLM Orchestration", level: "Advanced", description: "LangChain, LangGraph, prompt architecture, structured output enforcement." },
        { name: "RAG & Vector Retrieval", level: "Proficient", description: "Hybrid search, dense embeddings, semantic reranking, vector databases." },
        { name: "Prompt Engineering", level: "Advanced", description: "Few-shot prompting, chain-of-thought, system message optimization." },
        { name: "Model Integration", level: "Proficient", description: "OpenAI API, Google Gemini, Anthropic Claude, HuggingFace, Ollama." },
      ],
    },
    {
      title: "Full-Stack Development",
      subtitle: "Building resilient, end-to-end architectures from database to pixel.",
      skills: [
        { name: "Next.js & React", level: "Advanced", description: "App router, Server Components, Server Actions, SSR/SSG rendering." },
        { name: "TypeScript", level: "Advanced", description: "Strict type safety, generic utilities, complex API contract modeling." },
        { name: "Tailwind CSS", level: "Advanced", description: "Custom design systems, responsive micro-layouts, atmospheric themes." },
        { name: "Node.js & Python", level: "Proficient", description: "RESTful endpoints, FastAPI microservices, WebSockets, background jobs." },
        { name: "Databases (SQL & NoSQL)", level: "Proficient", description: "PostgreSQL, Prisma ORM, MongoDB, Redis caching." },
      ],
    },
    {
      title: "Engineering & Practices",
      subtitle: "How problems are solved, validated, and shipped.",
      skills: [
        { name: "Hackathon Prototyping", level: "Expert", description: "Fast problem scoping, MVP execution, jury presentation under tight deadlines." },
        { name: "System Design", level: "Proficient", description: "Decoupled services, event-driven patterns, state machine modeling." },
        { name: "Git & CI/CD", level: "Proficient", description: "Branching workflows, GitHub Actions, automated preview deployments." },
        { name: "Performance & A11y", level: "Proficient", description: "Lighthouse optimization, semantic HTML, reduced-motion compliance." },
      ],
    },
  ],

  milestones: [
    {
      period: "2024 — Present",
      title: "B.E. Computer Science and Engineering (2nd Year)",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      type: "Education",
      description: "Deepening theoretical foundations in Data Structures, Object-Oriented Systems, Discrete Mathematics, and Computer Architecture while spearheading hands-on student technical initiatives.",
      tags: ["CSE Undergrad", "Algorithms", "Computer Systems", "Campus Builder"],
    },
    {
      period: "2024 — Present",
      title: "Freelance AI & Web Developer",
      institution: "Independent Contracting",
      type: "Freelance",
      description: "Partnering with founders, startups, and peers to design responsive web platforms, automate workflows with AI assistants, and ship custom digital tools.",
      tags: ["Client Solutions", "Next.js", "AI Automation", "Full-Stack"],
    },
    {
      period: "2024 — Present",
      title: "Active Hackathon Participant & Problem Solver",
      institution: "National & Regional Hackathons",
      type: "Hackathon",
      description: "Competed in competitive collegiate and open hackathons, designing end-to-end prototypes within 24-36 hour limits for real-world civic and tech challenges.",
      tags: ["Rapid Prototyping", "Team Lead", "AI/ML Solutions", "Pitch Delivery"],
    },
    {
      period: "2023 — 2024",
      title: "Foundation in Systems & Web Development",
      institution: "Self-Directed & Academic Exploration",
      type: "Building",
      description: "Built dozens of exploratory utilities in JavaScript/TypeScript, explored Python for data analysis, and created fundamental full-stack web applications.",
      tags: ["JavaScript", "Python", "Web Standards", "Open Source"],
    },
  ],
} as const;
