import { useQuery } from '@tanstack/react-query'
import { getPayments } from '../../services/apiPayments'

export default function usePayments(customerId) {
  const {
    data: payments,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['payments', customerId],
    queryFn: () => getPayments(customerId),
    enabled: !!customerId,
    retry: false,
  })

  return { isLoading, payments, error }
}
