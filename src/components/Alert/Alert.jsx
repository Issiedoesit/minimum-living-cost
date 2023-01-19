import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'



const Alert = ({alertRef, clearTimerRef, mainColor, alertIcon, alertHeading, alertMessage, alertDisplay, setAlertDisplay }) => {
 
    const handleClose = () => {
        $('#alert').animate({opacity: '0'}, 400)
        setTimeout(() => {
            setAlertDisplay('hidden')
        }, 400);
        clearTimeout(clearTimerRef.current)
    }
    

    return (
        <div id='alert' ref={alertRef} className={`w-ninetyPercent ${alertDisplay} max-w-sm inter fixed bg-white shadow-md z-50 rounded-lg border-l-6 border-l-${mainColor} right-4 top-2`}>
            <div className='flex flex-row justify-between items-center gap-5 px-5 py-3 '>
                <div className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon icon={alertIcon} size="2x" className={`text-${mainColor}`} /> 
                    <div className=''>
                        <h1 className='inter inter-700 text-lg text-slate-800'>{alertHeading}</h1>
                        <p className='text-slate-600'>{alertMessage}</p>
                    </div>
                </div>
                <button onClick={handleClose} type="button">
                    <FontAwesomeIcon icon={faClose} size="2x" className='text-slate-500' /> 
                </button>
            </div>
            <div className={`h-1 w-full bg-${mainColor} rounded-br-lg close-timer`}>

            </div>
            <div className='bg-red-500 border-l-red-500 text-red-500 hidden'>
                <p className='bg-green-500 border-l-green-500 text-green-500'></p>
            </div>
        </div>
  )
}

export default Alert