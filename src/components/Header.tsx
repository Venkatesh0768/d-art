"use client";
import React from "react";
import { SOCIAL_LINKS, ASSETS } from "../constants/constants";

export default function Header() {
    return (
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 lg:px-16 pt-8">
            {/* Left: Social Links */}
            <div className="flex gap-4 lg:gap-6 text-orange-600 font-medium text-sm lg:text-base uppercase tracking-wider">
                {SOCIAL_LINKS.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target={social.url.startsWith("mailto") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className="border-b-[3px] border-orange-600 pb-0.5 hover:text-orange-500 transition-colors"
                        style={social.shortLabel === "Be" ? { textTransform: "none" } : undefined}
                    >
                        {social.shortLabel}
                    </a>
                ))}
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <img
                    src={ASSETS.logoMain}
                    alt="D-art Logo"
                    className="h-8 lg:h-12 object-contain"
                />
            </div>

            {/* Right: Hamburger Icon */}
            <div className="flex flex-col gap-2.5 cursor-pointer w-10 justify-center group relative z-20">
                <span className="w-full h-[3px] bg-orange-600 group-hover:bg-orange-500 transition-colors"></span>
                <span className="w-full h-[3px] bg-orange-600 group-hover:bg-orange-500 transition-colors"></span>
            </div>
        </nav>
    );
}