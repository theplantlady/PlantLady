"use client"
import React from 'react'
import BottomNavbar from './bottomNavbar'
import MobileNavbar from './mobileNavbar'

const HeaderTwo = () => {
    return (
        <header className='w-full bg-background shadow-md'>
            <div className=' hidden tl:block'>
                <div className='container-fluid'>
                    <BottomNavbar />
                </div>
            </div>
            <div className='tl:hidden block'>
                <MobileNavbar />
            </div>
        </header >
    )
}

export default HeaderTwo