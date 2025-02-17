'use client'
import logo from '@/public/images/logo.png'
import Image from "next/image";
import Link from 'next/link';
import { Mail, Bell, Menu } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

const Header = () => {
    return (
        // backdrop-blur-md bg-black/30
        <header className="z-50 fixed top-0 px-4 md:px-8 lg:px-10 w-full sm:py-1 bg-white">
            <div className="flex items-center justify-between">
                <div>
                    <Image src={logo} alt="logo" className="w-28 md:w-36 h-auto" />
                </div>
                <nav className="hidden sm:flex items-center space-x-4 md:space-x-8 lg:space-x-12 ">
                    {[['Home', '/'], ['About Us', '/'], ['Projects', '/'], ['Insights', '/']].map((item, index) => (
                        <Link href={item[1]} key={index}>
                            <div className="relative group text-primary hover:text-gray-600 text-sm md:text-base lg:text-lg font-bold">
                                <p>{item[0]}</p>
                                <span className="absolute left-0 bottom-[-5px] w-0 h-[3px] bg-primary transition-all duration-300 group-hover:w-full"></span>
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
                    <div className="bg-[#4A044E] p-2 rounded-md px-4 text-white">
                        Contact Us
                    </div>

                </div>
                <div className='sm:hidden'>
                    <Sheet >
                        <SheetTrigger asChild>
                            <Menu className='text-primary' />
                        </SheetTrigger>
                        <SheetContent className='bg-primaryLight'>
                            <SheetHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Image src={logo} alt="logo" className="w-28 md:w-36 h-auto" />
                                    </div>
                                </div>
                                <SheetTitle></SheetTitle>
                            </SheetHeader>
                            <div className='flex flex-col space-y-5 p-4'>
                                {[['Home', '/'], ['About Us', '/'], ['Projects', '/'], ['Insights', '/']].map((item, index) => (
                                    <Link href={item[1]} key={index}>
                                        <SheetClose asChild>
                                            <div className="relative group text-primary hover:text-gray-600 text-xl font-bold">
                                                <p>{item[0]}</p>
                                            </div>
                                        </SheetClose>
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

export default Header;