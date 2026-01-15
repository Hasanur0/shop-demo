export default function Select({ options, value, onChange, type, className = '', ...props }) {
  const borderClass = type === 'white' ? 'border-grey-100 dark:border-grey-700' : 'border-grey-300 dark:border-grey-600'
  const classes = `text-sm px-3 py-2 border ${borderClass} rounded-sm bg-grey-0 dark:bg-grey-800 text-grey-700 dark:text-grey-200 font-medium shadow-sm ${className}`.trim().replace(/\s+/g, ' ')

  return (
    <select value={value} onChange={onChange} className={classes} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
