import Image from 'next/image'
import Link from 'next/link'

import team_1 from "@/assets/images/team/team-1.jpg"
import team_2 from "@/assets/images/team/team-2.jpg"

const Comments = () => {
    return (
        <div className='grid tl:grid-cols-[auto_25%] tab:grid-cols-[auto_32%] tl:gap-[143px] tab:gap-16 pb-20'>
            <div>
                <h2 className='[font-size:_clamp(33px,5vw,48px)] font-bold text-primary-foreground pb-7.5'>Comments (32)</h2>
                <div className='flex ts:gap-7.5 gap-4'>
                    <Link href={""}>
                        <Image src={team_1} loading='lazy'      alt='Philip Reyes' className='max-w-20 max-h-20 object-cover' />
                    </Link>
                    <div>
                        <Link href={""} className='text-2xl font-bold leading-[80%]'>Philip Reyes</Link>
                        <p>Small apartments can be a canvas for creativity and innovation. By following these tips and making thoughtful design choices, you can transform your compact living space into a int functional, inviting</p>
                        <span className='font-bold'>Reply</span>
                    </div>
                </div>
                <div className='flex ts:gap-7.5 gap-4 ts:ml-28 ml-10 pt-10'>
                    <Link href={""}>
                        <Image src={team_2} loading='lazy'      alt='Philip Reyes' className='max-w-20 max-h-20 object-cover' />
                    </Link>
                    <div>
                        <Link href={""} className='text-2xl font-bold leading-[80%] '>Mark Anderson</Link>
                        <p>Small apartments can be a canvas for creativity and innovation. By following these tips and making thoughtful design choices, you can transform your compact living space into a int functional, inviting</p>
                        <span className='font-bold'>Reply</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments