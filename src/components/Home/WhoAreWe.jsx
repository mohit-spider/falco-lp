
import Image from 'next/image'
import cil_industry from '../../../public/assets/images/cil_industry.svg'
import teenyicons_globe_africa_outline from '../../../public/assets/images/teenyicons_globe_africa_outline.svg'


export const WhoAreWe = () => {

    const cardSection = [
        {
            icon:cil_industry,
            title:'Regional Expansion',
            desc:'Launching new subsidiaries in additional strategic MENA countries to localize technology deployment.'
        },
        {
            icon:teenyicons_globe_africa_outline,
            title:'AI-Driven Data Centers',
            desc:'Intelligent automation, monitoring, and scalable infrastructure optimized for AI workloads and data sovereignty.'
        }
    ]
    return (

    <>
      <div className=" bg-[#263850] min-h-[830px] h-auto pt-[85px] md:px-[100px] px-6 pb-[133px]">
        <div className="  w-full ">
          <h3 className="font-roboto font-bold text-[40px] leading-[1.1] text-white">
            Who We Are
          </h3>
          <p className="font-roboto font-normal mt-[37px] text-white text-[20px]">
            Falco Group Holding LTD is a diversified UAE-based holding company focused on technology innovation and strategic investments in <br/> advanced networking, software-defined infrastructure, and AI-driven data center solutions.
          </p>
          <p className="font-roboto font-normal mt-[19px] text-white text-[20px]">
            Through its subsidiaries—Neox FZCO, Evollabs Tech FZ-LLC, and FalcoWH—the Group develops and deploys next-generation networking and digital infrastructure technologies to accelerate industrial and digital transformation across MENA.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  gap-[49px] mt-[69px] ">
            {cardSection.map((item,index)=>{
                return(
                    <div key={index} className="w-full md:min-h-[388px]  pl-[35px] pr-[73px] pt-[32px] pb-[40px] md:pt-[69px] bg-[#0B0B0B] rounded-[10px] ">
                        <Image
                            src={item.icon}
                            alt="icon"
                            width={32}
                            height={32}
                            className="w-[32px] h-[32px]"
                        />
                        <h3 className="font-roboto font-medium mt-[16px] md:mt-[22px] text-[18px] md:text-[32px] leading-[1.1] text-white">
                            {item.title}
                        </h3>
                        <p className="font-roboto font-normal mt-[16px] md:mt-[32px] text-white text-[18px] md:text-[24px]">
                            {item.desc}
                        </p>
                    </div>
                )
            })}
        </div>
    
      </div>
    </>
    )
}