"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';

import QuoteIcon from '@/assets/icons/quoteIcon';
import SectionTitle from '../ui/sectionTitle'
import ProgressAndNatigation from '../ui/progressAndNatigation';
import { cn } from '@/lib/utils';

const testimonialData = [
    {
        id: 1,
        name: "Michael Carter",
        position: "Greenwood Corporate Interiors",
        review: "Jeremy and Shelbi completely transformed our office with their stunning plant designs. The 3D mockups made it easy to visualize, and the final installation was even better than we imagined. Their passion and expertise are unmatched!"
    },
    {
        id: 2,
        name: "Jessica Tran",
        position: "Luxury Living Designs",
        review: "I worked with Shelbi years ago on a small project, and when it came time to revamp my home, I knew exactly who to call. She and Jeremy curated a breathtaking indoor plantscape that feels both organic and sophisticated."
    },
    {
        id: 3,
        name: "David Reynolds",
        position: "Elevate Office Spaces",
        review: "The Plant Lady team, especially Karen, made the entire process effortless. Their 3D renderings helped us fine-tune every detail before installation, and the results speak for themselves—our space has never felt more vibrant!"
    },
    {
        id: 4,
        name: "Lauren Mitchell",
        position: "Mitchell & Co. Properties",
        review: "I’ve been a long-time client of Jeremy and Shelbi, and they always bring something new to the table. Their ability to blend artistic vision with practical plant care is what keeps me coming back. Our latest project together is their best work yet!"
    },
    {
        id: 5,
        name: "Daniel Foster",
        position: "Foster Boutique Hotels",
        review: "Karen was an absolute gem to work with! She helped us design a lush, low-maintenance indoor plant setup that perfectly complements our modern boutique aesthetic. The Plant Lady’s 3D planning process made it seamless from start to finish."
    },
];

const Testimonial = ({ text_muted, bg_muted }) => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <section className='pt-20'>
            <div className='container-fluid '>
                <SectionTitle
                    sectionName={"Testimonials"}
                    sectionTitle={"Stories of Transformation"}
                    sectionDesc={"How Our Expert Designs Turn Visions into Vibrant Reality"}
                    bg_muted={bg_muted}
                    text_muted={text_muted}
                />

                <div className='tab:pt-30 ts:pt-20 pt-14'>
                    <Swiper
                        spaceBetween={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1
                            },
                            700: {
                                slidesPerView: 2
                            },
                            1300: {
                                slidesPerView: 3
                            }
                        }}
                        pagination={pagination}
                        loop={true}
                        modules={[Pagination, Navigation]}
                        className=''
                    >
                        {
                            testimonialData.map(({ id, name, position, review }) => {
                                return (
                                    <SwiperSlide key={id}>
                                        <div className='flex tab:gap-6 gap-2'>
                                            <div className='text-secondary-foreground'><QuoteIcon /></div>
                                            <div className='mt-16'>
                                                <p className={cn(`text-lg text-primary-foreground ${text_muted}`)}>{review}</p>
                                                <div className='relative after:absolute after:-left-5 after:top-0 after:w-[1px] after:h-full after:bg-primary ml-5 mt-6'>
                                                    <h5 className={cn(`text-primary-foreground font-extrabold leading-160 text-lg ${text_muted}`)}>{name}</h5>
                                                    <p className={cn(`text-primary-foreground font-medium ${text_muted}`)}>{position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                        <div className='container'><ProgressAndNatigation /></div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonial