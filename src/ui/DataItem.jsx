function DataItem({ icon, label, children }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-2">
      <span className="flex items-center gap-2 font-medium text-sm sm:text-base text-grey-700 dark:text-grey-300 [&_svg]:w-4 [&_svg]:h-4 sm:[&_svg]:w-5 sm:[&_svg]:h-5 [&_svg]:text-brand-600 dark:[&_svg]:text-brand-500">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  )
}

export default DataItem;
