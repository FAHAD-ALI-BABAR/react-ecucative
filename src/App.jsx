import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
      
    </>
  )
}

export default App
