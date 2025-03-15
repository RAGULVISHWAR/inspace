import ClientProject from "@/components/project/ClientProject";
import { datas } from "@/db/datas";
interface Project {
    id: string;
    name: string;
    category: string;
    description: string;
    project_img: string[]; // Array of image URLs
    solution: string;
    outcome: string;
}
const Project = async (props: { params: Promise<{ id: string }> }) => {
    const { id } = await props.params;
    const getProductBySlug = (id: string) => {
        return datas.projects.find((project) => project.id === id);
    };
    const project = getProductBySlug(id);

    return <ClientProject project={project as Project} />;
};

export default Project;