import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Courses from './Components/Courses/Courses';
import Training from './Components/Training/Training';
import Eventss from './Components/Eventss/Eventss';
import Teacher from './Components/Teacher/Teacher';
import News from './Components/News/News';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import { Route, Router, Routes } from 'react-router-dom';
import About from './Pages/About';
import Course from './Pages/Course';
import Event from './Pages/Event';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Notice from './Pages/Notice';
import Research from './Pages/Research';
import Scholarship from './Pages/Scholarship';
import Teachers from './Pages/Teachers';
import Teachersingle from './Pages/Teachersingle';
import Noticedetails from './Pages/Noticedetails';
import Coursedetail from './Pages/Coursedetail';
import Eventsdet from './Pages/Eventsdet';
import Blogdet from './Pages/Blogdet';
import { ScrollRestoration } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path="course" element={<Course/>}/>
          <Route path='events' element={<Event/>}/>
          <Route path='blogs' element={<Blog/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='notice' element={<Notice/>}/>
          <Route path='research' element={<Research/>}/>
          <Route path='scholarship' element={<Scholarship/>}/>
          <Route path='teachers' element={<Teachers/>}/>
          <Route path='teachersingle' element={<Teachersingle/>}/>
          <Route path='noticedetails' element={<Noticedetails/>}/>
          <Route path='coursedetails' element={<Coursedetail/>}/>
          <Route path='eventdetails' element={<Eventsdet/>}/>
          <Route path='blogdetails' element={<Blogdet/>}/>
        </Routes>
        
      
      
    </>
  )
}

export default App
