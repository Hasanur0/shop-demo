import { HiBars3 } from 'react-icons/hi2'
import Logout from '../features/authentication/Logout'
import HeaderMenu from './HeaderMenu'
import UserAvatar from '../features/authentication/UserAvatar'

function Header({ isSidebarOpen, setIsSidebarOpen }) {
  return (
    <header className="bg-grey-0 dark:bg-grey-800 py-3 px-4 sm:px-8 md:px-12 border-b border-grey-100 dark:border-grey-700 flex gap-4 sm:gap-6 justify-between md:justify-end items-center">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden p-2 rounded-md hover:bg-grey-100 dark:hover:bg-grey-700 transition-colors"
        aria-label="Toggle menu"
      >
        <HiBars3 className="w-6 h-6 text-grey-700 dark:text-grey-300" />
      </button>
      <div className="flex gap-4 sm:gap-6 items-center">
        <UserAvatar />
        <HeaderMenu />
      </div>
    </header>
  )
}

export default Header
