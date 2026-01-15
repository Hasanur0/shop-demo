import { useMemo } from 'react'
import CustomerRow from './CustomerRow'
import Table from '../../ui/Table'
import Menus from '../../ui/Menus'
import Empty from '../../ui/Empty'
import useCustomers from './useCustomers'
import Spinner from '../../ui/Spinner'
import Pagination from '../../ui/Pagination'

function CustomerTable({ searchById = '', searchByNameOrPhone = '' }) {
  const { customers, isLoading, error, count } = useCustomers()

  // Filter customers based on search queries
  const filteredCustomers = useMemo(() => {
    if (!customers || customers.length === 0) return []

    let filtered = [...customers]

    // Filter by ID/SL No
    if (searchById.trim()) {
      const idQuery = searchById.toLowerCase().trim()
      filtered = filtered.filter((customer) => {
        const id = String(customer.id || '').toLowerCase()
        return id.includes(idQuery)
      })
    }

    // Filter by name or phone number
    if (searchByNameOrPhone.trim()) {
      const namePhoneQuery = searchByNameOrPhone.toLowerCase().trim()
      filtered = filtered.filter((customer) => {
        const name = customer.fullName?.toLowerCase() || ''
        const phone = customer.phoneNumber?.toLowerCase() || ''
        return name.includes(namePhoneQuery) || phone.includes(namePhoneQuery)
      })
    }

    return filtered
  }, [customers, searchById, searchByNameOrPhone])

  if (isLoading) 
    return <Spinner />
  
  if (!customers || customers.length === 0) 
    return <Empty resourceName="customers" />

  if (filteredCustomers.length === 0 && (searchById.trim() || searchByNameOrPhone.trim())) {
    return (
      <div className="text-center py-8">
        <p className="text-grey-500 dark:text-grey-400">
          No customers found matching your search
        </p>
      </div>
    )
  }

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Sl No</div>
          <div>Name</div>
          <div>Phone number</div>
          <div></div>
          <div></div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredCustomers}
          render={(customer) => (
            <CustomerRow key={customer.id} customer={customer} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  )
}

export default CustomerTable
