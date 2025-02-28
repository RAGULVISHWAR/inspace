"use client"
import Map from "@/components/Map/map";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from "@/components/form/page";
import TestimonialCarousel from "@/components/Animations/carosal";
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

const ContactUs = () => {

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 75, // Start further down
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5, // Longer duration
                ease: "easeInOut", // Different easing
            },
        },
    };

    // Modify stagger effect
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Increase stagger
                delayChildren: 0.1, // Add initial delay
            },
        },
    };
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
        [
            "What if I need to update or reconfigure my fixtures later?",
            "Our solutions are modular, so you can easily add, remove, or rearrange components to adapt to changing inventory or layout needs."
        ],
        [
            "How do I get started with an Inspace project?",
            " Simply reach out to our team with your requirements. We&apos;ll set up a consultation, discuss your vision, and propose a tailored solution to meet your goals."
        ]
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
            className="w-full mt-15 flex flex-col gap-10 md:gap-15"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Hero Section */}
            <MotionSection>
                <div className="relative w-full h-screen">
                    <Image src={'/images/contact.jpeg'} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center md:right-2/4 md:top-1/4">
                        <ContactForm />
                    </div>
                </div>
            </MotionSection>

            <motion.div
                variants={containerVariants}
                className="px-4 md:px-10 lg:px-20 flex flex-col gap-10 md:gap-20 lg:gap-25"
            >
                {/* Location Section */}
                <MotionSection className="location">
                    <motion.div variants={containerVariants}>
                        <motion.div variants={itemVariants} className="head flex flex-col md:gap-3 items-start">
                            <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] place-self-center md:place-self-start text-center font-bold">
                                Visit Us
                            </p>
                            <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700 font-medium">
                                See our designs up close and experience our craftsmanship firsthand.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="map flex flex-col md:flex-row">
                            <div className="flex-1">
                                <Map />
                            </div>
                            <motion.div variants={containerVariants} className="flex flex-col gap-3 md:gap-8">
                                <motion.div variants={itemVariants} className="flex gap-3">
                                    <div className="bg-primaryLight p-4 rounded-full w-fit border-2 border-primary">
                                        <Phone fill="#4A044E" stroke="#F5D0FE" />
                                    </div>
                                    <div>
                                        <p className="text-primary font-semibold">Phone</p>
                                        <p className="text-primary font-medium">+91 00000 00000</p>
                                    </div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="flex gap-3">
                                    <div className="bg-primaryLight p-4 rounded-full w-fit border-2 border-primary">
                                        <Mail fill="#4A044E" stroke="#F5D0FE" />
                                    </div>
                                    <div>
                                        <p className="text-primary font-semibold">Mail</p>
                                        <p className="text-primary font-medium">INSPACE@gmail.com</p>
                                    </div>
                                </motion.div>
                                <motion.div variants={itemVariants} className="flex gap-3">
                                    <div className="bg-primaryLight p-4 rounded-full w-fit border-2 border-primary">
                                        <MapPin fill="#4A044E" stroke="#F5D0FE" />
                                    </div>
                                    <div>
                                        <p className="text-primary font-semibold">Office</p>
                                        <p className="text-primary font-medium">1901 Thornridge Cir. Shiloh,Hawaii 81063</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </MotionSection>

                {/* Steps Section */}
                <MotionSection className="step flex flex-col gap-7 md:gap-10">
                    <motion.div variants={itemVariants}>
                        <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-semibold">
                            How it works ?
                        </p>
                        <p className="text-[clamp(0.75rem,1vw,1.5rem)] text-center text-gray-700">
                            We providing world class that help&apos;s you to 10x your speed.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-8"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex place-items-center gap-10"
                            >
                                <div className="hidden sm:flex bg-primary w-2 h-[160px]" />
                                <div className="flex flex-col gap-3 md:gap-5">
                                    <p className="text-[clamp(1rem,1.2vw,1.5rem)] font-semibold">
                                        Step {index + 1}: {step[0]}
                                    </p>
                                    <p className="text-[clamp(1rem,1vw,1.2rem)] font-medium text-gray-700">
                                        {step[1]}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </MotionSection>

                {/* Testimonial Section */}
                <MotionSection className="testimonal flex flex-col gap-7 md:gap-10">
                    <motion.div
                        variants={itemVariants}
                        className="head-div text-primary place-items-center w-full space-y-3 sm:space-y-4 md:space-y-5"
                    >
                        <p className="rounded-full border border-primary p-2 px-6 w-fit font-semibold text-[clamp(0.9rem,1vw,1.2rem)]">
                            Testimonials
                        </p>
                        <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-semibold">
                            Join the customer who&apos;ve already
                        </p>
                        <p className="text-[clamp(0.75rem,1vw,1.5rem)] text-center text-gray-700">
                            We providing world class that help&apos;s you to 10x your speed.
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <TestimonialCarousel />
                    </motion.div>
                </MotionSection>

                {/* FAQ Section */}
                <MotionSection className="question">
                    <motion.div
                        variants={containerVariants}
                        className="caption-div p-5 sm:p-7 md:p-9 lg:p-12 space-y-10"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="head-div text-primary place-items-center w-full space-y-3 sm:space-y-4 md:space-y-5"
                        >
                            <p className="rounded-full border border-primary p-2 px-6 w-fit font-semibold text-[clamp(0.9rem,1vw,1.2rem)]">
                                Caption
                            </p>
                            <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-semibold">
                                Frequently Asked Questions
                            </p>
                            <p className="text-[clamp(0.75rem,1vw,1.5rem)] text-center text-gray-700">
                                Still you have any questions? Contact our Team via{" "}
                                <Link href={'support@inspacestore.in'} className="text-blue-500">
                                    support@inspacestore.in
                                </Link>
                            </p>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="bg-primaryLight rounded-md p-10 sm:mx-5 md:mx-10 lg:mx-20"
                        >
                            <motion.div variants={itemVariants}>
                                <p className="text-[clamp(1rem,1.2vw,2.2rem)] font-semibold">
                                    Category goes here
                                </p>
                                <p className="hidden md:block text-[clamp(0.9rem,1vw,1.2rem)]">
                                    Lorem ipsum dolor sit amet consectetur. Sit et phasellus ullamcorper at.
                                </p>
                            </motion.div>
                            <motion.div variants={containerVariants}>
                                {questions.map((q, index) => (
                                    <motion.div variants={itemVariants} key={index}>
                                        <Accordion type="single" collapsible className="w-full sm:pt-3 md:pt-6 lg:pt-10">
                                            <AccordionItem value={`item-${index}`}>
                                                <AccordionTrigger className="text-[clamp(1rem,1.2vw,2.2rem)]">
                                                    {q[0]}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-[clamp(0.9rem,1vw,1.2rem)] lg:mr-9">
                                                    {q[1]}
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </MotionSection>
            </motion.div>
        </motion.div>
    );
};
function MotionSection({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true, // Repeat animation
        margin: "0px 0px -200px 0px", // Trigger earlier
        amount: 0.1, // Trigger when 20% visible
    });
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Stagger each child by 0.1s
            },
        },
    };
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default ContactUs;