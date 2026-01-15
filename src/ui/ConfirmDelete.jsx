import Button from './Button'
import Heading from './Heading'

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm(onCloseModal)
    }
  }

  return (
    <div className="w-[40rem] flex flex-col gap-3 [&_p]:text-grey-500 dark:[&_p]:text-grey-400 [&_p]:mb-3 [&_div]:flex [&_div]:justify-end [&_div]:gap-3">
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" onClick={handleConfirm} disabled={disabled}>
          Delete
        </Button>
      </div>
    </div>
  )
}

export default ConfirmDelete
