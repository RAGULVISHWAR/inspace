'use client'
import logo from '@/public/images/logo.png'
import Image from "next/image";
import Link from 'next/link';
import { Mail, Bell } from 'lucide-react';

const Header = () => {
    return (
        <header className="z-50 absolute top-0 px-4 md:px-8 lg:px-10 w-full py-4">
            <div className="flex items-center justify-between">
                <div>
                    <Image src={logo} alt="logo" className="w-28 md:w-36 h-auto" />
                </div>
                <nav className="hidden sm:flex items-center space-x-4 md:space-x-8 lg:space-x-12">
                    {[['Home', '/'], ['About Us', '/'], ['Products', '/'], ['Projects', '/'], ['Insights', '/']].map((item, index) => (
                        <Link href={item[1]} key={index}>
                            <div className="relative group text-white text-sm md:text-base lg:text-lg">
                                {item[0]}
                                <span className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-[#4A044E] transition-all duration-300 group-hover:w-full"></span>
                            </div>
                        </Link>
                    ))}
                </nav>
                <div className="hidden sm:flex space-x-4">
                    <div className="bg-[#4A044E] p-2 rounded-md">
                        <Mail fill="#F5D0FE" color="#4A044E" />
                    </div>
                    <div className="bg-[#4A044E] p-2 rounded-md">
                        <Bell fill="#F5D0FE" color="#F5D0FE" />
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Header;