import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Courses from '../Components/Courses/Courses'
import Training from '../Components/Training/Training'
import Eventss from '../Components/Eventss/Eventss'
import Teacher from '../Components/Teacher/Teacher'
import News from '../Components/News/News'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
     <Header/>
     <Hero/>
     <Courses/>
     <Training/>
     <Eventss/>
     <Teacher/>
     <News/>
     <Footer/>
    </>
    
  )
}

export default Home