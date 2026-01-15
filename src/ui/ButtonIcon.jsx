function ButtonIcon({ children, className = '', ...props }) {
  return (
    <button
      className={`bg-none border-none p-1.5 rounded-sm transition-all duration-200 hover:bg-grey-100 dark:hover:bg-grey-700 [&_svg]:w-[2.2rem] [&_svg]:h-[2.2rem] [&_svg]:text-brand-600 dark:[&_svg]:text-brand-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default ButtonIcon
