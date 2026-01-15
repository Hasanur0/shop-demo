import { HiOutlineMoon } from 'react-icons/hi'
import ButtonIcon from './ButtonIcon'
import { useDarkMode } from '../context/DarkModeContext'
import { HiOutlineSun } from 'react-icons/hi2'
export default function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {darkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  )
}
