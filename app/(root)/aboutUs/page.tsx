import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutUS = () => {
    return (
        <div className="w-full h-full mt-20 px-4 md:px-10 lg:px-20 space-y-5 sm:space-y-7 md:space-y-10 lg:space-y-15">
            <div className="flex flex-col-reverse md:flex-row">
                <div className="space-y-4">
                    <p className="text-[clamp(2rem,3vw,4rem)] text-black font-semibold">
                        Attention and Maximum Attention to Detail
                    </p>
                    <p className="text-gray-700 text-[clamp(1rem,1.2vw,2.2rem)] font-medium">
                        At Inspace, we specialize in transforming retail environments with innovative, high-quality display solutions. With a focus on functionality, aesthetics, and durability, we design and manufacture shelving, racks, display units, and customized retail fixtures that enhance customer experience and optimize store layouts. From concept to installation, we deliver seamless, end-to-end solutions tailored to your brand&apos;s needs.
                    </p>
                    <div className=" flex w-2/3 md:w-1/4 justify-between">
                        <Button className="rounded-full">Book A Call</Button>
                        <Button className="rounded-full bg-transparent text-primary border-2 hover:bg-transparent border-primary">Learn More</Button>
                    </div>

                </div>
                <div className="flex">
                    <HeroVideoDialog
                        videoSrc={"/video.mp4"}
                        thumbnailAlt="video"
                        thumbnailSrc="/images/fresh.png"
                        className="w-[400px] h-[250px] md:h-[350px]"
                    />
                </div>
            </div>
            <div>
                <div>
                    <p className="text-[clamp(1.2rem,1.8vw,3.5rem)] text-center  text-primary font-semibold">
                        Meet Our Team
                    </p>
                    <p className="text-[clamp(1rem,1.2vw,2rem)] text-center text-gray-700">
                        We provide world-class solutions that help you 10x your speed.
                    </p>
                </div>
                <div className="flex p-2 md:p-6">
                    <div className="relative w-full h-[200px] md:h-[450px]">
                        <Image src={"/images/founder.png"} alt="founder" fill className="object-contain" />
                        <div>
                            <p>
                                Sandesh Koshti
                            </p>
                            <p>
                                FOUNDER
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-[200px] md:h-[450px]">
                        <Image src={"/images/co-founder.png"} alt="founder" fill className="object-contain" />
                        <div>
                            <p>
                                Sandesh Koshti
                            </p>
                            <p>
                                CO- FOUNDER
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-[200px] md:h-[450px]">
                        <Image src={"/images/manager.png"} alt="founder" fill className="object-contain" />
                        <div>
                            <p>
                                Sandesh Koshti
                            </p>
                            <p>
                                MANAGER
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUS;