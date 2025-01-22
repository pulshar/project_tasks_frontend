import { forgotPassword } from '@/api/AuthAPI'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

export const useForgotPassword = () => {
  return useMutation({
    mutationFn: forgotPassword,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
    },
  })
}
