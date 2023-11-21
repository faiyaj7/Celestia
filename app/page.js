import CustomerOpinion from "@/components/CustomerOpinion";
import Explore from "@/components/Explore";
import Faq from "@/components/Faq";
import FooterBanner from "@/components/FooterBanner";
import HeroBanner from "@/components/HeroBanner";
import { SecondHeroBanner } from "@/components/SecondHeroBanner";
import ThirdHeroBanner from "@/components/ThirdHeroBanner";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <SecondHeroBanner />
      <ThirdHeroBanner />
      <CustomerOpinion />
      <Explore />
      <Faq />
      <FooterBanner />
    </>
  );
}
