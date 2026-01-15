import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPayment } from '../../services/apiPayments'
import toast from 'react-hot-toast'

export default function useAddPayment() {
  const queryClient = useQueryClient()

  const { mutate: addPayment, isPending: isAdding } = useMutation({
    mutationFn: createPayment,
    onSuccess: (data, variables) => {
      toast.success('Payment added successfully')
      // Handle both array and single object responses
      const customerId = Array.isArray(data) ? data[0]?.customer_id : data?.customer_id
      if (customerId) {
        queryClient.invalidateQueries({
          queryKey: ['payments', customerId],
        })
      }
    },
    onError: (err) => {
      console.error('Add payment error:', err)
      toast.error(err.message || 'There was an error while adding payment')
    },
  })

  return { addPayment, isAdding }
}
