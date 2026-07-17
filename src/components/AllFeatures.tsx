import { Check, Zap, Crown } from "lucide-react";

export default function AllFeatures() {
  return (
    <section id="all-features" className="py-32 px-6 bg-gray-100 border-b-8 border-black relative">
      <div className="max-w-6xl mx-auto">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black">
            Raio-X do App
          </h2>
          <p className="text-gray-500 font-black tracking-widest uppercase text-sm md:text-base">
            Tudo o que você leva para o palco.
          </p>
        </div>

        {/* CONTAINER DOS CARTÕES EMPILHÁVEIS (STICKY) */}
        <div className="relative flex flex-col gap-8 pb-16">
          
          {/* CARTÃO 1: FREE (Fica preso no top-24) */}
          <div className="sticky top-24 z-10 w-full min-h-[50vh] bg-white border-4 border-black rounded-[2rem] p-8 md:p-16 shadow-[0px_-10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 bg-gray-200 text-black font-black text-xs uppercase tracking-widest px-4 py-2 border-2 border-black w-fit mb-6">
                  <Check size={16} /> Gratuito
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4 text-black">
                  A porta de entrada
                </h3>
                <p className="text-base font-bold text-gray-500 leading-relaxed">
                  O essencial para o músico abandonar o caderno e se organizar digitalmente sem nenhum atrito.
                </p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-black text-xl uppercase mb-2">Acesso Imediato</h4>
                  <p className="text-sm font-bold text-gray-700">Entra na mesma hora usando Google ou Spotify, sem criar senhas ou formulários chatos.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2">Importação Automática</h4>
                  <p className="text-sm font-bold text-gray-700">Buscador integrado que encontra a música na internet e puxa tudo com um clique.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2">Suporte para Cifras</h4>
                  <p className="text-sm font-bold text-gray-700">Lê cifras perfeitamente, sendo a ferramenta ideal para cantores e instrumentistas.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2">Organização Limpa</h4>
                  <p className="text-sm font-bold text-gray-700">Crie listas separadas por shows com cálculo automático de duração e apague em lote.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARTÃO 2: BÁSICO (Fica preso no top-32, sobrepondo o Free) */}
          <div className="sticky top-32 z-20 w-full min-h-[50vh] bg-yellow-400 border-4 border-black rounded-[2rem] p-8 md:p-16 shadow-[0px_-15px_40px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 bg-black text-yellow-400 font-black text-xs uppercase tracking-widest px-4 py-2 border-2 border-black w-fit mb-6 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                  <Zap size={16} /> Básico
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4 text-black">
                  Segurança & Praticidade
                </h3>
                <p className="text-base font-bold text-black/80 leading-relaxed">
                  Para o músico que já faz shows e precisa de garantias e agilidade na comunicação com a equipe.
                </p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2">Modo Blindado <Zap size={20}/></h4>
                  <p className="text-sm font-bold text-gray-900">O salva-vidas. Funciona offline em palcos sem sinal e bloqueia edições contra erros.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2">Compartilhamento <Zap size={20}/></h4>
                  <p className="text-sm font-bold text-gray-900">Envio direto do repertório para os músicos. Todo mundo sabe exatamente o que vai ser tocado.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2">Impressão Direta <Zap size={20}/></h4>
                  <p className="text-sm font-bold text-gray-900">Tenha um plano físico ou entregue o roteiro para o técnico de som num único clique.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2">Exportação <Zap size={20}/></h4>
                  <p className="text-sm font-bold text-gray-900">Baixe letras e listas em arquivo de texto para o celular ou PC garantindo o controle.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARTÃO 3: PRO (Fica preso no top-40, sobrepondo os anteriores) */}
          <div className="sticky top-40 z-30 w-full min-h-[50vh] bg-black text-white border-4 border-black rounded-[2rem] p-8 md:p-16 shadow-[0px_-20px_50px_rgba(255,204,0,0.2)]">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black text-xs uppercase tracking-widest px-4 py-2 border-2 border-white w-fit mb-6">
                  <Crown size={16} /> Pro
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4 text-white">
                  A Experiência Definitiva
                </h3>
                <p className="text-base font-bold text-gray-400 leading-relaxed">
                  Para o músico e a banda que querem nível máximo de profissionalismo e zero preocupação.
                </p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 text-yellow-400 flex items-center gap-2">Teleprompter Inteligente <Crown size={20}/></h4>
                  <p className="text-sm font-bold text-gray-300">A tela rola letra ou cifra de forma automática, no tempo exato da música. O fim definitivo dos "brancos".</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 text-yellow-400 flex items-center gap-2">Edição Colaborativa <Crown size={20}/></h4>
                  <p className="text-sm font-bold text-gray-300">A banda gerencia o show junto. Altere a ordem e atualize o repertório no celular de todos em tempo real.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}