import React from 'react'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Courses from '../Components/Courses/Courses'
import Footer from '../Components/Footer/Footer'
import Single from '../Components/Single/Single'

const Teachersingle = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"John Doe"}/>
    <Single/>
    <Footer/>
    
    </>
  )
}

export default Teachersingle