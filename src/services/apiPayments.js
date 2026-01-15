import supabase from './supabase'

export async function getPayments(id) {
    const { data, error } = await supabase
      .from('Payments')
      .select('*')
      .eq('customer_id', id)
  
    if (error) {
      console.error(error)
      throw new Error('Booking not found')
    }
  
    return data
  }

export async function createPayment(newPayment) {
  const { data, error } = await supabase
    .from('Payments')
    .insert([newPayment])
    .select()
    // .single()

  if (error) {
    console.error(error)
    throw new Error('Payment could not be created')
  }

  return data
}