"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { SOCIAL_LINKS, ASSETS } from "../constants/constants";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

// ─────────────────────────────────────────────────────────────────────────────
// Menu Configuration
// ─────────────────────────────────────────────────────────────────────────────
const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Close menu automatically on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Lock body scroll when menu is actively open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav className="absolute top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 lg:px-16 pt-8 pointer-events-none">
                {/* ── Left: Social Links ── */}
                {/* We use pointer-events-auto just on the clickable areas so we don't block clicks on the page beneath */}
                <div
                    className={`pointer-events-auto flex gap-4 lg:gap-6 font-medium text-sm lg:text-base uppercase tracking-wider transition-colors duration-500 ${isMenuOpen ? "text-orange-600 opacity-0" : "text-orange-600 opacity-100"}`}
                >
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target={social.url.startsWith("mailto") ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="border-b-[3px] border-orange-600 pb-0.5 hover:text-orange-500 hover:border-orange-500 transition-colors duration-300"
                            style={social.shortLabel === "Be" ? { textTransform: "none" } : undefined}
                        >
                            {social.shortLabel}
                        </a>
                    ))}
                </div>

                {/* ── Center Logo ── */}
                <Link href="/" className={`pointer-events-auto absolute left-1/2 -translate-x-1/2 outline-none transition-opacity duration-500 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}>
                    <img
                        src={ASSETS.logoMain}
                        alt="D-art Logo"
                        className="h-8 lg:h-12 object-contain"
                    />
                </Link>

                {/* ── Right: Hamburger Icon ── */}
                <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="pointer-events-auto flex flex-col gap-2.5 cursor-pointer w-10 justify-center group relative z-[100]"
                >
                    <span
                        className={`w-full h-[3px] origin-center transition-all duration-300 ${isMenuOpen ? "bg-white rotate-45 translate-y-[6.5px]" : "bg-orange-600 group-hover:bg-orange-500"}`}
                    ></span>
                    <span
                        className={`w-full h-[3px] origin-center transition-all duration-300 ${isMenuOpen ? "bg-white -rotate-45 -translate-y-[6.5px]" : "bg-orange-600 group-hover:bg-orange-500"}`}
                    ></span>
                </div>
            </nav>

            {/* Sidebar Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop (darkens the rest of the page) */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Slide-out Sidebar Box */}
                        <motion.div
                            className="fixed top-0 right-0 bottom-0 z-50 w-[400px] max-w-[100vw] bg-[#FF5E00] shadow-2xl flex flex-col py-32 px-12 overflow-y-auto"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        >
                            <ul className="flex flex-col gap-8 list-none p-0 m-0 mt-8">
                                {navLinks.map((link, i) => (
                                    <div key={link.name} className="overflow-hidden">
                                        <motion.li
                                            initial={{ x: 30, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: 30, opacity: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut",
                                                delay: 0.2 + (i * 0.05)
                                            }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className="font-bold text-white uppercase tracking-tight relative group inline-block py-1 outline-none"
                                                style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}
                                            >
                                                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                                                    {link.name}
                                                </span>

                                                {/* Hover underline effect */}
                                                <span
                                                    className="absolute left-0 right-0 bottom-0 h-[3px] bg-black origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"
                                                />
                                            </Link>
                                        </motion.li>
                                    </div>
                                ))}
                            </ul>

                            {/* Sidebar Footer Details */}
                            <motion.div
                                className="mt-auto pt-16 flex flex-col gap-2 text-white/80 text-xs tracking-widest uppercase font-medium"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <p className="m-0 mb-4 text-white font-bold tracking-widest">D-ART AGENCY</p>
                                <span>© {new Date().getFullYear()} D-Art</span>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}