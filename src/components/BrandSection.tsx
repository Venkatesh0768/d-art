import React from 'react'

// ─── Logo data per category ───────────────────────────────────────────────────
const overseasLogos = [
    { src: '/assets/logos/overseas/15 2.png', alt: 'Pery Faso' },
    { src: '/assets/logos/overseas/15 3.png', alt: 'Bean Bar' },
    { src: '/assets/logos/overseas/15 4.png', alt: 'Pramukh' },
    { src: '/assets/logos/overseas/15 5.png', alt: 'Shriji' },
    { src: '/assets/logos/overseas/16 2.png', alt: 'Xplore Australia' },
    { src: '/assets/logos/overseas/16 3.png', alt: 'Supreme Dairy' },
    { src: '/assets/logos/overseas/16 4.png', alt: 'Yogi Biofarming' },
    { src: '/assets/logos/overseas/16 5.png', alt: 'Pawan Kansal' },
    { src: '/assets/logos/overseas/17 2.png', alt: 'Ronak' },
    { src: '/assets/logos/overseas/17 4.png', alt: 'Starlest' },
    { src: '/assets/logos/overseas/17 7.png', alt: 'Foram' },
    { src: '/assets/logos/overseas/Group 343.png', alt: 'Paras' },
]

const corporateLogos = [
    { src: '/assets/logos/corporate/12 2.png', alt: 'Aditya Birla Grasim' },
    { src: '/assets/logos/corporate/12 3.png', alt: 'Larsen & Toubro' },
    { src: '/assets/logos/corporate/12 4.png', alt: 'PGP Glass' },
    { src: '/assets/logos/corporate/12 5.png', alt: 'Zydex' },
    { src: '/assets/logos/corporate/13 2.png', alt: 'Central' },
    { src: '/assets/logos/corporate/13 3.png', alt: 'TAFE' },
    { src: '/assets/logos/corporate/13 4.png', alt: 'Centurion' },
    { src: '/assets/logos/corporate/13 5.png', alt: 'FLF' },
    { src: '/assets/logos/corporate/13 6.png', alt: 'Gala' },
    { src: '/assets/logos/corporate/14 2.png', alt: 'Brand Factory' },
    { src: '/assets/logos/corporate/14 3.png', alt: 'Farmson' },
    { src: '/assets/logos/corporate/14 4.png', alt: 'Brand 14 4' },
]

const versatileLogos = [
    { src: '/assets/logos/versatile/18 2.png', alt: 'Masala Garden' },
    { src: '/assets/logos/versatile/18 3.png', alt: 'Dakornath' },
    { src: '/assets/logos/versatile/18 4.png', alt: 'The Auto Lounge' },
    { src: '/assets/logos/versatile/18 5.png', alt: 'Brand 18 5' },
    { src: '/assets/logos/versatile/19 2.png', alt: 'UR Choice' },
    { src: '/assets/logos/versatile/19 3.png', alt: 'Das Pedawala' },
    { src: '/assets/logos/versatile/19 4.png', alt: 'Dios' },
    { src: '/assets/logos/versatile/19 5.png', alt: 'Brand 19 5' },
    { src: '/assets/logos/versatile/20 2.png', alt: 'Agriland' },
    { src: '/assets/logos/versatile/20 3.png', alt: 'Kanha' },
    { src: '/assets/logos/versatile/20 4.png', alt: 'ImageGreen' },
    { src: '/assets/logos/versatile/20 5.png', alt: 'Duliram' },
    { src: '/assets/logos/versatile/21 3.png', alt: 'Brand 21 3' },
    { src: '/assets/logos/versatile/21 4.png', alt: 'Shaishay' },
    { src: '/assets/logos/versatile/21 5.png', alt: 'CCPL' },
    { src: '/assets/logos/versatile/21 6.png', alt: 'Jawahar' },
    { src: '/assets/logos/versatile/22 2.png', alt: 'Carn' },
    { src: '/assets/logos/versatile/22 3.png', alt: 'Tajaa Bazar' },
    { src: '/assets/logos/versatile/22 4.png', alt: 'Padhai Wala' },
    { src: '/assets/logos/versatile/22 5.png', alt: 'Firstcare' },
    { src: '/assets/logos/versatile/23 2.png', alt: 'KK Hospital' },
    { src: '/assets/logos/versatile/23 3.png', alt: 'Agasti International' },
    { src: '/assets/logos/versatile/23 4.png', alt: 'Innovac' },
    { src: '/assets/logos/versatile/23 5.png', alt: 'Gauri' },
    { src: '/assets/logos/versatile/24 3.png', alt: 'Blue' },
    { src: '/assets/logos/versatile/24 4.png', alt: 'HanuRam' },
    { src: '/assets/logos/versatile/24 5.png', alt: 'Kanch' },
    { src: '/assets/logos/versatile/24 6.png', alt: 'Brand 24 6' },
    { src: '/assets/logos/versatile/25 2.png', alt: 'BBO' },
    { src: '/assets/logos/versatile/25 3.png', alt: 'Aarkay' },
    { src: '/assets/logos/versatile/25 4.png', alt: 'Veggy' },
    { src: '/assets/logos/versatile/25 5.png', alt: 'Visa Synergy' },
    { src: '/assets/logos/versatile/26 2.png', alt: 'Brand 26 2' },
    { src: '/assets/logos/versatile/26 4.png', alt: 'PGP Glass 2' },
    { src: '/assets/logos/versatile/Group 372.png', alt: 'Royal' },
]



const ROW_H = 200   // was 160 → increased
const CELL_W = 350

// ─── Single logo cell with left border divider ────────────────────────────────
const LogoCell = ({ src, alt }: { src: string; alt: string }) => (
    <div
        className="shrink-0 flex items-center justify-center border-l border-[#999797] px-6"
        style={{ width: CELL_W, height: ROW_H }}
    >
        <img
            src={src}
            alt={alt}
            className="h-[80%] w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300"
        />
    </div>
)

// ─── Marquee Row ──────────────────────────────────────────────────────────────
interface MarqueeRowProps {
    label: string
    logos: { src: string; alt: string }[]
    speed?: number
    reverse?: boolean
    labelRight?: boolean
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
    label,
    logos,
    speed = 40,
    reverse = false,
    labelRight = false,
}) => {
    const doubled = [...logos, ...logos]

    return (
        <div
            className="w-full flex border border-[#999797] overflow-hidden bg-black"
            style={{ height: ROW_H }}
        >
            {/* Label LEFT */}
            {!labelRight && (
                <div
                    className="shrink-0 flex items-center px-8 border-r border-[#999797]"
                    style={{ width: 400, minWidth: 260, height: ROW_H }}
                >
                    <span
                        style={{
                            fontFamily: '"Segoe UI", sans-serif',
                            fontSize: '40px',
                            fontWeight: 600,
                            letterSpacing: '0.3px',
                            color: '#FFFFFF'
                        }}
                    >
                        {label}
                    </span>
                </div>
            )}

            {/* Scrolling strip */}
            <div className="flex-1  overflow-hidden relative border-l border-[#999797]" style={{ height: ROW_H }}>
                <div
                    className="brand-marquee-inner h-full flex "
                    style={{
                        animationDuration: `${speed}s`,
                        animationDirection: reverse ? 'reverse' : 'normal',
                    }}
                >
                    {doubled.map((logo, i) => (
                        <LogoCell key={i} src={logo.src} alt={logo.alt} />
                    ))}
                </div>
            </div>

            {/* Label RIGHT */}
            {labelRight && (
                <div
                    className="shrink-0 flex items-center justify-end px-8 border-l border-[#999797]"
                    style={{ width: 400, minWidth: 260, height: ROW_H }}
                >
                    <span
                        style={{
                            fontFamily: '"Segoe UI", sans-serif',
                            fontSize: '40px',
                            fontWeight: 600,
                            letterSpacing: '0.3px',
                            color: '#FFFFFF'
                        }}
                    >
                        {label}
                    </span>
                </div>
            )}
        </div>
    )
}

// ─── Main Component ───────────────────────────────────────────────────────────
const BrandSection = () => {
    return (
        <>
            <style>{`
        @keyframes brand-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .brand-marquee-inner {
          display: flex;
          width: max-content;
          animation: brand-marquee linear infinite;
          will-change: transform;
        }
        .brand-marquee-inner:hover {
          animation-play-state: paused;
        }
      `}</style>

            <section className="bg-black text-white px-8 lg:px-16 pt-8 pb-16 w-full">
                <div className="w-full">

                    {/* Header */}
                    <div className="reveal delay-1 flex justify-between items-start mb-10">
                        <div>
                            <h2 className="text-4xl lg:text-[2.8rem] font-bold mb-3 tracking-tight text-white leading-tight">
                                Brands We Serve
                            </h2>
                            <p className="text-[#888] text-lg lg:text-[1.2rem] leading-[1.3]">
                                Partnerships built on creativity<br />and results
                            </p>
                        </div>
                        <div className="hidden sm:block lg:mt-4 pr-4">
                            <img src="/assets/tick.png" alt="Tick" className="w-[80px] h-[80px] object-contain" />
                        </div>
                    </div>

                    {/* Three Rows — gap matches the reference screenshot */}
                    <div className="reveal delay-2 flex flex-col gap-5">

                        {/* Row 1: label left → logos scroll left */}
                        <MarqueeRow
                            label="Overseas Clients"
                            logos={overseasLogos}
                            speed={45}
                        />

                        {/* Row 2: logos scroll right → label anchored RIGHT */}
                        <MarqueeRow
                            label="Corporate Clients"
                            logos={corporateLogos}
                            speed={38}
                            reverse
                            labelRight
                        />

                        {/* Row 3: label left → logos scroll left */}
                        <MarqueeRow
                            label="Versatile Clients"
                            logos={versatileLogos}
                            speed={65}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}

export default BrandSection

