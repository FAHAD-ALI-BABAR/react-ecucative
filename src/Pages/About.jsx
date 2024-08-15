import React from 'react'
import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import Abouthero from '../Components/Abouthero/Abouthero'
import Aboutjourney from '../Components/Aboutjourney/Aboutjourney'
import Counting from '../Components/Counting/Counting'
import Aboutsuccess from '../Components/Aboutsuccess/Aboutsuccess'
import Teacher from '../Components/Teacher/Teacher'
import Footer from '../Components/Footer/Footer'


const About = () => {
  return (
    <>
    <Header/>
    <Abouthero heading={"Home"} description={"About Us"}/>
    <Aboutjourney/>
    <Counting/>
    <Aboutsuccess/>
    <Teacher/>
    <Footer/>
    </>
  )
}

export default About