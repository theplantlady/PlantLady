import Link from "next/link";
import SideBar from "@/components/ui/sideBar";
import { blogIndex, plantLadyBlogPosts } from "@/lib/fackData/plantLadyBlogPosts";
import Feedback from "@/components/section/feedback";
import BlogSlider from "@/components/section/blogSlider";
import NextPrevPost from "@/components/ui/nextPrevPost";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import Comments from "@/components/ui/comments";
import Leavecomment from "@/components/ui/leaveComment";
import SocialMediaList from "@/components/ui/socialMediaList";
import BlogSection from "@/components/ui/blog/blogSection";
import BlogTitle from "@/components/ui/blog/blogTitle";
import { notFound } from "next/navigation";

const getPost = (slug) => plantLadyBlogPosts.find((p) => p.slug === slug);

export function generateStaticParams() {
    return plantLadyBlogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
    const post = getPost(params.slug);
    if (!post) return { title: "Blog Post — The Plant Lady TX" };

    return {
        title: `${post.title.sectionName} ${post.title.sectionTitle} — The Plant Lady TX`,
        description: post.title.sectionDesc,
    };
}

const BlogPostPage = ({ params }) => {
    const post = getPost(params.slug);
    if (!post) return notFound();

    // If your theme passes these props elsewhere, keep them there.
    // For now, safe defaults so this page doesn't crash.
    const text_muted = "";
    const bg_muted = "";

    const tagList = post.tagList || [];

    return (
        <>
            <section className="">
                <div
                    className='object-cover bg-no-repeat tl:pt-[448px] tl:pt-[300px] tab:pt-[200px] pt-[150px] pb-[68px] relative z-[1] after:contents-[""] after:z-[-1] after:absolute after:left-0 after:bottom-0 after:w-full after:h-full after:bg-bottom-liner bg-cover'
                    style={{ backgroundImage: `url(${post.cover?.src || post.thumb?.src})` }}
                >
                    <div className="container">
                        <BlogTitle
                            sectionName={post.title.sectionName}
                            sectionTitle={post.title.sectionTitle}
                            sectionDesc={post.title.sectionDesc}
                            text_muted={text_muted}
                            bg_muted={bg_muted}
                        />
                        <p className="mt-14 text-secondary-foreground flex phx:gap-[9px] gap-[1px]">
                            <span>{post.meta.date}</span> / <span>{post.meta.category}</span> /{" "}
                            <span>{post.meta.readTime}</span>
                        </p>
                    </div>
                </div>

                <div className="container tab:pt-15 ts:pt-20 pt-14">
                    <div className="grid tl:grid-cols-[auto_427px] tab:grid-cols-[auto_400px] tl:gap-[130px] tab:gap-16 items-start">
                        <div>
                            <div>
                                <p className="text-xl text-primary-foreground">{post.introText}</p>
                                {post.introText2 && (
                                    <p className="text-primary-foreground text-xl pt-[23px] mb-[14px]">
                                        {post.introText2}
                                    </p>
                                )}
                                {post.introText3 && (
                                    <p className="text-primary-foreground text-xl pt-[23px] mb-[14px]">
                                        {post.introText3}
                                    </p>
                                )}

                                <div className="container pt-[23px] mb-[14px]">
                                    {post.sections.map((s, idx) => (
                                        <BlogSection
                                            key={idx}
                                            blogListTitle={s.blogListTitle}
                                            blogListSubTitle={s.blogListSubTitle}
                                            blogListText={s.blogListText}
                                            blogListText2={s.blogListText2}
                                            blogListText3={s.blogListText3}
                                            blogListData={s.blogListData}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="pt-[54px] flex gap-3 flex-wrap">
                                {tagList.map(({ id, link, tag }) => (
                                    <Link href={link || ""} key={id}>
                                        <ButtonOutline className={"font-normal px-2.5 phx:py-[5px] py-[5px] border"}>
                                            <span className="text-lg">{tag}</span>
                                        </ButtonOutline>
                                    </Link>
                                ))}
                            </div>

                            <div className="flex gap-7 items-center pt-7.5">
                                <strong>Share on:</strong>
                                <SocialMediaList />
                            </div>

                            <hr className="mt-[22px] mb-12.5" />
                        </div>

                        {/* sidebar */}
                        <SideBar />
                    </div>

                    {/* next/prev */}
                    <NextPrevPost />

                    <hr className="mt-12.5 mb-17.5 max-w-[830px] w-full" />

                    {/* comments */}
                    <Comments />
                    <Leavecomment />

                    {/* related */}
                    <div>
                        <h2 className='[font-size:_clamp(33px,5vw,48px)] font-bold leading-120 text-primary-foreground pb-[32px]'>
                            Related Post
                        </h2>
                        <BlogSlider data={blogIndex.slice(0, 4)} />
                    </div>
                </div>
            </section>

            <Feedback />
        </>
    );
};

export default BlogPostPage;
