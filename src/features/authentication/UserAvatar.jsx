import useUser from './useUser'

export default function UserAvatar() {
  const { user } = useUser()
  const { fullName, avatar } = user.user_metadata

  console.log(user)
  return (
    <div className="flex gap-2 sm:gap-3 items-center font-medium text-xs sm:text-sm text-grey-600 dark:text-grey-300">
      <img
        src={avatar || `https://zghkpfeojnvgbpjwpldm.supabase.co/storage/v1/object/public/avatars/avatar-7ee4c659-e157-4ba5-9d80-bf298ef130a0-0.11852853773645022` || 'default-user.jpg' }
        alt={`Avatar of ${fullName}`}
        className="block w-8 sm:w-9 aspect-square object-cover object-center rounded-full outline outline-2 outline-grey-100 dark:outline-grey-700"
      />
      <span className="hidden sm:inline">{fullName}</span>
    </div>
  )
}
