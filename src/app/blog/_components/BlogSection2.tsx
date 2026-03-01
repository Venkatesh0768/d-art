"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BLOG_POSTS, BLOG_HERO } from "./blog.config";

// ─────────────────────────────────────────────────────────────────────────────
//  BlogSection2 — Featured Articles Grid
//  Staggered layout:
//    Row 1 → [ Post 1 ]           [ Post 2 ]
//    Row 2 →           [ Post 3 ]            [ Post 4 ]
// ─────────────────────────────────────────────────────────────────────────────

const BlogSection2 = () => {
  return (
    <section className="w-full bg-white" aria-label="Blog Articles">
      {/* Centered Container */}
      <div className="w-full px-8 md:px-16 py-20 md:py-28">

        {/*
          4-column grid — explicit placement:
          Row 1 → [Post1] [ --- ] [Post2] [ --- ]
          Row 2 → [ --- ] [Post3] [ --- ] [Post4]
        */}
        <div className="hidden md:grid md:grid-cols-4 md:gap-x-16 md:gap-y-32">

          {/* Post 1 — row 1, col 1 */}
          <motion.article
            className="col-start-1 row-start-1 flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
          >
            <ArticleContent post={BLOG_POSTS[0]} accentColor={BLOG_HERO.accentColor} />
          </motion.article>

          {/* Post 2 — row 1, col 3 */}
          <motion.article
            className="col-start-3 row-start-1 flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          >
            <ArticleContent post={BLOG_POSTS[1]} accentColor={BLOG_HERO.accentColor} />
          </motion.article>

          {/* Post 3 — row 2, col 2 */}
          <motion.article
            className="col-start-2 row-start-2 flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.24 }}
          >
            <ArticleContent post={BLOG_POSTS[2]} accentColor={BLOG_HERO.accentColor} />
          </motion.article>

          {/* Post 4 — row 2, col 4 */}
          <motion.article
            className="col-start-4 row-start-2 flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.36 }}
          >
            <ArticleContent post={BLOG_POSTS[3]} accentColor={BLOG_HERO.accentColor} />
          </motion.article>

        </div>

        {/* Mobile fallback — single column */}
        <div className="flex flex-col gap-16 md:hidden">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              className="flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
            >
              <ArticleContent post={post} accentColor={BLOG_HERO.accentColor} />
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
//  Shared article inner content
// ─────────────────────────────────────────────────────────────────────────────

const ArticleContent = ({
  post,
  accentColor,
}: {
  post: (typeof BLOG_POSTS)[number];
  accentColor: string;
}) => (
  <>
    {/* Image */}
    <Link
      href="#"
      className="relative w-full overflow-hidden aspect-[4/3] bg-gray-100 mb-8 block"
    >
      <motion.img
        src={post.image}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
      />
    </Link>

    {/* Date */}
    <p
      className="text-[#8a8a8a] font-normal mb-4 tracking-wide"
      style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}
    >
      {post.date}
    </p>

    {/* Title */}
    <Link href="#" className="inline-block outline-none no-underline">
      <h2
        className="font-semibold text-[#2b2b2b] leading-[1.2] tracking-[-0.01em] mb-10 max-w-[90%] transition-colors duration-300 group-hover:text-black"
        style={{ fontSize: "clamp(1.4rem, 2vw, 2rem)" }}
      >
        {post.title}
      </h2>
    </Link>

    {/* Read More */}
    <Link href="#" className="relative inline-flex mt-auto group no-underline">
      <span className="font-semibold text-xs tracking-wider uppercase text-[#2b2b2b]">
        {post.linkText}
      </span>
      <span
        className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-[0.25] transition-transform duration-300 ease-out group-hover:scale-x-100"
        style={{ background: accentColor }}
        aria-hidden="true"
      />
    </Link>
  </>
);

export default BlogSection2;