"use client"
import { motion } from 'framer-motion'
import MotionSection from "@/components/Animations/motion";
import { itemVariants, containerVariants } from "@/components/Animations/motion";
import { datas } from "@/db/datas";
import Image from 'next/image';
import ContactForm from '@/components/form/page';
import Link from 'next/link';

const Blogs = () => {
    const cls = [
        [datas.designs[0]?.img, "lg:col-span-4 lg:row-span-1", datas.designs[0]?.name, datas.designs[0]?.id],
        [datas.designs[1]?.img, "lg:col-span-2 lg:row-span-1", datas.designs[1]?.name, datas.designs[1]?.id],
        [datas.designs[2]?.img, "lg:col-span-2 lg:row-span-1", datas.designs[2]?.name, datas.designs[2]?.id],
        [datas.designs[3]?.img, "lg:col-span-2 lg:row-span-1", datas.designs[3]?.name, datas.designs[3]?.id],
        [datas.designs[4]?.img, "lg:col-span-2 lg:row-span-1", datas.designs[4]?.name, datas.designs[4]?.id],
    ];
    return (
        <motion.div className="w-full mt-28 flex flex-col gap-10 md:gap-15"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            <MotionSection className="flex flex-col lg:h-screen px-10">
                <motion.div
                    variants={itemVariants}
                    className="head-div place-items-center w-full"
                >
                    <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-bold text-primary max-w-lg">
                        Where Design Meets Expertise Explore Our Insights
                    </p>
                    <p className="text-[clamp(0.75rem,1vw,1.5rem)] text-center font-medium text-gray-700">
                        Why Quality Matters: Choosing the Right Fixtures for Your Retail Space
                    </p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    className="flex-1 grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 gap-2 lg:gap-5 w-full gap-y-2 lg:gap-y-4"
                >
                    {cls.map((img, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={index}
                            className={`relative overflow-hidden rounded-lg md:rounded-2xl ${img[1]} shadow-gray-400 shadow-sm h-[250px] md:h-[300px] lg:h-auto`}
                        >
                            <Link href={`/blog/${img[3]}`}>
                                <Image
                                    src={img[0] as string}
                                    alt={`Blog Image ${index + 1}`}
                                    fill
                                    className="object-cover transition-hover duration-300 ease-in-out transform hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-50"></div>
                                <div className="absolute text-sm md:text-lg text-white font-semibold  bottom-4 md:bottom-6 left-0 text-start px-4 py-2 ">{img[2]}</div></Link>

                        </motion.div>
                    ))}
                </motion.div>
            </MotionSection>
            <MotionSection className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
                <motion.div
                    variants={itemVariants}
                    className="relative w-full h-[500px] md:h-screen rounded-lg overflow-hidden"
                >
                    <Image src={"/images/form.png"} alt="form" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center md:right-2/4 md:top-1/4">
                        <ContactForm />
                    </div>
                </motion.div>
            </MotionSection>
        </motion.div>
    );
}

export default Blogs;