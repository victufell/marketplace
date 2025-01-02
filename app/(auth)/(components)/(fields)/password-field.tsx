'use client'

import Image from "next/image"
import { BaseInput } from "../base-input"
import { BaseLabel } from "../base-label"
import { UseFormRegisterReturn } from "react-hook-form";
import { useState } from "react";

interface PasswordFieldProps {
    onRegisterInput: (inputName: "password") => UseFormRegisterReturn;
    className?: string;
}

export function PasswordField({ className, onRegisterInput }: PasswordFieldProps) {
    const [isPasswordShown, setTogglePasswordView] = useState(false)
    
    const handleToggleShowPassword = () => {
        setTogglePasswordView((state) => !state)
    }

    return (
        <fieldset className={className ?? className}>
            <BaseLabel label="Senha" />

            <div className="flex items-center w-full border-b-gray-100 border-b-[1px]">
                <Image              
                    alt="Senha"
                    width={24}
                    height={24}
                    src={"/icon/access.svg"}
                />
                <BaseInput 
                    type={isPasswordShown ? 'text' : 'password'}
                    placeholder="Sua senha de acesso"
                    onRegisterInput={() => onRegisterInput('password')}
                />
                <Image                          
                    width={24}
                    height={24}
                    alt="Ver senha"
                    src={"/icon/view.svg"}
                    className="cursor-pointer"
                    onClick={handleToggleShowPassword}
                />
            </div>
        </fieldset>
    )
}