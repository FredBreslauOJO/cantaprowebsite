"use client";
import { Users, Star } from "lucide-react";

export default function Reviews() {
  // Renderiza 4 estrelas cheias e 1 estrela cortada com preenchimento exato de 82%
  const renderEstrelas = () => {
    return (
      <div className="flex gap-1 justify-center">
        {[...Array(4)].map((_, i) => (
          <Star key={i} size={36} fill="#FACC15" stroke="#000000" strokeWidth={3} className="shrink-0" />
        ))}
        {/* Estrela Parcialmente Preenchida (82%) usando máscara SVG nativa */}
        <div className="relative inline-block w-[36px] h-[36px] shrink-0">
          <Star size={36} fill="#E4E4E7" stroke="#000000" strokeWidth={3} className="absolute top-0 left-0" />
          <div className="absolute top-0 left-0 overflow-hidden w-[82%]">
            <Star size={36} fill="#FACC15" stroke="#000000" strokeWidth={3} className="max-w-none" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 px-6 bg-yellow-400 border-b-8 border-black text-black">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* BLOCO DA NOTA GIGANTE */}
        <div className="card-brutal bg-white p-8 rounded-2xl flex flex-col items-center justify-center text-center w-full lg:w-96 shrink-0 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <span className="text-7xl font-black tracking-tighter leading-none mb-2">4.82</span>
          {renderEstrelas()}
          <span className="font-black uppercase tracking-wider text-xs mt-4 text-gray-500 bg-gray-100 border-2 border-black px-3 py-1 rounded-full">
            Avaliação de Usuários
          </span>
        </div>

        {/* TEXTO DE IMPACTO DA COMUNIDADE */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-black text-white border-4 border-black font-black text-xs uppercase tracking-widest px-4 py-1.5 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <Users size={16} className="text-yellow-400" /> Comunidade Ativa
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-black">
            Mais de 3.000 Músicos <br />Já Deixaram o Papel Para Trás.
          </h2>
          
          <p className="text-lg md:text-xl font-bold text-black/80 max-w-2xl leading-relaxed">
            De vocalistas de barzinho a grandes produções corporativas. O CANTA.PRO é o padrão de palco para quem cansou de carregar pastas pesadas, esquecer arranjos de última hora ou errar a letra sob os holofotes.
          </p>
        </div>

      </div>
    </section>
  );
}