"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const TICKET_STATUSES = ["Aberto", "Em Andamento", "Resolvido", "Cancelado"];

export default function AdminPanel() {
  const [autenticado, setAutenticado] = useState(false);
  const [senha, setSenha] = useState("");
  const [contatos, setContatos] = useState<any[]>([]);
  const [faq, setFaq] = useState<any[]>([]);
  const [matrix, setMatrix] = useState<any[]>([]);
  const [abaAtiva, setAbaAtiva] = useState("contatos");

  // Filtros de Tickets
  const [filtroStatus, setFiltroStatus] = useState("Todos");
  const [filtroAssunto, setFiltroAssunto] = useState("Todos");

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

  // ==========================================
  // FUNÇÕES DA TABELA DE PLANOS (MATRIX)
  // ==========================================
  const handleUpdateMatrixRow = async (id: number, campos: any) => {
    await supabase.from("feature_matrix").update(campos).eq("id", id);
    setMatrix(matrix.map(m => m.id === id ? { ...m, ...campos } : m));
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

  // ==========================================
  // FUNÇÕES DO FAQ
  // ==========================================
  const handleUpdateFaq = async (id: number, campos: any) => {
    await supabase.from("faq").update(campos).eq("id", id);
    setFaq(faq.map(f => f.id === id ? { ...f, ...campos } : f));
  };

  const handleAddFaq = async () => {
    const novoFaq = { question: "Nova Dúvida?", answer: "Resposta detalhada aqui.", display_order: faq.length + 1 };
    const { data } = await supabase.from("faq").insert([novoFaq]).select();
    if (data) setFaq([...faq, data[0]]);
  };

  const handleDeleteFaq = async (id: number) => {
    if (confirm("Deseja mesmo excluir esta pergunta do FAQ?")) {
      await supabase.from("faq").delete().eq("id", id);
      setFaq(faq.filter(f => f.id !== id));
    }
  };

  // ==========================================
  // FUNÇÕES DE TICKETS
  // ==========================================
  const handleUpdateTicketStatus = async (id: number, newStatus: string) => {
    await supabase.from("contacts").update({ status: newStatus }).eq("id", id);
    setContatos(contatos.map(c => c.id === id ? { ...c, status: newStatus } : c));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (senha === "Afa#fvg08") setAutenticado(true);
    else alert("Senha Incorreta!");
  };

  const ticketsFiltrados = contatos.filter(c => {
    const matchStatus = filtroStatus === "Todos" || c.status === filtroStatus;
    const matchAssunto = filtroAssunto === "Todos" || c.subject === filtroAssunto;
    return matchStatus && matchAssunto;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aberto": return "bg-red-100 text-red-800 border-red-800";
      case "Em Andamento": return "bg-yellow-100 text-yellow-800 border-yellow-800";
      case "Resolvido": return "bg-green-100 text-green-800 border-green-800";
      case "Cancelado": return "bg-gray-100 text-gray-800 border-gray-800";
      default: return "bg-white text-black border-black";
    }
  };

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="card-brutal max-w-md w-full flex flex-col gap-6 text-center rounded-2xl">
          <h1 className="text-4xl font-black uppercase">Área Restrita</h1>
          <input 
            type="password" placeholder="Digite a Senha" value={senha} onChange={(e) => setSenha(e.target.value)}
            className="border-4 border-black p-4 text-xl text-center font-bold outline-none focus:border-yellow-400 rounded-xl"
          />
          <button type="submit" className="btn-brutal text-xl rounded-xl">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* CABEÇALHO DO PAINEL */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tight">Painel de Controle</h1>
            <p className="text-gray-500 font-bold">Gerencie o conteúdo institucional e Helpdesk</p>
          </div>
          
          <div className="flex border-4 border-black rounded-xl overflow-x-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white font-black text-sm uppercase shrink-0">
            <button onClick={() => setAbaAtiva("faq")} className={`px-6 py-3 whitespace-nowrap border-r-4 border-black transition-colors ${abaAtiva === "faq" ? "bg-black text-white" : "hover:bg-yellow-400 text-black"}`}>FAQ</button>
            <button onClick={() => setAbaAtiva("matrix")} className={`px-6 py-3 whitespace-nowrap border-r-4 border-black transition-colors ${abaAtiva === "matrix" ? "bg-black text-white" : "hover:bg-yellow-400 text-black"}`}>Planos</button>
            <button onClick={() => setAbaAtiva("contatos")} className={`px-6 py-3 whitespace-nowrap transition-colors ${abaAtiva === "contatos" ? "bg-black text-white" : "hover:bg-yellow-400 text-black"}`}>Tickets ({contatos.length})</button>
          </div>
        </div>

        {/* ========================================== */}
        {/* ABA: TICKETS (HELPDESK) */}
        {/* ========================================== */}
        {abaAtiva === "contatos" && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-black uppercase">Helpdesk</h2>
              <div className="flex gap-4 w-full md:w-auto">
                <select value={filtroStatus} onChange={e => setFiltroStatus(e.target.value)} className="border-2 border-black p-2 font-bold text-sm rounded-lg flex-1">
                  <option value="Todos">Todos os Status</option>
                  {TICKET_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <select value={filtroAssunto} onChange={e => setFiltroAssunto(e.target.value)} className="border-2 border-black p-2 font-bold text-sm rounded-lg flex-1">
                  <option value="Todos">Todos os Assuntos</option>
                  {Array.from(new Set(contatos.map(c => c.subject || "Outros"))).map(s => <option key={s as string} value={s as string}>{s as string}</option>)}
                </select>
              </div>
            </div>

            <div className="grid gap-6">
              {ticketsFiltrados.length === 0 ? (
                <p className="text-xl font-bold text-gray-400 text-center py-12">Nenhum ticket encontrado.</p>
              ) : (
                ticketsFiltrados.map(c => (
                  <div key={c.id} className="card-brutal rounded-2xl bg-white flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-1 w-full">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 border-2 text-xs font-black uppercase tracking-widest rounded-full ${getStatusColor(c.status)}`}>
                          {c.status || "Novo"}
                        </span>
                        <span className="text-xs font-bold text-gray-400">{new Date(c.created_at).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <h3 className="text-xl font-black uppercase text-black">{c.name}</h3>
                      <p className="font-bold text-sm text-blue-600 mb-4 hover:underline"><a href={`mailto:${c.email}`}>{c.email}</a></p>
                      <div className="bg-gray-50 border-2 border-gray-200 p-4 rounded-xl">
                        <p className="text-xs font-black uppercase text-gray-500 mb-2 border-b-2 border-gray-200 pb-1">Assunto: {c.subject || "Outros"}</p>
                        <p className="text-base font-bold whitespace-pre-wrap text-gray-800">{c.message}</p>
                      </div>
                    </div>
                    
                    <div className="w-full md:w-48 shrink-0 flex flex-col gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Alterar Status</label>
                      <select 
                        value={c.status || "Aberto"} 
                        onChange={(e) => handleUpdateTicketStatus(c.id, e.target.value)}
                        className="w-full border-2 border-black p-3 font-bold text-sm rounded-xl outline-none focus:border-yellow-400 cursor-pointer"
                      >
                        {TICKET_STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <a href={`mailto:${c.email}?subject=RE: ${c.subject} - CANTA.PRO`} className="btn-brutal-outline text-center text-sm !px-4 !py-3 rounded-xl mt-2">
                        Responder Email
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* ========================================== */}
        {/* ABA: PLANOS (FEATURE MATRIX) */}
        {/* ========================================== */}
        {abaAtiva === "matrix" && (
           <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex justify-between items-center bg-white p-4 border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl font-black uppercase">Tabela de Planos</h2>
                <button onClick={handleAddMatrixRow} className="btn-brutal !px-4 !py-2 text-sm rounded-xl">
                  + Adicionar Linha
                </button>
              </div>
              
              <div className="grid gap-4">
                {matrix.map(m => (
                  <div key={m.id} className="card-brutal p-6 rounded-2xl bg-white grid md:grid-cols-5 gap-4 items-end">
                    <div className="md:col-span-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Funcionalidade</label>
                      <input 
                        type="text" value={m.feature_name} 
                        onChange={(e) => handleUpdateMatrixRow(m.id, { feature_name: e.target.value })}
                        className="w-full border-2 border-black p-3 font-bold text-sm rounded-xl outline-none focus:border-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Free</label>
                      <input 
                        type="text" value={m.plan_free} 
                        onChange={(e) => handleUpdateMatrixRow(m.id, { plan_free: e.target.value })}
                        className="w-full border-2 border-black p-3 font-bold text-sm rounded-xl outline-none focus:border-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Basic</label>
                      <input 
                        type="text" value={m.plan_basic} 
                        onChange={(e) => handleUpdateMatrixRow(m.id, { plan_basic: e.target.value })}
                        className="w-full border-2 border-black p-3 font-bold text-sm rounded-xl outline-none focus:border-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Pro</label>
                      <input 
                        type="text" value={m.plan_pro} 
                        onChange={(e) => handleUpdateMatrixRow(m.id, { plan_pro: e.target.value })}
                        className="w-full border-2 border-black p-3 font-bold text-sm rounded-xl outline-none focus:border-yellow-400"
                      />
                    </div>
                    <button onClick={() => handleDeleteMatrixRow(m.id)} className="md:col-span-5 text-red-600 font-bold text-sm text-right hover:underline mt-2">
                      Excluir Linha
                    </button>
                  </div>
                ))}
              </div>
           </div>
        )}

        {/* ========================================== */}
        {/* ABA: FAQ */}
        {/* ========================================== */}
        {abaAtiva === "faq" && (
           <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex justify-between items-center bg-white p-4 border-4 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl font-black uppercase">Gerenciador de FAQ</h2>
                <button onClick={handleAddFaq} className="btn-brutal !px-4 !py-2 text-sm rounded-xl">
                  + Nova Pergunta
                </button>
              </div>

              <div className="grid gap-6">
                {faq.map(f => (
                  <div key={f.id} className="card-brutal p-6 rounded-2xl bg-white flex flex-col gap-4">
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Pergunta</label>
                      <input 
                        type="text" value={f.question} 
                        onChange={(e) => handleUpdateFaq(f.id, { question: e.target.value })}
                        className="w-full border-2 border-black p-3 font-bold text-lg rounded-xl outline-none focus:border-yellow-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500 block mb-1">Resposta</label>
                      <textarea 
                        rows={3} value={f.answer} 
                        onChange={(e) => handleUpdateFaq(f.id, { answer: e.target.value })}
                        className="w-full border-2 border-black p-3 font-bold text-base rounded-xl outline-none focus:border-yellow-400 resize-none"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-500">Ordem de Exibição:</label>
                        <input 
                          type="number" value={f.display_order} 
                          onChange={(e) => handleUpdateFaq(f.id, { display_order: parseInt(e.target.value) || 0 })}
                          className="w-20 border-2 border-black p-1 text-center font-bold text-sm rounded-lg outline-none focus:border-yellow-400"
                        />
                      </div>
                      <button onClick={() => handleDeleteFaq(f.id)} className="text-red-600 font-bold text-sm hover:underline">
                        Excluir Pergunta
                      </button>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        )}

      </div>
    </div>
  );
}