import { motion } from 'framer-motion'
import React from 'react'
import useThemeStore from '../../../customHooks/useThemeStore'

const CareCards = (props) => {
  const theme =  useThemeStore(state=>state.theme)

  const care = {
    hidden: { 
      opacity: 0,
      x: -50
     },
    show: { 
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration:2,
      }
     }
  }

  return (
    <motion.div variants={care} initial='hidden' whileInView="show" viewport={{ once: true, amount: 0 }}  key={props.id} id={props.id} className="flex flex-col items-center sm:items-start text-left space-y-4">
        <div className={`${theme === 'light' ?'bg-white shadow-lg' : 'bg-slate-900 shadow-gray-600 shadow-md'}  w-12 h-12 sm:w-18 sm:h-18 flex items-center justify-center rounded-ten`}>
            <img loading='lazy' src={props.image} alt={props.alt} className="w-7 h-7 sm:w-9 sm:h-9"/>
        </div>
        <div>
            <h2 className='inter inter-600 text-center md:text-left'>{props.title}</h2>
        </div>
    </motion.div>
  )
}

export default CareCards