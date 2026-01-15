import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="grid grid-cols-1 md:grid-cols-[26rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <main className="bg-grey-50 dark:bg-grey-900 p-4 sm:p-8 md:p-16 md:py-24 overflow-y-auto">
        <div className="max-w-[120rem] mx-auto flex flex-col gap-4 sm:gap-6 md:gap-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AppLayout
