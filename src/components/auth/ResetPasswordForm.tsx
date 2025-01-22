import ErrorMessage from '@/components/ErrorMessage'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ForgotPasswordForm } from '@/types/index'
import { Loader2Icon } from 'lucide-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'

export type ResetPasswordFormProps = {
  onSubmit: (data: ForgotPasswordForm) => void
}

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  onSubmit,
}) => {
  const defaultValues: ForgotPasswordForm = { email: '' }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ defaultValues })

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset()
    }
  }, [isSubmitSuccessful, reset])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
      noValidate
    >
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email de registro"
          {...register('email', {
            required: 'El email es obligatorio',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'E-mail no válido',
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2Icon className="animate-spin h-5 w-5" />}
        Enviar instrucciones
      </Button>
    </form>
  )
}
