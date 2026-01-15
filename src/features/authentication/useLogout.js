import { useNavigate } from 'react-router-dom'
import { logout as logoutApi } from '../../services/apiAuth'
import { toast } from 'react-hot-toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useLogout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { mutate: logout, isPending: isLoading } = useMutation({
    mutationFn: async () => logoutApi(),

    onSuccess: () => {
      queryClient.removeQueries()
      navigate('/login', { replace: true })
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return { logout, isLoading }
}
