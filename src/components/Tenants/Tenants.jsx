import React from 'react'
import {useDocTitle} from "../customHooks/CustomHooks"
import Nav from '../Nav';
import { faPersonWalkingLuggage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Tenants = () => {
  useDocTitle("MLC |  Tenants");

  return (
    <section className='h-screen relative'>
      <div className='bg-black px-5 sm:px-10 lg:px-28'><Nav /></div>
      <div className='flex flex-col items-center justify-center h-full z-0 px-10'>
      <div className='inter text-center text-red1x/60 relative '>
         <FontAwesomeIcon icon={faPersonWalkingLuggage} className="text-red1x animate-wiggle z-10" size='7x'/>
          </div>
          <div className='inter text-center text-red1x/60 py-10 space-y-10'>
            <h1 className='inter-700 text-3xl'>Tenants</h1>
            <p>Coming Soon</p>
          </div>
     </div>
    </section>
  )
}

export default Tenants