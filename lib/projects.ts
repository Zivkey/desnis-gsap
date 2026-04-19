export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  tag: string;
  category: "Web" | "E-commerce" | "Brand" | "Web App";
  gradient: string;
  accent: string;
  summary: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "halcyon",
    title: "Halcyon",
    client: "Halcyon Audio",
    year: "2025",
    tag: "Brand / E-commerce",
    category: "E-commerce",
    gradient:
      "radial-gradient(120% 90% at 20% 10%, #ffb347 0%, transparent 60%), radial-gradient(120% 90% at 80% 90%, #5eb3ff 0%, transparent 60%), linear-gradient(135deg, #2a0a2a, #0c0a1c)",
    accent: "#ffb347",
    summary:
      "Audio brand storefront, vibecoded in Shopify Hydrogen with a custom product configurator.",
    featured: true,
  },
  {
    slug: "northline",
    title: "Northline",
    client: "Northline Capital",
    year: "2025",
    tag: "Fintech / Web App",
    category: "Web App",
    gradient:
      "radial-gradient(120% 90% at 80% 20%, #7c86ff 0%, transparent 60%), radial-gradient(120% 90% at 20% 80%, #4f6bff 0%, transparent 60%), linear-gradient(135deg, #0a0d2a, #0c0a1c)",
    accent: "#7c86ff",
    summary:
      "Investor dashboard with real-time data, SSO auth, and a polished marketing site — one codebase.",
    featured: true,
  },
  {
    slug: "fieldnote",
    title: "Fieldnote",
    client: "Fieldnote Journal",
    year: "2024",
    tag: "Publication / Editorial",
    category: "Web",
    gradient:
      "radial-gradient(120% 90% at 10% 10%, #a5b4fc 0%, transparent 55%), radial-gradient(120% 90% at 90% 90%, #5eb3ff 0%, transparent 60%), linear-gradient(135deg, #0d1230, #0a0b14)",
    accent: "#a5b4fc",
    summary:
      "Independent publication with MDX-driven editorial system and reader memberships.",
    featured: true,
  },
  {
    slug: "plate-plate",
    title: "Plate/Plate",
    client: "Plate/Plate",
    year: "2024",
    tag: "Restaurant / CMS",
    category: "Web",
    gradient:
      "radial-gradient(120% 90% at 80% 10%, #7c86ff 0%, transparent 55%), radial-gradient(120% 90% at 20% 90%, #a5b4fc 0%, transparent 60%), linear-gradient(135deg, #0e1230, #0a0b14)",
    accent: "#7c86ff",
    summary:
      "Restaurant group site with multilingual menus, reservations, and integrated loyalty.",
    featured: true,
  },
  {
    slug: "orbit-studio",
    title: "Orbit",
    client: "Orbit Studio",
    year: "2024",
    tag: "Agency / Portfolio",
    category: "Web",
    gradient:
      "radial-gradient(120% 90% at 20% 80%, #7c86ff 0%, transparent 55%), radial-gradient(120% 90% at 80% 20%, #5eb3ff 0%, transparent 60%), linear-gradient(135deg, #180f2a, #0c0a1c)",
    accent: "#a5b4fc",
    summary:
      "Interactive agency portfolio with scroll-pinned case studies and custom WebGL hero.",
  },
  {
    slug: "nova-bank",
    title: "Nova",
    client: "Nova Bank",
    year: "2024",
    tag: "Fintech / Brand",
    category: "Brand",
    gradient:
      "radial-gradient(120% 90% at 70% 30%, #5eb3ff 0%, transparent 55%), radial-gradient(120% 90% at 30% 70%, #ff3b61 0%, transparent 60%), linear-gradient(135deg, #1f0a2a, #0c0a1c)",
    accent: "#5eb3ff",
    summary:
      "Full rebrand and marketing site for a neobank, including onboarding flow and tokenized UI kit.",
  },
  {
    slug: "grove",
    title: "Grove",
    client: "Grove Skincare",
    year: "2023",
    tag: "E-commerce / Brand",
    category: "E-commerce",
    gradient:
      "radial-gradient(120% 90% at 10% 90%, #7c86ff 0%, transparent 55%), radial-gradient(120% 90% at 90% 10%, #a5b4fc 0%, transparent 60%), linear-gradient(135deg, #0e0a2a, #0c0a1c)",
    accent: "#7c86ff",
    summary:
      "Clean-beauty storefront with subscription model, custom quiz funnel, and Stripe backend.",
  },
  {
    slug: "aether-ai",
    title: "Aether",
    client: "Aether AI",
    year: "2023",
    tag: "AI / SaaS",
    category: "Web App",
    gradient:
      "radial-gradient(120% 90% at 50% 50%, #7c86ff 0%, transparent 50%), radial-gradient(120% 90% at 90% 90%, #5eb3ff 0%, transparent 60%), linear-gradient(135deg, #120e28, #0c0a1c)",
    accent: "#7c86ff",
    summary:
      "SaaS marketing site with interactive product demo, gated docs, and team auth.",
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export const CLIENT_LOGOS = [
  "Halcyon Audio",
  "Northline Capital",
  "Fieldnote",
  "Plate/Plate",
  "Orbit Studio",
  "Nova Bank",
  "Grove",
  "Aether AI",
  "Lumen Labs",
  "Circle & Co",
  "Helix Health",
  "Vertex Games",
];
