import { createClient } from '@/lib/supabase'

export const loadData = async function(database){
    const supabase = createClient()

        
    let { data , error } = await supabase.from(database).select()

    if(error) 
    {
      console.log(error)
      throw new Error("Error while fetching data from database.");
      
    }

    return data;
  }