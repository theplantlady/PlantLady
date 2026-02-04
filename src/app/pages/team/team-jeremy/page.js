
import SectionTitle from '@/components/ui/sectionTitle'
import Title from '@/components/ui/title'
import Image from 'next/image'
import React from 'react'
import team_img from "@/assets/images/team-1.jpg" // Replace with Jeremy’s actual photo if available
import Link from 'next/link'
import RightArrow from '@/assets/icons/rightArrow'
import ProjectCardThree from '@/components/ui/cards/projectCardThree'
import Feedback from '@/components/section/feedback'
import ButtonOutline from '@/components/ui/buttons/buttonOutline'
import SocialMediaList from '@/components/ui/socialMediaList'
import { teamData } from '@/lib/fackData/teamData'

export const metadata = {
  title: "The Plant Lady TX — Team Single",
  description: "Profile and background of Jeremy Dick, co-owner and lead horticulturist at The Plant Lady TX.",
};

const TeamSingle = () => {
  return (
      <>
        <section>
          <div className='container-fluid '>
            <SectionTitle
                sectionName={"President"}
                sectionTitle={"Jeremy Dick"}
                sectionDesc={"Leading Innovation in Horticultural Design and Technology"}
            />
          </div>
          <div className='container lg:pt-30 2sm:pt-20 pt-14'>
            <div className='grid xl:grid-cols-[auto_538px] lg:grid-cols-[auto_350px] md:grid-cols-[auto_400px] 2xl:gap-[132px] gap-16 items-start'>

              {/* Left Column */}
              <div>
                {/* Brief Bio */}
                <div className='mb-12.5'>
                  <Title title_text={"Brief Bio:"} />
                  <p>
                    Jeremy Dick is the co-owner of The Plant Lady TX, a premium horticulture design, installation,
                    and maintenance company serving residential and commercial clients. Known for his commitment to bridging
                    **nature and technology**, Jeremy has played a pivotal role in modernizing the plant-care process—offering
                    cutting-edge solutions that ensure thriving greenery in any environment.
                  </p>
                </div>

                {/* Expertise and Specializations */}
                <div className='pt-12.5'>
                  <Title title_text={"Expertise and Specializations:"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Horticultural Leadership:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                        Jeremy oversees custom plantscape projects and ensures every design meets exacting standards for
                        plant health and visual impact.
                      </p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Tech-Driven Plant Management:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                        He is instrumental in developing and refining the <strong>Plant Pulse</strong> system—an innovative
                        platform that uses Zoho Creator, Vue, and Firebase to streamline scheduling, care, and monitoring
                        for plant installations.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Design Philosophy */}
                <div className='pt-20'>
                  <Title title_text={"Design Philosophy:"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Biophilic Approach:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                        Jeremy believes well-chosen greenery can elevate any space—promoting well-being, enhancing productivity,
                        and forging a deeper connection with nature.
                      </p>
                    </li>
                    <li className='pt-7.5'>
                      <h5 className='font-bold'>Practical Innovation:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                        He blends horticultural expertise with user-friendly software solutions, ensuring clients get
                        both stunning plant designs and the tools needed to maintain them effortlessly.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Education and Credentials (Optional Placeholder) */}
                <div className='pt-20'>
                  <Title title_text={"Education and Credentials:"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Professional Development:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                        Jeremy continuously expands his skills by engaging with horticulture and tech communities, staying
                        abreast of evolving trends in plant care and software automation.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Awards and Recognition */}
                <div className='pt-20'>
                  <Title title_text={"Awards and Recognition:"} />
                  <ul>
                    <li>
                      <h5 className='font-bold'>Notable Achievements:</h5>
                      <p className='mt-2.5 xl:ml-[113px] 2sm:ml-14 ml-10'>
                        Under Jeremy’s guidance, The Plant Lady TX has earned local recognition for exceptional plant
                        installations and forward-thinking maintenance strategies, particularly through the use of
                        automation and data-driven plant care.
                      </p>
                    </li>
                  </ul>
                </div>

                {/* Contact information */}
                <div className='pt-20'>
                  <Title title_text={"Contact information:"} />
                  <ul>
                    <li className='flex items-center mb-3'>
                      <h5 className='font-bold min-w-28'>Email:</h5>
                      <Link href={"mailto:jeremy@theplantladytx.com"} className='hover-underline'>
                        <span>jeremy@theplantladytx.com</span>
                      </Link>
                    </li>
                    <li className='flex items-center mb-3'>
                      <h5 className='font-bold min-w-28'>Phone:</h5>
                      <Link href={"tel:+1-555-123-4567"} className='hover-underline'>
                        <span>(555) 123-4567</span>
                      </Link>
                    </li>
                    <li className='flex items-center'>
                      <h5 className='font-bold min-w-28'>Social:</h5>
                      <div className=''>
                        <SocialMediaList />
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
                    alt='Jeremy Dick'
                    className='w-full'
                />
                {/* Link to Jeremy's actual LinkedIn */}
                <Link
                    href={"https://www.linkedin.com/in/jeremy-dick/"}
                    className='mt-11 inline-block'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                  <ButtonOutline className={"after:left-0"}>
                    Connect on LinkedIn <RightArrow width={"53"} height={"22"} />
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
          <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-5 pt-10'>
            {teamData[0].portfolio.map(({ id, img, link, project_name }) => (
                <ProjectCardThree key={id} img={img} project_name={project_name} />
            ))}
          </div>
        </div>

        <Feedback />
      </>
  )
}

export default TeamSingle
