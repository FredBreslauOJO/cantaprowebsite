import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Reviews from "@/components/Reviews"; // Importação da secção de avaliações
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. TOPO DA PÁGINA COM O SELO ADICIONADO */}
      <Hero />
      
      {/* 2. RECURSOS PRINCIPAIS DA BANDA */}
      <Features />
      
      {/* 3. SESSÃO EXTRA: VALIDAÇÃO SOCIAL E NOTA 4.82 */}
      <Reviews />
      
      {/* 4. TABELA RESPONSIVA E CARDS DE PLANOS */}
      <Pricing />
      
      {/* 5. DÚVIDAS E GERENCIADOR DINÂMICO */}
      <Faq />
    </div>
  );
}