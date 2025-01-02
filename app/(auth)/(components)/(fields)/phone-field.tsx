import Image from "next/image"
import { BaseInput } from "../base-input"
import { BaseLabel } from "../base-label"
import { UseFormRegisterReturn } from "react-hook-form";

interface PhoneFieldProps {
    onRegisterInput: (inputName: "phone") => UseFormRegisterReturn;
    className?: string;
}

export function PhoneField({ className, onRegisterInput }: PhoneFieldProps) {
    return (
        <fieldset className={className ?? className}>
            <BaseLabel label="Telefone"/>
            <div className="flex items-center w-full border-b-gray-100 border-b-[1px]">
                <Image              
                    alt="Telefone"
                    width={24}
                    height={24}
                    src={"/icon/call.svg"}
                />
                <BaseInput 
                    type="phone"
                    placeholder="(00) 00000-0000"
                    onRegisterInput={() => onRegisterInput('phone')}
                />
            </div>
        </fieldset>
    )
}