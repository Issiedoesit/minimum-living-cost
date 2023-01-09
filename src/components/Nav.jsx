import { faDoorClosed, faDoorOpen, faHamburger, faHouseChimney, faHouseChimneyUser, faHouseChimneyWindow, faHouseCircleCheck, faHouseCircleXmark, faHouseCrack, faHouseDamage, faHouseLaptop, faHouseLock, faHouseSignal, faHouseTsunami } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import $ from 'jquery'
import { React, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './../assets/images/logo/logo.png'





const Nav = () => {

  const NavRef = useRef()
  const closeDoor = useRef()
  const openDoor = useRef()
  const [isOpen, setIsOpen] = useState(false)
  
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
const removeHelper = (el, changes) => {
  changes.map((change) => {
    el.current.classList.remove(change)
  })
}

  const handleClick = () => {
    NavRef.current.classList.toggle('translate-x-[150%]')
    $('body').toggleClass('max-h-screen overflow-y-hidden')
    toggleHelper(openDoor, args)
    toggleHelper(closeDoor, args)
    setIsOpen((prevIsOpen)=>!prevIsOpen)
  }

  // let ho = ''
  // if(isOpen){
  //   ho = 'Open'
  // }else{
  //   ho = 'Closed'
  // }


  useEffect(() => {
    document.addEventListener('click', function(e){
      if(!(($(e.target).closest('#navItems').length > 0 ) || ($(e.target).closest('#menuBtn').length > 0))){
        if(!($('#navItems').hasClass('translate-x-[150%]'))){
          handleClick()
        }
      }
    })
  
    // return () => {
    //   window.removeEventListener('click')
    // }
  }, [isOpen])
  


  return (
    <nav className='sticky top-0 left-0 flex flex-row justify-between lg:grid grid-cols-12 pt-5 lg:items-center gap-20 border-b'>
        <div className='col-span-3 pb-5 max-w-28'>
            <NavLink exact to="/" title="Home">
                <img src={Logo} alt='logo' className=''/>
            </NavLink>
        </div>
        <div ref={NavRef} id="navItems" className='fixed h-screen text-center overflow-y-auto lg:overflow-y-hidden lg:text-left top-0 right-0 py-24 lg:py-0 px-20 lg:px-0 lg:static bg-black lg:bg-transparent z-20 flex flex-col translate-x-[150%] lg:translate-x-0 transition-transform duration-700 lg:flex-row lg:h-full lg:items-center gap-10 col-span-9'>
          <NavLink end={true} exact to="/" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-fit lg:h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400 hover:text-red1x transition-colors duration-500")}>Home</NavLink>
          <NavLink exact to="/landlord" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-fit lg:h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400 hover:text-red1x transition-colors duration-500")}>Landlord</NavLink>
          <NavLink exact to="/tenants" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-fit lg:h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400 hover:text-red1x transition-colors duration-500")}>Tenants</NavLink>
          <NavLink exact to="/contact" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-fit lg:h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400 hover:text-red1x transition-colors duration-500")}>Contact Us</NavLink>
        </div>
        <button type='button' id="menuBtn" title='Menu' onClick={handleClick} className='group px-5 flex items-center lg:hidden '>
          <p className="hidden">Menu</p>
          <FontAwesomeIcon ref={openDoor} icon={faDoorClosed} color='white' className='z-30 block group-hover:hidden'/>
          <FontAwesomeIcon ref={closeDoor} icon={faDoorOpen} color='white' className='z-30 hidden group-hover:block group-hover:text-red1x transition-colors duration-700 ease-in-out'/>
        </button>
    </nav>
  )
}

export default Nav