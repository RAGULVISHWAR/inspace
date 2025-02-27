import Map from "@/components/Map/map";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from "@/components/form/page";

const ContactUs = () => {
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
    return (
        <div className="w-full  mt-15 flex flex-col gap-10 md:gap-15">
            <div>
                <div className="relative w-full h-screen ">
                    <Image src={'/images/contact.jpeg'} alt="" fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center md:right-2/4 md:top-1/4">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-10 lg:px-20 space-y-5 sm:space-y-7 md:space-y-10 lg:space-y-16">
                <div className="location">
                    <div>
                        <div className="head flex flex-col md:gap-3 items-start">
                            <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] place-self-center md:place-self-start text-center font-bold ">
                                Visit Us
                            </p>
                            <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700 font-medium">
                                See our designs up close and experience our craftsmanship firsthand.
                            </p>
                        </div>
                        <div className="map flex flex-col md:flex-row">
                            <div className="flex-1">
                                <Map />
                            </div>
                            <div className="flex flex-col gap-3 md:gap-8">
                                <div className="flex gap-3">
                                    <div className="bg-primaryLight p-4 rounded-full w-fit border-2 border-primary"><Phone fill="#4A044E" stroke="#F5D0FE" /></div>
                                    <div>
                                        <p className="text-primary font-semibold">
                                            Phone
                                        </p>
                                        <p className="text-primary font-medium">
                                            +91 00000 00000
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="bg-primaryLight p-4 rounded-full w-fit border-2 border-primary"><Mail fill="#4A044E" stroke="#F5D0FE" /></div>
                                    <div>
                                        <p className="text-primary font-semibold">
                                            Mail
                                        </p>
                                        <p className="text-primary font-medium">
                                            INSPACE@gmail.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="bg-primaryLight p-4 rounded-full w-fit border-2 border-primary"><MapPin fill="#4A044E" stroke="#F5D0FE" /></div>
                                    <div>
                                        <p className="text-primary font-semibold">
                                            Office
                                        </p>
                                        <p className="text-primary font-medium">
                                            1901 Thornridge Cir. Shiloh,Hawaii 81063
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div>
                    <div className="caption-div p-5 sm:p-7 md:p-9 lg:p-12 space-y-10">
                        <div className="head-div text-primary place-items-center w-full space-y-3 sm:space-y-4 md:space-y-5">
                            <p className="rounded-full border border-primary p-2 px-6 w-fit font-semibold text-[clamp(0.9rem,1vw,1.2rem)]">
                                Caption
                            </p>
                            <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-semibold">
                                Frequently Asked Questions
                            </p>
                            <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700">
                                Still you have any questions? Contact our Team via <Link href={'support@inspacestore.in'} className="text-blue-500">support@inspacestore.in</Link>
                            </p>
                        </div>
                        <div className="bg-primaryLight rounded-md p-10 sm:mx-5 md:mx-10 lg:mx-20 ">
                            <div>
                                <p className="text-[clamp(1rem,1.2vw,2.2rem)] font-semibold">
                                    Category goes here
                                </p>
                                <p className="hidden md:block text-[clamp(0.9rem,1vw,1.2rem)]">
                                    Lorem ipsum dolor sit amet consectetur. Sit et phasellus ullamcorper at.
                                </p>
                            </div>
                            <div className="">
                                {
                                    questions.map((q, index) => {
                                        return (
                                            <Accordion type="single" collapsible className="w-full sm:pt-3 md:pt-6 lg:pt-10" key={index}>
                                                <AccordionItem value="item-1">
                                                    <AccordionTrigger className="text-[clamp(1rem,1.2vw,2.2rem)]">{q[0]}</AccordionTrigger>
                                                    <AccordionContent className="text-[clamp(0.9rem,1vw,1.2rem)] lg:mr-9">
                                                        {q[1]}
                                                    </AccordionContent>
                                                </AccordionItem>
                                            </Accordion>
                                        );

                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;