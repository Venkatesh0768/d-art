"use client";
import React, { useState, useRef, useEffect } from 'react';

const SelectDropdown = ({ label, options }: { label: string, options: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative mt-12">
            {/* Trigger Base */}
            <div
                className={`relative border-b pb-4 group cursor-pointer flex justify-between items-center transition-colors duration-300 ${isOpen ? 'border-[#f40]' : 'border-[#333336]/30 hover:border-[#333336]/60'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`font-['Articulat_CF:Medium',sans-serif] text-[20px] lg:text-[22px] tracking-[-0.02em] transition-colors duration-300 ${isOpen ? 'text-[#f40]' : 'text-[#333336]'}`}>
                    {selected || label}
                </span>
                <svg width="15" height="9" viewBox="0 0 15 9" fill="none" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <path d="M1.5 1.5L7.5 7.5L13.5 1.5" stroke="#FF4400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Dropdown Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 mt-0 bg-white border border-[#d9d9d9] rounded-b-[4px] shadow-lg z-50 overflow-hidden">
                    {/* Header Item Matches Image (Gray bg, white text for the label itself to act as 'reset/none') */}
                    <div
                        className="px-6 py-4 bg-[#c0c0c0] cursor-pointer hover:bg-[#a0a0a0] transition-colors"
                        onClick={() => { setSelected(null); setIsOpen(false); }}
                    >
                        <span className="font-['Articulat_CF:Regular',sans-serif] text-[18px] lg:text-[20px] text-white">
                            {label}
                        </span>
                    </div>

                    {/* Options */}
                    <div className="flex flex-col py-2">
                        {options.map((option, idx) => (
                            <div
                                key={idx}
                                className="px-6 py-3 cursor-pointer hover:bg-[#f6f6f6] transition-colors"
                                onClick={() => { setSelected(option); setIsOpen(false); }}
                            >
                                <span className="font-['Articulat_CF:Regular',sans-serif] text-[18px] lg:text-[20px] text-[#333336]">
                                    {option}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

const InputField = ({ label }: { label: string }) => (
    <div className="relative border-b border-[#333336]/30 pb-4 mt-12">
        <input
            type="text"
            placeholder={label}
            className="w-full bg-transparent outline-none font-['Articulat_CF:Medium',sans-serif] text-[20px] lg:text-[22px] text-[#333336] placeholder:text-[#333336] tracking-[-0.02em]"
        />
    </div>
);

const ContactsPage1 = () => {
    return (
        <div className="w-full bg-white px-[5%] md:px-[2.6%] py-24 lg:py-40">
            {/* Header Section */}
            <div className="w-full flex flex-col items-center mb-32 lg:mb-48">
                <h1 className="font-['Articulat_CF:Bold',sans-serif] text-[100px] md:text-[140px] lg:text-[160px] tracking-[-0.04em] text-[#333336] leading-none mb-4">
                    Contact
                </h1>
                <p className="font-['Articulat_CF:Medium',sans-serif] text-[22px] md:text-[28px] lg:text-[32px] tracking-[-0.04em] text-[#333336]/70">
                    Questions, ideas, or just saying hi
                </p>
            </div>

            {/* Content Section */}
            <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                {/* Left Column */}
                <div className="lg:col-span-4 xl:col-span-3">
                    <h2 className="font-['Articulat_CF:Medium',sans-serif] text-[32px] lg:text-[40px] tracking-[-0.04em] text-[#333336] mb-8 lg:mb-10">
                        Let&apos;s work together
                    </h2>
                    <ul className="space-y-4 lg:space-y-5 list-none pl-0">
                        {[
                            "Quick response within 24 hours",
                            "Transparent communication",
                            "Real-time project tracking",
                            "Multiple languages supported",
                            "Available across time zones",
                            "Clear project updates"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <div className="w-[3px] h-[3px] rounded-full bg-[#333336]/70 mt-[14px] mr-4 shrink-0"></div>
                                <span className="font-['Articulat_CF:Medium',sans-serif] text-[18px] lg:text-[22px] text-[#333336]/70 tracking-[-0.02em] leading-[1.4]">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Middle Column */}
                <div className="lg:col-span-5 xl:col-span-6 lg:px-8 xl:px-16">
                    <h2 className="font-['Articulat_CF:Medium',sans-serif] text-[40px] lg:text-[54px] tracking-[-0.04em] leading-[1.1] text-[#333336] mb-4">
                        Tell us about your project
                    </h2>
                    <p className="font-['Articulat_CF:Regular',sans-serif] text-[18px] lg:text-[23px] text-[#333336]/70 tracking-[-0.02em] mb-12">
                        Just want to say hello? Skip to the name field below.
                    </p>

                    <div className="flex flex-col">
                        <SelectDropdown
                            label="Selected service"
                            options={[
                                "Graphic Designing",
                                "Digital Marketing",
                                "Packaging",
                                "Print Design"
                            ]}
                        />
                        <SelectDropdown
                            label="What is your budget?"
                            options={[
                                "INR 10K - INR 20K",
                                "INR 20K - INR 50K",
                                "INR 50K+"
                            ]}
                        />

                        <InputField label="Your name" />
                        <InputField label="Your email" />
                        <InputField label="Your message" />
                    </div>

                    <div className="mt-12">
                        <button className="relative inline-block pb-2 group">
                            <span className="font-['Articulat_CF:Medium',sans-serif] text-[24px] lg:text-[28px] text-[#333336]/70 transition-colors group-hover:text-[#333336]">
                                Submit
                            </span>
                            <div className="absolute left-[2px] bottom-1 w-[15px] h-[2px] bg-[#f40] transition-all duration-300 group-hover:w-full"></div>
                        </button>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-3 xl:col-span-3 mt-8 lg:mt-0">
                    <p className="font-['Articulat_CF:Medium',sans-serif] text-[18px] lg:text-[22px] text-[#333336]/70 tracking-[-0.02em] leading-[1.5]">
                        Whether you have a specific project in mind or just want to explore possibilities, we're here to help turn your vision into reality.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ContactsPage1;