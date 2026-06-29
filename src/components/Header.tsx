import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b-8 border-black z-50">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="/" className="hover:scale-105 transition-transform">
          <Image 
            src="/CantaProLogo.svg" 
            alt="Canta.Pro Logo" 
            width={180} 
            height={40} 
            priority
          />
        </a>
        <nav className="hidden md:flex gap-8 font-black text-base uppercase tracking-widest">
          <a href="/#features" className="hover:text-yellow-500 transition-colors">Recursos</a>
          <a href="/#pricing" className="hover:text-yellow-500 transition-colors">Planos</a>
          <a href="/#faq" className="hover:text-yellow-500 transition-colors">FAQ</a>
          <a href="/tutorial" className="hover:text-yellow-500 transition-colors">Tutorial</a>
        </nav>
        <a href="https://app.canta.pro" className="btn-brutal text-sm !px-6 !py-3 hidden md:block">
          Entrar
        </a>
      </div>
    </header>
  );
}