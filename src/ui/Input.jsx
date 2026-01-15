import { forwardRef } from 'react'

const Input = forwardRef(function Input({ className = '', ...props }, ref) {
  return (
    <input
      ref={ref}
      className={`border border-grey-300 dark:border-grey-600 bg-grey-0 dark:bg-grey-800 text-grey-700 dark:text-grey-200 rounded-sm px-3 py-2 shadow-sm ${className}`}
      {...props}
    />
  )
})

export default Input
