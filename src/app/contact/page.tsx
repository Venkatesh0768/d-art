import Footer from '@/components/Footer'
import Header from '@/components/Header'
import StatsBanner from '@/components/common/StatsBanner'
import React from 'react'
import ContactsPage1 from './_components/ContactsPage1'
import ContactsPage2 from './_components/ContactsPage2'
import ContactsPage3 from './_components/ContactsPage3'
import ContactsPage4 from './_components/ContactsPage4'


const ContactPage = () => {
    return (
        <div className="font-sans antialiased">
            <Header />
            <ContactsPage1 />
            <ContactsPage2 />
            <ContactsPage3 />
            <ContactsPage4 />
            <StatsBanner />
            <Footer />
        </div>
    )
}

export default ContactPage