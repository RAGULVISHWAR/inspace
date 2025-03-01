"use client"
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import home from "@/public/images/home-img.png"
import Image from "next/image";
import { datas } from "@/db/datas"
import Link from "next/link";
import { motion } from "framer-motion"
import { Marquee } from "@/components/magicui/marquee";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import MotionSection from "@/components/Animations/motion";
import { itemVariants, containerVariants } from "@/components/Animations/motion";
const AboutUS = () => {
    const fact = ["/images/fact1.png", "/images/fact2.png", "/images/fact3.png", "/images/fact1.png", "/images/fact2.png",];
    const userj = [
        {
            sno: "01",
            name: "Share Your Requirements",
            desc: "It all starts with you! Tell us about your retail space, the fixtures you need—whether it&apos;s shelving, display units, counters, or customized solutions. Share your store layout, branding preferences, and any specific requirements. Our team will assess your needs and provide a detailed quotation with pricing, timelines, and terms to get started.",
            img: "/images/mission.png"
        },
        {
            sno: "02",
            name: "Design That Fits Your Space",
            desc: "It all starts with you! Tell us about your retail space, the fixtures you need—whether it&apos;s shelving, display units, counters, or customized solutions. Share your store layout, branding preferences, and any specific requirements. Our team will assess your needs and provide a detailed quotation with pricing, timelines, and terms to get started.",
            img: "/images/vision.png"
        },
        {
            sno: "03",
            name: "High-Quality Manufacturing",
            desc: "It all starts with you! Tell us about your retail space, the fixtures you need—whether it&apos;s shelving, display units, counters, or customized solutions. Share your store layout, branding preferences, and any specific requirements. Our team will assess your needs and provide a detailed quotation with pricing, timelines, and terms to get started.",
            img: "/images/mission.png"
        },
        {
            sno: "04",
            name: "Finishing & Quality Checks",
            desc: "It all starts with you! Tell us about your retail space, the fixtures you need—whether it&apos;s shelving, display units, counters, or customized solutions. Share your store layout, branding preferences, and any specific requirements. Our team will assess your needs and provide a detailed quotation with pricing, timelines, and terms to get started.",
            img: "/images/vision.png"
        },

    ]
    return (
        <motion.div
            className="w-full h-full mt-20 space-y-10 md:space-y-16 lg:space-y-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Welcome Section */}
            <MotionSection className="welcome-div relative w-full h-screen">
                <Image src={home} alt="home" fill className="object-cover object-center" />
                <motion.div
                    variants={itemVariants}
                    className="absolute left-0 bottom-0 w-full p-5 mb-16 md:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: -70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-white font-medium text-[clamp(2rem,6vw,4.5rem)]"
                    >
                        <p>INSPACE RETAIL</p>
                        <p>DISPLAYS FOR SHOP</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 70 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-4"
                    >
                        <div className="text-gray-100 text-base sm:text-lg max-w-md">
                            We use modern techniques to boost sustainable farming and protect the environment.
                        </div>
                        <div className="flex space-x-4">
                            <Button className="rounded-full text-base md:text-lg px-6 md:px-12 py-3 md:py-5 transition-all duration-300 ease-in-out transform hover:scale-105">
                                Get Started
                            </Button>
                            <Button className="rounded-full border-2 border-white bg-transparent text-base md:text-lg px-6 md:px-12 py-3 md:py-5 transition-all duration-200 ease-in-out transform hover:bg-transparent hover:scale-105">
                                Know More
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </MotionSection>

            <motion.div
                variants={containerVariants}
                className="px-4 md:px-10 lg:px-20 flex flex-col gap-16 md:gap-24"
            >
                {/* Attention Section */}
                <MotionSection className="Attention flex flex-col-reverse md:flex-row gap-10 md:gap-20">
                    <motion.div variants={itemVariants} className="space-y-5 md:space-y-10 lg:space-y-16">
                        <p className="text-[clamp(2rem,3vw,4rem)] text-black font-semibold">
                            Attention and Maximum Attention to Detail
                        </p>
                        <p className="text-gray-700 text-[clamp(1rem,1.2vw,2.2rem)] font-medium">
                            At Inspace, we specialize in transforming retail environments...
                        </p>
                        <div className="flex w-full md:w-2/4 gap-5">
                            <Button className="rounded-full">Book A Call</Button>
                            <Button className="rounded-full bg-transparent text-primary border-2 hover:bg-transparent border-primary">
                                Learn More
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex">
                        <HeroVideoDialog
                            videoSrc={"/video.mp4"}
                            thumbnailAlt="video"
                            thumbnailSrc="/images/fresh.png"
                            className="w-[400px] h-[250px] md:h-[500px] md:w-[600px]"
                        />
                    </motion.div>
                </MotionSection>

                {/* Team Section */}
                <MotionSection className="Teem space-y-5 md:space-y-10 lg:space-y-16">
                    <motion.div variants={itemVariants} className="space-y-2 md:space-y-5 lg:space-y-7">
                        <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center text-primary font-semibold">
                            Meet Our Team
                        </p>
                        <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700">
                            We provide world-class solutions that help you 10x your speed.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-2 md:p-6"
                    >
                        {[
                            { name: "Sandesh Koshti", role: "FOUNDER", img: "/images/founder.png" },
                            { name: "Sandesh Koshti", role: "CO-FOUNDER", img: "/images/co-founder.png" },
                            { name: "Sandesh Koshti", role: "MANAGER", img: "/images/manager.png" },
                        ].map((member, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="border-2 border-primaryLight rounded-sm w-full h-[350px] lg:h-[450px] flex flex-col gap-y-2"
                            >
                                <div className="relative w-full h-full">
                                    <Image src={member.img} alt={member.role.toLowerCase()} fill className="object-contain" />
                                </div>
                                <div className="place-items-center">
                                    <p className="font-bold text-primary text-[clamp(1rem,1.5vw,1.75rem)]">
                                        {member.name}
                                    </p>
                                    <p className="text-gray-600 font-semibold text-[clamp(0.75rem,1vw,1.5rem)]">
                                        {member.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div variants={itemVariants} className="marquee">
                        <div className="relative space-y-2 md:space-y-5 lg:space-y-7">
                            <Marquee reverse pauseOnHover className="[--duration:20s]">
                                <div className="flex flex-row gap-4 md:gap-10">
                                    {datas.teams.slice(0, 4).map((member, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="flex rounded-full border-2 border-dashed border-black w-fit p-4 pr-20 gap-5"
                                        >
                                            <div className="relative overflow-hidden rounded-full w-[50px] h-[50px] md:w-[80px] md:h-[80px]">
                                                <Image src={member.pic} alt={member.name} fill className="object-contain overflow-hidden" />
                                            </div>
                                            <div className="h-fit flex flex-col gap-2">
                                                <div>
                                                    <p className="text-[clamp(0.75rem,1vw,2rem)] font-semibold">{member.name}</p>
                                                    <p className="text-[clamp(0.75rem,1vw,2rem)] text-gray-600">{member.role}</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Link href={member.linkedin} className="text-primary text-[clamp(0.75rem,1vw,2rem)] hover:text-black/70 font-medium">
                                                        Linkedin
                                                    </Link>
                                                    <Link href={member.twitter} className="text-primary text-[clamp(0.75rem,1vw,2rem)] hover:text-black/70 font-medium">
                                                        Twitter
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Marquee>
                            <Marquee pauseOnHover className="[--duration:20s]">
                                <div className="flex flex-row gap-4 md:gap-10">
                                    {datas.teams.slice(4, 8).map((member, index) => (
                                        <motion.div
                                            key={index}
                                            variants={itemVariants}
                                            className="flex rounded-full border-2 border-dashed border-black w-fit p-4 pr-20 gap-5"
                                        >
                                            <div className="relative overflow-hidden rounded-full w-[50px] h-[50px] md:w-[80px] md:h-[80px]">
                                                <Image src={member.pic} alt={member.name} fill className="object-contain overflow-hidden" />
                                            </div>
                                            <div className="h-fit flex flex-col gap-2">
                                                <div>
                                                    <p className="text-[clamp(0.75rem,1vw,2rem)] font-semibold">{member.name}</p>
                                                    <p className="text-[clamp(0.75rem,1vw,2rem)] text-gray-600">{member.role}</p>
                                                </div>
                                                <div className="flex gap-4">
                                                    <Link href={member.linkedin} className="text-primary text-[clamp(0.75rem,1vw,2rem)] hover:text-black/70 font-medium">
                                                        Linkedin
                                                    </Link>
                                                    <Link href={member.twitter} className="text-primary text-[clamp(0.75rem,1vw,2rem)] hover:text-black/70 font-medium">
                                                        Twitter
                                                    </Link>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </Marquee>
                            <div className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                            <div className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                        </div>
                    </motion.div>
                </MotionSection>

                {/* Vision & Mission Section */}
                <MotionSection className="Vission-mission space-y-5 md:space-y-10 lg:space-y-16">
                    <motion.div
                        variants={itemVariants}
                        className="flex-row md:flex md:gap-20 lg:gap-24 p-2 sm:p-3 lg:p-5"
                    >
                        <div className="relative w-full h-[250px] md:w-1/2 md:h-[400px] overflow-hidden rounded-md">
                            <Image src={'/images/mission.png'} alt="mission" fill className="object-contain" />
                        </div>
                        <motion.div variants={itemVariants} className="w-full md:w-1/2 pt-2 md:pt-5 space-y-2 md:space-y-5 lg:space-y-7">
                            <p className="font-bold text-[clamp(2rem,2.8vw,3.5rem)]">Our Mission</p>
                            <p className="text-gray-600 text-[clamp(0.8rem,1vw,1.5rem)] font-medium">
                                To redefine retail spaces with smart, functional, and visually appealing display solutions, helping businesses create engaging shopping experiences that drive customer satisfaction and sales.</p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={itemVariants}
                        className="flex-row md:flex md:flex-row-reverse gap-5 md:gap-20 lg:gap-24 p-2 sm:p-3 lg:p-5"
                    >
                        <div className="relative w-full h-[250px] md:w-1/2 md:h-[400px] overflow-hidden rounded-md">
                            <Image src={'/images/vision.png'} alt="vision" fill className="object-contain" />
                        </div>
                        <motion.div variants={itemVariants} className="w-full md:w-1/2 pt-2 md:pt-5 space-y-2 md:space-y-5 lg:space-y-7">
                            <p className="font-bold text-[clamp(2rem,2.8vw,3.5rem)]">Our Vission</p>
                            <p className="text-gray-600 text-[clamp(0.8rem,1vw,1.5rem)] font-medium">
                                To be a leading provider of retail interiors, setting new industry standards with cutting-edge design, sustainable practices, and innovative solutions that empower brands to succeed in an evolving marketplace.At Inspace, we don&apos;t just build fixtures—we create impactful retail experiences that bring brands to life!</p>
                        </motion.div>
                    </motion.div>
                </MotionSection>

                {/* User Journey Section */}
                <MotionSection className="Journey flex flex-col gap-10 md:gap-20">
                    <motion.div variants={itemVariants} className="space-y-2 md:space-y-5 lg:space-y-7">
                        <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-bold text-primary">
                            User Journey
                        </p>
                        <p className="hidden md:flex text-[clamp(1rem,1.2vw,2rem)] font-medium text-center text-gray-700">
                            At Inspace, we bring your retail vision to life with a seamless and structured process. From design to installation, we take care of every detail to ensure your store is both functional and visually stunning. Here&apos;s how we make it happen:</p>
                    </motion.div>
                    <motion.div variants={containerVariants} className="flex flex-col gap-10 lg:gap-20">
                        {userj.map((user, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`flex flex-col gap-5 md:gap-7 lg:gap-14 place-items-center ${(index + 1) % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                            >
                                <div className="flex w-1/2 md:w-1/6 gap-2 place-self-start md:place-self-center">
                                    <div className="font-bold text-[clamp(2rem,2.8vw,3.5rem)] place-self-center">
                                        {user.sno}
                                    </div>
                                    <div className="text-gray-700 font-semibold text-[clamp(1rem,1.5vw,2.5rem)] place-self-center h-fit line-clamp-2">
                                        {user.name}
                                    </div>
                                </div>
                                <div className="text-[clamp(0.8rem,1vw,1.5rem)] md:w-3/6 font-medium">
                                    {user.desc}
                                </div>
                                <div className="relative overflow-hidden rounded-md w-full h-[250px] md:h-[400px] md:w-2/6">
                                    <Image src={user.img} alt={user.name} fill className="object-cover" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </MotionSection>

                {/* Factory Section */}
                <MotionSection className="Factory flex flex-col gap-10 md:gap-20">
                    <motion.div variants={itemVariants} className="space-y-2 md:space-y-5 lg:space-y-7">
                        <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-bold text-primary">
                            Explore Our Factory
                        </p>
                        <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700 font-medium">
                            Save your Irreplaceable time by using our Components with No Compromise on Design.
                        </p>
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
                <MotionSection className="Award rounded-lg border-2 border-black/50 w-full p-3 md:p-5 lg:p-10 space-y-5 md:space-y-10 lg:space-y-16">
                    <motion.div variants={itemVariants} className="place-self-center">
                        <p className="font-semibold text-[clamp(1.2rem,1.8vw,3.5rem)]">
                            The Story Behind Our
                        </p>
                        <p className="font-bold text-primary text-[clamp(1.2rem,1.8vw,3.5rem)]">
                            Award-Winning Projects
                        </p>
                    </motion.div>
                    <motion.div variants={containerVariants} className="md:flex space-y-5">
                        {[1, 2, 3].map((num) => (
                            <motion.div
                                key={num}
                                variants={itemVariants}
                                className="relative w-full h-[250px] md:w-1/3 md:h-[400px] overflow-hidden rounded-md"
                            >
                                <Image src={`/images/award${num}.png`} alt={`award${num}`} fill className="object-contain" />
                            </motion.div>
                        ))}
                    </motion.div>
                </MotionSection>

                {/* Form Section */}
                <MotionSection className="Form p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full h-[500px] md:h-screen rounded-lg overflow-hidden"
                    >
                        <Image src={"/images/form.png"} alt="form" fill className="object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Add your ContactForm component here if needed */}
                        </div>
                    </motion.div>
                </MotionSection>
            </motion.div>
        </motion.div>
    );
}

export default AboutUS;