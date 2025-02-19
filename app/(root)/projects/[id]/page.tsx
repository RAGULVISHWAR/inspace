import { datas } from "@/db/datas";
import Image from "next/image";

const Project = async (props: { params: Promise<{ id: string }> }) => {
    const { id } = await props.params;
    const getProductBySlug = (id: string) => {
        return datas.projects.find((project) => project.id === id);
    };
    const project = getProductBySlug(id);
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
    ]

    return (
        <div className="w-full p-2 md:p-5 mt-11">
            <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
                <p className="text-primary text-[clamp(1.7rem,2.5vw,4.5rem)] font-semibold">{project?.name}</p>
                <div className="relative w-full h-[500px] md:h-screen rounded-2xl overflow-hidden">
                    <Image src={project?.project_img[0] as string} alt={project?.name as string} fill className="object-cover" />
                </div>
            </div>
            <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
                <p className="text-primary text-[clamp(1.5rem,2vw,4rem)] font-semibold">
                    Inspace&apos;s Solution
                </p>
                <p className="text-[clamp(1rem,1.2vw,2rem)] text-gray-800 font-medium">{project?.solution}</p>
                <div className="grid grid-cols-1 md:grid-cols-11 md:grid-rows-4 gap-2 md:gap-5 w-full md:h-screen">
                    {cls.map((img, index) => (
                        <div
                            key={index}
                            className={`relative flex overflow-hidden h-[250px] md:h-auto rounded-xl md:rounded-2xl ${img[1]}`}
                        >
                            <Image
                                src={img[0] as string}
                                alt={`Project Image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10">
                <p className="text-primary text-[clamp(1.5rem,2vw,4rem)] font-semibold">
                    Outcomes
                </p>
                <p className="text-[clamp(1rem,1.2vw,2rem)] text-gray-800 font-medium">{project?.outcome}</p>
            </div>
            <div>

            </div>
            <div className=" relative w-full h-[500px] md:h-screen rounded-lg overflow-hidden">
                <Image src={"/images/form.png"} alt="form" fill className="object-cover" />
                <div>

                </div>
            </div>
        </div>
    );
}

export default Project;