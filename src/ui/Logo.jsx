import { useDarkMode } from '../context/DarkModeContext'

function Logo() {
  const { darkMode } = useDarkMode()
  const src = darkMode ? '/logo-dark.png' : '/logo-light.png'

  return (
    <div className="text-center">
      <img src={src} alt="logo" className="h-16 sm:h-20 md:h-24 w-auto" />
    </div>
  )
}

export default Logo
