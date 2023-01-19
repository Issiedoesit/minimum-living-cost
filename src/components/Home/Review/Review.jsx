import {React, useState, useEffect} from 'react'
import Dots from './Dots'
import ReviewCards from './ReviewCards'
import ReviewData from './ReviewData'





const Review = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideLength, setSlideLength] = useState(0)

    useEffect(() => {
        setSlideLength(ReviewData.length)
    }, [slideLength, currentSlide])

    const dotItems = []
    
    for (let i = 0; i < slideLength; i++) {
        dotItems.push(i)
    }

    let allVideos = []
    ReviewData.map((data)=>{
        allVideos.push(data.video)
    })

    const ReviewSlice = ReviewData.slice(currentSlide)

    
    const reviewDataSet = ReviewSlice.map((data)=>{
        return <ReviewCards 
        key={data.id} 
        id={data.id} 
        review={data.review} 
        img={data.img} 
        user={data.user} 
        allVideos={allVideos}
        job={data.job} 
        video={data.video} 
        poster={data.poster} 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
        slideLength={slideLength} />
    })
  
    const changeSlide = (index) => {
        setCurrentSlide(index)
    }



  return (
    <main className='relative w-full bg-red1x/10 pb-10 xl:pb-0'>
        <section className='flex flex-row w-full mx-auto xl:mx-0 overflow-x-hidden overflow-y-hidden flex-nowrap h-fit' id='slide_wrap'>
            {reviewDataSet}
        </section>
        <section className='px-10 lg:px-28 dot-wrap pt-10 lg:pt-0 lg:-translate-y-[300%] mx-auto lg:mx-0 w-fit h-fit flex flex-row items-center gap-4 lg:gap-3'>
            {dotItems.map((dotItem, index)=>{
                return <Dots dotItem={dotItem} key={'dotItem'+index} changeSlide={changeSlide} currentSlide={currentSlide}/>
            })}
        </section>
    </main>
  )
}

export default Review