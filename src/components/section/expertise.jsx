"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import SectionTitle from '../ui/sectionTitle'
import expertise_bg from "@/assets/images/expertise.jpg"
import Title from '../ui/title'
import { cardSlideAnimation } from '@/lib/utils'
import SectionSidebarImg from '../ui/sectionSidebarImg'

// Adjust skillList to reflect The Plant Lady TX's core competencies.
const skillList = [
    {
        id: 1,
        skill_name: "Plantscape Design",
        achive: "95%"
    },
    {
        id: 2,
        skill_name: "Biophilic Innovation",
        achive: "90%"
    },
    {
        id: 3,
        skill_name: "Sustainability",
        achive: "85%"
    },
    {
        id: 4,
        skill_name: "Maintenance & Care",
        achive: "88%"
    },
]

const Expertise = () => {
    return (
        <section className='mt-40'>
            <div className='container-fluid '>
                {/* Section title updated to reflect horticultural expertise */}
                <SectionTitle
                    sectionName={"Expertise"}
                    sectionTitle={"Mastering the Art of Plantscape Design"}
                    sectionDesc={"Where Creativity Meets Horticultural Proficiency"}
                />
                <div className='tab:mt-30 ts:mt-20 mt-14 bg-secondary'>
                    <div className='flex tab:flex-row flex-col items-center gap-15 '>
                        <div>
                            {/* Use an appropriate background image that aligns with The Plant Lady TX's brand */}
                            <SectionSidebarImg
                                img={expertise_bg}
                                section_name={"Expertise-bg"}
                                className={"w-full h-full"}
                            />
                        </div>
                        <div className='px-3 tl:py-0 py-7 max-w-[609px] w-full'>
                            <Title
                                title_text={"Expertise Progress"}
                                className={"tl:mb-20 mb-14"}
                            />
                            <p className='mb-16 text-primary-foreground'>
                                From cozy homes to bustling offices, The Plant Lady TX blends horticultural science and design artistry to create thriving greenery.
                            </p>
                            <div>
                                {skillList.map(({ id, achive, skill_name }) => {
                                    return (
                                        <div key={id} className='bg-primary_rgba relative h-[1px] w-full mt-16 '>
                                            <div
                                                className={`bg-primary absolute -top-[2.5px] left-0 h-[5px]`}
                                                style={{ width: achive, transition: "width 1s ease-in-out" }}
                                            >
                                                <span className='absolute left-0 bottom-full mb-2 font-semibold text-primary-foreground'>
                                                    {skill_name}
                                                </span>
                                                <span className='absolute -right-4 bottom-full mb-2 font-semibold text-primary-foreground'>
                                                    {achive}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise
