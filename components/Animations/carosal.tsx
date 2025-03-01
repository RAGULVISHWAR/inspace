"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Our store's new layout looks amazing! Customers find items more easily, and we've noticed a real boost in sales.",
        name: "Arun",
        title: "Senior Product Designer, Inhive Space",
        location: "New York City",
    },
    {
        quote: "We needed a quick turnaround, and Inspace delivered on time. Now our aisles feel bright, organized, and more welcoming.",
        name: "Priya Balakrishnan",
        title: "Operations Manager, Inhive Space",
        location: "New York City",
    },
    {
        quote: "Inspace helped make our produce section the highlight of the store. It's eye-catching, and customers love the fresh look.",
        name: "Kannan Subramanian",
        title: "Marketing Director, Inhive Space",
        location: "New York City",
    },
    {
        quote: "The new digital signage solution is a game changer. It keeps our customers engaged and informed effortlessly.",
        name: "Meera Rajan",
        title: "Chief Technology Officer, Inhive Space",
        location: "New York City",
    },
    {
        quote: "The store design aligns perfectly with our brand identity. It's modern, stylish, and improves the shopping experience.",
        name: "Vikram Anand",
        title: "Retail Consultant, Inhive Space",
        location: "New York City",
    },
    {
        quote: "Inspace has transformed our checkout process. Customers love the smooth flow, and wait times are much shorter.",
        name: "Sonia Kapoor",
        title: "Customer Experience Head, Inhive Space",
        location: "New York City",
    },
];

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesToShow = 3;
    const autoSlideInterval = 3000;

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, autoSlideInterval);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const getVisibleSlides = () => {
        const visibleSlides = [];
        for (let i = 0; i < slidesToShow; i++) {
            const slideIndex = (currentIndex + i) % testimonials.length;
            visibleSlides.push(testimonials[slideIndex]);
        }
        return visibleSlides;
    };

    return (
        <div className="relative px-8 max-w-7xl mx-auto">
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full flex items-center justify-center text-purple-900 hover:bg-purple-100 transition-colors"
            >
                <ChevronLeft className="w-8 h-8" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full flex items-center justify-center text-purple-900 hover:bg-purple-100 transition-colors"
            >
                <ChevronRight className="w-8 h-8" />
            </button>

            {/* Slides Container */}
            <div className="overflow-hidden p-2">
                <div className="flex gap-6 transition-all duration-300">
                    {getVisibleSlides().map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-full md:w-[calc(33.333%-16px)] flex-shrink-0 bg-[#FAE8FF] p-8 rounded-3xl h-[350px] flex flex-col justify-between"
                        >
                            <div>
                                <div className="mb-4">
                                    <Quote stroke="#4A044E" fill="#4A044E" size={40} strokeWidth={1} className="rotate-180" />
                                </div>
                                <div className="mb-8">
                                    <p className="text-[#090914] text-[20px] font-medium leading-snug">
                                        {testimonial.quote}
                                    </p>
                                </div>
                            </div>
                            <div className="border-l-4 border-purple-900 pl-4 mt-auto">
                                <h3 className="text-lg font-semibold text-black">
                                    {testimonial.name}
                                </h3>
                                <p className="text-gray-600 text-sm">{testimonial.title}</p>
                                <p className="text-gray-600 text-sm">{testimonial.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "bg-purple-900 scale-125"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}