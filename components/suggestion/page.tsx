'use client'
import { useEffect, useState } from "react";
import { datas } from "@/db/datas";
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
            {suggestedProjects?.map((prj, index) => {
                return (
                    <div key={index}>
                        {prj.name}
                    </div>
                )
            })}
        </div>
    );
}

export default SuggestionProjects;
