import {React, useState, useEffect} from 'react'
import ListCards from './ListCards'
import ListData from './ListData'
import ListSkeleton from './ListSkeleton'
import Pagination from './Pagination'
// import { FaBeer } from "react-icons/fa";


const List = () => {
    const [listLength, setListLength] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [rows, setRows] = useState(6)

   useEffect(() => {
    setListLength(ListData.length)
   }, [listLength])
   const start = (currentPage - 1) * rows 
   const end = start + rows
   const display = ListData.slice(start, end)
   const listDataSet = display.map((data)=>{
        return <ListCards key={data.id} id={data.id} img={data.img} address={data.address} roomType={data.roomType} price={data.price} NoRooms={data.NoRooms} NoBaths={data.NoBaths} size={data.size} />
    })    
    
    const paginate = (page) =>{
        setLoading(true)
        setTimeout(() => {
            setCurrentPage(page)
            setLoading(false)
        }, 1000);
        let pageBtns = document.querySelectorAll('.page-nav')
        for (let i = 0; i < pageBtns.length; i++) {
            pageBtns[i].classList.remove('active-page')
            }
            pageBtns[page-1].classList.add('active-page')
    }

    let templates = []
    for (let i = 0; i < rows; i++) {
        templates.push(i)
    }

    const showAll = () => {
        setCurrentPage(1)
        setRows(listLength)
    }

    

  return (
    <section className='bg-grey1x pt-14 pb-18 px-5 sm:px-10 lg:px-28'>
        <div className='flex flex-col gap-8 sm:gap-0 sm:flex-row justify-between sm:items-center'>
            <h1 className='inter inter-800 text-2xl sm:text-3xl lg:text-4xl capitalize'><span className='border-b-4 border-red1x'>list  </span>of properties</h1>
            <button onClick={()=>{showAll()}} className='man-r man-r-500 w-fit self-end hover:scale-90 hover:ring hover:ring-red1x hover:ring-offset-2 hover:bg-white hover:text-red1x transition-all ease-in-out duration-500 text-sm sm:text-base bg-red1x py-3 px-4 sm:py-6 sm:px-8 text-white'>View All Properties</button>
        </div>
        <section className='pt-14 pb-18 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
            {loading ? templates.map((template)=>{return <ListSkeleton key={template}/>}) : listDataSet}
        </section>
        <section>
            <Pagination itemLength={listLength} rows={rows} currentPage={currentPage} paginate={paginate}/>
        </section>
    </section>
  )
}

export default List