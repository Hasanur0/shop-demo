import { format, isToday } from 'date-fns'

import Tag from '../../ui/Tag'
import Table from '../../ui/Table'

import { formatCurrency } from '../../utils/helpers'
import { formatDistanceFromNow } from '../../utils/helpers'
import Menus from '../../ui/Menus'
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'

import { useDeleteCustomer } from './useDeleteCustomer'
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import { RxAvatar } from 'react-icons/rx'

function CustomerRow({
  customer: {
    id: customerId,
    created_at,
    fullName,
    phoneNumber,
    payments
  },
}) {
  console.log(customerId)

  const { deleteCustomer, isDeleting } = useDeleteCustomer()
  const statusToTagName = {
    unconfirmed: 'blue',
    'checked-in': 'green',
    'checked-out': 'silver',
  }

  const navigate = useNavigate()

  function handleRowClick(e) {
    // Don't navigate when clicking on menu or buttons inside the row
    const tagName = e.target.tagName.toLowerCase()
    if (tagName === 'button' || tagName === 'svg' || tagName === 'path') return

    navigate(`/customers/${customerId}`)
  }

  return (
    <div 
      onClick={handleRowClick} 
      className="cursor-pointer transition-all duration-200 hover:bg-grey-50 dark:hover:bg-grey-700/50 rounded-md border-b border-grey-100 dark:border-grey-700 last:border-b-0"
    >
      <Table.Row className="hover:bg-transparent">
        <div className="text-sm sm:text-base font-medium text-grey-600 dark:text-grey-400">
          {customerId}
        </div>

        <div className="flex flex-col">
          <span className="text-sm sm:text-base font-semibold text-grey-800 dark:text-grey-100">
            {fullName}
          </span>
        </div>

        <div className="flex items-center">
          <span className="text-sm sm:text-base text-grey-600 dark:text-grey-400">
            {phoneNumber || '-'}
          </span>
        </div>

        <div></div>
        <div></div>
        
        <div className="flex items-center justify-end">
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={customerId} />
              <Menus.List id={customerId}>
                <Menus.Button
                  icon={<HiEye />}
                  onClick={() => navigate(`/customers/${customerId}`)}
                >
                  See details
                </Menus.Button>
              
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>
              <Modal.Window name="delete">
                <ConfirmDelete
                  resourceName="customer"
                  disabled={isDeleting}
                  onConfirm={(onCloseModal) => {
                    deleteCustomer(customerId, {
                      onSuccess: () => {
                        onCloseModal?.()
                      },
                    })
                  }}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
    </div>
  )
}

export default CustomerRow
