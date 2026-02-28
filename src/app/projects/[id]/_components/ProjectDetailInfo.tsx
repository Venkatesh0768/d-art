"use client";
import React from 'react';
import Link from 'next/link';
import { Project, ALL_PROJECTS } from '../../_components/projects.config';

interface ContentProps {
    project: Project & { id: number };
}

// ── Heading with animated orange underline directly on the text ───────────────
const UnderlineHeading = ({
    children,
    align = 'left',
    className = '',
}: {
    children: React.ReactNode;
    align?: 'left' | 'right';
    className?: string;
}) => (
    <h2
        className={`group/h text-[clamp(40px,5vw,80px)] font-medium leading-[1.0] tracking-[-0.035em] text-[#1a1a1a] m-0 cursor-default ${className}`}
    >
        <span className="relative inline-block">
            {children}
            {/* Underline: 10% grey initially → 100% orange on heading hover */}
            <span
                className={`
                    absolute bottom-[-6px] ${align === 'right' ? 'right-0' : 'left-0'}
                    h-[3px]
                    bg-[#FF4400]
                    w-[10%] group-hover/h:w-full
                    transition-all duration-500 ease-out
                `}
            />
        </span>
    </h2>
);

// ── Section: overview / branding / outcome ───────────────────────────────────
const ContentSection = ({
    label,
    labelRight = false,
    description,
    bgGray = false,
}: {
    label: string;
    labelRight?: boolean;
    description: string;
    bgGray?: boolean;
}) => (
    <div className={`w-full group ${bgGray ? 'bg-[#F5F5F5]' : 'bg-white'} px-[2.6%] py-24 lg:py-32`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left col */}
            <div className={labelRight ? 'order-2 lg:order-1' : ''}>
                {!labelRight && (
                    <UnderlineHeading>{label}</UnderlineHeading>
                )}
                {labelRight && (
                    <p className="text-[clamp(18px,1.5vw,26px)] font-normal text-[#333336]/70 leading-[1.68] m-0">
                        {description}
                    </p>
                )}
            </div>

            {/* Right col */}
            <div className={labelRight ? 'order-1 lg:order-2 text-right' : ''}>
                {labelRight && (
                    <UnderlineHeading align="right">{label}</UnderlineHeading>
                )}
                {!labelRight && (
                    <p className="text-[clamp(18px,1.5vw,26px)] font-normal text-[#333336]/70 leading-[1.68] m-0">
                        {description}
                    </p>
                )}
            </div>

        </div>
    </div>
);

// ── Project Detail Body ───────────────────────────────────────────────────────
export const ProjectDetailBody = ({ project }: ContentProps) => {
    return (
        <div className="w-full bg-white">

            {/* Project Overview */}
            <ContentSection
                label="Project overview"
                description={project.description}
            />

            {/* Branding Approach — gray bg, label on right */}
            <ContentSection
                label="Branding approach"
                labelRight
                description="The goal was to build a brand identity that feels familiar, reliable, and easy to recognize in a competitive retail environment. We focused on clean visuals, bold brand presence, and consistent design elements that communicate trust and approachability across all touchpoints."
                bgGray
            />

            {/* Design Outcome */}
            <div className="w-full bg-white group px-[2.6%] py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left — heading + project details */}
                    <div>
                        <UnderlineHeading>Design outcome</UnderlineHeading>

                        <div className="mt-12">
                            <p className="text-[16px] font-medium text-[#1a1a1a] mb-4 tracking-wide uppercase" style={{ letterSpacing: '0.06em', fontSize: '12px' }}>
                                Project details
                            </p>
                            <div className="flex flex-col gap-2 text-[16px] text-[#333336]/65">
                                <span>Client: {project.client ?? project.designer}</span>
                                <span>Published: {project.published.replace('Published — ', '')}</span>
                                <span>Media: {project.media ?? 'Digital & Print'}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — outcome description */}
                    <div>
                        <p className="text-[clamp(18px,1.5vw,26px)] font-normal text-[#333336]/70 leading-[1.68] m-0">
                            {project.outcome ?? `The final identity system includes a strong logo, cohesive visual assets, and print-ready branding materials. The design reflects simplicity and clarity, helping ${project.title} stand out while remaining accessible to a wide customer base.`}
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
};

// ── More Projects ─────────────────────────────────────────────────────────────
interface MoreProps {
    currentId: number;
}

export const ProjectDetailMore = ({ currentId }: MoreProps) => {
    const others = ALL_PROJECTS.filter((p) => p.id !== currentId).slice(0, 3);

    return (
        <section className="w-full px-[2.6%] bg-white py-16 lg:py-24">

            <h2 className="text-[clamp(32px,4vw,64px)] font-medium leading-[1.05] tracking-[-0.03em] text-[#333336] mb-8">
                More Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {others.map((project) => (
                    <Link
                        key={project.id}
                        href={`/projects/${project.id}`}
                        className="group overflow-hidden cursor-pointer no-underline"
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden aspect-[4/3]">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:blur-[1.5px]"
                            />
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                            {/* Hover dark overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50" />

                            {/* Bottom meta + title on image */}
                            <div className="absolute left-0 right-0 bottom-0 z-10 px-4 pb-4 pt-12
                                transition-all duration-500 ease-out
                                group-hover:opacity-0 group-hover:translate-y-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-white/70">{project.designer}</span>
                                    <span className="text-xs text-white/70">{project.published}</span>
                                </div>
                                <div className="h-px bg-white/25 mb-3" />
                                <h3 className="text-[clamp(18px,1.6vw,26px)] font-medium leading-tight tracking-tight text-white m-0">
                                    {project.title}
                                </h3>
                                <p className="text-[13px] text-white/50 mt-1 mb-0">{project.category}</p>
                            </div>

                            {/* Hover description slides in */}
                            <div className="absolute inset-0 flex items-start z-20 p-5 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none">
                                <p className="text-[clamp(14px,1.2vw,18px)] font-bold text-white m-0 max-w-[90%] leading-snug">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
};

export default ProjectDetailBody;