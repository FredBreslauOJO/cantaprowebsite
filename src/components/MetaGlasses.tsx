"use client";
import { Eye, CalendarClock, Zap } from "lucide-react";

export default function MetaGlasses() {
  return (
    // SEÇÃO ALTA (150vh) PARA CRIAR O EFEITO DE PARALLAX STICKY NA ROLAGEM
    <section className="relative bg-black border-b-8 border-black h-[150vh]">
      
      {/* ESTILOS DE ANIMAÇÃO EMBUTIDOS */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollPrompter {
          0% { transform: translateY(180px); }
          100% { transform: translateY(-180px); }
        }
        .animate-prompter {
          animation: scrollPrompter 6s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />

      {/* CONTAINER FIXO (TRAVA NA TELA DURANTE O SCROLL) */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12">
        
        {/* TEXTOS DE IMPACTO - ANIMADOS NA ENTRADA */}
        <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center animate-in fade-in slide-in-from-bottom-10 duration-1000">
          
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black text-xs md:text-sm uppercase tracking-widest px-6 py-2 border-2 border-yellow-400 rounded-full mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <Eye size={18} /> A Experiência Definitiva
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6">
            Não use as mãos. <br />
            <span className="text-yellow-400">Use os olhos.</span>
          </h2>
          
          <p className="text-lg md:text-2xl font-bold text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Estamos preparando a integração nativa com os <strong className="text-white">Ray-Ban Meta Smart Glasses</strong>. Cante e leia da forma mais natural possível. Apresente conteúdos sem pôr a mão em absolutamente nada.
          </p>

          <div className="inline-flex items-center gap-3 bg-zinc-900 border-4 border-zinc-700 text-white font-black text-sm uppercase tracking-widest px-6 py-3 rounded-2xl">
            <CalendarClock size={20} className="text-yellow-400" />
            Lançamento: Dezembro de 2026
          </div>
        </div>

        {/* ÓCULOS GIGANTES COM PARALLAX E FLUTUAÇÃO */}
        <div className="relative z-10 w-full max-w-5xl mt-[-50px] md:mt-[-80px] animate-float pointer-events-none">
          
          {/* Brilho neon de fundo */}
          <div className="absolute inset-0 bg-cyan-400 blur-[120px] opacity-20 rounded-full scale-75 z-0"></div>

          {/* SVG BRUTALISTA DOS ÓCULOS META */}
          <svg 
            viewBox="0 0 800 450" 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative z-10"
          >
            <defs>
              {/* Máscara de corte exata para as lentes (para o texto não vazar da lente) */}
              <clipPath id="lensClipLeft">
                <rect x="150" y="140" width="200" height="140" rx="24" />
              </clipPath>
              <clipPath id="lensClipRight">
                <rect x="450" y="140" width="200" height="140" rx="24" />
              </clipPath>
            </defs>

            {/* Sombra Deslocada 3D */}
            <g transform="translate(20, 30)" fill="#18181b">
              <path d="M 130 180 L 30 120 L 50 160 L 130 220 Z" />
              <path d="M 670 180 L 770 120 L 750 160 L 670 220 Z" />
              <rect x="130" y="120" width="240" height="180" rx="40" />
              <rect x="430" y="120" width="240" height="180" rx="40" />
              <path d="M 370 170 Q 400 140 430 170" stroke="#18181b" strokeWidth="24" fill="none" />
            </g>

            {/* ESTRUTURA DOS ÓCULOS */}
            <g stroke="#000" strokeWidth="12" strokeLinejoin="round">
              
              {/* Haste Esquerda */}
              <path d="M 150 160 L 40 100 L 60 140 L 150 200 Z" fill="#FACC15" />
              <line x1="80" y1="130" x2="120" y2="155" stroke="#000" strokeWidth="8" />

              {/* Haste Direita */}
              <path d="M 650 160 L 760 100 L 740 140 L 650 200 Z" fill="#FACC15" />
              <line x1="720" y1="130" x2="680" y2="155" stroke="#000" strokeWidth="8" />

              {/* Ponte (Nariz) */}
              <path d="M 360 170 Q 400 130 440 170" stroke="#000" strokeWidth="28" fill="none" />

              {/* Moldura Lente Esquerda */}
              <rect x="130" y="120" width="240" height="180" rx="40" fill="#fff" />
              
              {/* VIDRO LENTE ESQUERDA (Com teleprompter) */}
              <g clipPath="url(#lensClipLeft)">
                <rect x="150" y="140" width="200" height="140" fill="#22d3ee" /> {/* Fundo Ciano */}
                {/* Linhas animadas */}
                <g className="animate-prompter" strokeLinecap="round" opacity="0.8">
                  {/* Bloco 1 */}
                  <line x1="170" y1="160" x2="220" y2="160" stroke="#FACC15" strokeWidth="8" />
                  <line x1="230" y1="160" x2="270" y2="160" stroke="#FACC15" strokeWidth="8" />
                  <line x1="170" y1="180" x2="310" y2="180" stroke="#fff" strokeWidth="8" />
                  <line x1="170" y1="200" x2="280" y2="200" stroke="#fff" strokeWidth="8" />
                  {/* Bloco 2 */}
                  <line x1="170" y1="240" x2="200" y2="240" stroke="#FACC15" strokeWidth="8" />
                  <line x1="170" y1="260" x2="320" y2="260" stroke="#fff" strokeWidth="8" />
                  <line x1="170" y1="280" x2="260" y2="280" stroke="#fff" strokeWidth="8" />
                  {/* Bloco 3 */}
                  <line x1="170" y1="320" x2="240" y2="320" stroke="#FACC15" strokeWidth="8" />
                  <line x1="170" y1="340" x2="300" y2="340" stroke="#fff" strokeWidth="8" />
                </g>
              </g>

              {/* Câmera Esquerda */}
              <circle cx="180" cy="170" r="14" fill="#000" />
              <circle cx="180" cy="170" r="4" fill="#fff" stroke="none" />

              {/* Moldura Lente Direita */}
              <rect x="430" y="120" width="240" height="180" rx="40" fill="#fff" />
              
              {/* VIDRO LENTE DIREITA (Com teleprompter) */}
              <g clipPath="url(#lensClipRight)">
                <rect x="450" y="140" width="200" height="140" fill="#22d3ee" /> {/* Fundo Ciano */}
                {/* Linhas animadas */}
                <g className="animate-prompter" strokeLinecap="round" opacity="0.8">
                  {/* Bloco 1 */}
                  <line x1="470" y1="160" x2="520" y2="160" stroke="#FACC15" strokeWidth="8" />
                  <line x1="530" y1="160" x2="570" y2="160" stroke="#FACC15" strokeWidth="8" />
                  <line x1="470" y1="180" x2="610" y2="180" stroke="#fff" strokeWidth="8" />
                  <line x1="470" y1="200" x2="580" y2="200" stroke="#fff" strokeWidth="8" />
                  {/* Bloco 2 */}
                  <line x1="470" y1="240" x2="500" y2="240" stroke="#FACC15" strokeWidth="8" />
                  <line x1="470" y1="260" x2="620" y2="260" stroke="#fff" strokeWidth="8" />
                  <line x1="470" y1="280" x2="560" y2="280" stroke="#fff" strokeWidth="8" />
                  {/* Bloco 3 */}
                  <line x1="470" y1="320" x2="540" y2="320" stroke="#FACC15" strokeWidth="8" />
                  <line x1="470" y1="340" x2="600" y2="340" stroke="#fff" strokeWidth="8" />
                </g>
              </g>

              {/* Câmera Direita */}
              <circle cx="620" cy="170" r="14" fill="#000" />
              <circle cx="620" cy="170" r="4" fill="#fff" stroke="none" />

              {/* Reflexo de Vidro Estático (Por cima da animação) */}
              <path d="M 150 200 L 250 140 L 290 140 L 150 230 Z" fill="#fff" stroke="none" opacity="0.3" />
              <path d="M 450 200 L 550 140 L 590 140 L 450 230 Z" fill="#fff" stroke="none" opacity="0.3" />
            </g>
          </svg>
        </div>

      </div>
    </section>
  );
}