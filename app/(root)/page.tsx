import Image from "next/image";
import home from "@/public/images/home-img.png"
import { Button } from "@/components/ui/button";
import { Counter } from "../components/Animations/counter";
import { ArrowUpRight } from 'lucide-react';
import Link from "next/link";
const Home = () => {
  const image: [string, string][] = [
    ["/images/saravana.png", "Saravana stores"],
    ["/images/house.png", "House of clothing"],
    ["/images/fresh.png", "The Fresh Basket"],
    ["/images/babies.png", "Born babies"],
    ["/images/kandhan.png", "Kandhan Stores"],
    ["/images/global.png", "Global wear"],
    ["/images/house-clothing.png", "House of clothing"],
    ["/images/silver.png", "Silver lady"],
    ["/images/station.png", "In station and out station 2"],
  ];
  return (
    <div className="home ">
      {/* div one Welcome */}
      <div className="welcome-div relative w-full h-screen">
        <Image src={home} alt="home" fill className="object-cover object-center" />
        <div className="absolute left-0 bottom-0 w-full p-5 md:p-10 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="text-white font-medium text-[clamp(1.5rem,5vw,4rem)]">
            <p>INSPACE RETAIL</p>
            <p>DISPLAYS FOR SHOP</p>
          </div>
          <div className="space-y-3">
            <div className="text-gray-100 text-sm sm:text-base max-w-md">
              We use modern techniques to boost sustainable farming and protect the environment.
            </div>
            <div className="flex space-x-4">
              <Button className="rounded-full text-sm md:text-lg px-6 md:px-12 py-3 md:py-5 transition-all duration-300 ease-in-out transform hover:scale-105 ">
                Get Started
              </Button>
              <Button className="rounded-full border-2 border-white bg-transparent text-sm md:text-lg px-6 md:px-12 py-3 md:py-5 transition-all duration-200 ease-in-out transform hover:bg-transparent  hover:scale-105">
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* div two Achievements */}
      <div className="achievements-div grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4  p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="relative bg-primaryLight p-6 sm:p-8 md:p-10 rounded-md text-primary">
          <div className="text-[clamp(3rem,8vw,6rem)] font-light">
            <Counter target={38} plus="+" />
          </div>
          <p className="text-base md:text-lg">Years</p>
          <div className="absolute top-0 right-0 rounded-full p-1 sm:p-2 lg:p-5 bg-primary  m-2 sm:m-3 lg:m-5">
            <ArrowUpRight className="text-white" />
          </div>
        </div>
        <div className="relative bg-primaryLight p-6 sm:p-8 md:p-10 rounded-md text-primary">
          <div className="text-[clamp(3rem,8vw,6rem)] font-light">
            <Counter target={1200} plus="+" />
          </div>
          <p className="text-base md:text-lg">Projects Completed</p>
          <div className="absolute top-0 right-0 rounded-full p-1 sm:p-2 lg:p-5 bg-primary  m-2 sm:m-3 lg:m-5">
            <ArrowUpRight className="text-white" />
          </div>
        </div>
        <div className="relative bg-primaryLight p-6 sm:p-8 md:p-10 rounded-md text-primary col-span-2 md:col-span-1">
          <div className="text-[clamp(3rem,8vw,6rem)] font-light">
            <Counter target={7} />
          </div>
          <p className="text-base md:text-lg">Operating Location</p>
          <div className="absolute top-0 right-0 rounded-full p-1 sm:p-2 lg:p-5 bg-primary  m-2 sm:m-3 lg:m-5">
            <ArrowUpRight className="text-white" />
          </div>
        </div>
      </div>
      {/* div three Choose */}
      <div className="choose-div w-full bg-primaryLight p-6 sm:p-8 md:p-10 lg:p-12 py-10 sm:py-12 md:py-16 lg:py-18 space-y-10 md:space-y-20">
        <div className="head-div w-full gap-5">
          <div className="text-center text-primary text-[clamp(1.5rem,3vw,6rem)] font-medium">Why Choose Inspace ?</div>
          <div className="text-center place-self-center text-[clamp(0.5rem,0.8vw,0.75rem)] sm:w-2/4 md:w-3/4">At Inspace, we&apos;re committed to creating commercial interiors and furniture solutions that go beyond the ordinary. From innovative designs to reliable support, everything we do is focused on helping you transform your space into an immersive and efficient environment.</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          <div className="bg-white p-4 md:p-6 space-y-6 py-4 sm:py-6 md:py-8 rounded-lg text-primary w-fit text-[clamp(0.75rem,1vw,2rem)]">
            <p className="font-medium">#01</p>
            <p className="font-medium">Tailored & Modular Solutions</p>
            <p>We believe every brand has its own story. Our modular systems and custom displays let you shape your space exactly the way you envision without compromise.</p>
          </div>
          <div className="bg-white p-4 md:p-6 space-y-6 py-4 sm:py-6 md:py-8 rounded-lg text-primary w-fit text-[clamp(0.75rem,1vw,2rem)]">
            <p className="font-medium">#02</p>
            <p className="font-medium">Unmatched Quality & Durability</p>
            <p>Our products are built to last, using premium materials and rigorous manufacturing processes. Enjoy peace of mind with extended warranties that safeguard your investment.</p>
          </div>
          <div className="bg-white p-4 md:p-6 space-y-6 py-4 sm:py-6 md:py-8 rounded-lg text-primary w-fit text-[clamp(0.75rem,1vw,2rem)]">
            <p className="font-medium">#03</p>
            <p className="font-medium">Nationwide Delivery & On-Site Support</p>
            <p>Wherever you are, our dedicated logistics network ensures prompt delivery and hassle-free installation. Plus, our expert support team is just a call away to handle any requirements.</p>
          </div>
          <div className="bg-white p-4 md:p-6 space-y-6 py-4 sm:py-6 md:py-8 rounded-lg text-primary w-fit text-[clamp(0.75rem,1vw,2rem)]">
            <p className="font-medium">#04</p>
            <p className="font-medium">Customer-Centric Partnership</p>
            <p>Your success is our priority. From concept to completion, we collaborate closely with you, offering personalized guidance and solutions that align with your brand&apos;s goals and vision.</p>
          </div>
        </div>
      </div>
      {/* div four Feature */}
      <div className="feature-div w-full text-primary p-4 sm:p-6 md:p-8 lg:p-10 space-y-5 sm:space-y-7 md:space-y-10 lg:space-y-12">
        <div className="head-div place-items-center w-full space-y-2 sm:space-y-3 md:space-y-4 ">
          <p className="rounded-full border-2 border-primary p-2 w-fit font-medium text-[clamp(0.75rem,1vw,2rem)]">featured portfolios</p>
          <p className="text-[clamp(1rem,1.5vw,3rem)] text-center">Our interior design projects provide a glimpse into our expertise. Click for more to explore our portfolio.</p>
          <p className="text-[clamp(0.75rem,1vw,2rem)] text-center text-black">We providing world class  that help&apos;s you to 10x your speed.</p>
        </div>
        <div className="portfolios-div">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 md:gap-10 px-7 sm:px-10 md:px-15 lg:px-20">
            {image?.length > 0 && image.map((img, index) => {
              return (
                <Link href={'/'} key={index}>
                  <div className="relative w-full h-[200px] lg:h-[400px] xl:h-[650px] rounded-2xl overflow-hidden group" >
                    <Image
                      src={img[0]}
                      alt={img[1]}
                      fill
                      className="object-cover transition-transform transform duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 ease-in-out group-hover:bg-black/60"></div>
                    <div className="absolute top-0 right-0 rounded-full p-1 xl:p-2 bg-blend-color-burn  m-2 sm:m-3 lg:m-5 backdrop-blur-lg border border-white">
                      <ArrowUpRight className="text-white xl:size-9" />
                    </div>
                    <p className="opacity-100 absolute bottom-0 left-0 text-white text-[clamp(1rem,1.5vw,3rem)] p-2 sm:p-4 md:p-6 font-medium text-center transition-opacity duration-300 ease-out  group-hover:opacity-0">
                      {img[1]}
                    </p>
                    <p className="opacity-0 absolute top-1/2 left-1/4 text-white text-[clamp(1rem,1.5vw,3rem)] p-2 sm:p-4 md:p-6 font-medium text-center transition-opacity duration-500 ease-out  group-hover:opacity-100">
                      {img[1]}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      {/* div five Brands */}
      <div className="brands">
        <div>Brands</div>
      </div>
    </div>
  );
}

export default Home;