import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <Faq />
      <Partners />
    </div>
  );
}