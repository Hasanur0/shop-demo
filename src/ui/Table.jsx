import { createContext, useContext } from 'react'
const TableContext = createContext()

export default function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div className="border border-grey-200 dark:border-grey-700 text-sm bg-grey-0 dark:bg-grey-800 rounded-[7px] overflow-x-auto" role="table">
        <div className="min-w-[600px]">
          {children}
        </div>
      </div>
    </TableContext.Provider>
  )
}

export function Header({ children }) {
  const { columns } = useContext(TableContext)
  return (
    <header
      role="row"
      className="grid gap-3 sm:gap-4 md:gap-6 items-center transition-none p-3 px-4 sm:p-4 sm:px-6 bg-grey-50 dark:bg-grey-700 border-b border-grey-100 dark:border-grey-600 uppercase tracking-wide font-semibold text-grey-600 dark:text-grey-300 text-xs sm:text-sm"
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </header>
  )
}

export function Row({ children, className = '' }) {
  const { columns } = useContext(TableContext)
  return (
    <div
      role="row"
      className={`grid gap-3 sm:gap-4 md:gap-6 items-center transition-none py-2 px-4 sm:py-3 sm:px-6 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-grey-100 dark:[&:not(:last-child)]:border-grey-700 text-xs sm:text-sm ${className}`}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  )
}

export function Body({ data, render }) {
  if (!data.length) return <p className="text-base font-medium text-center my-6">No data to show at the moment</p>
  return <section className="my-1">{data.map(render)}</section>
}

export function Footer({ children }) {
  return (
    <footer className="bg-grey-50 dark:bg-grey-700 flex justify-center py-3 [&:not(:has(*))]:hidden">
      {children}
    </footer>
  )
}

Table.Header = Header
Table.Row = Row
Table.Body = Body
Table.Footer = Footer
