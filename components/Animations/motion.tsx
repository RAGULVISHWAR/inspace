"use client"
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";
export const itemVariants = {
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
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Increase stagger
            delayChildren: 0.1, // Add initial delay
        },
    },
};
function MotionSection({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: true, // Repeat animation
        margin: "0px 0px -200px 0px", // Trigger earlier
        amount: 0.1, // Trigger when 20% visible
    });

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
};
export default MotionSection;