import React, { useEffect, useState } from 'react'
import Quotes from './../../../assets/images/quotes.png';
import { motion, AnimatePresence } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'


const ReviewCards = ({id, review, img, user, job, video, direction, setDirection, currentSlide, setCurrentSlide, slideLength}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const element1 = <FontAwesomeIcon icon={faPlay} color='white' size='xl' title='Play' className='group-hover:text-black cursor-pointer transition-colors duration-500'/>
    const element2 = <FontAwesomeIcon icon={faPause} color='white' size='xl' title='Pause' className='group-hover:text-black cursor-pointer transition-colors duration-500'/>
    let vid = document.querySelector('video')

    const controlVideo = () =>{
        isPlaying ? vid.pause() : vid.play()
        setIsPlaying(!isPlaying)
    }


    // issue with video playing when it switches slides
    // needs to be double clicked

    useEffect(() => {
        console.log(isPlaying);
    }, [isPlaying])


    const variants = {
        enter: {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
          },
          exit: {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
          }
        }

    const moveSlide = (n) => {
        // setCurrentSlide((prevCurrentSlide) => prevCurrentSlide += n)
        setCurrentSlide((prevCurrentSlide) => prevCurrentSlide + n)
        setDirection(n)
        // alert(direction + 'I am ' + n)
    }


  return (
    <AnimatePresence initial={false} custom={direction}>
    <motion.section
    id={id}
    key={currentSlide}
    custom={direction}
    variants={variants}
    initial="enter"
    animate="center"
    exit="exit"
    transition={{
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }} className='inter min-w-full px-10 lg:pl-28 items-center gap-5 lg:gap-10 h-fit grid grid-cols-1 lg:grid-cols-2'>
        <section className='py-28 space-y-7 col-span-1'>
            <div className='relative lg:text-left'>
                <h1 className='inter-400 sm:text-lg lg:text-xl'>{review}</h1>
                <img src={Quotes} alt="quote" className='absolute w-16 -top-6 -left-6'/>
            </div>
            <div className='flex flex-row items-center gap-4 relative'>
                <img src={img} alt="review" className='w-10 sm:w-14 aspect-square'/>
                <div className='text-left'>
                    <h1 className='inter-700 text-red1x  sm:text-lg'>{user}</h1>
                    <p className='inter-400 text-sm'>{job}</p>
                </div>
                {/* <button onClick={()=>currentSlide > 0 ? moveSlide(-1) : setCurrentSlide(slideLength-1)} className="hover:text-red1x inter inter-700 text-xl transition-colors duration-500 hover:bg-white hover:shadow-sm absolute top-[160%] lg:hidden left-0 -translate-x-fiftyPercent bg-white/80 h-12 w-12 flex items-center justify-center rounded-fiftyPercent"><FontAwesomeIcon icon={faAnglesLeft} className="text-red1x hover:scale-125 transition-transform ease-in-out duration-500" /></button>
                <button onClick={()=>currentSlide < (slideLength-1) ? moveSlide(+1) : setCurrentSlide(0)} className="hover:text-red1x inter inter-700 text-xl transition-colors duration-500 hover:bg-white hover:shadow-sm absolute top-[160%] lg:hidden right-0 translate-x-fiftyPercent bg-white/80 h-12 w-12 flex items-center justify-center rounded-fiftyPercent"><FontAwesomeIcon icon={faAnglesRight} className="text-red1x hover:scale-125 transition-transform ease-in-out duration-500" /></button> */}
                <button onClick={()=>moveSlide(-1)} className="hover:text-red1x inter inter-700 text-xl transition-colors duration-500 hover:bg-white hover:shadow-sm absolute top-[160%] lg:hidden left-0 -translate-x-fiftyPercent bg-white/80 h-12 w-12 flex items-center justify-center rounded-fiftyPercent"><FontAwesomeIcon icon={faAnglesLeft} className="text-red1x hover:scale-125 transition-transform ease-in-out duration-500" /></button>
                <button onClick={()=>moveSlide(1)} className="hover:text-red1x inter inter-700 text-xl transition-colors duration-500 hover:bg-white hover:shadow-sm absolute top-[160%] lg:hidden right-0 translate-x-fiftyPercent bg-white/80 h-12 w-12 flex items-center justify-center rounded-fiftyPercent"><FontAwesomeIcon icon={faAnglesRight} className="text-red1x hover:scale-125 transition-transform ease-in-out duration-500" /></button>
            </div>
        </section>
        <section className='col-span-1 h-full relative group'>
            <video src={video} className='min-h-full mx-auto'></video>
            <button type='button' className={`play-video group bg-red1x flex items-center justify-center h-16 w-16 rounded-fiftyPercent absolute top-fiftyPercent -translate-x-fiftyPercent -translate-y-fiftyPercent left-fiftyPercent z-20 transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`} onClick={controlVideo}>
                {isPlaying ? element2 : element1}
            </button>
        </section>
   </motion.section>
   </AnimatePresence>

  )
}

export default ReviewCards