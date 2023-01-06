import React from 'react'

const CareCards = (props) => {
  return (
    <div key={props.id} id={props.id} className="flex flex-col items-center sm:items-start text-left space-y-4">
        <div className='bg-white shadow-lg w-12 h-12 sm:w-18 sm:h-18 flex items-center justify-center rounded-ten'>
            <img src={props.image} alt={props.alt} className="w-7 h-7 sm:w-9 sm:h-9"/>
        </div>
        <div>
            <h2 className='inter inter-600'>{props.title}</h2>
        </div>
    </div>
  )
}

export default CareCards