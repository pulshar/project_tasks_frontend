import ErrorMessage from '@/components/ErrorMessage'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { UserLoginForm } from '@/types/index'
import { Loader2Icon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

export type LoginFormProps = {
  onSubmit: (data: UserLoginForm) => void
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const defaultValues: UserLoginForm = { email: '', password: '' }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues })

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
          placeholder="Email de usuario"
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
      <div className="grid gap-2">
        <div className="flex items-center">
          <Label htmlFor="password">Password</Label>
          <Link
            to="/auth/forgot-password"
            className="ml-auto text-sm underline-offset-4 hover:underline"
          >
            ¿Olvidaste la contraseña?
          </Link>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'El password es obligatorio',
          })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting && <Loader2Icon className="animate-spin h-5 w-5" />}
        Login
      </Button>
    </form>
  )
}
