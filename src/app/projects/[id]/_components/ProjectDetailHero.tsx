import React from 'react';
import { Project } from '../../_components/projects.config';

interface Props {
    project: Project & { id: number };
}

const ProjectDetailHero = ({ project }: Props) => {
    return (
        <section className="w-full" >

            {/* Full-width hero image — title overlaid inside */}
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/7' }}>

                {/* Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Strong bottom-left scrim so text is always readable */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/60 via-transparent to-transparent" />



                {/* Bottom-left: title block */}
                <div className="absolute bottom-0 left-0 right-0 z-10 px-[2.6%] pb-30 pt-20">

                    {/* Big title */}
                    <h1
                        className="font-medium leading-none tracking-[-0.03em] text-white m-0 mb-4"
                        style={{ fontSize: 'clamp(48px, 6vw, 100px)' }}
                    >
                        {project.title}
                    </h1>

                    {/* Divider */}
                    <div className="h-px bg-white/25 w-full mb-3" />

                    {/* Category — below divider */}
                    <p className="text-[13px] font-normal text-white/60 tracking-[0.01em] m-0">
                        {project.category}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetailHero;