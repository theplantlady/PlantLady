'use client'

import { useDispatch, useSelector } from 'react-redux'
import { SalesSlideover } from './SalesSlideover'
import { setSalesSlideoverOpen } from '@/redux/uiSlice'
import { useEffect, useState } from 'react'

export default function SalesSlideoverWrapper() {
    const dispatch = useDispatch()
    const isOpen = useSelector((state) => state.ui.isSalesSlideoverOpen)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1280) // xl breakpoint
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const setOpen = (val) => {
        dispatch(setSalesSlideoverOpen(val))
    }

    // Only render the modal slideover on mobile. 
    // Desktop uses the flex-panel in LayoutChildren.
    if (!isMobile) return null

    return <SalesSlideover open={isOpen} setOpen={setOpen} />
}
