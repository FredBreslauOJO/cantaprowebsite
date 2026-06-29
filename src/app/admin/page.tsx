"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPanel() {
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState("");
  const [contatos, setContatos] = useState<any[]>([]);
  const [faq, setFaq] = useState<any[]>([]);
  const [matrix, setMatrix] = useState<any[]>([]);
  const [abaAtiva, setAbaAtiva] = useState("contatos");

  const carregarDados = async () => {
    const { data: dadosContatos } = await supabase.from("contacts").select("*").order("created_at", { ascending: false });
    if (dadosContatos) setContatos(dadosContatos);

    const { data: dadosFaq } = await supabase.from("faq").select("*").order("display_order", { ascending: true });
    if (dadosFaq) setFaq(dadosFaq);

    const { data: dadosMatrix } = await supabase.from("feature_matrix").select("*").order("display_order", { ascending: true });
    if (dadosMatrix) setMatrix(dadosMatrix);
  };

  useEffect(() => {
    if (autenticado) carregarDados();
  }, [autenticado]);

  const handleUpdateMatrixRow = async (id: number, campos: any) => {
    await supabase.from("feature_matrix").update(campos).eq("id", id);
  };

  const handleAddMatrixRow = async () => {
    const novaLinha = { feature_name: "Nova Funcionalidade", plan_free: "Não", plan_basic: "Não", plan_pro: "Sim", display_order: matrix.length + 1 };
    const { data } = await supabase.from("feature_matrix").insert([novaLinha]).select();
    if (data) setMatrix([...matrix, data[0]]);
  };

  const handleDeleteMatrixRow = async (id: number) => {
    if (confirm("Deseja mesmo excluir esta linha da tabela?")) {
      await supabase.from("feature_matrix").delete().eq("id", id);
      setMatrix(matrix.filter(row => row.id !== id));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === "canta2026") setAutenticado(true);
    else alert("Senha Incorreta!");
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="card-brutal max-w-md w-full flex flex-col gap-6 text-center rounded-2xl">
          <h1 className="text-4xl font-black uppercase">Área Restrita</h1>
          <input 
            type="password" 
            placeholder="Digite a Senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="border-4 border-black p-4 text-xl text-center font-bold outline-none focus:border-yellow-400 transition-colors rounded-xl"
          />
          <button type="submit" className="btn-brutal text-xl rounded-xl">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12 border-b-8 border-black pb-6">
          <h1 className="text-5xl font-black uppercase tracking-tighter">Painel de Controle</h1>
          <button onClick={() => setAutenticado(false)} className="btn-brutal-outline rounded-xl">Sair</button>
        </div>

        {/* ABAS */}
        <div className="flex gap-4 mb-8 border-b-4 border-black pb-4 overflow-x-auto">
          <button 
            onClick={() => setAbaAtiva("contatos")} 
            className={`font-black text-lg uppercase tracking-widest px-4 py-2 rounded-xl transition-colors ${abaAtiva === "contatos" ? "bg-black text-white" : "hover:bg-yellow-400 text-black"}`}
          >
            Mensagens
          </button>
          <button 
            onClick={() => setAbaAtiva("matrix")} 
            className={`font-black text-lg uppercase tracking-widest px-4 py-2 rounded-xl transition-colors ${abaAtiva === "matrix" ? "bg-black text-white" : "hover:bg-yellow-400 text-black"}`}
          >
            Editar Recursos
          </button>
        </div>

        {/* CONTEÚDO: MENSAGENS */}
        {abaAtiva === "contatos" && (
          <div className="grid gap-6">
            {contatos.length === 0 ? (
              <p className="text-xl font-bold text-gray-400">Nenhuma mensagem recebida ainda.</p>
            ) : (
              contatos.map(c => (
                <div key={c.id} className="card-brutal rounded-2xl">
                  <div className="flex justify-between items-start mb-4 border-b-2 border-black pb-2">
                    <div>
                      <h2 className="text-xl font-black uppercase">{c.name}</h2>
                      <p className="font-bold text-gray-500">{c.email}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold whitespace-pre-wrap">{c.message}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* CONTEÚDO: EDITAR MATRIZ */}
        {abaAtiva === "matrix" && (
          <div className="grid gap-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-black uppercase">Tabela de Planos</h2>
              <button onClick={handleAddMatrixRow} className="btn-brutal !px-4 !py-2 text-sm rounded-xl">
                + Nova Linha
              </button>
            </div>

            <div className="w-full overflow-hidden rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white p-4 space-y-4">
              {matrix.map((row) => (
                <div key={row.id} className="flex flex-col md:flex-row gap-4 items-center border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <input 
                    type="text" 
                    defaultValue={row.feature_name}
                    onBlur={(e) => handleUpdateMatrixRow(row.id, { feature_name: e.target.value })}
                    className="flex-1 border-2 border-black p-2 font-bold text-sm rounded-lg outline-none"
                    placeholder="Funcionalidade"
                  />
                  <input 
                    type="text" 
                    defaultValue={row.plan_free}
                    onBlur={(e) => handleUpdateMatrixRow(row.id, { plan_free: e.target.value })}
                    className="w-full md:w-32 border-2 border-black p-2 font-bold text-sm text-center rounded-lg outline-none"
                    placeholder="Free"
                  />
                  <input 
                    type="text" 
                    defaultValue={row.plan_basic}
                    onBlur={(e) => handleUpdateMatrixRow(row.id, { plan_basic: e.target.value })}
                    className="w-full md:w-32 border-2 border-black p-2 font-bold text-sm text-center rounded-lg outline-none"
                    placeholder="Básico"
                  />
                  <input 
                    type="text" 
                    defaultValue={row.plan_pro}
                    onBlur={(e) => handleUpdateMatrixRow(row.id, { plan_pro: e.target.value })}
                    className="w-full md:w-32 border-2 border-black p-2 font-bold text-sm text-center rounded-lg outline-none"
                    placeholder="Pro"
                  />
                  <input 
                    type="number" 
                    defaultValue={row.display_order}
                    onBlur={(e) => handleUpdateMatrixRow(row.id, { display_order: parseInt(e.target.value) || 0 })}
                    className="w-16 border-2 border-black p-2 font-bold text-sm text-center rounded-lg outline-none"
                  />
                  <button onClick={() => handleDeleteMatrixRow(row.id)} className="text-red-500 font-black text-xs uppercase hover:underline">
                    Excluir
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}