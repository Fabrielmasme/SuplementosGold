// Configuración de Supabase
const SUPABASE_CONFIG = {
    url: 'https://SuplementosGold.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVnZ3l4c2VqZmdxbXJjdmNnbGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MTg2ODYsImV4cCI6MjA2OTk5NDY4Nn0.jnWy62pnFD6Pqg4JUq2GmD8QsKte41NX40aGBZ4qcgY'
};

// Inicializar cliente de Supabase
const supabaseClient = supabase.createClient(
    SUPABASE_CONFIG.url, 
    SUPABASE_CONFIG.anonKey
);
