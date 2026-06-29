import FeatureMatrix from "./FeatureMatrix";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-white border-b-8 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
            Escolha seu Plano
          </h2>
          <p className="text-gray-500 font-black tracking-widest uppercase text-sm md:text-base">
            Sem pegadinhas. Cancele quando quiser.
          </p>
        </div>

        {/* CHAMADA DA MATRIZ DINÂMICA COMPLETA NA HOME */}
        <FeatureMatrix />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mt-16">
          
          {/* PLANO FREE */}
          <div className="card-brutal flex flex-col justify-between bg-white text-black border-4 border-black rounded-2xl">
            <div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-2 text-gray-900">Free</h3>
              <div className="text-5xl font-black mb-8 tracking-tight">Grátis</div>
              <ul className="space-y-4 mb-8 font-bold text-base text-gray-800">
                <li className="flex items-center gap-3">✓ Máximo de 1 Setlist</li>
                <li className="flex items-center gap-3">✓ Máximo de 10 Músicas</li>
                <li className="flex items-center gap-3">✓ Modo Performance</li>
              </ul>
            </div>
            <a href="https://app.canta.pro" className="btn-brutal-outline text-center text-lg w-full py-3 rounded-xl">
              Começar Grátis
            </a>
          </div>

          {/* PLANO BASIC */}
          <div className="card-brutal flex flex-col justify-between bg-white text-black border-4 border-black rounded-2xl">
            <div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-2 text-gray-900">Basic</h3>
              <div className="text-5xl font-black mb-8 tracking-tight">
                R$ 4.99<span className="text-sm font-bold text-gray-500">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 font-bold text-base text-gray-800">
                <li className="flex items-center gap-3">✓ Setlists Ilimitados</li>
                <li className="flex items-center gap-3">✓ Músicas Ilimitadas</li>
                <li className="flex items-center gap-3">✓ Notas de Divisor</li>
                <li className="flex items-center gap-3">✓ Modo Performance</li>
              </ul>
            </div>
            <a href="https://app.canta.pro" className="btn-brutal-outline text-center text-lg w-full py-3 rounded-xl">
              Assinar Basic
            </a>
          </div>

          {/* PLANO PRO (CORRIGIDO PARA FUNDO PRETO COMPLETO) */}
          <div className="card-brutal flex flex-col justify-between !bg-black !text-white border-4 border-black relative shadow-[12px_12px_0px_0px_rgba(255,204,0,1)] rounded-2xl">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-black uppercase tracking-widest py-2 px-6 border-4 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
              Mais Escolhido
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-black uppercase tracking-wider mb-2 text-yellow-400">Pro</h3>
              <div className="text-5xl font-black mb-8 tracking-tight text-white">
                R$ 7.99<span className="text-sm font-bold text-gray-400">/mês</span>
              </div>
              <ul className="space-y-4 mb-8 font-bold text-base text-gray-200">
                <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Tudo do Basic</li>
                <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Impressão (PDF)</li>
                <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Compartilhamento</li>
                <li className="flex items-center gap-3"><span className="text-yellow-400">✓</span> Auto-Play Automático</li>
              </ul>
            </div>
            <a href="https://app.canta.pro" className="btn-brutal text-center text-lg w-full py-3 !bg-white !text-black hover:!bg-yellow-400 border-none shadow-none rounded-xl">
              Assinar Pro
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}