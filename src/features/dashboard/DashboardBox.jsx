function DashboardBox({ children, className = '' }) {
  return (
    <div className={`bg-grey-0 dark:bg-grey-800 border border-grey-100 dark:border-grey-700 rounded-md p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 ${className}`}>
      {children}
    </div>
  )
}

export default DashboardBox
