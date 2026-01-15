import { useForm } from 'react-hook-form'
import Button from '../../ui/Button'
import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import useAddCustomer from './useAddCustomer'
import Heading from '../../ui/Heading'

function AddCustomerForm({ onCloseModal }) {
  const { register, formState, handleSubmit, reset } = useForm({
    mode: 'onSubmit',
  })
  const { errors } = formState
  const { addCustomer, isAdding } = useAddCustomer()

  const onSubmit = (data) => {
    const customerData = {
      fullName: data.fullName,
      address: data.address,
      phoneNumber: data.phoneNumber || null,
      ornament: {
        name: data.ornamentName,
        purity: data.purity,
        weight: data.weight,
        bookingRate: data.bookingRate,
      },
    }

    addCustomer(customerData, {
      onSuccess: () => {
        reset()
        onCloseModal?.()
      },
    })
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2">Add New Customer</Heading>

      <FormRow label="Name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register('fullName', {
            required: 'Name is required',
          })}
        />
      </FormRow>

      <FormRow label="Address" error={errors?.address?.message}>
        <Input
          type="text"
          id="address"
          {...register('address', {
            required: 'Address is required',
          })}
        />
      </FormRow>

      <FormRow label="Phone Number" error={errors?.phoneNumber?.message}>
        <Input
          type="tel"
          id="phoneNumber"
          {...register('phoneNumber')}
        />
      </FormRow>

      <div className="border-t border-grey-100 dark:border-grey-700 pt-4 mt-2">
        <h3 className="font-semibold text-grey-700 dark:text-grey-200 mb-4">Ornament Details</h3>

        <FormRow label="Ornament Name" error={errors?.ornamentName?.message}>
          <Input
            type="text"
            id="ornamentName"
            {...register('ornamentName', {
              required: 'Ornament name is required',
            })}
          />
        </FormRow>

        <FormRow label="Purity" error={errors?.purity?.message}>
          <Input
            type="text"
            id="purity"
            placeholder="e.g., 22k(916)/KDM"
            {...register('purity', {
              required: 'Purity is required',
            })}
          />
        </FormRow>

        <FormRow label="Weight" error={errors?.weight?.message}>
          <Input
            type="text"
            id="weight"
            placeholder="e.g., 10gm"
            {...register('weight', {
              required: 'Weight is required',
            })}
          />
        </FormRow>

        <FormRow label="Booking Rate" error={errors?.bookingRate?.message}>
          <Input
            type="text"
            id="bookingRate"
            placeholder="e.g., 130000/10gm"
            {...register('bookingRate', {
              required: 'Booking rate is required',
            })}
          />
        </FormRow>
      </div>

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          onClick={() => {
            reset()
            onCloseModal?.()
          }}
          disabled={isAdding}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isAdding}>
          {isAdding ? 'Adding...' : 'Add Customer'}
        </Button>
      </FormRow>
    </Form>
  )
}

export default AddCustomerForm
