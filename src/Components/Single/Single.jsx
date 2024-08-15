import React from 'react'
import teacher from "../../Images/teacher1.jpg"
import course1 from "../../Images/course4.jpg"
import course2 from "../../Images/course5.jpg"
import course3 from "../../Images/course6.jpg"
import { HiOutlineEnvelope } from "react-icons/hi2";
import { MdOutlineLocalPhone } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterFill } from "react-icons/ri";
import { IoLogoSkype } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
const Single = () => {
  return (
    <>
    <section class="section">
  <div class="container">
    <div class="row">
      <div class="col-md-5 mb-5">
        <img class="img-fluid w-100" src={teacher} alt="teacher"/>
      </div>
      <div class="col-md-6 mb-5">
        <h3>John Doe</h3>
        <h6 class="text-color">Computer Science</h6>
        <p class="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusamus tenetur ea harum
          delectus ab consequatur excepturi, odit qui in quo quia voluptate nam optio, culpa aspernatur. Error placeat
          iusto officia voluptas quae.</p>
        <div class="row">
          <div class="col-md-6 mb-5 mb-md-0">
            <h4 class="mb-4">CONTACT INFO:</h4>
            <ul class="list-unstyled">
              <li class="mb-3"><a class="text-color" href="mailto:johndoe@email.com"><HiOutlineEnvelope />    johndoe@email.com</a></li>
              <li class="mb-3"><a class="text-color" href="tel:+120345876"><MdOutlineLocalPhone /> +120 345 876</a></li>
              <li class="mb-3"><a class="text-color" href="https://facebook.com/themefisher"><BiLogoFacebook /> john Doe</a></li>
              <li class="mb-3"><a class="text-color" href="https://twitter.com/themefisher"><RiTwitterFill /> john Doe</a></li>
              <li class="mb-3"><a class="text-color" href="teacher-single.html"><IoLogoSkype /> john Doe</a></li>
              <li class="mb-3"><a class="text-color" href="teacher-single.html"><CiGlobe /> johnDoe.com</a></li>
              <li class="mb-3"><a class="text-color" href="http://maps.google.com/"><IoLocationSharp /> 
              1313 Boulevard
                  Cremazie,Quebec</a></li>
            </ul>
          </div>
          <div class="col-md-6">
            <h4 class="mb-4">SUMMARY OF ACTIVITIES/INTERESTS</h4>
            <ul class="list-unstyled">
              <li class="mb-3">Computer Networking</li>
              <li class="mb-3">Computer Security</li>
              <li class="mb-3">Human Computer Interfacing</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12">
        <h4 class="mb-4">BIOGRAPHY</h4>
        <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <h4 class="mb-4">COURSES</h4>
      </div>
      
      <div class="col-lg-4 col-sm-6 mb-5">
        <div class="card p-0 border-primary rounded-0 hover-shadow">
          <img class="card-img-top rounded-0" src={course1} alt="course thumb"/>
          <div class="card-body">
            <ul class="list-inline mb-2">
              <li class="list-inline-item"><i class="ti-calendar mr-1 text-color"></i>02-14-2018</li>
              <li class="list-inline-item"><a class="text-color" href="course-single.html">Humanities</a></li>
            </ul>
            <a href="course-single.html">
              <h4 class="card-title" style={{color:"#ffbc3b"}}>Complete Freelancing</h4>
            </a>
            <p class="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna.</p>
            <a href="course-single.html" class="btn btn-primary btn-sm">Apply now</a>
          </div>
        </div>
      </div>
    
      <div class="col-lg-4 col-sm-6 mb-5">
        <div class="card p-0 border-primary rounded-0 hover-shadow">
          <img class="card-img-top rounded-0" src={course2} alt="course thumb"/>
          <div class="card-body">
            <ul class="list-inline mb-2">
              <li class="list-inline-item"><i class="ti-calendar mr-1 text-color"></i>02-14-2018</li>
              <li class="list-inline-item"><a class="text-color" href="course-single.html">Humanities</a></li>
            </ul>
            <a href="course-single.html">
              <h4 class="card-title" style={{color:"#ffbc3b"}}>Branding Design</h4>
            </a>
            <p class="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna.</p>
            <a href="course-single.html" class="btn btn-primary btn-sm">Apply now</a>
          </div>
        </div>
      </div>
    
      <div class="col-lg-4 col-sm-6 mb-5">
        <div class="card p-0 border-primary rounded-0 hover-shadow">
          <img class="card-img-top rounded-0" src={course3} alt="course thumb"/>
          <div class="card-body">
            <ul class="list-inline mb-2">
              <li class="list-inline-item"><i class="ti-calendar mr-1 text-color"></i>02-14-2018</li>
              <li class="list-inline-item"><a class="text-color" href="course-single.html">Humanities</a></li>
            </ul>
            <a href="course-single.html">
              <h4 class="card-title" style={{color:"#ffbc3b"}}>Art Design</h4>
            </a>
            <p class="card-text mb-4"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna.</p>
            <a href="course-single.html" class="btn btn-primary btn-sm">Apply now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Single