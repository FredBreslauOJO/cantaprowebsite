export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-black text-4xl tracking-tighter uppercase text-yellow-400">
          CANTA.PRO
        </div>
        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest text-center md:text-right">
          <p>OJO STUDIO EXPERIÊNCIAS DIGITAIS LTDA</p>
          <p>CNPJ: 58.000.000/0001-00</p>
          <div className="flex gap-4 justify-center md:justify-end mt-4">
            <a href="/termos" className="hover:text-white">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-white">Privacidade</a>
            <a href="mailto:contato@canta.pro" className="hover:text-white">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
}