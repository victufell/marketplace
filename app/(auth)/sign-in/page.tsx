'use client'
import { useForm, SubmitHandler } from "react-hook-form"

import AuthProvider from "../(components)/(auth-provider)"

import Image from "next/image"
import { EmailField } from "../(components)/(fields)/email-field"
import { PasswordField } from "../(components)/(fields)/password-field"

interface IFormInput {
    email: string
    password: string
}

interface IArrow {
    color: '#FFFFFF' | '#F24D0D',
    width: number,
    height: number
}

const ArrowRight = ({ 
    color,
    width,
    height
}: IArrow) => {
    return (
        <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
            <path 
                d="M20.0078 8.33328C19.8499 8.33205 19.694 8.36821 19.5527 8.43882C19.4115 8.50944 19.289 8.61248 19.1953 8.73953C19.1173 8.8452 19.0609 8.9652 19.0293 9.09267C18.9977 9.22014 18.9915 9.35258 19.0111 9.48244C19.0307 9.6123 19.0757 9.73703 19.1435 9.8495C19.2113 9.96198 19.3006 10.06 19.4062 10.138C19.4062 10.138 21.0482 11.3487 22.6771 12.763C23.4915 13.4701 24.301 14.2305 24.875 14.8802C24.9106 14.9205 24.941 14.9597 24.9739 14.9999H5.33331C5.0681 14.9999 4.81374 15.1053 4.62621 15.2928C4.43867 15.4804 4.33331 15.7347 4.33331 15.9999C4.33331 16.2652 4.43867 16.5195 4.62621 16.7071C4.81374 16.8946 5.0681 16.9999 5.33331 16.9999H24.9739C24.941 17.0402 24.9106 17.0794 24.875 17.1197C24.301 17.7694 23.4915 18.5298 22.6771 19.2369C21.0483 20.6512 19.4062 21.8619 19.4062 21.8619C19.3006 21.9399 19.2113 22.0379 19.1435 22.1504C19.0757 22.2629 19.0307 22.3876 19.0111 22.5175C18.9915 22.6473 18.9977 22.7798 19.0293 22.9072C19.0609 23.0347 19.1173 23.1547 19.1953 23.2604C19.2733 23.366 19.3713 23.4553 19.4838 23.5231C19.5962 23.5909 19.721 23.6359 19.8508 23.6555C19.9807 23.6751 20.1131 23.6689 20.2406 23.6373C20.3681 23.6057 20.4881 23.5493 20.5937 23.4713C20.5937 23.4713 22.2851 22.2272 23.9896 20.7473C24.8418 20.0074 25.699 19.2103 26.375 18.4453C27.051 17.6802 27.6666 17.0716 27.6666 15.9999C27.6667 14.9282 27.051 14.3197 26.375 13.5546C25.699 12.7896 24.8418 11.9925 23.9896 11.2526C22.2851 9.77265 20.5937 8.5286 20.5937 8.5286C20.4239 8.4033 20.2188 8.33493 20.0078 8.33328Z" 
                fill={color}
            />
        </svg>
    )
}


const SignIn = () => {
    const { register, formState, handleSubmit } = useForm<IFormInput>()
    
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    const onRegisterInput = (inputName: "email" | "password") => {
        return register(inputName, { required: true })
    }

    const {
        isValid
    } = formState


    const isButtonAvailable = isValid

    return (
        <AuthProvider>
            <section className="bg-white px-[72px] py-[80px] rounded-[32px]">

                <header className="mb-12">
                    <h2 className="text-gray-500 text-2xl font-bold mb-2">Acesse sua conta</h2>
                    <p className="font-normal text-sm text-gray-300">Informe seu e-mail e senha para entrar</p>
                </header>
                

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

                <div className="mt-[131px]">
                    <p className="text-gray-300 text-base mb-[20px]">Ainda não tem uma conta?</p>
                    <button type="submit" className="w-full text-orange-base font-medium bg-transparent flex justify-between text-base py-[18px] px-5 rounded-[10px] border border-orange-base border-solid  cursor-pointer">
                        Cadastrar
                        <ArrowRight 
                            color={"#F24D0D"}
                            width={24}
                            height={24}
                        />
                    </button>
                </div>
            </section>
        </AuthProvider>
        
    )
}

export default SignIn