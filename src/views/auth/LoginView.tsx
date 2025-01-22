import { LoginForm } from '@/components/auth/LoginForm'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useAuthenticate } from '@/hooks/useAuthenticate'
import { UserLoginForm } from '@/types/index'
import { Link } from 'react-router-dom'

export default function LoginView() {
  const { mutate } = useAuthenticate()

  const handleLogin = (formData: UserLoginForm) => {
    mutate(formData)
  }

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Iniciar sesión</CardTitle>
          <CardDescription>
            Comienza a planear tus proyectos iniciando sesión en este
            formulario.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm onSubmit={handleLogin} />
          <div className="mt-4 text-center text-sm">
            ¿No estás registrado?{' '}
            <Link to="/auth/register" className="underline underline-offset-4">
              Crear cuenta
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
