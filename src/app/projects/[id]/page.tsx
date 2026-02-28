import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ALL_PROJECTS } from '../_components/projects.config';
import { notFound } from 'next/navigation';
import ProjectDetailHero from './_components/ProjectDetailHero';
import ProjectDetailInfo from './_components/ProjectDetailInfo';
import ProjectDetailGallery from './_components/ProjectDetailGallery';
import ProjectDetailPrevNext from './_components/ProjectDetailPrevNext';
import ProjectDetailMore from './_components/ProjectDetailMore';
import StatsBanner from '@/components/common/StatsBanner';

export async function generateStaticParams() {
    return ALL_PROJECTS.map((p) => ({ id: String(p.id) }));
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id: idStr } = await params;
    const project = ALL_PROJECTS.find((p) => p.id === parseInt(idStr, 10));

    if (!project) notFound();

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <ProjectDetailHero project={project} />
            <ProjectDetailInfo project={project} />
            <ProjectDetailGallery project={project} />
            <ProjectDetailPrevNext currentId={project.id} />
            <ProjectDetailMore currentId={project.id} />
             <StatsBanner />
            <Footer />
        </div>
    );
}
