"use client";
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandSection from "@/components/BrandSection";
import StatsBanner from "@/components/common/StatsBanner";

// SVG Icons
const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);

const PlusIcon = () => (
  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
);

const MinusIcon = () => (
  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
);

// D-art Logo SVG for testimonial cards
const DartLogoSmall = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="#333" />
  </svg>
);

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all elements with reveal or reveal-card class
    const revealElements = document.querySelectorAll(".reveal, .reveal-card");
    revealElements.forEach((el) => observer.observe(el));

    // Simple parallax on scroll
    const handleScroll = () => {
      const parallaxEls = document.querySelectorAll(".parallax-bg");
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const scrolled = window.scrollY;
        const rate = scrolled * 0.2;
        (el as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navbar + Hero Section */}
      <section className="relative w-full h-screen text-white overflow-hidden bg-black">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: 'none' }}
        >
          <source src="/assets/hero_vid.mp4" type="video/mp4" />
        </video>

        {/* Overlay to ensure text visibility over video */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* Nav */}
        <Header />

        {/* Hero Content Main Titles */}
        <div className="absolute top-[35%] left-8 lg:left-16 z-10 w-full max-w-4xl">
          <h1 className="text-5xl lg:text-[5.5rem] font-bold text-white leading-[1.1] tracking-tight drop-shadow-xl">
            Shaping Brands with <br />
            Creations that Inspire<br />
            <span className="block mt-6 text-3xl lg:text-4xl">Since 2005</span>
          </h1>
        </div>

        {/* Hero Content Right Text */}
        <div className="absolute top-[65%] lg:top-[55%] right-8 lg:right-16 z-10 w-full max-w-3xl text-right">
          <h2 className="text-xl lg:text-[1.8rem] text-gray-200 font-medium leading-[1.4] drop-shadow-xl">
            Over 20 Years of Igniting Business Growth <br className="hidden lg:block" />
            Through Creativity, Strategy & Innovation
          </h2>
        </div>

        {/* Hero Bottom Navigation Tags */}
        <div className="absolute bottom-8 lg:bottom-12 left-8 right-8 lg:left-16 lg:right-16 z-10 flex flex-wrap justify-center lg:justify-between items-center text-white font-semibold gap-6 text-sm lg:text-lg">
          <span className="cursor-pointer hover:text-orange-500 transition-colors">Website</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors">Stationery</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors">Graphic Designing</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors">Packaging</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors">Branding</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors">Promotional</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors">Digital Marketing</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors">Print Design</span>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-black text-white px-8 lg:px-16 pt-8 pb-8 w-full relative z-20">
        {/* Top small header */}
        <div className="reveal delay-1 flex items-center gap-3 pt-2 mb-12 w-full">
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-2 h-2 rounded-full border-[1.5px] border-orange-600 block shadow-[0_0_10px_rgba(255,100,0,0.5)]"></span>
            <span className="text-gray-300 text-lg tracking-wide bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Our Achievements</span>
            <span className="text-[#555] text-[10px] font-medium tracking-[0.05em] ml-2 pl-4 border-l border-[#333]">milestones</span>
          </div>
          <div className="flex-1 h-[1px] bg-[#222]"></div>
        </div>

        {/* Certificate Row */}
        <div className="reveal delay-2 flex flex-col lg:flex-row justify-between items-start gap-10 mb-16 w-full">
          <div className="max-w-xl shrink-0">
            <h2 className="text-[2.5rem] lg:text-[2.8rem] font-bold mb-6 leading-[1.1] tracking-tight text-white drop-shadow-lg">
              India's Best Packaging<br />
              Award 2020 questions
            </h2>
            <p className="text-gray-400 text-lg lg:text-[1.3rem] leading-[1.5]">
              Branding Communications & Digital<br />
              Media D art is a true amalgamation of<br />
              design
            </p>
          </div>
          <div className="w-full lg:flex-1 flex justify-start lg:justify-end lg:-mt-8">
            <img src="/assets/certi.png" alt="Certificate" className="w-[100%] max-w-[550px] object-contain" />
          </div>
        </div>

        {/* Performance Section */}
        <div className="reveal delay-3 mb-12 w-full">
          <h3 className="text-center text-white text-[14px] tracking-[0.05em] mb-12 font-medium">PERFORMANCE</h3>
          <div className="flex flex-col md:flex-row justify-between items-center text-center">
            <div className="flex-1 md:border-r border-[#222] py-2 mb-8 md:mb-0">
              <p className="text-[#666] text-[10px] lg:text-[11px] mb-3 tracking-widest uppercase leading-tight font-medium">Projects<br />Completed</p>
              <h4 className="text-5xl lg:text-[4rem] font-light tracking-tighter text-gray-200">13k+</h4>
            </div>
            <div className="flex-1 md:border-r border-[#222] py-2 mb-8 md:mb-0">
              <p className="text-[#666] text-[10px] lg:text-[11px] mb-3 tracking-widest uppercase leading-tight font-medium">Clients Served<br />Worldwide</p>
              <h4 className="text-5xl lg:text-[4rem] font-light tracking-tighter text-gray-200">14+</h4>
            </div>
            <div className="flex-1 md:border-r border-[#222] py-2 mb-8 md:mb-0">
              <p className="text-[#666] text-[10px] lg:text-[11px] mb-3 tracking-widest uppercase leading-tight font-medium">Ideas Turned<br />Into Reality</p>
              <h4 className="text-5xl lg:text-[4rem] font-light tracking-tighter text-gray-200">100+</h4>
            </div>
            <div className="flex-1 md:border-r border-[#222] py-2 mb-8 md:mb-0">
              <p className="text-[#666] text-[10px] lg:text-[11px] mb-3 tracking-widest uppercase leading-tight font-medium">Years of Industry<br />Experience</p>
              <h4 className="text-5xl lg:text-[4rem] font-light tracking-tighter text-gray-200">20+</h4>
            </div>
            <div className="flex-1 py-2">
              <p className="text-[#666] text-[10px] lg:text-[11px] mb-3 tracking-widest uppercase leading-tight font-medium">Businesses<br />Transformed</p>
              <h4 className="text-5xl lg:text-[4rem] font-light tracking-tighter text-gray-200">30</h4>
            </div>
          </div>
        </div>
      </section>













      {/* Brands We Serve Section */}

      {/* <section className="bg-black text-white px-8 lg:px-16 pt-8 pb-16 w-full">
        <div className="w-full">
          <div className="reveal delay-1 flex justify-between items-start mb-10">
            <div>
              <h2 className="text-4xl lg:text-[2.8rem] font-bold mb-3 tracking-tight text-white leading-tight">Brands We Serve</h2>
              <p className="text-[#888] text-lg lg:text-[1.2rem] leading-[1.3]">Partnerships built on creativity<br />and results</p>
            </div>
            <div className="hidden sm:block lg:mt-4 pr-4">
              <img src="/assets/tick.png" alt="Tick" className="w-[80px] h-[80px] object-contain" />
            </div>
          </div>

          
          <div className="reveal delay-2">
            <img src="/assets/brand_logos.png" alt="Brand Logos" className="w-full h-auto object-contain" />
          </div>
        </div>
      </section> */}

      <BrandSection/>











      

      {/* Featured Projects Stacked Layout */}
      <section className="bg-black w-full flex flex-col">
        {/* Project 1: Cheetah Logistics */}
        <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden">
          {/* Main Background */}
          <div className="absolute inset-0 w-full h-full bg-[#3d4b68]">
            <img src="/assets/cheetah.png" alt="Cheetah Logistics Background" className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-0 left-0 w-full py-12 lg:py-24 px-8 lg:px-16 z-20 flex flex-col justify-start pb-0">
            <div className="w-full relative flex items-center mb-2">
              <div className="shrink-0 z-20">
                <h3 className="text-white text-[2.5rem] lg:text-[4.5rem] font-semibold leading-none tracking-tight">Cheetah Logistics</h3>
              </div>
              <div className="flex-1 h-[1px] bg-white/30 ml-8 lg:ml-12 mr-6 lg:mr-8 z-10 hidden sm:block"></div>
              <div className="shrink-0 z-20 hidden sm:block">
                <img src="/assets/dart_white_lg.png" alt="Dart Logo" className="h-[14px] lg:h-[18px] object-contain opacity-90" />
              </div>
            </div>
            <p className="text-white text-lg lg:text-[1.3rem] tracking-[0.02em] font-normal z-20">Retail Brand Identity</p>
          </div>
        </div>

        {/* Project 2: G Marts */}
        <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden bg-[#240A4D]">
          <div className="absolute inset-0 w-full h-full">
            <img src="/assets/gmart.jpg" alt="G Mart Background" className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-0 left-0 w-full py-12 lg:py-24 px-8 lg:px-16 z-20 flex flex-col justify-start pb-0">
            <div className="w-full relative flex items-center mb-2">
              <div className="shrink-0 z-20">
                <h3 className="text-white text-[2.5rem] lg:text-[4.5rem] font-semibold leading-none tracking-tight">G Marts</h3>
              </div>
              <div className="flex-1 h-[1px] bg-white/30 ml-8 lg:ml-12 mr-6 lg:mr-8 z-10 hidden sm:block"></div>
              <div className="shrink-0 z-20 hidden sm:block">
                <img src="/assets/dart_white_lg.png" alt="Dart Logo" className="h-[14px] lg:h-[18px] object-contain opacity-90" />
              </div>
            </div>
            <p className="text-white text-lg lg:text-[1.3rem] tracking-[0.02em] font-normal z-20">Retail Brand Identity</p>
          </div>
        </div>

        {/* Project 3: Yom International */}
        <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden bg-[#0A1727]">
          <div className="absolute inset-0 w-full h-full">
            <img src="/assets/yom_intern.png" alt="Yom International Background" className="w-full h-full object-cover" />
          </div>

          <div className="absolute top-0 left-0 w-full py-12 lg:py-24 px-8 lg:px-16 z-20 flex flex-col justify-start pb-0">
            <div className="w-full relative flex items-center mb-2">
              <div className="shrink-0 z-20">
                <h3 className="text-white text-[2.5rem] lg:text-[4.5rem] font-semibold leading-none tracking-tight">Yom International</h3>
              </div>
              <div className="flex-1 h-[1px] bg-white/30 ml-8 lg:ml-12 mr-6 lg:mr-8 z-10 hidden sm:block"></div>
              <div className="shrink-0 z-20 hidden sm:block">
                <img src="/assets/dart_white_lg.png" alt="Dart Logo" className="h-[14px] lg:h-[18px] object-contain opacity-90" />
              </div>
            </div>
            <p className="text-white text-lg lg:text-[1.3rem] tracking-[0.02em] font-normal z-20">Premium Brand Identity</p>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-14 px-8 lg:px-16 bg-white text-black font-sans w-full">
        <div className="w-full">
          <h2 className="reveal delay-1 text-[4rem] md:text-[6.5rem] font-bold tracking-tight mb-4 leading-none text-black">Our Expertise</h2>
          <p className="reveal delay-2 text-xl md:text-[2rem] text-gray-500 font-medium max-w-4xl leading-[1.25] mb-14 tracking-tight">
            Merging strategic architecture with artistic vision to<br className="hidden md:block" />create award-winning brand experiences.
          </p>

          <div className="flex flex-col w-full">
            {[
              {
                num: "01",
                title: "Graphic Designing",
                desc: "We craft visually compelling design systems that communicate your brand message clearly and leave a lasting impression across all touchpoints.",
                list: ["Branding", "Infographic Design", "Advertising", "Creatives", "Corporate Identity", "Packaging &", "Labeling"],
                icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>)
              },
              {
                num: "02",
                title: "Digital Marketing",
                desc: "We combine strategy and creativity to build digital marketing campaigns that increase visibility, engagement, and measurable growth.",
                list: ["Social Media Strategy", "Mapping", "Competition Research", "Social Media Management", "Paid Ads Management", "Ads Platform Setup", "SEO Optimization"],
                icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>)
              },
              {
                num: "03",
                title: "Branding",
                desc: "From building new identities to refining existing brands, we develop cohesive brand foundations that position you for long-term recognition and trust.",
                list: ["New Brand Identity", "Development", "Rebranding", "Branding Strategy", "Brand Positioning"],
                icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>)
              },
              {
                num: "04",
                title: "Website",
                desc: "We combine strategy and creativity to build digital marketing campaigns that increase visibility, engagement, and measurable growth.",
                list: ["Social Media Strategy", "Mapping", "Competition Research", "Social Media Management", "Paid Ads Management", "Ads Platform Setup", "SEO Optimization"],
                icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>)
              },
              {
                num: "05",
                title: "Packaging",
                desc: "We design functional and visually striking packaging solutions that enhance product appeal while maintaining structural efficiency and brand consistency.",
                list: ["Mono Cartons", "E-Flute Corrugated Boxes", "4 Corner / 6 Corner Boxes", "Blister Packs"],
                icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>)
              },
              {
                num: "06",
                title: "Promotional",
                desc: "We create branded promotional materials that strengthen visibility, support marketing campaigns, and build memorable brand experiences.",
                list: ["Labels", "Diaries", "Calendars", "Inserts"],
                icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>)
              },
              {
                num: "07",
                title: "Print Design",
                desc: "We craft high-quality print assets that communicate information clearly while reflecting strong visual identity and professional presentation.",
                list: ["Product", "Catalogues", "Leaflets", "Posters", "Books", "Brochures"],
                icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>)
              },
              {
                num: "08",
                title: "Stationery",
                desc: "We develop cohesive stationery systems that reinforce brand identity across everyday business communication materials.",
                list: ["Envelopes", "Letterheads", "Files"],
                icon: (<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>)
              }
            ].map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8 py-10 border-t border-gray-200">
                {/* Left Col */}
                <div className="md:col-span-4 flex flex-col items-start pr-8">
                  <div className="flex items-center mb-6">
                    <span className="text-[#FF5E00] font-bold text-lg tracking-wider mr-2">[{item.num}]</span>
                    <h3 className="text-2xl font-bold text-black tracking-tight">{item.title}</h3>
                    <span className="text-black font-medium ml-2">—</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                    {item.icon}
                  </div>
                </div>

                {/* Middle Col */}
                <div className="md:col-span-6 flex items-start">
                  <p className="text-[#888] text-[15px] leading-[1.6] max-w-md tracking-wide">
                    {item.desc}
                  </p>
                </div>

                {/* Right Col */}
                <div className="md:col-span-2 flex flex-col items-end text-right">
                  <ul className="text-[12px] text-[#444] leading-[1.8] font-medium tracking-wide">
                    {item.list.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-12 pb-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4 font-medium tracking-wide">
            <span className="text-[#888] text-xl">Ready to create?</span>
            <span className="w-[1px] h-6 bg-gray-300 hidden sm:block mx-2"></span>
            <a href="#" className="text-black text-xl border-b-[2px] border-orange-500 pb-0.5 hover:text-orange-600 transition">view our work</a>
            <a href="#" className="text-black text-xl sm:pl-4 border-b-[2px] border-orange-500 pb-0.5 hover:text-orange-600 transition">start a project</a>
          </div>
        </div>
      </section>

      {/* FAQ / Popular Queries Section */}
      <section className="py-14 px-8 lg:px-16 bg-white font-sans w-full">
        {/* Top Header line */}
        <div className="w-full border-t border-gray-200 mb-10 flex justify-center pt-6">
          <div className="flex items-center tracking-tight text-gray-500">
            <span className="w-1.5 h-1.5 rounded-full border border-[#FF5E00] mr-2 block"></span>
            <span className="text-[1.3rem] text-gray-600 font-medium">Popular Queries</span>
            <span className="mx-4 text-gray-300 font-light">|</span>
            <span className="text-sm tracking-wider font-normal lowercase">faq</span>
          </div>
        </div>

        {/* Huge Heading */}
        <div className="text-center w-full mb-14 max-w-4xl mx-auto">
          <h2 className="text-[3rem] md:text-[4rem] font-bold text-[#222] leading-[1.1] mb-6 tracking-tight">
            Quick and clear answer to<br className="hidden md:block" />your key questions
          </h2>
          <p className="text-[1.5rem] md:text-[1.8rem] text-gray-500 font-normal leading-[1.3] tracking-tight max-w-2xl mx-auto">
            Get the clarity you need about our design<br className="hidden md:block" />process and service
          </p>
        </div>

        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start max-w-[1400px] mx-auto w-full">
          {/* Left Side: Accordion Questions */}
          <div className="w-full lg:w-2/3 border-t border-gray-200">
            {[
              { q: "How do you approach branding?", a: "We believe branding is more than a logo. It's the strategic development of your entire visual identity and core messaging..." },
              { q: "What makes your packaging different?", a: "Our packaging marries functional structural design with striking visual graphics ensuring product appeal and safety..." },
              { q: "How long does a project take?", a: "Timelines vary by scope. A brand identity usually takes 4-6 weeks, while comprehensive web and print rollouts may take 2-3 months..." },
              { q: "Do you work with startups?", a: "Absolutely. We love helping emerging companies define their footing and build a foundational brand designed to scale..." },
              { q: "How do you approach branding?", a: "We start with extensive market research, define clear objectives, establish a unique tone of voice, and then design an immersive visual system..." }
            ].map((faq, idx) => (
              <details key={idx} className="group border-b border-gray-200">
                <summary className="flex justify-between items-center cursor-pointer list-none py-8 pr-2 [&::-webkit-details-marker]:hidden">
                  <h4 className="text-[1.4rem] font-medium text-gray-900 tracking-tight">{faq.q}</h4>

                  {/* The custom Icon Toggle: Two Orange Lines when closed, One Orange line when open */}
                  <div className="w-6 h-5 flex flex-col items-center shrink-0">
                    <span className="w-full h-[2px] bg-[#FF5E00] mt-1 transition-transform group-open:translate-y-2 group-open:-rotate-180"></span>
                    <span className="w-full h-[2px] bg-[#FF5E00] mt-2 transition-opacity group-open:opacity-0"></span>
                  </div>
                </summary>

                {/* Accordion Answer Content */}
                <div className="pb-8 pr-12 text-[1.1rem] leading-relaxed text-gray-600">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Right Side: Image and CTA */}
          <div className="w-full lg:w-1/3 flex flex-col items-start pr-8">
            {/* Portrait Image */}
            <div className="w-[80%] aspect-[4/3] overflow-hidden relative mb-6">
              <img src="/assets/two_people.png" alt="Two people talking" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-[1.6rem] font-bold text-[#222] leading-[1.2] mb-4 tracking-tight pr-4">
              Still looking for<br />answers or need<br />a good chat?
            </h3>
            <p className="text-[0.85rem] text-[#555] leading-[1.6]">
              Our team will guide you through our<br />design process, project<br />specifications and cost estimate.
            </p>
          </div>
        </div>

        {/* Bottom CTA Links */}
        <div className="w-full pt-14 pb-6 flex flex-col sm:flex-row justify-center items-center text-[1.3rem]">
          <span className="text-gray-500 font-medium tracking-tight">Anything left out?</span>
          <span className="w-[1px] h-8 bg-gray-300 mx-6 hidden sm:block"></span>
          <div className="flex gap-4 sm:gap-6 font-medium tracking-tight mt-4 sm:mt-0">
            <a href="#" className="text-black inline-block relative border-b-[2px] border-[#FF5E00] pb-0.5 hover:text-[#FF5E00] transition-colors">
              book a call
            </a>
            <a href="#" className="text-black inline-block relative border-b-[2px] border-[#FF5E00] pb-0.5 hover:text-[#FF5E00] transition-colors">
              contact us
            </a>
          </div>
        </div>
      </section>

      {/* Client Stories / Testimonials */}
      <section className="py-14 px-8 lg:px-16 bg-white font-sans w-full">
        {/* Top small header */}
        <div className="reveal delay-1 flex items-center gap-3 mb-2">
          <span className="w-1.5 h-1.5 rounded-full border border-[#FF5E00] block"></span>
          <span className="text-[1.3rem] text-gray-600 font-medium tracking-tight">Client Stories</span>
          <span className="mx-3 text-gray-300 font-light">|</span>
          <span className="text-sm tracking-wider font-normal text-gray-400 lowercase">testimonials</span>
        </div>
        <div className="reveal delay-2 w-full h-[1px] bg-gray-200 mb-10"></div>

        {/* Heading */}
        <div className="reveal delay-3 mb-6">
          <h2 className="text-[3rem] md:text-[4.5rem] font-bold text-[#222] tracking-tight leading-[1.05]">
            Inspiring client experiences
          </h2>
        </div>
        <p className="reveal delay-4 text-[1.4rem] md:text-[1.8rem] text-gray-400 font-normal tracking-tight mb-10">
          Join us and become our next success story
        </p>

        {/* Testimonial Layout: Static Card + Auto-scroll Marquee */}
        <div className="flex gap-6 items-stretch">
          {/* Static Card: Rajesh Patel */}
          <div className="reveal-card delay-1 shrink-0 w-[280px] md:w-[300px] bg-[#111] rounded-2xl overflow-hidden relative group cursor-pointer">
            <div className="w-full aspect-[3/4] bg-gray-300 relative overflow-hidden">
              <img src="/assets/rajwinder.png" alt="Rajesh Patel" className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/assets/dart_d_og.png" alt="D-art" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-16">
              <h4 className="text-white text-xl font-bold leading-tight mb-1">Rajesh Patel</h4>
              <p className="text-[#FF5E00] text-sm font-medium mb-3">Creative designer</p>
              <p className="text-white text-sm font-medium underline underline-offset-4 cursor-pointer">Watch Video</p>
            </div>
          </div>

          {/* Auto-scrolling Marquee Container */}
          <div className="flex-1 overflow-hidden min-w-0">
            <div className="marquee-track">
              {/* First set of cards */}
              {[
                { quote: "\"The innovative approach and attention to detail by D Art truly exceeded our expectations. Their team understood our vision perfectly.\"", name: "Rajesh Iyer", role: "Client Services Manager", company: "Inventa Digital", italic: true },
                { quote: "Working with D art was a total game-changer for us. Their unique design solutions and deep strategy helped elevate our brand significantly.", name: "Vikram Chatterjee", role: "Head of Projects", company: "Bengal Iron & Steel" },
                { quote: "The team at D Art transformed our brand with incredible innovation. Their responsiveness and commitment to growth exceeded all expectations.", name: "Ananya Sharma", role: "Marketing Manager", company: "Indo-Air Logistics" },
                { quote: "D Art brought a fresh perspective to our packaging design. The attention to detail and creative thinking set them apart from every other agency we've worked with.", name: "Priya Menon", role: "Brand Director", company: "Spicecraft Foods" },
                { quote: "From concept to execution, D Art delivered beyond what we imagined. Their strategic approach to branding helped us enter three new markets successfully.", name: "Siddharth Kapoor", role: "CEO", company: "NovaTech Solutions" },
                { quote: "Outstanding work on our corporate identity refresh. The D Art team listened carefully to our needs and delivered a brand system that truly represents who we are.", name: "Meera Desai", role: "Operations Head", company: "Pinnacle Exports" },
              ].map((card, i) => (
                <div key={`a-${i}`} className="shrink-0 w-[280px] md:w-[300px] bg-[#f7f7f7] rounded-2xl p-8 flex flex-col justify-between min-h-[420px]">
                  <div>
                    {!card.italic && <span className="text-[#ccc] text-5xl font-serif leading-none block mb-4">&ldquo;</span>}
                    <p className={`text-[#555] text-[15px] leading-[1.65] mb-8 ${card.italic ? 'italic' : ''}`}>
                      {card.quote}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex items-center gap-3">
                      <img src="/assets/rajwinder.png" alt={card.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
                      <div>
                        <p className="font-bold text-sm text-[#222]">{card.name}</p>
                        <p className="text-[11px] text-gray-500 font-medium">{card.role}</p>
                        <p className="text-[10px] text-gray-400">{card.company}</p>
                      </div>
                    </div>
                    <DartLogoSmall />
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[
                { quote: "\"The innovative approach and attention to detail by D Art truly exceeded our expectations. Their team understood our vision perfectly.\"", name: "Rajesh Iyer", role: "Client Services Manager", company: "Inventa Digital", italic: true },
                { quote: "Working with D art was a total game-changer for us. Their unique design solutions and deep strategy helped elevate our brand significantly.", name: "Vikram Chatterjee", role: "Head of Projects", company: "Bengal Iron & Steel" },
                { quote: "The team at D Art transformed our brand with incredible innovation. Their responsiveness and commitment to growth exceeded all expectations.", name: "Ananya Sharma", role: "Marketing Manager", company: "Indo-Air Logistics" },
                { quote: "D Art brought a fresh perspective to our packaging design. The attention to detail and creative thinking set them apart from every other agency we've worked with.", name: "Priya Menon", role: "Brand Director", company: "Spicecraft Foods" },
                { quote: "From concept to execution, D Art delivered beyond what we imagined. Their strategic approach to branding helped us enter three new markets successfully.", name: "Siddharth Kapoor", role: "CEO", company: "NovaTech Solutions" },
                { quote: "Outstanding work on our corporate identity refresh. The D Art team listened carefully to our needs and delivered a brand system that truly represents who we are.", name: "Meera Desai", role: "Operations Head", company: "Pinnacle Exports" },
              ].map((card, i) => (
                <div key={`b-${i}`} className="shrink-0 w-[280px] md:w-[300px] bg-[#f7f7f7] rounded-2xl p-8 flex flex-col justify-between min-h-[420px]">
                  <div>
                    {!card.italic && <span className="text-[#ccc] text-5xl font-serif leading-none block mb-4">&ldquo;</span>}
                    <p className={`text-[#555] text-[15px] leading-[1.65] mb-8 ${card.italic ? 'italic' : ''}`}>
                      {card.quote}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex items-center gap-3">
                      <img src="/assets/rajwinder.png" alt={card.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
                      <div>
                        <p className="font-bold text-sm text-[#222]">{card.name}</p>
                        <p className="text-[11px] text-gray-500 font-medium">{card.role}</p>
                        <p className="text-[10px] text-gray-400">{card.company}</p>
                      </div>
                    </div>
                    <DartLogoSmall />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal delay-5 w-full pt-12 pb-4 flex flex-col sm:flex-row justify-center items-center text-[1.3rem]">
          <span className="text-gray-500 font-medium tracking-tight">Be part of our journey</span>
          <span className="w-[1px] h-8 bg-gray-300 mx-6 hidden sm:block"></span>
          <div className="flex gap-4 sm:gap-6 font-medium tracking-tight mt-4 sm:mt-0">
            <a href="#" className="text-black inline-block border-b-[2px] border-[#FF5E00] pb-0.5 hover:text-[#FF5E00] transition-colors">
              view our work
            </a>
            <a href="#" className="text-black inline-block border-b-[2px] border-[#FF5E00] pb-0.5 hover:text-[#FF5E00] transition-colors">
              start a project
            </a>
          </div>
        </div>
      </section>

     
      <StatsBanner/>

      {/* Footer */}
      <Footer />
    </div>
  );
}
