import { useState } from 'react'
import CustomerTable from '../features/customers/CustomerTable'
import CustomerTableOperations from '../features/customers/CustomerTableOperations'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import Modal from '../ui/Modal'
import Button from '../ui/Button'
import AddCustomerForm from '../features/customers/AddCustomerForm'
import Input from '../ui/Input'
import { HiPlus, HiMagnifyingGlass } from 'react-icons/hi2'

function Customers() {
  const [searchById, setSearchById] = useState('')
  const [searchByNameOrPhone, setSearchByNameOrPhone] = useState('')

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Customers</Heading>
        <div className="flex items-center gap-3">
          <div className="relative">
            <HiMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grey-400 dark:text-grey-500 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by ID..."
              value={searchById}
              onChange={(e) => setSearchById(e.target.value)}
              className="pl-10 pr-4 w-40 sm:w-48"
            />
          </div>
          <div className="relative">
            <HiMagnifyingGlass className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grey-400 dark:text-grey-500 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search by name or phone..."
              value={searchByNameOrPhone}
              onChange={(e) => setSearchByNameOrPhone(e.target.value)}
              className="pl-10 pr-4 w-48 sm:w-64"
            />
          </div>
          <Modal>
            <Modal.Open opens="add-customer">
              <Button size="medium">
                <HiPlus className="inline-block mr-1 text-lg" />
                Add Customer
              </Button>
            </Modal.Open>
            <Modal.Window name="add-customer">
              <AddCustomerForm />
            </Modal.Window>
          </Modal>
        </div>
        {/* <CustomerTableOperations /> */}
      </Row>
      <CustomerTable searchById={searchById} searchByNameOrPhone={searchByNameOrPhone} />
    </>
  )
}

export default Customers
