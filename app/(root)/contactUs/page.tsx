"use client"
import Map from "@/components/Map/map";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from "@/components/form/page";
import TestimonialCarousel from "@/components/Animations/carosal";
import { motion } from 'framer-motion'
import MotionSection from "@/components/Animations/motion";
import { itemVariants, containerVariants } from "@/components/Animations/motion";
const ContactUs = () => {


    const questions: [string, string][] = [
        [
            "What types of projects does Inspace handle?",
            "We specialize in commercial interiors, including supermarkets, department stores, offices, and more. Our services cover everything from design consulting to manufacturing and installation."
        ],
        [
            "Do you offer custom sizes and finishes for display racks?",
            "Absolutely. All our fixtures and racks can be tailored to fit your space and aesthetic preferences—whether it&apos;s color, material, or overall design."
        ],
        [
            "How long does it typically take to complete a project?",
            "The timeline depends on the project scope. After an initial consultation, we provide a detailed plan with clear milestones, ensuring transparency from start to finish."
        ],
        [
            "Can you handle large-scale orders and pan-India delivery?",
            "Yes. Our logistics network enables us to deliver and install across India, so we can easily manage multiple locations or large retail chains."
        ],

    ];
    const steps = [
        ["Tell Us What You Need", "Share your store details, layout, and the fixtures you need—shelves, racks, display units, or custom designs. We&apos;ll review your requirements and provide a clear quote to get started."],
        ["Designing Your Store", "Our design experts create a layout that fits your space and style. You&apos;ll review and adjust the design before we finalize detailed plans for production."],
        ["Crafting Your Fixtures", "Once approved, we start building! Using high-quality materials, we cut, shape, and assemble each fixture with precision to ensure durability and a perfect fit"],
        ["Quality Check & Finishing", "Share your store details, layout, and the fixtures you need—shelves, racks, display units, or custom designs. We&apos;ll review your requirements and provide a clear quote to get started."],
        ["Safe & Timely Delivery", "Your fixtures are given the final touch—custom colors, branding, and protective coatings. We carefully inspect every piece to ensure top quality and long-lasting performance."],
        ["Easy Installation", "Our team installs everything with minimal disruption to your store. We align, secure, and test the fixtures so you&apos;re all set to welcome your customers!"]
    ]
    return (
        <motion.div
            className="w-full mt-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Hero Section */}
            <MotionSection className="mb-5 lg:mb-10">
                <div className="relative w-full h-dvh">
                    <Image src={'/images/contact.jpeg'} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center md:right-2/4 md:top-1/4">
                        <ContactForm />
                    </div>
                </div>
            </MotionSection>

            <motion.div
                variants={containerVariants}
                className="mx-[4vw]"
            >
                {/* Location Section */}
                <MotionSection className="location max-w-7xl mx-auto mb-5 lg:mb-10">
                    <motion.div variants={itemVariants} className="head items-start pb-2">
                        <p className="text-[24px] lg:text-[28px]  font-bold ">
                            Visit Us
                        </p>
                        <p className="text-[12px] w-[300px] md:w-full lg:text-[14px]  text-gray-700 font-medium">
                            See our designs up close and experience our craftsmanship firsthand.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="map flex flex-col lg:flex-row  w-full">
                        <motion.div
                            variants={itemVariants}
                            className="w-full overflow-hidden rounded-md lg:h-[60vh]">
                            <Map />
                        </motion.div>

                        <motion.div variants={containerVariants} className="md:w-1/4 h-auto flex flex-col py-10 justify-evenly gap-3 px-2 lg:pl-4" >
                            <motion.div variants={itemVariants} className="flex gap-2">
                                <div className="bg-[#F5D0FE] h-fit p-2 rounded-full  border border-primary">
                                    <Phone fill="#4A044E" stroke="#F5D0FE" className="size-3 lg:size-5" />
                                </div>
                                <div className="text-[12px] lg:text-[14px]">
                                    <p className="text-primary font-semibold">Phone</p>
                                    <p className="text-primary font-medium">+91 9840861493</p>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex gap-3">
                                <div className="bg-[#F5D0FE] h-fit p-2 rounded-full  border border-primary ">
                                    <Mail fill="#4A044E" stroke="#F5D0FE" className="size-3 lg:size-5" />
                                </div>
                                <div className="text-[12px] lg:text-[14px]">
                                    <p className="text-primary font-semibold">Email</p>
                                    <p className="text-primary font-medium">contact@inspacestore.in</p>
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants} className="flex gap-3">
                                <div className="bg-[#F5D0FE] h-fit p-2 rounded-full  border border-primary">
                                    <MapPin fill="#4A044E" stroke="#F5D0FE" className="size-3 lg:size-5" />
                                </div>
                                <div className="text-[12px] lg:text-[14px]">
                                    <p className="text-primary font-semibold">Office</p>
                                    <p className="text-primary font-medium">No:16, K.K Street,Kasthuri Industrial Estate, Ayanambakkam,Chennai-600 095. Tamil Nadu. India.</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </MotionSection>

                {/* Steps Section */}
                <MotionSection className="step">
                    <motion.div variants={itemVariants} className="head-div w-full gap-6 pb-5 lg:pb-10">
                        <div className="text-start sm:text-center text-black  text-[28px] md:text-[32px] font-bold py-1 px-2">
                            How it works?
                        </div>
                        <div className=" text-start sm:text-center place-self-center font-medium text-xs text-gray-500 lg:text-sm md:w-4/5 py-1 px-2">
                            At Inspace, we make setting up your store simple and hassle-free. Here&apos;s how we bring your vision to life
                        </div>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 max-w-7xl mx-auto px-2"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex place-items-center gap-3 md:gap-10"
                            >
                                <div className="hidden sm:flex bg-primary w-[4px] h-[140px]" />
                                <div className="flex flex-col gap-2 md:gap-5">
                                    <p className=" text-[15px] md:text-[16px] font-bold">
                                        Step {index + 1}: {step[0]}
                                    </p>
                                    <p className="text-[14px] p-1 md:p-0 w-full text-gray-700 leading-normal font-medium">
                                        {step[1]}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </MotionSection>

                {/* Testimonial Section */}
                <MotionSection className="testimonal-div px-[2vw]  max-w-7xl mx-auto py-3 mb-5 lg:mb-10">
                    <motion.div variants={itemVariants} className="head-div w-full pt-5 pb-2 lg:pb-10">
                        <div className="text-start md:text-center text-primary text-[28px] md:text-[32px] font-bold py-1 max-w-7xl  leading-tight">
                            Hear from Those Who&apos;ve Experienced the Inspace Difference
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
                        <TestimonialCarousel />
                    </motion.div>
                </MotionSection>

                {/* FAQ Section */}
                <MotionSection className="caption-div w-full py-5 mb-5 lg:mb-10">
                    <motion.div
                        variants={itemVariants}
                        className="bg-primaryLight rounded-md  py-5"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="head-div place-items-center w-full pb-5 py-3 lg:pb-16"
                        >
                            <p className="text-start md:text-center text-primary text-[28px] md:text-[32px] font-bold py-1 px-2 max-w-7xl  w-full leading-tight">
                                Frequently Asked Questions
                            </p>
                            <p className="text-start sm:text-center place-self-center font-medium text-xs lg:text-sm md:w-4/5 py-1 px-2">
                                Still you have any questions? Contact our Team via <Link href={'/'} className="text-sky-400 font-normal">support@inspacestore.in</Link>
                            </p>
                        </motion.div>
                        <motion.div variants={containerVariants} className="max-w-4xl mx-auto px-4">
                            {questions.map((q, index) => (
                                <motion.div variants={itemVariants} key={index}>
                                    <Accordion type="single" collapsible className="">
                                        <AccordionItem value={`item-${index}`}>
                                            <AccordionTrigger className="text-sm md:text-md font-semibold ">
                                                {q[0]}
                                            </AccordionTrigger>
                                            <AccordionContent className="!text-xs md:text-sm font-[450] leading-relaxed  md:max-w-3xl">
                                                {q[1]}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </MotionSection>
            </motion.div>
        </motion.div>
    );
};


export default ContactUs;