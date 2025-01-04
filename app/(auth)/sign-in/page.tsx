'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from 'next/navigation'

import AuthProvider from "../(components)/(auth-provider)"

import Image from "next/image"

import { EmailField } from "../(components)/(fields)/email-field"
import { PasswordField } from "../(components)/(fields)/password-field"
import { WrapperFormHeader } from "../(components)/wrapper-form-header"
import { WrapperSecondaryAction } from "../(components)/wrapper-secondary-action"
import api from "@/app/(api)"

interface IFormInput {
    email: string
    password: string
}

type FormFields = keyof IFormInput;

const SignIn = () => {
    const router = useRouter()

    const { register, formState, handleSubmit } = useForm<IFormInput>()
    
    const onSubmit: SubmitHandler<IFormInput> = async ({ email, password }) => {
        api.auth.postSignIn({
            email, 
            password
        })
        .then(() => router.push('/'))
        .catch((error) => {
            console.error(error);
            alert("Email ou senha incorreto, tenta novamente ou tente fazer cadastro")
        })

    }
    const onRegisterInput = (inputName: FormFields) => {
        return register(inputName, { required: true })
    }
    const handleGoToSignUp = () => {
        router.push('/sign-up')
    }

    const {
        isValid
    } = formState

    const isButtonAvailable = isValid

    return (
        <AuthProvider>
            <section className="bg-white px-[72px] py-[80px] rounded-[32px]">

                <WrapperFormHeader 
                    title="Acesse sua conta"
                    description="Informe seu e-mail e senha para entrar"
                />                

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                    <EmailField 
                        className="mb-5"
                        onRegisterInput={onRegisterInput}
                    />

                    <PasswordField 
                        className="mb-[48px]"
                        onRegisterInput={onRegisterInput}
                    />

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
                    description="Ainda não tem uma conta?"
                    btnLabel="Cadastrar"
                    btnAction={handleGoToSignUp}
                />

            </section>
        </AuthProvider>
        
    )
}

export default SignIn