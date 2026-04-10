import Image from 'next/image';
import neox from '../../public/assets/images/neox.svg'
import future from '../../public/assets/images/future.png'

import corridor from '../../public/assets/images/corridor.jpg'
import worlddes from '../../public/assets/images/worlddes.png'
import cardDes from '../../public/assets/images/cardDes.png'
import boxItem from '../../public/assets/images/boxItem.jpg'

export default function Neox() {

  const cardSection = [
    {
      title: 'Carrier Network',
      desc: 'Enterprise-grade connectivity solutions for global infrastructure',
      img: cardDes
    },
    {
      title: 'Data Center Solutions',
      desc: 'Optimised hardware for high-density storage and computing',
      img: corridor
    },
    {
      title: 'Open Architecture',
      desc: 'Modular systems designed for flexibility and future-proofing ',
      img: boxItem
    },
    {
      title: 'VELOS Network OS',
      desc: 'Advanced operating system for intelligent network management.',
      img: worlddes
    },
  ]
  return (
    <div className="pt-[45px] max-w-full max-h-full px-[16px] lg:px-0">
      <section>
        <div className="grid lg:pl-[100px] lg:grid-cols-2 md:pr-[122px]">

          <div>
            <Image
              src={neox}
              alt="neox"
              className='w-[135px] h-[57px] md:w-[162px] md:h-[86px] object-cover'
            // width={100}
            // height={100}
            />

            <Image
              src={future}
              alt="future"
              className='lg:hidden w-[362px] h-[226px] md:w-[477px] md:h-[289px] rounded-[9px] object-cover'
            />

            <div className='md:w-[520px] md:h-[116px] lg:w-[477px] lg:h-[116px] mt-[14px] lg:mt-[92px]'>
              <p className='font-inter font-semibold text-[32px] md:text-[48px] text-[#3C3C3C] leading-[1.1] lg:leading-none '>Smart Networking,
                Driving the future</p>
            </div>
            <div className='w-[357px] h-[75px] md:w-[420px] md:h-[56px] mt-[12px] md:mt-[16px]'>
              <p className='font-inter font-medium md:font-semibold text-[16px]  text-[#666565] md:text-[#4A4A4A]'>Neox delivers innnovative networking equipment and solutions for the telecommunications and data center scetors across the MENA, GCC an APAC regions.</p>
            </div>
            <div className='mt-[30px] md:mt-[48px] '>
              <button className='bg-[#1578DB] text-white rounded-[4px] w-[158px] h-[46px]'>Visit Website</button>
            </div>
          </div>

          <div className='relative subsidiaries-img-block md:mt-[121px] z-10'>
            <Image
              src={future}
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
          {cardSection.map((item, index) => (
            <div key={index} className='md:flex bg-[#F2F2F2] lg:flex-col  md:max-w-[275px] min-h-[311px] shadow-lg '>
              <Image
                src={item.img}
                alt="cardDes"
                className='w-[360px] h-[168px] md:w-[275px] md:h-[166px] rounded-t-lg object-cover'
              />
              <div className='px-[20px] pt-[11px]'>
              <p className='font-inter font-medium text-[16px] text-[#5B5B5B] leading-none'>{item.title}</p>
              <p className='font-inter font-medium text-[15px] text-[#767474] mt-[12px] leading-none'>{item.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </section>

      <section className='max-h-[155px]'> 
        <hr className="border-t border-gray-300 my-6" />
        <div className='px-[40px] md:px-[100px] pb-[31px]'>
          <div className='md:flex md:justify-between items-center gap-y-1'>
            <p className='font-inter font-medium text-[#878787] text-[15px] text-center'>S 60517 Jebel Ali Free Zone, Dubai, United Arab Emirates</p>
            <p className='font-inter font-medium text-[#878787] text-[15px] text-center mt-4 md:mt-0'>TEL: +971-4-257-8498</p>
          </div>
        </div>
      </section>

    </div>
  );
}