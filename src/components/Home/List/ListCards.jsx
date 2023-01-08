import React from 'react'
import Bed from './../../../assets/images/icons/list/Bed.svg'
import Bath from './../../../assets/images/icons/list/Shower.svg'
import Size from './../../../assets/images/icons/list/Size.svg'

const ListCards = (props) => {
  return (
    <div key={props.id} id={props.id} className="dm shadow-lg rounded-26.62px max-w-md hover:scale-90 transition-transform ease-in-out duration-500 mx-auto">
      <div>
        <img src={props.img} alt="listing" />
        <section className='bg-white text-left rounded-b-26.62px pt-18px space-y-18px'>
          <h1 className='pl-7 pr-5 dm-700 text-lg sm:text-2xl'>{props.address}</h1>
          <div className='pl-7 pr-5'>
            <p className='dm-400 text-grey2x sm:text-lg'>{props.roomType} Room</p>
            <p className='dm-700 text-lg sm:text-2xl text-red1x'>{props.price}/Month</p>
          </div>
          <div className='flex flex-row items-center dm-700 rounded-b-26.62px border-t border-lightGrey3x divide-x divide-lightGrey3x justify-between'>
              <div className='text-sm sm:text-base flex flex-row items-center justify-center w-1/3 gap-2 py-5'>
                <img src={Bed} alt="rooms" className='w-3 sm:w-auto sm:h-auto'/>
                <p>{props.NoRooms}</p>
              </div>
              <div className='text-sm sm:text-base flex flex-row items-center justify-center w-1/3 gap-2 py-5'>
                <img src={Bath} alt="shower" className='w-3 sm:w-auto sm:h-auto'/>
                <p>{props.NoBaths}</p>
              </div>
              <div className='text-sm sm:text-base flex flex-row items-center justify-center w-1/3 gap-2 py-5'>
                <img src={Size} alt="size" className='w-3 sm:w-auto sm:h-auto'/>
                <p>{props.size}</p>
              </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ListCards