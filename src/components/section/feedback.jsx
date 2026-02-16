import React from 'react'
import feedback_bg from "@/assets/images/feedback-image.jpg"
import RightArrow from '@/assets/icons/rightArrow'
import ButtonFill from '../ui/buttons/buttonFill'
import Link from 'next/link'

const Feedback = () => {
  return (
    <section className='container py-20'>
      <div className='bg-cover bg-no-repeat tab:pt-[117px] pt-20 pb-[69px] tab:pl-[148px] pl-10 tab:pr-[133px] ts:pr-24 pr-10 flex tab:flex-row flex-col justify-between tab:items-end items-start' style={{ backgroundImage: `url(${feedback_bg.src})` }}>
        <h1 className='[font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110 text-secondary-foreground max-w-[600px]'>Drop Us a Line</h1>
        <Link href={"/contact"}>
          <ButtonFill className={"after:left-0 after:bg-secondary text-primary-foreground border-secondary hover:text-secondary-foreground mt-6 tab:mt-0"}> Let’s Talk <RightArrow width={"35"} height={"22"} /> </ButtonFill>
        </Link >
      </div>
    </section>
  )
}

export default Feedback