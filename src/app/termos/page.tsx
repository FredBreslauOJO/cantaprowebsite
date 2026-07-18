import { AlertCircle } from "lucide-react";

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-32 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* CABEÇALHO */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black">
            Termos de Serviço
          </h1>
          <p className="text-gray-500 font-black tracking-widest uppercase text-sm md:text-base">
            Última Versão: 18 de julho de 2026.
          </p>
        </div>

        {/* ALERTA DE VALIDAÇÃO DENTRO DO APP */}
        <div className="bg-yellow-400 border-4 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-start gap-4 mb-12">
          <AlertCircle size={32} className="shrink-0 text-black mt-1" strokeWidth={2.5} />
          <div>
            <h3 className="text-xl font-black uppercase tracking-tight text-black mb-2">
              Documento de Referência
            </h3>
            <p className="text-black font-bold text-base leading-relaxed">
              Este documento está publicado aqui apenas para fins de consulta e transparência. O aceite oficial com validade jurídica destes termos (assim como o registro de consentimento) é feito obrigatoriamente dentro da plataforma, no momento em que você cria sua conta em <a href="https://app.canta.pro" className="underline underline-offset-4 hover:bg-black hover:text-white transition-colors px-1">app.canta.pro</a>.
            </p>
          </div>
        </div>

        {/* CONTEÚDO LEGAL - FORMATADO PARA LEITURA */}
        <article className="card-brutal bg-white p-8 md:p-16 rounded-[2rem]">
          <div className="prose prose-lg max-w-none text-gray-800 font-medium">
            
            <p className="font-bold text-xl mb-8 border-b-2 border-gray-200 pb-8">
              Este contrato de adesão eletrônico regula as condições gerais de utilização do aplicativo web progressivo (PWA) CANTA.PRO, acessível através do endereço eletrônico oficial https://www.canta.pro/, de propriedade e titularidade de seu desenvolvedor e fundadores licenciantes. Ao efetuar o cadastro, acessar a plataforma ou utilizar qualquer funcionalidade, o usuário adere integralmente a este documento.
            </p>

            <h2 className="text-2xl font-black uppercase tracking-tight text-black mt-12 mb-6">Cláusula 1 — Das Definições e do Objeto do Contrato</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li><strong>Natureza do Serviço:</strong> O CANTA.PRO consiste em um utilitário computacional em nuvem estruturado como Progressive Web Application (PWA) de teleprompting profissional e gestão técnica de repertórios musicais.</li>
              <li><strong>Inexistência de Distribuição:</strong> O CANTA.PRO não atua como agregadora, editora ou distribuidora de música. Fornecemos única e exclusivamente uma ferramenta de processamento lógico de dados de texto inseridos voluntariamente pelo usuário.</li>
              <li><strong>Concessão de Licença:</strong> Concede-se uma licença de uso limitada, revogável e intransferível para uso do software (SaaS), sem transferência de direito autoral ou código-fonte.</li>
              <li><strong>Estrutura dos Planos:</strong> O serviço divide-se entre Planos Gratuito, Básico e Pro, com limites detalhados no site oficial.</li>
            </ul>

            <h2 className="text-2xl font-black uppercase tracking-tight text-black mt-12 mb-6">Cláusula 2 — Do Cadastro e do Acesso</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li><strong>Requisitos:</strong> O acesso ocorre via link de autenticação direta (magic link) ou integração Google. O usuário garante a autenticidade das informações.</li>
              <li><strong>Segurança:</strong> A conta é pessoal e intransferível, sendo o usuário o único responsável pela confidencialidade de suas credenciais.</li>
            </ul>

            <h2 className="text-2xl font-black uppercase tracking-tight text-black mt-12 mb-6">Cláusula 3 — Cobrança, Renovação e Arrependimento</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li><strong>Cobrança:</strong> As assinaturas são faturadas de forma recorrente e antecipada via Stripe (Pix ou Cartão).</li>
              <li><strong>Renovação Automática:</strong> As assinaturas renovam-se automaticamente. O usuário pode cancelar a qualquer momento no painel, sem multas residuais.</li>
              <li><strong>Direito de Arrependimento:</strong> Em cumprimento ao artigo 49 do CDC, o usuário pode desistir da contratação em até 7 dias corridos da confirmação do primeiro pagamento, com estorno integral.</li>
            </ul>

            <h2 className="text-2xl font-black uppercase tracking-tight text-black mt-12 mb-6">Cláusula 4 — Da Propriedade Intelectual</h2>
            <p className="mb-4">Todos os direitos sobre o código-fonte, arquitetura de timecode, algoritmos e interface visual pertencem exclusivamente aos fundadores do CANTA.PRO. É absolutamente vedado:</p>
            <ul className="space-y-4 list-disc pl-6">
              <li>Realizar engenharia reversa, desmontagem ou obter o código-fonte.</li>
              <li>Desenvolver ou comercializar softwares derivados baseados no conjunto visual (trade dress) do CANTA.PRO.</li>
              <li>Remover ou mascarar identificações de marca registrada e avisos de copyright.</li>
            </ul>

            <h2 className="text-2xl font-black uppercase tracking-tight text-black mt-12 mb-6">Cláusula 5 — Conteúdo do Usuário e Terceiros</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li><strong>Responsabilidade Exclusiva:</strong> O CANTA.PRO não monitora os textos e cifras cadastrados. Todo o conteúdo é de responsabilidade estrita do usuário gerador.</li>
              <li><strong>Garantias do Usuário:</strong> O usuário declara possuir as licenças de direitos autorais ou enquadrar-se nas exceções legais de cópia privada para o material registrado.</li>
              <li><strong>APIs de Terceiros:</strong> O aplicativo atua como um cliente neutro na importação de dados externos (Vagalume, LRCLIB), não se responsabilizando por interrupções ou pela conformidade dessas bases.</li>
            </ul>

            <h2 className="text-2xl font-black uppercase tracking-tight text-black mt-12 mb-6">Cláusula 6 — Notificação e Retirada (Notice and Takedown)</h2>
            <p className="mb-4">O CANTA.PRO adota conduta rígida de respeito à propriedade intelectual (Art. 19, MCI). Denúncias formais de violação devem ser enviadas para:</p>
            <div className="bg-gray-100 p-4 border-l-4 border-black font-bold my-4">
              E-mail de Conformidade: app@canta.pro
            </div>
            <p>O reclamante deve enviar a indicação precisa da obra, URL do setlist público, dados de contato e declaração formal de titularidade. Links denunciados preventivamente serão suspensos em até 48 horas caso não haja comprovação de uso legítimo.</p>

            <h2 className="text-2xl font-black uppercase tracking-tight text-black mt-12 mb-6">Cláusula 7 — Limitação de Responsabilidade e SLA</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li><strong>Inexistência de Infalibilidade:</strong> O software em nuvem não é isento de falhas fortuitas ou indisponibilidades.</li>
              <li><strong>Exclusão de Danos:</strong> Não somos responsáveis por perda de cachês, atrasos de shows ou falhas de hardware/conexão durante apresentações ao vivo.</li>
              <li><strong>Teto Indenizatório:</strong> A responsabilidade indenizatória máxima assumida pela plataforma é limitada ao valor correspondente à somatória das mensalidades pagas pelo usuário nos últimos 12 (doze) meses.</li>
            </ul>

            <h2 className="text-2xl font-black uppercase tracking-tight text-black mt-12 mb-6">Cláusula 8 — Lei Aplicável e Foro</h2>
            <ul className="space-y-4 list-disc pl-6">
              <li><strong>Relações de Consumo:</strong> Faculta-se ao usuário consumidor eleger o foro de seu domicílio.</li>
              <li><strong>Relações B2B e Parcerias:</strong> Elege-se de forma exclusiva o foro da Comarca de Bauru / SP para dirimir litígios de natureza comercial.</li>
            </ul>

          </div>
        </article>

      </div>
    </div>
  );
}