import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://iwwezecryhslyuwysicj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3d2V6ZWNyeWhzbHl1d3lzaWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ5NjI5NTQsImV4cCI6MjA0MDUzODk1NH0.3T2m_WtzLt0RutTzBvPYO7tDcDMpwKY6eMkQTFKufLA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
