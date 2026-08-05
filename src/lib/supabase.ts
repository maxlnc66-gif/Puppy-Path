import { createClient } from "@supabase/supabase-js";

const getEnv = (key: string) => {
  const metaValue = typeof import.meta !== "undefined" ? import.meta.env?.[key] : undefined;
  if (metaValue) return metaValue;

  if (typeof process !== "undefined" && process.env) {
    return process.env[key];
  }

  return undefined;
};

const supabaseUrl = getEnv("NEXT_PUBLIC_SUPABASE_URL");
const supabaseAnonKey = getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY");

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase environment variables are missing. In Vercel, ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in the project environment.",
  );
}

export const supabase = createClient(supabaseUrl ?? "", supabaseAnonKey ?? "", {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
  },
});
