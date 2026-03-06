import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer'
import ProjectSection1 from './_components/ProjectSection1'
import ProjectSection2 from './_components/ProjectSection2'
import StatsBanner from '@/components/common/StatsBanner'

const ProjectPage = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <ProjectSection1/>
      <ProjectSection2/>
      <StatsBanner />
      <Footer/>
    </div>
  )
}

export default ProjectPage