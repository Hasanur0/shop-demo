function Stat({ icon, title, value, color }) {
  const colorClasses = {
    blue: 'bg-blue-100 [&_svg]:text-blue-700',
    green: 'bg-green-100 [&_svg]:text-green-700',
    yellow: 'bg-yellow-100 [&_svg]:text-yellow-700',
    silver: 'bg-silver-100 [&_svg]:text-silver-700',
    orange: 'bg-orange-100 [&_svg]:text-orange-700',
    pink: 'bg-pink-100 [&_svg]:text-pink-700',
  }

  return (
    <div className="bg-grey-0 dark:bg-grey-800 border border-grey-100 dark:border-grey-700 rounded-md p-3 sm:p-4 grid grid-cols-[4rem_1fr] sm:grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] gap-x-3 sm:gap-x-4 gap-y-1">
      <div className={`row-span-full aspect-square rounded-full flex items-center justify-center ${colorClasses[color] || 'bg-blue-100 [&_svg]:text-blue-700'} [&_svg]:w-6 [&_svg]:h-6 sm:[&_svg]:w-8 sm:[&_svg]:h-8`}>
        {icon}
      </div>
      <h5 className="self-end text-xs uppercase tracking-wide font-semibold text-grey-500 dark:text-grey-400">
        {title}
      </h5>
      <p className="text-lg sm:text-xl md:text-2xl leading-none font-medium text-grey-700 dark:text-grey-200">
        {value}
      </p>
    </div>
  )
}

export default Stat
