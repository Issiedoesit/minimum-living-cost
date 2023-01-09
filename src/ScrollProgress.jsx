import { motion, useScroll  } from 'framer-motion'
import React from 'react'


const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
  return (
    <motion.div style={{ scaleX: scrollYProgress }} className="bg-red1x h-2 fixed top-0 left-0 right-0 z-250 origin-left"></motion.div>
  )
}

export default ScrollProgress