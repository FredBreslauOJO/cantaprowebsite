import Hero from "@/components/Hero";
import WebAppTech from "@/components/WebAppTech"; // O nosso novo componente entra aqui!
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import AllFeatures from "@/components/AllFeatures";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <WebAppTech /> 
      <Features />
      <Reviews />
      <AllFeatures /> 
      <Pricing />
      <Faq />
      <Partners />
    </div>
  );
}