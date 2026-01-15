import { useQuery } from '@tanstack/react-query'
import { subDays } from 'date-fns'
import { useSearchParams } from 'react-router-dom'
import { getBookingsAfterDate } from '../../services/apiCustomers'
export default function useRecentBookings() {
  const [searchParams] = useSearchParams()
  const numDays = !searchParams.get('last')
    ? 7
    : Number(searchParams.get('last'))

  const queryDate = subDays(new Date(), numDays).toISOString()

  const { isPending: isLoading, data: customers } = useQuery({
    queryKey: ['customers', `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  })
  return {
    isLoading,
    customers,
  }
}
