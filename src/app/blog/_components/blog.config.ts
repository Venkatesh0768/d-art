// ─────────────────────────────────────────────────────────────────────────────
//  BLOG PAGE — CENTRAL CONTENT CONFIG
//  Edit ALL text, labels, and imagery for the Blog page right here.
// ─────────────────────────────────────────────────────────────────────────────

// ── Section 1 · Hero / Intro ──────────────────────────────────────────────────
export const BLOG_HERO = {
  /** Small label that floats above the heading (the orange dot accent) */
  eyebrow: "Blog",

  /** Main heading — shown in two lines */
  headingLine1: "Insights & Creative",
  headingLine2: "Thinking",

  /** Short description shown beside / below the heading */
  description:
    "Explore branding, design strategy, and digital growth ideas that help modern businesses stand out and scale with confidence.",

  /**
   * Accent dot color (the small circle next to the heading).
   * Uses a Tailwind bg-* class or an inline hex string.
   */
  accentColor: "#FF4400",
} as const;

// ── Section 2 · Blog Articles Grid ─────────────────────────────────────────────
export const BLOG_POSTS = [
  {
    id: 1,
    image: "/assets/blog/img1.png",
    date: "Feb 12, 2025",
    title: "Why Strong Branding Is Your Business’s Greatest Asset",
    linkText: "READ MORE",
  },
  {
    id: 2,
    image: "/assets/blog/img2.png",
    date: "Feb 05, 2025",
    title: "How Packaging Design Influences Buying Decisions",
    linkText: "READ MORE",
  },
  {
    id: 3,
    image: "/assets/blog/img3.png",
    date: "Jan 28, 2025",
    title: "Designing Websites That Convert, Not Just Look Good",
    linkText: "READ MORE",
  },
  {
    id: 4,
    image: "/assets/blog/img4.png",
    date: "Jan 20, 2025",
    title: "The Role of Digital Marketing in Brand Growth",
    linkText: "READ MORE",
  },
];

// ── Section 3 · More Articles List ───────────────────────────────────────────
export const BLOG_MORE_ARTICLES = {
  heading: "More articles",
  sidebarText:
    "Explore our full library of branding insights, creative strategy, and design thinking.",
  buttonText: "Load more",
  articles: [
    {
      id: 5,
      date: "Feb 12, 2025",
      title: "Why Strong Branding Is Your Business’s Greatest Asset",
      link: "#",
    },
    {
      id: 6,
      date: "Feb 12, 2025",
      title: "Why Strong Branding Is Your Business’s Greatest Asset",
      link: "#",
    },
    {
      id: 7,
      date: "Feb 05, 2025",
      title: "How Packaging Design Influences Buying Decisions",
      link: "#",
    },
    {
      id: 8,
      date: "Jan 28, 2025",
      title: "Designing Websites That Convert, Not Just Look Good",
      link: "#",
    },
    {
      id: 9,
      date: "Jan 20, 2025",
      title: "The Role of Digital Marketing in Brand Growth",
      link: "#",
    },
    {
      id: 10,
      date: "Dec 22, 2024",
      title: "Building a Consistent Brand Across Every Platform",
      link: "#",
    },
    {
      id: 11,
      date: "Jan 10, 2025",
      title: "Rebranding: When and Why Your Business Needs It",
      link: "#",
    },
  ],
} as const;
