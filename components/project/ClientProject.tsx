"use client";
import { motion } from "framer-motion";
import MotionSection from "@/components/Animations/motion";
import ContactForm from "@/components/form/page";
import SuggestionProjects from "@/components/suggestion/page";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Image from "next/image";
import { itemVariants, containerVariants } from "@/components/Animations/motion";
interface Project {
    id: string;
    name: string;
    project_img: string[]; // Array of image URLs
    solution: string;
    outcome: string;
}
const ClientProject = ({ project }: { project: Project }) => {
    const cls = [
        [project?.project_img[0], "md:col-span-2 md:row-span-1"],
        [project?.project_img[1], "md:col-span-4 md:row-span-1"],
        [project?.project_img[2], "md:col-span-3 md:row-span-1"],
        [project?.project_img[3], "md:col-span-2 md:row-span-1"],
        [project?.project_img[4], "md:col-span-3 md:row-span-2"],
        [project?.project_img[5], "md:col-span-4 md:row-span-2"],
        [project?.project_img[6], "md:col-span-4 md:row-span-1"],
        [project?.project_img[7], "md:col-span-4 md:row-span-2"],
        [project?.project_img[8], "md:col-span-7 md:row-span-1"],
    ];

    return (
        <motion.div
            className="w-full mt-28 px-4 lg:px-10 flx flex-col gap-5 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Section 1: Project Header */}
            <MotionSection className="flex flex-col p-2  md:gap-7">
                <motion.p
                    variants={itemVariants}
                    className="text-primary text-[clamp(1.7rem,2.5vw,4.5rem)] font-semibold"
                >
                    {project?.name}
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    className="relative w-full h-[350px] md:h-screen rounded-md md:rounded-xl overflow-hidden"
                >
                    <Image
                        src={project?.project_img[0] as string}
                        alt={project?.name as string}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </MotionSection>
            {/* ... rest of your sections unchanged */}
            {/* Section 2: Solution */}
            <MotionSection className="flex flex-col p-2  gap-2 md:gap-7">
                <motion.div variants={itemVariants} className="flex flex-col gap-2">
                    <p className="text-primary text-[clamp(1.5rem,2vw,4rem)] font-semibold">
                        Inspace&apos;s Solution
                    </p>
                    <p className="text-[clamp(1rem,1.2vw,2rem)] text-gray-800 font-medium">{project?.solution}</p>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-11 md:grid-rows-4 gap-2 md:gap-5 w-full md:h-screen gap-y-2 md:gap-y-4"
                >
                    {cls.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative flex overflow-hidden h-[250px] md:h-auto rounded-xl md:rounded-2xl ${img[1]} shadow-gray-400 shadow-sm`}
                        >
                            <Image
                                src={img[0] as string}
                                alt={`Project Image ${index + 1}`}
                                fill
                                className="object-cover transition-hover duration-300 ease-in-out transform hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-50"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </MotionSection>

            {/* Section 3: Outcomes */}
            <MotionSection className="p-2 ">
                <motion.div variants={itemVariants} className="flex flex-col gap-y-2 md:gap-y-4">
                    <p className="text-primary text-[clamp(1.5rem,2vw,4rem)] font-semibold">
                        Outcomes
                    </p>
                    <p className="text-[clamp(1rem,1.2vw,2rem)] text-gray-800 font-medium">{project?.outcome}</p>
                </motion.div>
                <motion.div variants={itemVariants} className="flex flex-col gap-y-2 md:gap-y-4">
                    <ScrollArea className="w-full rounded-md overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200">
                        <motion.div
                            variants={containerVariants}
                            className="flex gap-3 lg:gap-6 px-1 py-5"
                        >
                            {project?.project_img.slice(4, 9).map((img: string, index: number) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="relative w-[200px] h-[300px] sm:w-[400px] sm:h-[600px] lg:w-[500px] lg:h-[750px] rounded-lg md:rounded-xl overflow-hidden"
                                >
                                    <Image src={img} alt="rack" fill className="object-cover" />
                                    <div className="absolute h-full w-full bg-black/40 inset-0 flex items-end">
                                        <p className="p-5 text-white font-medium text-[clamp(1rem,1.5vw,2rem)]">
                                            Rack {index + 1}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <ScrollBar orientation="horizontal" className="bg-primaryLight" />
                    </ScrollArea>
                </motion.div>
            </MotionSection>

            {/* Section 4: For More */}
            <MotionSection className="gap-y-2 md:gap-y-4 p-2 ">
                <motion.div variants={itemVariants}>
                    <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-semibold text-primary">
                        For More
                    </p>
                    <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700">
                        We provide world-class solutions that help you 10x your speed.
                    </p>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <SuggestionProjects selectedProjectId={project?.id as string} />
                </motion.div>
            </MotionSection>

            {/* Section 5: Contact Form */}
            <MotionSection className="p-2 ">
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
};

export default ClientProject;