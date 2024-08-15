import React from 'react'
import baner from "../../Images/banner.jpg"
import "./Abouthero.css"
import { IoChevronForwardOutline } from "react-icons/io5";
const Abouthero = (props) => {
  return (
    <>
   <section className="page-title-section overlay" data-background={baner} style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backgroundBlendMode: 'overlay' }}>
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <ul className="list-inline  mb-2" style={{ position: 'relative', zIndex: 2 }}>
          <li className="list-inline-item">
            <a className="h2 text-primary font-secondary"  style={{ color: '#fff',fontWeight:900 }}>
              {props.heading}
            </a>
          </li><IoChevronForwardOutline style={{fontSize:30, color:"white",marginTop:0}} />
          <li className="list-inline-item text-white h3 font-secondary nasted" style={{ color: '#fff' }}>
            {props.description}
          </li>
        </ul>
        <p className="text-lighten mb-0" style={{ color: '#fff', position: 'relative', zIndex: 2 }}>
          Our courses offer a good compromise between the continuous assessment favoured by some universities and the emphasis placed on final exams by others.
        </p>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default Abouthero