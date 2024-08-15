import React from 'react'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import News from '../Components/News/News'
import Footer from '../Components/Footer/Footer'

const Blog = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"Our blogs"}/>
    <News/>
    <Footer/>
    </>
  )
}

export default Blog