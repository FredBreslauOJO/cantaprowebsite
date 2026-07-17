import { Search, Zap, Music, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Search size={36} strokeWidth={2.5} />,
      title: "Importação Online",
      description: "Busque por nome e artista na nossa base web e a música vem completa direto pro seu app. Esqueça a digitação manual."
    },
    {
      icon: <Zap size={36} strokeWidth={2.5} />,
      title: "Teleprompter Inteligente",
      description: "O app rola a letra individualmente no seu aparelho no tempo exato da música. O fim dos brancos na hora de cantar."
    },
    {
      icon: <Music size={36} strokeWidth={2.5} />,
      title: "Suporte para Cifras",
      description: "Não é só letra! Adicione suas cifras e deixe rolar. A mesma facilidade adaptada sob medida para instrumentistas."
    },
    {
      icon: <Users size={36} strokeWidth={2.5} />,
      title: "Colaboração em Nuvem",
      description: "Compartilhe o banco de dados. Alterou o repertório? O painel é atualizado e toda a banda acessa a lista atualizada."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-yellow-400 border-b-8 border-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
            Chega de Amadorismo
          </h2>
          <p className="text-black font-black tracking-widest uppercase text-xl">
            As ferramentas digitais para um show organizado e sem erros.
          </p>
        </div>

        {/* Grid de 4 colunas para alinhar lado a lado elegantemente */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border-4 border-black rounded-[2rem] p-8 flex flex-col items-start shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-3 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
            >
              {/* Ícone no topo */}
              <div className="bg-yellow-400 text-black p-4 rounded-2xl border-2 border-black mb-6">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-black uppercase tracking-tight mb-3 text-black">
                {feature.title}
              </h3>
              
              <p className="text-base font-bold text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}