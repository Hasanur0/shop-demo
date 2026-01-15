import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as apiCustomers from '../../services/apiCustomers'
import toast from 'react-hot-toast'

export function useDeleteCustomer() {
  const queryClient = useQueryClient()

  const { mutate: deleteCustomer, isPending: isDeleting } = useMutation({
    mutationFn: async (id) => {
      console.log('useDeleteCustomer: Deleting customer with id:', id)
      console.log('deleteCustomer function:', apiCustomers.deleteCustomer)
      return await apiCustomers.deleteCustomer(id)
    },
    onSuccess: () => {
      toast.success('Customer successfully deleted')
      queryClient.invalidateQueries({
        queryKey: ['customers'],
      })
    },
    onError: (error) => {
      console.error('Delete customer error:', error)
      console.error('Error stack:', error.stack)
      toast.error(error.message || 'There was an error while deleting customer')
    },
  })

  return { deleteCustomer, isDeleting }
}
