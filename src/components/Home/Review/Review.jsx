// import $ from 'jquery'
import {React, useState, useEffect} from 'react'
import Dots from './Dots'
import ReviewCards from './ReviewCards'
import ReviewData from './ReviewData'
// import { wrap } from '@popmotion/popcorn';





const Review = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    // const [direction, setDirection] = useState(1)
    // const [slideIndex, setSlideIndex] = useState(0)
    const [slideLength, setSlideLength] = useState(0)

    useEffect(() => {
        setSlideLength(ReviewData.length)
        // console.log(slideLength);
        // console.log(currentSlide);
    }, [slideLength, currentSlide])

    const dotItems = []
    
    for (let i = 0; i < slideLength; i++) {
        dotItems.push(i)
    }

    // $('.dot-wrap').html(dot)
    
    // const slideIndex = wrap(0, slideLength, currentSlide) 1



    const ReviewSlice = ReviewData.slice(currentSlide)
    // const ReviewSlice = ReviewData.slice(slideIndex) 1
    // alert(currentSlide)




    const reviewDataSet = ReviewSlice.map((data)=>{
        return <ReviewCards 
        key={data.id} 
        id={data.id} 
        review={data.review} 
        img={data.img} 
        user={data.user} 
        job={data.job} 
        video={data.video} 
        poster={data.poster} 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
        slideLength={slideLength} />
    })
    // for (let i = 0; i < slideLength; i++) {
    //     document.getElementById('slide_wrap').style.transform = translate((-100 * i)%)
    // }
    // const reviewDataSet = ReviewData.map((data)=>{
    //     return <ReviewCards key={data.id} review={data.review} img={data.img} user={data.user} job={data.job} video={data.video}  />
    // })
  
    const changeSlide = (index) => {
        // alert('hi')

        // alert(index)
        setCurrentSlide(index)
        // setCurrentSlide((prevCurrentSlide) => prevCurrentSlide + n)
        // setDirection(index)
        // alert(direction)
    }



  return (
    <main className='relative w-full bg-red1x/10 pb-10 xl:pb-0'>
       {/* {slideIndex} */}
        <section className='flex flex-row w-full mx-auto xl:mx-0 overflow-x-hidden overflow-y-hidden flex-nowrap h-fit' id='slide_wrap'>
            {reviewDataSet}
        </section>
        <section className='px-10 lg:px-28 dot-wrap pt-10 lg:pt-0 lg:-translate-y-[300%] mx-auto lg:mx-0 w-fit h-fit flex flex-row items-center gap-4 lg:gap-3'>
            {/* <button onClick={()=>currentSlide > 0 ? moveSlide(-1) : setCurrentSlide(slideLength-1)} className="hover:text-red1x inter inter-700 text-xl transition-colors duration-500 absolute"><FontAwesomeIcon icon={faAnglesLeft} className="text-red1x hover:scale-125 transition-transform ease-in-out duration-500" /></button> */}
            {/* {currentSlide} */}
            {dotItems.map((dotItem)=>{
                return <Dots dotItem={dotItem} changeSlide={changeSlide} currentSlide={currentSlide}/>
            })}
            {/* <button onClick={()=>currentSlide < (slideLength-1) ? moveSlide(+1) : setCurrentSlide(0)} className="hover:text-red1x inter inter-700 text-xl transition-colors duration-500"><FontAwesomeIcon icon={faAnglesRight} className="text-red1x hover:scale-125 transition-transform ease-in-out duration-500" /></button> */}
        </section>
    </main>
  )
}

export default Review