import React from 'react'
import Nav from '../Nav'
import SanFranMap from './../../assets/images/sanFranMap.png'

const hero = () => {
  return (
    <section className='hero relative'>
        <div className='z-10 absolute h-full w-full bg-black/30'></div>
        <div className='z-20 relative top-0 left-0 px-5 sm:px-10 lg:px-28'>
            <Nav />
        </div>
        <section className='px-5 sm:px-10 lg:px-28 pt-20 pb-40 z-10 relative flex flex-col lg:flex-row gap-10 lg:justify-between lg:items-center h-full'>
            <div className='sm:w-eightyPercent mx-auto lg:mx-0 lg:w-fortyPercent lg:text-left'>
                <h1 className='inter inter-700 text-white text-2xl sm:text-3xl lg:text-5xl'>The most affordable place to stay in the san franciso bay area</h1>
            </div>
            <section className='lg:w-sixtyPercent flex lg:justify-end mx-auto lg:mx-0'>
                <div className='w-full poppins poppins-500 text-sm grid grid-rows-7 gap-8 grid-cols-1 place-items-center'>
                    <img src={SanFranMap} alt="map of san francisco bay area" className='row-span-2 col-span-1 sm:aspect-square  sm:max-w-md' />
                    <div className='flex flex-col sm:flex-row gap-2 sm:gap-0 px-2 w-full sm:w-fit sm:px-5 py-4 col-span-1 bg-white border border-black/10 rounded-ten'>
                        <select name="types" id="types" className='cursor-pointer px-5 py-4 border border-lightGrey1x bg-lightGrey2x'>
                            <option value="All Type" disabled selected>All Type</option>
                        </select>
                        <select name="neighborhood" id="neighborhood" className='cursor-pointer px-5 py-4 border border-lightGrey1x bg-lightGrey2x'>
                            <option value="Neighborhood" disabled selected>Neighborhood</option>
                        </select>
                        <button type='button' className='bg-blue1x rounded-ten sm:rounded-l-none sm:rounded-r-ten py-2 sm:py-0 px-5 flex items-center justify-center'>
                            <p className="hidden">Search</p>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9901 12.3188L18.2939 16.6226C18.4452 16.7739 18.5301 16.9792 18.53 17.1932C18.53 17.4072 18.4449 17.6124 18.2935 17.7637C18.1421 17.915 17.9368 17.9999 17.7228 17.9998C17.5088 17.9998 17.3036 17.9147 17.1523 17.7633L12.8485 13.4595C11.562 14.456 9.9441 14.9249 8.32406 14.7709C6.70401 14.6169 5.20349 13.8515 4.12774 12.6304C3.05199 11.4094 2.48182 9.82433 2.53323 8.19779C2.58463 6.57125 3.25375 5.02539 4.40446 3.87468C5.55517 2.72397 7.10104 2.05485 8.72757 2.00344C10.3541 1.95203 11.9391 2.5222 13.1602 3.59795C14.3813 4.6737 15.1467 6.17423 15.3007 7.79427C15.4547 9.41432 14.9858 11.0322 13.9893 12.3188H13.9901ZM8.93033 13.1995C10.2033 13.1995 11.4241 12.6938 12.3243 11.7937C13.2244 10.8936 13.7301 9.67272 13.7301 8.39974C13.7301 7.12676 13.2244 5.90592 12.3243 5.00579C11.4241 4.10565 10.2033 3.59997 8.93033 3.59997C7.65735 3.59997 6.43651 4.10565 5.53637 5.00579C4.63624 5.90592 4.13055 7.12676 4.13055 8.39974C4.13055 9.67272 4.63624 10.8936 5.53637 11.7937C6.43651 12.6938 7.65735 13.1995 8.93033 13.1995Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </section>
    </section>
  )
}

export default hero