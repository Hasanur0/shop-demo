import { useMutation } from '@tanstack/react-query'
import { signup as signupApi } from '../../services/apiAuth'
import toast from 'react-hot-toast'

export default function useSignup() {
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user)
      toast.success(
        `Account successfully created! Please verify the account from user's email address.`
      )
    },
  })

  return { signup, isLoading }
}
