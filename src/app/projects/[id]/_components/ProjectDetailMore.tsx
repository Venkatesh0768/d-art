import React from 'react';
import Link from 'next/link';
import { ALL_PROJECTS } from '../../_components/projects.config';

interface Props {
    currentId: number;
}

const ProjectDetailMore = ({ currentId }: Props) => {
    // Show other projects (excluding current)
    const others = ALL_PROJECTS.filter((p) => p.id !== currentId).slice(0, 3);

    return (
        <section className="w-full bg-white overflow-hidden pt-4">

            {/* ── Giant "More Projects" background text ── */}
            <div className="relative w-full overflow-hidden select-none" style={{ height: 'clamp(60px, 10vw, 140px)' }}>
                <p
                    className="absolute inset-0 flex items-center justify-center whitespace-nowrap font-medium leading-none"
                    style={{
                        fontFamily: "'Articulat CF', sans-serif",
                        fontSize: 'clamp(60px, 12vw, 180px)',
                        fontWeight: 600,
                        color: '#EBEBEB',
                        letterSpacing: '-0.04em',
                        margin: 0,
                    }}
                >
                    More Projects
                </p>
            </div>

            {/* ── Full-width stacked cards ── */}
            <div className="flex flex-col mt-20">
                {others.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.id}`}
                        className="group relative w-full overflow-hidden block"
                        style={{ textDecoration: 'none', aspectRatio: '16/7' }}
                    >
                        {/* Background image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* Dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 pointer-events-none" />

                        {/* ── Title row: title + line + D-art logo ── */}
                        <div className="absolute top-0 left-0 right-0 z-10 flex items-center px-10 pt-8 gap-5">

                            {/* Title + Category stacked */}
                            <div className="flex flex-col shrink-0">
                                <h3
                                    style={{
                                        fontFamily: "'Articulat CF', sans-serif",
                                        fontSize: 'clamp(88px, 3vw, 42px)',
                                        fontWeight: 500,
                                        color: '#FFFFFF',
                                        margin: 0,
                                        letterSpacing: '-0.025em',
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "'Articulat CF', sans-serif",
                                        fontSize: '33px',
                                        fontWeight: 400,
                                        color: 'rgba(255,255,255,0.65)',
                                        margin: '4px 0 0 0',
                                        letterSpacing: '0.02em',
                                    }}
                                >
                                    {project.category}
                                </p>
                            </div>

                            {/* Horizontal line — stretches to fill */}
                            <div className="flex-1 h-px bg-white/30" />

                            {/* D-art logo — white */}
                            <img
                                src="/assets/dart_d_bl.png"
                                alt="D-art"
                                className="shrink-0"
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    objectFit: 'contain',
                                    filter: 'invert(1) brightness(2)',
                                    opacity: 0.85,
                                }}
                            />
                        </div>
                    </Link>
                ))}
            </div>

            {/* ── Load more Projects link ── */}
            <div className="flex justify-center items-center py-36 px-[2.6%]">
                <Link
                    href="/projects"
                    className="group relative inline-block"
                    style={{ textDecoration: 'none' }}
                >
                    <span style={{
                        fontFamily: "'Articulat CF', sans-serif",
                        fontSize: 'clamp(52px, 2.5vw, 36px)',
                        fontWeight: 600,
                        color: '#111111',
                        letterSpacing: '-0.02em',
                    }}>
                        Load more Projects
                    </span>
                    {/* Orange underline: 10% → 100% on hover */}
                    <span className="absolute bottom-[-6px] left-0 h-[2px] bg-[#FF4400] w-[10%] group-hover:w-full transition-all duration-500 ease-out" />
                </Link>
            </div>
        </section>
    );
};

export default ProjectDetailMore;
