import Feedback from '@/components/section/feedback'
import BlogCard from '@/components/ui/blog/blogCard'
import Pagination from '@/components/ui/pagination'
import SectionTitle from '@/components/ui/sectionTitle'
import SideBar from '@/components/ui/sideBar'
import { blogData } from '@/lib/fackData/blogData'

export const metadata = {
    title: "Plant Lady -- Blog Left Sidebar",
    description: "Plant Lady is a next js and tailwind css website",
};

const BlogLeftSidebar = () => {
    return (
        <>
            <section>
                <div className='container-fluid '>
                    <SectionTitle sectionName={"Blog"} sectionTitle={"Design Insights & Inspiration"} sectionDesc={"Unveil the Secrets to Transforming Spaces"} />
                </div>
                <div className='container tab:py-30 ts:py-20 py-14'>
                    <div className='grid tl:grid-cols-[385px_auto] tab:grid-cols-[300px_auto] items-start gap-x-[62px]'>
                        <SideBar order={"order-1 tab:order-0"} />
                        <div className='grid ts:grid-cols-2 gap-x-5 gap-y-[75px] order-0 tab:order-1'>
                            {
                                blogData.map(({ id, date, tag, thumb, title }) => {
                                    return (
                                        <BlogCard
                                            key={id}
                                            date={date}
                                            tag={tag}
                                            thumb={thumb}
                                            title={title}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <Pagination />
            </section>
            <Feedback />
        </>
    )
}

export default BlogLeftSidebar
