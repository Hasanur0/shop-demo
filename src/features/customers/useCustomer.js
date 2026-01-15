import { useQuery } from '@tanstack/react-query'
import {  getCustomer } from '../../services/apiCustomers'
import { useParams } from 'react-router-dom'

export default function useCustomer() {
  const { customerId } = useParams()
  const {
    data: customer,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['customer', customerId],
    queryFn: () => getCustomer(customerId),
    retry: false,
  })

  return { isLoading, customer, error }
}
