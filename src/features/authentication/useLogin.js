import { useNavigate } from 'react-router-dom'
import { login as loginApi } from '../../services/apiAuth'
import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useLogin() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate: login, isPending: isLoading } = useMutation({
    mutationFn: async ({ email, password }) => {
      return await loginApi({ email, password })
    },
    onSuccess: (user) => {
      navigate('/', { replace: true })
      queryClient.setQueryData(['user'], user.user)
    },
    onError: (err) => {
      console.log('Error', err)
      toast.error('Provided email or password is incorrect')
    },
  })

  return { login, isLoading }
}
