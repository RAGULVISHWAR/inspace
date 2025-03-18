"use client";

import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from "react";

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


const TestimonialCarousel = () => {


    return (
        <div>
            <div className="relative">

                <Swiper

                    className="mySwiper w-[350px] md:w-auto max-w-7xl mx-auto h-[350px]"
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={25}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    scrollbar={{ draggable: true }}

                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')} bg-[#FAE8FF]
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide
                            key={index}
                            className=" py-8 px-6 lg:py-8  lg:px-6 bg-[#FAE8FF] rounded-lg h-fit"
                        >
                            <div className="flex flex-col justify-between h-[250px]">
                                <div className="">
                                    <div className="mb-4">
                                        <Quote stroke="#4A044E" fill="#4A044E" strokeWidth={1} className="rotate-180 size-5 md:size-8" />
                                    </div>
                                    <div className="mb-8">
                                        <p className="text-[#090914] text-[18px] font-medium leading-snug">
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                </div>
                                <div className="border-l-4 border-purple-900 pl-4 mt-auto ">
                                    <h3 className="text-md lg:text-[19px] font-semibold text-black">
                                        {testimonial.name}
                                    </h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
}
export default TestimonialCarousel;
