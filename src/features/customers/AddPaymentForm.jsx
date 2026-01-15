import { useForm, Controller } from 'react-hook-form'
import Button from '../../ui/Button'
import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import Select from '../../ui/Select'
import useAddPayment from './useAddPayment'
import Heading from '../../ui/Heading'

function AddPaymentForm({ customerId, onCloseModal }) {
  const { register, formState, handleSubmit, watch, reset, control } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })
  const { errors } = formState
  const { addPayment, isAdding } = useAddPayment()

  const method = watch('method')

  const onSubmit = (data) => {
    // Ensure customer_id is always included
    if (!customerId) {
      console.error('Customer ID is missing')
      return
    }

    const paymentData = {
      customer_id: customerId,
      amount: parseFloat(data.amount),
    }

    // Only add method if provided
    if (data.method && data.method !== '') {
      paymentData.method = data.method
    }

    // Add transaction_id if method is UPI (required)
    if (data.method === 'upi') {
      paymentData.transaction_id = data.transaction_id?.trim() || null
    }

    addPayment(paymentData, {
      onSuccess: () => {
        reset()
        onCloseModal?.()
      },
    })
  }

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2">Add Payment</Heading>

      <FormRow label="Amount" error={errors?.amount?.message}>
        <Input
          type="number"
          id="amount"
          step="0.01"
          min="0.01"
          {...register('amount', {
            validate: (value) => {
              // Handle required check
              if (!value || value === '' || value === null || value === undefined) {
                return 'Amount is required'
              }
              // Convert to number
              const numValue = Number(value)
              // Check if valid number
              if (isNaN(numValue) || !isFinite(numValue)) {
                return 'Please enter a valid number'
              }
              // Check if greater than 0
              if (numValue <= 0) {
                return 'Amount must be greater than 0'
              }
              return true
            },
          })}
        />
      </FormRow>

      <FormRow label="Method" error={errors?.method?.message}>
        <Controller
          name="method"
          control={control}
          render={({ field }) => (
            <Select
              id="method"
              options={[
                { value: '', label: 'Select method...' },
                { value: 'cash', label: 'Cash' },
                { value: 'upi', label: 'UPI' },
              ]}
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </FormRow>

      {method === 'upi' && (
        <FormRow label="Transaction ID" error={errors?.transaction_id?.message}>
          <Input
            type="text"
            id="transaction_id"
            {...register('transaction_id', {
              required: method === 'upi' ? 'Transaction ID is required for UPI payments' : false,
              validate: (value) => {
                if (method === 'upi' && (!value || value.trim() === '')) {
                  return 'Transaction ID is required for UPI payments'
                }
                return true
              },
            })}
          />
        </FormRow>
      )}

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
          {isAdding ? 'Adding...' : 'Add Payment'}
        </Button>
      </FormRow>
    </Form>
  )
}

export default AddPaymentForm
