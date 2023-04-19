import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Header({ title }: { title: string }) {
    const [isShowMenu, setIsShowMenu] = useState(false)
    const [menuClass, setMenuClass] = useState("hidden")

    const menu = () => {
        setIsShowMenu(!isShowMenu)
    }

    useEffect(() => {
        isShowMenu ? setMenuClass("") : setMenuClass("hidden")
    }, [isShowMenu])

    return (
        <nav className="bg-gray-800 py-6 relative">
            <div className="container mx-auto flex px-8 xl:px-0">\
                <div className="flex flex-grow">
                    <Image src={"/images/logo.jpg"} width={"40"} height={"3"} alt="logo" className="items-center"/>
                </div>
                <div className="flex lg:hidden">
                    <Image src={"/images/menu.svg"} width={"30"} height={"30"} alt="menu" onClick={menu} />
                </div>
                <div className={`
                    lg:flex 
                    ${menuClass} 
                    flex-grow 
                    justify-between 
                    absolute 
                    lg:relative 
                    lg:top-0 
                    top-20 
                    left-0
                    bg-gray-800
                    w-full
                    lg:w-auto
                    py-14
                    items-center
                    lg:py-0
                    px-8
                    sm:px-24
                    lg:px-0
                `}>

                    <div className="flex flex-col lg:flex-row mb-8 lg:mb-0">
                        <Link href={'/'} className="text-white lg:mr-7 mb-8 lg:mb-0">Home</Link>
                        <Link href={'/about'} className="text-white lg:mr-7 mb-8 lg:mb-0">About</Link>
                        <Link href={'/contact'} className="text-white lg:mr-7 mb-8 lg:mb-0">Contact</Link>
                    </div>

                    <div className="flex flex-col lg:flex-row text-center">
                        <Link className="
                        text-white 
                        border 
                        border-white 
                        py-2.5 
                        px-5 
                        rounded-md 
                        hover:bg-white
                        hover:text-gray-800
                        transition duration-500
                        ease-in-out
                        lg:mr-4
                        mb-8 lg:mb-0
                        "
                            href={'/login'}>Login</Link>
                        <Link className="
                        text-white 
                        bg-blue-500 border 
                        border-blue-500 
                        py-2.5 
                        px-5 
                        rounded-md 
                        hover:bg-blue-600 
                        hover:border-blue-600 
                        transition duration-500
                        ease-in-out
                        mb-8 lg:mb-0
                        "
                            href={'/register'}>Register</Link>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default Header;