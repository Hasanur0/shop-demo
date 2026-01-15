import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCustomer } from '../../services/apiCustomers'
import toast from 'react-hot-toast'

export default function useAddCustomer() {
  const queryClient = useQueryClient()

  const { mutate: addCustomer, isPending: isAdding } = useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      toast.success('Customer added successfully')
      queryClient.invalidateQueries({
        queryKey: ['customers'],
      })
    },
    onError: (err) => {
      console.error('Add customer error:', err)
      toast.error(err.message || 'There was an error while adding customer')
    },
  })

  return { addCustomer, isAdding }
}
