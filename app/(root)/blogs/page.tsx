"use client"
import { motion } from 'framer-motion'
import MotionSection from "@/components/Animations/motion";
import { itemVariants, containerVariants } from "@/components/Animations/motion";
const Blogs = () => {
    return (
        <div className="w-full mt-28 flex flex-col gap-10 md:gap-15">
            <div>
                <motion.div
                    variants={itemVariants}
                    className="head-div place-items-center w-full"
                >
                    <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-bold text-primary max-w-lg ">
                        Where Design Meets Expertise Explore Our Insights
                    </p>
                    <p className="text-[clamp(0.75rem,1vw,1.5rem)] text-center font-medium text-gray-700">
                        Why Quality Matters: Choosing the Right Fixtures for Your Retail Space
                    </p>
                </motion.div>
            </div>
            <div></div>
        </div>
    );
}

export default Blogs;