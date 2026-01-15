import { BiLoaderAlt } from "react-icons/bi";

export default function SpinnerMini({ className = '' }) {
  return (
    <BiLoaderAlt
      className={`w-6 h-6 animate-spin ${className}`}
      style={{ animation: 'spin 1.5s linear infinite' }}
    />
  )
}
