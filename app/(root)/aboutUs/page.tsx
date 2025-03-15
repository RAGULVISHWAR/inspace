"use client"
import home from "@/public/images/Hero-About-us1.webp"
import Image from "next/image";
import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MotionSection from "@/components/Animations/motion";
import { itemVariants, containerVariants } from "@/components/Animations/motion";
import { Counter } from "@/components/Animations/counter";

const AboutUS = () => {

    const fact = ["/images/fact1.png", "/images/fact2.png", "/images/fact3.png", "/images/fact1.png", "/images/fact2.png",];
    const userj = [
        {
            sno: "01",
            name: "Share Your Requirements",
            desc: "It all starts with you! Tell us about your retail space, the fixtures you need—whether it's shelving, display units, counters, or customized solutions. Share your store layout, branding preferences, and any specific requirements. Our team will assess your needs and provide a detailed quotation with pricing, timelines, and terms to get started.",
            img: "/images/06.webp"
        },
        {
            sno: "02",
            name: "Design That Fits Your Space",
            desc: "It all starts with you! Tell us about your retail space, the fixtures you need—whether it's shelving, display units, counters, or customized solutions. Share your store layout, branding preferences, and any specific requirements. Our team will assess your needs and provide a detailed quotation with pricing, timelines, and terms to get started.",
            img: "/images/05.webp"
        },
        {
            sno: "03",
            name: "High-Quality Manufacturing",
            desc: "It all starts with you! Tell us about your retail space, the fixtures you need—whether it's shelving, display units, counters, or customized solutions. Share your store layout, branding preferences, and any specific requirements. Our team will assess your needs and provide a detailed quotation with pricing, timelines, and terms to get started.",
            img: "/images/06.webp"
        },
        {
            sno: "04",
            name: "Finishing & Quality Checks",
            desc: "It all starts with you! Tell us about your retail space, the fixtures you need—whether it's shelving, display units, counters, or customized solutions. Share your store layout, branding preferences, and any specific requirements. Our team will assess your needs and provide a detailed quotation with pricing, timelines, and terms to get started.",
            img: "/images/hero-project.webp"
        },

    ]
    return (
        <motion.div
            className="w-full h-full flex flex-col gap-5 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Welcome Section */}
            <MotionSection className="welcome-div relative w-full h-dvh">
                <Image src={home} alt="home" fill className="object-cover object-center" />
                <motion.div
                    variants={itemVariants}
                    className="absolute left-0 bottom-0 w-full ml-[5vw] mb-[5vh] flex flex-col sm:flex-row justify-between items-start sm:items-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="text-white font-bold text-2xl md:text-3xl lg:text-4xl  max-w-[70vw] lg:max-w-3xl"
                    >
                        <p className="leading-[1.5] md:leading-[1.2]">Our Story</p>
                    </motion.div>
                </motion.div>
            </MotionSection>

            <motion.div
                variants={containerVariants}
                className="max-w-[90%] mx-auto"
            >
                {/* Attention Section */}
                <MotionSection className="Attention grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 py-5 lg:py-10">
                    <motion.div variants={itemVariants} className="lg:place-content-center lg:ml-5">
                        <p className=" text-black text-lg md:text-xl font-semibold py-3">
                            Attention and Maximum Attention to Detail
                        </p>
                        <p className="text-gray-600 text-md md:text-[15px] font-medium py-3  leading-relaxed">
                            At Inspace, we specialize in transforming retail environments with innovative, high-quality display solutions. With a focus on functionality, aesthetics, and durability, we design and manufacture shelving, racks, display units, and customized retail fixtures that enhance customer experience and optimize store layouts. From concept to installation, we deliver seamless, end-to-end solutions tailored to your brand&apos;s needs.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="w-full h-[300px] md:h-[450px]  aspect-auto rounded-lg shadow-xl overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/kHkDSkPBzt8?si=hbUppku73p8AGQlz"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </motion.div>

                </MotionSection>
                <MotionSection className="achievements-div items-center mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 px-[2vw] max-w-7xl py-5 lg:py-10 mb-5 lg:mb-10 ">
                    <motion.div variants={itemVariants} className="relative bg-primaryLight p-4 rounded-md text-primary text-start shadow-lg">

                        <Counter target={38} plus="+" classname="text-3xl xl:text-7xl font-medium text-primary" />

                        <p className="font-normal text-xs lg:text-md xl:text-lg py-2 ml-1">Years</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="relative bg-primaryLight p-4 rounded-md text-primary text-start shadow-lg">

                        <Counter target={1200} plus="+" classname="text-3xl xl:text-7xl font-medium text-primary" />

                        <p className="font-normal text-xs lg:text-md  xl:text-lg py-2 ml-1">Projects Completed</p>

                    </motion.div>
                    <motion.div variants={itemVariants} className="relative bg-primaryLight p-4 srounded-md text-primary col-span-2 md:col-span-1 shadow-lg">

                        <Counter target={7} classname="text-3xl xl:text-7xl font-medium text-primary" />

                        <p className="font-normal text-xs lg:text-md  xl:text-lg py-2 ml-1">Operating Location</p>

                    </motion.div>
                </MotionSection>
                {/* Team Section */}
                <MotionSection className="Teem py-5 lg:py-10 max-w-7xl mx-auto">
                    <motion.div variants={itemVariants} className="head-div w-full gap-6 py-10">
                        <div className="text-start sm:text-center text-primary  text-[28px] md:text-[32px] font-bold py-1 px-4">
                            Meet Our Team
                        </div>
                        <div className="text-start text-gray-600 text-[13px] lg:text-[15px] md:text-center place-self-center font-medium text-xs lg:text-sm sm:w-2/4 md:w-4/5 py-1 ">
                            The Pioneers Behind Every Curve, Joint, and Bespoke Masterpiece
                        </div>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-10 pb-5 lg:pb-10"
                    >
                        {[
                            { name: "Mr.Prabhakaran", role: "Chairman", img: "/images/founder.webp" },
                            { name: "Mr.Harihara Subramanian", role: "Managing Director", img: "/images/co-founder.webp" },
                            { name: "Mr.Karthikeyan", role: "Director", img: "/images/manager.webp" },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="border-2 border-primary w-full  rounded-md"
                            >
                                <div className="w-full p-4 ">
                                    <div className="relative aspect-square rounded-md overflow-hidden" >
                                        <Image src={member.img} alt={member.role.toLowerCase()} fill className="object-cover" />
                                    </div>
                                    <div className="">
                                        <p className="font-bold text-primary text-[clamp(1rem,1.5vw,1.75rem)]">
                                            {member.name}
                                        </p>
                                        <p className="text-gray-600 font-semibold text-[clamp(0.75rem,1vw,1.5rem)]">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className=" w-full h-full py-5 lg:py-10"
                    >
                        <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[500px] overflow-hidden rounded-lg">
                            <Image src={"/images/Team.webp"} alt="team" fill className="object-cover  w-full h-full" />
                        </div>

                    </motion.div>
                    { /* Vision & Mission Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex-row lg:flex gap-12 py-5 lg:py-10"
                    >
                        <div className="relative w-full h-[250px] lg:w-1/2 md:h-[400px] overflow-hidden rounded-md ">
                            <Image src={'/images/Mission.webp'} alt="mission" fill className="object-cover" />
                        </div>
                        <motion.div variants={itemVariants} className="w-full lg:w-1/2 lg:place-content-center pt-2">
                            <p className="font-bold text-[23px] md:text-[25px] pb-3">Our Mission</p>
                            <p className="text-gray-600  text-[14px] md:text-[16px] font-medium">
                                To redefine retail spaces with smart, functional, and visually appealing display solutions, helping businesses create engaging shopping experiences that drive customer satisfaction and sales.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="flex-row lg:flex lg:flex-row-reverse gap-12 py-5 lg:py-10"
                    >
                        <div className="relative w-full h-[250px] lg:w-1/2 md:h-[400px] overflow-hidden rounded-md">
                            <Image src={'/images/Vision.webp'} alt="vision" fill className="object-cover" />
                        </div>
                        <motion.div variants={itemVariants} className="w-full lg:w-1/2 lg:place-content-center pt-2">
                            <p className="font-bold text-[23px] md:text-[25px] pb-3">Our Vission</p>
                            <p className="text-gray-600  text-[14px] md:text-[16px] font-medium">
                                To be a leading provider of retail interiors, setting new industry standards with cutting-edge design, sustainable practices, and innovative solutions that empower brands to succeed in an evolving marketplace.At Inspace, we don&apos;t just build fixtures—we create impactful retail experiences that bring brands to life!
                            </p>
                        </motion.div>
                    </motion.div>

                </MotionSection>

                {/* User Journey Section */}
                <MotionSection className="Journey flex flex-col gap-3 md:gap-6 max-w-7xl mx-auto">
                    <motion.div variants={itemVariants} className="head-div w-full gap-6 py-5 lg:py-10">
                        <div className="text-start sm:text-center text-primary  text-[28px] md:text-[32px] font-bold py-1 px-4">
                            Your Retail Transformation in Six Simple Steps
                        </div>
                        <div className=" text-start  text-gray-600 text-[13px] lg:text-[15px] md:text-center place-self-center font-medium text-xs lg:text-sm sm:w-2/4 md:w-4/5 py-1 ">
                            The Pioneers Behind Every Curve, Joint, and Bespoke Masterpiece
                        </div>
                    </motion.div>
                    <motion.div variants={containerVariants} className="flex flex-col ">
                        {userj.map((user, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`flex flex-col gap-6 lg:gap-12 ${(index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} py-5 lg:py-10`}
                            >
                                <div className="flex flex-col lg:flex-row gap-3 lg:gap-6 place-self-center">
                                    <div className="flex gap-5">
                                        <div className="font-bold text-[27px]">
                                            {user.sno}
                                        </div>
                                        <div className="text-gray-500 font-bold line-clamp-2 text-[23px] max-w-[200px] ">
                                            {user.name}
                                        </div>
                                    </div>
                                    <div className="font-medium max-w-[400px] text-[14px] text-gray-700 leading-relaxed">
                                        {user.desc}
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-md w-full h-[250px] lg:h-[300px] max-w-[400px]">
                                    <Image src={user.img} alt={user.name} fill className="object-cover" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </MotionSection>

                {/* Factory Section */}
                <MotionSection className="Factory flex flex-col gap-6 py-5 lg:py-10">
                    <motion.div variants={itemVariants} className="head-div w-full gap-6 pb-5">
                        <div className="text-start sm:text-center text-primary  text-[28px] md:text-[32px] font-bold py-1 px-4">
                            Explore Our Factory
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Carousel>
                            <CarouselContent>
                                {fact.map((img, index) => (
                                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="relative w-full h-[400px] overflow-hidden rounded-md">
                                            <Image src={img} alt={`fact-${index}`} fill className="object-cover" />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden sm:flex text-white p-5 bg-primary hover:scale-105 hover:bg-primaryLight" />
                            <CarouselNext className="hidden sm:flex text-white p-5 bg-primary hover:scale-105 hover:bg-primaryLight" />
                        </Carousel>
                    </motion.div>
                </MotionSection>

                {/* Award Section */}
                <MotionSection className="Award rounded-lg border-2 border-black/50 w-full px-4 py-5 xl:py-10 xl:px-8">
                    <motion.div variants={itemVariants} className="head-div w-full py-2 xl:pl-16 pb-5">
                        <div className=" text-start  text-black text-[20px] lg:text-[35px] font-bold leading-tight">
                            Certified Excellence
                        </div>
                        <div className=" text-start text-primary text-[20px] lg:text-[35px] font-bold leading-tight">
                            Commitment to Quality & Innovation
                        </div>
                    </motion.div>
                    <motion.div variants={containerVariants} className="w-full md:flex pb-5">
                        {[1, 2, 3].map((num) => (
                            <motion.div
                                key={num}
                                variants={itemVariants}
                                className="relative w-full h-[250px] md:h-[400px] overflow-hidden rounded-md mb-3"
                            >
                                <Image src={`/images/award${num}.png`} alt={`award${num}`} fill className="object-contain" />
                            </motion.div>
                        ))}
                    </motion.div>
                </MotionSection>

                {/* Form Section */}
            </motion.div>

        </motion.div>
    );
}

export default AboutUS;