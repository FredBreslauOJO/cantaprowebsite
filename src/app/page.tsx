import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </div>
  );
}