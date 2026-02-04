"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';

import project_1_img_1 from "@/assets/images/projects/project-one/1.JPG"
import project_1_img_2 from "@/assets/images/projects/project-one/2.JPG"
import project_1_img_3 from "@/assets/images/projects/project-one/3.JPG"
import project_1_img_4 from "@/assets/images/projects/project-one/4.JPG"
import project_1_img_5 from "@/assets/images/projects/project-one/5.JPG"
import project_1_img_6 from "@/assets/images/projects/project-one/6.JPG"
import project_1_img_7 from "@/assets/images/projects/project-one/7.JPG"
import project_1_img_8 from "@/assets/images/projects/project-one/8.JPG"
import project_1_img_9 from "@/assets/images/projects/project-one/9.JPG"
import project_1_img_10 from "@/assets/images/projects/project-one/10.JPG"
import ProgressAndNatigation from "@/components/ui/progressAndNatigation";
import Image from 'next/image';

const projectImgList = [
    {
        id: 1,
        img: project_1_img_1
    },
    {
        id: 2,
        img: project_1_img_2
    },
    {
        id: 3,
        img: project_1_img_3
    },
    {
        id: 4,
        img: project_1_img_4
    },
    {
        id: 5,
        img: project_1_img_5
    },
    {
        id: 6,
        img: project_1_img_6
    },
    {
        id: 7,
        img: project_1_img_7
    },
    {
        id: 8,
        img: project_1_img_8
    },
    {
        id: 9,
        img: project_1_img_9
    },
    {
        id:10,
        img: project_1_img_10
    },

]
const ProjectOneSliderOne = () => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <div className=' project-slider-one'>
            <Swiper
                spaceBetween={5}
                breakpoints={{
                    380: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    750: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1320: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }}
                pagination={pagination}
                loop={true}
                modules={[Pagination, Navigation]}
                
            >

                {
                    projectImgList.map(({ id, img }) => {
                        return (
                            <SwiperSlide key={id} >
                                <Image src={img} loading='lazy' alt='img' className='w-full min-h-16 max-h-svh' />
                            </SwiperSlide>
                        )
                    })
                }

                <div className='container'>

                    <ProgressAndNatigation />

                </div>
            </Swiper>
        </div>
    )
}

export default ProjectOneSliderOne