import React from 'react'
import SanfranAreas from './SanFranAreas'



const mapCities = () => {


  return (
    <select>
        
        {SanfranAreas.map((areas)=>{
            return <option value={areas.coordinates}>{areas.name}</option>
        })}

    </select>
  )
}

export default mapCities