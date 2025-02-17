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
        <footer className="w-full border-t-2 px-5 md:px-16 text-[clamp(0.9rem,1vw,1.2rem)] py-4">
            <div className='hidden md:block'>
                <Image src={logo} alt="logo" className="w-28 md:w-36 h-auto" />
            </div>
            <div className="flex flex-col-reverse md:flex-row gap-5">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-4 md:place-self-center">
                    <div>
                        <div>
                            <p className="text-primary font-semibold">Info</p>
                        </div>
                        <div>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700">About us</p>
                            </Link>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700">Works</p>
                            </Link>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700">Contacts</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-primary font-semibold">About us</p>
                        </div>
                        <div>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700">Gallery</p>
                            </Link>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700">Services</p>
                            </Link>
                            <Link href={'/'}>
                                <p className="font-medium text-gray-700">Products</p>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-primary font-semibold">Contact us</p>
                        </div>
                        <div>
                            <p className="font-medium text-gray-700">+91 9876543210</p>
                            <p className="font-medium text-gray-700">info@inspace.com</p>
                            <p className="font-medium text-gray-700">No. XX, Street Name, City, State - ZIP</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 bg-primary rounded-lg md:w-1/3 py-5">
                    <div className="py-4 text-gray-600 ">
                        <p>
                            Seeking personalized support?
                        </p>
                        <p className="text-white">
                            Request a call from our team
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full p-2 border border-white rounded-lg bg-primary "
                        />
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                            className="w-full p-2 border border-white rounded-lg bg-primary "
                        />
                        <button
                            type="submit"
                            className="w-full p-2 rounded-full bg-primaryLight"
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