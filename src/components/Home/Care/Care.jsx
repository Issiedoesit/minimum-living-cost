import React from 'react'
import CareCards from './CareCards'
import CareImg from "./../../../assets/images/careImg.png";
import CareData from './CareData'
import { motion } from 'framer-motion';
import useThemeStore from '../../../customHooks/useThemeStore';

const Care = () => {
  const theme =  useThemeStore(state=>state.theme)


  const cardVariants = {
    offscreen: {
      y: 150,
      opacity:0,
    },
    onscreen: {
      y: 0,
      opacity:1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration:2,
      }
    }
  };
  const item = {
    slideOutRight: { 
      opacity: 0, 
      x: -200,
      scale: 0
     },
    slideInLeft: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration:5,
      }
     },
    show: { opacity: 1 }
  }


  const careWrap = {
    slideOutRight: { 
      opacity: 0, 
     },
    slideInLeft: { 
      opacity: 1, 
      transition: {
        delay: 10,
        type: "spring",
        bounce: 0.4,
        duration:5,
        delayChildren: 5,
        staggerDirection: 5,
        when: "beforeChildren"
      }
     },
  }

  
    const careDataSet = CareData.map((data)=>{
        return <CareCards key={data.id} id={data.id} image={data.image} alt={data.alt} title={data.title}/> 
    })
  return (
    <motion.section variants={cardVariants} initial='offscreen' whileInView="onscreen" viewport={{ once: true, amount: 0 }} transition={{ ease: "easeOut", duration: 2 }}  className={`py-28 lg:py-44 px-5 sm:px-10 lg:px-28 space-y-10 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-lightGrey1x'}`}>
        <h1 className='inter inter-800 text-2xl sm:text-3xl lg:text-4xl capitalize'><span className='border-b-4 border-red1x'>minimum living cost </span>takes care of everything</h1>
        <motion.section className='flex flex-col-reverse lg:flex-row items-center gap-16'>
            <motion.div variants={item} initial="slideOutRight" whileInView="slideInLeft" viewport={{ once: true, amount: 0 }} >
            <img loading='lazy' src={CareImg} alt="care" className='max-w-sm' />
            </motion.div>
            <motion.section variants={careWrap} initial='offscreen' whileInView="onscreen" viewport={{ once: true, amount: 0 }} transition={{ ease: "easeOut", duration: 2 }} className='grid grid-cols-2 md:grid-cols-3 gap-10'>{careDataSet}</motion.section>
       </motion.section>
    </motion.section>
  )
}

export default Care