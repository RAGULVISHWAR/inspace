'use client'
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full border-t-2 px-5 md:px-16 ">
            <div className="flex items-center text-[clamp(0.5rem,0.8vw,1rem)] p-5 justify-between">
                <div>© {year} Inspace. All rights reserved.</div>
                <div className="flex ">
                    <div>Terms of Service</div>
                    <div>Privacy Policy</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;