"use client"
import { motion } from "framer-motion";
import MotionSection from "@/components/Animations/motion";
import { itemVariants, containerVariants } from "@/components/Animations/motion";
import Image from "next/image";
import { datas } from "@/db/datas";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
interface Content {
    head: string;
    body: string
}
interface Design {
    id: string;
    name: string;
    img: string; // Array of image URLs
    desc: string;
    content: Content[];
}
const DesignBlog = ({ blog }: { blog: Design }) => {
    const [suggestedProjects, setSuggestedProjects] = useState<Design[] | null>(null);
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

    useEffect(() => {
        if (datas.designs && blog.id) {
            // Filter out the selected project
            const filteredProjects = datas.designs.slice(0, 5).filter(proj => proj.id !== blog.id);

            // Shuffle and select 3 random projects
            const shuffled = filteredProjects.sort(() => 0.5 - Math.random()).slice(0, 3);

            setSuggestedProjects(shuffled as Design[]);
        }
    }, [blog.id]);
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-28  px-4 lg:px-10 flex flex-col gap-5 lg:gap-20"
        >
            <MotionSection className="h-screen px-2 flex flex-col gap-16 lg:gap-20">
                <motion.div
                    variants={itemVariants}
                    className="relative w-full h-[60vh] rounded-md overflow-hidden">
                    <Image
                        src={blog.img}
                        alt={`${blog.name}`}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-70"></div>
                    <motion.div
                        variants={itemVariants}
                        className="absolute text-lg md:text-2xl text-white font-bold  bottom-4 md:bottom-6 left-0 text-start px-6 py-4 "
                    >
                        {blog.name}
                    </motion.div>
                </motion.div>
                <motion.div
                    className="px-2 lg:px-4 flex flex-col gap-2"
                    variants={itemVariants}
                >
                    <div>
                        <p className=" text-lg lg:text-3xl font-bold">{blog.name}</p>
                    </div>
                    <div className="w-full border-b border-gray-400 p-2 lg:p-4"></div>
                    <p className=" text-md lg:text-lg text-gray-600 font-medium leading-snug lg:leading-loose mt-4">
                        {blog.desc}
                    </p>
                </motion.div>
            </MotionSection>
            <MotionSection
                className=""
            >
                <motion.div
                    variants={containerVariants}
                    className="px-4 lg:px-6 flex flex-col gap-2 lg:gap-3 "
                >
                    {
                        blog.content.map((con, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="my-4">
                                <p className="font-semibold text-md lg:text-xl leading-normal lg:leading-relaxed">{con.head}:<span className="font-medium  text-gray-600 leading-snug lg:leading-loose">{' '}{con.body}</span></p>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </MotionSection>
            <MotionSection>
                <motion.div
                    variants={containerVariants}
                    className="w-full place-items-center"
                >
                    <p className="text-4xl font-bold text-primary">Explore More</p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8 p-2 sm:p-3 md:p-5 lg:p-7">
                    {suggestedProjects?.map((prj, index) => (
                        <Link href={`/blog/${prj.id}`} key={index}>
                            <motion.div
                                variants={itemVariants}
                                className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden transition-hover duration-300 ease-in-out transform hover:scale-105">

                                <Image src={prj.img as string} alt={`${prj.name}`} fill />
                                <div className="absolute inset-0 flex items-end bg-black/50 p-2 md:p-4">
                                    <div>
                                        <div className="flex flex-col space-y-2  w-full">
                                            <p className="text-white font-semibold text-xl leading-tight">
                                                {prj.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </motion.div>
                        </Link>
                    )
                    )}
                </motion.div>
            </MotionSection>
            <MotionSection className="caption-div p-5 sm:p-7 md:p-9 lg:p-12 space-y-10">
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
                    <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700">
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
            </MotionSection>
        </motion.div>
    );
}

export default DesignBlog;