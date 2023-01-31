import React from 'react'
import SocialIcon from './SocialIconsData'
import pin from './../../assets/images/icons/round/round-place-24px.svg'
import phone from './../../assets/images/icons/round/round-phone-24px.svg'
import fax from './../../assets/images/icons/round/round-local-printshop-24px.svg'
import Logo from '../../assets/images/logo/logo.png'
import useThemeStore from '../../customHooks/useThemeStore'



const UpperFooter = () => {
    const theme = useThemeStore(state=>state.theme)

  return (
    <section className='flex border-b-0.5 border-b-lightBlue1x flex-col pt-24 pb-20 xl:flex-row xl:items-center'>
    <div className='pb-20 xl:pb-0 xl:px-10 flex items-center xl:w-fiftyPercent'>
        {/* <p className='text-5xl inter-700'>LOGO</p> */}
        <a href="/">
            <img src={Logo} alt='logo' className='hover:scale-90 transition-all duration-500 ease-in-out cursor-pointer bg-red1x shadow-md max-w-[200px] shadow-red1x'/>
        </a>
    </div>
    <div className={`xl:w-fiftyPercent space-y-10 ${theme === 'light' ? 'text-darkBlue1x' : 'text-white'}`}>
        <div className='space-y-6'>
            <a href="#" className='w-full flex items-center gap-3'>
                <img src={pin} alt='location' srcset="" />
                <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
            </a>
            <div className='w-full flex flex-wrap sm:flex-nowrap gap-10 items-center'>
                <a href="tel:+1234567890" className='sm:w-fiftyPercent flex items-center gap-3'>
                    <img src={phone} alt="phone" srcset="" />
                    <p>(123) 456-7890</p>
                </a>
                <a href="#" className='sm:w-fiftyPercent flex items-center gap-3'>
                    <img src={fax} alt='fax' srcset="" />
                    <p>(123) 456-7890</p>
                </a>
            </div>
        </div>
     
        <div className='flex flex-col sm:flex-row sm:items-center gap-10 sm:gap-4'>
            <p className='opacity-50 text-sm'>Social Media</p>
            <div className='items-center gap-y-10 sm:gap-y-4 sm:gap-4 grid grid-cols-4 sm:flex sm:flex-row'>
                {SocialIcon.map((data)=>{
                    return <a key={data.id} href={data.link} className="col-span-1 hover:scale-90 transition-all duration-500 ease-in-out" >
                        <img src={data.img} alt={data.id} srcset="" />
                    </a>
                })}
            </div>
        </div>
        
    </div>
    </section>
  )
}

export default UpperFooter