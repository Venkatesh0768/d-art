import React from 'react';
import Link from 'next/link';
import { FEATURED_PROJECT } from './projects.config';

const ProjectSection1 = () => {
    const { image, title, category, published, designer, description } = FEATURED_PROJECT;

    return (
        <section
            className="w-full px-[2.6%] pt-16 md:pt-20 pb-0 bg-white"
            data-name="Project Section 1"
        >
            <Link
                href={`/projects/${FEATURED_PROJECT.id}`}
                className="w-full flex flex-col overflow-hidden group cursor-pointer"
                style={{ textDecoration: 'none' }}
            >

                {/* ── IMAGE SECTION ── */}
                <div className="relative w-full overflow-hidden aspect-[16/6]">

                    {/* Image — subtle scale on hover, very light blur */}
                    <img
                        src={image}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:blur-[1.5px]"
                    />

                    {/* Base scrim — bottom gradient always visible */}
                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Hover — dark overlay fades in */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50" />

                    {/* Hover — description slides in from top, white text */}
                    <div className="absolute inset-0 flex items-start z-10 p-6 md:p-10 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none">
                        <p className="text-[clamp(48px,2vw,30px)] font-bold leading-snug text-white m-0 max-w-[85%]">
                            {description}
                        </p>
                    </div>

                    {/* ── BOTTOM META + TITLE overlaid on image ── */}
                    <div className="absolute left-0 right-0 bottom-0 z-10 px-6 md:px-20 pb-8 pt-10">

                        {/* Designer | Published row */}
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-sm font-normal text-white/80 tracking-wide">
                                {designer}
                            </span>
                            <span className="text-sm font-normal text-white/80 tracking-wide">
                                {published}
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-white/25 mb-3" />

                        {/* Title */}
                        <h1 className="text-[clamp(24px,3.2vw,54px)] font-medium leading-tight tracking-tight text-white m-0">
                            {title}
                        </h1>

                        {/* Category */}
                        <p className="text-[clamp(13px,1.1vw,17px)] font-normal text-white/55 mt-1 mb-0">
                            {category}
                        </p>
                    </div>
                </div>

            </Link>
        </section>
    );
};

export default ProjectSection1;