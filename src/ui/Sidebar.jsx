import { useEffect } from 'react'
import { HiXMark } from 'react-icons/hi2'
import Logo from './Logo'
import MainNav from './MainNav'
// import Uploader from '../data/Uploader'

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setIsSidebarOpen])

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 dark:bg-black/70 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-50
          bg-grey-0 dark:bg-grey-800 p-4 sm:p-6 md:p-8 md:px-6 
          border-r border-grey-100 dark:border-grey-700 
          row-span-full flex flex-col gap-6 md:gap-8
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          w-64 sm:w-72 md:w-auto
        `}
      >
        <div className="flex items-center justify-between md:justify-center">
          <Logo />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-2 rounded-md hover:bg-grey-100 dark:hover:bg-grey-700 transition-colors"
            aria-label="Close menu"
          >
            <HiXMark className="w-6 h-6 text-grey-700 dark:text-grey-300" />
          </button>
        </div>
        <MainNav setIsSidebarOpen={setIsSidebarOpen} />
        {/* <Uploader /> */}
      </aside>
    </>
  )
}

export default Sidebar
