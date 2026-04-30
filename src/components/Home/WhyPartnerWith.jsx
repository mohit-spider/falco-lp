import list from '../../../public/assets/images/list.svg'
import wind from '../../../public/assets/images/wind.svg'
import map from '../../../public/assets/images/map.svg'
import cloud from '../../../public/assets/images/cloud.svg'
import Work from '../../../public/assets/images/Work.webp'
import Image from 'next/image'

export const WhyPartnerWith = () => {

    const cards = [
        {
            title: 'Regional Knowledge',
            icon: map
        },
        {
            title: 'Technical Depth',
            icon: wind
        },
        {
            title: 'Scalable Infrastructure',
            icon: cloud
        },
        {
            title: 'Operational Discipline',
            icon: list
        }
    ]
    return (

       <div className="bg-[#25364F] max-w-full min-h-fit py-12 md:py-16 lg:py-20">
            <div className="md:container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:px-[50px]">

                    {/* LEFT SECTION */}
                    <div className="px-6 md:px-12 lg:p-[100px]">

                        <h3 className="text-[#A1E0FF] font-roboto font-bold text-3xl md:text-4xl lg:text-[40px] leading-[1.1]">
                            Why Partner With{" "}
                            <span className="text-white font-extrabold block md:inline mt-2 md:mt-0">
                                Falco Group?
                            </span>
                        </h3>

                        {/* Mobile Image */}
                        <div className="lg:hidden mt-8">
                            <div className="relative w-full aspect-[710/471]">
                                <Image
                                    src={Work}
                                    alt="Work"
                                    fill
                                    className="object-cover rounded-[20px]"
                                    sizes="100vw"
                                />
                            </div>
                        </div>

                        
                        <div className="mt-6 lg:max-w-[456px]">
                            <p className="text-white font-roboto font-normal text-sm md:text-[15px] lg:text-[16px] leading-relaxed">
                                We combine regional expertise with global innovation to deliver
                                secure, scalable, and sustainable solutions. Our integrated
                                ecosystem ensures end-to-end efficiency for high-value assets.
                            </p>
                        </div>

                        {/* Cards */}
                        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:gap-8 mt-8">
                            {cards.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full min-h-[103px] py-4 bg-[#0B0B0B] flex flex-col items-center justify-center rounded-lg"
                                >
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={30}
                                        height={30}
                                        className="w-[30px] h-[30px]"
                                    />
                                    <h3 className="font-roboto mt-4 text-[14px] md:text-[15px] lg:text-[16px] text-white text-center">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DESKTOP IMAGE */}
                    <div className="hidden lg:block px-6 lg:px-0">
                        <div className="relative w-full max-w-[710px] aspect-[710/471] mx-auto">
                            <Image
                                src={Work}
                                alt="Work"
                                fill
                                className="object-cover rounded-[20px]"
                                sizes="710px"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}