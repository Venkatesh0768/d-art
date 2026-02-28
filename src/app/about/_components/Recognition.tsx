/*
  Design: ProjectsPage5 — bg white, 1728 × 1198px canvas
  ─────────────────────────────────────────────────────────
  LEFT COL  (0 → 902px = 52.2%):
    "Our Approach" label     left:45,  top:166,  26px opacity:60%
    "Recognition & Impact"   left:45,  top:213,  56px
    Body paragraph           left:45,  top:322,  w:763, 36px opacity:70%

  RIGHT COL (left:902 = 52.2%, w:782px):
    Frame7: bg:#f6f6f6, h:696px
      Top photo (recogination.png)   h:490px / w:782 = 62.66% aspect ratio
      Award card below:
        "India's Best Packaging Award 2020"  34px
        body text  20px opacity:70%
*/

const Recognition = () => (
  <section className="bg-white w-full overflow-hidden font-['Articulat_CF',sans-serif]">
    <div className="px-[2.6%] pt-[9.6%] pb-[6%]">

      {/* ── Two-column layout: 52% left / 48% right ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[52%_1fr] gap-8 items-start">

        {/* LEFT: label + heading + body */}
        <div className="flex flex-col">
          <p
            className="text-[#333336] font-medium opacity-60 mb-2"
            style={{ fontSize: "clamp(11px, 1.5vw, 26px)", lineHeight: "38px" }}
          >
            Our Approach
          </p>
          <h2
            className="text-[#333336] font-medium mb-[5%]"
            style={{ fontSize: "clamp(24px, 3.24vw, 56px)", lineHeight: "1.1" }}
          >
            Recognition &amp; Impact
          </h2>
          <p
            className="text-[#333336] font-medium opacity-70 tracking-[-0.01em]"
            style={{
              fontSize: "clamp(14px, 2.08vw, 36px)",
              lineHeight: "43px",
              maxWidth: "clamp(280px, 44.15vw, 763px)",
            }}
          >
            Our work speaks through results, and we&apos;re honored when it resonates
            with the industry. Here&apos;s a glimpse of our creative impact and
            recognition, including our milestone achievement in 2020.
          </p>
        </div>

        {/* RIGHT: Frame7 — bg:#f6f6f6, photo on top + award card below */}
        <div className="bg-[#f6f6f6] overflow-hidden">
          {/* Award photo — h:490 / w:782 = 62.66% aspect ratio */}
          <div
            className="w-full overflow-hidden relative"
            style={{ paddingBottom: "62.66%" }}
          >
            <img
              src="/assets/about_page/recogination.png"
              alt="India's Best Packaging Award 2020"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Award info card */}
          <div className="px-[8.1%] py-[7.2%]">
            <p
              className="text-black font-medium leading-[1.2] mb-3"
              style={{ fontSize: "clamp(14px, 1.97vw, 34px)" }}
            >
              India&apos;s Best Packaging Award 2020
            </p>
            <p
              className="text-[#333336] font-medium opacity-70"
              style={{
                fontSize: "clamp(11px, 1.16vw, 20px)",
                lineHeight: "34px",
                maxWidth: "clamp(200px, 38vw, 656px)",
              }}
            >
              Branding Communications &amp; Digital Media — D&apos;Art is a true
              amalgamation of design, strategy, and purposeful creativity.
            </p>
          </div>
        </div>
      </div>

      {/* ── CTA row — centered below both columns ── */}
      {/* Design: left:456/1728=26.4%, top:996/1198=83% */}
      <div className="flex items-center justify-center gap-6 mt-[5%] pb-[2%] flex-wrap">
        <p
          className="text-[#333336] font-normal opacity-70"
          style={{ fontSize: "clamp(13px, 1.62vw, 28px)" }}
        >
          Our Services at a Glance
        </p>
        <div className="w-px h-10 bg-[#333336] opacity-30" />
        <div className="flex gap-8">
          {["browse our work", "more stats"].map((label) => (
            <a
              key={label}
              href="#"
              className="relative text-black font-medium group hover:text-[#FF4400] transition-colors duration-300"
              style={{ fontSize: "clamp(13px, 1.62vw, 28px)", paddingBottom: "2px" }}
            >
              {label}
              <span className="absolute left-0 bottom-[-2px] h-[2px] bg-[#FF4400] transition-all duration-300 group-hover:w-full w-[15px]" />
            </a>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Recognition;