'use client'
import { useEffect, useState } from "react";
import { datas } from "@/db/datas";
import Link from "next/link";
import Image from "next/image";
interface Project {
    id: string;
    name: string;
    project_img: string[];
    rack_img: string[];
    description: string;
    solution: string;
    outcome: string;
    category: string;
}
const SuggestionProjects = ({ selectedProjectId }: { selectedProjectId: string }) => {

    const [suggestedProjects, setSuggestedProjects] = useState<Project[] | null>();

    useEffect(() => {
        if (datas.projects && selectedProjectId) {
            // Filter out the selected project
            const filteredProjects = datas.projects.filter(proj => proj.id !== selectedProjectId);

            // Shuffle and select 3 random projects
            const shuffled = filteredProjects.sort(() => 0.5 - Math.random()).slice(0, 3);

            setSuggestedProjects(shuffled);
        }
    }, [selectedProjectId]);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8 p-2 sm:p-3 md:p-5 lg:p-7">
                {suggestedProjects?.map((prj, index) => {
                    return (
                        <Link href={`/projects/${prj.id}`} key={index}>
                            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden transition-hover duration-300 ease-in-out transform hover:scale-105">
                                <Image src={prj.project_img[0] as string} alt={`${prj.name}`} fill />
                                <div className="absolute inset-0 flex items-end bg-black/50 p-2 md:p-4">
                                    <div>
                                        <div className="flex flex-col space-y-2  w-full">
                                            <p className="text-white font-medium text-[clamp(0.9rem,1.2vw,1.5rem)]">
                                                {prj.category}
                                            </p>
                                            <p className="text-white font-semibold text-[clamp(1.2rem,2vw,2.5rem)] leading-tight">
                                                {prj.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    )
                })}
            </div>
        </div >

    );
}

export default SuggestionProjects;
