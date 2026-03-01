"use client";

import { motion } from "framer-motion";
import { BLOG_HERO } from "./blog.config";

// ─────────────────────────────────────────────────────────────────────────────
//  BlogSection1 — Hero / Intro banner
//  All editable content lives in ./blog.config.ts
// ─────────────────────────────────────────────────────────────────────────────

const BlogSection1 = () => {
    const { headingLine1, headingLine2, description, accentColor } = BLOG_HERO;

    return (
        <section className="w-full bg-white overflow-hidden p-20" aria-label="Blog">
            <div className="w-full px-[2.6%] pt-20 pb-16 md:pt-24 md:pb-20 flex justify-center">

                {/* ── Inner block shrinks to fit the heading so the dot anchors correctly */}
                <motion.div
                    className="relative inline-flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {/* Orange dot — anchored to top-left corner of the heading block */}
                    <span
                        className="absolute w-[21px] h-[21px] rounded-full border-[4px]"
                        style={{
                            borderColor: accentColor,
                            top: "10px",
                            left: "-20px",
                        }}
                        aria-hidden="true"
                    />

                    {/* Line 1 */}
                    <span
                        className="font-bold text-[#2b2b2b] tracking-[-0.02em] leading-[1.02] whitespace-nowrap"
                        style={{ fontSize: "clamp(2.8rem, 7vw, 7.5rem)" }}
                    >
                        {headingLine1}
                    </span>

                    {/* Line 2: "Thinking" + description inline */}
                    <div className="flex items-end gap-5">
                        <span
                            className="font-bold text-[#2b2b2b] tracking-[-0.02em] leading-[1.02] shrink-0 whitespace-nowrap"
                            style={{ fontSize: "clamp(2.8rem, 7vw, 7.5rem)" }}
                        >
                            {headingLine2}
                        </span>

                        {/* Description — sits to the right of "Thinking", bottom-aligned */}
                        <p
                            className="text-[#555555] leading-snug mb-[0.3em] max-w-[240px] m-0"
                            style={{ fontSize: "clamp(0.78rem, 1vw, 0.9rem)" }}
                        >
                            {description}
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default BlogSection1;