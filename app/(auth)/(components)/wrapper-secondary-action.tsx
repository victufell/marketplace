import { ArrowRight } from "./arrow-right"

interface ISecondaryAction {
    description: string,
    btnLabel: string,
    btnAction: () => void
}

export function WrapperSecondaryAction({ description, btnLabel, btnAction }: ISecondaryAction) {
    return (
        <div className="mt-[131px]">
            <p className="text-gray-300 text-base mb-[20px]">
                {description}
            </p>
            <button 
                onClick={btnAction}
                type="submit"
                className="w-full text-orange-base font-medium bg-transparent flex justify-between text-base py-[18px] px-5 rounded-[10px] border border-orange-base border-solid  cursor-pointer">
                {btnLabel}
                <ArrowRight
                    color={"#F24D0D"}
                    width={24}
                    height={24}
                />
            </button>
        </div>
    )
}