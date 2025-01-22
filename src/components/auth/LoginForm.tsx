import { useForm } from 'react-hook-form';
import { UserLoginForm } from '@/types/index';
import ErrorMessage from '@/components/ErrorMessage';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export type LoginFormProps = {
  onSubmit: (data: UserLoginForm) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const defaultValues: UserLoginForm = { email: '', password: '' };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Email de usuario"
          {...register('email', {
            required: 'El Email es obligatorio',
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
          <a
            href="/auth/forgot-password"
            className="ml-auto text-sm underline-offset-4 hover:underline"
          >
            ¿Olvidaste la contraseña?
          </a>
        </div>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'El Password es obligatorio',
          })}
        />
        {errors.password && (
          <ErrorMessage>{errors.password.message}</ErrorMessage>
        )}
      </div>
      <button type="submit" className="w-full btn-primary">
        Login
      </button>
    </form>
  );
};