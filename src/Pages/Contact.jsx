import React from 'react'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Contactpage from '../Components/Contactpage/Contactpage'

const Contact = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"Contact Us"}/>
    <Contactpage/>
    </>
  )
}

export default Contact