import { createClient } from '@supabase/supabase-js'

// NOTE: If you already have a Supabase client in your project (e.g. utils/supabase/client.ts),
// import from there instead and delete this file.

const supabaseUrl  = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey  = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)