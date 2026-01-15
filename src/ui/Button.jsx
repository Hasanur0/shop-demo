function Button({ 
  children, 
  variation = 'primary', 
  size = 'medium', 
  className = '',
  ...props 
}) {
  const sizeClasses = {
    small: 'text-xs px-2 py-1 uppercase font-semibold text-center',
    medium: 'text-sm px-4 py-3 font-medium',
    large: 'text-base px-6 py-3 font-medium',
  }

  const variationClasses = {
    primary: 'text-brand-50 bg-brand-600 hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600',
    secondary: 'text-grey-600 dark:text-grey-300 bg-grey-0 dark:bg-grey-800 border border-grey-200 dark:border-grey-700 hover:bg-grey-50 dark:hover:bg-grey-700',
    danger: 'text-red-100 bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700',
  }

  const classes = `
    border-none rounded-sm shadow-sm
    ${sizeClasses[size]}
    ${variationClasses[variation]}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button

