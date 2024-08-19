import React from 'react'
import teacher1 from "../../Images/teacher1.jpg"
import teacher2 from "../../Images/teacher2.jpg"
import teacher3 from "../../Images/teacher3.jpg"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { TfiGoogle } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";

const Teacher = () => {
  return (
    <>
    <section className="section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-12">
        <h2 className="section-title">Our Teachers</h2>
      </div>
    
      <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src={teacher1} alt="teacher"/>
          <div className="card-body">
            <a href="#">
              <h4 className="card-title" style={{color:"#1e1e4b", fontSize:22, fontWeight:'bolder'}}>Jacke Masito</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><FaFacebookF />
              </a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><FaTwitter />
              </a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><TfiGoogle /></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src={teacher2} alt="teacher"/>
          <div className="card-body">
            <a href="#">
              <h4 className="card-title" style={{color:"#1e1e4b", fontSize:22, fontWeight:'bolder'}}>Clark Malik</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><FaFacebookF />
              </a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><FaTwitter />
              </a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><TfiGoogle /></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
      </div>
    
      <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
        <div className="card border-0 rounded-0 hover-shadow">
          <img className="card-img-top rounded-0" src={teacher3} alt="teacher"/>
          <div className="card-body">
            <a href="#">
              <h4 className="card-title" style={{color:"#1e1e4b", fontSize:22, fontWeight:'bolder'}}>John Doe</h4>
            </a>
            <p>Teacher</p>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="text-color" href="#"><FaFacebookF />
              </a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><FaTwitter />
              </a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><TfiGoogle /></a></li>
              <li className="list-inline-item"><a className="text-color" href="#"><FaLinkedinIn /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Teacher