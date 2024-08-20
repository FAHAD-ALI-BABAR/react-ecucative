import React, { useState } from 'react'
import event1 from "../../Images/event1.jpg"
import event2 from "../../Images/event2.jpg"
import event3 from "../../Images/event3.jpg"
import "./Eventss.css"
import { HashLink as NavLink } from 'react-router-hash-link';

const Eventss = () => {

  return (
    <>
    <section className="section bg-gray">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center section-title justify-content-between">
          <h2 className="mb-0 text-nowrap mr-3">Upcoming Events</h2>
          <div className="border-top w-100 border-primary d-none d-sm-block"></div>
          <div>
          <NavLink className="btn btn-primary btn-sm" smooth to="/events#top">See all</NavLink>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">

      <div className="col-lg-3 col-sm-5 mb-4">
        <div className="card border-0 rounded-0 hover-shadow" style={{ maxWidth: "100%" }}>
          <div className="card-img position-relative">
            <img className="card-img-top rounded-0" src={event1} alt="event thumb" style={{ height: "auto", width: "100%" }} />
            <div className="card-date" style={{maxWidth:"200px",margin:"10px",borderRadius:"10px",height:"auto",fontSize: "0.7rem" }}><span style={{fontSize:"25px"}}>18</span> December</div>
          </div>
          <div className="card-body">
            <p style={{ fontSize: "0.85rem" }}><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
            <a href="#"><h4 className="card-title tittt" >Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-sm-5 mb-4">
        <div className="card border-0 rounded-0 hover-shadow" style={{ maxWidth: "100%" }}>
          <div className="card-img position-relative">
            <img className="card-img-top rounded-0" src={event2} alt="event thumb" style={{ height: "auto", width: "100%" }} />
            <div className="card-date" style={{maxWidth:"200px",margin:"10px",borderRadius:"10px",height:"auto",fontSize: "0.7rem" }}><span style={{fontSize:"25px"}}>21</span> December</div>
          </div>
          <div className="card-body">
            <p style={{ fontSize: "0.85rem" }}><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
            <a href="#"><h4 className="card-title tittt" >Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-sm-5 mb-4">
        <div className="card border-0 rounded-0 hover-shadow" style={{ maxWidth: "100%" }}>
          <div className="card-img position-relative">
            <img className="card-img-top rounded-0" src={event3} alt="event thumb" style={{ height: "auto", width: "100%" }} />
            <div className="card-date" style={{maxWidth:"200px",margin:"10px",borderRadius:"10px",height:"auto",fontSize: "0.7rem" }}><span style={{fontSize:"25px"}}>23</span> December</div>
          </div>
          <div className="card-body">
            <p style={{ fontSize: "0.85rem" }}><i className="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
            <a href="#"><h4 className="card-title tittt" >Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
          </div>
        </div>
      </div>

    </div>

    <div className="row">
      <div className="col-12 text-center">
        <a href="#" className="btn btn-sm btn-outline-primary d-sm-none d-inline-block">see all</a>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Eventss