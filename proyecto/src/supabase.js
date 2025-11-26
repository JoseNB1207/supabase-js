import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://vpheiwjyyoaalsnggihx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwaGVpd2p5eW9hYWxzbmdnaWh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDk2MTcsImV4cCI6MjA3ODAyNTYxN30.kYkbZaME9UyFO5W86lvEJpHi7YH6mOz9DESi2ebiAgw';
export const supabase = createClient(supabaseUrl, supabaseKey);