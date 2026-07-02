import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* LOGO EM SVG BRANCO (MAIS DISCRETO) */}
        <div className="flex items-center">
          <Image 
            src="/CantaProLogo_branco.svg" 
            alt="Canta.Pro Logo" 
            width={130} 
            height={30} 
            className="h-auto opacity-90 hover:opacity-100 transition-opacity"
            priority
          />
        </div>

        {/* INFORMAÇÕES E LINKS EM TAMANHO REDUZIDO (text-xs) */}
        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center md:text-right space-y-1.5">
          <p className="text-gray-400">
            Feito com ❤︎ por{" "}
            <a 
              href="https://ojo-studio.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-400 transition-colors underline underline-offset-4 decoration-2"
            >
              OJO STUDIO
            </a>
          </p>
          <p>CANTA.PRO® é uma Marca Registrada. Todos os direitos reservados</p>
          
          {/* LINKS DE NAVEGAÇÃO DO RODAPÉ */}
          <div className="flex gap-4 justify-center md:justify-end pt-2 text-gray-400 font-bold">
            <a href="/termos" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-white transition-colors">Privacidade</a>
            <a href="mailto:contato@canta.pro" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>

      </div>
    </footer>
  );
}