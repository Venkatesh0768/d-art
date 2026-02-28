import imgRectangle16 from "../../../../public/assets/about_page/b23f7420f0f38cecd6f5dbc04bef2172b5764e9d.png";

const Introduction = () => (
    <section className="bg-white w-full overflow-hidden font-['Articulat_CF',sans-serif]">
        {/*
          Design: 1728px wide × 1130px tall canvas
          Left col:  45px → ~447px  (≈26% width)
          Right col: 900px → 1684px (≈52%–97% width)
          Top padding: ~221px (≈20% of 1130)
          Left-bottom line at top:785 (≈69%)
          Right-body text at top:591 (≈52%)
        */}
        <div className="relative w-full" style={{ paddingBottom: "65.39%" /* 1130/1728 */ }}>
            <div className="absolute inset-0">

                {/* ── LEFT COLUMN ── */}
                {/* "Introduction" label: top:221 left:45 → 12.79% / 2.6% */}
                <p
                    className="absolute font-medium not-italic text-[#333336] whitespace-pre-wrap"
                    style={{
                        top: "19.56%",
                        left: "2.6%",
                        fontSize: "clamp(12px, 1.5vw, 26px)",
                        lineHeight: "38px",
                        opacity: 0.6,
                    }}
                >
                    Introduction
                </p>

                {/* "We are D art": top:268 left:45 → 23.72% / 2.6% */}
                <p
                    className="absolute font-medium not-italic text-[#333336]"
                    style={{
                        top: "23.72%",
                        left: "2.6%",
                        fontSize: "clamp(22px, 3.24vw, 56px)",
                        lineHeight: "38px",
                    }}
                >
                    We are D art
                </p>

                {/* Horizontal divider: top:785 left:45 width:447.5 → 69.47% / 2.6% / 25.9% */}
                <div
                    className="absolute"
                    style={{
                        top: "69.47%",
                        left: "2.6%",
                        width: "25.9%",
                        height: "1px",
                        background: "rgba(51,51,54,0.3)",
                    }}
                />

                {/* D art icon + tagline: top:822 left:45(icon)/95(text) → 72.74% */}
                <div
                    className="absolute flex items-start gap-[2%]"
                    style={{ top: "72.74%", left: "2.6%" }}
                >
                    {/* D art logo icon masked with imgRectangle16 */}
                    <div
                        className="shrink-0"
                        style={{
                            width: "clamp(18px, 2.37vw, 41px)",
                            height: "clamp(15px, 2.02vw, 35px)",
                            background: "#FF4400",
                            maskImage: `url('${imgRectangle16.src}')`,
                            WebkitMaskImage: `url('${imgRectangle16.src}')`,
                            maskRepeat: "no-repeat",
                            maskSize: "contain",
                            maskPosition: "center",
                        }}
                    />
                    <p
                        className="font-medium not-italic text-[#333336] whitespace-pre-wrap"
                        style={{
                            fontSize: "clamp(11px, 1.39vw, 24px)",
                            lineHeight: "30px",
                            opacity: 0.7,
                            maxWidth: "22.4%",
                        }}
                    >
                        By turning creativity into strategy, we help brands move forward with clarity and confidence.
                    </p>
                </div>

                {/* ── RIGHT COLUMN ── */}
                {/* Heading line 1: top:221 left:900 → 19.56% / 52.08% */}
                <p
                    className="absolute font-medium not-italic text-[#333336] whitespace-pre-wrap"
                    style={{
                        top: "19.56%",
                        left: "52.08%",
                        width: "45.37%",
                        fontSize: "clamp(18px, 2.55vw, 44px)",
                        lineHeight: "51px",
                    }}
                >
                    A creative agency built to grow modern brands.
                </p>

                {/* Heading line 2: top:323 left:900 → 28.58% / 52.08% */}
                <p
                    className="absolute font-medium not-italic text-[#333336] whitespace-pre-wrap"
                    style={{
                        top: "28.58%",
                        left: "52.08%",
                        width: "45.37%",
                        fontSize: "clamp(18px, 2.55vw, 44px)",
                        lineHeight: "51px",
                    }}
                >
                    Our approach blends strategy, design, and digital execution to create meaningful brand experiences that drive real growth.
                </p>

                {/* Body paragraph left: top:591 left:900 → 52.3% / 52.08% width:365/1728=21.1% */}
                <p
                    className="absolute font-medium not-italic text-[#333336] whitespace-pre-wrap"
                    style={{
                        top: "52.3%",
                        left: "52.08%",
                        width: "21.12%",
                        fontSize: "clamp(10px, 1.16vw, 20px)",
                        lineHeight: "30px",
                        opacity: 0.6,
                    }}
                >
                    We believe every business is unique and deserves solutions tailored to its purpose. From branding and packaging to digital marketing and web development, we build foundations that strengthen identity, increase visibility, and boost revenue through thoughtful creativity.
                </p>

                {/* Body paragraph right: top:591 left:1319 → 52.3% / 76.33% width:365/1728=21.1% */}
                <p
                    className="absolute font-medium not-italic text-[#333336] whitespace-pre-wrap"
                    style={{
                        top: "52.3%",
                        left: "76.33%",
                        width: "21.12%",
                        fontSize: "clamp(10px, 1.16vw, 20px)",
                        lineHeight: "30px",
                        opacity: 0.6,
                    }}
                >
                    Our team brings together adaptable professionals united by a passion for impactful design. By combining innovation, strategy, and purpose, we transform possibilities into results that inspire trust, spark emotion, and leave a lasting impression.
                </p>

            </div>
        </div>
    </section>
);

export default Introduction;
