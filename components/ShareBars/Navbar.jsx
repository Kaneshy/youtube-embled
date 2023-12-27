'use client'
import Image from "next/image"
import Link from "next/link"
import GoogleAuth from "../auth/GoogleAuth"


const Navbar = () => {
    return (
        <nav className="flex w-full z-20 fixed top-22 p-2 justify-between text-white ">
            <Link
                href='/'
                className='flex items-center ml-8'>
                <Image src='/assets/logo.svg' alt='logo' width={48} height={48} />
                <p className=' text-heading3-bold font-bold text-xl  max-xs:hidden p-2'> PIXEL </p>
            </Link>

            <div className="gap-x-10 flex">
                <div className="flex gap-x-10  align-middle items-center justify-between max-sm:hidden">
                    <Link href='/Upload'>Upload</Link>
                </div>
                <GoogleAuth />
            </div>

        </nav>
    )
}

export default Navbar