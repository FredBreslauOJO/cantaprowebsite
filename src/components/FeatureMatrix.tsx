"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function FeatureMatrix() {
  const [features, setFeatures] = useState<any[]>([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      const { data } = await supabase
        .from("feature_matrix")
        .select("*")
        .order("display_order", { ascending: true });
      if (data) setFeatures(data);
    };
    fetchFeatures();
  }, []);

  const getStyleByText = (text: string) => {
    if (text.includes("Ilimitado") || text.includes("Liberado")) return "text-green-600 font-bold";
    if (text.includes("Máx.")) return "text-red-600 font-bold";
    if (text.includes("Exclusivo PRO")) return "text-black font-black";
    if (text.includes("Bloqueado")) return "text-gray-400 font-normal";
    return "text-gray-800";
  };

  if (features.length === 0) return null;

  return (
    <div className="w-full max-w-6xl mx-auto px-4 mb-16">
      
      {/* 🖥️ VERSÃO DESKTOP: TABELA TRADICIONAL COMPLETA */}
      <div className="hidden md:block w-full overflow-hidden rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <table className="w-full text-left border-separate border-spacing-0 min-w-[600px]">
          <thead>
            <tr className="bg-black text-white uppercase font-black text-sm tracking-wider">
              <th className="p-4 border-r-2 border-black">Funcionalidade</th>
              <th className="p-4 border-r-2 border-black bg-zinc-800 text-center">Plano FREE</th>
              <th className="p-4 border-r-2 border-black bg-zinc-700 text-center">Plano BÁSICO</th>
              <th className="p-4 bg-yellow-400 text-black text-center">Plano PRO</th>
            </tr>
          </thead>
          <tbody className="font-bold text-sm divide-y-2 divide-black bg-white">
            {features.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-r-2 border-black bg-gray-50/50 text-black font-black border-t-2 border-black">{row.feature_name}</td>
                <td className={`p-4 border-r-2 border-black text-center border-t-2 border-black ${getStyleByText(row.plan_free)}`}>{row.plan_free}</td>
                <td className={`p-4 border-r-2 border-black text-center border-t-2 border-black ${getStyleByText(row.plan_basic)}`}>{row.plan_basic}</td>
                <td className={`p-4 text-center bg-yellow-400/5 border-t-2 border-black ${getStyleByText(row.plan_pro)}`}>{row.plan_pro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 📱 VERSÃO MOBILE: RECURSOS EMPILHADOS EM CASCA (ALTÍSSIMA LEGIBILIDADE) */}
      <div className="block md:hidden space-y-4">
        {features.map((row) => (
          <div key={row.id} className="border-4 border-black p-4 bg-white rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="font-black text-base uppercase border-b-2 border-black pb-2 mb-3 text-black tracking-tight">
              {row.feature_name}
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-gray-50 p-2 rounded-xl border-2 border-gray-200">
                <span className="block text-gray-400 font-black text-[10px] uppercase tracking-wider mb-1">Free</span>
                <span className={getStyleByText(row.plan_free)}>{row.plan_free}</span>
              </div>
              <div className="bg-gray-50 p-2 rounded-xl border-2 border-gray-200">
                <span className="block text-gray-500 font-black text-[10px] uppercase tracking-wider mb-1">Básico</span>
                <span className={getStyleByText(row.plan_basic)}>{row.plan_basic}</span>
              </div>
              <div className="bg-yellow-400/10 p-2 rounded-xl border-2 border-yellow-400">
                <span className="block text-yellow-700 font-black text-[10px] uppercase tracking-wider mb-1">Pro</span>
                <span className={getStyleByText(row.plan_pro)}>{row.plan_pro}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}