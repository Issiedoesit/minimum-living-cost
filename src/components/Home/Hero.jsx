import React, { useEffect, useState } from 'react'
import Nav from '../Nav'
import { Icon } from 'leaflet'
import { MapContainer,  TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "./../../../node_modules/leaflet/dist/leaflet.css";
import SanfranAreas from '../../data/Map/SanFranAreas';
import $ from 'jquery';
import { motion } from 'framer-motion';
import useThemeStore from '../../customHooks/useThemeStore';




const RecenterAutomatically = ({position}) => {
    const map = useMap();
    useEffect(() => {
    map.setView(position, 13);
    map.flyTo(position, 13)
    }, [position]);
    return null;
}



const Hero = () => {
    const [position, setPosition] = useState([37.776667, -122.277778])
    const [nValue, setNValue] = useState('37.776667, -122.277778')
    const [area, setArea] = useState('Alameda (Island)')
    const theme =  useThemeStore(state=>state.theme)



    const handleSelect = () =>{
        let newValue = nValue.split(',')
        setPosition(newValue)

       let newArea =  $("#neighborhood option:selected").text();
        setArea(newArea)
    }


    const text = {
        slideDown: { 
            opacity: 0,
            y:150,
            scale:0,
            },
        slideUp: { 
            opacity: 1, 
            y:0,
            scale:1,
            transition: {
            type: "spring",
            bounce: 0.4,
            duration:5,
            }
            },
    }
    const up = {
        slideDown: { 
            opacity: 0,
            y:100,
            },
        slideUp: { 
            opacity: 1, 
            y:0,
            transition: {
            type: "spring",
            bounce: 0.4,
            duration:5,
            }
            },
    }

    

  return (
    <section className={`hero relative ${theme === 'light' ? 'text-white' : 'text-white'}`}>
        <div className={`z-10 absolute h-full w-full  ${theme === 'light' ? 'bg-black/30' : 'bg-black/70'}`}></div>
        <div className='z-20 relative top-0 left-0 px-5 sm:px-10 lg:px-28'>
            <Nav />
        </div>
        <section className='px-5 sm:px-10 lg:px-28 pt-20 pb-40 z-10 relative flex flex-col lg:flex-row gap-10 lg:justify-between lg:items-center h-full'>
            <div className='sm:w-eightyPercent mx-auto lg:mx-0 lg:w-fortyPercent lg:text-left'>
                <motion.h1 variants={text} initial="slideDown" whileInView="slideUp" viewport={{once:true, amount:0}} className={`inter inter-700 ${''} text-2xl sm:text-3xl lg:text-5xl`}>The most affordable place to stay in the san franciso bay area</motion.h1>
            </div>
            <section className='w-full lg:w-sixtyPercent flex lg:justify-end mx-auto lg:mx-0'>
                <div className='w-full poppins poppins-500 text-sm grid grid-rows-7 gap-8 grid-cols-1 place-items-center'>
                    <motion.div variants={up} initial="slideDown" whileInView="slideUp" viewport={{once:true, amount:0}} id="map" className="rounded-ten">
                        <MapContainer center={position} zoom={18} scrollWheelZoom={false} icon={new Icon({iconUrl: './assets/images/icons/leaflet/images/marker-icon.png', iconSize:[20, 36], iconAnchor:[20, 36]})} className="xxs:w-60 xxs:h-60 xs:w-72 xs:h-72 w-80 h-80 sm:h-96 sm:w-96 max-w-sm rounded-ten">
                            <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                                <Popup>
                                    Get property in the {area} area. <br /> Easily with <span className='up-red1x'>MLC</span>.
                                </Popup>
                            </Marker>
                            <RecenterAutomatically position={position}/>                    
                        </MapContainer>
                    </motion.div>
                    <motion.div variants={up} initial="slideDown" whileInView="slideUp" viewport={{once:true, amount:0}} className={`flex flex-col sm:flex-row sm:justify-center gap-2 sm:gap-0 px-2 xxs:w-60 xs:w-72 w-80 max-w-sm sm:w-96 sm:px-5 py-4 col-span-1 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} border border-black/10 rounded-ten`}>
                        <select name="types" id="types" className={`cursor-pointer px-5 py-4 h-14 border ${theme === 'light' ? 'bg-lightGrey2x border-lightGrey1x ' : 'bg-slate-700 border-slate-400'} rounded-ten sm:rounded-l-ten sm:rounded-r-none`}>
                            <option value="All Type" disabled selected>All Type</option>
                        </select>
                        <select id='neighborhood' onChange={(e)=>setNValue(e.target.value)} name="neighborhood" className={`cursor-pointer px-5 h-14 py-4 rounded-ten sm:rounded-none sm:w-44 border ${theme === 'light' ? 'bg-lightGrey2x border-lightGrey1x ' : 'bg-slate-700 border-slate-400'}`}>
                            {/* <option value="Neighborhood" disabled selected>Neighborhood</option> */}
                            {SanfranAreas.map((areas)=>{
                               return <option value={areas.coordinates}>{areas.name}</option>
                            })}
                        </select>
                        <button onClick={handleSelect} type='button' className='bg-blue1x rounded-ten sm:rounded-l-none sm:rounded-r-ten py-2 sm:py-0 px-5 flex items-center justify-center'>
                            <p className="hidden">Search</p>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9901 12.3188L18.2939 16.6226C18.4452 16.7739 18.5301 16.9792 18.53 17.1932C18.53 17.4072 18.4449 17.6124 18.2935 17.7637C18.1421 17.915 17.9368 17.9999 17.7228 17.9998C17.5088 17.9998 17.3036 17.9147 17.1523 17.7633L12.8485 13.4595C11.562 14.456 9.9441 14.9249 8.32406 14.7709C6.70401 14.6169 5.20349 13.8515 4.12774 12.6304C3.05199 11.4094 2.48182 9.82433 2.53323 8.19779C2.58463 6.57125 3.25375 5.02539 4.40446 3.87468C5.55517 2.72397 7.10104 2.05485 8.72757 2.00344C10.3541 1.95203 11.9391 2.5222 13.1602 3.59795C14.3813 4.6737 15.1467 6.17423 15.3007 7.79427C15.4547 9.41432 14.9858 11.0322 13.9893 12.3188H13.9901ZM8.93033 13.1995C10.2033 13.1995 11.4241 12.6938 12.3243 11.7937C13.2244 10.8936 13.7301 9.67272 13.7301 8.39974C13.7301 7.12676 13.2244 5.90592 12.3243 5.00579C11.4241 4.10565 10.2033 3.59997 8.93033 3.59997C7.65735 3.59997 6.43651 4.10565 5.53637 5.00579C4.63624 5.90592 4.13055 7.12676 4.13055 8.39974C4.13055 9.67272 4.63624 10.8936 5.53637 11.7937C6.43651 12.6938 7.65735 13.1995 8.93033 13.1995Z" fill="white"/>
                            </svg>
                        </button>
                    </motion.div>
                </div>
            </section>
        </section>
    </section>
  )
}

export default Hero;
