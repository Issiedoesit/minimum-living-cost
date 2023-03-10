import React, {useEffect, useRef, useState } from 'react'
import { faBridge, faCircleChevronLeft, faCircleDot, faCircleRadiation, faCloudSun, faCloudSunRain, faDoorClosed, faDoorOpen, faMountainSun } from '@fortawesome/free-solid-svg-icons'
import { faSun, faMoon} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import useNavStore from '../customHooks/useNavStore'
import Logo from './../assets/images/logo/logo.png'
import useThemeStore from '../customHooks/useThemeStore'





const Nav = () => {

  const NavRef = useRef()
  const closeDoor = useRef()
  const openDoor = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const setNavOpen = useNavStore(state=> state.changeIsNavOpen)
 const theme =  useThemeStore(state=>state.theme)
 const changeTheme =  useThemeStore(state=>state.changeTheme)
  
  let args = [
    'block',
    'hidden',
    'group-hover:block',
    'group-hover:hidden',
    'group-hover:text-red1x',
]

const toggleHelper = (el, changes) => {
  changes.map((change) => {
    el.current.classList.toggle(change)
  })
}
// const removeHelper = (el, changes) => {
//   changes.map((change) => {
//     el.current.classList.remove(change)
//   })
// }

  const handleClick = () => {
    NavRef.current.classList.toggle('translate-x-[150%]')
    $('body').toggleClass('max-h-screen overflow-y-hidden')
    toggleHelper(openDoor, args)
    toggleHelper(closeDoor, args)
    setIsOpen((prevIsOpen)=>!prevIsOpen)
    setNavOpen()
  }


  const handleOutsideClick = (e) =>{
    if(!(($(e.target).closest('#navItems').length > 0 ) || ($(e.target).closest('#menuBtn').length > 0))){
      if(!($('#navItems').hasClass('translate-x-[150%]'))){
        handleClick()
      }
    }
  }


  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
  
    return () => {
      document.removeEventListener('click', handleOutsideClick)

    }
  }, [])
  


  return (
    <nav className='sticky top-0 left-0 z-70 flex flex-row justify-between lg:grid grid-cols-12 pt-5 lg:items-center gap-20 border-b'>
        <div className='col-span-3 pb-5 max-w-28'>
            <NavLink exact="true" to="/" title="Home">
                <img src={Logo} alt='logo' className=''/>
            </NavLink>
        </div>
        <div ref={NavRef} id="navItems" className='fixed h-screen text-center overflow-y-auto lg:overflow-y-hidden lg:text-left top-0 right-0 py-24 lg:py-0 px-20 lg:px-0 lg:static bg-black lg:bg-transparent z-20 flex flex-col translate-x-[150%] lg:translate-x-0 transition-transform duration-700 lg:flex-row lg:h-full lg:items-center justify-between col-span-9'>
          <div className='flex flex-col lg:flex-row items-center gap-10'>
            <NavLink end={true} exact="true" to="/" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-fit lg:h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400 hover:text-red1x transition-colors duration-500")}>Home</NavLink>
            <NavLink exact="true" to="/landlord" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-fit lg:h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400 hover:text-red1x transition-colors duration-500")}>Landlord</NavLink>
            <NavLink exact="true" to="/tenants" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-fit lg:h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400 hover:text-red1x transition-colors duration-500")}>Tenants</NavLink>
            <NavLink exact="true" to="/contact" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-fit lg:h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400 hover:text-red1x transition-colors duration-500")}>Contact Us</NavLink>
          </div>
          <div className={`flex items-center rounded-ten w-fit h-fit border ${theme === 'light' ? 'border-white' : 'border-slate-600'}`}>
          <button onClick={()=>{changeTheme('light')}} className={`py-2 px-4 rounded-l-ten ${theme === 'light' ? 'bg-white/80' : ''}`}>
            <FontAwesomeIcon ref={openDoor} icon={faSun} color={`${theme === 'light'? '#F4511E' : 'white'}`} className='z-30 block group-hover:hidden'/>
          </button>
          <button onClick={()=>{changeTheme('dark')}} className={`py-2 px-4 rounded-r-ten ${theme === 'light' ? '' : 'bg-slate-600'}`}>
            <FontAwesomeIcon ref={openDoor} icon={faMoon} color={`${theme === 'light'? 'white' : '#F4511E'}`} className='z-30 block group-hover:hidden'/>
          </button>
          </div>  
        </div>
        <button type='button' id="menuBtn" title='Menu' onClick={handleClick} className={`group ${isOpen && 'fixed top-10 right-5 z-70'} px-5 flex items-center lg:hidden`}>
          <p className="hidden">Menu</p>
          <FontAwesomeIcon ref={openDoor} icon={faDoorClosed} color='white' className='z-30 block group-hover:hidden'/>
          <FontAwesomeIcon ref={closeDoor} icon={faDoorOpen} color='white' className='z-30 hidden group-hover:block group-hover:text-red1x transition-colors duration-700 ease-in-out'/>
        </button>
    </nav>
  )
}

export default Nav
