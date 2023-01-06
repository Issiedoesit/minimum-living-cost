import React from 'react'
import CareCards from './CareCards'
import CareImg from "./../../../assets/images/careImg.png";
import CareData from './CareData'

const care = () => {
    const careDataSet = CareData.map((data)=>{
        return <CareCards key={data.id} id={data.id} image={data.image} alt={data.alt} title={data.title}/> 
    })
  return (
    <section className='py-28 lg:py-44 px-5 sm:px-10 lg:px-28 space-y-10'>
        <h1 className='inter inter-800 text-2xl sm:text-3xl lg:text-4xl capitalize'><span className='border-b-4 border-red1x'>minimum living cost </span>takes care of everything</h1>
        <section className='flex flex-col-reverse lg:flex-row items-center gap-16'>
            <div>
            <img src={CareImg} alt="care" className='max-w-sm' />
            </div>
            <section className='grid grid-cols-2 md:grid-cols-3 gap-10'>{careDataSet}</section>
       </section>
    </section>
  )
}

export default care