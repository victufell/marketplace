interface IHeader {
    title: string,
    description: string
}

export function WrapperFormHeader({ title, description }: IHeader) {
    return (
        <header className="mb-12">
            <h2 className="text-gray-500 text-2xl font-bold mb-2">
                {title}
            </h2>
            <p className="font-normal text-sm text-gray-300">
                {description}
            </p>
        </header>
    )
}