"use client";
/*
  Design: InfoStats — 1728 × 814px canvas
  Background: stats_banner.png in B&W + grain dust overlay
  Partner logos: scrolling marquee from /assets/logos/corporate/
*/

const corporateLogos = [
  "/assets/logos/corporate/12 2.png",
  "/assets/logos/corporate/12 3.png",
  "/assets/logos/corporate/12 4.png",
  "/assets/logos/corporate/12 5.png",
  "/assets/logos/corporate/13 2.png",
  "/assets/logos/corporate/13 3.png",
  "/assets/logos/corporate/13 4.png",
  "/assets/logos/corporate/13 5.png",
  "/assets/logos/corporate/13 6.png",
  "/assets/logos/corporate/14 2.png",
  "/assets/logos/corporate/14 3.png",
  "/assets/logos/corporate/14 4.png",
];

const StatsBanner = () => (
  <section
    className="relative w-full overflow-hidden font-['Articulat_CF',sans-serif]"
    style={{ minHeight: "clamp(360px, 47.1vw, 814px)" }}
  >
    {/* Marquee keyframe */}
    <style>{`
      @keyframes stats-marquee {
        from { transform: translateX(-50%); }
        to   { transform: translateX(0); }
      }
    `}</style>

    {/* Background — B&W */}
    <img
      src="/assets/about_page/projectpage7.png"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      style={{ filter: "grayscale(100%) brightness(0.75)" }}
    />
    {/* Dust/grain texture overlay */}
    <img
      src="/assets/about_page/c12e30da10fe9c3b094e26e9d35d38ce4f2f878a.png"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-25"
      style={{ mixBlendMode: "overlay" }}
    />

    {/* ── Content ── */}
    <div className="relative z-10 flex flex-col" style={{ minHeight: "inherit" }}>

      {/* TOP: orange dot + two-line heading */}
      <div
        className="flex flex-col items-center w-full"
        style={{
          paddingTop: "clamp(28px, 5.56vw, 96px)",
        }}
      >
        <div className="flex flex-col items-start w-fit">
          <div className="flex items-center gap-3">
            <svg width="clamp(12px, 1.5vw, 17px)" height="clamp(12px, 1.5vw, 17px)" viewBox="0 0 17 17" fill="none" className="shrink-0 mt-1 lg:mt-3">
              <circle cx="8.47" cy="8.47" r="6.47" fill="white" stroke="#FF4400" strokeWidth="4" />
            </svg>
            <p className="font-bold text-white whitespace-nowrap text-center"
              style={{ fontSize: "clamp(20px, 5.09vw, 88px)", lineHeight: "1.0" }}>
              We transform brands.
            </p>
          </div>
          <p className="font-bold text-[#FF4400] whitespace-nowrap text-center ml-0 lg:ml-8"
            style={{ fontSize: "clamp(20px, 5.09vw, 88px)", lineHeight: "1.0" }}>
            Your success is next.
          </p>
        </div>
      </div>

      {/* CENTER: consultation text + links */}
      <div
        className="flex-1 flex flex-col items-center justify-center text-center px-4"
        style={{ marginTop: "clamp(12px, 2.5vw, 43px)" }}
      >
        <p className="text-white font-medium"
          style={{ fontSize: "clamp(11px, 1.39vw, 24px)", lineHeight: "30px", maxWidth: "clamp(220px, 27.72vw, 479px)", marginBottom: "clamp(10px, 1.22vw, 21px)" }}>
          Start your project now by booking a one-on-one consultation with our expert.
        </p>
        <div className="flex gap-8 flex-wrap justify-center mt-2">
          {[{ label: "book a call", href: "/contact" }, { label: "Connect on LinkedIn", href: "https://linkedin.com" }].map(({ label, href }) => (
            <a key={label} href={href} className="relative text-white hover:text-[#FF4400] transition-colors duration-300 font-medium group"
              style={{ fontSize: "clamp(11px, 1.62vw, 28px)", lineHeight: "24px", paddingBottom: "2px" }}>
              {label}
              <span className="absolute left-0 bottom-[-4px] h-[2px] bg-[#FF4400] w-[15px] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>

      {/* BOTTOM: partners + scrolling logo ticker */}
      <div
        className="flex flex-col items-center text-center"
        style={{ paddingBottom: "clamp(18px, 7.5vw, 129px)", marginTop: "clamp(12px, 2.5vw, 43px)" }}
      >
        <p className="text-white font-medium"
          style={{ fontSize: "clamp(11px, 1.39vw, 24px)", lineHeight: "30px", maxWidth: "clamp(200px, 22.4vw, 387px)", marginBottom: "clamp(10px, 1.04vw, 18px)" }}>
          Meet the partners who are part of our success story.
        </p>

        {/* Infinite scrolling marquee */}
        <div
          className="w-150 overflow-hidden"
          style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)", maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}
        >
          <div
            className="flex items-center gap-10 w-max"
            style={{ animation: "stats-marquee 28s linear infinite" }}
          >
            {[...corporateLogos, ...corporateLogos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="shrink-0 object-contain"
                style={{
                  height: "clamp(20px, 2.5vw, 44px)",
                  maxWidth: "clamp(60px, 8vw, 140px)",
                  filter: "grayscale(100%) brightness(0) invert(1)",
                  opacity: 0.75,
                }}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default StatsBanner;