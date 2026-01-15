export default function FormRow({ label, error, children }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[12rem_1fr_1.2fr] items-start sm:items-center gap-2 sm:gap-4 md:gap-6 py-3 first:pt-0 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-grey-100 [&:has(button)]:flex [&:has(button)]:flex-col sm:[&:has(button)]:flex-row [&:has(button)]:justify-end [&:has(button)]:gap-3">
      <label htmlFor={children.props?.id} className="font-medium text-sm sm:text-base">
        {label}
      </label>
      <div className="sm:col-span-1">
        {children}
      </div>
      {error && <span className="text-xs sm:text-sm text-red-700 sm:col-span-1">{error}</span>}
    </div>
  )
}
