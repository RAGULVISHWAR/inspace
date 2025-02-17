import Image from "next/image";
import home from "@/public/images/home-img.png"
import { Button } from "@/components/ui/button";
import { Counter } from "../../components/Animations/counter";
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    <div className="home">
      {/* div one Welcome text-[clamp(2rem,6vw,4.5rem)] text-base */}
      <div className="welcome-div relative w-full h-screen">
        <Image src={home} alt="home" fill className="object-cover object-center" />
        <div className="absolute left-0 bottom-0 w-full p-5 mb-16 md:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="text-white font-medium text-[clamp(2rem,6vw,4.5rem)]">
            <p>INSPACE RETAIL</p>
            <p>DISPLAYS FOR SHOP</p>
          </div>
          <div className="space-y-4">
            <div className="text-gray-100 text-base sm:text-lg max-w-md">
              We use modern techniques to boost sustainable farming and protect the environment.
            </div>
            <div className="flex space-x-4">
              <Button className="rounded-full text-base md:text-lg px-6 md:px-12 py-3 md:py-5 transition-all duration-300 ease-in-out transform hover:scale-105">
                Get Started
              </Button>
              <Button className="rounded-full border-2 border-white bg-transparent text-base md:text-lg px-6 md:px-12 py-3 md:py-5 transition-all duration-200 ease-in-out transform hover:bg-transparent hover:scale-105">
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* div two Achievements text-[clamp(3.5rem,9vw,6.5rem)] */}
      <div className="achievements-div grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 p-3 sm:p-5 md:p-7 lg:p-9">
        <div className="relative bg-primaryLight p-7 sm:p-9 md:p-12 rounded-md text-primary">
          <div className="text-[clamp(3.5rem,9vw,6.5rem)] font-light">
            <Counter target={38} plus="+" />
          </div>
          <p className="text-lg md:text-xl">Years</p>
          <div className="absolute top-0 right-0 rounded-full p-2 sm:p-3 lg:p-6 bg-primary m-3 sm:m-4 lg:m-6">
            <ArrowUpRight className="text-white" />
          </div>
        </div>

        <div className="relative bg-primaryLight p-7 sm:p-9 md:p-12 rounded-md text-primary">
          <div className="text-[clamp(3.5rem,9vw,6.5rem)] font-light">
            <Counter target={1200} plus="+" />
          </div>
          <p className="text-lg md:text-xl">Projects Completed</p>
          <div className="absolute top-0 right-0 rounded-full p-2 sm:p-3 lg:p-6 bg-primary m-3 sm:m-4 lg:m-6">
            <ArrowUpRight className="text-white" />
          </div>
        </div>

        <div className="relative bg-primaryLight p-7 sm:p-9 md:p-12 rounded-md text-primary col-span-2 md:col-span-1">
          <div className="text-[clamp(3.5rem,9vw,6.5rem)] font-light">
            <Counter target={7} />
          </div>
          <p className="text-lg md:text-xl">Operating Location</p>
          <div className="absolute top-0 right-0 rounded-full p-2 sm:p-3 lg:p-6 bg-primary m-3 sm:m-4 lg:m-6">
            <ArrowUpRight className="text-white" />
          </div>
        </div>
      </div>
      {/* div three Choose text-[clamp(2rem,4vw,6.5rem)] text-[clamp(0.9rem,1vw,1.2rem)] text-[clamp(1rem,1.2vw,2.2rem)] */}
      <div className="choose-div w-full bg-primaryLight p-6 sm:p-8 md:p-10 lg:p-12 py-12 sm:py-14 md:py-18 lg:py-20 space-y-12 md:space-y-24">
        <div className="head-div w-full gap-6">
          <div className="text-center text-primary text-[clamp(2rem,4vw,6.5rem)] font-medium">
            Why Choose Inspace?
          </div>
          <div className="hidden lg:block text-center place-self-center text-[clamp(0.9rem,1vw,1.2rem)] sm:w-2/4 md:w-3/4">
            At Inspace, we&apos;re committed to creating commercial interiors and furniture solutions that go beyond the ordinary. From innovative designs to reliable support, everything we do is focused on helping you transform your space into an immersive and efficient environment.
          </div>
          <div className="text-center place-self-center text-[clamp(0.9rem,1vw,1.2rem)] sm:w-2/4 md:w-3/4 lg:hidden">
            At Inspace, we craft innovative interiors and furniture solutions to transform your space efficiently.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-12">
          <div className="bg-white p-5 md:p-7 space-y-6 py-6 sm:py-8 md:py-10 rounded-lg text-primary w-full text-[clamp(1rem,1.2vw,2.2rem)]">
            <p className="font-semibold">#01</p>
            <p className="font-semibold">Tailored & Modular Solutions</p>
            <p className="text-base md:text-lg">
              We believe every brand has its own story. Our modular systems and custom displays let you shape your space exactly the way you envision without compromise.
            </p>
          </div>
          <div className="bg-white p-5 md:p-7 space-y-6 py-6 sm:py-8 md:py-10 rounded-lg text-primary w-full text-[clamp(1rem,1.2vw,2.2rem)]">
            <p className="font-semibold">#02</p>
            <p className="font-semibold">Unmatched Quality & Durability</p>
            <p className="text-base md:text-lg">
              Our products are built to last, using premium materials and rigorous manufacturing processes. Enjoy peace of mind with extended warranties that safeguard your investment.
            </p>
          </div>
          <div className="bg-white p-5 md:p-7 space-y-6 py-6 sm:py-8 md:py-10 rounded-lg text-primary w-full text-[clamp(1rem,1.2vw,2.2rem)]">
            <p className="font-semibold">#03</p>
            <p className="font-semibold">Nationwide Delivery & On-Site Support</p>
            <p className="text-base md:text-lg">
              Wherever you are, our dedicated logistics network ensures prompt delivery and hassle-free installation. Plus, our expert support team is just a call away to handle any requirements.
            </p>
          </div>
          <div className="bg-white p-5 md:p-7 space-y-6 py-6 sm:py-8 md:py-10 rounded-lg text-primary w-full text-[clamp(1rem,1.2vw,2.2rem)]">
            <p className="font-semibold">#04</p>
            <p className="font-semibold">Customer-Centric Partnership</p>
            <p className="text-base md:text-lg">
              Your success is our priority. From concept to completion, we collaborate closely with you, offering personalized guidance and solutions that align with your brand&apos;s goals and vision.
            </p>
          </div>
        </div>
      </div>
      {/* div four Feature text-[clamp(1rem,1.2vw,2.2rem)] text-[clamp(1.2rem,1.8vw,3.5rem)] text-[clamp(1rem,1.2vw,2rem)]  text-[clamp(1.2rem,1.5vw,3.5rem)] */}
      <div className="feature-div w-full text-primary p-5 sm:p-7 md:p-9 lg:p-12 space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-14">
        <div className="head-div place-items-center w-full space-y-3 sm:space-y-4 md:space-y-5">
          <p className="rounded-full border border-primary p-2 px-6  w-fit font-semibold text-[clamp(0.9rem,1vw,1.2rem)]">
            Featured Portfolios
          </p>
          <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-semibold">
            Our interior design projects provide a glimpse into our expertise. Click for more to explore our portfolio.
          </p>
          <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700">
            We provide world-class solutions that help you 10x your speed.
          </p>
        </div>
        <div className="portfolios-div">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5 md:gap-12 px-1 sm:px-6 md:px-8 lg:px-10">
            {image?.length > 0 &&
              image.map((img, index) => {
                return (
                  <Link href={img[3]} key={index}>
                    <div className="relative w-full h-[250px] lg:h-[450px] xl:h-[700px] rounded-2xl overflow-hidden group transition-transform transform duration-300 ease-in-out hover:scale-105  shadow-lg shadow-slate-600">
                      <Image
                        src={img[1]}
                        alt={img[2]}
                        fill
                        className="object-cover transition-transform transform duration-300 ease-in-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-all duration-300 ease-in-out group-hover:bg-black/60"></div>
                      <div className="absolute top-0 right-0 rounded-full p-2 xl:p-3 bg-blend-color-burn m-3 sm:m-4 lg:m-6 backdrop-blur-lg border border-white">
                        <ArrowUpRight className="text-white xl:size-10" />
                      </div>
                      <p className="opacity-100 absolute bottom-0 left-0 text-white text-[clamp(1.2rem,1.5vw,3.5rem)] p-3 sm:p-5 md:p-7 font-semibold text-center transition-opacity duration-300 ease-out group-hover:opacity-0">
                        {img[2]}
                      </p>
                      <p className="opacity-0 absolute top-1/2 left-1/4 text-white text-[clamp(1.2rem,1.5vw,3.5rem)] p-3 sm:p-5 md:p-7 font-semibold text-center transition-opacity duration-500 ease-out group-hover:opacity-100">
                        {img[2]}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
      {/* div five clients */}
      <div className="clients-div p-5 sm:p-7 md:p-9 lg:p-12">
        <div className="head-div text-primary place-items-center w-full space-y-3 sm:space-y-4 md:space-y-5">
          <p className="rounded-full border border-primary p-2 px-6 w-fit font-semibold text-[clamp(0.9rem,1vw,1.2rem)]">
            Trusted
          </p>
          <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-semibold">
            Our Clients
          </p>
          <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700">
            We providing world class  that help&apos;s you to 10x your speed.
          </p>
        </div>
        <div className="clients p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-5 " >
            {
              client?.length > 0 && client.map((ct, index) => {
                return (
                  <div key={index} className="relative w-full h-[100px] md:h-[250px] rounded-2xl overflow-hidden group  shadow-md md:shadow-lg shadow-black md:shadow-black">
                    <Image
                      src={ct[0]}
                      alt={`${index}`}
                      fill
                      className="object-cover transition-transform transform duration-300 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute top-1 md:top-1/3  w-full h-[90px]">
                      <Image
                        src={ct[1]}
                        alt={`${index}`}
                        fill
                        className="object-contain p-2 sm:p-3"
                      />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      {/* div five testimonal */}
      <div className="testimonal-div p-5 sm:p-7 md:p-9 lg:p-12">
        <div className="head-div text-primary place-items-center w-full space-y-3 sm:space-y-4 md:space-y-5">
          <p className="rounded-full border border-primary p-2 px-6 w-fit font-semibold text-[clamp(0.9rem,1vw,1.2rem)]">
            Testimonials
          </p>
          <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center font-semibold">
            Join the customer who&apos;ve already
          </p>
          <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700">
            We providing world class  that help&apos;s you to 10x your speed.
          </p>
        </div>
      </div>
      {/* div six caption */}
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
        <div className="bg-primaryLight rounded-md p-10 sm:mx-5 md:mx-10 lg:mx-20">
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
    </div >
  );
}

export default Home;