import React from 'react'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Teacherpage from '../Components/Teacherpage/Teacherpage'

import Filters from '../Components/Filters/Filters'

const Teachers = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"Our Teachers"}/>
    <Filters/>
    <Footer/>
    </>
  )
}

export default Teachers