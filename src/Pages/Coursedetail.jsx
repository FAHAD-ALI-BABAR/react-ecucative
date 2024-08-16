import React from 'react'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Coursedet from '../Components/Coursedet/Coursedet'
import Footer from '../Components/Footer/Footer'
import Courses from '../Components/Courses/Courses'

const Coursedetail = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"Course Details"}/>
    <Coursedet/>
    <Courses/>
    <Footer/>
    </>
  )
}

export default Coursedetail