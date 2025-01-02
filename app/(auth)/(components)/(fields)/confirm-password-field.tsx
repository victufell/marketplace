import { UseFormRegisterReturn } from "react-hook-form";

import { PasswordField } from "./password-field";

interface ConfirmPasswordFieldProps {
    onRegisterInput: (inputName: "confirmPassword") => UseFormRegisterReturn;
    className?: string;
}

export function ConfirmPasswordField({ className, onRegisterInput }: ConfirmPasswordFieldProps) {
    return (
        <PasswordField 
            className={className}
            onRegisterInput={() => onRegisterInput("confirmPassword")}
            label="Confirmar senha"
            placeholder="Confirme a senha"
        />
    )
}