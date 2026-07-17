import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews";
import AllFeatures from "@/components/AllFeatures"; // A SUPER LISTA ENTRA AQUI!
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Partners from "@/components/Partners"; // PARCEIROS POR ÚLTIMO!

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      
      {/* Aqui aparecem as Cifras e a Importação Mágica */}
      <Features /> 
      
      <Reviews />
      
      {/* Aqui aparece a lista completa com as Coroas e Raios */}
      <AllFeatures /> 
      
      <Pricing />
      <Faq />
      
      {/* Chamada para parceiros colada no rodapé */}
      <Partners /> 
    </div>
  );
}