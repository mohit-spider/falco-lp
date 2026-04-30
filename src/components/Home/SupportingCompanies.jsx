import Image from "next/image"
import router from '../../../public/assets/images/router.svg'
import chip from '../../../public/assets/images/chip.svg'
import building from '../../../public/assets/images/building.svg'
import Link from "next/link"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const SupportingCompanies = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const cards = [
        {
            title: 'Neox FZCO',
            short_title: 'Advanced Networking Manufacturing',
            desc: `Designs and manufactures advanced networking equipment for telecom, enterprise, and data center environments.`,
            icon: router,
            link: '/neox'
        },
        {
            title: `Evollabs Tech`,
            short_title: 'Software-Defined Infrastructure',
            desc: `Develops integrated hardware and software capabilities that support scalable, software-defined infrastructure solutions.`,
            icon: chip,
            link: '/evollabs-tech-fz-llc'
        },
        {
            title: 'FalcoWH',
            short_title: 'AI-Driven Data Center Solutions',
            desc: 'Specialized JAFZA facility management supporting advanced manufacturing and tech expansions.',
            icon: building,
            link: '/falco-wh'
        },
        {
    title: `Evollabs Tech SA`,
    short_title: 'AI Infrastructure & Smart Systems',
    desc: `Focused on building regionally optimized AI infrastructure, smart networking systems, and automation solutions to accelerate digital transformation at scale.`,
    icon: chip,
    link: '/evollabs-tech-sa'
}
    ]

    return (
        <section
            id="supporting-companies"
            className="bg-[#1A2532] w-full py-14 md:py-20"
        >
            <div className="px-5 md:px-12 lg:px-[100px]">

                
                <h3 className="text-white font-roboto font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight">
                    A portfolio of Companies Supporting <br className="hidden md:block" />
                    Innovation Across{" "}
                    <span className="text-[#A1E0FF] block md:inline">
                        Digital Infrastructure, Intelligent Systems, and Manufacturing.
                    </span>
                </h3>

                
                <div className="mt-12 md:mt-16 w-full">
                    {isMounted && (
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={24}
                            slidesPerView={1}
                            navigation
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className="pb-14!"
                        >
                            {cards.map((item, index) => (
                                <SwiperSlide key={index} className="h-auto">
                                    <div className="h-full min-h-[320px] md:min-h-[350px] flex flex-col bg-[#0B0B0B] rounded-lg p-6 md:p-8 shadow-[0_0_5px_rgba(240,246,255,0.25)] relative">

                                        <div className="absolute top-6 right-6">
                                            <Image
                                                src={item.icon}
                                                alt={item.title}
                                                width={34}
                                                height={34}
                                                className="w-[34px] h-[34px]"
                                            />
                                        </div>

                                       
                                        <h3 className="font-roboto font-bold text-lg md:text-xl lg:text-2xl text-white leading-tight pr-10">
                                            {item.title}
                                        </h3>

                                      
                                        <p className="mt-4 text-white/90 font-roboto text-sm md:text-[15px] lg:text-[16px]">
                                            {item.short_title}
                                        </p>

                                       
                                        <p className="mt-3 text-white/80 font-roboto text-sm md:text-[15px] leading-relaxed flex-1">
                                            {item.desc}
                                        </p>

                                       
                                        <div className="mt-6">
                                            <Link
                                                href={item.link}
                                                className="block w-full text-center bg-[#1578DB] hover:bg-[#1578DB]/80 transition text-white text-sm md:text-[15px] py-2 rounded-md"
                                            >
                                                Know More
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </section>
    )
}