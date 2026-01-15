import { format } from 'date-fns'
import Table from '../../ui/Table'
import { formatCurrency } from '../../utils/helpers'

function PaymentRow({ payment }) {
  const {
    id,
    amount,
    method,
    transaction_id,
    created_at,
    customer_id,
  } = payment

  return (
    <Table.Row className="hover:bg-grey-50 dark:hover:bg-grey-700/30 transition-colors duration-150">
      <div className="text-sm sm:text-base font-medium text-grey-600 dark:text-grey-400">
        {id}
      </div>
      <div className="text-sm sm:text-base font-semibold text-grey-800 dark:text-grey-100">
        {formatCurrency(amount)}
      </div>
      <div className="text-sm sm:text-base">
        <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium capitalize ${
          method === 'upi' 
            ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' 
            : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
        }`}>
          {method || 'N/A'}
        </span>
      </div>
      <div className="text-sm sm:text-base text-grey-600 dark:text-grey-400 font-mono text-xs">
        {method === 'upi' && transaction_id ? transaction_id : '-'}
      </div>
      <div className="text-sm sm:text-base text-grey-600 dark:text-grey-400">
        {format(new Date(created_at), 'MMM dd, yyyy')}
      </div>
      <div className="text-sm sm:text-base text-grey-500 dark:text-grey-500">
        {format(new Date(created_at), 'p')}
      </div>
      <div></div>
    </Table.Row>
  )
}

export default PaymentRow
