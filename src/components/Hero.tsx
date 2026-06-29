"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 overflow-hidden border-b-8 border-black">
      
      {/* BACKGROUND DE VÍDEO */}
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

      {/* CONTEÚDO DO TEXTO BRUTALISTA */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-12">
        <div className="inline-block bg-yellow-400 text-black border-4 border-black font-black text-sm uppercase tracking-widest px-6 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Chega de dar branco no palco
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">
          O Fim da Dúvida <br />
          <span className="text-yellow-400">Na Hora de Cantar.</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-bold text-white mb-12 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          Baixe letras, organize seu setlist e sincronize a banda inteira. O teleprompter inteligente que rola no tempo exato da sua performance. A mágica simplesmente acontece.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="https://app.canta.pro" className="btn-brutal text-lg w-full md:w-auto">
            Testar de Graça
          </a>
          <a href="#features" className="btn-brutal-outline text-lg w-full md:w-auto">
            Ver Recursos
          </a>
        </div>
      </div>
    </section>
  );
}