import React from 'react'
import Header from '../Components/Header/Header'
import Abouthero from '../Components/Abouthero/Abouthero'
import Blogsdetail from '../Components/Blogsdetail/Blogsdetail'
import Footer from '../Components/Footer/Footer'
import News from '../Components/News/News'

const Blogdet = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Our Blog"} description={"Blog Details"}/>
    <Blogsdetail/>
    <News/>
    <Footer/>

    </>
  )
}

export default Blogdet