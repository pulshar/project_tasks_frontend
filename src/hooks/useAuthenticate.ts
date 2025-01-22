import { useMutation } from '@tanstack/react-query'
import { authenticateUser } from '@/api/AuthAPI'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

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
