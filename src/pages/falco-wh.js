import Image from 'next/image';
import Link from 'next/link';
import falcoWHLogo from '../../public/assets/images/falco-wh-logo.png'

import leafSpineFabric from '../../public/assets/images/leaf-spine-fabric.png'

import sPAggregation from '../../public/assets/images/sp-aggregation.png'
import dataCenterNetwork from '../../public/assets/images/data-centre-network.png'
import falcoTitleImage from '../../public/assets/images/falco-wh-title.png'
import fiveGMobileBackhaul from '../../public/assets/images/five-g-mobile-backhaul.png'

export default function Neox() {

    
  return (
        <div className="pt-[45px] max-w-full max-h-full px-[16px] lg:px-0">
            <div className="lg:pl-[100px] mb-[20px] md:mb-[30px]">
                <Link href="/#supporting-companies" className="inline-flex items-center text-black font-inter font-medium text-[16px] transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                    Back to subsidiaries
                </Link>
            </div>
            <section>
                <div className="grid lg:pl-[100px] lg:grid-cols-2 md:pr-[122px]">

                    <div>
                        <Image
                            src={falcoWHLogo}
                            alt="neox"
                            className='w-[135px] h-[16.206px] md:w-[162px] md:h-[19.447px] object-fill'
                            width={600}
                            height={600}
                        />

                        <Image
                            src={falcoTitleImage}
                            alt="future"
                            className='lg:hidden mt-[20px] w-[362px] h-[226px] md:w-[477px] md:h-[289px] rounded-[9px] object-cover'
                        />

                        <div className='md:w-[520px] md:h-auto lg:w-[477px] lg:h-auto mt-[14px] lg:mt-[92px]'>
                            <p className='font-inter font-semibold text-[32px] md:text-[48px] text-[#3C3C3C] leading-[1.1] lg:leading-none '>Integrated Infrastructure & Operational Excellence
</p>
                        </div>
                        <div className='w-[357px] h-auto md:w-[420px] md:h-auto mt-[12px] md:mt-[30px]'>
                            <p className='font-inter font-medium md:font-semibold text-[16px]  text-[#666565] md:text-[#4A4A4A]'>FalcoWH delivers end-to-end facility services, including preventive maintenance, fit-outs, infrastructure upgrades, and sustainability initiatives, ensuring efficient and reliable operations for high-value assets.

Backed by Falco Group Holding LTD, the company leverages shared IT, manufacturing, and infrastructure capabilities to provide scalable, cost-effective, and resilient solutions. This integrated approach supports current operations while enabling future expansions, including data centers and electronics manufacturing facilities.</p></div>
                        {/* <div className='mt-[30px] md:mt-[55px] '>
                            <button className='bg-[#1578DB] text-white rounded-[4px] w-[158px] h-[46px]'>Visit Website</button>
                        </div> */}
                    </div>

                    <div className='relative subsidiaries-img-block md:mt-[121px] z-10'>
                        <Image
                            src={falcoTitleImage}
                            alt="future"
                            className='lg:block hidden lg:w-[608px] lg:h-[369px] rounded-[16px] object-cover'
                        />
                    </div>
                    <div>

                    </div>

                </div>

            </section>

            {/* <section className='mt-[38px] md:mt-[72px] mb-[30px] md:mb-[52px] lg:px-[100px]'>
                <div className='max-w-[900px]'>
                    <h2 className='font-inter font-semibold text-[24px] md:text-[32px] text-[#3C3C3C] mb-[20px]'>
                        Integrated Infrastructure & Operational Excellence
                    </h2>
                    <div className='flex flex-col gap-[16px]'>
                        <p className='font-inter font-medium md:font-semibold text-[16px] text-[#666565] md:text-[#4A4A4A] leading-[1.6]'>
                            FalcoWH delivers end-to-end facility services, including preventive maintenance, fit-outs, infrastructure upgrades, and sustainability initiatives, ensuring efficient and reliable operations for high-value assets.
                        </p>
                        <p className='font-inter font-medium md:font-semibold text-[16px] text-[#666565] md:text-[#4A4A4A] leading-[1.6]'>
                            Backed by Falco Group Holding LTD, the company leverages shared IT, manufacturing, and infrastructure capabilities to provide scalable, cost-effective, and resilient solutions. This integrated approach supports current operations while enabling future expansions, including data centers and electronics manufacturing facilities.
                        </p>
                    </div>
                </div>
            </section> */}

            <section className='max-h-[155px]'>
                <hr className="border-t border-gray-300 my-6" />
                <div className='px-[40px] md:px-[100px] pb-[31px]'>
                    <div className='md:flex md:justify-between items-center gap-y-1'>
                        <p className='font-inter font-medium text-[#878787] text-[15px] text-center'>Property S60517, Jebel Ali Free Zone, Dubai, UAE</p>
                        <p className='font-inter font-medium text-[#878787] text-[15px] text-center'><a href="mailto:contact@falcowh">contact@falcowh.ae</a></p>
                        <p className='font-inter font-medium text-[#878787] text-[15px] text-center mt-4 md:mt-0'>TEL: <a href="tel:+97143495359">+971-4-349-5359</a></p>
                   
                    </div>
                </div>
            </section>

        </div>
    );
}