import Image from "next/image"
import router from '../../../public/assets/images/router.svg'
import chip from '../../../public/assets/images/chip.svg'
import building from '../../../public/assets/images/building.svg'
import Link from "next/link"

export const SupportingCompanies = () => {

    const cards = [
        {
            title: 'Neox FZCO',
            short_title: 'Advanced Networking Manufacturing',
            desc: 'Designs and manufactures advanced networking equipment for telecom, enterprise, and data center environments.',
            icon: router,
            link: '/neox'
        },
        {
            title: 'Evollabs Tech',
            short_title: 'Software-Defined Infrastructure',
            desc: 'Develops integrated hardware and software capabilities that support scalable, software-defined infrastructure solutions.',
            icon: chip,
            link: '/neox'
        },
        {
            title: 'FalcoWH',
            short_title: 'AI-Driven Data Center Solutions',
            desc: 'Provides specialized infrastructure and operational support for the Group’s manufacturing and technology ecosystem.',
            icon: building,
            link: '/neox'
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
                <div className="flex flex-col lg:flex-row gap-[49px] mt-[69px] items-center">
                    {cards.map((item, index) => {
                        return (
                            <div key={index} className=" w-[480px] h-[360px] relative bg-[#0B0B0B] pt-[59px] px-[30px] max-w-[381px] md:min-h-[370px] rounded-[8px] md:pb-[45px] shadow-[0_0_5px_rgba(240,246,255,0.5)]">
                                <Image
                                    src={item.icon}
                                    alt="icon"
                                    className="absolute top-12  right-12  w-[35px] h-[35px]"
                                />
                                <h3 className="font-roboto font-bold mt-[22px] text-[26px] leading-[1.1] text-white">
                                    {item.title}
                                </h3>
                                <p className="font-roboto font-normal mt-[32px] text-white text-[16px]">
                                    {item.short_title}
                                </p>
                                <p className="font-roboto font-normal mt-[32px] text-white text-[16px]">
                                    {item.desc}
                                </p>
                                    <Link href={item.link}>
                                <div className="flex items-center justify-between w-full">
                                        <button className="cursor-pointer font-roboto font-normal bg-[#1578DB] hover:bg-[#1578DB]/80 mt-[32px] text-white text-[16px] w-full py-[5px] rounded-[5px]">
                                            Know More
                                        </button>

                                </div>
                                    </Link>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}