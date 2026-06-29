"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "enviando" | "sucesso" | "erro">("idle");

  const handleEnviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("enviando");

    // Dispara a inserção direta na tabela 'contacts' do Supabase
    const { error } = await supabase.from("contacts").insert([
      {
        name: nome,
        email: email,
        message: mensagem,
        status: "novo"
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
    }
  };

  return (
    <div className="min-h-screen bg-yellow-400 py-24 px-6 border-b-8 border-black flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-black drop-shadow-[4px_4px_0px_rgba(255,255,255,1)] leading-none">
            Fale Conosco
          </h1>
          <p className="text-black font-black tracking-widest uppercase text-sm md:text-base mt-3">
            Dúvidas, parcerias ou suporte? Mande a real.
          </p>
        </div>

        <form onSubmit={handleEnviar} className="card-brutal bg-white flex flex-col gap-6 rounded-2xl border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-2">
            <label className="font-black uppercase tracking-widest text-xs text-gray-700">Nome Completo</label>
            <input 
              type="text" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome ou banda" 
              className="border-4 border-black p-4 text-base font-bold focus:outline-none focus:border-yellow-400 transition-colors rounded-xl text-black bg-white"
              required
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-black uppercase tracking-widest text-xs text-gray-700">E-mail</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com" 
              className="border-4 border-black p-4 text-base font-bold focus:outline-none focus:border-yellow-400 transition-colors rounded-xl text-black bg-white"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-black uppercase tracking-widest text-xs text-gray-700">Mensagem</label>
            <textarea 
              rows={4}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Como podemos te ajudar a não dar branco no palco?" 
              className="border-4 border-black p-4 text-base font-bold focus:outline-none focus:border-yellow-400 transition-colors rounded-xl resize-none text-black bg-white"
              required
            ></textarea>
          </div>

          {status === "sucesso" && (
            <div className="bg-green-100 border-4 border-green-600 text-green-900 p-4 font-bold text-sm rounded-xl">
              ✓ Mensagem enviada com sucesso! Ela já está visível no seu painel administrativo.
            </div>
          )}
          {status === "erro" && (
            <div className="bg-red-100 border-4 border-red-600 text-red-900 p-4 font-bold text-sm rounded-xl">
              ❌ Erro ao conectar ao banco. Verifique suas chaves locais ou tente novamente.
            </div>
          )}

          <button type="submit" disabled={status === "enviando"} className="btn-brutal text-xl mt-4 rounded-xl w-full">
            {status === "enviando" ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </div>
  );
}