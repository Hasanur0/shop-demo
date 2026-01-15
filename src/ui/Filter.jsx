import { useSearchParams } from 'react-router-dom'

export default function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const handleClick = (value) => {
    searchParams.set(filterField, value)
    if (searchParams.get('page')) searchParams.set('page', 1)
    setSearchParams(searchParams)
  }
  const currentFilter = searchParams.get(filterField) || options.at(0).value

  return (
    <div className="border border-grey-100 dark:border-grey-700 bg-grey-0 dark:bg-grey-800 shadow-sm rounded-sm p-1 flex flex-wrap gap-1">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => handleClick(option.value)}
          disabled={currentFilter === option.value}
          className={`bg-grey-0 dark:bg-grey-800 border-none rounded-sm font-medium text-xs sm:text-sm py-[0.44rem] px-2 transition-all duration-300 hover:bg-brand-600 hover:text-brand-50 disabled:bg-brand-600 disabled:text-brand-50 dark:hover:bg-brand-600 dark:disabled:bg-brand-600 ${
            currentFilter === option.value ? 'bg-brand-600 text-brand-50' : 'text-grey-700 dark:text-grey-200'
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
