import { cloneElement, createContext, useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { HiXMark } from 'react-icons/hi2'
import useOutsideClick from '../hooks/useOutsideClick'

const ModalContext = createContext()

export default function Modal({ children }) {
  const [openName, setOpenName] = useState('')
  const close = () => setOpenName('')
  const open = setOpenName

  return (
    <ModalContext.Provider value={{ open, openName, close }}>
      {children}
    </ModalContext.Provider>
  )
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext)

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  })
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext)
  const ref = useOutsideClick(close)

  if (openName !== name) return null

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen bg-black/50 dark:bg-black/70 backdrop-blur-sm z-[1000] transition-all duration-500 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div ref={ref} className="relative w-full max-w-[90vw] sm:max-w-lg md:max-w-2xl bg-grey-0 dark:bg-grey-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 md:px-10 transition-all duration-500 my-8">
          <button
            onClick={close}
            className="bg-none border-none p-1 rounded-sm transition-all duration-200 absolute top-2 right-2 sm:top-3 sm:right-[1.9rem] hover:bg-grey-100 dark:hover:bg-grey-700 [&_svg]:w-5 [&_svg]:h-5 sm:[&_svg]:w-6 sm:[&_svg]:h-6 [&_svg]:text-grey-500 dark:[&_svg]:text-grey-400 z-10"
          >
            <HiXMark />
          </button>
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </div>
      </div>
    </div>,
    document.body
  )
}

Modal.Open = Open
Modal.Window = Window
