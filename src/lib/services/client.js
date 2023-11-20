const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = 'https://jtjqaoakgnhcwspvtygj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0anFhb2FrZ25oY3dzcHZ0eWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNzEzNTIsImV4cCI6MjAxMzc0NzM1Mn0.NBVrYjP11LH2WfhCfq_GQiRNM_j-tbD6BOxkUohRskQ';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;