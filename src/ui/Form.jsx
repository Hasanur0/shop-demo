function Form({ type = 'regular', className = '', children, ...props }) {
  const baseClasses = 'overflow-hidden text-sm'
  const typeClasses = {
    regular: 'p-4 sm:p-6 sm:px-10 bg-grey-0 dark:bg-grey-800 border border-grey-100 dark:border-grey-700 rounded-md',
    modal: 'w-full max-w-[90vw] sm:max-w-[80rem]',
  }

  const classes = `${baseClasses} ${typeClasses[type]} ${className}`.trim().replace(/\s+/g, ' ')

  return (
    <form className={classes} {...props}>
      {children}
    </form>
  )
}

export default Form
