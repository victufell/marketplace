import Image from "next/image"

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="bg-background w-full max-w-[1366px] p-10 my-0 mx-auto">
            <div>
                <header>
                    <Image 
                        alt="Marketplace logo"
                        src={'/logo.svg'}
                        width={267}
                        height={68}
                    />
                </header>
                <div>
                    <Image 
                        alt="Marketplace logo"
                        src={'/background.png'}
                        width={755}
                        height={496}
                    />
                </div>

            </div>
            <div>
                {children}
            </div>      
        </section>
    )
}

export default AuthProvider