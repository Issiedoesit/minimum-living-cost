import React from 'react'
import {useDocTitle} from "../customHooks/CustomHooks"
import Nav from '../Nav';


const Contact = () => {
  useDocTitle("Contact");

  return (
    <div className='bg-teal-700'><Nav /></div>
  )
}

export default Contact