"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X, LogIn, Instagram } from "lucide-react";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white border-b-8 border-black z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* LOGO DO CANTA.PRO */}
        <a href="/" className="hover:scale-105 transition-transform flex items-center shrink-0">
          <Image 
            src="/CantaProLogo.svg" 
            alt="Canta.Pro Logo" 
            width={180} 
            height={40} 
            className="h-auto w-32 md:w-44"
            priority 
          />
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 font-black text-sm lg:text-base uppercase tracking-widest">
          <a href="/#features" className="hover:text-yellow-500 transition-colors">Recursos</a>
          <a href="/#pricing" className="hover:text-yellow-500 transition-colors">Planos</a>
          <a href="/#faq" className="hover:text-yellow-500 transition-colors">FAQ</a>
          <a href="/tutorial" className="hover:text-yellow-500 transition-colors">Tutorial</a>
          <a href="/contato" className="hover:text-yellow-500 transition-colors">Contato</a>
          <a href="https://www.instagram.com/canta.pro.app" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors text-black border-l-2 border-gray-200 pl-4 lg:pl-8">
            <Instagram size={24} />
          </a>
        </nav>

        {/* BOTÃO ENTRAR DESKTOP (Corrigido para não quebrar) */}
        <div className="hidden md:block shrink-0 ml-4">
          <a href="https://app.canta.pro" className="btn-brutal text-sm !px-4 lg:!px-6 !py-3 whitespace-nowrap">
            Entrar no App
          </a>
        </div>

        {/* BOTÃO DO MENU HAMBÚRGUER (MOBILE) */}
        <button 
          onClick={() => setMenuAberto(!menuAberto)}
          className="block md:hidden bg-black text-white p-3 border-2 border-black active:translate-y-0.5 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0"
          aria-label="Toggle Menu"
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENU RETRÁTIL MOBILE */}
      {menuAberto && (
        <div className="absolute top-24 left-0 w-full bg-yellow-400 border-b-8 border-black flex flex-col p-6 gap-6 z-40 md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          <nav className="flex flex-col gap-4 font-black text-xl uppercase tracking-wider text-black">
            <a href="/#features" onClick={() => setMenuAberto(false)} className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg">Recursos</a>
            <a href="/#pricing" onClick={() => setMenuAberto(false)} className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg">Planos</a>
            <a href="/#faq" onClick={() => setMenuAberto(false)} className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg">FAQ</a>
            <a href="/tutorial" onClick={() => setMenuAberto(false)} className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg">Tutorial</a>
            <a href="/contato" onClick={() => setMenuAberto(false)} className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg">Contato</a>
            <a href="https://www.instagram.com/canta.pro.app" target="_blank" rel="noopener noreferrer" className="border-b-2 border-black pb-2 hover:bg-black hover:text-yellow-400 px-2 py-1 transition-colors rounded-lg flex items-center gap-2">
              <Instagram size={24} /> Instagram
            </a>
          </nav>
          
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