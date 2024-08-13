import React from 'react'
import event1 from "../../Images/event1.jpg"
import event2 from "../../Images/event2.jpg"
import event3 from "../../Images/event3.jpg"
import "./Eventss.css"

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
            <a href="events.html" className="btn btn-sm btn-outline-primary ml-sm-3 d-none d-sm-block">see all</a>
          </div>
        </div>
      </div>
    </div>
    <div className="row justify-content-center">

  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src={event1} alt="event thumb"/>
        <div className="card-date"><span>18</span>December</div>
      </div>
      <div className="card-body">
   
        <p><i class="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
        <a href="event-single.html"><h4 className="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
      </div>
    </div>
  </div>
 
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src={event2} alt="event thumb"/>
        <div className="card-date"><span>21</span>December</div>
      </div>
      <div className="card-body">
     
        <p><i class="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
        <a href="event-single.html"><h4 className="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
      </div>
    </div>
  </div>
 
  <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
    <div className="card border-0 rounded-0 hover-shadow">
      <div className="card-img position-relative">
        <img className="card-img-top rounded-0" src={event3} alt="event thumb"/>
        <div className="card-date"><span>23</span> December</div>
      </div>
      <div className="card-body">
      
        <p><i class="ti-location-pin text-primary mr-2"></i>Dhanmondi Lake, Dhaka</p>
        <a href="event-single.html"><h4 className="card-title">Lorem ipsum dolor amet, consectetur adipisicing.</h4></a>
      </div>
    </div>
  </div>
</div>

    <div className="row">
      <div className="col-12 text-center">
        <a href="course.html" className="btn btn-sm btn-outline-primary d-sm-none d-inline-block">sell all</a>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Eventss