import list from '../../../public/assets/images/list.svg'
import wind from '../../../public/assets/images/wind.svg'
import map from '../../../public/assets/images/map.svg'
import cloud from '../../../public/assets/images/cloud.svg'
import Work from '../../../public/assets/images/Work.jpg'
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

        <div className="bg-[#25364F] max-w-full min-h-fit py-12 md:py-20">
            <div className='md:container'>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  ">
                    <div>
                        <div className="px-6 py-8 md:p-[100px] ">
                            <h3 className="text-[#A1E0FF] font-roboto font-bold text-3xl md:text-[40px] leading-[1.1]">
                                Why Partner With <span className="text-white font-extrabold text-4xl md:text-[48px] block mt-2 md:inline md:mt-0">Falco Group?</span>
                            </h3>

                            <div className="lg:hidden mt-8">
                                <div className="relative w-full h-[300px] max-w-[710px]">
                                    <Image
                                        src={Work}
                                        alt="Work Mobile"
                                        // fill
                                        className='object-cover rounded-[20px]'
                                    />
                                </div>
                            </div>
                            <div className='md:max-w-[456px]'>
                                <p className="text-white font-roboto font-normal md:text-[16px] mt-8 ">
                                    We combine regional expertise with global innovation to deliver
                                    secure, scalable,and sustainable solutions. Our integrated
                                    ecosystem ensures end-to-end efficiency for high-value assets.
                                </p>

                            </div>

                            <div className="grid grid-cols-2 gap-x-[8px] gap-y-[18px] md:gap-x-[32px] md:gap-y-[32px] mt-8">
                                {cards.map((item, index) => {
                                    return (
                                        <div key={index} className="w-full min-h-[103px] py-4 bg-[#0B0B0B] flex flex-col items-center justify-center rounded-lg">
                                            <Image
                                                src={item.icon}
                                                alt="icon"
                                                className=" w-[30px] h-[30px]"
                                            />
                                            <h3 className="font-roboto mt-[22px] text-[16px] text-white">
                                                {item.title}
                                            </h3>
                                        </div>
                                    )
                                })}
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Desktop view image */}
                    <div className='hidden lg:block mt-[100px] px-6 md:px-0'>
                        <div className="relative w-full h-[471px] max-w-[710px]">
                            <Image
                                src={Work}
                                alt="Work Desktop"
                                // fill
                                className='object-cover rounded-[20px]'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}