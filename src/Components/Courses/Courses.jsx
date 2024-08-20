import React from 'react'
import course1 from "../../Images/course1.jpg"
import course2 from "../../Images/Course2.jpg"
import course3 from "../../Images/Course3.jpg"
import course4 from "../../Images/Course4.jpg"
import course5 from "../../Images/Course5.jpg"
import course6 from "../../Images/Course6.jpg"
import { HashLink as NavLink } from 'react-router-hash-link';

const Courses = () => {
  return (
    <>
    <section className="section-sm">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center section-title justify-content-between">
          <h2 className="mb-0 text-nowrap mr-3">Our Course</h2>
          <div className="border-top w-100 border-primary d-none d-sm-block"></div>
          <div>
          <NavLink className="btn btn-primary" smooth to="/course#top">See all</NavLink>
          </div>
        </div>
      </div>
    </div>
  
<div className="row justify-content-center">
  
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src={course1} alt="course thumb"/>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="#">
          <h4 className="card-title" style={{color:"#1a1a37", fontSize:28, fontWeight:"bolder"}}>Photography</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
          <NavLink className="btn btn-primary" smooth to="/coursedetails#top">Apply now</NavLink>
      </div>
    </div>
  </div>
 
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src={course2} alt="course thumb"/>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="#">
          <h4 className="card-title"  style={{color:"#1a1a37", fontSize:28, fontWeight:"bolder"}}>Programming</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
          <NavLink className="btn btn-primary" smooth to="/coursedetails#top">Apply now</NavLink>
      </div>
    </div>
  </div>
  
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src={course3} alt="course thumb"/>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="#">
          <h4 className="card-title"  style={{color:"#1a1a37", fontSize:28, fontWeight:"bolder"}}>Lifestyle Archives</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
          <NavLink className="btn btn-primary" smooth to="/coursedetails#top">Apply now</NavLink>
      </div>
    </div>
  </div>
  
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src={course4} alt="course thumb"/>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title"  style={{color:"#1a1a37", fontSize:28, fontWeight:"bolder"}}>Complete Freelancing</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
          <NavLink className="btn btn-primary" smooth to="/coursedetails#top">Apply now</NavLink>
      </div>
    </div>
  </div>
  
  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src={course5} alt="course thumb"/>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i className="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a className="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title"  style={{color:"#1a1a37", fontSize:28, fontWeight:"bolder"}}>Branding Design</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
          <NavLink className="btn btn-primary" smooth to="/coursedetails#top">Apply now</NavLink>
      </div>
    </div>
  </div>

  <div className="col-lg-4 col-sm-6 mb-5">
    <div className="card p-0 border-primary rounded-0 hover-shadow">
      <img className="card-img-top rounded-0" src={course6} alt="course thumb"/>
      <div className="card-body">
        <ul className="list-inline mb-2">
          <li className="list-inline-item"><i class="ti-calendar mr-1 text-color"></i>02-14-2018</li>
          <li className="list-inline-item"><a class="text-color" href="#">Humanities</a></li>
        </ul>
        <a href="course-single.html">
          <h4 className="card-title"  style={{color:"#1a1a37", fontSize:28, fontWeight:"bolder"}}>Art Design</h4>
        </a>
        <p className="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.</p>
          <NavLink className="btn btn-primary" smooth to="/coursedetails#top">Apply now</NavLink>
      </div>
    </div>
  </div>
</div>

    <div className="row">
      <div className="col-12 text-center">
      <NavLink className="btn btn-primary" smooth to="/course#top">See all</NavLink>
      </div>
    </div>
  </div>
</section>
    </>
  )
}


export default Courses