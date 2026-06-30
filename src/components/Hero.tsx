"use client";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-24 overflow-hidden border-b-8 border-black bg-black">
      
      {/* BACKGROUND DE VÍDEO SILENCIOSO */}
      <div className="absolute inset-0 w-full h-full z-0 bg-black">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full opacity-40"
        >
          <source src="/loginVid.webm" type="video/webm" />
          Seu navegador não suporta vídeos em HTML5.
        </video>
      </div>

      {/* SELO BRUTALISTA DE NOTA (CANTO SUPERIOR DIREITO FLUTUANTE) */}
      <div className="absolute top-28 right-6 md:right-12 z-20 bg-yellow-400 border-4 border-black text-black font-black px-4 py-3 shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] rounded-2xl transform rotate-6 hover:rotate-0 transition-transform cursor-pointer flex flex-col items-center gap-0.5 select-none animate-bounce duration-1000">
        <span className="text-xs uppercase tracking-widest font-black text-black/60">Nota Geral</span>
        <div className="flex items-center gap-1.5">
          <span className="text-2xl font-black tracking-tight leading-none">4.82</span>
          <div className="flex text-black">
            <Star size={16} fill="currentColor" strokeWidth={2.5} />
            <Star size={16} fill="currentColor" strokeWidth={2.5} />
            <Star size={16} fill="currentColor" strokeWidth={2.5} />
            <Star size={16} fill="currentColor" strokeWidth={2.5} />
            <Star size={16} fill="currentColor" strokeWidth={1} className="opacity-80" />
          </div>
        </div>
      </div>

      {/* CONTEÚDO DO TEXTO BRUTALISTA */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-12">
        <div className="inline-block bg-yellow-400 text-black border-4 border-black font-black text-xs md:text-sm uppercase tracking-widest px-6 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Chega de dar branco no palco
        </div>
        
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
          O Fim da Dúvida <br />
          <span className="text-yellow-400">Na Hora de Cantar.</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-12 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,1)] leading-relaxed">
          Baixe letras, organize seu setlist e sincronize a banda inteira. O teleprompter inteligente que rola no tempo exato da sua performance. A mágica simplesmente acontece.
        </p>
        
        {/* BOTÕES ADAPTÁVEIS COM LINKS DIRETOS PARA O APP */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
          <a 
            href="https://app.canta.pro" 
            className="btn-brutal text-lg w-full sm:w-auto text-center rounded-xl"
          >
            Testar de Graça (Abrir App)
          </a>
          <a 
            href="#features" 
            className="btn-brutal-outline text-lg w-full sm:w-auto text-center rounded-xl"
          >
            Ver Recursos
          </a>
        </div>
      </div>
    </section>
  );
}