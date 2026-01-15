function Heading({ as: Component = 'h1', children, className = '', ...props }) {
  const classes = {
    h1: 'text-2xl sm:text-3xl md:text-[3rem] font-semibold leading-[1.4] text-grey-700 dark:text-grey-200',
    h2: 'text-xl sm:text-2xl md:text-[2rem] font-semibold leading-[1.4] text-grey-700 dark:text-grey-200',
    h3: 'text-lg sm:text-xl md:text-[2rem] font-medium leading-[1.4] text-grey-700 dark:text-grey-200',
    h4: 'text-lg sm:text-xl md:text-[2rem] font-semibold text-center leading-[1.4] text-grey-700 dark:text-grey-200',
  }

  return (
    <Component className={`${classes[Component]} ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}

export default Heading
