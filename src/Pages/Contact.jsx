import React from 'react'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Contactpage from '../Components/Contactpage/Contactpage'
import Maap from "../Components/Map/Map"
import Footer from '../Components/Footer/Footer'

const Contact = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"Contact Us"}/>
    <Contactpage/>
    
    <Footer/>
    </>
  )
}

export default Contact