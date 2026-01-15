export default function FormRowVertical({ label, error, children }) {
  return (
    <div className="grid items-start gap-2 py-3 first:pt-0 last:pb-0 [&:has(button)]:flex [&:has(button)]:flex-col [&:has(button)]:justify-end [&:has(button)]:gap-3">
      {label && (
        <label htmlFor={children.props?.id} className="font-medium text-sm sm:text-base text-grey-700 dark:text-grey-300">
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-red-700 dark:text-red-400">{error}</span>}
    </div>
  )
}
