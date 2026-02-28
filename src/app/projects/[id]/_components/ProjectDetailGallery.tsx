import React from 'react';
import { Project } from '../../_components/projects.config';

interface Props {
    project: Project;
}

/* ────────────────────────────────────────────────────────────────
   Helper Component: Image Cell
   Renders a fully covered absolute-positioned image
   ──────────────────────────────────────────────────────────────── */
const Img = ({
    src,
    alt,
    pos = 'object-center',
}: {
    src: string;
    alt: string;
    pos?: string;
}) => (
    <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${pos}`}
    />
);

const ProjectDetailGallery = ({ project }: Props) => {
    /* ────────────────────────────────────────────────────────────────
       Image Source Setup
       - Use project-specific gallery images if available
       - Otherwise fallback to hero image repeated 14 times
       ──────────────────────────────────────────────────────────────── */
    const imgs =
        project.galleryImages && project.galleryImages.length > 0
            ? project.galleryImages
            : Array(14).fill(project.image);

    /* ────────────────────────────────────────────────────────────────
       Safe Image Accessor
       - Returns image at index
       - Falls back to hero image if out of bounds
       ──────────────────────────────────────────────────────────────── */
    const g = (i: number) => imgs[i] ?? project.image;

    return (
        <section className="w-full bg-white px-[2.6%] py-14 flex flex-col gap-3">

            {/* ───────────────── Row 1: Full-width Hero (img1) ───────────────── */}
            <div className="relative w-full overflow-hidden aspect-[16/9]">
                <Img src={g(0)} alt={project.title} pos="object-center" />
            </div>

            {/* ───────────────── Row 2: 3 Equal Columns (img2, img3, img4) ───────────────── */}
            <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="relative overflow-hidden aspect-[4/3]">
                        <Img src={g(i)} alt={project.title} />
                    </div>
                ))}
            </div>

            {/* ───────────────── Row 3: Full-width Wide (img5) ───────────────── */}
            <div className="relative w-full overflow-hidden aspect-[16/7]">
                <Img src={g(4)} alt={project.title} />
            </div>

            {/* ───────────────── Row 4: 2 Equal Columns (img6, img7) ───────────────── */}
            <div className="grid grid-cols-2 gap-3">
                {[5, 6].map((i) => (
                    <div key={i} className="relative overflow-hidden aspect-[4/3]">
                        <Img src={g(i)} alt={project.title} />
                    </div>
                ))}
            </div>

            {/* ───────────────── Row 5: Full-width Panoramic (img8) ───────────────── */}
            <div className="relative w-full overflow-hidden aspect-[16/7]">
                <Img src={g(7)} alt={project.title} />
            </div>

            {/* ───────────────── Row 6: Full-width Brand Image (img11) ───────────────── */}
            <div className="relative w-full overflow-hidden aspect-[16/9]">
                <Img src={g(10)} alt={project.title} pos="object-center" />
            </div>

            {/* ───────────────── Row 7: 2 Equal Columns (img9, img10) ───────────────── */}
            <div className="grid grid-cols-2 gap-3">
                {[8, 9].map((i) => (
                    <div key={i} className="relative overflow-hidden aspect-[4/3]">
                        <Img src={g(i)} alt={project.title} />
                    </div>
                ))}
            </div>

            {/* ───────────────── Row 8: Last Image (img14) ───────────────── */}
            {imgs.length >= 14 && (
                <div className="col-span-2 relative overflow-hidden aspect-[16/9]">
                    <Img src={g(13)} alt={project.title} />
                </div>
            )}
        </section>
    );
};

export default ProjectDetailGallery;