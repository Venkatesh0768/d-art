import TeamCard from "./TeamCard";

/*
  Design: ProjectsPage3 — bg #f6f6f6, 1728 × 2524px canvas
  ──────────────────────────────────────────────────────────
  LEFT COLUMN  = 0 → 592px  = 34.26% of 1728
    • Section label "The Team"    left:48,  top:219,  26px  opacity:60%
    • Heading "Creative Minds"    left:45,  top:266,  56px
    • Row label "Leadership"      left:45,  top:647,  26px  opacity:60%
    • Row label "Core designer"   left:45,  top:1402, 26px  opacity:60%

  RIGHT COLUMN = 592px → 1728px = 65.74%
    • Sub-title                   left:696, top:219,  26px  bold
    • Body text                   left:696, top:280,  35px  opacity:70%
    • Card 1 (leadership)         left:592, top:647,  330×526px
    • Card 2                      left:973  (592+330+51)
    • Card 3                      left:1354 (973+330+51)
    • Core cards (scroll)         left:562, gap:51px

  Card-to-card gap = 51px ≈ 51/1728 = 2.95% of canvas
  → as % of RIGHT column (1136px): 51/1136 = 4.49%
*/

const leadership = [
  { name: "Divyang Patel", role: "Creative Founder", image: "/assets/about_page/img1.png", bgColor: "#FF4400" },
  { name: "Rajesh Patel", role: "Head of Design", image: "/assets/about_page/img2.png" },
  { name: "Sarad Bhai Patel", role: "Head of Printing Dept", image: "/assets/about_page/img3.png" },
];

const core = [
  { name: "Neel Bhai", role: "Senior Graphic Designer", image: "/assets/about_page/img4.png" },
  { name: "Paresh Bhai", role: "Senior UX Designer", image: "/assets/about_page/img5.png" },
  { name: "Taniya Patel", role: "Art Director", image: "/assets/about_page/img6.png" },
];

/* All rows share the same 34%/66% column split to keep everything aligned */
const ROW_GRID = "grid grid-cols-[34%_1fr] items-start";

const labelStyle: React.CSSProperties = {
  fontSize: "clamp(11px, 1.5vw, 26px)",
  lineHeight: "38px",
};

const Team = () => (
  <section className="bg-[#f6f6f6] w-full overflow-hidden font-['Articulat_CF',sans-serif]">
    <div className="px-[2.6%] pt-[8.68%] pb-[8%]">

      {/* ── Section Header ── */}
      {/* Left: "The Team" + "Creative Minds" | Right: subtitle + body */}
      <div className={`${ROW_GRID} mb-[3%]`}>
        <div>
          <p className="text-[#333336] font-medium opacity-60 mb-1" style={labelStyle}>The Team</p>
          <h2 className="text-[#333336] font-medium"
            style={{ fontSize: "clamp(24px, 3.24vw, 56px)", lineHeight: "1.1" }}>
            Creative Minds
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[#333336] font-semibold mb-2" style={labelStyle}>
            Driven by creativity, refined by experience.
          </p>
          <p className="text-[#333336] font-medium opacity-70 tracking-[-0.01em]"
            style={{ fontSize: "clamp(14px, 2.03vw, 35px)", lineHeight: "43px" }}>
            Diverse talents united by a shared passion for purposeful design. From brand strategists
            to designers, developers to marketing specialists, every member of D art brings unique
            expertise to help businesses grow, evolve, and stand out in their markets.
          </p>
        </div>
      </div>

      {/* ── Leadership ── */}
      {/* label left:45, cards left:592 → same 34%/66% grid */}
      <div className={`${ROW_GRID} mt-[5%]`}>
        <p className="text-[#333336] font-medium opacity-60 pt-1" style={labelStyle}>
          Leadership
        </p>
        {/* 3 cards, gap = 51px ≈ 4.5% of the right column width */}
        <div className="flex gap-[2%] xl:gap-[4.49%]">
          {leadership.map((m) => (
            <TeamCard key={m.name} {...m} />
          ))}
        </div>
      </div>

      {/* ── Dividers (3 segments matching card widths, gaps at card boundaries) ── */}
      {/* Design: left:598, w:1081, lines at 0-319 | 381-700 | 762-1081, opacity:0.4 */}
      <div className={`${ROW_GRID} my-[3%]`}>
        <div /> {/* empty left col */}
        <div className="flex gap-[2%] xl:gap-[4.49%]">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex-1 h-px bg-[#333336] opacity-40" />
          ))}
        </div>
      </div>

      {/* ── Core Designers ── */}
      {/* label left:45, scroll area left:562 ≈ same 34% split */}
      <div className={ROW_GRID}>
        <p className="text-[#333336] font-medium opacity-60 pt-1" style={labelStyle}>
          Core designer
        </p>
        <div
          className="flex gap-[2%] xl:gap-[4.49%] overflow-x-auto pb-4"
          style={{ scrollbarWidth: "none" }}
        >
          {core.map((m, i) => (
            <TeamCard key={m.name + i} {...m} />
          ))}
        </div>
      </div>

      {/* ── Join the Team CTA ── */}
      {/* Design: left:541, top:2188 — same 34%/66% grid */}
      <div className={`${ROW_GRID} mt-[8%]`}>
        <div /> {/* empty left col */}
        <div className="flex items-center gap-6 flex-wrap">
          <p className="text-[#333336] font-normal opacity-70"
            style={{ fontSize: "clamp(14px, 1.62vw, 28px)" }}>
            Join the Team
          </p>
          <div className="w-px h-10 bg-[#333336] opacity-30" />
          <div className="flex gap-8">
            {["Career page", "Contact us"].map((label) => (
              <a key={label} href="#" className="relative text-black font-medium group hover:text-[#FF4400] transition-colors duration-300"
                style={{ fontSize: "clamp(14px, 1.62vw, 28px)", paddingBottom: "2px" }}>
                {label}
                <span className="absolute left-0 bottom-[-2px] w-[15px] h-[2px] bg-[#FF4400] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Team;