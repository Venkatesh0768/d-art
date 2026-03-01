"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BLOG_MORE_ARTICLES, BLOG_HERO } from "./blog.config";
import { RefreshCw } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
//  BlogSection3 — More Articles List
//  Left sidebar text + Right main list with dividers
// ─────────────────────────────────────────────────────────────────────────────

const BlogSection3 = () => {
    const { heading, sidebarText, buttonText, articles } = BLOG_MORE_ARTICLES;

    return (
        <section
            className="w-full bg-white overflow-hidden"
            aria-label="More Articles"
        >
            <div className="w-full px-[2.6%] py-16 md:py-24">
                <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-10 lg:gap-0">

                    {/* ── LEFT SIDEBAR ── */}
                    <div className="w-full lg:w-[25%] xl:w-[20%] pt-2 lg:pt-[140px] shrink-0">
                        <motion.p
                            className="text-[#666666] leading-relaxed m-0 max-w-[200px]"
                            style={{ fontSize: "clamp(0.85rem, 1vw, 0.95rem)" }}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {sidebarText}
                        </motion.p>
                    </div>

                    {/* ── RIGHT MAIN CONTENT ── */}
                    <div className="w-full lg:w-[70%] xl:w-[65%] 2xl:w-[60%] lg:mx-auto">

                        {/* Heading */}
                        <motion.h2
                            className="font-bold text-[#2b2b2b] tracking-[-0.03em] mb-12 sm:mb-16 mt-0"
                            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", lineHeight: 1 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            {heading}
                        </motion.h2>

                        {/* Articles List */}
                        <div className="flex flex-col">
                            {/* Top divider */}
                            <div className="w-full h-px bg-[#e5e5e5]" />

                            {articles.map((article, index) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                >
                                    <Link
                                        href={article.link}
                                        className="group flex flex-col md:flex-row md:items-center py-6 md:py-8 gap-2 md:gap-14 lg:gap-24 transition-colors hover:bg-gray-50/50 outline-none"
                                        style={{ textDecoration: "none" }}
                                    >
                                        {/* Date */}
                                        <div className="w-[120px] shrink-0 text-[#888888] font-normal" style={{ fontSize: "clamp(0.85rem, 1vw, 1rem)" }}>
                                            {article.date}
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className="font-medium text-[#2b2b2b] leading-[1.3] m-0 transition-colors group-hover:text-black"
                                            style={{ fontSize: "clamp(1rem, 1.2vw, 1.15rem)" }}
                                        >
                                            {article.title}
                                        </h3>
                                    </Link>

                                    {/* Bottom divider for each item */}
                                    <div className="w-full h-px bg-[#e5e5e5]" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Load More Button */}
                        <motion.button
                            className="mt-12 group flex items-center gap-3 bg-transparent border-none cursor-pointer outline-none"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <RefreshCw
                                size={20}
                                color={BLOG_HERO.accentColor}
                                className="transition-transform duration-500 group-hover:rotate-180"
                            />
                            <div className="relative inline-flex flex-col pb-1">
                                <span className="font-medium text-[#2b2b2b] text-[1.1rem]">
                                    {buttonText}
                                </span>
                                {/* Animated underline: starts small (left-aligned), expands to full width on hover */}
                                <span
                                    className="absolute left-0 bottom-0 h-[2px] w-[14px] transition-all duration-300 ease-out group-hover:w-full"
                                    style={{ background: BLOG_HERO.accentColor }}
                                    aria-hidden="true"
                                />
                            </div>
                        </motion.button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection3;