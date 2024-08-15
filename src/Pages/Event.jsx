import React from 'react'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Eventss from '../Components/Eventss/Eventss'
import Footer from '../Components/Footer/Footer'

const Event = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"Upcoming Events"}/>
    <Eventss/>
    <Footer/>
    </>
  )
}

export default Event