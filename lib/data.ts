export const site = {
  name: "Christopher James Castillo",
  shortName: "CJC",
  title: "Web Developer",
  tagline:
    "Building solutions through code — from government systems to AI-powered prototypes.",
  location: "Bago City, Negros Occidental, Philippines",
  photo: "/profile.jpg",
  email: "leyesjam@gmail.com",
  phone: "09937912514",
  phoneHref: "tel:+639937912514",
  /**
   * Replace with the production URL once the Vercel domain is set.
   * Used by metadata, sitemap.ts, and robots.ts.
   */
  url: "https://christopherjamescastillo.vercel.app",
  /** Replace with the live GitHub profile URL before launch. */
  github: "https://github.com/leyesjam-spec",
  /** Replace with the live LinkedIn profile URL before launch. */
  linkedin: "www.linkedin.com/in/christopher-james-castillo-38979a436",
} as const;

export const about =
  "A web developer with a strong interest in building solutions through code. Skilled in problem-solving and debugging, with a willingness to learn new technologies and adapt to challenges. Committed to continuous improvement and developing technical expertise.";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const sectionIds = navLinks.map((link) => link.href.slice(1));

export type Experience = {
  role: string;
  organization: string;
  dates: string;
  description: string;
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "OJT Developer",
    organization: "Farm Management System (FAMAS)",
    dates: "February 2026 – May 2026",
    description:
      "Developed a multi-tenant farm management platform with timesheet tracking and approval workflows, task management, inventory and accounting modules, and role-based access control, using Next.js, Tailwind CSS, Node.js, and PostgreSQL.",
    tech: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
  },
];

export type Project = {
  title: string;
  role: string;
  dates: string;
  name?: string;
  description: string;
  liveUrl?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    title: "Capstone Project",
    role: "Developer",
    dates: "March 2025 – December 2025",
    name: "Bago City Population and Development Office Marriage Expectation Analysis and Record Management System with Predictive Analytics",
    description:
      "Built and deployed a record management system with predictive analytics for the Bago City Population and Development Office, enabling data-driven insights into marriage and family planning trends. Live and in active use by the office.",
    liveUrl: "https://pmoc.bccbsis.com",
  },
  {
    title: "BSIS Hackathon 2nd Sprint",
    role: "Data Analyst",
    dates: "November 2025",
    name: "BantayKalusugan: Barangay Health Monitoring System",
    description:
      "Built a prototype AI-assisted monitoring system that analyzes barangay-level health data and flags at-risk cases based on recorded health indicators.",
  },
  {
    title: "Cybersecurity CTF Competitor",
    role: "DICT Hack4Gov",
    dates: "October 2025",
    description:
      "Competed in a DICT-run regional cybersecurity competition focused on ethical hacking and cyber defense techniques for national digital infrastructure.",
  },
  {
    title: "AI Ideas for Impact Hackathon",
    role: "Developer",
    dates: "September 2025",
    name: "FAMTRACK: AI-Powered Pre-Marriage Records Digitization and Counseling System",
    description:
      "Developed a prototype AI-powered system that digitizes pre-marriage records and generates personalized counseling recommendations, designed to help LGUs forecast family growth and service needs.",
    badge: "Top 10 Finalist",
  },
  {
    title: "BSIS Hackathon 1st Sprint",
    role: "Data Analyst",
    dates: "December 2024",
    name: "DRIVO: Modernizing Local Transport and Enhanced Passenger Safety",
    description:
      "Developed a full-stack transit safety platform using a PHP and MySQL backend to securely manage driver and passenger data, with a responsive, mobile-first Tailwind CSS interface.",
  },
  {
    title: "Mini Capstone",
    role: "Developer",
    dates: "September 2024 – December 2024",
    name: "Book Inventory Management System",
    description:
      "Built a full-stack inventory management system for libraries and bookstores with a PHP/MySQL backend and a responsive Bootstrap interface, featuring CRUD operations and JavaScript-powered instant search.",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS", "React.js"],
  },
  {
    category: "Backend",
    items: ["PHP", "Node.js", "Express.js", "Laravel", "Java", "C++"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Other",
    items: ["Figma", "Android (Java)", "Photo & Video Editing", "Flash Animation"],
  },
];

export type Education = {
  degree: string;
  school: string;
  years: string;
};

export const education: Education = {
  degree: "Bachelor of Science in Information System",
  school: "Bago City College",
  years: "2022 – 2026",
};

export function isPlaceholderUrl(url: string): boolean {
  return url.length === 0 || url.startsWith("#TODO");
}
