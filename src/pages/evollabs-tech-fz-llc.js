import Image from 'next/image';
import Link from 'next/link';
import evolLabsLogo from '../../public/assets/images/EVOLABS_LOGO.png'
import title from '../../public/assets/images/evollabs-fz-title.png'

import leafSpineFabric from '../../public/assets/images/leaf-spine-fabric.png'

import sPAggregation from '../../public/assets/images/sp-aggregation.png'
import dataCenterNetwork from '../../public/assets/images/data-centre-network.png'
import cardDeswork from '../../public/assets/images/cardDes.png'
import fiveGMobileBackhaul from '../../public/assets/images/five-g-mobile-backhaul.png'

export default function Neox() {

    const cardSection = [
        {
            title: 'AI Data Centre Networking',
            desc: 'Lossless Ethernet for GPU clusters on validated NeoX switches. Delivers production-ready RoCEv2, PFC, ECN, and DCQCN for guaranteed packet delivery.',
            img: dataCenterNetwork
        },
        {
            title: 'Data Centre Leaf-Spine Fabric',
            desc: 'Linux-native leaf-spine switching that unifies operations, letting teams manage network fabric with their existing Linux tools and Ansible playbooks.',
            img: leafSpineFabric
        },
        {
            title: '5G Mobile Backhaul',
            desc: 'Open NeoX routers deliver carrier-grade MPLS, precision timing (1588v2/SyncE), SR-MPLS, and sub-second failover for 5G cell sites',
            img: fiveGMobileBackhaul
        },
        {
            title: 'Service Provider Aggregation',
            desc: 'Carrier-grade 2.4T whitebox hardware for metro aggregation and provider edge routing, featuring the full IP/MPLS stack and multi-service EVPN, L2VPN, L3VPN, and VPLS capabilities on one platform.',
            img: sPAggregation
        },
    ]
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
                            src={evolLabsLogo}
                            alt="neox"
                            className='w-[135px] h-[53.76px] md:w-[162px] md:h-[64.513px] object-fill'
                            width={600}
                            height={600}
                        />

                        <Image
                            src={title}
                            alt="future"
                            className='lg:hidden mt-[20px] w-[362px] h-[226px] md:w-[477px] md:h-[289px] rounded-[9px] object-cover'
                        />

                        <div className='md:w-[520px] md:h-auto lg:w-[477px] lg:h-auto mt-[14px] lg:mt-[92px]'>
                            <p className='font-inter font-semibold text-[32px] md:text-[48px] text-[#3C3C3C] leading-[1.1] lg:leading-none '>Turning ideas into digital experiences </p>
                        </div>
                        <div className='w-[357px] h-auto md:w-[420px] md:h-auto mt-[12px] md:mt-[30px]'>
                            <p className='font-inter font-medium md:font-semibold text-[16px]  text-[#666565] md:text-[#4A4A4A]'>Evollabs Tech is a next-generation technology company focused on creating powerful AI chips, smart networking platforms, and intelligent automation solutions for the future.</p>
                        </div>
                        <div className='mt-[30px] md:mt-[55px] '>
                            <a href="https://www.evollabs.tech" target="_blank" rel="noopener noreferrer" className='bg-[#1578DB] text-white rounded-[4px] w-[158px] h-[46px] flex items-center justify-center'>Visit Website</a>
                        </div>
                    </div>

                    <div className='relative subsidiaries-img-block md:mt-[121px] z-10'>
                        <Image
                            src={title}
                            alt="future"
                            className='lg:block hidden lg:w-[608px] lg:h-[369px] rounded-[16px] object-cover'
                        />
                    </div>
                    <div>

                    </div>

                </div>

            </section>

            <section className='mt-[38px] md:mt-[72px] mb-[30px] md:mb-[52px]'>
                <div className='subsidiaries-cards relative flex flex-col lg:flex lg:flex-row lg:flex-wrap lg:justify-evenly gap-5 lg:items-center max-w-full max-h-full'>
                    <div>
                        <p className='font-inter font-semibold text-[24px] text-[#3C3C3C] lg:text-white leading-none'>Solutions</p>
                    </div>
                    <div className='md:flex md:flex-wrap  gap-5'>
                        {cardSection.map((item, index) => (
                            <div key={index} className='md:flex bg-[#F2F2F2] md:flex-col  md:max-w-[275px] min-h-[340px] shadow-lg '>
                                <Image
                                    src={item.img}
                                    alt="cardDes"
                                    className='w-[360px] h-[168px] md:w-[275px] md:h-[166px] rounded-t-lg object-cover'
                                />
                                <div className='px-[20px] pt-[11px] pb-[25px]'>
                                    <p className='font-inter font-medium text-[16px] text-[#5B5B5B] leading-none'>{item.title}</p>
                                    <p className='font-inter font-medium text-[15px] text-[#767474] mt-[12px] leading-none'>{item.desc}</p>
                                </div>
                            </div>
                        ))}

                    </div>


                </div>
            </section>

            <section className='max-h-[155px]'>
                <hr className="border-t border-gray-300 my-6" />
                <div className='px-[40px] md:px-[100px] pb-[31px]'>
                    <div className='md:flex md:justify-between items-center gap-y-1'>
                        <p className='font-inter font-medium text-[#878787] text-[15px] text-center'>Building 5, office G18, Dubai Internet City, UAE
                        </p>
                        <p className='font-inter font-medium text-[#878787] text-[15px] text-center'><a href='mailto:info@evolabs.tech'>info@evollabs.tech</a></p>
                        <p className='font-inter font-medium text-[#878787] text-[15px] text-center mt-4 md:mt-0'><a href="tel:+97145299011">TEL: +971-4-529 9011</a></p>
                    </div>
                </div>
            </section>

        </div>
    );
}