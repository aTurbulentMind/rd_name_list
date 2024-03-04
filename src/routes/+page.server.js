import { supabase } from "$lib/supabaseClient";

export async function load() {
  try {
    const { data: mainData, mainError } = await supabase.from('main').select();
    const { data: rstrData, rstrError } = await supabase.from('rstr').select();
    const { data: detailsData, detailsError } = await supabase.from('details').select();

    if (mainError || rstrError || detailsError) {
      throw mainError || rstrError || detailsError;
    }

    return {
      main: mainData ?? [],
      rstr: rstrData ?? [],
      details: detailsData ?? [],
    };
    
  } catch (error) {
    console.error('Error fetching data: ', error);
    return {
      main: [],
      rstr: [],
      details: [],
    };
  }
}