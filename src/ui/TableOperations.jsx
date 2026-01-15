function TableOperations({ children, className = '' }) {
  return (
    <div className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 ${className}`}>
      {children}
    </div>
  )
}

export default TableOperations
