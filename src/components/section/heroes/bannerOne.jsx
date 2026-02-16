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
         <span class='mr-2 inline-block text-3xl font-extrabold text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary active-blut tab:text-5xl'>0${index + 1}</span>
         <span class='hidden text-sm font-semibold title text-primary-foreground max-w-48 phx:max-w-56 phx:block tab:text-lg'> ${data[index].title}</span>
      </span>`;
        },
    };

    return (
        <section className='relative snap-start overflow-x-hidden banner-one h-svh w-svw'>
            <div className={`absolute inset-0 z-20 overscroll-x-none visible overflow-x-hidden`}>
                <Link href="/" className={cn(`absolute right-0 text-primary-foreground ${linkColor} z-20  tall-logo
wd:w-full
wd:max-h-3/10
wd:h-full
wd:left-1/10
wd:top-42 

dt:w-full
dt:max-h-3/10
dt:h-full
dt:left-1/10
dt:top-48 
 
lp:w-full
lp:max-h-3/10
lp:h-full
lp:left-1/10
lp:top-48 

tl:w-full
tl:max-h-3/10
tl:h-full
tl:left-1/10
tl:top-48 

tab:w-full
tab:max-h-3/10
tab:h-full
tab:left-1/10
tab:top-48

ts:h-full         
ts:w-full
ts:max-h-3/10
ts:left-1/10      
ts:top-36   

phx:h-full         
phx:max-h-3/10 
phx:left-1/10      
phx:top-1/10

ph:h-full         
ph:w-full        
ph:max-h-3/10 
ph:left-2/10      
ph:top-36

h-full         
w-full        
max-h-3/10 
left-1/10 
top-36  

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
                                    <div className={'container absolute bottom-0 z-40 top-4/10 tl:top-5/10 lp:left-1/10'}>
                                        <div className=' pb-[250px]  '>
                                            <div className="justify-end w-full">
                                                <h1 className='relative z-40 font-extrabold  leading-[100%] text-[35px] ph:text-[45px] phx:text-[70px] ts:text-[90px] tab:text-[130px] tl:text-[80px] lp:text-[90px] dt:text-[90px] wd:text-[110px] '>
                                                    {/*<h1 className='relative h-25 text-6xl font-extrabold ts:text-[130px] ph:text-[75px] leading-[100%] ts:h-[125px] phx:text-[100px] phx:h-[100px] tab:text-[170px] tab:h-[200px] tl:text-[200px]'>*/}
                                                    <span
                                                        className={cn(`text-plant-white webkit-text-stroke-width-1 webkit-text-stroke-plant-white opacity-90 animate-fill animate-bg after:${bg_muted} ${text_muted}`)}> {heading_one} </span>
                                                    {/*<svg strokeWidth="3"
                               className="absolute fill-transparent -mt-[91px] stroke-plant-pink stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation ts:h-[110px] ph:h-[65px] h-[85px] text-animation phx:h-[85px] tab:h-[160px] tab:h-[150px] tl:h-[180px] tl:h-[210px]">
                            <text x="0%" dominantBaseline="middle" y="70%">{heading_one}</text>
                          </svg>*/}
                                                </h1>
                                                <h1 className='relative font-extrabold leading-[100%] text-[35px] ph:text-[45px] phx:text-[70px] ts:text-[90px] tab:text-[130px] tl:text-[80px] lp:text-[90px] dt:text-[90px] wd:text-[110px]'>
                          <span
                              className={cn(`text-plant-pink webkit-text-stroke-width-1 webkit-text-stroke-plant-pink opacity-80 animate-fill animate-bg after:${bg_muted} ${text_muted}`)}> {heading_two} </span>


                                                </h1>
                                                <Link href={"/pages/projects"} className='mt-10 inline-block z-50'>
                                                    <ButtonFill
                                                        className={cn(`after:z-[1] phx:px-10 px-4 after:left-0 after:${bg_muted} `)}> <span
                                                        className='relative z-50'>Explore Our Portfolio</span>
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
                        className='hero-pagination bg-[rgba(210, 224, 217, 0.27)] backdrop-blur-md tl:px-9 tl:py-[61px] phx:px-5 px-2 py-10 max-w-[800px] flex tl:gap-8 gap-5'></div>
                    {/* ------- Next and prev arrow */}
                    <div className='flex flex-col min-w-17.5 h-[136px] phx:w-[90px] tl:h-[181px]'>
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