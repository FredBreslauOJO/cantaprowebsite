import { Search, Zap, Music, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Search size={48} strokeWidth={2} />,
      title: "Importação Mágica",
      description: "Busque por nome e artista e pumba! A música inteira vem da internet direto pro app com um clique, já com sincronia de tempo e auto-scroll. Economize horas."
    },
    {
      icon: <Zap size={48} strokeWidth={2} />,
      title: "Auto-Play Sincronizado",
      description: "A mágica acontece: o app rola a letra no tempo exato da música e já pula pra próxima sozinho."
    },
    {
      icon: <Music size={48} strokeWidth={2} />,
      title: "Suporte para Cifras",
      description: "Não é só letra! Cole suas cifras e deixe o app rolar a tela automaticamente. A mesma facilidade absurda, feita sob medida para instrumentistas."
    },
    {
      icon: <Users size={48} strokeWidth={2} />,
      title: "Banda 100% Alinhada",
      description: "Mudou o setlist no camarim? O painel de todos os músicos atualiza na hora, sem confusão ou papel voando."
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-yellow-400 border-b-8 border-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)]">
            Chega de Amadorismo
          </h2>
          <p className="text-black font-black tracking-widest uppercase text-xl">
            As armas que sua banda precisa para um show impecável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-brutal flex flex-col md:flex-row gap-6 items-start bg-white">
              <div className="bg-black text-white p-4 rounded-none border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,204,0,1)] shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-3xl font-black uppercase tracking-tight mb-3">
                  {feature.title}
                </h3>
                <p className="text-lg font-bold text-gray-800 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}