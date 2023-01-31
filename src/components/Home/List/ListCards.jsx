import React from 'react'
import Bed from './../../../assets/images/icons/list/Bed.svg'
import Bath from './../../../assets/images/icons/list/Shower.svg'
import Size from './../../../assets/images/icons/list/Size.svg'
import { motion } from 'framer-motion'
import useThemeStore from '../../../customHooks/useThemeStore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBath, faBed, faHashtag, faSun } from '@fortawesome/free-solid-svg-icons'



const ListCards = (props) => {
  const theme = useThemeStore(state => state.theme)

  const listingCards = {
    slideDown: { 
        opacity: 0,
        y:20
        },
    slideUp: { 
        opacity: 1, 
        y:0,
        transition: {
        type: "spring",
        bounce: 0,
        duration:2,
        }
        },
}


  return (
    <motion.div variants={listingCards} initial="slideDown" whileInView="slideUp" viewport={{once:true, amount:0}} key={props.id} id={props.id} className="dm shadow-lg rounded-26.62px w-ninetyPercent sm:w-auto max-w-[350px] hover:scale-90 transition-transform ease-in-out duration-500 mx-auto">
      <div>
        <img loading='lazy' src={props.img} alt="listing" />
        <section className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black/40 text-white'} text-left rounded-b-26.62px pt-18px space-y-18px`}>
          <h1 className='pl-7 pr-5 dm-700 text-lg sm:text-2xl'>{props.address}</h1>
          <div className='pl-7 pr-5'>
            <p className='dm-400 text-grey2x sm:text-lg'>{props.roomType} Room</p>
            <p className='dm-700 text-lg sm:text-2xl text-red1x'>{props.price}/Month</p>
          </div>
          <div className='flex flex-row items-center dm-700 rounded-b-26.62px border-t border-lightGrey3x divide-x divide-lightGrey3x justify-between'>
              <div className='text-sm sm:text-base flex flex-row items-center justify-center w-1/3 gap-2 py-5'>
                {theme === 'light'
                ?
                <img loading='lazy' src={Bed} alt="rooms" className='w-3 sm:w-auto sm:h-auto'/>
                :
                <FontAwesomeIcon icon={faBed} className="w-3 sm:w-auto" />
                }
                <p>{props.NoRooms}</p>
              </div>
              <div className='text-sm sm:text-base flex flex-row items-center justify-center w-1/3 gap-2 py-5'>
              {theme === 'light'
                ?
                <img loading='lazy' src={Bath} alt="shower" className='w-3 sm:w-auto sm:h-auto'/>
                :
                <FontAwesomeIcon icon={faBath} className="w-3 sm:w-auto" />
                }
                <p>{props.NoBaths}</p>
              </div>
              <div className='text-sm sm:text-base flex flex-row items-center justify-center w-1/3 gap-2 py-5'>
              {theme === 'light'
                ?
                <img loading='lazy' src={Size} alt="size" className='w-3 sm:w-auto sm:h-auto'/>
                :
                <FontAwesomeIcon icon={faHashtag} className="w-3 sm:w-auto" />
                }
                <p>{props.size}</p>
              </div>
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default ListCards