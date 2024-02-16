  import { createClient} from '@supabase/supabase-js'

  


const supabaseUrl = 'https://janbwnvcsnjlwlxweqwp.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphbmJ3bnZjc25qbHdseHdlcXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3MjU0NzYsImV4cCI6MjAyMjMwMTQ3Nn0.gKXsRumQtEwlmXltAbAO1kf5LMhAvoYAtITNdu8GMUw';

export const supabase = createClient(supabaseUrl, supabaseKey);
  
