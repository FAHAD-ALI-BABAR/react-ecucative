import React from 'react'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Details from '../Components/Details/Details'
import Footer from '../Components/Footer/Footer'

const Noticedetails = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"Scholarships"}/>
    <Details/>
    <Footer/>
    </>
  )
}

export default Noticedetails