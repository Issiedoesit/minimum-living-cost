import React from 'react'
import SocialIcon from './SocialIconsData'
import pin from './../../assets/images/icons/round/round-place-24px.svg'
import phone from './../../assets/images/icons/round/round-phone-24px.svg'
import fax from './../../assets/images/icons/round/round-local-printshop-24px.svg'




const UpperFooter = () => {
  return (
    <section className='flex border-b-0.5 border-b-lightBlue1x flex-col pt-24 pb-20 lg:flex-row xl:items-center'>
    <div className='pb-20 lg:pb-0 xl:px-10 flex items-center xl:w-fiftyPercent'>
        <p className='text-5xl inter-700'>LOGO</p>
    </div>
    <div className='xl:w-fiftyPercent space-y-10 text-darkBlue1x'>
        <div className='space-y-6'>
            <a href="#" className='w-full flex items-center gap-3'>
                <img src={pin} alt='location' srcset="" />
                <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
            </a>
            <div className='w-full flex items-center'>
                <a href="tel:+1234567890" className='w-fiftyPercent flex items-center gap-3'>
                    <img src={phone} alt="phone" srcset="" />
                    <p>(123) 456-7890</p>
                </a>
                <a href="#" className='w-fiftyPercent flex items-center gap-3'>
                    <img src={fax} alt='fax' srcset="" />
                    <p>(123) 456-7890</p>
                </a>
            </div>
        </div>
     
        <div className='flex flex-row items-center gap-4'>
            <p className='text-xs opacity-50 sm:text-sm'>Social Media</p>
            {SocialIcon.map((data)=>{
                return <a key={data.id} href={data.link}>
                    <img src={data.img} alt={data.id} srcset="" />
                </a>
            })}
        </div>
    </div>
    </section>
  )
}

export default UpperFooter