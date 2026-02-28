

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
] as const;

export const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "404", href: "/404" },
] as const;

export const SOCIAL_LINKS = [
    { name: "LinkedIn",  shortLabel: "LI",    url: "https://www.linkedin.com/company/d-art-designer/" },
    { name: "YouTube",   shortLabel: "YT",    url: "https://www.youtube.com/@d_art_designer" },
    { name: "Instagram", shortLabel: "IN",    url: "#" },
    { name: "Behance",   shortLabel: "Be",    url: "#" },
    { name: "Pinterest", shortLabel: "PT",    url: "#" },
    { name: "Email",     shortLabel: "EMAIL", url: "mailto:hello@dartdesigner.com" },
] as const;

export const COMPANY_INFO = {
    name: "D'Art Designer",
    tagline: "Creations that Inspire",
    description: "Branding, packaging, and digital design services by D'Art Designer, India.",
    phone: "(+91) 99090 07231",
    address: {
        line1: "502/503, K10 GRAND, Behind Atlantis,",
        line2: "Sarabhai Campus, Alkapuri Road,",
        line3: "Vadiwadi, Vadodara, Gujarat 390023.",
    },
} as const;

export const ASSETS = {
    logoMain:   "/assets/dart_logo_og_cr.png",
    logoDBlack: "/assets/dart_d_bl.png",
    logoDOrange:"/assets/dart_d_og.png",
} as const;