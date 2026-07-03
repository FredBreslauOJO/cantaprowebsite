"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

const ASSUNTOS = [
  "Dúvida Geral",
  "Reportar um Problema (Bug)",
  "Dúvidas sobre Cobrança",
  "Problemas com a Conta",
  "Programa de Parceria",
  "Imprensa e Comunicação",
  "Outros"
];

export default function ContatoPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState(ASSUNTOS[0]);
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "enviando" | "sucesso" | "erro">("idle");

  // Puxa o assunto da URL se existir (ex: /contato?assunto=Programa de Parceria)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const subjectParam = urlParams.get("assunto");
      if (subjectParam && ASSUNTOS.includes(subjectParam)) {
        setAssunto(subjectParam);
      }
    }
  }, []);

  const handleEnviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("enviando");

    const { error } = await supabase.from("contacts").insert([
      {
        name: nome,
        email: email,
        subject: assunto,
        message: mensagem,
        status: "Aberto" // Mudando para a nomenclatura de Tickets
      }
    ]);

    if (error) {
      console.error(error);
      setStatus("erro");
    } else {
      setStatus("sucesso");
      setNome("");
      setEmail("");
      setMensagem("");
      setAssunto(ASSUNTOS[0]);
    }
  };

  return (
    <div className="min-h-screen bg-yellow-400 py-24 px-6 border-b-8 border-black flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-black text-white border-4 border-black font-black text-xs uppercase tracking-widest px-4 py-1 mb-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]">
            Canal Direto
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] leading-none">
            Fale Conosco
          </h1>
          <p className="text-black font-black tracking-widest uppercase text-sm md:text-base mt-3">
            Dúvidas, parcerias ou problemas? Abra um chamado abaixo.
          </p>
        </div>

        <form onSubmit={handleEnviar} className="card-brutal bg-white flex flex-col gap-6 rounded-2xl border-4 border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          
          <div className="flex flex-col gap-2">
            <label className="font-black uppercase tracking-widest text-xs text-gray-700">Seu Nome / Nome da Banda</label>
            <input 
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Ex: Fred Breslau" 
              className="border-4 border-black p-4 text-base font-bold focus:outline-none focus:border-yellow-400 transition-colors rounded-xl text-black bg-white"
              required
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-black uppercase tracking-widest text-xs text-gray-700">E-mail de Contato</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com" 
                className="border-4 border-black p-4 text-base font-bold focus:outline-none focus:border-yellow-400 transition-colors rounded-xl text-black bg-white w-full"
                required
              />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <label className="font-black uppercase tracking-widest text-xs text-gray-700">Assunto</label>
              <select 
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
                className="border-4 border-black p-4 text-base font-bold focus:outline-none focus:border-yellow-400 transition-colors rounded-xl text-black bg-white w-full appearance-none cursor-pointer"
                required
              >
                {ASSUNTOS.map(ass => (
                  <option key={ass} value={ass}>{ass}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-black uppercase tracking-widest text-xs text-gray-700">Mensagem / Detalhes</label>
            <textarea 
              rows={5}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Descreva seu problema, dúvida ou proposta de parceria..." 
              className="border-4 border-black p-4 text-base font-bold focus:outline-none focus:border-yellow-400 transition-colors rounded-xl resize-none text-black bg-white"
              required
            ></textarea>
          </div>

          {status === "sucesso" && (
            <div className="bg-green-100 border-4 border-green-600 text-green-900 p-4 font-bold text-sm rounded-xl">
              ✓ Chamado aberto com sucesso! Nosso suporte vai te responder o quanto antes.
            </div>
          )}
          {status === "erro" && (
            <div className="bg-red-100 border-4 border-red-600 text-red-900 p-4 font-bold text-sm rounded-xl">
              ❌ Erro de conexão com o banco de dados. Tente novamente em alguns segundos.
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === "enviando"} 
            className="btn-brutal text-xl mt-2 rounded-xl w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "enviando" ? "Processando..." : "Abrir Chamado"}
          </button>
        </form>
      </div>
    </div>
  );
}