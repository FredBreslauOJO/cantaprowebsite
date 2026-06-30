"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, LogIn } from "lucide-react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white border-b-8 border-black z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO DO CANTA.PRO */}
        <a href="/" className="hover:scale-105 transition-transform flex items-center">
          <Image 
            src="/CantaProLogo.svg" 
            alt="Canta.Pro Logo" 
            width={180} 
            height={40} 
            className="h-auto"
            priority 
          />
        </a>

        {/* NAVEGAÇÃO DESKTOP (Fica oculta no mobile) */}
        <nav className="hidden md:flex gap-8 font-black text-base uppercase tracking-widest">
          <a href="/#features" className="hover:text-yellow-500 transition-colors">Recursos</a>
          <a href="/#pricing" className="hover:text-yellow-500 transition-colors">Planos</a>
          <a href="/#faq" className="hover:text-yellow-500 transition-colors">FAQ</a>
          <a href="/tutorial" className="hover:text-yellow-500 transition-colors">Tutorial</a>
          <a href="/contato" className="hover:text-yellow-500 transition-colors">Contato</a>
        </nav>

        {/* BOTÃO ENTRAR DESKTOP */}
        <div className="hidden md:block">
          <a href="https://app.canta.pro" className="btn-brutal text-sm !px-6 !py-3">
            Entrar no App
          </a>
        </div>

        {/* BOTÃO DO MENU HAMBÚRGUER (Aparece apenas no mobile) */}
        <button 
          onClick={() => setMenuAberto(!menuAberto)}
          className="block md:hidden bg-black text-white p-3 border-2 border-black active:translate-y-0.5 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          aria-label="Toggle Menu"
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU RETRÁTIL MOBILE (ESTILO BRUTALISTA) */}
      {menuAberto && (
        <div className="absolute top-24 left-0 w-full bg-yellow-400 border-b-8 border-black flex flex-col p-6 gap-6 z-40 md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-4 font-black text-xl uppercase tracking-wider text-black">
            <a href="/#features" onClick={() => setMenuAberto(false)} className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg">Recursos</a>
            <a href="/#pricing" onClick={() => setMenuAberto(false)} className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg">Planos</a>
            <a href="/#faq" onClick={() => setMenuAberto(false)} className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg">FAQ</a>
            <a href="/tutorial" onClick={() => setMenuAberto(false)} className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg">Tutorial</a>
            <a href="/contato" onClick={() => setMenuAberto(false)} className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg">Contato</a>
          </nav>
          
          {/* LINK MÁXIMO DE ACESSO AO APP NO MOBILE */}
          <a 
            href="https://app.canta.pro" 
            className="btn-brutal w-full text-center text-base flex items-center justify-center gap-2 !bg-black !text-white hover:!bg-white hover:!text-black rounded-xl"
          >
            <LogIn size={20} /> Abrir o Aplicativo
          </a>
        </div>
      )}
    </header>
  );
}