import React from 'react'
import success from "../../Images/success.jpg"
import { TiMediaPlayOutline } from "react-icons/ti";
const Training = () => {
  return (
    <>
    <section className="section bg-primary">
  <div className="container">
    <div className="row">
      <div className="col-12 text-center">
        <h6 className="text-white font-secondary mb-0">Click to Join the Advance Workshop</h6>
        <h2 className="section-title text-white">Training In Advance Networking</h2>
        <a href="contact.html" className="btn btn-light">join now</a>
      </div>
    </div>
  </div>
</section>
<section class="section bg-cover" data-background="src/Images/success.jpg">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-sm-4 position-relative success-video">
        <a class="play-btn venobox" href="https://youtu.be/nA1Aqp0sPQo" data-vbtype="video">
        <TiMediaPlayOutline style={{marginTop:"30px", fontSize:"25px"}} />
        </a>
      </div>
      <div class="col-lg-6 col-sm-8">
        <div class="bg-white p-5">
          <h2 class="section-title">Success Stories</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Training