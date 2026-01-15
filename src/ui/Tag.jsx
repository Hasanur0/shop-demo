function Tag({ type, children, className = '' }) {
  const colorClasses = {
    green: 'text-green-700 bg-green-100',
    blue: 'text-blue-700 bg-blue-100',
    silver: 'text-silver-700 bg-silver-100',
    yellow: 'text-yellow-700 bg-yellow-100',
    red: 'text-red-700 bg-red-100',
  }

  const classes = `w-fit uppercase text-[1.1rem] font-semibold px-3 py-1 rounded-full ${colorClasses[type] || 'text-grey-700 bg-grey-100'} ${className}`.trim()

  return <span className={classes}>{children}</span>
}

export default Tag
