import {React, useEffect, useState} from 'react'
import useThemeStore from '../../../customHooks/useThemeStore'


function Pagination({itemLength, rows, currentPage, paginate}){
    const theme = useThemeStore(state => state.theme)
    const pageNumbers = []
    for (let i = 1; i < Math.ceil(itemLength/rows)+1; i++) {
        pageNumbers.push(i)
    }

    let totalPages = Math.ceil(itemLength/rows)

    // useEffect(() => {
    //     if(page === currentPage){
    //         setThemeColors('text-red1x page-nav flex items-center bg-white')
    //     }
    // }, [theme, page, currentPage])
    
    
    // if(currentPage === 1){
    //     document.querySelectorAll('.page-nav')[0].classList.add('active-nav')
    // }
    
    
    const NextPage = () =>{
        if(currentPage < Math.ceil(itemLength/rows)){
            paginate(currentPage+1)
        }
    }

  return (
    <div className='w-full flex items-center mont-s mont-s-700 justify-center'>
        <div className='flex flex-row rounded-eight divide-x divide-grey3x h-12 sm:h-16 items-center w-fit border-2 border-grey3x'>
            <div className='h-full flex items-center rounded-l-eight'>
                <button title={`${currentPage == 1 ? 'You\'re on the First Page' : 'Go to Page 1'}`} className={`px-6 rounded-l-eight text-lightGrey4x ease-in-out transition-colors duration-500 ${currentPage == 1 ? 'cursor-not-allowed' : 'cursor-pointer hover:text-red1x/80'}`} type='button' id='first' onClick={() => currentPage == 1 ? null : paginate(1)}>First</button>
            </div>
            <div id='page_wrap' className='flex flex-row h-full divide-x divide-grey3x'>
                {pageNumbers.map((page)=>{
                    return <button type='button' title={`Page ${page}`} id={`btn`+page} key={`btn`+page} onClick={()=> paginate(page)} className={`page-nav ${theme === 'light' ? 'bg-white ' : 'bg-black/40'} ${page === currentPage ? "active-page text-red1x page-nav flex items-center bg-white px-4" : "text-red1x page-nav flex items-center bg-white px-4 hover:bg-red1x/80 ease-in-out hover:text-white transition-colors duration-500"}  `}>{page}</button>
                })}
            </div>
            <div className='h-full flex rounded-r-eight'>
                <button title={`${currentPage == totalPages ? 'You\'re on the Last Page' : `Go to Page ${currentPage+1}`}`} className={`px-6 text-red1x bg-white rounded-r-eight ease-in-out transition-colors duration-500 ${theme === 'light' ? 'bg-white ' : 'bg-black/60'} ${currentPage == totalPages ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-red1x/80 hover:text-white'}`} type='button' id='next' onClick={currentPage == totalPages ? null : NextPage}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Pagination