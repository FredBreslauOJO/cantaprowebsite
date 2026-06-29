import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "CANTA.PRO | O Fim da Dúvida no Palco",
  description: "Organize setlists, letras com timecode e sincronize sua banda no palco. Nunca mais dê branco na letra.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-black pt-24`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}