import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://nartbdifodhhpmttcgur.supabase.co'
const supabaseKey = 'sb_publishable_qlk5lvi6VzzBZWXetJCV3w_dxlXYsdE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
