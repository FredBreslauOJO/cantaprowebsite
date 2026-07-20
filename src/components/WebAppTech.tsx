import { MonitorSmartphone, CloudLightning, RefreshCcw, WifiOff } from "lucide-react";

export default function WebAppTech() {
  return (
    <section className="py-24 px-6 bg-white border-b-8 border-black overflow-hidden relative">
      
      {/* Estilo CSS embutido para a animação do letreiro infinito */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto">
        
        {/* CABEÇALHO TIPOGRÁFICO DE IMPACTO */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-black text-white font-black text-xs uppercase tracking-widest px-4 py-2 border-2 border-black rounded-full mb-6">
            Evolução Tecnológica
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-black leading-none">
            Não estamos nas App Stores. <br className="hidden md:block"/>
            <span className="text-yellow-500">Isso é de propósito.</span>
          </h2>
          <p className="text-lg md:text-xl font-bold text-gray-600 leading-relaxed">
            O CANTA.PRO é um Web App Progressivo (PWA) de última geração. Nós abandonamos o modelo antigo de lojas de aplicativos para te entregar uma ferramenta mais rápida, leve e sem barreiras.
          </p>
        </div>

      </div>

      {/* FAIXA ANIMADA INFINITA (SIDE SCROLLING) */}
      <div className="w-full bg-yellow-400 border-y-4 border-black py-4 mb-20 -mx-6 w-[100vw] rotate-1 scale-105 shadow-[0px_8px_0px_0px_rgba(0,0,0,1)] z-10 relative">
        <div className="animate-marquee flex gap-8 items-center text-black font-black uppercase tracking-widest text-2xl md:text-4xl">
          {/* Duplicamos os itens para garantir o loop contínuo perfeito */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-8 items-center shrink-0">
              <span>Roda no iPhone</span>
              <span>•</span>
              <span>Roda no Android</span>
              <span>•</span>
              <span>Roda no iPad</span>
              <span>•</span>
              <span>Roda no Mac</span>
              <span>•</span>
              <span>Roda no Windows</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* GRID DE ARGUMENTOS (BENTO BOX NEO-BRUTALISTA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CARD 1 */}
          <div className="bg-gray-100 border-4 border-black rounded-[2rem] p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="bg-black text-white p-4 rounded-2xl border-2 border-black w-fit mb-6">
              <CloudLightning size={32} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-black">
              Zero Espaço Ocupado
            </h3>
            <p className="text-base font-bold text-gray-600 leading-relaxed">
              Chega de apagar fotos para instalar app de música. O CANTA.PRO roda na nuvem e se instala na sua tela inicial em 1 segundo, pesando absolutamente <strong>zero megabytes</strong> no armazenamento do seu celular.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white border-4 border-black rounded-[2rem] p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="bg-yellow-400 text-black p-4 rounded-2xl border-2 border-black w-fit mb-6">
              <RefreshCcw size={32} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-black">
              Adeus, Atualizações Manuais
            </h3>
            <p className="text-base font-bold text-gray-600 leading-relaxed">
              Nunca mais vá até a loja de aplicativos baixar uma versão nova. A nossa tecnologia atualiza o software silenciosamente em segundo plano. Abriu o app? Você já está na versão mais recente.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white border-4 border-black rounded-[2rem] p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="bg-yellow-400 text-black p-4 rounded-2xl border-2 border-black w-fit mb-6">
              <MonitorSmartphone size={32} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-black">
              Multi-Plataforma Absoluto
            </h3>
            <p className="text-base font-bold text-gray-600 leading-relaxed">
              Crie a conta no Windows do escritório, edite o repertório no iPad no trânsito, e suba no palco para tocar lendo a tela do seu celular Android. Tudo 100% integrado e sincronizado.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-gray-100 border-4 border-black rounded-[2rem] p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
            <div className="bg-black text-white p-4 rounded-2xl border-2 border-black w-fit mb-6">
              <WifiOff size={32} />
            </div>
            <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-black">
              100% Offline no Palco
            </h3>
            <p className="text-base font-bold text-gray-600 leading-relaxed">
              A mágica do Web App moderno: conectou uma vez, os dados ficam no cache do seu aparelho. O sinal de celular no barzinho caiu? Sem desespero. Você acessa seus roteiros e letras perfeitamente sem internet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}