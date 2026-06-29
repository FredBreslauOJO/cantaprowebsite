import { createClient } from '@supabase/supabase-js';

// Se a chave vier vazia por erro de digitação, usamos um fallback estruturado para o app não crashar
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://afkpumfjsgzrnhzlwwgg.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholderKey';

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn(
    "⚠️ CANTA.PRO WARNING: A chave secreta não foi lida do arquivo .env.local.\n" +
    "Verifique se existem espaços em volta do '=' no seu arquivo de configuração."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);