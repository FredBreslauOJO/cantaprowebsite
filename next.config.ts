import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Libera o IP da sua rede local e o localhost para o WebSocket funcionar 100%
  allowedDevOrigins: ['192.168.2.199', 'localhost:3000'],
  
  // Nota: Se o terminal reclamar que deve ser dentro de "experimental", use assim:
  // experimental: { allowedDevOrigins: ['192.168.2.199', 'localhost:3000'] }
};

export default nextConfig;