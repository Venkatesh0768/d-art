"use client";
import React from 'react';
import Link from 'next/link';
import { PROJECTS, SECTION2_HEADER, Project } from './projects.config';

const ProjectCard = ({ project, fullWidth = false }: { project: Project; fullWidth?: boolean }) => {
    const descSize = fullWidth ? 'clamp(20px, 2vw, 40px)' : 'clamp(40px, 1.4vw, 22px)';

    return (
        <Link href={`/projects/${project.id}`} className="w-full flex flex-col overflow-hidden group cursor-pointer" style={{ textDecoration: 'none' }}>
            {/* ── IMAGE SECTION — everything lives inside here ── */}
            <div className={`relative w-full overflow-hidden ${fullWidth ? 'aspect-[21/6]' : 'aspect-[4/3]'}`}>

                {/* Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:blur-[1.5px]"
                />

                {/* Always-on bottom gradient scrim */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Hover — dark overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/55" />

                {/* Hover — description slides in from top */}
                <div className="absolute inset-0 flex items-start z-20 p-6 md:p-8 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none">
                    <p
                        className="font-bold text-white m-0 max-w-[90%]"
                        style={{ fontSize: descSize, lineHeight: '1.3' }}
                    >
                        {project.description}
                    </p>
                </div>

                {/* ── BOTTOM: meta + divider + title + category — all on image ── */}
                <div className={`absolute left-0 right-0 bottom-0 z-10 ${fullWidth ? 'px-6 md:px-8 pb-6' : 'px-15 pb-15'} pt-16`}>

                    {/* Designer | Published */}
                    <div className="flex justify-between items-center mb-3">
                        <span className={`font-normal text-white/80 tracking-wide ${fullWidth ? 'text-base' : 'text-lg'}`}>
                            {project.designer}
                        </span>
                        <span className={`font-normal text-white/80 tracking-wide ${fullWidth ? 'text-base' : 'text-lg'}`}>
                            {project.published}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/30 mb-4" />

                    {/* Title */}
                    <h3
                        className="font-medium leading-tight tracking-tight text-white m-0"
                        style={{ fontSize: fullWidth ? 'clamp(28px,3.2vw,54px)' : 'clamp(66px,2vw,36px)' }}
                    >
                        {project.title}
                    </h3>

                    {/* Category */}
                    <p
                        className="font-normal text-white/55 mt-1 mb-0"
                        style={{ fontSize: fullWidth ? '18px' : '20px' }}
                    >
                        {project.category}
                    </p>
                </div>
            </div>
        </Link>
    );
};

const ProjectSection2 = () => {
    const regularProjects = PROJECTS.filter((p) => !p.fullWidth);
    const fullWidthProjects = PROJECTS.filter((p) => p.fullWidth);

    const before = regularProjects.slice(0, 6);
    const after = regularProjects.slice(6);

    return (
        <section
            className="w-full px-[2.6%] py-20 lg:py-28 bg-white"
            data-name="Project Section 2"
        >
            {/* ── Section Header ── */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 lg:mb-16">
                <div>
                    <p className="text-[13px] font-normal text-[#333336]/55 tracking-wide mb-1.5">
                        {SECTION2_HEADER.sublabel}
                    </p>
                    <h2 className="text-[clamp(28px,3vw,48px)] font-medium leading-[1.1] tracking-[-0.03em] text-[#333336] m-0">
                        {SECTION2_HEADER.label}
                    </h2>
                </div>
                <div className="flex items-end">
                    <p className="text-[clamp(16px,1.2vw,20px)] font-normal text-[#333336]/70 leading-[1.55]">
                        {SECTION2_HEADER.description}
                    </p>
                </div>
            </div>

            {/* ── Project Grid ── */}
            <div className="flex flex-col gap-3">
                {before.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {before.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}

                {fullWidthProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} fullWidth />
                ))}

                {after.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {after.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectSection2;