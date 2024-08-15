import React from 'react'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Scholarshipsec from '../Components/Scholarshipsec/Scholarshipsec'
import Footer from '../Components/Footer/Footer'

const Scholarship = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"Scholarships"}/>
    <Scholarshipsec/>
    <Footer/>
    </>
  )
}

export default Scholarship