import { Check, Zap, Crown } from "lucide-react";

export default function AllFeatures() {
  return (
    <section id="all-features" className="py-24 px-6 bg-gray-50 border-b-8 border-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black">
            Raio-X do App
          </h2>
          <p className="text-gray-500 font-black tracking-widest uppercase text-sm md:text-base">
            Tudo o que você leva para o palco.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* COLUNA FREE */}
          <div className="card-brutal bg-white flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-gray-200 text-black font-black text-xs uppercase tracking-widest px-4 py-2 border-2 border-black w-fit">
              <Check size={16} /> Gratuito (A porta de entrada)
            </div>
            <p className="text-sm font-bold text-gray-500 mb-2">O essencial para o músico abandonar o caderno e se organizar digitalmente.</p>
            <div className="space-y-6">
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1">Acesso Imediato em um Clique</h4>
                <p className="text-sm font-bold text-gray-800">Entra na mesma hora usando Google ou Spotify, sem criar senhas ou preencher formulários chatos.</p>
              </div>
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1">Importação Automática da Internet</h4>
                <p className="text-sm font-bold text-gray-800">Buscador integrado que encontra a música e puxa todo o texto para dentro do app com um clique. Economiza horas.</p>
              </div>
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1">Suporte Completo para Cifras</h4>
                <p className="text-sm font-bold text-gray-800">Além de letras, lê cifras perfeitamente, sendo ideal tanto para cantores quanto para instrumentistas.</p>
              </div>
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1">Organização de Repertórios</h4>
                <p className="text-sm font-bold text-gray-800">Crie listas separadas por shows/bandas com cálculo automático da duração total (ex: "1h 30m de show").</p>
              </div>
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1">Limpeza Rápida</h4>
                <p className="text-sm font-bold text-gray-800">Edição em lote para apagar várias músicas de uma só vez para manter a biblioteca organizada.</p>
              </div>
            </div>
          </div>

          {/* COLUNA BÁSICO */}
          <div className="card-brutal bg-yellow-400 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-black text-yellow-400 font-black text-xs uppercase tracking-widest px-4 py-2 border-2 border-black w-fit shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
              <Zap size={16} /> Básico (Segurança e Praticidade)
            </div>
            <p className="text-sm font-bold text-black mb-2">Para quem já faz shows e precisa de garantias e agilidade com a equipe.</p>
            <div className="space-y-6">
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1 flex items-center gap-2">Modo Sem Internet (Blindado) <Zap size={18} className="shrink-0"/></h4>
                <p className="text-sm font-bold text-gray-900">O salva-vidas. Funciona offline em palcos sem sinal. Bloqueia edições temporárias para proteger dados contra erros.</p>
              </div>
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1 flex items-center gap-2">Compartilhamento Simples <Zap size={18} className="shrink-0"/></h4>
                <p className="text-sm font-bold text-gray-900">Envio direto do repertório para os músicos. Todo mundo sabe exatamente o que vai ser tocado.</p>
              </div>
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1 flex items-center gap-2">Impressão Direta <Zap size={18} className="shrink-0"/></h4>
                <p className="text-sm font-bold text-gray-900">Tenha um plano físico ou entregue para o técnico de som num clique.</p>
              </div>
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1 flex items-center gap-2">Exportação Rápida <Zap size={18} className="shrink-0"/></h4>
                <p className="text-sm font-bold text-gray-900">Botão dedicado para baixar letras e listas em arquivo de texto para o celular ou PC.</p>
              </div>
            </div>
          </div>

          {/* COLUNA PRO */}
          <div className="card-brutal bg-black text-white flex flex-col gap-6 shadow-[8px_8px_0px_0px_rgba(255,204,0,1)]">
            <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black text-xs uppercase tracking-widest px-4 py-2 border-2 border-white w-fit">
              <Crown size={16} /> Pro (A Experiência Definitiva)
            </div>
            <p className="text-sm font-bold text-gray-400 mb-2">Nível máximo de profissionalismo e zero preocupação durante a performance.</p>
            <div className="space-y-6">
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1 text-yellow-400 flex items-center gap-2">Teleprompter Inteligente <Crown size={18} className="shrink-0"/></h4>
                <p className="text-sm font-bold text-gray-300">O coração do app. A tela rola letra ou cifra sincronizada no tempo exato da música. O fim dos brancos no palco.</p>
              </div>
              <div>
                <h4 className="font-black text-lg uppercase leading-tight mb-1 text-yellow-400 flex items-center gap-2">Edição Colaborativa em Grupo <Crown size={18} className="shrink-0"/></h4>
                <p className="text-sm font-bold text-gray-300">A banda gerencia o show junto. Cantor adiciona músicas, guitarrista altera a ordem, e atualiza no celular de todos em tempo real.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}