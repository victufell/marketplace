import Image from "next/image"
import { BaseInput } from "../base-input"
import { BaseLabel } from "../base-label"
import { UseFormRegisterReturn } from "react-hook-form";

interface NameFieldProps {
    onRegisterInput: (inputName: "name") => UseFormRegisterReturn;
    className?: string;
}

export function NameField({ className, onRegisterInput }: NameFieldProps) {
    return (
        <fieldset className={className ?? className}>
            <BaseLabel label="Nome"/>
            <div className="flex items-center w-full border-b-gray-100 border-b-[1px]">
                <Image              
                    alt="Nome"
                    width={24}
                    height={24}
                    src={"/icon/user.svg"}
                />
                <BaseInput 
                    type="text"
                    placeholder="Seu nome completo"
                    onRegisterInput={() => onRegisterInput('name')}
                />
            </div>
        </fieldset>
    )
}