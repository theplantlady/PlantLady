import Feedback from '@/components/section/feedback'
import BlogCard from '@/components/ui/blog/blogCard'
import Pagination from '@/components/ui/pagination'
import SectionTitle from '@/components/ui/sectionTitle'
import SideBar from '@/components/ui/sideBar'
import { blogData } from '@/lib/fackData/blogData'

export const metadata = {
    title: "Plant Lady -- Blog Right Sidebar",
    description: "Plant Lady is a next js and tailwind css website",
};
const BlogRightSidebar = () => {
    return (
        <>
            <section>
                <div className='container-fluid '>
                    <SectionTitle sectionName={"Blog"} sectionTitle={"Design Insights & Inspiration"} sectionDesc={"Unveil the Secrets to Transforming Spaces"} />
                </div>
                <div className='container tab:py-30 ts:py-20 py-14'>
                    <div className='grid tl:grid-cols-[auto_385px] tab:grid-cols-[auto_300px] items-start gap-x-[62px]'>
                        <div className='grid ts:grid-cols-2 gap-x-5 gap-y-[75px]'>
                            {
                                blogData.map(({ id, author, date, desc, tag, thumb, title }) => <BlogCard key={id} date={date} tag={tag} thumb={thumb} title={title} />)
                            }
                        </div>
                        <SideBar />
                    </div>
                </div>
                <Pagination />
            </section>
            <Feedback />
        </>
    )
}

export default BlogRightSidebar
