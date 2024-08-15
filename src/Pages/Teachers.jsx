import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Teacherpage from '../Components/Teacherpage/Teacherpage'

const Teachers = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"Our Teachers"}/>
    <Teacherpage/>
    <Footer/>
    </>
  )
}

export default Teachers