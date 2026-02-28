// ═══════════════════════════════════════════════════════════════════════════
// PROJECTS – MASTER DATA FILE
// ───────────────────────────────────────────────────────────────────────────
// To add a new project:
//   1. Add images to /public/assets/projects/
//   2. Add a new entry to the ALL_PROJECTS array below.
//   3. That's it — the listing page, detail page, and "More Projects" all update.
// ═══════════════════════════════════════════════════════════════════════════

export interface Project {
  id: number;
  /** Card thumbnail + hero image */
  image: string;
  /** Optional: additional images shown in the gallery grid on the detail page */
  galleryImages?: string[];
  /** Optional: brand hex colors shown as swatches on the detail page */
  brandColors?: string[];
  title: string;
  category: string;
  published: string;
  designer: string;
  /** Short project description — shown on hover + detail info section */
  description: string;
  // ── Detail page info panels ──────────────────────────────────────────────
  /** "Project overview" right-column paragraph */
  overview?: string;
  /** "Branding approach" left-column paragraph */
  approach?: string;
  /** "Design outcome" right-column paragraph */
  outcome?: string;
  /** Client name for project details block */
  client?: string;
  /** Media type for project details block */
  media?: string;
  // ────────────────────────────────────────────────────────────────────────
  /** If true, the card spans both columns on the listing page */
  fullWidth?: boolean;
}

// ─── Listing page section header ────────────────────────────────────────────
export const SECTION2_HEADER = {
  label: "Selected Projects",
  sublabel: "We solve business challenges through strategy & design.",
  description:
    "Each project here started with a challenge and ended with measurable success. See how we tackle complex problems with clear solutions.",
};

// ─── ALL PROJECTS ────────────────────────────────────────────────────────────
// id:0 is the featured top hero on the listing page.
// Remaining ids (1–N) appear in the grid below.
export const ALL_PROJECTS: Project[] = [
  {
    id: 0,
    image: "/assets/projects/section1image.png",
    title: "Agasti International School",
    category: "Education Brand Identity",
    published: "Published — June 2025",
    designer: "D art Designer",
    description:
      "A modern education brand built to nurture curiosity, confidence, and global learning – helping Agasti International School stand out through thoughtful, trustworthy, and future-focused branding.",
    brandColors: ["#1B7A70", "#F5A623", "#FFFFFF", "#333336", "#000000"],
  },
  {
    id: 1,
    image: "/assets/projects/section2image1.png",
    galleryImages: [
      "/assets/projects/project1/img1.png",
      "/assets/projects/project1/img2.png",
      "/assets/projects/project1/img3.png",
      "/assets/projects/project1/img4.png",
      "/assets/projects/project1/img5.png",
      "/assets/projects/project1/img6.png",
      "/assets/projects/project1/img7.png",
      "/assets/projects/project1/img8.png",
      "/assets/projects/project1/img9.png",
      "/assets/projects/project1/img10.png",
      "/assets/projects/project1/img11.png",
      "/assets/projects/project1/img12.png",
      "/assets/projects/project1/img13.png",
      "/assets/projects/project1/img14.png",
    ],
    title: "G Marts",
    category: "Retail Brand Identity",
    published: "Published — January 2024",
    designer: "D art Designer",
    description:
      "A modern retail identity built to make everyday shopping accessible, fresh, and trustworthy – helping G Mart stand out through bold, smart branding.",
    overview:
      "G Mart is a modern retail brand by Gahoi, created to make everyday shopping more convenient through quality products and smart pricing. The brand focuses on accessibility, freshness, and variety — serving the needs of both urban and semi-urban customers with a simple and trustworthy retail experience.",
    approach:
      "The goal was to build a brand identity that feels familiar, reliable, and easy to recognise in a competitive retail environment. We focused on clean visuals, bold brand presence, and consistent design elements that communicate trust and approachability across all touchpoints.",
    outcome:
      "The final identity system includes a strong logo, cohesive visual assets, and print-ready branding materials. The design reflects simplicity and clarity, helping G Mart stand out while remaining accessible to a wide customer base.",
    client: "Verious",
    media: "Print Media",
    brandColors: ["#5B2D8E", "#F5A623", "#FFFFFF", "#F6F6F6", "#000000"],
  },

  {
    id: 2,
    image: "/assets/projects/section2image2.png",
    title: "Naksh Holiday",
    category: "Retail Brand Identity",
    published: "Published — January 2024",
    designer: "D art Designer",
    description:
      "A vibrant travel brand crafted to inspire wanderlust – positioning Naksh Holiday as the go-to destination for memorable, seamless journeys.",
    brandColors: ["#1A5C9B", "#E8B84B", "#FFFFFF", "#333336", "#000000"],
  },
  {
    id: 3,
    image: "/assets/projects/section2image3.png",
    title: "Cheetah Logistics",
    category: "Retail Brand Identity",
    published: "Published — January 2024",
    designer: "D art Designer",
    description:
      "A powerful logistics identity built on speed and reliability – helping Cheetah Logistics project confidence across every touchpoint.",
    brandColors: ["#1C2B4A", "#F0A500", "#FFFFFF", "#DEDEE2", "#000000"],
  },
  {
    id: 4,
    image: "/assets/projects/section2image4.png",
    title: "HanuRam",
    category: "Traditional Indian Food Brand",
    published: "Published — January 2024",
    designer: "D art Designer",
    description:
      "A culturally rooted food brand celebrating India's culinary heritage – blending tradition with contemporary packaging to win hearts on every shelf.",
    brandColors: ["#C0392B", "#F39C12", "#FFFFFF", "#333336", "#000000"],
  },
  {
    id: 5,
    image: "/assets/projects/section2image5.png",
    title: "Veggy",
    category: "Nutritional Superfood",
    published: "Published — March 2025",
    designer: "D art Designer",
    description:
      "A fresh, health-forward brand identity designed to communicate purity and nutrition – making superfoods approachable for every household.",
    brandColors: ["#2D7D32", "#8BC34A", "#FFFFFF", "#F5F5F5", "#333336"],
  },
  {
    id: 6,
    image: "/assets/projects/section2image6.png",
    title: "OOOHM Food",
    category: "Snack Brand Identity",
    published: "Published — May 2024",
    designer: "D art Designer",
    description:
      "A bold, youthful snack identity built to pop off the shelf – energetic colors and playful design make OOOHM impossible to ignore.",
    brandColors: ["#1565C0", "#FFD600", "#FF6F00", "#FFFFFF", "#000000"],
  },
  {
    id: 7,
    image: "/assets/projects/section2image7.png",
    title: "Snoofy",
    category: "Ice-Cream Brand Identity",
    published: "Published — January 2025",
    designer: "D art Designer",
    description:
      "A delightful ice-cream brand identity built around joy and indulgence – playful characters and a vibrant palette that appeals to all ages.",
    brandColors: ["#111111", "#FF5252", "#FFD740", "#FFFFFF", "#DEDEE2"],
    fullWidth: true,
  },
  {
    id: 8,
    image: "/assets/projects/section2image8.png",
    title: "Dios",
    category: "Bold Condiment Brand",
    published: "Published — October 2024",
    designer: "D art Designer",
    description:
      "A bold, flavour-forward condiment brand built to command attention – rich visuals and confident typography that speak to food lovers everywhere.",
    brandColors: ["#1A1A2E", "#E94560", "#F5A623", "#FFFFFF", "#DEDEE2"],
  },
  {
    id: 9,
    image: "/assets/projects/section2image9.png",
    title: "Caryl",
    category: "Skincare & Cosmetics",
    published: "Published — June 2024",
    designer: "D art Designer",
    description:
      "A premium skincare identity crafted with elegance and trust – clean aesthetics and sophisticated packaging that resonate with the modern consumer.",
    brandColors: ["#4A4A4A", "#A8D5BA", "#F2E8DC", "#FFFFFF", "#333336"],
  },
];

// ─── Convenience helpers ─────────────────────────────────────────────────────
/** The featured hero card (id 0) shown at the top of the listing page */
export const FEATURED_PROJECT = ALL_PROJECTS.find((p) => p.id === 0)!;

/** All grid cards (id 1+) shown in the scrollable grid */
export const PROJECTS = ALL_PROJECTS.filter((p) => p.id !== 0);
