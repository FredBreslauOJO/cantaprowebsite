import { Metadata } from "next";
import { 
  BookOpen, 
  ShieldCheck, 
  Music, 
  Sliders, 
  ClipboardList, 
  Tv, 
  FileDown, 
  Info, 
  Layers 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Tutorial & Documentação | CANTA.PRO",
  description: "Aprenda a usar o CANTA.PRO: crie setlists, sincronize timecodes e domine o palco.",
};

export default function TutorialPage() {
  return (
    <div className="flex flex-col w-full bg-white text-black font-sans antialiased">
      
      {/* SEÇÃO HERO DE ENTRADA (Apresentação com Embed do Vídeo) */}
      <section className="bg-yellow-400 border-b-8 border-black py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-block bg-black text-yellow-400 border-4 border-black font-black text-xs uppercase tracking-widest px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            Central de Treinamento
          </div>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-black text-center leading-[0.9] mb-4">
            Manual de Sobrevivência
          </h1>
          <p className="text-lg md:text-xl font-bold text-black text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            Assista à nossa demonstração oficial abaixo para entender o ecossistema do app em 3 minutos. O fim da dúvida na hora de cantar começa aqui.
          </p>

          {/* Player de Vídeo Brutalista */}
          <div className="w-full bg-white border-4 border-black p-2 md:p-4 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-3xl transition-transform hover:-translate-y-1">
            <div className="relative w-full aspect-video bg-zinc-900 border-4 border-black overflow-hidden">
              <iframe 
                className="absolute inset-0 w-full h-full z-10"
                src="https://www.youtube.com/embed/VIDEO_ID_AQUI" 
                title="Apresentação Oficial CANTA.PRO" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
                <span className="text-zinc-500 font-black uppercase tracking-widest text-xs">
                  Carregando Vídeo de Demonstração...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORPO CENTRAL DO MANUAL (Sidebar + Conteúdo Técnico) */}
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row w-full max-w-7xl mx-auto border-x-4 border-black">
        
        {/* SIDEBAR ESQUERDA (Navegação colada na viewport) */}
        <aside className="w-full md:w-80 bg-white border-b-4 md:border-b-0 md:border-r-4 border-black p-6 md:sticky md:top-24 md:h-[calc(100vh-6rem)] overflow-y-auto shrink-0">
          <h2 className="font-black text-xl uppercase tracking-tighter mb-6 flex items-center gap-2">
            <BookOpen size={24} /> Índice Geral
          </h2>
          <nav className="space-y-6">
            <div>
              <h3 className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-3">Introdução</h3>
              <ul className="space-y-2 text-sm font-bold flex flex-col text-black">
                <a href="#overview" className="hover:underline hover:text-yellow-600">Visão Geral (Overview)</a>
                <a href="#matriz-planos" className="hover:underline hover:text-yellow-600">Matriz de Planos</a>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xs text-gray-400 uppercase tracking-widest mb-3">As 7 Engrenagens</h3>
              <ul className="space-y-2 text-sm font-bold flex flex-col text-black">
                <a href="#mod-auth" className="hover:underline hover:text-yellow-600">1. Autenticação e Conta</a>
                <a href="#mod-library" className="hover:underline hover:text-yellow-600">2. Biblioteca de Letras</a>
                <a href="#mod-import" className="hover:underline hover:text-yellow-600">3. Criação e Importação</a>
                <a href="#mod-timecode" className="hover:underline hover:text-yellow-600">4. Editor de Timecodes</a>
                <a href="#mod-setlist" className="hover:underline hover:text-yellow-600">5. Gestão de Setlists</a>
                <a href="#mod-stage" className="hover:underline hover:text-yellow-600">6. Palco e Teleprompter</a>
                <a href="#mod-distribution" className="hover:underline hover:text-yellow-600 text-blue-600">7. Distribuição e Saída</a>
              </ul>
            </div>
          </nav>
        </aside>

        {/* CONTEÚDO PRINCIPAL À DIREITA */}
        <main className="flex-1 p-6 md:p-12 bg-white overflow-hidden space-y-16">
          
          {/* SESSÃO: OVERVIEW / VISÃO GERAL */}
          <section id="overview" className="scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-3 border-b-4 border-black pb-2 mb-6">
              <img src="/IconCanta.svg" alt="" className="w-8 h-8 shrink-0" /> Visão Geral (Overview)
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 font-medium mb-4">
              O <strong>CANTA.PRO</strong> foi projetado para atuar como o cérebro operacional do músico e da banda antes, durante e depois de subir ao palco. A filosofia central do sistema é converter a gestão complexa de repertórios, cifras e marcações de tempo em um fluxo visual brutalmente simples e à prova de falhas.
            </p>
            <div className="card-brutal bg-yellow-50 p-6 border-2">
              <h4 className="font-black uppercase text-sm tracking-widest mb-2 flex items-center gap-2 text-yellow-800">
                <Info size={18} /> Como usar o fluxo operacional padrão:
              </h4>
              <ol className="list-decimal pl-5 space-y-2 font-bold text-gray-800">
                <li>Alimente sua biblioteca criando letras manualmente ou puxando dados globais da web sincronizada.</li>
                <li>Fatie a música em blocos cronológicos no editor inteligente eliminando conflitos de tempo.</li>
                <li>Escile as faixas montando o setlist do show com o sistema de arrastar e divisores de aviso de palco.</li>
                <li>Ative o Modo Performance para transformar seu dispositivo em um teleprompter de alto contraste sem suspensão de tela.</li>
              </ol>
            </div>
          </section>

          {/* SESSÃO: MATRIZ DE PLANOS */}
          <section id="matriz-planos" className="scroll-mt-28">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight flex items-center gap-3 border-b-4 border-black pb-2 mb-6">
              <Layers size={32} /> Matriz de Diferenciação de Planos
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 font-medium mb-6">
              O controle de acesso a recursos e travas dinâmicas de segurança (Paywall) seguem a tabela estruturada abaixo:
            </p>
            
            {/* Tabela Brutalista Responsiva */}
            <div className="w-full overflow-x-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-black text-white uppercase font-black text-sm tracking-wider border-b-4 border-black">
                    <th className="p-4 border-r-2 border-black">Funcionalidade</th>
                    <th className="p-4 border-r-2 border-black bg-zinc-800 text-center">Plano FREE</th>
                    <th className="p-4 border-r-2 border-black bg-zinc-700 text-center">Plano BÁSICO</th>
                    <th className="p-4 bg-yellow-400 text-black text-center">Plano PRO</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-sm divide-y-2 divide-black bg-white">
                  <tr>
                    <td className="p-4 border-r-2 border-black bg-gray-50">Limite de Músicas</td>
                    <td className="p-4 border-r-2 border-black text-center text-red-600">Máx. 10 Músicas</td>
                    <td className="p-4 border-r-2 border-black text-center text-green-600">Ilimitado</td>
                    <td className="p-4 text-center text-green-600 bg-yellow-50/50">Ilimitado</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-2 border-black bg-gray-50">Criação de Setlists</td>
                    <td className="p-4 border-r-2 border-black text-center text-green-600">Ilimitado</td>
                    <td className="p-4 border-r-2 border-black text-center text-green-600">Ilimitado</td>
                    <td className="p-4 text-center text-green-600 bg-yellow-50/50">Ilimitado</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-2 border-black bg-gray-50">Busca Online Global (LRCLIB)</td>
                    <td className="p-4 border-r-2 border-black text-center text-gray-400">❌ Bloqueado</td>
                    <td className="p-4 border-r-2 border-black text-center text-black">⚡ Liberado</td>
                    <td className="p-4 text-center text-black bg-yellow-50/50">⚡ Liberado</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-2 border-black bg-gray-50">Importação de Timecode</td>
                    <td className="p-4 border-r-2 border-black text-center text-gray-400">❌ Bloqueado</td>
                    <td className="p-4 border-r-2 border-black text-center text-black">⚡ Liberado</td>
                    <td className="p-4 text-center text-black bg-yellow-50/50">⚡ Liberado</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-2 border-black bg-gray-50">Instalação Offline (PWA)</td>
                    <td className="p-4 border-r-2 border-black text-center text-gray-400">❌ Bloqueado</td>
                    <td className="p-4 border-r-2 border-black text-center text-black">⚡ Liberado</td>
                    <td className="p-4 text-center text-black bg-yellow-50/50">⚡ Liberado</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r-2 border-black bg-gray-50">Impressão e Links Públicos</td>
                    <td className="p-4 border-r-2 border-black text-center text-black">⚡ Liberado</td>
                    <td className="p-4 border-r-2 border-black text-center text-black">⚡ Liberado</td>
                    <td className="p-4 text-center text-black bg-yellow-50/50">⚡ Liberado</td>
                  </tr>
                  <tr className="border-b-0">
                    <td className="p-4 border-r-2 border-black bg-gray-50">Modo Banda (Telas Sincronizadas)</td>
                    <td className="p-4 border-r-2 border-black text-center text-gray-400">❌ Bloqueado</td>
                    <td className="p-4 border-r-2 border-black text-center text-gray-400">❌ Bloqueado</td>
                    <td className="p-4 text-center text-black font-black bg-yellow-400/30">👑 Exclusivo PRO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-4 border-black" />

          {/* SESSÃO: AS 7 ENGRENAGENS DETALHADAS */}
          <div className="space-y-16">
            
            {/* 1. AUTENTICAÇÃO */}
            <section id="mod-auth" className="scroll-mt-28">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 border-b-4 border-black pb-2 mb-4 text-black">
                <ShieldCheck size={28} className="text-yellow-500 shrink-0" /> 1. Módulo de Autenticação e Conta
              </h3>
              <ul className="space-y-3 font-bold text-gray-700 text-base list-disc pl-5">
                <li><strong className="text-black">Cadastro e Login:</strong> Sistema de entrada criptografado e seguro via e-mail e senha, operando de forma integrada diretamente com o ecossistema de segurança do Supabase Auth.</li>
                <li><strong className="text-black">Verificação de Assinatura:</strong> Varredura e identificação automática do plano do usuário ativo no momento do login (Free, Base ou Pro) para a liberação instantânea de recursos ou acionamento das travas do Paywall.</li>
              </ul>
            </section>

            {/* 2. BIBLIOTECA DE LETRAS */}
            <section id="mod-library" className="scroll-mt-28">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 border-b-4 border-black pb-2 mb-4 text-black">
                <Music size={28} className="text-yellow-500 shrink-0" /> 2. Módulo de Biblioteca de Letras (/songs)
              </h3>
              <ul className="space-y-3 font-bold text-gray-700 text-base list-disc pl-5">
                <li><strong className="text-black">Listagem Geral:</strong> Exibição fluida de todas as músicas criadas e associadas exclusivamente ao e-mail do usuário logado na nuvem.</li>
                <li><strong className="text-black">Filtro Alfabético Automático:</strong> Agrupamento visual do repertório mapeado pelas letras iniciais (A, B, C...) e uso do caractere unificado # para isolar faixas que iniciam com números ou símbolos especiais.</li>
                <li><strong className="text-black">Ordenação de Exibição:</strong> Chave de alternância instantânea para reorganizar a visualização das listas sob os critérios de "Por Título" ou "Por Artista".</li>
                <li><strong className="text-black">Barra de Pesquisa Local:</strong> Campo de varredura em tempo real focado em capturar de forma imediata termos contidos no corpo do título ou nome do artista.</li>
                <li><strong className="text-black">Guarda-Costas (Trava Free):</strong> Algoritmo de segurança que bloqueia a criação de novas faixas se a conta Free atingir 10 músicas salvas, interrompendo o fluxo e abrindo o PaywallModal em primeiro plano.</li>
              </ul>
            </section>

            {/* 3. CRIAÇÃO E IMPORTAÇÃO */}
            <section id="mod-import" className="scroll-mt-28">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 border-b-4 border-black pb-2 mb-4 text-black">
                <Layers size={28} className="text-yellow-500 shrink-0" /> 3. Módulo de Criação e Importação de Músicas
              </h3>
              <ul className="space-y-3 font-bold text-gray-700 text-base list-disc pl-5">
                <li><strong className="text-black">Criação Manual:</strong> Painel limpo com inputs Neo-Brutalist para digitação manual ou colagem direta de títulos, artistas e blocos estruturados de letra pura.</li>
                <li><strong className="text-black">Buscador Web Mundial:</strong> Conexão direta com a API global LRCLIB para localizar e capturar arquivos de letras completas instantaneamente, dispensando digitação.</li>
                <li><strong className="text-black">Modal de Preview de Letra:</strong> Interface de conferência antes da gravação definitiva no banco de dados. Permite que o músico alterne entre a aba Synced Lyrics (com os carimbos originais) e Plain Lyrics (texto limpo).</li>
                <li><strong className="text-black">Parser Inteligente de Milissegundos:</strong> Motor lógico interno que lê as tags no padrão <code className="bg-gray-100 px-1 font-mono">[mm:ss.xx]</code>, calcula o tempo de término do bloco baseado na linha subsequente e divide a música de forma cirúrgica nos blocos aceitos pelo teleprompter.</li>
              </ul>
            </section>

            {/* 4. EDITOR DE TIMECODES */}
            <section id="mod-timecode" className="scroll-mt-28">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 border-b-4 border-black pb-2 mb-4 text-black">
                <Sliders size={28} className="text-yellow-500 shrink-0" /> 4. Módulo de Editor de Timecodes
              </h3>
              <ul className="space-y-3 font-bold text-gray-700 text-base list-disc pl-5">
                <li><strong className="text-black">Cards de Bloco Individuais:</strong> Renderização de cada estrofe fatiada em cartões independentes contendo campos numéricos de Start (Início) e End (Fim) para ajuste fino.</li>
                <li><strong className="text-black">Criação por Seleção de Texto:</strong> Área lateral integrada contendo a letra bruta. O usuário pode simplesmente arrastar o mouse ou o dedo sobre uma frase e clicar em "Criar Bloco" para gerá-lo no editor automaticamente.</li>
                <li><strong className="text-black">Validador de Sobreposição (Anti-Overlap):</strong> Filtro rígido de segurança que impede a gravação e dispara um alerta vermelho caso o tempo de término de uma estrofe invada o início da estrofe seguinte, ou caso o valor de Start seja configurado com número maior que o End.</li>
                <li><strong className="text-black">Reordenação Automática por Tempo:</strong> Sistema dinâmico que reorganiza a posição física dos cards na tela de forma automática se o usuário alterar a minutagem de início de qualquer estrofe.</li>
                <li><strong className="text-black">Preview Visual com Autoscroll:</strong> Janela de simulação integrada que roda a rolagem automática do teleprompter em tempo real dentro do próprio painel de edição para conferência rápida dos tempos antes do show.</li>
              </ul>
            </section>

            {/* 5. GESTÃO DE SETLISTS */}
            <section id="mod-setlist" className="scroll-mt-28">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 border-b-4 border-black pb-2 mb-4 text-black">
                <ClipboardList size={28} className="text-yellow-500 shrink-0" /> 5. Módulo de Gerenciamento de Setlists (SetlistEdit.jsx)
              </h3>
              <ul className="space-y-3 font-bold text-gray-700 text-base list-disc pl-5">
                <li><strong className="text-black">Metadados do Show:</strong> Inputs Neo-Brutalist para definição clara de informações institucionais como Nome do Evento, Nome da Banda e Data do Show.</li>
                <li><strong className="text-black">Busca Pessoal Padrão:</strong> Campo de varredura rápida que pesquisa de forma assíncrona dentro da biblioteca local do músico e apresenta resultados suspensos com o controle de inserção rápida (+).</li>
                <li><strong className="text-black">Ocultação Inteligente:</strong> Mecanismo de filtragem que esconde dos resultados de busca as músicas que já foram escaladas naquele repertório, eliminando duplicidades no show.</li>
                <li><strong className="text-black">Remoção Expressa:</strong> Botão de exclusão rápida (-) anexado a cada linha para retirar qualquer item da listagem instantaneamente.</li>
                <li><strong className="text-black">Criação de Divisores de Roteiro:</strong> Botão dedicado à criação de blocos escuros de texto editáveis (ex: "SET 1", "INTERVALO", "TROCA DE INSTRUMENTO") que se mesclam livremente na lista de músicas.</li>
                <li><strong className="text-black">Edição Inline de Divisores:</strong> Capacidade de atualizar o texto de orientação digitando diretamente sobre o corpo do divisor, salvando ao perder o foco da digitação.</li>
                <li><strong className="text-black">Controle Dinâmico de Aviso (Empty State):</strong> Exibição do card pontilhado "Seu roteiro está vazio" apenas se o setlist contiver zero registros. O aviso é ocultado imediatamente na entrada do primeiro item.</li>
                <li><strong className="text-black">Ordenação Unificada por Arrastar (Drag & Drop):</strong> Mecanismo visual que permite arrastar músicas e divisores segurando-os pelo ícone de alça (Grip), recalculando a ordem sequencial numérico na hora e atualizando a coluna <code className="bg-gray-100 px-1 font-mono text-black">order_index</code> no Supabase.</li>
              </ul>
            </section>

            {/* 6. PALCO / TELEPROMPTER */}
            <section id="mod-stage" className="scroll-mt-28">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 border-b-4 border-black pb-2 mb-4 text-black">
                <Tv size={28} className="text-yellow-500 shrink-0" /> 6. Módulo de Palco / Teleprompter (PlaySong.jsx)
              </h3>
              <ul className="space-y-3 font-bold text-gray-700 text-base list-disc pl-5">
                <li><strong className="text-black">Bloqueio de Suspensão (Wake Lock):</strong> API nativa aplicada ao ambiente que impede o sistema operacional de celulares ou tablets de apagar ou escurecer a tela de forma automática durante a execução do show.</li>
                <li><strong className="text-black">Roteiro Flutuante Lateral:</strong> Menu gaveta que permite abrir o roteiro completo do show no palco e saltar para qualquer música ou aviso sem sair do Modo Performance.</li>
                <li><strong className="text-black">Controle de Fonte Volátil:</strong> Botões rápidos de controle de escala (A+ / A-) que modificam o tamanho em pixels dos blocos em tempo real para leitura ideal à distância, retendo a preferência no <code className="bg-gray-100 px-1 font-mono text-black">localStorage</code> do aparelho.</li>
                <li><strong className="text-black">Letras Brancas Antes do Play:</strong> O texto se apresenta estático e com nitidez total antes do acionamento do cronômetro, imitando o comportamento de um caderno de música convencional.</li>
                <li><strong className="text-black">Modo Performance Ativo:</strong> Ao iniciar a rolagem, a estrofe cantada no momento sofre uma ampliação de escala (<code className="bg-gray-100 px-1 font-mono text-black">scale-105</code>), ganha brilho de drop-shadow e fica branca. Simultaneamente, as linhas anteriores e posteriores sofrem redução drástica de opacidade (<code className="bg-gray-100 px-1 font-mono text-black">opacity-40</code>), isolando o campo visual do vocalista de forma limpa e sem o uso de filtros de blur que prejudicam a leitura rápida.</li>
                <li><strong className="text-black">Re-Sincronização Manual por Toque (Tap to Sync):</strong> Sistema inteligente que permite ao músico clicar diretamente sobre qualquer frase da tela se a banda correr ou errar a estrutura. O relógio interno do app salta para o tempo da frase tocada e re-alinha o teleprompter no ato.</li>
                <li><strong className="text-black">Suporte a Pedais Bluetooth:</strong> Escuta contínua de eventos de digitação física para operação mãos-livres no palco com pedais de página:<br />
                  • <code className="bg-gray-100 px-1 font-mono text-black">Espaço</code> ou <code className="bg-gray-100 px-1 font-mono text-black">Enter</code> = Dá Play ou Pause na rolagem automática.<br />
                  • <code className="bg-gray-100 px-1 font-mono text-black">Seta Direita</code> ou <code className="bg-gray-100 px-1 font-mono text-black">PageDown</code> = Avança imediatamente para a próxima música do Setlist.<br />
                  • <code className="bg-gray-100 px-1 font-mono text-black">Seta Esquerda</code> ou <code className="bg-gray-100 px-1 font-mono text-black">PageUp</code> = Retrocede para a música anterior da fila.
                </li>
              </ul>
            </section>

            {/* 7. UTILIDADES DE SAÍDA */}
            <section id="mod-distribution" className="scroll-mt-28">
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 border-b-4 border-black pb-2 mb-4 text-black">
                <FileDown size={28} className="text-yellow-500 shrink-0" /> 7. Módulo de Utilidades de Saída e Distribuição
              </h3>
              <ul className="space-y-3 font-bold text-gray-700 text-base list-disc pl-5">
                <li><strong className="text-black">Sistema de Impressão (PDF de Palco):</strong> Motor de formatação baseado em folhas físicas A4. Ao acionar o botão de impressão, o CSS limpa toda a carga pesada de cores e botões da interface corporativa e cospe um layout limpo contendo apenas o roteiro geral para a equipe de som/técnicos ou a letra estruturada macro para músicos que usam papel no chão.</li>
                <li><strong className="text-black">Compartilhamento de Roteiro:</strong> Sistema dinâmico que gera links únicos e públicos associados a cada setlist cadastrado. Se o líder da banda arrastar uma música ou alterar um aviso de divisor no camarim, o link reflete a mudança em tempo real. Os outros integrantes só precisam abrir o endereço nos seus próprios navegadores.</li>
                <li><strong className="text-black">Instalação Offline (PWA):</strong> Arquivo de configuração de manifesto de aplicativo que habilita o salvamento em cache estruturado. Transforma o site em um PWA nativo que pode ser baixado em celulares e tablets, garantindo que o músico faça o show completo e role as letras sem depender de conexões de internet em palcos subterrâneos ou isolados.</li>
              </ul>
            </section>

          </div>
        </main>
      </div>

    </div>
  );
}