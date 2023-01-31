import {React, useState, useEffect} from 'react'
import Dots from './Dots'
import ReviewCards from './ReviewCards'
import ReviewData from './ReviewData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight, faAnglesLeft, faPlay, faPause } from '@fortawesome/free-solid-svg-icons'

import YouTube from "react-youtube";
import useThemeStore from '../../../customHooks/useThemeStore'



const Review = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [slideLength, setSlideLength] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const element1 = <FontAwesomeIcon icon={faPlay} color='white' size='xl' title='Play' className='group-hover:text-black cursor-pointer transition-colors duration-500'/>
    const element2 = <FontAwesomeIcon icon={faPause} color='white' size='xl' title='Pause' className='group-hover:text-black cursor-pointer transition-colors duration-500'/>
    const [player, setPlayer] = useState(null)
    const theme = useThemeStore(state=>state.theme)
    
    const onReady = (event) => {
        setPlayer(event.target);
    };

    const options = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 0,
        controls: 1,
        playbar: 0
      },
    };

    const controlVideo = () =>{
        if (isPlaying) {
            player.pauseVideo();
          } else {
            player.playVideo();
          }
          setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        console.log(isPlaying);
    }, [isPlaying])

    useEffect(() => {
        setSlideLength(ReviewData.length)
    }, [slideLength, currentSlide])

    const dotItems = []
    
    for (let i = 0; i < slideLength; i++) {
        dotItems.push(i)
    }

   

    const ReviewSlice = ReviewData.slice(currentSlide)

    
    const reviewDataSet = ReviewSlice.map((data)=>{
        return <ReviewCards 
        key={data.id} 
        id={data.id} 
        review={data.review} 
        img={data.img} 
        user={data.user} 
        job={data.job} 
        poster={data.poster} 
        currentSlide={currentSlide} 
        setCurrentSlide={setCurrentSlide} 
        slideLength={slideLength} />
    })
  
    const changeSlide = (index) => {
        setCurrentSlide(index)
    }



  return (
    <main className={`relative w-full ${theme === 'light' ? 'bg-red1x/10 text-black' : 'bg-red1x/70 text-white'} pb-10 xl:pb-0`}>
      <section className="grid grid-col-1 lg:grid-cols-2 auto-rows-fr auto-cols-fr">
            <section className='flex flex-row w-full mx-auto xl:mx-0 overflow-x-hidden overflow-y-hidden flex-nowrap h-fit' id='slide_wrap'>
                    {reviewDataSet}
            </section>
            <section className='col-span-1 px-4 min-h-full pt-3 relative group'>
                        <YouTube
                                id='youtube-video'
                                className='min-h-full h-full'
                                videoId="pkwTpdpB8do"
                                opts={options}
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                                onReady={onReady}
                            />
                        <button type='button' className={`play-video group bg-red1x flex items-center justify-center h-16 w-16 rounded-fiftyPercent absolute top-fiftyPercent -translate-x-fiftyPercent -translate-y-fiftyPercent left-fiftyPercent z-20 transition-opacity duration-500 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`} onClick={controlVideo}>
                            {isPlaying ? element2 : element1}
                        </button>
            </section>
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