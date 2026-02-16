import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import Image from 'next/image'
import React from 'react'
import team_img from "@/assets/images/team/team-2.jpg" // Replace with Shelbi’s actual photo if available
import Link from 'next/link'
import RightArrow from '@/assets/icons/rightArrow'
import ProjectCardThree from '@/components/ui/cards/projectCardThree'
import Feedback from '@/components/section/feedback'
import ButtonOutline from '@/components/ui/buttons/buttonOutline'
import SocialMediaList from '@/components/ui/socialMediaList'
import {teamData} from '@/lib/fackData/teamData'

export const metadata = {
    title: "The Plant Lady TX — Team Single",
    description: "Profile and background of Shelbi Johnson, co-owner at The Plant Lady TX.",
};

const TeamSingle = () => {
    return (
        <>
            <section>
                <div className='container-fluid '>
                    <SectionTitle
                        sectionName={"Co-Owner"}
                        sectionTitle={"Shelbi <br> Johnson"}
                        sectionDesc={"Cultivating Growth & Client Connections"}
                    />
                </div>
                <div className='container tab:pt-30 ts:pt-20 pt-14'>
                    <div
                        className='grid tl:grid-cols-[auto_538px] tab:grid-cols-[auto_350px] tab:grid-cols-[auto_400px] tl:gap-[132px] gap-16 items-start'>

                        {/* Left Column */}
                        <div>
                            {/* Brief Bio */}
                            <div className='mb-12.5'>
                                <Title title_text={"Brief Bio:"}/>
                                <p>
                                    Shelbi Johnson is the co-owner of <strong>The Plant Lady</strong>, a premier
                                    horticulture design and maintenance company dedicated to bringing nature’s
                                    beauty into everyday spaces. Working alongside Jeremy Dick, Shelbi’s focus on
                                    thoughtful communication and client satisfaction helps shape The Plant Lady
                                    into a trusted name for both residential and commercial greenery solutions.
                                </p>
                            </div>

                            {/* Expertise and Specializations */}
                            <div className='pt-12.5'>
                                <Title title_text={"Expertise and Specializations:"}/>
                                <ul>
                                    <li>
                                        <h5 className='font-bold'>Client Relations & Collaboration:</h5>
                                        <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>
                                            Shelbi excels at understanding client needs and ensuring that each project
                                            aligns with their vision, budget, and lifestyle. She fosters open
                                            communication
                                            and values long-term client partnerships.
                                        </p>
                                    </li>
                                    <li className='pt-7.5'>
                                        <h5 className='font-bold'>Creative Plant Solutions:</h5>
                                        <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>
                                            As part of the design process, Shelbi collaborates on selecting plant
                                            varieties,
                                            color schemes, and layout strategies that showcase each space’s personality
                                            while maintaining balance and functionality.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            {/* Approach and Philosophy */}
                            <div className='pt-20'>
                                <Title title_text={"Approach and Philosophy:"}/>
                                <ul>
                                    <li>
                                        <h5 className='font-bold'>Client-Centric Mindset:</h5>
                                        <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>
                                            Shelbi believes in building genuine relationships with clients, ensuring
                                            transparency and trust throughout the entire project cycle—from consultation
                                            to maintenance.
                                        </p>
                                    </li>
                                    <li className='pt-7.5'>
                                        <h5 className='font-bold'>Passion for Biophilic Design:</h5>
                                        <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>
                                            With a keen eye for aesthetic harmony and well-being benefits, she strives
                                            to incorporate nature into interior and exterior settings in a way that
                                            complements modern lifestyles.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            {/* Role and Contributions */}
                            <div className='pt-20'>
                                <Title title_text={"Role and Contributions:"}/>
                                <ul>
                                    <li>
                                        <h5 className='font-bold'>Business Development:</h5>
                                        <p className='mt-2.5 tl:ml-[113px] ts:ml-14 ml-10'>
                                            As co-owner, Shelbi collaborates with Jeremy on key decisions that shape
                                            the company’s growth, fosters client relationships, and ensures The Plant Lady maintains its reputation for quality and innovation.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            {/* Contact information */}
                            <div className='pt-20'>
                                <Title title_text={"Contact information:"}/>
                                <ul>
                                    <li className='flex items-center mb-3'>
                                        <h5 className='font-bold min-w-28'>Email:</h5>
                                        <Link href={"mailto:shelbi@theplantladytx.com"} className='hover-underline'>
                                            <span>shelbi@theplantladytx.com</span>
                                        </Link>
                                    </li>
                                    <li className='flex items-center mb-3'>
                                        <h5 className='font-bold min-w-28'>Phone:</h5>
                                        <Link href={"tel:+1-555-555-5555"} className='hover-underline'>
                                            <span>(555) 555-5555</span>
                                        </Link>
                                    </li>
                                    <li className='flex items-center'>
                                        <h5 className='font-bold min-w-28'>Social:</h5>
                                        <div className=''>
                                            <SocialMediaList/>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column with Image & LinkedIn Button */}
                        <div className='sticky top-16'>
                            <Image
                                src={team_img}
                                loading='lazy'
                                alt='Shelbi Johnson'
                                className='w-full'
                            />
                            {/* Link to Shelbi's actual LinkedIn */}
                            <Link
                                href={"https://www.linkedin.com/in/shelbi-j-94040b297/"}
                                className='mt-11 inline-block'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <ButtonOutline className={"after:left-0"}>
                                    Connect on LinkedIn <RightArrow width={"53"} height={"22"}/>
                                </ButtonOutline>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Showcase (Optional) */}
            <div className='container pt-20'>
                <h2 className='[font-size:_clamp(40px,7vw,90px)] text-primary-foreground font-extrabold leading-120 max-w-[651px]'>
                    Portfolio Showcase:
                </h2>
                <div className='grid tab:grid-cols-3 ts:grid-cols-2 gap-5 pt-10'>
                    {teamData[0].portfolio.map(({id, img, link, project_name}) => (
                        <ProjectCardThree key={id} img={img} project_name={project_name}/>
                    ))}
                </div>
            </div>

            <Feedback/>
        </>
    )
}

export default TeamSingle