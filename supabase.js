// ⚠️ IMPORTANTE: SUBSTITUA COM SUAS CREDENCIAIS DO SUPABASE
const SUPABASE_URL = 'https://brrnacvnwpuvgxnbrczl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJycm5hY3Zud3B1dmd4bmJyY3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3ODg5NjgsImV4cCI6MjA4MDM2NDk2OH0.gAT_X2Z4v8xW_MTMi9R6t2V2AWVjz8l--cefSYAiSzY';

// Criar cliente Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);