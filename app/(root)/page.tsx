"use client"
import Image from "next/image";
import home from "@/public/images/home-img.png"
import { Counter } from "../../components/Animations/counter";
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import TestimonialCarousel from "@/components/Animations/carosal";
import { motion } from 'framer-motion'
import MotionSection from "@/components/Animations/motion";
import { itemVariants, containerVariants } from "@/components/Animations/motion";

const Home = () => {
  const image: [string, string, string, string][] = [
    ["1", "/images/saravana.png", "Saravana stores", "projects/1"],
    ["2", "/images/house.png", "House of clothing", "projects/2"],
    ["3", "/images/fresh.png", "The Fresh Basket", "projects/3"],
    ["4", "/images/babies.png", "Born babies", "projects/4"],
    ["5", "/images/kandhan.png", "Kandhan Stores", "projects/5"],
    ["6", "/images/global.png", "Global wear", "projects/6"],
    ["7", "/images/house-clothing.png", "House of clothing", "projects/7"],
    ["8", "/images/silver.png", "Silver lady", "projects/8"],
    ["9", "/images/station.png", "In station and out station", "projects/9"],
  ];
  const client: [string, string][] = [
    ["/images/clients/client-bg/bg-1.png", "/images/clients/client1.png"],
    ["/images/clients/client-bg/bg-2.png", "/images/clients/client2.png"],
    ["/images/clients/client-bg/bg-3.png", "/images/clients/client3.png"],
    ["/images/clients/client-bg/bg-4.png", "/images/clients/client4.png"],
    ["/images/clients/client-bg/bg-5.png", "/images/clients/client5.png"],
    ["/images/clients/client-bg/bg-6.png", "/images/clients/client6.png"],
    ["/images/clients/client-bg/bg-7.png", "/images/clients/client7.png"],
    ["/images/clients/client-bg/bg-8.png", "/images/clients/client8.png"],
    ["/images/clients/client-bg/bg-9.png", "/images/clients/client9.png"],
    ["/images/clients/client-bg/bg-10.png", "/images/clients/client10.png"],
    ["/images/clients/client-bg/bg-11.png", "/images/clients/client11.png"],
    ["/images/clients/client-bg/bg-12.png", "/images/clients/client12.png"],
  ];
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

  ];

  return (
    <div className="home overflow-hidden">
      {/* Welcome Section */}
      <MotionSection className="welcome-div relative w-full h-dvh  mb-5 lg:mb-10 ">
        <Image src={home} alt="home" fill className="object-cover object-center" />
        <motion.div
          variants={itemVariants}
          className="absolute left-0 bottom-0 w-full ml-[5vw] mb-[5vh] flex flex-col sm:flex-row justify-between items-start sm:items-center"
        >
          <motion.div
            variants={itemVariants}
            className="text-white font-bold text-2xl md:text-3xl lg:text-4xl  max-w-[70vw] lg:max-w-3xl"
          >
            <p className="leading-[1.5] md:leading-[1.2]">Designing the Future of Retail & Commercial Spaces</p>
          </motion.div>
        </motion.div>
      </MotionSection>

      {/* Achievements Section */}
      <MotionSection className="achievements-div items-center mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 px-[2vw] max-w-7xl py-[5vh] lg:py-[10vh] mb-5 lg:mb-10 ">
        <motion.div variants={itemVariants} className="relative bg-primaryLight p-4 rounded-md text-primary text-start">

          <Counter target={38} plus="+" classname="text-3xl xl:text-7xl font-medium text-primary" />

          <p className="font-normal text-xs lg:text-md xl:text-lg py-2 ml-1">Years</p>
        </motion.div>
        <motion.div variants={itemVariants} className="relative bg-primaryLight p-4 rounded-md text-primary text-start">

          <Counter target={1200} plus="+" classname="text-3xl xl:text-7xl font-medium text-primary" />

          <p className="font-normal text-xs lg:text-md  xl:text-lg py-2 ml-1">Projects Completed</p>

        </motion.div>
        <motion.div variants={itemVariants} className="relative bg-primaryLight p-4 srounded-md text-primary col-span-2 md:col-span-1">

          <Counter target={7} classname="text-3xl xl:text-7xl font-medium text-primary" />

          <p className="font-normal text-xs lg:text-md  xl:text-lg py-2 ml-1">Operating Location</p>

        </motion.div>
      </MotionSection>

      {/* Choose Section */}
      <MotionSection className="choose-div w-full bg-primaryLight place-content-center mb-5 lg:mb-10 px-[4vw] py-5 lg:py-10">
        <motion.div
          variants={containerVariants}
          className="max-w-7xl mx-auto my-10"
        >
          <motion.div variants={itemVariants} className="head-div w-full gap-6 py-10">
            <div className="text-center text-primary text-[clamp(1.7rem,2.5vw,3rem)] font-bold py-1">
              Why Choose Inspace?
            </div>
            <div className=" text-start md:text-center place-self-center font-medium text-xs lg:text-sm sm:w-2/4 md:w-4/5 py-1 px-6">
              At Inspace, we&apos;re committed to creating commercial interiors and furniture solutions that go beyond the ordinary. From innovative designs to reliable support, everything we do is focused on helping you transform your space into an immersive and efficient environment.
            </div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5"
          >
            {[
              ["Tailored & Modular Solutions", "We believe every brand has its own story. Our modular systems and custom displays let you shape your space exactly the way you envision without compromise."],
              ["Unmatched Quality & Durability", "Our products are built to last, using premium materials and rigorous manufacturing processes. Enjoy peace of mind with extended warranties that safeguard your investment."],
              ["Nationwide Delivery & On-Site Support", "Wherever you are, our dedicated logistics network ensures prompt delivery and hassle-free installation. Plus, our expert support team is just a call away to handle any requirements."],
              ["Customer-Centric Partnership", "Your success is our priority. From concept to completion, we collaborate closely with you, offering personalized guidance and solutions that align with your brand&apos;s goals and vision."]
            ].map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                key={index}
                className="bg-white p-6 rounded-md lg:rounded-xl transition-shadow duration-300 hover:shadow-lg"
              >
                <p className="font-bold text-sm lg:text-md text-primary py-2 ">#{String(index + 1).padStart(2, '0')}</p>
                <p className="font-bold text-md xl:text-lg text-primary  py-2">{item[0]}</p>
                <p className="font-medium   text-sm lg:text-md leading-relaxed text-primary  py-2">{item[1]}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </MotionSection>

      {/* Feature Section */}
      <MotionSection className="feature-div w-full text-primary px-[2vw] mb-5 lg:mb-10 py-5 lg:py-10">
        <motion.div
          variants={itemVariants}
          className="head-div place-items-center w-full py-5 lg:py-10"
        >
          <p className="text-start md:text-center text-primary text-[clamp(1.7rem,2.5vw,3rem)] font-bold py-1 max-w-7xl px-6">
            Our interior design projects provide a glimpse into our expertise.
          </p>
          <p className="text-start md:text-center place-self-start md:place-self-center font-medium text-xs lg:text-sm sm:w-2/4 md:w-4/5 py-1 px-6">
            Click for more to explore our portfolio.
          </p>
        </motion.div>
        <motion.div variants={containerVariants} className="portfolios-div mb-5 lg:mb-10 py-5 lg:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5  px-1 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
            {image?.length > 0 && image.map((img, index) => (
              <motion.div variants={itemVariants} key={index}>
                <Link href={img[3]}>
                  <div className="relative w-full h-[250px] lg:h-[400px] xl:h-[500px] rounded-xl overflow-hidden group transition-transform transform duration-700 ease-linear hover:scale-105">
                    <Image
                      src={img[1]}
                      alt={img[2]}
                      fill
                      className="object-cover transition-transform transform duration-300 ease-in-out group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 ease-in-out group-hover:bg-black/60"></div>
                    <div className="absolute top-0 right-0 rounded-full p-2 xl:p-3 bg-blend-color-burn m-3 sm:m-4 lg:m-6 backdrop-blur-lg border border-white">
                      <ArrowUpRight className="text-white xl:size-5" />
                    </div>
                    <p className="opacity-100 absolute bottom-0 left-0 text-white text-[clamp(1.2rem,1.5vw,3.5rem)] p-3 sm:p-5 md:p-7 font-semibold text-center transition-opacity duration-300 ease-out group-hover:opacity-0">
                      {img[2]}
                    </p>
                    <p className="opacity-0 absolute top-1/2 left-1/4 text-white text-[clamp(1.2rem,1.5vw,3.5rem)] p-3 sm:p-5 md:p-7 font-semibold text-center transition-opacity duration-500 ease-out group-hover:opacity-100">
                      {img[2]}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </MotionSection>

      {/* Clients Section */}
      <MotionSection className="clients-div max-w-7xl px-[2vw] mb-5 lg:mb-10  mx-auto py-5 lg:py-10">
        <motion.div variants={itemVariants} className="head-div w-full gap-6 pb-5 ">
          <div className="text-center text-primary text-[clamp(1.7rem,2.5vw,3rem)] font-bold py-1">
            Our Clients
          </div>
        </motion.div>
        <motion.div variants={containerVariants} className="clients p-2 ">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-5">
            {client?.length > 0 && client.map((ct, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative w-full h-[100px] md:h-[250px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={ct[0]}
                  alt={`${index}`}
                  fill
                  className="object-cover transition-transform transform duration-300 ease-in-out group-hover:scale-110"
                />
                <div className="absolute top-1 md:top-1/3 w-full h-[90px]">
                  <Image
                    src={ct[1]}
                    alt={`${index}`}
                    fill
                    className="object-contain p-2 sm:p-3"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </MotionSection>

      {/* Testimonial Section */}
      <MotionSection className="testimonal-div px-[2vw] flex flex-col gap-7 md:gap-10 max-w-7xl mx-auto py-5 lg:py-10 mb-5 lg:mb-10">
        <motion.div variants={itemVariants} className="head-div w-full gap-6 py-2 ">
          <div className="text-center text-primary text-[clamp(1.7rem,2.5vw,3rem)] font-bold py-1 ">
            Hear from Those Who&apos;ve Experienced the Inspace Difference
          </div>

        </motion.div>
        <motion.div variants={itemVariants} className="max-w-5xl mx-auto">
          <TestimonialCarousel />
        </motion.div>
      </MotionSection>

      {/* FAQ Section */}
      <MotionSection className="caption-div w-full py-5 lg:py-10 mb-5 lg:mb-10">
        <motion.div
          variants={itemVariants}
          className="bg-primaryLight rounded-md p-10 sm:mx-5 md:mx-10 lg:mx-20"
        >
          <motion.div
            variants={itemVariants}
            className="head-div place-items-center w-full py-10"
          >
            <p className="text-center text-primary text-[clamp(1.7rem,2.5vw,3rem)] font-bold py-1 max-w-7xl">
              Frequently Asked Questions
            </p>
            <p className="text-center place-self-center font-medium text-xs lg:text-sm sm:w-2/4 md:w-4/5 py-1">
              Still you have any questions? Contact our Team via <Link href={'/'} className="text-sky-400 font-normal">support@inspacestore.in</Link>
            </p>
          </motion.div>
          <motion.div variants={containerVariants} className="max-w-4xl mx-auto">
            {questions.map((q, index) => (
              <motion.div variants={itemVariants} key={index}>
                <Accordion type="single" collapsible className="">
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger className="text-sm md:text-md font-semibold ">
                      {q[0]}
                    </AccordionTrigger>
                    <AccordionContent className="!text-xs md:text-sm font-[450] leading-relaxed  md:max-w-3xl">
                      {q[1]}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </MotionSection>
    </div>
  );
};


export default Home;