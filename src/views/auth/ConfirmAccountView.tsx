import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { useMutation } from '@tanstack/react-query'
import { ConfirmToken } from '@/types/index'
import { confirmAccount } from '@/api/AuthAPI'
import { toast } from 'react-toastify'

export default function ConfirmAccountView() {
  const [token, setToken] = useState<ConfirmToken['token']>('')

  const { mutate } = useMutation({
    mutationFn: confirmAccount,
    onError: (error) => {
      toast.error(error.message)
    },
    onSuccess: (data) => {
      toast.success(data)
    },
  })

  const handleChange = (token: ConfirmToken['token']) => {
    setToken(token)
  }

  const handleComplete = (token: ConfirmToken['token']) => mutate({ token })

  return (
    <>
      <h1 className="text-5xl font-black text-white">Confirma tu Cuenta</h1>
      <p className="text-2xl font-light text-white mt-5">
        Ingresa el código que recibiste {''}
        <span className=" text-fuchsia-500 font-bold"> por e-mail</span>
      </p>

      <form className="space-y-8 p-10 rounded-lg bg-white mt-10">
        <label className="font-normal text-2xl text-center block">
          Código de 6 dígitos
        </label>
        <div className="flex justify-center px-10 pb-5 items-center">
          <InputOTP
            autoFocus
            maxLength={6}
            value={token}
            onChange={handleChange}
            onComplete={handleComplete}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} className="border-gray-300" />
              <InputOTPSlot index={1} className="border-gray-300" />
              <InputOTPSlot index={2} className="border-gray-300" />
              <InputOTPSlot index={3} className="border-gray-300" />
              <InputOTPSlot index={4} className="border-gray-300" />
              <InputOTPSlot index={5} className="border-gray-300" />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </form>

      <nav className="mt-10 flex flex-col space-y-4">
        <Link
          to="/auth/request-code"
          className="text-center text-gray-300 font-normal"
        >
          Solicitar un nuevo Código
        </Link>
      </nav>
    </>
  )
}
