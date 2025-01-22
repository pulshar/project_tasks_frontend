import { authenticateUser } from '@/api/AuthAPI'
import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const useAuthenticate = () => {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: authenticateUser,
    onError: (error: Error) => {
      toast.error(error.message)
    },
    onSuccess: () => {
      navigate('/')
    },
  })
}
