import FeatureMatrix from "./FeatureMatrix";

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-gray-100 border-b-8 border-black relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black">
            Escolha seu Plano
          </h2>
          <p className="text-gray-500 font-black tracking-widest uppercase text-sm md:text-base">
            Sem pegadinhas. Cancele quando quiser.
          </p>
        </div>

        {/* CONTAINER DOS CARTÕES DE PLANOS (STICKY PARALLAX) */}
        <div className="relative flex flex-col gap-8 pb-16">
          
          {/* PLANO FREE */}
          <div className="sticky top-24 z-10 w-full bg-white border-4 border-black rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0px_-10px_40px_rgba(0,0,0,0.08)] flex flex-col md:flex-row gap-8 justify-between items-center transition-all duration-500">
             <div className="w-full md:w-1/3 text-center md:text-left">
               <h3 className="text-2xl font-black uppercase tracking-wider mb-2 text-gray-900">Free</h3>
               <div className="text-6xl font-black tracking-tight text-black">Grátis</div>
             </div>
             <div className="w-full md:w-1/3">
                <ul className="space-y-4 font-bold text-lg text-gray-800">
                  <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Máximo de 10 Músicas</li>
                  <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Setlists Ilimitados</li>
                  <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Impressão de Roteiros</li>
                  <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Links Públicos de Palco</li>
                </ul>
             </div>
             <div className="w-full md:w-1/3 flex md:justify-end mt-6 md:mt-0">
                <a href="https://app.canta.pro" className="btn-brutal-outline text-center text-xl w-full md:w-auto py-4 px-8 rounded-2xl">
                  Começar Grátis
                </a>
             </div>
          </div>

          {/* PLANO BASIC */}
          <div className="sticky top-32 z-20 w-full bg-yellow-400 border-4 border-black rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0px_-15px_40px_rgba(0,0,0,0.12)] flex flex-col md:flex-row gap-8 justify-between items-center transition-all duration-500">
             <div className="w-full md:w-1/3 text-center md:text-left">
               <h3 className="text-2xl font-black uppercase tracking-wider mb-2 text-gray-900">Basic</h3>
               <div className="text-6xl font-black tracking-tight text-black">
                 R$ 4.99<span className="text-xl font-bold text-gray-700">/mês</span>
               </div>
             </div>
             <div className="w-full md:w-1/3">
                <ul className="space-y-4 font-bold text-lg text-black">
                  <li className="flex items-center gap-3"><span className="text-black">✓</span> Músicas e Setlists Ilimitados</li>
                  <li className="flex items-center gap-3"><span className="text-black">✓</span> Busca Online Global (LRCLIB)</li>
                  <li className="flex items-center gap-3"><span className="text-black">✓</span> Importação Automática</li>
                  <li className="flex items-center gap-3"><span className="text-black">✓</span> Instalação Offline (PWA)</li>
                </ul>
             </div>
             <div className="w-full md:w-1/3 flex md:justify-end mt-6 md:mt-0">
                <a href="https://app.canta.pro" className="btn-brutal-outline !bg-white text-center text-xl w-full md:w-auto py-4 px-8 rounded-2xl hover:!bg-black hover:!text-white">
                  Assinar Basic
                </a>
             </div>
          </div>

          {/* PLANO PRO */}
          <div className="sticky top-40 z-30 w-full bg-black text-white border-4 border-black rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0px_-20px_50px_rgba(255,204,0,0.2)] flex flex-col md:flex-row gap-8 justify-between items-center transition-all duration-500 relative">
             <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-black uppercase tracking-widest py-2 px-6 border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] whitespace-nowrap z-20">
              Mais Escolhido
             </div>
             <div className="w-full md:w-1/3 text-center md:text-left pt-4 md:pt-0">
               <h3 className="text-2xl font-black uppercase tracking-wider mb-2 text-yellow-400">Pro</h3>
               <div className="text-6xl font-black tracking-tight text-white">
                 R$ 7.99<span className="text-xl font-bold text-gray-400">/mês</span>
               </div>
             </div>
             <div className="w-full md:w-1/3">
                <ul className="space-y-4 font-bold text-lg text-gray-200">
                  <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Tudo do plano Básico</li>
                  <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Modo Banda (Sincronizado)</li>
                  <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Auto-Play de Palco</li>
                </ul>
             </div>
             <div className="w-full md:w-1/3 flex md:justify-end mt-6 md:mt-0">
                <a href="https://app.canta.pro" className="btn-brutal text-center text-xl w-full md:w-auto py-4 px-8 !bg-yellow-400 !text-black hover:!bg-white border-none shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] rounded-2xl">
                  Assinar Pro
                </a>
             </div>
          </div>
        </div>

        {/* TABELA DE COMPARAÇÃO COMPLETA MOVIDA PARA DEBAIXO DOS PLANOS */}
        <div className="mt-16">
          <FeatureMatrix />
        </div>

      </div>
    </section>
  );
}