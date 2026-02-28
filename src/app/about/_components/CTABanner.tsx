/*
  Design: ProjectsPage6 — 1728 × 820px canvas
  Heading: top:102px, left:45px, 160px Extra Bold white
  Sub-text + reach out: bottom area (top ~580–677px)
  Fix: flex-col justify-between instead of absolute % positions
       so text never overlaps at any viewport size.
*/

const CTABanner = () => (
  <section
    className="relative w-full overflow-hidden font-['Articulat_CF',sans-serif]"
    style={{ minHeight: "clamp(320px, 47.45vw, 820px)" }}
  >
    {/* Background — orange textured */}
    <img
      src="/assets/about_page/orange_texture.png"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
    />

    {/* Content — flex column, heading top, sub+link bottom */}
    <div
      className="relative z-10 h-full flex flex-col justify-between"
      style={{
        minHeight: "inherit",
        padding: "clamp(24px, 5.9vw, 102px) clamp(16px, 2.6vw, 45px) clamp(24px, 8.3vw, 143px)",
      }}
    >
      {/* Heading */}
      <p
        className="font-extrabold text-white mb-10"
        style={{
          fontSize: "clamp(28px, 9.26vw, 160px)",
          lineHeight: "1.0",
          maxWidth: "62.4%",
        }}
      >
        {`Let's create\nsomething\nremarkable`}
      </p>

      {/* Bottom group: sub-text + reach out */}
      <div>
        <p
          className="font-medium text-white mb-10"
          style={{
            fontSize: "clamp(10px, 1.45vw, 25px)",
            lineHeight: "36px",
            maxWidth: "clamp(200px, 32.81vw, 567px)",
          }}
        >
          {`— If you're interested in any form of collaboration,\nplease send us an email and we'll get back shortly.`}
        </p>

        <a href="/contact" className="group relative overflow-hidden inline-flex flex-col items-start" style={{ fontSize: "clamp(16px, 2.77vw, 47.83px)", lineHeight: "1.2" }}>
          {/* Default state: Two Lines */}
          <div className="flex flex-col items-start transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[105%] group-hover:opacity-0 relative z-10 pb-2">
            <span className="font-medium text-white leading-none">reach</span>
            <span className="font-medium text-white leading-none">out</span>
          </div>

          {/* Hover state content: Single Line (slides in from bottom) */}
          <div className="absolute left-0 bottom-2 font-medium text-white whitespace-nowrap translate-y-full opacity-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-0 group-hover:opacity-100 flex gap-[clamp(4px,1vw,12px)] z-20">
            <span className="leading-none">reach</span><span className="leading-none">out</span>
          </div>

          {/* Animated underline */}
          <span className="absolute left-0 bottom-0 h-[2px] bg-white w-full scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 z-30" />
        </a>
      </div>
    </div>
  </section>
);

export default CTABanner;
