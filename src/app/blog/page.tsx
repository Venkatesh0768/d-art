import Header from '@/components/Header'
import React from 'react'
import Footer from '@/components/Footer'
import BlogSection1 from './_components/BlogSection1'
import BlogSection2 from './_components/BlogSection2'
import BlogSection3 from './_components/BlogSection3'
import StatsBanner from '@/components/common/StatsBanner'

const BlogPage = () => {
    return (
        <div className="font-sans antialiased">
            <Header />
            <BlogSection1 />
            <BlogSection2 />
            <BlogSection3 />
            <StatsBanner />
            <Footer />
        </div>
    )
}

export default BlogPage