import React from 'react'
import Image from 'next/image'
import SectionTitle from '../../ui/sectionTitle'
import about_bg from "@/assets/images/about-image-2.jpg"
import SectionSidebarImg from '@/components/ui/sectionSidebarImg'

const AboutTwo = () => {
    return (
        <section>
            <div className='container-fluid'>
                <SectionTitle
                    sectionName={'About Us'}
                    sectionTitle={'Our Green Vision'}
                    sectionDesc={'Bringing Nature into Every Space with Passion and Expertise'}
                />
                <div className={`bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0`}>
                    <div className='container'>
                        <div className='flex lg:flex-row flex-col items-center justify-between gap-[66px]'>
                            <div className='md:-mt-25 -mt-[470px] -mb-25'>
                                <SectionSidebarImg img={about_bg} section_name={"about-bg"}/>
                            </div>
                            <div className='max-w-[533px] lg:pt-20 pt-20 lg:pb-10 pb-10'>
                                <h2 className='text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-120 mb-14 max-w-[400px]'>
                                    Cultivating Beauty: Our Story
                                </h2>
                                <p className='text-secondary-foreground'>
                                    At <strong>The Plant Lady TX</strong>, we believe plants have the power to transform not just spaces, but the way we experience them.
                                    What started as a <b>family passion</b> has flourished into a <b>leading plantscape design and maintenance company</b>, dedicated to creating lush, vibrant environments for homes and businesses.
                                </p>
                                <p className='text-secondary-foreground mt-7'>
                                    Managed by <b>Jeremy Dick & Shelbi Johnson</b>, The Plant Lady TX blends <b>artistry
                                    with science</b>, ensuring each space is both visually stunning and ecologically thriving.
                                    Our approach goes beyond aesthetics—we create <b>living, breathing environments</b> that enhance well-being, purify the air, and elevate everyday experiences.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTwo
