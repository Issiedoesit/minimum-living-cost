// import $ from 'jquery'
import {React, useState, useEffect} from 'react'
import Dots from './Dots'
import ReviewCards from './ReviewCards'
import ReviewData from './ReviewData'



const Review = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideLength, setSlideLength] = useState(0)

    useEffect(() => {
        setSlideLength(ReviewData.length)
        console.log(slideLength);
        console.log(currentSlide);
    }, [slideLength])

    const dotItems = []
    
    for (let i = 0; i < slideLength; i++) {
        dotItems.push(i)
    }

    // $('.dot-wrap').html(dot)

    const ReviewSlice = ReviewData.slice(currentSlide)


    const reviewDataSet = ReviewSlice.map((data)=>{
        return <ReviewCards key={data.id} review={data.review} img={data.img} user={data.user} job={data.job} video={data.video}  />
    })
    // for (let i = 0; i < slideLength; i++) {
    //     document.getElementById('slide_wrap').style.transform = translate((-100 * i)%)
    // }
    // const reviewDataSet = ReviewData.map((data)=>{
    //     return <ReviewCards key={data.id} review={data.review} img={data.img} user={data.user} job={data.job} video={data.video}  />
    // })
  
    const changeSlide = (index) => {
        setCurrentSlide(index)
    }

    const moveSlide = (n) => {
        setCurrentSlide((prevCurrentSlide) => prevCurrentSlide += n)
    }


  return (
    <main className='w-full bg-red1x/10 pb-10 sm:py-0'>
        <section className='flex flex-row overflow-x-hidden w-full flex-nowrap h-fit' id='slide_wrap'>
            {reviewDataSet}
        </section>
        <section className='px-10 lg:px-28 dot-wrap sm:-translate-y-[300%] mx-auto sm:mx-0  w-fit h-fit flex flex-row items-center gap-4 lg:gap-3'>
            <button onClick={()=>currentSlide > 0 ? moveSlide(-1) : setCurrentSlide(slideLength-1)} className="hover:text-red1x inter inter-700 text-xl transition-colors duration-500">-</button>
            {currentSlide}
            {dotItems.map((dotItem)=>{
                return <Dots dotItem={dotItem} changeSlide={changeSlide} currentSlide={currentSlide} />
            })}
            <button onClick={()=>currentSlide < (slideLength-1) ? moveSlide(+1) : setCurrentSlide(0)} className="hover:text-red1x inter inter-700 text-xl transition-colors duration-500">+</button>
        </section>
    </main>
  )
}

export default Review