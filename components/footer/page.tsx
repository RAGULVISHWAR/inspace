'use client'
import logo from '@/public/images/logo.png'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
    const [formData, setFormData] = useState({ name: "", phone: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    }
    const year = new Date().getFullYear();
    return (
        <footer className="w-full border-t-2 px-[5%] text-[clamp(0.9rem,1vw,1.2rem)] py-4">
            <div className='hidden md:block'>
                <Image src={logo} alt="logo" className="w-28 md:w-36 h-auto" />
            </div>
            <div className="flex flex-col-reverse md:flex-row justify-evenly pb-5">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4 pb-4 md:place-self-center md:w-2/4">
                    <div className='py-4 px-2'>
                        <div>
                            <p className="text-primary text-[14px] lg:text-[16px] font-semibold  pb-4 lg:pb-7">INFO</p>
                        </div>
                        <div>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700 text-[14px] lg:text-[15px] pb-1 lg:pb-2">About us</p>
                            </Link>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700 text-[14px] lgtext-[15px] pb-1 lg:pb-2">Works</p>
                            </Link>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700 text-[14px] lg:text-[15px] pb-1 lg:pb-2">Contacts</p>
                            </Link>
                        </div>
                    </div>
                    <div className='py-4 px-2'>
                        <div>
                            <p className="text-primary text-[14px] lg:text-[16px] font-semibold  pb-4 lg:pb-7">ABOUT US</p>
                        </div>
                        <div>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700 text-[14px] lg:text-[15px] pb-1 lg:pb-2">Gallery</p>
                            </Link>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700 text-[14px] lg:text-[15px] pb-1 lg:pb-2">Services</p>
                            </Link>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700 text-[14px] lg:text-[15px] pb-1 lg:pb-2">Products</p>
                            </Link>
                        </div>
                    </div>
                    <div className='py-4 px-2'>
                        <div>
                            <p className="text-primary text-[14px] lg:text-[16px] font-semibold  pb-4 lg:pb-7">CONTACT US</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-700 text-[14px] lg:text-[15px] pb-1 lg:pb-2">+91 9876543210</p>
                            <p className="font-medium text-gray-700 text-[14px] lg:text-[15px] pb-1 lg:pb-2">info@inspace.com</p>
                            <p className="font-medium text-gray-700 text-[14px] lg:text-[15px] pb-1 lg:pb-2">No. XX, Street Name, City, State - ZIP</p>
                        </div>
                    </div>
                </div>
                <div className="bg-primary rounded-xl min-w-[300px] max-w-[400px] py-4 lg:py-6 px-6 place-self-center ">
                    <div className="py-2">
                        <p className='font-bold text-gray-500 text-[19px] lg:text-[22px]'>
                            Seeking personalized support?
                        </p>
                        <p className="text-white font-semibold text-[19px] lg:text-[22px]">
                            Request a call from our team
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="py-2">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full p-3 mb-6 border border-white rounded-lg bg-primary "
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                            className="w-full p-3 mb-6 border border-white rounded-lg bg-primary "
                        />
                        <button
                            type="submit"
                            className="w-full p-3  rounded-full bg-primaryLight font-medium"
                        >
                            Send a request
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex items-center text-[clamp(0.5rem,0.8vw,1rem)] p-5 justify-between border-t-2 ">
                <div>© {year} Inspace. All rights reserved.</div>
                <div className="flex space-x-5">
                    <div>Terms of Service</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;