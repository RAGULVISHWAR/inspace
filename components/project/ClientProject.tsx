"use client";
import { motion } from "framer-motion";
import MotionSection from "@/components/Animations/motion";
import SuggestionProjects from "@/components/suggestion/page";
import Image from "next/image";
import { itemVariants, containerVariants } from "@/components/Animations/motion";
interface Project {
    id: string;
    name: string;
    category: string;
    description: string;
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
            className="w-full mt-20 px-[2%]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Section 1: Project Header */}
            <MotionSection className="flex flex-col p-2 mb-5 lg:mb-10">
                <motion.p
                    variants={itemVariants}
                    className="text-primary text-[26px] font-extrabold py-2 px-2"
                >
                    {project?.name}
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    className="relative w-full h-[400px] md:h-[80dvh] rounded-md md:rounded-lg overflow-hidden"
                >
                    <Image
                        src={project?.project_img[0] as string}
                        alt={project?.name as string}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <motion.div
                    variants={itemVariants}
                    className="pt-4"
                >
                    <p className="font-medium text-gray-600 leading-relaxed text-[14px] lg:text-[16px]">
                        {project.description}
                    </p>
                </motion.div>
            </MotionSection>
            {/* ... rest of your sections unchanged */}
            <MotionSection>
                <motion.div
                    variants={itemVariants}
                    className="flex max-w-7xl mx-auto flex-col md:flex-row gap-8 md:gap-16 lg:gap-28  mt-16 md:mt-36 mb-10 justify-center px-2"
                >
                    <div className="h-full flex md:flex-col  gap-14" >
                        <div className="pb-2 lg:pb-5">
                            <h2 className="font-bold text-primary text-[18px] pb-2" >
                                Client
                            </h2>
                            <p className="text-[14px] text-gray-700 font-medium">
                                {project?.name}
                            </p>
                        </div>
                        <div className="pb-2 lg:pb-5">
                            <h2 className="font-bold text-primary text-[18px]  pb-2">
                                Category
                            </h2>
                            <p className="text-[14px] text-gray-700 font-medium">
                                {project.category}
                            </p>
                        </div>
                        <div className="pb-2 lg:pb-5">
                            <h2 className="font-bold text-primary text-[18px]  pb-2">
                                Location
                            </h2>
                            <p className="text-[14px] text-gray-700 font-medium">
                                Velachery, Chennai
                            </p>
                        </div>
                    </div>
                    <div className="h-full flex flex-col gap-10">
                        <div className="pb-2 lg:pb-10">
                            <h2 className="font-bold text-primary text-[23px] pb-2 lg:pb-5">
                                Inspace&apos;s Solution
                            </h2>
                            <p className="max-w-[700px] text-[16px] font-medium text-gray-600 lg:leading-loose">
                                {project.solution}
                            </p>
                        </div>
                        <div className="pb-2 lg:pb-10">
                            <h2 className="font-bold text-primary text-[23px] pb-2 lg:pb-5">
                                Outcomes
                            </h2>
                            <p className="max-w-[700px]  text-[16px] font-medium text-gray-600 lg:leading-loose">
                                {project.outcome}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </MotionSection>
            {/* Section 2: Solution */}
            <MotionSection className="flex flex-col py-5 mb-5 lg:mb-10 px-2">
                <motion.div variants={itemVariants} className="head-div w-full pb-3 lg:pb-4">
                    <div className="text-start sm:text-center text-primary  text-[28px] md:text-[32px] font-bold pb-3 px-2">
                        Gallery
                    </div>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-11 md:grid-rows-4 gap-3  w-full md:h-[70vh] "
                >
                    {cls.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative flex overflow-hidden h-[250px] md:h-auto rounded-md md:rounded-lg ${img[1]} shadow-gray-400 shadow-sm`}
                        >\
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


            {/* Section 4: For More */}
            <MotionSection className="p-2">
                <motion.div variants={itemVariants} className="head-div w-full ">
                    <div className="text-start sm:text-center text-primary  text-[28px] md:text-[32px] font-bold py-1 px-4">
                        For More
                    </div>
                </motion.div>
                <motion.div variants={itemVariants}>
                    <SuggestionProjects selectedProjectId={project?.id as string} />
                </motion.div>
            </MotionSection>

            {/* Section 5: Contact Form */}

        </motion.div>
    );
};

export default ClientProject;