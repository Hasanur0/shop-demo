import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { useSearchParams } from 'react-router-dom'
import { PAGE_SIZE } from '../utils/constants'

export default function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = !searchParams.get('page')
    ? 1
    : Number(searchParams.get('page'))

  const pageCount = Math.ceil(count / PAGE_SIZE)

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1

    searchParams.set('page', next)
    setSearchParams(searchParams)
  }

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1

    searchParams.set('page', prev)
    setSearchParams(searchParams)
  }

  if (pageCount <= 1) return null

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
      <p className="text-xs sm:text-sm text-grey-700 dark:text-grey-300 [&_span]:font-semibold">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{' '}
        of <span>{count}</span> results
      </p>
      <div className="flex gap-1.5">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`border-none rounded-sm font-medium text-xs sm:text-sm flex items-center justify-center gap-1 py-1.5 px-2 sm:px-3 transition-all duration-300 [&:has(span:last-child)]:pl-1 [&:has(span:first-child)]:pr-1 [&_svg]:h-5 [&_svg]:w-5 sm:[&_svg]:h-[1.8rem] sm:[&_svg]:w-[1.8rem] hover:not(:disabled):bg-brand-600 hover:not(:disabled):text-brand-50 ${
            currentPage === 1 ? 'bg-brand-600 text-brand-50' : 'bg-grey-50 dark:bg-grey-700 text-grey-700 dark:text-grey-200'
          }`}
        >
          <HiChevronLeft />
          <span className="hidden sm:inline">Previous</span>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className={`border-none rounded-sm font-medium text-xs sm:text-sm flex items-center justify-center gap-1 py-1.5 px-2 sm:px-3 transition-all duration-300 [&:has(span:last-child)]:pl-1 [&:has(span:first-child)]:pr-1 [&_svg]:h-5 [&_svg]:w-5 sm:[&_svg]:h-[1.8rem] sm:[&_svg]:w-[1.8rem] hover:not(:disabled):bg-brand-600 hover:not(:disabled):text-brand-50 ${
            currentPage === pageCount ? 'bg-brand-600 text-brand-50' : 'bg-grey-50 dark:bg-grey-700 text-grey-700 dark:text-grey-200'
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  )
}
