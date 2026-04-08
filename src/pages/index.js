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
    <WhoAreWe/>
    <SupportingCompanies/>
    <WhyPartnerWith/>
    <Footer/>
    </>
  );
}
