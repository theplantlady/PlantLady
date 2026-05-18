import ProjectCardOne from '@/components/ui/cards/projectCardOne'
import SectionTitle from '@/components/ui/sectionTitle'
import { projectsData } from '@/lib/fackData/projectsData'
import { cardSlideAnimation, cardSlideAnimationDelay, cardSlideAnimationRight, cardSlideAnimationRightDelay } from '@/lib/utils';
import React from "react";

export const metadata = {
    title: "Plant Lady -- Project Archive",
    description: "Plant Lady is a next js and tailwind css website",
};

const ProjectArchive = () => {
    return (
        <section>
            <div className='container-fluid '>
                <SectionTitle
                    sectionName={"Projects"}
                    sectionTitle={"Vision to Reality"}
                    sectionDesc={"From 3D Concepts to Stunning Interior Plantscapes"}
                />
            </div>
            <div className='lg:pt-30 2sm:pt-20 pt-14'>
                <div className=''>
                    {
                        projectsData.map(({ id, slug, project_desc, project_imgs, project_name, project_year, project_type, location }) => {
                            const project_img = project_imgs?.[0]
                            const link = slug ? `/pages/projects/${slug}` : null
                            if (id % 2 === 0) {
                                return (
                                    <ProjectCardOne
                                        key={id}
                                        project_desc={project_desc}
                                        project_img={project_img}
                                        project_type={project_type}
                                        location={location}
                                        project_year={project_year}
                                        link={link}
                                        project_name={project_name}
                                        order={'lg:order-1 order-0'}
                                        position={"relative  lg:right-0 lg:-ml-12"}
                                        imageVariants={cardSlideAnimationRight()}
                                        cardVariants={cardSlideAnimationRightDelay()}
                                    />
                                )
                            }
                            else {
                                return (
                                    <ProjectCardOne
                                        key={id}
                                        project_desc={project_desc}
                                        project_img={project_img}
                                        project_type={project_type}
                                        location={location}
                                        project_year={project_year}
                                        link={link}
                                        project_name={project_name}
                                        order={'lg:order-2 order-3'}
                                        position={"relative lg:left-0 lg:-mr-12"}
                                        imageVariants={cardSlideAnimation()}
                                        cardVariants={cardSlideAnimationDelay()}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectArchive
