import Feedback from "@/components/section/feedback";
import BlogCard from "@/components/ui/blog/blogCard";
import Pagination from "@/components/ui/pagination";
import SectionTitle from "@/components/ui/sectionTitle";

// OPTION A: keep using blogData
// import { blogData } from "@/lib/fackData/blogData";

// OPTION B (recommended): single source of truth
import { blogIndex } from "@/lib/fackData/plantLadyBlogPosts";

export const metadata = {
    title: "The Plant Lady TX — Blog",
    description: "Plant care guides, living wall tips, and seasonal refresh playbooks for North Texas.",
};

const BlogArchive = () => {
    return (
        <>
            <section>
                <div className='container-fluid'>
                    <SectionTitle
                        sectionName={"Blog"}
                        sectionTitle={"Plant Care + Design Notes"}
                        sectionDesc={"Real-world tips for homes and businesses across Dallas–Fort Worth."}
                    />
                </div>

                <div className="container tab:py-30 ts:py-20 py-14">
                    <div className="grid tab:grid-cols-3 ts:grid-cols-2 gap-x-5 gap-y-[75px]">
                        {blogIndex.map(({ id, date, tag, thumb, title, link }) => (
                            <div key={id}>
                                <BlogCard date={date} tag={tag} thumb={thumb} title={title} link={link} />
                            </div>
                        ))}
                    </div>
                </div>

                <Pagination />
            </section>

            <Feedback />
        </>
    );
};

export default BlogArchive;
