"use client";
import { useState } from 'react';
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react';
import Falcologo2 from '../../../public/assets/images/Falcologo2.svg'
import linkedin from '../../../public/assets/images/linkedin.svg'

export const Footer = () => {
    const [openSection, setOpenSection] = useState('Menu'); // Default open section, or null to close all

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="p-[35px] w-full md:min-h-[400px] bg-[#161A24]">
            <div className='py-[25px] flex items   lg:flex-row flex-wrap justify-center lg:justify-around  gap-[40px] md:gap-[95px]'>

                <div className="flex flex-col items-center md:items-baseline text-center md:text-start ">
                    <Image
                        src={Falcologo2}
                        alt="logo"
                        className='w-[102px] h-[110px]'
                    />
                    <h2 className='font-inter my-[17px] font-bold text-[20px] text-white'>
                        Falco Group Holding LTD
                    </h2>
                    <p className='font-inter text-[14px] text-white'>
                        Building scalable ventures across<br />technology, infrastructure, and<br /> operations.
                    </p>

                </div>

                <div className='flex flex-col items-baseline justify-start w-full md:w-auto border-b border-gray-700 md:border-none pb-4 md:pb-0'>
                    <div 
                        className='flex justify-between w-full cursor-pointer md:cursor-default' 
                        onClick={() => toggleSection('Menu')}
                    >
                        <h3 className='font-inter text-white font-semibold text-[16px]'>
                            Menu
                        </h3>
                        <div className='md:hidden text-white'>
                            {openSection === 'Menu' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                    </div>
                    <ul className={`font-inter font-normal space-y-2 text-[14px] py-4 md:py-2 text-white leading-[30px] ${openSection === 'Menu' ? 'block' : 'hidden md:block'}`}>
                        <li>About Us</li>
                        <li>Subsidiaries</li>
                        <li>Partner With Us</li>
                    </ul>
                </div>

                <div className='flex flex-col items-baseline justify-start w-full md:w-auto border-b border-gray-700 md:border-none pb-4 md:pb-0'>
                    <div 
                        className='flex justify-between w-full cursor-pointer md:cursor-default' 
                        onClick={() => toggleSection('Legal')}
                    >
                        <h3 className='font-inter text-white font-semibold text-[16px]'>
                            Legal
                        </h3>
                        <div className='md:hidden text-white'>
                            {openSection === 'Legal' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                    </div>
                    <ul className={`font-inter font-normal space-y-2 text-[14px] py-4 md:py-2 text-white leading-[30px] ${openSection === 'Legal' ? 'block' : 'hidden md:block'}`}>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Copyright 2026 Falco Group Holding LTD</li>
                    </ul>
                </div>
                
                <div className='flex flex-col items-baseline justify-start w-full md:w-auto border-b border-gray-700 md:border-none pb-4 md:pb-0'>
                    <div 
                        className='flex justify-between w-full cursor-pointer md:cursor-default' 
                        onClick={() => toggleSection('Contact')}
                    >
                        <h3 className='font-inter text-white font-semibold text-[16px]'>
                            Contact Us
                        </h3>
                        <div className='md:hidden text-white'>
                            {openSection === 'Contact' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                    </div>
                    <ul className={`font-inter font-normal space-y-2 text-[14px] py-4 md:py-2 text-white leading-[30px] ${openSection === 'Contact' ? 'block' : 'hidden md:block'}`}>
                        <li>Addax Port Office Tower, Abu Dhabi</li>
                        <li>info@falcogroup.ae</li>
                        <li>Spiros Kotsomitis: +971 504850247D</li>
                    </ul>
                </div>

            </div>
            <div className='flex flex-col md:flex-row justify-between items-center px-0 md:px-[35px] mt-8 md:mt-0 gap-4 md:gap-0'>
                <div className='flex gap-2 items-center'>
                    <p className='font-inter font-light text-[14px] text-white'>
                        Follow Us on:
                    </p>
                    <Image
                        src={linkedin}
                        alt="linkedin"
                        className='w-[24px] h-[24px]'
                    />
                </div>
                <div className='text-white cursor-pointer' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Back to top
                </div>
            </div>

        </div>
    )
}
