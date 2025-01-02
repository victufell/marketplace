'use client'

import Image from "next/image"
import { BaseInput } from "../base-input"
import { BaseLabel } from "../base-label"
import { UseFormRegisterReturn } from "react-hook-form";

interface EmailFieldProps {
    onRegisterInput: (inputName: "email") => UseFormRegisterReturn;
    className?: string;
}

export function EmailField({ className, onRegisterInput }: EmailFieldProps) {
    return (
        <fieldset className={className ?? className}>
            <BaseLabel label="E-mail"/>
            <div className="flex items-center w-full border-b-gray-100 border-b-[1px]">
                <Image              
                    alt="Email"
                    width={24}
                    height={24}
                    src={"/icon/mail-02.svg"}
                />
                <BaseInput 
                    type="email"
                    placeholder="Seu e-mail cadastrado"
                    onRegisterInput={() => onRegisterInput('email')}
                />
            </div>
        </fieldset>
    )
}