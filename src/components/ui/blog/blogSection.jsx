
import React from 'react'
import RightArrow from '@/assets/icons/rightArrow'
import Link from 'next/link'
import Title from '@/components/ui/title'
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import {DotIcon} from "@radix-ui/react-icons";


const BlogSection = ({blogListTitle, blogListSubTitle, blogListText2,blogListText3,blogListText, blogListData}) => {
    return (
        <div className='container flex lg:flex-row flex-col justify-between relative z-10 pt-[23px] mb-[14px]'>
            <div className='2xl:max-w-[637px] lg:max-w-[500px] w-full'>
                <h4 className='text-primary-foreground text-3xl 2sm:text-4xl font-bold leading-135'>{blogListTitle}</h4>
                <h4 className='text-primary-foreground text-2xl 2sm:text-2xl font-bold leading-135'>{blogListSubTitle}</h4>
                <p className='text-primary-foreground mt-5'>{blogListText}</p>
                <p className='text-primary-foreground mt-5'>{blogListText2}</p>
                <p className='text-primary-foreground mt-5'>{blogListText3}</p>
                <ul className='mt-[35px]'>
                    {
                        blogListData.map(({id, item_name, item_text}) => {
                            return (
                                <li key={id} className='text-primary-foreground gap-[27px] '>
                                    <div className='flex flex-col'>
                                    <span className=' flex flex-row items-center'>
                                        <DotIcon
                                            width={"35"}
                                            height={"22"}/>
                                        <span
                                            className='text-primary-foreground text-xl leading-160 font-bold'>{item_name}</span>
                                    </span>
                                        <p className='text-lg leading-160 inline-block relative ml-10'>
                                            <span className='font-medium text-primary-foreground'>{item_text}</span>
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>

        </div>
    )
}

export default BlogSection