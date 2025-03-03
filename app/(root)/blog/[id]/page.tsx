import DesignBlog from "@/components/DesignBlog/page";
import { datas } from "@/db/datas";
interface Content {
    head: string;
    body: string
}
interface Design {
    id: string;
    name: string;
    img: string; // Array of image URLs
    desc: string;
    content: Content[];
}
const Blog = async (props: { params: Promise<{ id: string }> }) => {
    const { id } = await props.params;
    const getBlogBySlug = (id: string) => {
        return datas.designs.find((blog) => blog.id === id);
    };
    const blog = getBlogBySlug(id);

    return <DesignBlog blog={blog as Design} />;
};

export default Blog;