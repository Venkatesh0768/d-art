const VisionQuote = () => (
  <section
    className="relative w-full overflow-hidden font-['Articulat_CF',sans-serif]"
    style={{ backgroundColor: "#FF4400" }}
  >
    {/*
          Design: ProjectsPage2 — 1728 × 818px canvas, background #FF4400
          All positions are converted to % of 1728 (width) / 818 (height)
        */}
    <div className="relative w-full" style={{ paddingBottom: "47.34%" /* 818/1728 */ }}>
      <div className="absolute inset-0">

        {/* ── Quote line 1: top:104 left:45 w:1265 → 12.71% / 2.6% / 73.2% ── */}
        <p
          className="absolute font-['Articulat_CF',sans-serif] font-bold not-italic text-white whitespace-pre-wrap"
          style={{
            top: "12.71%",
            left: "2.6%",
            width: "73.2%",
            fontSize: "clamp(18px, 3.7vw, 64px)",
            lineHeight: "1.09" /* 70/64 */,
          }}
        >
          Our vision is to push creative boundaries, setting new standards in branding, packaging, and digital experiences.
        </p>

        {/* ── Quote line 2: top:388 left:45 w:1270 → 47.43% / 2.6% / 73.5% ── */}
        <p
          className="absolute font-['Articulat_CF',sans-serif] font-bold not-italic text-white whitespace-pre-wrap"
          style={{
            top: "47.43%",
            left: "2.6%",
            width: "73.5%",
            fontSize: "clamp(18px, 3.7vw, 64px)",
            lineHeight: "1.09",
          }}
        >
          {`We're not just building designs — we're shaping brand journeys that drive growth, recognition, and meaningful connections.`}
        </p>

        {/* ── Circular profile photo: left:1360 top:104 size:324 → 78.7% / 12.71% / 18.75% ── */}
        <div
          className="absolute overflow-hidden"
          style={{
            left: "78.7%",
            top: "12.71%",
            width: "18.75%",
            aspectRatio: "1 / 1",
            borderRadius: "50%",
          }}
        >
          <img
            src="/assets/rajwinder.png"
            alt="Rajwinder"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* ── Name: top:672 left:45 → 82.15% / 2.6% ── */}
        <p
          className="absolute font-['Articulat_CF',sans-serif] font-semibold not-italic text-white"
          style={{
            top: "82.15%",
            left: "2.6%",
            fontSize: "clamp(12px, 1.62vw, 28px)",
            lineHeight: "70px",
          }}
        >
          Divyang Patel
        </p>

        {/* ── Role: top:707 left:45 → 86.43% / 2.6% ── */}
        <p
          className="absolute font-['Articulat_CF',sans-serif] font-medium not-italic text-white"
          style={{
            top: "86.43%",
            left: "2.6%",
            fontSize: "clamp(10px, 1.04vw, 18px)",
            lineHeight: "70px",
          }}
        >
          Creative Founder
        </p>

      </div>
    </div>
  </section>
);

export default VisionQuote;
