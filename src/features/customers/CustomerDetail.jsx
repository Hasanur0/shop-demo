import CustomerDataBox from './CustomerDataBox'
import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import Tag from '../../ui/Tag'
import ButtonGroup from '../../ui/ButtonGroup'
import Button from '../../ui/Button'
import ButtonText from '../../ui/ButtonText'

import { useMoveBack } from '../../hooks/useMoveBack'
import useCustomer from './useCustomer'
import usePayments from './usePayments'
import Spinner from '../../ui/Spinner'
import { useNavigate } from 'react-router-dom'
import { HiArrowUpOnSquare, HiTrash } from 'react-icons/hi2'
import { useDeleteCustomer } from './useDeleteCustomer'
import Modal from '../../ui/Modal'
import ConfirmDelete from '../../ui/ConfirmDelete'
import Empty from '../../ui/Empty'

function CustomerDetail() {
  const navigate = useNavigate()
  const { customer, isLoading } = useCustomer()
  const { payments, isLoading: isLoadingPayments } = usePayments(customer?.id)
  const { deleteCustomer, isDeleting } = useDeleteCustomer()

  const moveBack = useMoveBack()


  if (isLoading) return <Spinner />
  if (!customer) return <Empty resourceName="customer" />
  const { fullName } = customer
  return (
    <>
      <Row type="horizontal">
        <div className="flex gap-6 items-center">
          <Heading as="h1">{fullName}</Heading>
          
        </div>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <CustomerDataBox customer={customer} payments={payments} isLoadingPayments={isLoadingPayments} />

      {/* <ButtonGroup>
        {status === 'unconfirmed' && (
          <Button onClick={() => navigate(`/checkin/${id}`)}>Check in</Button>
        )}
        {status === 'checked-in' && (
          <Button
            onClick={() => checkout(id)}
            icon={<HiArrowUpOnSquare />}
            disabled={isCheckingOut}
          >
            Check out
          </Button>
        )}
        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete
              resourceName="customer"
              disabled={isDeleting}
              onConfirm={() =>
                deleteCustomer(id, {
                  onSettled: () => {
                    navigate(-1)
                  },
                })
              }
            />
          </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup> */}
    </>
  )
}

export default CustomerDetail
