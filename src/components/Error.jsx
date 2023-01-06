import React from 'react'
import Error from './../assets/images/error.svg';

const error = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center'>
        <img src={Error} alt="Error"className='w-twentyFivePercent'/>
        <div className='py-10 space-y-5'>
          <h1 className='inter inter-700 text-2xl'>We're currently having issues showing this page!</h1>
          <h2 className='inter inter-600 text-xl'>In the meanwhile, you can:</h2>
          <ul className='marker:text-red1x marker:text-2xl list-disc'>
            <li className=''>Check your connection</li>
            <li className=''>Refresh the Page</li>
            <li className=''>Check the link for errors</li>
          </ul>
        </div>
    </div>
  )
}

export default error