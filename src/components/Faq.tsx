"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Faq() {
  const [faqData, setFaqData] = useState<any[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadFaq = async () => {
      const { data } = await supabase
        .from("faq")
        .select("*")
        .order("display_order", { ascending: true });
      if (data) setFaqData(data);
    };
    loadFaq();
  }, []);

  if (faqData.length === 0) return null;

  return (
    <section id="faq" className="py-24 px-6 bg-white border-b-8 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16 text-center">
          Dúvidas?
        </h2>
        
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-8 text-left flex justify-between items-center hover:bg-yellow-400 focus:outline-none transition-colors"
              >
                <span className="font-black text-xl md:text-2xl uppercase tracking-tight pr-4 text-black">
                  {faq.question}
                </span>
                <span className="text-3xl md:text-4xl font-black shrink-0 text-black">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-6 border-t-4 border-black bg-gray-50 text-base md:text-lg font-bold text-gray-800 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}