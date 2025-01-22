import { useAuthenticate } from '@/hooks/useAuthenticate'
import { UserLoginForm } from '@/types/index'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { LoginForm } from '@/components/auth/LoginForm'

export default function LoginView({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const { mutate: authenticate } = useAuthenticate()

  const handleLogin = (formData: UserLoginForm) => {
    authenticate(formData)
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
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
            <a href="/auth/register" className="underline underline-offset-4">
              Crear cuenta
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
