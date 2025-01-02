import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IBaseInput {
    onRegisterInput: () => UseFormRegisterReturn
}

type BaseInputProps = IBaseInput & InputHTMLAttributes<HTMLInputElement>;

export function BaseInput (props: BaseInputProps) {
    return (
        <input 
            {...props}
            {...props?.onRegisterInput()}
            className="text-gray-200 font-normal w-full placeholder-gray-200 outline-none pl-2 pr-[34px] py-[14px]"
        />
    )
}