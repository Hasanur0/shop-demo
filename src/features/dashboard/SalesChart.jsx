import DashboardBox from './DashboardBox'
import Heading from '../../ui/Heading'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useDarkMode } from '../../context/DarkModeContext'
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns'

export default function SalesChart({ customers, numDays }) {
  const { darkMode } = useDarkMode()
  const colors = darkMode
    ? {
        totalSales: { stroke: '#4f46e5', fill: '#4f46e5' },
        extrasSales: { stroke: '#22c55e', fill: '#22c55e' },
        text: '#e5e7eb',
        background: '#18212f',
      }
    : {
        totalSales: { stroke: '#4f46e5', fill: '#c7d2fe' },
        extrasSales: { stroke: '#16a34a', fill: '#dcfce7' },
        text: '#374151',
        background: '#fff',
      }

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays),
    end: new Date(),
  })

  const data = allDates.map((date) => {
    return {
      label: format(date, 'MMM dd'),
      totalSales: customers
        .filter((customer) => isSameDay(date, new Date(customer.created_at)))
        .reduce((acc, cur) => acc + cur.totalPrice, 0),
      extrasSales: customers
        .filter((customer) => isSameDay(date, new Date(customer.created_at)))
        .reduce((acc, cur) => acc + cur.extrasPrice, 0),
    }
  })

  return (
    <DashboardBox className="col-span-full [&_.recharts-cartesian-grid-horizontal_line]:stroke-grey-300 [&_.recharts-cartesian-grid-vertical_line]:stroke-grey-300">
      <Heading as="h2">
        Sales from {format(allDates.at(0), 'MMM dd yyyy')} &mdash;{' '}
        {format(allDates.at(-1), 'MMM dd yyyy')}
      </Heading>
      <ResponsiveContainer height={250} minHeight={200} width="100%">
        <AreaChart data={data}>
          <Tooltip contentStyle={{ backgroundColor: colors.background }} />
          <XAxis
            dataKey="label"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <YAxis
            unit="$"
            tick={{ fill: colors.text }}
            tickLine={{ stroke: colors.text }}
          />
          <CartesianGrid strokeDasharray={4} />
          <Area
            dataKey="totalSales"
            type="monotone"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={2}
            name="Total sales"
            unit="$"
          />
          <Area
            dataKey="extrasSales"
            type="monotone"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={2}
            name="Extra sales"
            unit="$"
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>
  )
}
