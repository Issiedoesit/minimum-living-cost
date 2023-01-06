import React from 'react'
import {useDocTitle} from "../customHooks/CustomHooks"
import Footer from '../Footer/Footer'
import Care from './Care/Care'
import Flex from './Flex/Flex'
import Hero from './Hero'
import List from './List/List'
import Review from './Review/Review'





const Home = () => {
    useDocTitle("Home");

  return (
    <div>
        <Hero />
        <Care />
        <List />
        <Flex />
        <Review />
        <Footer/>
    </div>
  )
}

export default Home