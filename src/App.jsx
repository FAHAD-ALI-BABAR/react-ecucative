import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Courses from './Components/Courses/Courses';
import Training from './Components/Training/Training';
import Eventss from './Components/Eventss/Eventss';
import Teacher from './Components/Teacher/Teacher';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Courses/>
    <Training/>
    <Eventss/>
    <Teacher/>
      
    </>
  )
}

export default App
