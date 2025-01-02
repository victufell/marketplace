'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from 'next/navigation'

import Image from "next/image"

import AuthProvider from "../(components)/(auth-provider)"

import { WrapperFormHeader } from "../(components)/wrapper-form-header"
import { WrapperSecondaryAction } from "../(components)/wrapper-secondary-action"

interface IFormInput {
    name: string
    phone: string,
    email: string,
    password: string,
    confirmPassword: string,
    avatar: string
}

const SignUp = () => {
    const router = useRouter()
    const { register, formState, handleSubmit } = useForm<IFormInput>()
    
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    const onRegisterInput = (inputName: "email" | "password") => {
        return register(inputName, { required: true })
    }
    const handleGoToSignIn = () => {
        router.push('/sign-in')
    }
    console.log(onRegisterInput)

    const {
        isValid
    } = formState
    const isButtonAvailable = isValid
    
    return (
        <AuthProvider>
            <section className="bg-white px-[72px] py-[80px] rounded-[32px]">

                <WrapperFormHeader 
                    title="Crie sua conta"
                    description="Informe os seus dados pessoais e de acesso"
                />

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                 
                    <button
                        type="submit"
                        disabled={!isButtonAvailable}
                        className="text-white font-medium bg-orange-base flex justify-between text-base py-[18px] px-5 rounded-[10px] border-none cursor-pointer"
                    >
                        Acessar
                        <Image
                            alt="Acessar"
                            width={24}
                            height={24}
                            src={"/icon/arrow-right-02.svg"}
                        />
                    </button>
                </form>

                <WrapperSecondaryAction 
                    description="Já tem uma conta?"
                    btnLabel="Acessar"
                    btnAction={handleGoToSignIn}
                />
            </section>
        </AuthProvider>
    )
}

export default SignUp