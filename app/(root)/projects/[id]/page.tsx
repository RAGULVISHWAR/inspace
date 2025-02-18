import { datas } from "@/db/datas";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Project = async (props: { params: Promise<{ id: string }> }) => {
    const { id } = await props.params;
    const getProductBySlug = (id: string) => {
        return datas.projects.find((project) => project.id === id);
    };
    const project = getProductBySlug(id);
    const col = [1, 3, 2, 1, 2, 2, 3, 4, 3]; // Example column spans
    const row = [1, 1, 1, 1, 2, 2, 1, 1, 2]; // Example row spans 

    return (
        <div className="w-full p-5 mt-11">
            <div className="p-5">
                <p className="text-primary text-[clamp(1.5rem,4vw,6rem)] font-semibold">{project?.name}</p>
                <div className="relative w-full h-screen rounded-2xl overflow-hidden">
                    <Image src={project?.project_img[0] as string} alt={project?.name as string} fill className="object-cover" />
                </div>
            </div>
            <div>
                <p className="text-primary text-[clamp(1.5rem,4vw,6rem)] font-semibold">
                    Inspace&apos;s Solution
                </p>
                <p>{project?.solution}</p>
                <div className="grid grid-cols-1 md:grid-cols-7 md:grid-rows-4 gap-4">
                    {project?.project_img.map((img, index) => (
                        <div
                            key={index}
                            className={cn(
                                "relative w-full h-[200px] md:h-[400px] overflow-hidden rounded-2xl", // Ensure the div is properly positioned
                                `md:col-span-${col[index]}`, // Defaults to 1 if col[index] is undefined
                                `md:row-span-${row[index]}`  // Defaults to 1 if row[index] is undefined
                            )}
                        >
                            <Image src={img as string} alt="span" fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>
            <div>

            </div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Project;