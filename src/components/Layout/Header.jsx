    import Image from "next/image"
import falcoLogo from '../../../public/assets/images/falco-full-logo-white-text.png'
import option from '../../../public/assets/images/option.png'

export const Header = () => {


    return (

        <header className="absolute px-[20px] top-0 left-0 right-0 z-50  min-h-[165px] w-full ">
            <div className="container pt-[37px] h-full  mx-auto flex justify-between items-center ">
                    <div>
                        <Image
                            src={falcoLogo}
                            alt="logo"
                            priority
                            className="w-[188px] md:w-[300px] "
                        />
                    </div>
                    {/* <div className="md:mr-[40px]">
                        <Image
                            src={option}
                            alt="logo"
                            className="w-[29px] md:w-[36px] "
                        />
                    </div>               */}
            </div>
        </header>


    )
}