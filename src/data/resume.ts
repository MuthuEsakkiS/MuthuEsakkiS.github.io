// Single source of truth for all portfolio content.
// Update this file to change anything shown on the site.

export const personal = {
  name: "Esakkimuthu Sivaraman",
  role: "Backend / Product Engineer",
  tagline:
    "Backend Engineer building scalable Python & Django platforms for compliance, healthcare, and EdTech.",
  location: "Chennai, India",
  email: "esakimuthusivaraman@gmail.com",
  phone: "+91 8870417101",
  linkedin: "https://linkedin.com/in/esakkimuthusivaraman",
  github: "https://github.com/MuthuEsakkiS",
  resumeUrl: "/resume/Esakkimuthu_Sivaraman_Backend_Engineer.pdf",
  summary:
    "Backend Engineer with 4.5+ years building scalable Python/Django/REST platforms across compliance, healthcare, hospitality, and EdTech domains. Skilled in multi-tenant RBAC architectures, async task pipelines, payment system idempotency, and AI/LLM-assisted workflows. Proven record of translating complex domain requirements into production-grade APIs within fast-paced Agile teams.",
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks & APIs",
    items: ["Django", "Django REST Framework", "FastAPI", "Django Channels"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "CI/CD"],
  },
  {
    title: "Architecture",
    items: [
      "Multi-Tenant RBAC",
      "Event-Driven Design",
      "Async Processing",
      "Celery",
      "WebSockets",
    ],
  },
  {
    title: "Integrations",
    items: [
      "Stripe",
      "Razorpay",
      "LeadSquared CRM",
      "Twilio",
      "AWS SES",
      "Firebase",
      "GenAI / LLM Integrations",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Predigle",
    role: "Product Engineer",
    location: "Chennai, India",
    start: "Apr 2025",
    end: "Present",
    points: [
      "Architected REST APIs mapping regulatory frameworks (SOC 2, NIST, HIPAA, CMMC) into versioned control hierarchies, powering an audit-ready GRC assessment engine with evidence tracking, multi-tenant RBAC, and internal/external reviewer workflows.",
      "Built AI-assisted bulk answering (Excel-schema upload plus LLM auto-mapping of evidence to controls) and secure, link-based external sharing for client-to-client assessments; extended the platform with asset inventory and risk-to-ticket remediation tracking.",
      "Engineered a healthcare fax-intake and data-extraction pipeline (patient, provider, payer, prescription data) with human-in-the-loop verification and bidirectional sync to the client's database.",
      "Automated prior authorization (PA) packet generation by running AI against payer policies, producing clinical summaries and submitting packets to third-party portals (e.g., CoverMyMeds, Availity).",
    ],
  },
  {
    company: "Cyces Innovation Labs LLP",
    role: "Backend Developer",
    location: "Chennai, India",
    start: "Jun 2023",
    end: "Mar 2025",
    points: [
      "Delivered Django/DRF/PostgreSQL backends with full CRUD APIs and dashboards across three concurrent platforms: hospitality/PG management (properties, billing, ticketing, resident portal), an online music academy (batching, attendance, teacher/admin calendars), and a sports training system (enrollment, scheduling, streaks) spanning web and mobile clients.",
      "Engineered idempotent Razorpay/Stripe webhook handlers across all booking and payment flows, eliminating transaction state failures.",
      "Migrated heavy synchronous reporting workflows to Celery/Redis task queues, removing API response timeouts.",
      "Built a bidirectional REST integration with a third-party lead-management CRM (LeadSquared), pushing enquiry data in real time and pulling qualified leads back to unify ad-sourced enquiries with the platform's booking pipeline.",
      "Built an omni-channel (email/push/SMS) notification hub via Twilio and AWS SES for real-time session and booking alerts.",
    ],
  },
  {
    company: "Thoughtworks",
    role: "Application Developer",
    location: "Coimbatore, India",
    start: "Mar 2022",
    end: "Mar 2023",
    points: [
      "Completed a 4-month structured onboarding in clean-code practices, TDD, Agile team workflows, and pair programming before moving into full-time delivery.",
      "Delivered secure REST API features for a tier-1 global banking client in a heavily regulated environment.",
    ],
  },
];

export type Project = {
  title: string;
  org: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "AI-Assisted GRC Assessment Engine",
    org: "Predigle",
    period: "2025 – Present",
    description:
      "Audit-ready governance, risk & compliance platform mapping SOC 2, NIST, HIPAA, and CMMC frameworks into versioned, assessable control hierarchies.",
    highlights: [
      "Multi-tenant RBAC with internal/external reviewer workflows and evidence tracking",
      "AI auto-mapping of bulk evidence (Excel upload) to compliance controls via LLMs",
      "Secure, link-based external sharing for client-to-client assessments",
      "Asset inventory and risk-to-ticket remediation tracking",
    ],
    tags: ["Django", "DRF", "PostgreSQL", "LLM/GenAI", "Multi-Tenant RBAC"],
  },
  {
    title: "Healthcare Fax-Intake & Prior Authorization Automation",
    org: "Predigle",
    period: "2025 – Present",
    description:
      "End-to-end pipeline that extracts patient, provider, payer, and prescription data from inbound faxes, then automates prior-authorization packet generation.",
    highlights: [
      "Human-in-the-loop verification with bidirectional sync to client databases",
      "AI-driven analysis of payer policies to generate clinical summaries",
      "Automated packet submission to third-party portals (CoverMyMeds, Availity)",
    ],
    tags: ["Python", "AI/LLM", "Healthcare", "Data Extraction"],
  },
  {
    title: "Multi-Platform Booking & Management Suite",
    org: "Cyces Innovation Labs",
    period: "2023 – 2025",
    description:
      "Three concurrent Django/DRF platforms spanning hospitality (PG management), EdTech (music academy), and sports training — each with full booking, billing, and scheduling workflows across web and mobile.",
    highlights: [
      "Idempotent Razorpay/Stripe webhook handling across all payment and booking flows",
      "Migrated synchronous reporting to Celery/Redis task queues, eliminating API timeouts",
      "Bidirectional CRM sync (LeadSquared) to unify ad-sourced enquiries with the booking pipeline",
      "Omni-channel notification hub (email/push/SMS) via Twilio and AWS SES",
    ],
    tags: [
      "Django",
      "Celery",
      "Redis",
      "Razorpay",
      "Stripe",
      "Twilio",
      "LeadSquared",
    ],
  },
  {
    title: "Secure Banking REST APIs",
    org: "Thoughtworks",
    period: "2022 – 2023",
    description:
      "Secure, well-tested REST API features delivered for a tier-1 global banking client in a heavily regulated environment.",
    highlights: [
      "Structured 4-month onboarding in clean-code practices, TDD, and pair programming",
      "Delivered secure REST API features for a tier-1 global banking client",
      "Agile delivery inside a heavily regulated, large enterprise environment",
    ],
    tags: ["Python", "REST APIs", "TDD", "Banking"],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  location: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    school: "Sri Krishna College of Technology",
    degree: "B.E. in Computer Science",
    location: "Coimbatore, India",
    period: "2018 – 2022",
  },
];

export const stats = [
  { label: "Years of Experience", value: "4.5+" },
  { label: "Production Platforms Shipped", value: "6+" },
  { label: "Industries", value: "4" },
];
