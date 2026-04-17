'use client'

import { useState } from 'react'
import {SalesSlideover} from './SalesSlideover'

export default function SalesSlideoverWrapper() {
    const [open, setOpen] = useState(true)

    return <SalesSlideover open={open} setOpen={setOpen} />
}