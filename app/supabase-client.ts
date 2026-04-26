import {createClient} from '@supabase/supabase-js';
//import {supabase} from '@supabase/supabase-js'

const supabaseUrl = "https://cgnrxgtoatqbrtimhcla.supabase.co";
const supabaseKey = "sb_publishable_GMtEPoV4XIgxxdB9WcsJnQ_AuvII4dW";

export const supabase = createClient(supabaseUrl, supabaseKey);