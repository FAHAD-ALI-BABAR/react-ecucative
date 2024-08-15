import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Abouthero from '../Components/Abouthero/Abouthero'
import Accordian from '../Components/Accordian/Accordian'
import Footer from '../Components/Footer/Footer'

const Notice = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"Notice"}/>
    <Accordian/>
    <Footer/>
    </>
  )
}

export default Notice