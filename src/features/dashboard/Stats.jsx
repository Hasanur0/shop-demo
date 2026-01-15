import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi'
import Stat from './Stat'
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2'
import { formatCurrency } from '../../utils/helpers'

export default function Stats({
  customers,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  // 1.
  const numCustomers = customers.length

  //   2.
  const sales = customers.reduce((acc, cur) => {
    return (acc += cur.totalPrice)
  }, 0)
  // 3.
  const checkins = confirmedStays.length

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount)

  return (
    <>
      <Stat
        title={'Customers'}
        color={'blue'}
        icon={<HiOutlineBriefcase />}
        value={numCustomers}
      />
      <Stat
        title={'Sales'}
        color={'green'}
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title={'Check ins'}
        color={'indigo'}
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title={'Occupancy rate'}
        color={'yellow'}
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + '%'}
      />
    </>
  )
}
