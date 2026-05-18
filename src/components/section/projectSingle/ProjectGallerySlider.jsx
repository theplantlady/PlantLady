"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css'
import ProgressAndNatigation from "@/components/ui/progressAndNatigation"
import Image from 'next/image'

const ProjectGallerySlider = ({ photos = [] }) => {
    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    }

    return (
        <div className='project-slider-one'>
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
                {photos.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={img}
                            loading='lazy'
                            alt={`Project photo ${index + 1}`}
                            width={img.width}
                            height={img.height}
                            className='w-full min-h-16 max-h-svh'
                        />
                    </SwiperSlide>
                ))}

                <div className='container'>
                    <ProgressAndNatigation />
                </div>
            </Swiper>
        </div>
    )
}

export default ProjectGallerySlider