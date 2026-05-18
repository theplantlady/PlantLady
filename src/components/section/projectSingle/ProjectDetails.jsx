import Image from 'next/image'
import Feedback from '@/components/section/feedback'
import TeamTwo from '@/components/section/team/teamTwo'
import Title from '@/components/ui/title'
import ProjectGallerySlider from '@/components/section/projectSingle/ProjectGallerySlider'

export default function ProjectDetails({ project }) {
    const heroImage = project.project_imgs?.[1] || project.project_imgs?.[0]

    return (
        <>
            <section className='blog-single'>
                <div>
                    {heroImage && (
                        <Image
                            src={heroImage}
                            width={1600}
                            height={900}
                            alt={project.project_name}
                        />
                    )}

                    <div className='container 2sm:mt-[156px] sm:mt-10 mt-10'>
                        <div className='grid lg:grid-cols-[65%_auto] gap-[12px]'>
                            <div className='relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-primary sm:ml-12.5 ml-5'>
                                <h1 className='text-primary-foreground [font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110'>
                                    {project.project_name}
                                </h1>
                                <span className='inline-block w-[300px] h-[1px] bg-primary'></span>
                                <p className='text-2xl sm:text-3xl 2sm:text-4xl !leading-160 text-primary-foreground mt-[18px]'>
                                    {project.project_desc}
                                </p>
                            </div>

                            <div className='bg-primary py-15 sm:px-[38px] px-5 lg:-mt-[810px]'>
                                <Title
                                    title_text={project.project_name}
                                    className={"text-secondary-foreground mb-0"}
                                />
                                <ul className='pb-7.5 pt-[75px] flex lg:flex-col flex-row flex-wrap lg:flex-nowrap gap-x-7 lg:gap-x-0 gap-y-[52px]'>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Clients:</strong>
                                        <span className='text-secondary-foreground block'>{project.client}</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Area:</strong>
                                        <span className='text-secondary-foreground block'>{project.area}</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Project year:</strong>
                                        <span className='text-secondary-foreground block'>{project.project_year}</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Project type:</strong>
                                        <span className='text-secondary-foreground block'>{project.project_type}</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Location:</strong>
                                        <span className='text-secondary-foreground block'>{project.location}</span>
                                    </li>
                                    {project.team && (
                                        <li>
                                            <strong className='text-secondary-foreground block text-2xl mb-1.5'>Team:</strong>
                                            <span className='text-secondary-foreground block'>{project.team}</span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <ProjectGallerySlider photos={project.project_imgs} />
                </div>
            </section>

            <TeamTwo />
            <Feedback />
        </>
    )
}