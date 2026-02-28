"use client";
import React from 'react';
import Link from 'next/link';
import { ALL_PROJECTS } from '../../_components/projects.config';

interface Props {
    currentId: number;
}

const ProjectDetailPrevNext = ({ currentId }: Props) => {
    const currentIndex = ALL_PROJECTS.findIndex((p) => p.id === currentId);

    const prevProject = ALL_PROJECTS[(currentIndex - 1 + ALL_PROJECTS.length) % ALL_PROJECTS.length];
    const nextProject = ALL_PROJECTS[(currentIndex + 1) % ALL_PROJECTS.length];

    return (
        <div className="w-full">
            <div className="flex items-stretch" style={{ minHeight: '420px' }}>

                {/* ── Previous Project ── */}
                <Link
                    href={`/projects/${prevProject.id}`}
                    className="group flex-1 flex flex-col justify-center px-[2.6%] py-10 no-underline"
                    style={{ textDecoration: 'none' }}
                >
                    <p style={{
                        fontFamily: "'Articulat CF', sans-serif",
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#FF4400',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        margin: '0 0 10px 0',
                    }}>
                        Previous Project
                    </p>

                    {/* Underline on text itself */}
                    <span className="relative inline-block w-fit">
                        <span style={{
                            fontFamily: "'Articulat CF', sans-serif",
                            fontSize: 'clamp(38px, 1.8vw, 26px)',
                            fontWeight: 500,
                            color: '#0a0a0a',
                            letterSpacing: '-0.025em',
                        }}>
                            {prevProject.title}
                        </span>
                        <span className="absolute bottom-[-4px] left-0 h-[2px] bg-[#FF4400] w-[15%] group-hover:w-full transition-all duration-500 ease-out" />
                    </span>
                </Link>

               

                {/* ── Next Project ── */}
                <Link
                    href={`/projects/${nextProject.id}`}
                    className="group flex-1 flex flex-col justify-center items-end px-[2.6%] py-10 no-underline text-right"
                    style={{ textDecoration: 'none' }}
                >
                    <p style={{
                        fontFamily: "'Articulat CF', sans-serif",
                        fontSize: '15px',
                        fontWeight: 400,
                        color: '#FF4400',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        margin: '0 0 10px 0',
                    }}>
                        Next Project
                    </p>

                    {/* Underline on text itself — expands from right */}
                    <span className="relative inline-block w-fit">
                        <span style={{
                            fontFamily: "'Articulat CF', sans-serif",
                            fontSize: 'clamp(38px, 1.8vw, 26px)',
                            fontWeight: 500,
                            color: '#0a0a0a',
                            letterSpacing: '-0.025em',
                        }}>
                            {nextProject.title}
                        </span>
                        <span className="absolute bottom-[-4px] right-0 h-[2px] bg-[#FF4400] w-[15%] group-hover:w-full transition-all duration-500 ease-out" />
                    </span>
                </Link>

            </div>
        </div>
    );
};

export default ProjectDetailPrevNext;
