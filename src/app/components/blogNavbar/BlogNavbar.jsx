import logo from '../../assets/logo.webp'
import Image from "next/image";

export default function BlogNavbar() {
    return (
        <>
            <div className="flex justify-between p-4 mx-12">
                <div>
                    <a href="https://flowbite.com/" className="flex items-center">
                        <Image
                            style={{ width: '100%', height: '100%' }}
                            height={100}
                            width={100}
                            src={logo}
                            className="mr-3"
                            alt="Logo"
                        />
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Mango Man
                        </span> */}
                    </a>
                </div>
                <div className='flex items-center gap-6 text-lg'>
                    <div>Lorem</div>
                    <div>Lorem</div>
                    <div>Lorem</div>
                    <div>Lorem</div>
                </div>
            </div>
        </>
    )
}