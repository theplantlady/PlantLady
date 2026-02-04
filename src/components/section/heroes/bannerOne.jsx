"use client"
import Link from 'next/link'
import {useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from "swiper/modules"
import 'swiper/css';
import {cn} from '@/lib/utils'
import ButtonFill from '@/components/ui/buttons/buttonFill'
import RightArrow from '@/assets/icons/rightArrow';

import useStickyHeader from '@/hooks/useStickyHeader';
import useLogoHeader from "@/hooks/useLogoHeader";
import LogoTall from "@/assets/icons/logo-tall-block";


const BannerOne = ({data, text_muted, bg_muted, linkColor}) => {
    const swiperRef = useRef()
    useStickyHeader(linkColor);
    useLogoHeader();
    const handleSlideChange = (swiper) => {
        const animate_fill = document.querySelectorAll(".animate-bg")
        const text_animation = document.querySelectorAll(".text-animation")

        animate_fill.forEach((item) => item.classList.remove("animate-fill"))
        text_animation.forEach((item) => item.classList.remove("animate-text-line-animation"))

        animate_fill.forEach((item, index) => {
            if (index === swiper.activeIndex) {
                item.classList.add("animate-fill")
            }
        })
        text_animation.forEach((item, index) => {
            if (index === swiper.activeIndex) {
                item.classList.add("animate-text-line-animation")
            }
        })


    };


    const pagination = {
        clickable: true,
        el: ".hero-pagination",
        renderBullet: function (index, className) {
            return `
      <span class='${className}  flex leading-120 '>
         <span class='mr-2 inline-block text-3xl font-extrabold text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary active-blut lg:text-5xl'>0${index + 1}</span>
         <span class='hidden text-sm font-semibold title text-primary-foreground max-w-48 sm:max-w-56 sm:block md:text-lg'> ${data[index].title}</span>
      </span>`;
        },
    };

    return (
        <section className='relative snap-start overflow-x-hidden banner-one h-svh w-svw'>
            <div className={`absolute inset-0 z-20 overscroll-x-none invisible xl:visible overflow-x-hidden`}>
                <Link href="/" className={cn(`absolute right-0 text-primary-foreground ${linkColor} z-20  tall-logo
5xl:w-full
5xl:max-h-3/10
5xl:h-full
5xl:left-1/10
5xl:top-42 

4xl:w-full
4xl:max-h-3/10
4xl:h-full
4xl:left-1/10
4xl:top-48 
 
3xl:w-full
3xl:max-h-3/10
3xl:h-full
3xl:left-1/10
3xl:top-48 

2xl:w-full
2xl:max-h-3/10
2xl:h-full
2xl:left-1/10
2xl:top-48 

xl:w-full
xl:max-h-3/10
xl:h-full
xl:left-1/10
xl:top-48


lg:h-full         
lg:w-full
lg:max-h-3/10
lg:left-1/10      
lg:top-36   


md:h-full         
md:w-full        
md:max-h-3/10
md:left-1/10      
md:top-36
  

2sm:h-full         
2sm:w-full        
2sm:max-h-3/10 
2sm:left-2/10      
2sm:top-36


sm:h-full         
sm:w-full        
sm:max-h-3/10 
sm:left-2/10      
sm:top-36

xm:h-full         
xm:w-full        
xm:max-h-3/10 
xm:left-1/10 
xm:top-36  

`)}>
                    <LogoTall className={`relative max-h-fit shadow-black`}/>
                </Link>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                pagination={pagination}
                loop={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper
                }}
                onSlideChange={handleSlideChange}
                speed={1500}
                autoplay={{delay: 4000}}
                modules={[Pagination, Navigation, Autoplay]}
            >

                {
                    data.map(({id, banner_img, heading_one, heading_two}) => {
                        return (
                            <SwiperSlide key={id} className='relative h-full max-h-svh'>
                                <div className='  bg-cover bg-no-repeat h-svh'
                                     style={{backgroundImage: `url(${banner_img.src})`}}>
                                    <div className='container absolute bottom-0 z-40 top-3/10 4xl:top-3/10'>
                                        <div className='pt-[150px] pb-[250px] pl-[50px] xl:pt-[150px]'>
                                            <div className={'justify-end w-full'}>
                                                <h1 className='relative z-40 font-extrabold 2sm:text-[110px] xm:text-[65px] text-[55px] leading-[100%] sm:text-[85px] md:text-[100px] lg:text-[110px] xl:text-[130px] 2xl:text-[130px] 3xl:text-[130px] 4xl:text-[120px] 5xl:text-[120px]'>
                                                    {/*<h1 className='relative h-25 text-6xl font-extrabold 2sm:text-[130px] xm:text-[75px] leading-[100%] 2sm:h-[125px] sm:text-[100px] sm:h-[100px] lg:text-[170px] lg:h-[200px] xl:text-[200px]'>*/}
                                                    <span
                                                        className={cn(`text-plant-white webkit-text-stroke-width-1 webkit-text-stroke-plant-white opacity-90 animate-fill animate-bg after:${bg_muted} ${text_muted}`)}> {heading_one} </span>
                                                    {/*<svg strokeWidth="3"
                               className="absolute fill-transparent -mt-[91px] stroke-plant-pink stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation 2sm:h-[110px] xm:h-[65px] h-[85px] text-animation sm:h-[85px] md:h-[160px] lg:h-[150px] xl:h-[180px] 2xl:h-[210px]">
                            <text x="0%" dominantBaseline="middle" y="70%">{heading_one}</text>
                          </svg>*/}
                                                </h1>
                                                <h1 className='relative font-extrabold 2sm:text-[110px] xm:text-[65px] text-[55px] leading-[100%] sm:text-[85px] md:text-[100px] lg:text-[110px] xl:text-[130px] 2xl:text-[130px] 3xl:text-[130px] 4xl:text-[120px] 5xl:text-[120px]'>
                          <span
                              className={cn(`text-plant-pink webkit-text-stroke-width-1 webkit-text-stroke-plant-pink opacity-80 animate-fill animate-bg after:${bg_muted} ${text_muted}`)}> {heading_two} </span>


                                                </h1>
                                                <Link href={"/pages/projects"} className='mt-10 inline-block'>
                                                    <ButtonFill
                                                        className={cn(`after:z-[1] sm:px-10 px-4 after:left-0 after:${bg_muted} `)}> <span
                                                        className='relative z-10'>Explore Our Portfolio</span>
                                                    </ButtonFill>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
                <div className='absolute right-0 bottom-0 z-40 flex justify-between'>
                    <div
                        className='hero-pagination bg-[rgba(210, 224, 217, 0.27)] backdrop-blur-md xl:px-9 xl:py-[61px] sm:px-5 px-2 py-10 max-w-[800px] flex xl:gap-8 gap-5'></div>
                    {/* ------- Next and prev arrow */}
                    <div className='flex flex-col min-w-17.5 h-[136px] sm:w-[90px] xl:h-[181px]'>
                        <button onClick={() => swiperRef.current?.slideNext()}
                                className={cn(`bg-primary ${bg_muted} text-secondary-foreground flex justify-center items-center h-1/2 `)}>
                            <RightArrow width={"35"} height={"22"}/></button>
                        <button onClick={() => swiperRef.current?.slidePrev()}
                                className={cn(`bg-secondary text-primary-foreground flex justify-center items-center h-1/2 rotate-180`)}>
                            <RightArrow width={"35"} height={"22"}/></button>
                    </div>
                    {/* ------- Next and prev arrow */}
                </div>
            </Swiper>

        </section>
    )
}

export default BannerOne