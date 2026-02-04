import Image from 'next/image'
// import bg_banner from "@/assets/images/project-hero-image.jpg"
// import project_img_1 from "@/assets/images/project-image-1.jpg"
// import project_img_2 from "@/assets/images/project-image-2.jpg"
// import RightArrow from '@/assets/icons/rightArrow'
import ProjectTwoSliderOne from '@/app/pages/projects/project-two/projectTwoSliderOne.jsx'
// import Paragraph from '@/components/section/projectSingle/paragraph'
// import ProjectSingleSliderTwo from '@/components/section/projectSingle/projectSingleSliderTwo'
import TeamTwo from '@/components/section/team/teamTwo'
import Feedback from '@/components/section/feedback'
// import ButtonOutline from '@/components/ui/buttons/buttonOutline'
import Title from '@/components/ui/title'
// import dynamic from 'next/dynamic'
import { projectsData } from '@/lib/fackData/projectsData';

// const ProjectSingleSliderTwo = dynamic(() => import('@/components/section/projectSingle/projectSingleSliderTwo'), { ssr: false })

export const metadata = {
    title: "Architronix -- Project Single",
    description: "Architronix is a next js and tailwind css website",
};

const ProjectTwo = () => {
    return (
        <>
            <section className='blog-single'>
                <div>
                    <Image src={projectsData[1].project_imgs[1]} width="auto" height="auto" loading='lazy'  alt="img" />
                    <div className='container 2sm:mt-[156px] sm:mt-30 mt-20'>
                        <div className='grid lg:grid-cols-[65%_auto] gap-[38px]'>
                            <div className='relative after:absolute sm:after:-left-12.5 after:-left-5 after:top-1/2 after:-translate-y-1/2 after:w-[1px] sm:after:h-[130%] after:h-[120%] after:bg-primary sm:ml-12.5 ml-5'>
                                <h1 className='text-primary-foreground [font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110'>{projectsData[1].project_name} </h1>
                                <span className='inline-block w-[300px] h-[1px] bg-primary'></span>
                                <p className='text-2xl sm:text-3xl 2sm:text-4xl !leading-160 text-primary-foreground mt-[18px]'>{projectsData[1].project_desc} </p>
                            </div>
                            <div className=' bg-primary py-15 sm:px-[38px] px-5 lg:-mt-[410px]'>
                                <Title title_text={projectsData[1].project_name} className={"text-secondary-foreground mb-0"} />
                                <ul className='pb-7.5 pt-[75px] flex lg:flex-col flex-row flex-wrap lg:flex-nowrap gap-x-7 lg:gap-x-0 gap-y-[52px]'>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Clients:</strong>
                                        <span className='text-secondary-foreground block'>{projectsData[1].client} </span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Area:</strong>
                                        <span className='text-secondary-foreground block'>{projectsData[1].area}</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Project year:</strong>
                                        <span className='text-secondary-foreground block'>{projectsData[1].project_year}</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Project type:</strong>
                                        <span className='text-secondary-foreground block'>{projectsData[1].project_type}</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Location:</strong>
                                        <span className='text-secondary-foreground block'>{projectsData[1].location}</span>
                                    </li>
                                    <li>
                                        <strong className='text-secondary-foreground block text-2xl mb-1.5'>Team:</strong>
                                        <span className='text-secondary-foreground block'>{projectsData[1].team}</span>
                                    </li>
                                </ul>
                                {/**/}
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid mt-30'>
                     {/*   <div className='flex lg:flex-row flex-col gap-8'>
                            <Image src={projectsData[1].project_imgs[2]} loading='lazy' width="auto" height="auto" alt='img' className='w-2/3 h-full' />
                            <Image src={projectsData[1].project_imgs[0]} loading='lazy' width="auto" height="auto" alt='img' className='w-1/3 h-full' />
                        </div>*/}
                    </div>
                    {/*<Paragraph />*/}
                    <ProjectTwoSliderOne />
                    {/*<Paragraph />*/}
                    {/*<ProjectSingleSliderTwo />*/}
                    {/*<Paragraph />*/}
                </div>

            </section>
            <TeamTwo />
            <Feedback />
        </>
    )
}

export default ProjectTwo