"use client"
import React, { useEffect } from 'react'
import TopNavbar from './topNavbar'
import BottomNavbar from './bottomNavbar';
import MobileNavbar from './mobileNavbar';

const HeaderOne = () => {

  return (
    <>
      <header className='absolute z-40 top-0 left-0 w-svw bg-gray overflow-x-none header-one'>
        <div className='hidden xl:block'>
          <TopNavbar />
        </div>
        <div className='border-border border-t border-b hidden xl:block'>
          <div className='container-fluid'>
            <BottomNavbar />
          </div>
        </div>
        <div className='xl:hidden block border-border border-b'>
          <MobileNavbar />
        </div>
      </header >
    </>
  )
}

export default HeaderOne