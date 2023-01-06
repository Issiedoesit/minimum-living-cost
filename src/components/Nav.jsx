import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './../assets/images/logo/logo.png'



const Nav = () => {
  return (
    <nav className='grid grid-cols-12 pt-5 items-center gap-20 border-b'>
        <div className='col-span-3 pb-5'>
            <NavLink exact to="/">
                <img src={Logo} alt='logo' className=''/>
            </NavLink>
        </div>
        <div className='hidden lg:flex flex-row h-full items-center gap-10 col-span-9'>
        <NavLink end={true} exact to="/" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400")}>Home</NavLink>
        <NavLink exact to="/landloard" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400")}>Landloard</NavLink>
        <NavLink exact to="/tenants" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400")}>Tenants</NavLink>
        <NavLink exact to="/contact" className={({isActive})=>(isActive ? "text-white border-b-2 px-3 h-full flex items-center dm dm-500 text-lg" : "text-white dm dm-400")}>Contact Us</NavLink>
        </div>
    </nav>
  )
}

export default Nav