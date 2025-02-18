import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://dfooyhhfuncagbyqxvnh.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRmb295aGhmdW5jYWdieXF4dm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMTQ5MTUsImV4cCI6MjA1NDY5MDkxNX0.taehG0Ecd9mRkQoYJoQgJojz3lQN_lmmk7MwM45VG2A";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
