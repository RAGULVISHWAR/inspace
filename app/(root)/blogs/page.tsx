"use client"
import { motion } from 'framer-motion'
import MotionSection from "@/components/Animations/motion";
import { itemVariants, containerVariants } from "@/components/Animations/motion";
import { datas } from "@/db/datas";
import Image from 'next/image';
import ContactForm from '@/components/form/page';

const Blogs = () => {
    const cls = [
        [datas.designs[0]?.img, "md:col-span-4 md:row-span-1"],
        [datas.designs[1]?.img, "md:col-span-2 md:row-span-1"],
        [datas.designs[2]?.img, "md:col-span-2 md:row-span-1"],
        [datas.designs[3]?.img, "md:col-span-2 md:row-span-1"],
        [datas.designs[4]?.img, "md:col-span-2 md:row-span-1"],
    ];
    return (
        <motion.div className="w-full mt-28 flex flex-col gap-10 md:gap-15"
            variants={containerVariants}
            initial="hidden"
            animate="visible">
            <MotionSection className="flex flex-col h-screen px-10">
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
                    className="flex-1 grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-2 md:gap-5 w-full gap-y-2 md:gap-y-4"
                >
                    {cls.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative overflow-hidden rounded-xl md:rounded-2xl ${img[1]} shadow-gray-400 shadow-sm`}
                        >
                            <Image
                                src={img[0] as string}
                                alt={`Blog Image ${index + 1}`}
                                fill
                                className="object-cover transition-hover duration-300 ease-in-out transform hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-50"></div>
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