"use client";
import React, { useState } from "react";
import {
    NAV_LINKS,
    LEGAL_LINKS,
    SOCIAL_LINKS,
    COMPANY_INFO,
    ASSETS,
} from "../constants/constants";

export default function Footer() {
    const [email, setEmail] = useState("");

    return (
        <footer className="bg-white w-full font-['Articulat_CF',sans-serif] text-[#333336] flex flex-col overflow-hidden">
            {/* ── TOP SECTION: Logo + Tagline ── */}
            {/* Design: top-[87px] to top-[523px] -> ~436px height minus padding. Let's use responsive padding. */}
            <div className="w-full flex-col lg:flex-row flex justify-between items-start pt-[5%] pb-[4%] px-[2.6%]">
                {/* Left: D'art logo + "Creations that Inspire" */}
                <div className="flex flex-col items-start lg:w-1/2">
                    <img
                        src={ASSETS.logoMain}
                        alt="D'Art"
                        className="w-[clamp(280px,50vw,880px)] h-auto object-contain mb-2"
                    />

                </div>

                {/* Right: orange bullet + tagline sentence */}
                <div className="flex items-start gap-3 lg:mt-6 lg:w-[589px]">
                    <svg width="clamp(12px,1vw,17px)" height="clamp(12px,1vw,17px)" viewBox="0 0 17 17" fill="none" className="shrink-0 mt-2 lg:mt-4">
                        <circle cx="8.47" cy="8.47" r="6.47" fill="white" stroke="#FF4400" strokeWidth="4" />
                    </svg>
                    <p
                        className="font-medium"
                        style={{ fontSize: "clamp(16px, 2.02vw, 35px)", lineHeight: "1.5" }}
                    >
                        We elevate brands to stand out in today&apos;s digital landscape.
                    </p>
                </div>
            </div>

            {/* ── MIDDLE & BOTTOM SECTIONS: Strict 3-Column Grid ── */}
            {/* 
        Design specs (1728px canvas width):
        Col 1: Width 864px (50%)
        Col 2: Width 468px (27.08%)
        Col 3: Width 396px (22.92%)
        
        Row 1 (Middle): Height 450px
        Row 2 (Bottom): Height 225px
      */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-[50%_27.08%_22.92%]">

                {/* === ROW 1: MIDDLE === */}

                {/* Col 1: Nav Links & Legal Links */}
                {/* Design: left-0 w-[864px] h-[450px] */}
                <div className="flex flex-col sm:flex-row h-full min-h-[450px] py-[54px] pl-[44px]">
                    {/* Nav Links */}
                    <div className="flex flex-col gap-[clamp(18px,3vw,56px)] w-1/2">
                        {NAV_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="relative w-fit font-medium group text-[clamp(16px,1.62vw,28px)] leading-[24px] hover:text-[#FF4400] transition-colors duration-300">
                                {link.label}
                                <span className="absolute left-0 bottom-[-4px] h-[2px] bg-[#FF4400] w-[15px] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                    {/* Legal Links */}
                    <div className="flex flex-col gap-[clamp(18px,3vw,72px)] w-1/2 mt-10 sm:mt-0">
                        {LEGAL_LINKS.map((link) => (
                            <a key={link.href} href={link.href} className="relative w-fit font-medium group text-[clamp(16px,1.62vw,28px)] leading-[24px] hover:text-[#FF4400] transition-colors duration-300">
                                {link.label}
                                <span className="absolute left-0 bottom-[-4px] h-[2px] bg-[#FF4400] w-[15px] transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Col 2: Newsletter */}
                {/* Design: bg-[#f6f6f6] w-[468px] h-[450px] border-[0.3px] border-[rgba(0,0,0,0.7)] */}
                <div className="bg-[#f6f6f6]  lg:border-y-0   h-full min-h-[450px] flex flex-col justify-between py-[54px] px-[49px]">
                    <div>
                        <h3 className="font-medium text-[clamp(24px,2.89vw,50px)] leading-[1.1] mb-6">Stay in the Loop</h3>
                        <p className="text-[rgba(51,51,54,0.7)] text-[clamp(14px,1.1vw,19px)] leading-[32px] mb-8">
                            Stay informed about our latest news,
                            <br />updates by subscribing to our
                            <br />newsletter.
                        </p>
                        <p className="text-[rgba(51,51,54,0.7)] text-[clamp(12px,0.92vw,16px)] leading-[21px]">
                            We respect your inbox. No spam, just valuable
                            <br />updates.
                        </p>
                    </div>

                    <div className="w-full border-b-[1.4px] border-[#FF4400] pb-2 flex justify-between items-center group cursor-pointer">
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-transparent border-none outline-none w-full font-medium text-[22px] leading-[54px] text-[#333336] placeholder:text-[#333336] text-left"
                        />
                        {/* Orange Arrow Pattern Icon — mimicking the figma arrow built from squares */}
                        <div className="size-[22px] flex items-center justify-center relative translate-y-[-4px] group-hover:translate-x-1 transition-transform">
                            <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
                                <path d="M14 1L20 7M20 7L14 13M20 7H0" stroke="#FF4400" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Col 3: Social Links */}
                {/* Design: w-[396px] h-[450px]. 5 boxes, each 90px high, border:0.3px rgba(0,0,0,0.7) */}
                <div className="flex flex-col h-full min-h-[450px]">
                    {SOCIAL_LINKS.map((social, i) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target={social.url.startsWith("mailto") ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="group flex-1 flex items-center justify-between px-[33px] last:border-b-0 hover:bg-[#FF4400] transition-colors duration-300"
                        >
                            <span className="font-medium text-[28px] leading-[21px] text-[#333336] group-hover:text-white transition-colors duration-300">{social.name}</span>
                            <svg width="14" height="24" viewBox="0 0 14 24" fill="none" className="text-[#FF4400] group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
                                <path d="M2.5 5L10 12L2.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    ))}
                </div>

                {/* === ROW 2: BOTTOM === */}

                {/* Col 1: Address & Description */}
                {/* Design: border-t-[0.3px]. Address on left, Desc on right, but inside the 864px box. */}
                <div className="flex flex-col lg:flex-row h-full min-h-[225px] border-t-[0.3px] border-[rgba(218,216,216,0.7)] pt-[43px] pl-[44px] pb-[44px]">
                    {/* Address */}
                    <div className="flex-1">
                        <p className="font-medium text-[16px] leading-[21px] mb-[5px]">Offline</p>
                        <p className="font-medium text-[18px] leading-[25px] mb-2">
                            <span className="text-[#FF4400]">{"Address: "}</span>
                            {COMPANY_INFO.address.line1} {COMPANY_INFO.address.line2} {COMPANY_INFO.address.line3}
                        </p>
                        <p className="font-semibold text-[33px] leading-[24px] mt-[64px]">{COMPANY_INFO.phone}</p>
                    </div>
                    {/* Description */}
                    <div className="flex-1 mt-6 lg:mt-0 pt-[25px]">
                        <p className="text-[18px] leading-[25px] lg:max-w-[340px]">{COMPANY_INFO.description}</p>
                    </div>
                </div>

                {/* Col 2: Copyright */}
                {/* Design: bg-white border-x & top-[0.3px] border-[rgba(0,0,0,0.4)]. */}
                <div className="h-full min-h-[225px]   flex flex-col justify-end px-[47px] pb-[41px]">
                    <p className="text-[18px] leading-[25px] mb-[8px]">
                        © {new Date().getFullYear()} D&apos;Art — All rights reserved.
                    </p>
                    <div className="flex items-center gap-3 font-bold">
                        <img src={ASSETS.logoDBlack} alt="Dart D Logo" className="w-[18px] h-[15.5px] object-contain opacity-70" />
                        <span className="font-medium text-[18px] leading-[25px]">design by D&apos;Art</span>
                    </div>
                </div>

                {/* Col 3: Bottom Right Logo Box */}
                {/* Design: White background by default, turns orange on hover. Logo inverts to white on hover. */}
                <div className="group h-full min-h-[225px] border-t-[0.3px] border-[rgba(218,216,216,0.7)] bg-white hover:bg-[#FF4400] transition-colors duration-500 relative overflow-hidden flex items-center justify-center cursor-pointer">
                    <img
                        src="/assets/about_page/d-logo.png"
                        alt="D'Art"
                        className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] object-contain transition-all duration-500 ease-out group-hover:invert group-hover:brightness-0 group-hover:scale-125"
                    />
                </div>

            </div>
        </footer>
    );
}