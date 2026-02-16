"use client"
import { cn } from '@/lib/utils';
import { useScroll, useTransform, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import RightArrow from '@/assets/icons/rightArrow';
import ButtonOutline from '../buttons/buttonOutline';

const BlogTitle = ({ sectionName, sectionTitle, sectionDesc, text_muted, bg_muted, link, button_text }) => {
    const [scroll, setScroll] = useState(false)
    const [scrollHeight, setScrollHeight] = useState(0)
    const containerRef = useRef()

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "end 0.0"]
    });

    let scrollValue
    if (scroll) {
        scrollValue = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    }
    else {
        scrollValue = useTransform(scrollYProgress, [0, 0], ["0%", `${scrollHeight / 3}px`]);
    }
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setScroll(true)
            }
            else {
                setScrollHeight(window.scrollY)
                setScroll(false)
            }
        })
    }, [])
    return (
        <>
            <div ref={containerRef} className='overflow-x-hidden container '>
                <motion.div style={{ translateX: scrollValue} }>
                    <h1 className='text-plant-pink webkit-text-stroke-width-1 webkit-text-stroke-plant-pink opacity-80 tl:text-[210px] tl:text-[180px]  tab:text-[150px] tab:text-[160px] ts:text-[110px]  phx:text-[85px] ph:text-[60px] text-[50px] whitespace-nowrap font-extrabold leading-185 ml-4 justify-center'>{sectionName}</h1>
                </motion.div>
            </div>
            <div className='container relative'>
                <div className={cn(`tl:-mt-36 tl:-mt-28 tab:-mt-26 tab:-mt-24 ts:-mt-22 phx:-mt-18 -mt-8 ph:-mt-8 tl:ml-12.5 tab:ml-9 tab:ml-7 ml-3 after:contents-[""] after:absolute after:left-[12px] after:top-0 after:w-[1px] after:h-full after:bg-primary`)}>
                    <h2 className={cn(`tl:text-[105px] tl:text-[90px]  tab:text-[75px] tab:text-[55px] ts:text-[55px] phx:text-[42.5px] ph:text-[30px] text-[25px] font-extrabold leading-110 text-plant-white mb-5 ${text_muted}`)} dangerouslySetInnerHTML={{__html:sectionTitle}}/>
                    <span className={cn(`block w-[300px] h-[1px] bg-primary ${bg_muted}`)}></span>
                    <div className='flex tab:flex-row flex-col justify-between tab:items-center'>
                        <h5 className={cn(`text-plant-leaf-light tab:text-[35px] phx:text-3xl text-2xl font-semibold mt-4 max-w-[690px] tab:mb-0 mb-7 !leading-160 ${text_muted}`)}>{sectionDesc}</h5>
                        {
                            button_text && <Link href={link}><ButtonOutline className={cn(`ts:px-10 px-3 after:left-0 after:${bg_muted}`)}>{button_text} <RightArrow height={"22"} width={"35"}/> </ButtonOutline></Link>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogTitle