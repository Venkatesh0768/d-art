"use client";
import React from 'react';

const testimonials = [
    {
        quote: "Working with D art was a total game-changer for us. Their unique design solutions and deep strategy helped elevate our brand significantly.",
        name: "Vikram Chatterjee",
        title: "Head of Projects",
        company: "Bengal Iron & Steel"
    },
    {
        quote: "The team at D Art transformed our visuals with incredible innovation. Their responsiveness and commitment to our growth exceeded all expectations. Our digital presence has seen a massive boost since we partnered with them.",
        name: "Ananya Sharma",
        title: "Marketing Manager",
        company: "Indo-Air Logistics"
    },
    {
        quote: "The innovative approach and attention to detail by D Art truly exceeded our expectations. Their team understood our vision perfectly.",
        name: "Rajesh Iyer",
        title: "Client Services Manager",
        company: "Spenta Digital"
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
    return (
        <div className="flex flex-col justify-between shrink-0 w-[320px] md:w-[380px] lg:w-[420px] p-8 md:p-10 bg-[#f6f6f6] mx-3">
            {/* Quote Icon */}
            <div className="text-[#c0c0c0] text-[70px] leading-[0.6] font-serif mb-6 mt-4">
                &ldquo;
            </div>

            {/* Quote Text */}
            <p className="font-['Articulat_CF:Medium',sans-serif] text-[16px] md:text-[18px] leading-[1.6] text-[#333336] mb-12 flex-1">
                {testimonial.quote}
            </p>

            {/* User Info & Logo */}
            <div className="flex items-end justify-between w-full mt-auto">
                <div className="flex flex-col">
                    <h4 className="font-['Articulat_CF:Medium',sans-serif] text-[18px] md:text-[20px] text-[#333336] leading-tight">
                        {testimonial.name}
                    </h4>
                    <p className="font-['Articulat_CF:Medium',sans-serif] text-[14px] md:text-[16px] text-[#333336]/80 mt-1">
                        {testimonial.title}
                    </p>
                    <p className="font-['Articulat_CF:Regular',sans-serif] text-[12px] md:text-[14px] text-[#333336]/60 mt-0.5">
                        {testimonial.company}
                    </p>
                </div>
                {/* D-art small logo icon */}
                <div className="w-8 h-8 opacity-80 shrink-0 mb-1">
                    <img src="/assets/about_page/d-logo.png" alt="D-art Logo" className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
    );
};

const ContactsPage4 = () => {
    // Triple array for seamless scrolling
    const scrollItems = [...testimonials, ...testimonials, ...testimonials];

    return (
        <div className="w-full bg-white py-24 lg:py-40 px-[5%] md:px-[2.6%] overflow-hidden relative font-['Articulat_CF',sans-serif]" data-name="Projects Page 3">

            {/* Sub-header section */}
            <div className="w-full flex flex-col mb-12 lg:mb-20">
                <h2 className="font-['Articulat_CF:Medium',sans-serif] text-[40px] md:text-[50px] lg:text-[60px] leading-[1.1] tracking-[-0.02em] text-[#333336] mb-4">
                    Inspiring client experiences
                </h2>
                <p className="font-['Articulat_CF:Regular',sans-serif] text-[20px] md:text-[24px] lg:text-[28px] leading-[1.3] text-[#333336]/60">
                    Join us and become our next success story
                </p>
            </div>

            <div className="relative w-full flex flex-col lg:flex-row mb-32">
                {/* Left Static Panel (Joker Image) */}
                <div className="relative shrink-0 w-full lg:w-[420px] h-[500px] md:h-[600px] mb-8 lg:mb-0 lg:mr-3 z-10 group overflow-hidden">
                    {/* Static Image */}
                    <img
                        src="/assets/contact_page/joker.png"
                        alt="Rajesh Patel - Creative designer"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Dark Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

                    {/* Top Right Orange Logo */}
                    <div className="absolute top-6 right-6 w-10 h-10">
                        <img
                            src="/assets/about_page/d-logo.png"
                            alt="D-art Logo"
                            className="w-full h-full object-contain"
                            style={{ filter: "brightness(0) saturate(100%) invert(35%) sepia(87%) saturate(2250%) hue-rotate(10deg) brightness(101%) contrast(106%)" }}
                        />
                    </div>

                    {/* Bottom Info */}
                    <div className="absolute bottom-8 left-8 text-white z-20">
                        <h3 className="font-['Articulat_CF:Medium',sans-serif] text-[30px] leading-tight mb-1">
                            Rajesh Patel
                        </h3>
                        <p className="font-['Articulat_CF:Regular',sans-serif] text-[16px] text-white/80 mb-6">
                            Creative designer
                        </p>
                        <button className="relative inline-block font-['Articulat_CF:Medium',sans-serif] text-[20px] transition-colors duration-300 group/btn hover:text-[#f40]">
                            <span className="relative z-10 pb-1 block tracking-wide">
                                Watch Video
                                <span className="absolute left-0 bottom-0 h-[2px] bg-white transition-all duration-300 w-[10%] group-hover/btn:w-full group-hover/btn:bg-[#f40]"></span>
                            </span>
                        </button>
                    </div>
                </div>

                {/* CSS for Marquee */}
                <style>{`
          @keyframes slide-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.3333%); }
          }
          .animate-slide-left {
            animation: slide-left 25s linear infinite;
          }
          .animate-slide-left:hover {
            animation-play-state: paused;
          }
        `}</style>

                {/* Right Scroll Panel */}
                <div className="flex-1 overflow-hidden relative flex">
                    {/* Subtle fade on right edge for smooth entrance */}
                    <div className="absolute right-0 top-0 bottom-0 w-[40px] md:w-[150px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    {/* The scrolling track */}
                    <div className="flex w-max animate-slide-left h-[500px] md:h-[600px]">
                        {scrollItems.map((testimonial, idx) => (
                            <TestimonialCard key={idx} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="w-full flex flex-col md:flex-row items-center justify-center md:gap-8 pt-8 border-t border-transparent">
                <span className="font-['Articulat_CF:Medium',sans-serif] text-[24px] lg:text-[28px] text-[#333336]/60 mb-6 md:mb-0">
                    Be part of our journey
                </span>

                {/* Separator Line */}
                <div className="hidden md:block w-[1px] h-[35px] bg-[#333336]/30 mx-2"></div>

                {/* Links */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                    <a href="#" className="relative inline-block font-['Articulat_CF:Medium',sans-serif] text-[22px] lg:text-[26px] text-[#333336] transition-colors duration-300 group cursor-pointer hover:text-[#f40]">
                        <span className="relative z-10 pb-1 block">
                            view our work
                            <span className="absolute left-0 bottom-[-2px] h-[2px] bg-[#f40] transition-all duration-300 w-[15px] group-hover:w-full"></span>
                        </span>
                    </a>
                    <a href="#" className="relative inline-block font-['Articulat_CF:Medium',sans-serif] text-[22px] lg:text-[26px] text-[#333336] transition-colors duration-300 group cursor-pointer hover:text-[#f40]">
                        <span className="relative z-10 pb-1 block">
                            start a project
                            <span className="absolute left-0 bottom-[-2px] h-[2px] bg-[#f40] transition-all duration-300 w-[15px] group-hover:w-full"></span>
                        </span>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default ContactsPage4;