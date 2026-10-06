import {
  ExperienceItem,
  ExpertiseItem,
  SkillGroup,
  EducationItem,
  TrainingItem,
  ProjectItem,
  AchievementItem
} from '../types';

export const HERO_STATS = [
  { value: "9.4", label: "Years Experience", description: "Official CV verified track record" },
  { value: "04", label: "Major Organizations", description: "Multi-sector corporate exposure" },
  { value: "BSc", label: "Computer Science Eng.", description: "Pundra Univ. of Science & Tech" },
  { value: "10+", label: "Professional Trainings", description: "Certified in safety & compliance" }
];

export const PROFESSIONAL_SUMMARY = {
  headline: "Strategic Administration, Operations & Compliance Specialist",
  narrative: [
    "Corporate operations professional with over 9 years of hands-on experience driving administrative excellence, statutory compliance, facility maintenance, and strategic local procurement across high-demand industrial and corporate environments.",
    "Proven expertise supervising large-scale manufacturing facilities, coordinating civil renovation projects, managing physical asset registers, and enforcing rigorous Fire Safety and Occupational Health standards.",
    "Combines grounded corporate operational leadership with strong technical acumen in Computer Science Engineering (BSc), Oracle ERP systems, data administration, and professional graphic design."
  ],
  focusAreas: [
    { title: "Corporate Administration", icon: "Building2", desc: "Executive liaison, workflow governance & office systems" },
    { title: "Facility Operations", icon: "Wrench", desc: "Plant upkeep, utilities monitoring & technical supervision" },
    { title: "Statutory Compliance", icon: "ShieldCheck", desc: "Audit readiness, labor codes & fire safety protocols" },
    { title: "Local Procurement", icon: "ShoppingBag", desc: "Vendor negotiation, RFQ evaluation & purchase management" },
    { title: "Asset Management", icon: "Layers", desc: "Fixed asset tracking, lifecycle maintenance & physical audits" },
    { title: "Creative Design", icon: "Palette", desc: "Branding collateral, visual assets & executive presentations" },
    { title: "IT & ERP Systems", icon: "Cpu", desc: "Oracle ERP operations, data integrity & workflow digitization" },
    { title: "Management Reporting", icon: "FileText", desc: "Audit documentation, MIS reports & executive briefs" }
  ]
};

export const CAREER_JOURNEY: ExperienceItem[] = [
  {
    id: "kido-bd",
    period: "2023 – Present",
    company: "KiDO Dhaka Co. Limited",
    role: "Senior Officer – Administration",
    summary: "Leading holistic plant administration, physical facility operations, contractor renovation oversight, asset procurement, and executive liaison in a premier manufacturing environment.",
    categories: [
      {
        categoryName: "FACILITY & TECHNICAL MAINTENANCE",
        details: [
          "Supervising daily operations, preventive maintenance schedules, and emergency repairs for extensive facility infrastructure.",
          "Monitoring electrical, water, HVAC, and generator utility systems to ensure continuous industrial uptime.",
          "Managing third-party engineering contractors, service-level agreements (SLAs), and routine technical inspections."
        ]
      },
      {
        categoryName: "CONSTRUCTION & RENOVATION",
        details: [
          "Directing civil renovation, architectural space planning, and structural modification projects within administrative and production zones.",
          "Coordinating on-site contractors, material quality verification, schedule adherence, and structural safety guidelines.",
          "Enforcing stringent environmental and physical safety measures during active renovation work."
        ]
      },
      {
        categoryName: "ASSET MANAGEMENT & PROCUREMENT",
        details: [
          "Supervising the comprehensive corporate fixed-asset register, asset tagging, and physical cycle counts.",
          "Directing local procurement cycles: vendor identification, quotation assessment, price negotiation, and purchase order processing.",
          "Managing material requisition workflows, store transfers, and scrap/asset decommissioning procedures."
        ]
      },
      {
        categoryName: "REPORTING & DOCUMENTATION",
        details: [
          "Compiling monthly operational cost reports, maintenance expenditure tracking, and administrative budget variances.",
          "Maintaining detailed equipment servicing logs, statutory inspection dossiers, and compliance verification papers.",
          "Drafting executive briefing notes and standard operating procedures (SOPs) for administrative departments."
        ]
      },
      {
        categoryName: "EXECUTIVE COORDINATION",
        details: [
          "Liaising smoothly with plant management, department heads, and government regulatory bodies.",
          "Managing company transport, cafeteria services, housekeeping standards, and security protocol execution.",
          "Organizing high-level management meetings, corporate VIP visits, and inter-departmental operational briefings."
        ]
      }
    ]
  },
  {
    id: "hameem-denim",
    period: "2020 – 2023",
    company: "Ha-Meem Denim Ltd.",
    role: "Assistant Officer – Compliance",
    summary: "Ensured total compliance with national labor laws, international buyer codes of conduct, fire safety systems, and occupational health regulations in a world-class textile manufacturing enterprise.",
    bulletPoints: [
      "Audited factory floor operations against social compliance codes, buyer requirements, and statutory labor laws.",
      "Conducted fire safety drills, evacuation simulations, and routine checks on fire detection and suppression apparatus.",
      "Prepared documentation dossiers for third-party buyer social audits, environmental assessments, and compliance renewals.",
      "Facilitated safety committee meetings, worker grievance procedures, and emergency response team (ERT) readiness."
    ]
  },
  {
    id: "zaber-spinning",
    period: "2018 – 2020",
    company: "Zaber Spinning Mills",
    role: "Data Entry Operator & Office Management",
    summary: "Maintained accurate manufacturing ledgers, ERP data inputs, production statistics, and day-to-day clerical office operations.",
    bulletPoints: [
      "Accurately entered and validated daily production logs, raw material reconciliations, and dispatch data into enterprise databases.",
      "Organized physical and digital filing repositories for departmental correspondence, invoices, and supplier receipts.",
      "Assisted administrative executives with shift scheduling, staff attendance tracking, and administrative reports."
    ]
  },
  {
    id: "advance-design",
    period: "2017 – 2018",
    company: "Advance Design & Technology",
    role: "Data Entry Operator",
    summary: "Executed computer data processing, documentation scanning, record indexing, and administrative support tasks.",
    bulletPoints: [
      "Transcribed technical data sheets, project blueprints, and commercial documents into standardized digital archives.",
      "Verified entry accuracy to maintain error-free database records and client project files.",
      "Supported front-office administrative coordination, inventory logs, and equipment supplies."
    ]
  }
];

export const CORE_EXPERTISE: ExpertiseItem[] = [
  {
    id: "admin",
    title: "Corporate Administration",
    subtitle: "Governance & Operations",
    description: "Complete oversight of executive office workflows, corporate logistics, policy implementation, personnel support, and administrative budgeting.",
    iconName: "Briefcase"
  },
  {
    id: "facility",
    title: "Facility Management",
    subtitle: "Infrastructure & Utilities",
    description: "Preventive maintenance, space planning, plant utility monitoring, contractor management, and structural renovation supervision.",
    iconName: "Building"
  },
  {
    id: "compliance",
    title: "Statutory & Social Compliance",
    subtitle: "Audits & Life Safety",
    description: "Rigorous enforcement of national labor codes, buyer standards, Fire Safety Master Trainer protocols, and OHS management.",
    iconName: "ShieldAlert"
  },
  {
    id: "procurement",
    title: "Local Procurement",
    subtitle: "Sourcing & Negotiations",
    description: "End-to-end purchasing lifecycle: supplier qualification, RFQ evaluation, vendor bargaining, cost control, and delivery verification.",
    iconName: "ShoppingCart"
  },
  {
    id: "assets",
    title: "Asset Management",
    subtitle: "Lifecycle & Inventory Audits",
    description: "Systematic fixed-asset tracking, serial tagging, periodic physical stock verification, lifecycle depreciation, and disposal controls.",
    iconName: "Database"
  },
  {
    id: "erp",
    title: "Office & ERP Management",
    subtitle: "Systems & Data Integrity",
    description: "Hands-on execution in Oracle ERP, digital workflow entry, transactional auditing, and operational system automation.",
    iconName: "MonitorCheck"
  },
  {
    id: "design",
    title: "Graphic & Collateral Design",
    subtitle: "Visual Communication",
    description: "Professional asset creation in Adobe Photoshop & Illustrator: branding materials, business cards, technical signage, and presentations.",
    iconName: "PenTool"
  },
  {
    id: "reporting",
    title: "Documentation & Reporting",
    subtitle: "Executive Intelligence",
    description: "Preparation of audit-ready compliance dossiers, monthly operational variance reports, SOP manuals, and management summaries.",
    iconName: "ClipboardList"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "DESIGN & CREATIVE COLLATERAL",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Graphic Design",
      "Logo Design",
      "Business Card Design"
    ]
  },
  {
    category: "OFFICE & PRODUCTIVITY SUITE",
    skills: [
      "MS Word",
      "MS Excel",
      "MS PowerPoint",
      "Microsoft Project"
    ]
  },
  {
    category: "IT, ERP & DATA MANAGEMENT",
    skills: [
      "Oracle ERP",
      "Data Entry & Integrity",
      "Web Browsing & Research",
      "Windows Explorer & OS"
    ]
  },
  {
    category: "MEDIA & CONTENT CREATIVE",
    skills: [
      "Photography",
      "Video Editing"
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "BSc in Computer Science Engineering",
    institution: "Pundra University of Science and Technology",
    year: "2022",
    field: "Computer Science & Engineering",
    grade: "GPA: 3.19 / 4.00"
  },
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "Palashbari Polytechnic Institute",
    year: "2016",
    field: "Information & Computing Technology",
    grade: "GPA: 3.16 / 4.00"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Faridpur BL High School",
    year: "2012",
    field: "Science Group",
    grade: "GPA: 4.50 / 5.00"
  }
];

export const TRAINING_LIST: TrainingItem[] = [
  {
    title: "Fire Safety & Emergency Evacuation Training",
    institution: "Fire Service and Civil Defence (FSCD)",
    year: "Certified",
    category: "Fire Safety",
    duration: "Intensive Practical Course",
    location: "Government Training Facility"
  },
  {
    title: "Social Compliance & Fire Safety Master Trainer",
    institution: "BRAC",
    year: "Certified",
    category: "Compliance",
    duration: "Master Trainer Program",
    location: "Corporate Training Center"
  },
  {
    title: "Professional Corporate Communication & Negotiation",
    institution: "10 Minute School",
    year: "Completed",
    category: "Communication",
    duration: "Professional Series",
    location: "Digital Learning"
  },
  {
    title: "Office Administration & Executive Workflow Leadership",
    institution: "10 Minute School",
    year: "Completed",
    category: "Corporate Skills",
    duration: "Executive Course",
    location: "Digital Learning"
  },
  {
    title: "Advanced Graphic Design & Digital Collateral",
    institution: "Professional Design Institute",
    year: "Completed",
    category: "Creative Skills",
    duration: "Practical Studio Modules",
    location: "Design Academy"
  },
  {
    title: "Industrial Automation & Engineering Attachment",
    institution: "Polytechnic Industrial Attachment Program",
    year: "Completed",
    category: "Industrial Training",
    duration: "3-Month Full-Time Attachment",
    location: "Industrial Center"
  }
];

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    title: "FIRE APP",
    tagline: "Fire Safety Reference & Compliance Knowledge Application",
    description: "A specialized utility application developed from extensive hands-on operational field notes on industrial fire safety. The app systematically indexes essential answers, life-safety procedures, equipment inspection guidelines, and emergency protocols to assist floor supervisors during drills and compliance reviews.",
    highlights: [
      "Engineered from real-world industrial fire safety inspection notes and FSCD protocols.",
      "Structured rapid lookup for fire hazard classification, extinguisher matching, and evacuation steps.",
      "Designed as a portable reference utility supporting corporate workplace safety culture."
    ],
    technologies: ["Safety Protocols", "Knowledge Architecture", "UI Design", "Emergency SOPs"]
  }
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    title: "FSCD Fire Safety Certification",
    issuer: "Fire Service and Civil Defence Directorate",
    description: "Official credential recognizing practical mastery in fire extinguishing, industrial rescue operations, and plant evacuation leadership."
  },
  {
    title: "BRAC Social Compliance Master Trainer",
    issuer: "BRAC",
    description: "Certified as a qualified Master Trainer in factory social compliance, worker safety protocols, and workplace ethics."
  },
  {
    title: "Digital Innovation Fair Recognition",
    issuer: "Government Digital Innovation Fair",
    description: "Awarded official recognition certificate for demonstrated computer engineering initiatives and digital contributions."
  },
  {
    title: "10 Minute School Professional Credentials",
    issuer: "10 Minute School",
    description: "Verified certificates in corporate office leadership, interpersonal negotiation, and executive productivity."
  }
];
