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
        <div id="supporting-companies" className="bg-[#1A2532] max-w-full min-h-[717px]">
            <div className="py-[45px] px-5 md:p-[100px] flex flex-col">
                <div>
                    <h3 className="support-companies ">
                        A portfolio of Companies Supporting<br />
                        Innovation Across<span> Digital Infrastructure,<br />
                            Intelligent Systems, and Manufacturing.</span>
                    </h3>
                </div>
                <div className="mt-[69px] w-full">
                    {isMounted && (
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            spaceBetween={49}
                            slidesPerView={1}
                            navigation={true}
                            style={{
                                "--swiper-navigation-color": "#1578DB",
                                "--swiper-navigation-size": "30px",
                            }}
                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="w-full !pb-12 !px-10 md:!px-12 lg:!px-14"
                        >
                            {cards.map((item, index) => {
                                return (
                                    <SwiperSlide key={index} className="!h-auto">
                                        <div className="flex flex-col w-full min-h-[420px] relative bg-[#0B0B0B] pt-[59px] px-[30px] rounded-[8px] pb-[45px] shadow-[0_0_5px_rgba(240,246,255,0.5)]">
                                            <Image
                                                src={item.icon}
                                                alt="icon"
                                                className="absolute top-12 right-12 w-[35px] h-[35px]"
                                            />
                                            <h3 className="font-roboto font-bold mt-[15px] text-[26px] leading-[1.1] text-white whitespace-pre-line ">
                                                {item.title}
                                            </h3>
                                            <p className="font-roboto font-normal mt-[20px] text-white text-[16px]">
                                                {item.short_title}
                                            </p>
                                            <p className="font-roboto font-normal mt-[10px] text-white text-[16px] whitespace-pre-line flex-1">
                                                {item.desc}
                                            </p>
                                            <div className="mt-auto flex items-center justify-between w-full pt-[22px]">
                                                <Link href={item.link} className="cursor-pointer font-roboto font-normal bg-[#1578DB] hover:bg-[#1578DB]/80 text-white text-[16px] w-full py-[5px] rounded-[5px] text-center">
                                                    Know More
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    )}
                </div>
            </div>
        </div>
    )
}