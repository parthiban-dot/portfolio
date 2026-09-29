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
    location: "Coimbatore, India",
    education: {
      degree: "Computer Science and Engineering",
      year: "2nd Year Undergraduate",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      focus: "AI Engineering & Systems Architecture",
    },
    team: {
      name: "DRACARYS",
      role: "Founder & Lead Builder",
      purpose: "A technology team created to bring students together for projects, hackathons, collaboration, and real-world problem solving.",
      tags: ["Hackathon Sprints", "AI Prototypes", "Peer Collaboration", "Real-World Projects"],
    },
    bio: [
      "I'm a 2nd year Computer Science and Engineering student at Sri Shakthi Institute of Engineering and Technology in Coimbatore, focusing my career toward AI Engineering.",
      "Rather than memorizing abstract syntax from lecture slides, I learn best by getting my hands dirty — building working prototypes, failing fast in local branches, and experimenting with new technologies until they click.",
      "Beyond individual code sprints, I founded DRACARYS: a collegiate technology collective designed to rally like-minded student builders around hackathons, shared project repos, and real-world problem solving.",
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
      id: "ai-virtual-teacher",
      title: "AI Virtual Teacher",
      tagline: "An intelligent pedagogical system that personalizes lessons, explains concepts, and adapts to learner comprehension.",
      category: "AI Engineering",
      featured: true,
      status: "Active Development",
      description: "An AI-powered virtual teacher concept designed to understand educational material, personalize lessons, explain concepts, generate questions, evaluate learners, and adapt teaching based on learner performance.",
      longDescription: "Traditional digital learning platforms present static content irrespective of whether a student has mastered core concepts or is struggling with prerequisites. AI Virtual Teacher deconstructs structured course material, analyzes a learner's responses to diagnostic questions, dynamically generates contextual analogies for complex topics, and adjusts the curriculum's difficulty in real time.",
      highlights: [
        "Dynamic concept deconstruction and personalized Socratic explanation generation",
        "Automated contextual question synthesis based on uploaded syllabus material",
        "Adaptive learner evaluation model measuring comprehension depth vs surface recall",
        "Real-time pedagogy adjustment that re-routes learning pathways upon knowledge gaps",
      ],
      architecture: [
        "Model Layer: LLM Orchestration & Structured Prompt Engineering",
        "API Engine: FastAPI with asynchronous Python endpoints",
        "Frontend Interface: Next.js, React, Tailwind CSS",
        "State & Analytics: Relational SQL schema tracking learner session progression",
      ],
      techStack: ["Python", "FastAPI", "Next.js", "React", "Tailwind CSS", "SQL"],
      githubUrl: "https://github.com/parthiban-dot",
    },
    {
      id: "dracarys-platform",
      title: "DRACARYS Collaborative Platform",
      tagline: "Collegiate technology platform uniting students for hackathons, collaborative projects, and real-world engineering.",
      category: "Full-Stack",
      featured: true,
      status: "Active Development",
      description: "A technology team and collaborative platform created to bring students together for projects, hackathons, learning, and real-world problem solving.",
      longDescription: "DRACARYS was founded to solve the fragmentation students experience when seeking hackathon teammates and project partners. The platform provides a centralized space to propose ideas, align on tech stacks, share code repositories, coordinate sprint timelines, and collectively solve real-world problems.",
      highlights: [
        "Team formation and skill-matching engine for collegiate hackathon sprints",
        "Project incubator space with milestone checklists and shared Git repositories",
        "Sprint dashboard tracking deliverables, API interfaces, and demo checkpoints",
        "Peer knowledge-sharing hub for full-stack and AI development resources",
      ],
      architecture: [
        "Core Framework: Next.js with React & TypeScript",
        "Styling System: Tailwind CSS responsive moonlight theme",
        "Version Control: Git & GitHub integration workflows",
        "Data Management: SQL schema modeling team formations and project sprints",
      ],
      techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "SQL", "Git", "GitHub"],
      githubUrl: "https://github.com/parthiban-dot",
    },
    {
      id: "collegiate-lab",
      title: "Exploratory Systems & Lab Builds",
      tagline: "Active experimental prototypes, algorithmic challenges, and upcoming hackathon submissions.",
      category: "Tools",
      featured: false,
      status: "Prototype",
      description: "A continuous development sandbox exploring autonomous agent workflows, C++ algorithmic systems, and rapid MVPs being readied for upcoming hackathons.",
      longDescription: "Engineers never stop tinkering between major project releases. This exploratory workspace houses test suites, C++ competitive programming routines, local AI model evaluations, and rapid prototypes being built under the DRACARYS banner for future deployment.",
      highlights: [
        "Algorithmic optimization benchmarks in C++ and Python",
        "Experimental multi-agent routing simulations",
        "Sprint templates configured for 24-48h hackathon velocity",
        "Reusable full-stack starter templates with Next.js & Tailwind CSS",
      ],
      architecture: [
        "Languages: C++, Python, TypeScript",
        "Tooling: Git, Linux environment, Vite / Next.js",
        "Workflow: Rapid local prototyping & performance profiling",
      ],
      techStack: ["Python", "C++", "TypeScript", "Next.js", "Git"],
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
      period: "2026",
      title: "Hackathons & Real-World Problem Solving",
      institution: "Collegiate & Open Hackathons",
      type: "Hackathon",
      description: "Actively participating in hackathons, translating complex challenge statements into working prototypes under 24–48 hour deadlines, and stress-testing innovative ideas in high-pressure team settings.",
      tags: ["Hackathons", "Rapid Execution", "Team Collaboration", "MVP Delivery"],
    },
    {
      period: "2026",
      title: "Founding DRACARYS Technology Platform",
      institution: "Student Technology Collective",
      type: "Building",
      description: "Founded DRACARYS as a long-term collaborative initiative to unite motivated engineering students for hackathon teams, collaborative project repositories, peer learning, and solving real-world challenges.",
      tags: ["DRACARYS", "Founder", "Team Leadership", "Collaborative Building"],
    },
    {
      period: "2026",
      title: "Expanding Into AI Engineering & Autonomous Agents",
      institution: "Self-Directed & Applied Systems",
      type: "Building",
      description: "Directing technical focus toward AI Engineering, machine learning integrations, autonomous agent workflows, and RAG pipelines. Designing intelligent web applications that reason through complex tasks.",
      tags: ["AI Engineering", "AI Agents", "FastAPI", "Prompt Architecture", "RAG"],
    },
    {
      period: "2025 – 2026",
      title: "Programming Fundamentals & Full-Stack Development",
      institution: "Web Architecture & Core Systems",
      type: "Building",
      description: "Focused heavily on programming fundamentals, JavaScript/TypeScript, React, Next.js, and modern full-stack web development. Shifted from foundational coding exercises into building and shipping working web products.",
      tags: ["Full-Stack", "Next.js", "React", "TypeScript", "Tailwind CSS", "SQL"],
    },
    {
      period: "2025",
      title: "Started Computer Science & Engineering",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      type: "Education",
      description: "Embarked on undergraduate studies in Computer Science and Engineering at Sri Shakthi Institute of Engineering and Technology, building bedrock understanding in programming languages, algorithms, and computing principles.",
      tags: ["CSE Undergraduate", "Algorithms", "Sri Shakthi", "Foundational Systems"],
    },
  ],
} as const;
