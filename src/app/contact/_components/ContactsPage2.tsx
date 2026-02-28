import React from 'react';

const ContactInfoCard = ({
    icon,
    title,
    description,
    linkText
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    linkText: string;
}) => {
    return (
        <div className="flex flex-col items-center text-center">
            {/* Icon Container */}
            <div className="h-10 mb-6 flex items-center justify-center text-[#f40]">
                {icon}
            </div>

            {/* Title */}
            <h3 className="font-['Articulat_CF:Medium',sans-serif] text-[24px] lg:text-[28px] text-[#333336] mb-4">
                {title}
            </h3>

            {/* Description */}
            <p className="font-['Articulat_CF:Regular',sans-serif] text-[18px] lg:text-[21px] text-[#333336]/70 leading-normal mb-12 max-w-[280px]">
                {description}
            </p>

            {/* Link Text with expanding underline */}
            <button className="relative inline-block font-['Articulat_CF:Medium',sans-serif] text-[18px] lg:text-[20px] text-[#333336] transition-colors duration-300 group cursor-pointer hover:text-[#f40]">
                <span className="relative z-10 pb-1 block">
                    {linkText}
                    <span className="absolute left-0 bottom-[-2px] h-[2px] bg-[#f40] transition-all duration-300 w-[15px] group-hover:w-full"></span>
                </span>
            </button>
        </div>
    );
};

const ContactsPage2 = () => {
    return (
        <div className="w-full bg-[#f6f6f6] py-24 lg:py-40 px-[5%] md:px-[2.6%]" data-name="Projects Page">
            <div className="max-w-[1728px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16">

                {/* Card 1 */}
                <ContactInfoCard
                    icon={
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                        </svg>
                    }
                    title="Quick Start"
                    description="Book a 15-minute call to discuss your project"
                    linkText="schedule now"
                />

                {/* Card 2 */}
                <ContactInfoCard
                    icon={
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            <circle cx="8" cy="10" r="1.5" fill="currentColor"></circle>
                            <circle cx="12" cy="10" r="1.5" fill="currentColor"></circle>
                            <circle cx="16" cy="10" r="1.5" fill="currentColor"></circle>
                        </svg>
                    }
                    title="Chat with Us"
                    description="Get immediate answers on your device"
                    linkText="start message"
                />

                {/* Card 3 */}
                <ContactInfoCard
                    icon={
                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    }
                    title="Shoot us an Email"
                    description="Skip the form and drop a quick email."
                    linkText="send email"
                />

                {/* Card 4 */}
                <ContactInfoCard
                    icon={
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                    }
                    title="Shoot us an Email"
                    description="Skip the form and drop a quick email."
                    linkText="(+91) 99090 07231"
                />

            </div>
        </div>
    );
};

export default ContactsPage2;