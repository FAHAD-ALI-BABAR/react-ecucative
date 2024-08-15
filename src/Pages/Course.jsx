import React from 'react'
import Hero from '../Components/Hero/Hero'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Courses from '../Components/Courses/Courses'
import Footer from '../Components/Footer/Footer'

const Course = () => {
  return (
    <>
   <Header/>
   <Abouthero heading={"Home"} description={"Our Courses"}/>
   <Courses/>
   <Courses/>
   <Footer/>
   
    </>
  )
}

export default Course