"use client"
import Image from 'next/image'
import { motion } from "framer-motion"
import RightArrow from '@/assets/icons/rightArrow'

import Link from 'next/link'
import { cn } from '@/lib/utils'

const ProjectCardOne = ({ order, position, project_year, project_desc, project_img, location, project_type, project_name, link, imageVariants, cardVariants }) => {
    return (
        <div className='xl:max-w-[95%] 2xl:max-w-7xl w-full mx-auto relative overflow-hidden mb-3'>
            <div className='container'>
                <div className='flex lg:flex-row flex-col items-center lg:pb-[170px] pb-25 '>
                    <div className={`${order} lg:w-1/2`}>
                        <div className={`${position} w-full h-full z-0`}>
                            <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={imageVariants}
                                viewport={{ once: true, amount: 0 }}
                            >
                                {project_img ? (
                                    <Image
                                        src={project_img}
                                        loading='lazy'
                                        alt={project_name || 'project image'}
                                        width={project_img.width || 1100}
                                        height={project_img.height || 700}
                                        className='w-full h-auto'
                                    />
                                ) : null}
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={cardVariants}
                        viewport={{ once: true, amount: 0 }}
                        className='lg:w-1/2 relative  z-[2]'
                    >
                        <div className='bg-primary xl:px-16 px-8 xl:pt-[78px] pt-10 xl:pb-[58px] pb-7'>
                            <h3 className='xl:text-5xl md:text-[40px] text-4xl font-extrabold leading-120 text-secondary-foreground pb-10'>
                                {project_name}
                            </h3>
                            <p className='text-secondary-foreground mb-7'>{project_desc}</p>
                            <ul className='mb-9'>
                                <li className='flex items-center mb-[6px]'>
                                    <span className='inline-block font-extrabold min-w-32 text-secondary-foreground'>Year:</span>
                                    <span className='font-medium text-secondary-foreground'>{project_year}</span>
                                </li>
                                <li className='flex items-center mb-[6px]'>
                                    <span className='inline-block font-extrabold min-w-32 text-secondary-foreground'>Category:</span>
                                    <span className='font-medium text-secondary-foreground'>{project_type}</span>
                                </li>
                                <li className='flex items-center mb-[6px]'>
                                    <span className='inline-block font-extrabold min-w-32 text-secondary-foreground'>Location</span>
                                    <span className='font-medium text-secondary-foreground'>{location}</span>
                                </li>
                            </ul>

                            {link ? (
                                <Link
                                    href={link}
                                    className={cn(
                                        "flex items-center justify-center gap-2.5 whitespace-nowrap sm:text-2xl text-xl font-bold border-2 border-secondary px-10 sm:py-[15px] py-3 relative z-10 overflow-hidden after:absolute after:left-0 after:top-0 after:bottom-0 after:z-[-1] after:bg-secondary after:w-full after:transition-all after:duration-500 hover:after:w-0 text-primary-foreground hover:text-secondary-foreground transition-all duration-500"
                                    )}
                                >
                                    View Project <RightArrow width={'35'} height={"22"} />
                                </Link>
                            ) : (
                                <span
                                    className="flex items-center justify-center gap-2.5 whitespace-nowrap sm:text-2xl text-xl font-bold border-2 border-secondary px-10 sm:py-[15px] py-3 opacity-50 cursor-not-allowed text-primary-foreground"
                                >
                                    View Project <RightArrow width={'35'} height={"22"} />
                                </span>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardOne