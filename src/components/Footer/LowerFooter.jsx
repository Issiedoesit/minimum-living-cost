import React from 'react'

const LowerFooter = () => {
  return (
    <div className='w-full flex flex-row flex-wrap xl:flex-nowrap gap-8 xl:gap-0 justify-between items-start py-4 text-darkBlue1x text-xs sm:text-sm'>
        <div className='flex flex-wrap sm:flex-nowrap  gap-10 uppercase'>
            <a href="#" className=''>About us</a>
            <a href="#" className=''>Contact us</a>
            <a href="#" className=''>Help</a>
            <a href="#" className=''>Privacy Policy</a>
            <a href="#" className=''>Disclaimer</a>
        </div>
        <div className='opacity-50'>
            <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
        </div>
    </div>
  )
}

export default LowerFooter