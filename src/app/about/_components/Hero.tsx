import React from "react";

const Hero = () => (
    <section
        className="relative min-h-[65vh] flex flex-col items-center justify-center overflow-hidden"
    >
        {/* Background image */}
        <img
            src="/assets/about_page/hero-bg-img.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />


        {/* Content Container */}
        <div className="relative z-10 w-full px-6 flex flex-col items-center justify-center translate-y-[-2%] mt-12 md:mt-16">
            {/* Title */}
            <h1 className="font-semibold text-white tracking-tight flex items-center justify-center gap-3 lg:gap-5"
                style={{ fontSize: "clamp(4.5rem, 8vw, 7.5rem)", lineHeight: 1 }}>
                <span>About</span>
                <img
                    src="/assets/about_page/dart_black.png"
                    alt="Dart Logo"
                    className="h-[clamp(2.8rem,6.5vw,5.8rem)] object-contain drop-shadow-[0_10px_30px_rgba(255,255,255,0.3)] translate-y-1 lg:translate-y-2"
                    style={{ filter: "brightness(0) invert(1)" }}
                />
            </h1>

            {/* Subtitles */}
            <div className="mt-8 lg:mt-12 text-center relative z-10 w-full">
                <p className="text-white text-[1.15rem] lg:text-[1.35rem] max-w-[650px] mx-auto leading-[1.6] tracking-wide font-normal" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
                    Two decades of crafting meaningful brands
                    <br className="hidden md:block" />
                    through creativity, strategy, and purpose.
                </p>
            </div>
        </div>
    </section>
);

export default Hero;