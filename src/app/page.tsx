import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import Partners from "@/components/Partners";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <Partners />
      <Faq />
    </div>
  );
}