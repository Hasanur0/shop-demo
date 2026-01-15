import Logout from '../features/authentication/Logout'
import ButtonIcon from './ButtonIcon'
import { HiOutlineUser } from 'react-icons/hi2'
import { useNavigate } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'

export default function HeaderMenu() {
  const navigate = useNavigate()
  return (
    <ul className="flex gap-1">
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  )
}
