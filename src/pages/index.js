import { Header } from "@/components/Layout/Header";
import { Banner } from "@/components/Home/Banner";
import { WhoAreWe } from "@/components/Home/WhoAreWe";
import { SupportingCompanies } from "@/components/Home/SupportingCompanies";
import { WhyPartnerWith } from "@/components/Home/WhyPartnerWith";
import { Footer } from "@/components/Layout/Footer";


export default function Home() {
  return (
    <>
    <Header/>
    <Banner/>

    <div className="relative">
      <div className="absolute z-10 hidden lg:block lg:w-[1.5px] lg:h-[567px] bg-white/30 top-[33.5%] bottom-[10%] lg:right-[50px]"></div>
      <div className="absolute z-15 hidden lg:block bg-[#E4E3E3] lg:w-[34px] lg:h-[5px] top-[35.1%] bottom-[10%] lg:right-[33px]"></div>   
      <div className="absolute z-15 hidden lg:block bg-[#E4E3E3] lg:h-[34px] lg:w-[5px] top-[34.5%] bottom-[10%] lg:right-[48px]"></div>   
      <WhoAreWe/>
      <div className="absolute z-10 hidden lg:block lg:w-[1.5px] lg:h-[567px] bg-white/30 top-[64%] bottom-[10%] lg:left-[50px]"></div>
      <div className="absolute z-15 hidden lg:block bg-[#E4E3E3] lg:w-[34px] lg:h-[5px] top-[65.52%] bottom-[10%] lg:left-[34px]"></div>   
      <div className="absolute z-15 hidden lg:block bg-[#E4E3E3] lg:h-[34px] lg:w-[5px] top-[64.3%] bottom-[10%] lg:left-[48.4px]"></div> 
      <SupportingCompanies/>
    <WhyPartnerWith/>
    </div>
    <Footer/>
    </>
  );
}
