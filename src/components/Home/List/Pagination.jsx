import {React} from 'react'

function Pagination({itemLength, rows, currentPage, paginate}){
    const pageNumbers = []
    for (let i = 1; i < Math.ceil(itemLength/rows)+1; i++) {
        pageNumbers.push(i)
    }

    
    // if(currentPage === 1){
    //     document.querySelectorAll('.page-nav')[0].classList.add('active-nav')
    // }
    
    
    const NextPage = () =>{
        if(currentPage < Math.ceil(itemLength/rows)){
            paginate(currentPage+1)
        }

    }
    // useEffect(()=>{
    //     var btn = document.getElementById('btn1')
    //      btn.addEventListener('click', function(){
    //          alert(btn.innerHTML)
    //      })
    //      return btn.removeEventListener('click')
    // }, [])
  return (
    <div className='w-full flex items-center mont-s mont-s-700 justify-center'>
        <div className='flex flex-row rounded-eight divide-x divide-grey3x h-12 sm:h-16 items-center w-fit border-2 border-grey3x'>
            <div className='h-full flex items-center rounded-l-eight'>
                <button className='px-6 rounded-l-eight text-lightGrey4x hover:text-red1x/80 ease-in-out transition-colors duration-500' type='button' id='first' onClick={() => paginate(1)}>First</button>
            </div>
            <div id='page_wrap' className='flex flex-row h-full divide-x divide-grey3x'>
                {pageNumbers.map((page)=>{
                    return <button type='button' id={`btn${page}`} onClick={()=> paginate(page)} className={`page-nav ${page === currentPage ? "active-page text-red1x page-nav flex items-center bg-white px-4" : "text-red1x page-nav flex items-center bg-white px-4 hover:bg-red1x/80 ease-in-out hover:text-white transition-colors duration-500"}  `}>{page}</button>
                })}
            </div>
            <div className='h-full flex rounded-r-eight'>
                <button className='px-6 text-red1x bg-white rounded-r-eight hover:bg-red1x/80 ease-in-out hover:text-white transition-colors duration-500' type='button' id='next' onClick={NextPage}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Pagination