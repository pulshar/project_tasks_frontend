import { ResetPasswordForm } from '@/components/auth/ResetPasswordForm'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useForgotPassword } from '@/hooks/useForgotPassword'
import { Link } from 'react-router-dom'
import { ForgotPasswordForm } from '../../types'

export default function ForgotPasswordView() {
  const { mutate } = useForgotPassword()

  const handleForgotPassword = (formData: ForgotPasswordForm) =>
    mutate(formData)

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Reestablecer password</CardTitle>
          <CardDescription>
            ¿Olvidaste tu password? Introduce tu email de registro
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordForm onSubmit={handleForgotPassword} />
          <div className="mt-4 text-center text-sm">
            ¿No estás registrado?{' '}
            <Link to="/auth/register" className="underline underline-offset-4">
              Crear cuenta
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
