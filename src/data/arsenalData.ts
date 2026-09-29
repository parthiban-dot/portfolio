export interface TechnologyItem {
  id: string;
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Database" | "Tools" | "AI / Emerging";
  description: string;
  application: string;
  status: "Core Stack" | "Active Tool" | "Academic Foundation";
}

export const ARSENAL_TECHNOLOGIES: TechnologyItem[] = [
  // Languages
  {
    id: "python",
    name: "Python",
    category: "Languages",
    description: "Primary language for AI engineering, script automation, data pipelines, and backend services.",
    application: "Building agent planning loops, LangGraph workflows, and FastAPI inference endpoints.",
    status: "Core Stack",
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Languages",
    description: "Modern ES6+ development for interactive frontend architectures and asynchronous execution.",
    application: "DOM manipulation, client-side event loops, and dynamic UI state orchestration.",
    status: "Core Stack",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Languages",
    description: "Static typing, strict generics, and API contract modeling for reliable full-stack applications.",
    application: "Enforcing deterministic JSON tool-calling schemas and type-safe server actions.",
    status: "Core Stack",
  },
  {
    id: "c-cpp",
    name: "C / C++",
    category: "Languages",
    description: "Systems programming, manual memory management, and rigorous algorithmic efficiency.",
    application: "Collegiate Data Structures & Algorithms, competitive coding, and low-level compute understanding.",
    status: "Academic Foundation",
  },
  {
    id: "java",
    name: "Java",
    category: "Languages",
    description: "Object-oriented software engineering principles, design patterns, and JVM fundamentals.",
    application: "Academic coursework, backend enterprise concepts, and structured OOP system design.",
    status: "Academic Foundation",
  },
  {
    id: "sql",
    name: "SQL",
    category: "Database",
    description: "Relational database querying, schema normalization, indexing, and transactional integrity.",
    application: "Writing analytical queries, managing migrations, and relational constraints in PostgreSQL/MySQL.",
    status: "Core Stack",
  },
  {
    id: "html-css",
    name: "HTML5 / CSS3",
    category: "Frontend",
    description: "Semantic document markup, responsive accessibility standards, and modern layout systems.",
    application: "Accessible component structure, clean flexbox/grid layouts, and responsive web foundations.",
    status: "Core Stack",
  },

  // Frontend
  {
    id: "nextjs",
    name: "Next.js",
    category: "Frontend",
    description: "Full-stack React framework featuring App Router, Server Components, and optimized edge rendering.",
    application: "High-performance portfolio architecture, hackathon prototypes, and SSR/SSG applications.",
    status: "Core Stack",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    description: "Declarative component-driven UI library with hooks, concurrent rendering, and clean state flows.",
    application: "Modular user interfaces, custom design systems, and responsive interaction logic.",
    status: "Core Stack",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Utility-first styling system enabling disciplined tokenization, dark mode, and zero CSS bloat.",
    application: "Crafting atmospheric moonlight design systems and responsive component layouts.",
    status: "Core Stack",
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    category: "Frontend",
    description: "Component toolkit for rapid wireframing, responsive grids, and standard utility scaffolding.",
    application: "Quick prototyping of responsive layouts and academic web projects.",
    status: "Active Tool",
  },

  // Backend & APIs
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend",
    description: "High-performance Python web framework for asynchronous API endpoints with automatic OpenAPI docs.",
    application: "Building low-latency agent microservices and structured JSON model inference bridges.",
    status: "Core Stack",
  },

  // Tools & Version Control
  {
    id: "git",
    name: "Git",
    category: "Tools",
    description: "Distributed version control for disciplined branch workflows, rebases, and clean commit hygiene.",
    application: "Managing collegiate repositories, feature branches, and team hackathon codebases.",
    status: "Core Stack",
  },
  {
    id: "github",
    name: "GitHub",
    category: "Tools",
    description: "Collaboration platform for open-source code hosting, pull requests, and CI/CD automation.",
    application: "Collaborating with DRACARYS team members, code reviews, and project releases.",
    status: "Core Stack",
  },

  // AI / Emerging Technologies
  {
    id: "autonomous-agents",
    name: "Autonomous Agents",
    category: "AI / Emerging",
    description: "Multi-agent orchestration loops with tool sandboxing, memory reflection, and state machines.",
    application: "Architecting goal-oriented agent systems using LangGraph and deterministic validation guards.",
    status: "Core Stack",
  },
  {
    id: "llm-orchestration",
    name: "LLM Orchestration",
    category: "AI / Emerging",
    description: "Prompt engineering architectures, few-shot conditioning, and structured JSON schema enforcement.",
    application: "Integrating Gemini, OpenAI, and local Ollama models with deterministic reliability.",
    status: "Core Stack",
  },
  {
    id: "rag-retrieval",
    name: "RAG & Vector Search",
    category: "AI / Emerging",
    description: "Retrieval-Augmented Generation workflows combining dense neural embeddings and keyword search.",
    application: "Building private document retrieval pipelines with chunking optimization and vector stores.",
    status: "Core Stack",
  },
];
