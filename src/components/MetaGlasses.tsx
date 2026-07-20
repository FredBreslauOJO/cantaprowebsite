"use client";
import { Eye, CalendarClock } from "lucide-react";

export default function MetaGlasses() {
  return (
    // SEÇÃO ALTA (200vh) PARA CRIAR O EFEITO DE SCROLL PARALLAX 
    <section className="relative bg-black border-b-8 border-black h-[200vh]">
      
      {/* ESTILOS DE ANIMAÇÃO SEQUENCIAL (Óculos -> Texto -> Flutuação) */}
      <style dangerouslySetInnerHTML={{__html: `
        /* 1. Entrada dos Óculos (Sobem do chão) */
        @keyframes glassesReveal {
          0% { transform: translateY(120vh) scale(0.8); }
          100% { transform: translateY(0) scale(1); }
        }
        .animate-glasses-reveal {
          animation: glassesReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* 2. Flutuação contínua (Inicia após a entrada) */
        @keyframes floatContinuous {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        .animate-float-continuous {
          animation: floatContinuous 6s ease-in-out infinite;
        }

        /* 3. Revelação do Texto (Ocorre após os óculos entrarem) */
        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-text-reveal {
          opacity: 0;
          animation: textReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards;
        }

        /* 4. Animação realística do Teleprompter nas lentes */
        @keyframes scrollText {
          0% { transform: translateY(180px); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(-180px); opacity: 0; }
        }
        .prompter-block {
          animation: scrollText 5s linear infinite;
        }
        .delay-1 { animation-delay: 0s; }
        .delay-2 { animation-delay: 1.6s; }
        .delay-3 { animation-delay: 3.2s; }
      `}} />

      {/* CONTAINER FIXO - Respeita o top-24 do Header para não cortar o conteúdo */}
      <div className="sticky top-24 h-[calc(100vh-6rem)] w-full flex flex-col items-center justify-between overflow-hidden pt-8 md:pt-12">
        
        {/* TEXTOS DE IMPACTO - ANIMADOS COM ATRASO (Espera o óculos) */}
        <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center px-6 animate-text-reveal shrink-0">
          
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black text-xs md:text-sm uppercase tracking-widest px-6 py-2 border-2 border-yellow-400 rounded-full mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <Eye size={18} /> A Experiência Definitiva
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white mb-6">
            Não use as mãos. <br />
            <span className="text-yellow-400">Use os olhos.</span>
          </h2>
          
          <p className="text-base md:text-xl font-bold text-gray-400 leading-relaxed max-w-2xl mx-auto mb-6">
            A integração definitiva com <strong className="text-white">Ray-Ban Meta Smart Glasses</strong>. Cante e leia de forma natural. Apresente conteúdos sem pôr a mão em absolutamente nada.
          </p>

          <div className="inline-flex items-center gap-3 bg-zinc-900 border-4 border-zinc-700 text-white font-black text-xs md:text-sm uppercase tracking-widest px-6 py-3 rounded-2xl">
            <CalendarClock size={20} className="text-yellow-400" />
            Lançamento: Dezembro de 2026
          </div>
        </div>

        {/* ÓCULOS GIGANTES - ENTRADA DRAMÁTICA E FLUTUAÇÃO */}
        <div className="w-full max-w-4xl md:max-w-5xl mt-auto relative z-10 flex justify-center animate-glasses-reveal pointer-events-none mb-[-5%] md:mb-[-10%]">
          
          {/* Caixa que flutua após a entrada */}
          <div className="w-full animate-float-continuous relative">
            
            {/* Brilho neon de fundo */}
            <div className="absolute inset-0 bg-cyan-400 blur-[100px] opacity-20 rounded-full scale-75 z-0"></div>

            {/* SVG BRUTALISTA DOS ÓCULOS META */}
            <svg 
              viewBox="0 0 800 450" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] relative z-10"
            >
              <defs>
                <clipPath id="lensClipLeft">
                  <rect x="150" y="140" width="200" height="140" rx="24" />
                </clipPath>
                <clipPath id="lensClipRight">
                  <rect x="450" y="140" width="200" height="140" rx="24" />
                </clipPath>
              </defs>

              {/* Sombra 3D Deslocada (Neo-Brutalismo) */}
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
                  <rect x="150" y="140" width="200" height="140" fill="#22d3ee" /> {/* Ciano */}
                  
                  {/* Bloco 1 */}
                  <g className="prompter-block delay-1" strokeLinecap="round">
                    <line x1="170" y1="180" x2="220" y2="180" stroke="#FACC15" strokeWidth="10" />
                    <line x1="170" y1="205" x2="310" y2="205" stroke="#fff" strokeWidth="10" />
                  </g>
                  {/* Bloco 2 */}
                  <g className="prompter-block delay-2" strokeLinecap="round">
                    <line x1="170" y1="180" x2="250" y2="180" stroke="#FACC15" strokeWidth="10" />
                    <line x1="170" y1="205" x2="290" y2="205" stroke="#fff" strokeWidth="10" />
                  </g>
                  {/* Bloco 3 */}
                  <g className="prompter-block delay-3" strokeLinecap="round">
                    <line x1="170" y1="180" x2="200" y2="180" stroke="#FACC15" strokeWidth="10" />
                    <line x1="170" y1="205" x2="320" y2="205" stroke="#fff" strokeWidth="10" />
                  </g>
                </g>

                {/* Câmera Esquerda */}
                <circle cx="180" cy="170" r="14" fill="#000" />
                <circle cx="180" cy="170" r="4" fill="#fff" stroke="none" />

                {/* Moldura Lente Direita */}
                <rect x="430" y="120" width="240" height="180" rx="40" fill="#fff" />
                
                {/* VIDRO LENTE DIREITA (Com teleprompter) */}
                <g clipPath="url(#lensClipRight)">
                  <rect x="450" y="140" width="200" height="140" fill="#22d3ee" /> {/* Ciano */}
                  
                  {/* Bloco 1 */}
                  <g className="prompter-block delay-1" strokeLinecap="round">
                    <line x1="470" y1="180" x2="520" y2="180" stroke="#FACC15" strokeWidth="10" />
                    <line x1="470" y1="205" x2="610" y2="205" stroke="#fff" strokeWidth="10" />
                  </g>
                  {/* Bloco 2 */}
                  <g className="prompter-block delay-2" strokeLinecap="round">
                    <line x1="470" y1="180" x2="550" y2="180" stroke="#FACC15" strokeWidth="10" />
                    <line x1="470" y1="205" x2="590" y2="205" stroke="#fff" strokeWidth="10" />
                  </g>
                  {/* Bloco 3 */}
                  <g className="prompter-block delay-3" strokeLinecap="round">
                    <line x1="470" y1="180" x2="500" y2="180" stroke="#FACC15" strokeWidth="10" />
                    <line x1="470" y1="205" x2="620" y2="205" stroke="#fff" strokeWidth="10" />
                  </g>
                </g>

                {/* Câmera Direita */}
                <circle cx="620" cy="170" r="14" fill="#000" />
                <circle cx="620" cy="170" r="4" fill="#fff" stroke="none" />

                {/* Reflexo de Vidro Estático */}
                <path d="M 150 200 L 250 140 L 290 140 L 150 230 Z" fill="#fff" stroke="none" opacity="0.25" />
                <path d="M 450 200 L 550 140 L 590 140 L 450 230 Z" fill="#fff" stroke="none" opacity="0.25" />
              </g>
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}