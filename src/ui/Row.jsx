function Row({ type = 'vertical', children, className = '', ...props }) {
  const classes = {
    horizontal: 'flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4',
    vertical: 'flex flex-col gap-2 sm:gap-4',
  }

  return (
    <div className={`${classes[type]} ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}

export default Row

