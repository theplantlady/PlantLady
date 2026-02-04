"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';

import project_3_img_1 from "@/assets/images/projects/project-three/1.jpg"
import project_3_img_2 from "@/assets/images/projects/project-three/2.jpg"
import project_3_img_3 from "@/assets/images/projects/project-three/3.jpg"
import project_3_img_4 from "@/assets/images/projects/project-three/4.jpg"
import project_3_img_5 from "@/assets/images/projects/project-three/5.jpg"
import project_3_img_6 from "@/assets/images/projects/project-three/6.jpg"
import project_3_img_7 from "@/assets/images/projects/project-three/7.jpg"
import project_3_img_8 from "@/assets/images/projects/project-three/8.jpg"
import project_3_img_9 from "@/assets/images/projects/project-three/9.jpg"
import project_3_img_10 from "@/assets/images/projects/project-three/10.jpg"
import ProgressAndNatigation from "@/components/ui/progressAndNatigation";
import Image from 'next/image';

const projectImgList = [
    {
        id: 1,
        img: project_3_img_1
    },
    {
        id: 2,
        img: project_3_img_2
    },
    {
        id: 3,
        img: project_3_img_3
    },
    {
        id: 4,
        img: project_3_img_4
    },
    {
        id: 5,
        img: project_3_img_5
    },
    {
        id: 6,
        img: project_3_img_6
    },
    {
        id: 7,
        img: project_3_img_7
    },
    {
        id: 8,
        img: project_3_img_8
    },
    {
        id: 9,
        img: project_3_img_9
    },
    {
        id:10,
        img: project_3_img_10
    },

]
const ProjectThreeSliderOne = () => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <div className=' project-slider-one'>
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    380: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    750: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1320: {
                        slidesPerView: 3,
                        spaceBetween: 40,
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
                                <Image src={img} loading='lazy'      alt='img' className='w-full h-full min-h-16' />
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

export default ProjectThreeSliderOne