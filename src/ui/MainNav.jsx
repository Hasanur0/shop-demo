import { NavLink } from 'react-router-dom'
import {
    HiOutlineCalendarDays,
    HiOutlineCog6Tooth,
    HiOutlineHome,
    HiOutlineHomeModern,
    HiOutlineUsers,
} from 'react-icons/hi2'
function MainNav({ setIsSidebarOpen }) {
    const handleNavClick = () => {
        // Close sidebar on mobile when a nav link is clicked
        if (window.innerWidth < 768) {
            setIsSidebarOpen?.(false)
        }
    }

    return (
        <nav>
            <ul className="flex flex-col gap-2">
                <li>
                    <NavLink
                        to="/dashboard"
                        onClick={handleNavClick}
                        className="flex items-center gap-3 text-grey-600 dark:text-grey-400 text-base font-medium py-3 px-4 sm:px-6 transition-all duration-300 hover:text-grey-800 dark:hover:text-grey-200 hover:bg-grey-50 dark:hover:bg-grey-700 active:text-grey-800 dark:active:text-grey-200 active:bg-grey-50 dark:active:bg-grey-700 rounded-sm [&.active]:text-grey-800 dark:[&.active]:text-grey-200 [&.active]:bg-grey-50 dark:[&.active]:bg-grey-700 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-grey-400 dark:[&_svg]:text-grey-500 [&_svg]:transition-all [&_svg]:duration-300 hover:[&_svg]:text-brand-600 dark:hover:[&_svg]:text-brand-500 active:[&_svg]:text-brand-600 dark:active:[&_svg]:text-brand-500 [&.active_svg]:text-brand-600 dark:[&.active_svg]:text-brand-500"
                    >
                        <HiOutlineHome /> <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/customers"
                        onClick={handleNavClick}
                        className="flex items-center gap-3 text-grey-600 dark:text-grey-400 text-base font-medium py-3 px-4 sm:px-6 transition-all duration-300 hover:text-grey-800 dark:hover:text-grey-200 hover:bg-grey-50 dark:hover:bg-grey-700 active:text-grey-800 dark:active:text-grey-200 active:bg-grey-50 dark:active:bg-grey-700 rounded-sm [&.active]:text-grey-800 dark:[&.active]:text-grey-200 [&.active]:bg-grey-50 dark:[&.active]:bg-grey-700 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-grey-400 dark:[&_svg]:text-grey-500 [&_svg]:transition-all [&_svg]:duration-300 hover:[&_svg]:text-brand-600 dark:hover:[&_svg]:text-brand-500 active:[&_svg]:text-brand-600 dark:active:[&_svg]:text-brand-500 [&.active_svg]:text-brand-600 dark:[&.active_svg]:text-brand-500"
                    >
                        <HiOutlineCalendarDays />
                        <span>Customers</span>
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to="/cabins"
                        className="flex items-center gap-3 text-grey-600 dark:text-grey-400 text-base font-medium py-3 px-6 transition-all duration-300 hover:text-grey-800 dark:hover:text-grey-200 hover:bg-grey-50 dark:hover:bg-grey-700 active:text-grey-800 dark:active:text-grey-200 active:bg-grey-50 dark:active:bg-grey-700 rounded-sm [&.active]:text-grey-800 dark:[&.active]:text-grey-200 [&.active]:bg-grey-50 dark:[&.active]:bg-grey-700 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-grey-400 dark:[&_svg]:text-grey-500 [&_svg]:transition-all [&_svg]:duration-300 hover:[&_svg]:text-brand-600 dark:hover:[&_svg]:text-brand-500 active:[&_svg]:text-brand-600 dark:active:[&_svg]:text-brand-500 [&.active_svg]:text-brand-600 dark:[&.active_svg]:text-brand-500"
                    >
                        <HiOutlineHomeModern />
                        <span>Cabins</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/users"
                        className="flex items-center gap-3 text-grey-600 dark:text-grey-400 text-base font-medium py-3 px-6 transition-all duration-300 hover:text-grey-800 dark:hover:text-grey-200 hover:bg-grey-50 dark:hover:bg-grey-700 active:text-grey-800 dark:active:text-grey-200 active:bg-grey-50 dark:active:bg-grey-700 rounded-sm [&.active]:text-grey-800 dark:[&.active]:text-grey-200 [&.active]:bg-grey-50 dark:[&.active]:bg-grey-700 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-grey-400 dark:[&_svg]:text-grey-500 [&_svg]:transition-all [&_svg]:duration-300 hover:[&_svg]:text-brand-600 dark:hover:[&_svg]:text-brand-500 active:[&_svg]:text-brand-600 dark:active:[&_svg]:text-brand-500 [&.active_svg]:text-brand-600 dark:[&.active_svg]:text-brand-500"
                    >
                        <HiOutlineUsers />
                        <span>Users</span>
                    </NavLink>
                </li> */}
                <li>
                    <NavLink
                        to="/settings"
                        onClick={handleNavClick}
                        className="flex items-center gap-3 text-grey-600 dark:text-grey-400 text-base font-medium py-3 px-4 sm:px-6 transition-all duration-300 hover:text-grey-800 dark:hover:text-grey-200 hover:bg-grey-50 dark:hover:bg-grey-700 active:text-grey-800 dark:active:text-grey-200 active:bg-grey-50 dark:active:bg-grey-700 rounded-sm [&.active]:text-grey-800 dark:[&.active]:text-grey-200 [&.active]:bg-grey-50 dark:[&.active]:bg-grey-700 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-grey-400 dark:[&_svg]:text-grey-500 [&_svg]:transition-all [&_svg]:duration-300 hover:[&_svg]:text-brand-600 dark:hover:[&_svg]:text-brand-500 active:[&_svg]:text-brand-600 dark:active:[&_svg]:text-brand-500 [&.active_svg]:text-brand-600 dark:[&.active_svg]:text-brand-500"
                    >
                        <HiOutlineCog6Tooth />
                        <span>Settings</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav
