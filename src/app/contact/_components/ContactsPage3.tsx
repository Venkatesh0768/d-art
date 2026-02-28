"use client"
import React, { useState } from 'react';

const AccordionItem = ({
    question,
    answer,
    isOpen,
    onClick
}: {
    question: string;
    answer?: string;
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <div
            className={`w-full border-b border-[#333336]/20 last:border-b-0 flex flex-col cursor-pointer py-8 lg:py-10`}
            onClick={onClick}
        >
            <div className="flex justify-between items-start w-full gap-8">
                <h3 className={`font-['Articulat_CF:Medium',sans-serif] text-[20px] md:text-[24px] lg:text-[26px] leading-[1.4] text-[#333336] ${isOpen ? 'font-semibold' : 'font-normal'}`}>
                    {question}
                </h3>

                {/* Toggle Icon */}
                <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center mt-1">
                    {isOpen ? (
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="5" y1="5" x2="23" y2="23" stroke="#ff4400" strokeWidth="2.5" strokeLinecap="round"/>
                            <line x1="23" y1="5" x2="5" y2="23" stroke="#ff4400" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                    ) : (
                        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="5" x2="28" y2="5" stroke="#ff4400" strokeWidth="2.5" strokeLinecap="round"/>
                            <line x1="0" y1="15" x2="28" y2="15" stroke="#ff4400" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                    )}
                </div>
            </div>

            {/* Answer Area (Expandable) */}
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen && answer ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden">
                    <p className="font-['Articulat_CF:Regular',sans-serif] text-[17px] lg:text-[20px] leading-[1.65] text-[#333336]/60 max-w-[85%]">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const ContactsPage3 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How do you approach branding?",
            answer: "We start by listening. We dig into your market, your customers, your competition. Then we build something that cuts through the noise. Strategy first. Design second. Results always."
        },
        {
            question: "What makes your packaging different?",
            answer: "Our packaging design focuses on the perfect balance between aesthetic appeal and functional practicality. We consider materials, sustainability, unboxing experience, and retail presence to ensure your product stands out on any shelf."
        },
        {
            question: "How long does a project take?",
            answer: "It depends on scope. A brand identity might take eight to twelve weeks. Packaging design, similar timeline. We move fast, but never at the cost of quality. We deliver when it's ready."
        },
        {
            question: "Do you work with startups?",
            answer: "Yes. Some of our best work has been with founders who had a vision and the courage to back it. Budget matters, but ambition matters more. If you're building something interesting, we want to hear about it."
        },
        {
            question: "How do you approach branding?",
            answer: "We start by listening. We dig into your market, your customers, your competition. Then we build something that cuts through the noise. Strategy first. Design second. Results always."
        }
    ];

    return (
        <div className="w-full bg-white py-24 lg:py-40 px-[5%] md:px-[4%]" data-name="Contacts FAQ Page">
            <div className="w-full flex flex-col items-center">

                {/* Header Title */}
                <h2 className="font-['Articulat_CF:Demi_Bold',sans-serif] text-[48px] md:text-[64px] lg:text-[80px] leading-[1.1] text-[#333336] text-center tracking-[-0.03em] max-w-[800px] mb-20 lg:mb-28">
                    Popular questions answered before you reach out
                </h2>

                {/* Accordion List */}
                <div className="w-full border-t border-[#333336]/20">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => toggleAccordion(index)}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ContactsPage3;