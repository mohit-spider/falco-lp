"use client";
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import bannerImg1 from '../../../public/assets/images/bannerImg1.png'
import bannerImg2 from '../../../public/assets/images/bannerImg2.png'
import bannerImgMob3 from '../../../public/assets/images/bannerImgMob1.jpg'
import bannerImgMob2 from '../../../public/assets/images/bannerImgMob2.jpg'
import bannerImgMob1 from '../../../public/assets/images/bannerImgMob3.png'



export const Banner = () => {
    const banners = [
        { id: 1, img: bannerImg1 },
        { id: 2, img: bannerImg2 },
        { id: 3, img: bannerImg2 },
        { id: 4, img: bannerImg2 },
    ];

    const bannersMob = [
        { id: 1, img: bannerImgMob1 },
        { id: 2, img: bannerImgMob2 },
        { id: 3, img: bannerImgMob3 },
    ];

    const renderSwiper = (bannerData) => (
        <Swiper
            observer={true}
            observeParents={true}
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                    return `<span class="${className} custom-bullet"></span>`;
                },
            }}
            className="h-full w-full"
        >
            {bannerData.map((item, index) => (
                <SwiperSlide key={`${item.id}-${index}`} className="relative h-full w-full">
                    {/* Background Image */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src={item.img}
                            alt="banner"
                            fill
                            priority
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Overlay Content */}
                    <div className="relative inset-0 z-10 h-full flex items-center bg-black/10">
                        <div className="pl-[20px] lg:pl-[98px] md:pt-[150px] ">
                            <div className="max-w-full ">
                                <h1 className="font-inter font-semibold md:font-medium  text-[32px] flex text-start md:text-[50px] leading-[109%] md:leading-[1.1] text-white">
                                    Building Scalable Ventures Across
                                    Technology, Infrastructure, and Operations.
                                </h1>
                                <p className="mt-[32px] font-inter  text-[13px] md:text-[24px] font-normal md:font-medium text-white ">
                                    A UAE technology group building digital infrastructure across MENA.
                                </p>
                                <div className="flex items-center gap-[10px]  lg:justify-end-safe md:pr-[162px] mt-[56px] md:mt-[135px]">
                                    <button className="font-inter flex flex-row justify-center items-center gap-[13px] font-normal bg-[#1578DB] text-white text-[16px] min-w-[265px] md:min-w-[318px] min-h-[59px] py-[5px] rounded-[5px]">
                                       Explore Group Companies
                                    <ArrowRight size={20} /> 
                                    </button>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Desktop Banner */}
            <div className="hidden md:block h-full w-full">
                {renderSwiper(banners)}
            </div>

            {/* Mobile Banner */}
            <div className="block md:hidden h-full w-full">
                {renderSwiper(bannersMob)}
            </div>

            {/* Custom styles for right-side pagination */}
            <style jsx global>{`
                .swiper-pagination {
                    right: 60px !important;
                    left: auto !important;
                    top: 60% !important;
                    transform: translateY(-50%) !important;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    width: auto !important;

                }
                .custom-bullet {
                    width: 4px !important;
                    height: 4px !important;
                    background: white !important;
                    opacity: 0.5 !important;
                    border-radius: 50%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    margin: 0 !important;
                    
                }
                .swiper-pagination-bullet-active {
                    opacity: 1 !important;
                    background: #fff !important; /* Amber-400 for active state to match dots in image */
                    transform: scale(1.4);

                }
                /* Swiper Fade Effect fix for z-index */
                .swiper-slide-active {
                    z-index: 1;
                }

                /* Hide pagination on mobile */
                @media (max-width: 767px) {
                    .swiper-pagination {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    )
}