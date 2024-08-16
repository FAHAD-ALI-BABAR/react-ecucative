import React from 'react'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Evdet from '../Components/Evdet/Evdet'
import Footer from '../Components/Footer/Footer'
import Eventss from '../Components/Eventss/Eventss'

const Eventsdet = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Upcoming Events"} description={"Events Details"}/>
    <Evdet/>
    <Eventss/>
    <Footer/>

    </>
  )
}

export default Eventsdet