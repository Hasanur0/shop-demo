import { createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiEllipsisVertical } from 'react-icons/hi2'
import useOutsideClick from '../hooks/useOutsideClick'

const MenusContext = createContext()
export default function Menus({ children }) {
  const [openId, setOpenId] = useState('')
  const [position, setPosition] = useState(null)

  const close = () => setOpenId('')
  const open = setOpenId

  return (
    <MenusContext.Provider
      value={{ openId, open, close, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  )
}

function Menu({ children }) {
  return <div className="flex items-center justify-end">{children}</div>
}

function Toggle({ id }) {
  const { openId, open, close, setPosition } = useContext(MenusContext)
  const handleClick = (e) => {
    e.stopPropagation()
    const rect = e.target.closest('button').getBoundingClientRect()

    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    })
    if (openId === id) close()
    if (openId !== id) open(id)
  }
  return (
    <button
      onClick={handleClick}
      className="bg-none border-none p-1 rounded-sm translate-x-2 transition-all duration-200 hover:bg-grey-100 dark:hover:bg-grey-700 [&_svg]:w-6 [&_svg]:h-6 [&_svg]:text-grey-700 dark:[&_svg]:text-grey-300"
    >
      <HiEllipsisVertical />
    </button>
  )
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext)
  const ref = useOutsideClick(close, false)

  if (openId !== id) return null
  
  // Adjust position for mobile to prevent overflow
  const adjustedPosition = position ? {
    right: Math.min(position.x, window.innerWidth - 200),
    top: position.y,
    left: position.x > window.innerWidth - 200 ? '1rem' : 'auto',
  } : {}

  return createPortal(
    <ul
      ref={ref}
      className="fixed bg-grey-0 dark:bg-grey-800 shadow-md rounded-md z-50 min-w-[12rem] max-w-[90vw]"
      style={adjustedPosition}
    >
      {children}
    </ul>,
    document.body
  )
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext)
  const handleClick = () => {
    onClick?.()
    close()
  }
  return (
    <li>
      <button
        onClick={handleClick}
        className="w-full text-left bg-none border-none py-3 px-6 text-sm transition-all duration-200 flex items-center gap-4 hover:bg-grey-50 dark:hover:bg-grey-700 text-grey-700 dark:text-grey-200 [&_svg]:w-4 [&_svg]:h-4 [&_svg]:text-grey-400 dark:[&_svg]:text-grey-500 [&_svg]:transition-all [&_svg]:duration-300"
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  )
}

Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button
