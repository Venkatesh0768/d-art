/*
  Design: ProjectsPage4 — bg #f6f6f6, 1728 × 2148px canvas
  ───────────────────────────────────────────────────────────
  HEADER ROW (left col 34% / right col 66%):
    "Our Approach" label   left:45,  top:229,  26px opacity:60%
    "The way we work" h2   left:45,  top:276,  56px
    Subtitle bold          left:726, top:229,  26px (=726/1728=42%)
    Body text              left:726, top:292,  35px opacity:70%

  THREE IMAGE PANELS — top:652, h:844px, each w:530px (~30.67%):
    Panel 1 (left)  : left:45    bg:#f8f8f8  photo (img1)
    Panel 2 (center): left:600   bg:#FF4400  photo (img2)
    Panel 3 (right) : left:1155  bg:#FF4400  photo (img3)
    Panels start at left:45 (2.6%), total width 1683px ≈ panel w + gap
    → gap between panels ≈ (1683 - 3×530) / 2 = 91.5px ≈ 5.3%

  THREE NUMBERED STEPS — below panels top:1641+:
    LEFT    col (0–726px):  num "01/"  left:45 34px + text left:128 22px
    RIGHT   col (726–1728): title      left:900 29px + body left:900 22px
    Step spacing: 01 at top:1641, 02 at top:1764 (+123px), 03 at top:1887 (+123px)
*/

const panels = [
  { bg: "#f8f8f8", image: "/assets/about_page/p41.png" },
  { bg: "#FF4400", image: "/assets/about_page/p42.png" },
  { bg: "#FF4400", image: "/assets/about_page/p43.png" },
];

const steps = [
  {
    num: "01/",
    left: "Design is not decoration — it's a business tool. Every project we take on is built to strengthen brand identity, improve visibility, and deliver measurable value.",
    title: "Every project begins with understanding your unique needs.",
    body: "Our approach blends strategy, creativity, and execution. We listen first, understand your brand deeply, and transform ideas into impactful design and marketing solutions that help businesses grow with clarity and confidence.",
  },
  {
    num: "02/",
    left: "We believe thoughtful strategy creates lasting success. From branding to digital marketing, every decision is guided by purpose, research, and creative direction.",
    title: "Strategy crafted around your goals and market.",
    body: "We dig deep into market trends, audience behaviour, and competitor landscapes to build strategies that position your brand for long-term growth and relevance.",
  },
  {
    num: "03/",
    left: "Growth comes from collaboration and precision. We simplify complex challenges and turn them into clear, effective solutions that move brands forward.",
    title: "Execution that turns vision into measurable impact.",
    body: "Every deliverable — from a logo to a full digital campaign — is built with precision. Our team ensures every pixel, word, and decision contributes to moving your brand forward.",
  },
];

const labelStyle: React.CSSProperties = {
  fontSize: "clamp(11px, 1.5vw, 26px)",
  lineHeight: "38px",
};

const HowWeWork = () => (
  <section className="bg-[#f6f6f6] w-full overflow-hidden font-['Articulat_CF',sans-serif]">
    <div className="px-[2.6%] pt-[10.65%] pb-[8%]"> {/* top:229/2148≈10.65% */}

      {/* ── Section Header ── */}
      {/* Same 34%/66% grid as Team section for visual consistency */}
      <div className="grid grid-cols-1 lg:grid-cols-[34%_1fr] gap-50 mb-[10%]">
        {/* Left: label + heading */}
        <div>
          <p className="text-[#333336] font-medium opacity-60 mb-1" style={labelStyle}>
            Our Approach
          </p>
          <h2 className="text-[#333336] font-medium"
            style={{ fontSize: "clamp(24px, 3.24vw, 56px)", lineHeight: "1.1" }}>
            The way we work
          </h2>
        </div>
        {/* Right: subtitle + description */}
        <div className="flex flex-col justify-center">
          <p className="text-[#333336] font-semibold mb-2" style={labelStyle}>
            Simple steps, remarkable results
          </p>
          <p className="text-[#333336] font-medium opacity-70 tracking-[-0.01em]"
            style={{ fontSize: "clamp(14px, 2.03vw, 35px)", lineHeight: "43px" }}>
            Our approach blends strategy, creativity, and execution. We listen first,
            understand your brand deeply, and transform ideas into impactful design and
            marketing solutions that help businesses grow with clarity and confidence.
          </p>
        </div>
      </div>

      {/* ── Three Image Panels ── */}
      {/*
        Design: each panel 530/1728 = 30.67% wide, gap 91.5/1728 ≈ 5.3%
        Panel aspect ratio: 530:844 = h/w = 159.25%
      */}
      <div className="flex gap-[2%] xl:gap-[5.3%] mt-[4%]">
        {panels.map(({ bg, image }, i) => (
          <div
            key={i}
            className="flex-1 overflow-hidden relative group"
            style={{ paddingBottom: "48.84%" /* 844/1728 of full width, ÷ 3 panels ≈ 159% of panel width handled by flex */, background: bg }}
          >
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
              style={{ filter: "grayscale(100%)" }}
            />
          </div>
        ))}
      </div>

      {/* ── Numbered Steps ── */}
      {/*
        Left col (0-42%): num + description text
        Right col (52%–): title + body (left:900 = 52.08%)
        Using same 34%/66% grid: left col shows num+text, right shows title+body
        Actually design splits: steps text at left:45-726 (left half), title+body at left:900 (right half)
        → use the same 34%/66% grid
      */}
      <div className="mt-[10%] space-y-0 divide-y divide-[rgba(51,51,54,0.15)]">
        {steps.map(({ num, left, title, body }) => (
          <div
            key={num}
            className="grid grid-cols-1 lg:grid-cols-[42%_1fr] gap-6 py-[3%]"
          >
            {/* Left: number + short text */}
            {/* num at left:45 (2.6%), text at left:128 (7.4%) */}
            <div className="flex items-start gap-[4%]">
              <p
                className="shrink-0 text-[#333336] font-medium opacity-60"
                style={{ fontSize: "clamp(16px, 1.97vw, 34px)", lineHeight: "29px", minWidth: "3.5ch" }}
              >
                {num}
              </p>
              <p
                className="text-[#333336] font-medium"
                style={{ fontSize: "clamp(12px, 1.27vw, 22px)", lineHeight: "29px" }}
              >
                {left}
              </p>
            </div>
            {/* Right: title + body (left:900 = 52%) */}
            <div>
              <p
                className="text-[#333336] font-medium mb-3"
                style={{ fontSize: "clamp(14px, 1.68vw, 29px)", lineHeight: "30px" }}
              >
                {title}
              </p>
              <p
                className="text-[#333336] font-medium opacity-70 tracking-[-0.01em]"
                style={{ fontSize: "clamp(12px, 1.27vw, 22px)", lineHeight: "29px" }}
              >
                {body}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default HowWeWork;