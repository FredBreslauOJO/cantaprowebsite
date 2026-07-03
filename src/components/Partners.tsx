import { Handshake, Megaphone, GraduationCap } from "lucide-react";

export default function Partners() {
  return (
    <section id="partners" className="py-24 px-6 bg-black text-white border-b-8 border-black">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* TEXTOS DE CONVERSÃO */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black font-black text-xs uppercase tracking-widest px-4 py-1.5 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            <Handshake size={16} /> Programa de Parcerias
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-[0_4px_4px_rgba(255,204,0,0.3)]">
            Monetize sua audiência. <br />
            <span className="text-yellow-400">Evolua seus alunos.</span>
          </h2>
          
          <p className="text-lg md:text-xl font-bold text-gray-300 max-w-2xl leading-relaxed">
            Seja um parceiro oficial do CANTA.PRO. Estamos buscando Escolas de Música, Universidades e Influenciadores que queiram elevar o nível dos seus alunos oferecendo licenças gratuitas, ou faturar promovendo o padrão definitivo de teleprompter para músicos.
          </p>

          <a href="/contato?assunto=Programa de Parceria" className="btn-brutal inline-block text-lg !bg-yellow-400 !text-black hover:!bg-white rounded-xl mt-4">
            Quero Ser Parceiro
          </a>
        </div>

        {/* CARDS DE DESTAQUE */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6 shrink-0">
          <div className="card-brutal !bg-zinc-900 border-4 border-yellow-400 rounded-2xl flex items-start gap-4 shadow-[8px_8px_0px_0px_rgba(255,204,0,1)]">
            <div className="bg-yellow-400 p-3 text-black rounded-lg shrink-0">
              <GraduationCap size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">Para Escolas</h3>
              <p className="text-sm font-bold text-gray-400">Pacotes institucionais. Ensine repertório e performance de palco com tecnologia.</p>
            </div>
          </div>

          <div className="card-brutal !bg-zinc-900 border-4 border-white rounded-2xl flex items-start gap-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]">
            <div className="bg-white p-3 text-black rounded-lg shrink-0">
              <Megaphone size={32} />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-white mb-1">Para Criadores</h3>
              <p className="text-sm font-bold text-gray-400">Comissionamento por indicação. Ganhe dinheiro recomendando a melhor ferramenta do mercado.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}