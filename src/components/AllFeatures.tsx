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
            O que cada assinatura libera para você.
          </p>
        </div>

        {/* CONTAINER DOS CARTÕES EMPILHÁVEIS (STICKY PARALLAX) */}
        <div className="relative flex flex-col gap-8 pb-16">
          
          {/* CARTÃO 1: FREE */}
          <div className="sticky top-24 z-10 w-full min-h-[50vh] bg-white border-4 border-black rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0px_-10px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 bg-gray-200 text-black font-black text-xs uppercase tracking-widest px-5 py-2.5 border-2 border-black rounded-full mb-6">
                  <Check size={16} /> Gratuito
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4 text-black">
                  A porta de entrada
                </h3>
                <p className="text-base font-bold text-gray-500 leading-relaxed">
                  Para o músico abandonar o caderno e entender como a organização digital funciona.
                </p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 text-red-600">Limite de 10 Músicas</h4>
                  <p className="text-sm font-bold text-gray-700">Espaço contido para você testar a interface do aplicativo antes de migrar todo o seu material.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 text-red-600">1 Único Repertório</h4>
                  <p className="text-sm font-bold text-gray-700">Crie 1 setlist básico para testar a plataforma em ensaios simples.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 text-gray-400">Importação Bloqueada</h4>
                  <p className="text-sm font-bold text-gray-500">A busca online (LRCLIB) não está disponível. As letras e cifras devem ser digitadas manualmente.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 text-gray-400">Sincronia Bloqueada</h4>
                  <p className="text-sm font-bold text-gray-500">A importação do timecode fica desativada. O prompter tem rolagem apenas manual no plano grátis.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARTÃO 2: BÁSICO */}
          <div className="sticky top-32 z-20 w-full min-h-[50vh] bg-yellow-400 border-4 border-black rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0px_-15px_40px_rgba(0,0,0,0.12)] transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 bg-black text-yellow-400 font-black text-xs uppercase tracking-widest px-5 py-2.5 border-2 border-black rounded-full mb-6 shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                  <Zap size={16} /> Básico
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4 text-black">
                  Segurança & Praticidade
                </h3>
                <p className="text-base font-bold text-black/80 leading-relaxed">
                  Para o músico ativo que quer gerenciar toda sua vida musical sem limitações.
                </p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2">Ilimitado <Zap size={20}/></h4>
                  <p className="text-sm font-bold text-gray-900">Cadastre infinitas músicas e crie quantos setlists quiser para todas as suas bandas e eventos.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2">Busca Online <Zap size={20}/></h4>
                  <p className="text-sm font-bold text-gray-900">Desbloqueio da importação Web. Busque o artista e a música vem completa para o app com um clique.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2">Acesso Offline <Zap size={20}/></h4>
                  <p className="text-sm font-bold text-gray-900">Funciona perfeitamente em palcos onde o sinal de celular não chega ou o Wi-Fi é ruim.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2">Sincronia Liberta <Zap size={20}/></h4>
                  <p className="text-sm font-bold text-gray-900">Sincronize individualmente as letras para rolarem sozinhas durante a sua execução no palco.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARTÃO 3: PRO */}
          <div className="sticky top-40 z-30 w-full min-h-[50vh] bg-black text-white border-4 border-black rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0px_-20px_50px_rgba(255,204,0,0.2)] transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black text-xs uppercase tracking-widest px-5 py-2.5 border-2 border-white rounded-full mb-6">
                  <Crown size={16} /> Pro
                </div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4 text-white">
                  Ferramentas Avançadas
                </h3>
                <p className="text-base font-bold text-gray-400 leading-relaxed">
                  Para gerenciar a equipe completa, exportar materiais físicos e edição profissional.
                </p>
              </div>
              <div className="md:w-2/3 grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 text-yellow-400 flex items-center gap-2">Colaboração de Banda <Crown size={20}/></h4>
                  <p className="text-sm font-bold text-gray-300">Compartilhamento de banco de dados na nuvem. Atualize o repertório e ele reflete no painel da banda inteira.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 text-yellow-400 flex items-center gap-2">Exportação de Roteiros <Crown size={20}/></h4>
                  <p className="text-sm font-bold text-gray-300">Gere roteiros, imprima contingências em papel ou exporte o setlist para entregar ao técnico de som.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 text-yellow-400 flex items-center gap-2">Editor de Timecode <Crown size={20}/></h4>
                  <p className="text-sm font-bold text-gray-300">Acesso ao editor avançado para ajustar milissegundos precisos das rolagens sincronizadas.</p>
                </div>
                <div>
                  <h4 className="font-black text-xl uppercase mb-2 text-yellow-400 flex items-center gap-2">Tudo do Básico <Crown size={20}/></h4>
                  <p className="text-sm font-bold text-gray-300">Músicas ilimitadas, busca online e funcionamento offline já inclusos na mensalidade.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}