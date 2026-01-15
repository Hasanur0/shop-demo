function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={`px-3 py-2 border border-grey-300 dark:border-grey-600 rounded-[5px] bg-grey-0 dark:bg-grey-800 text-grey-700 dark:text-grey-200 shadow-sm w-full h-32 ${className}`}
      {...props}
    />
  )
}

export default Textarea
