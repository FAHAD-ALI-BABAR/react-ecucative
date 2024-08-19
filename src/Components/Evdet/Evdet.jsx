import React from 'react'
import events from "../../Images/coursesingle.jpg"
import speak1 from "../../Images/teacherrr.jpg"
import speak2 from "../../Images/speaker1.jpg"
import speak3 from "../../Images/speaker2.jpg"
import speak4 from "../../Images/speaker3.jpg"
const Evdet = () => {
  return (
   <>
   <section className="section-sm">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="section-title">English Spoken</h2>
      </div>
      {/* event image */}
      <div className="col-12 mb-4">
        <img
          src={events}
          alt="event thumb"
          className="img-fluid w-100"
        />
      </div>
    </div>
    {/* event info */}
    <div className="row align-items-center mb-5">
      <div className="col-lg-9">
        <ul className="list-inline">
          <li className="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <i className="ti-location-pin text-primary icon-md mr-2"></i>
              <div className="text-left">
                <h6 className="mb-0">LOCATION</h6>
                <p className="mb-0">Dhanmondi, Dhaka</p>
              </div>
            </div>
          </li>
          <li className="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <i className="ti-calendar text-primary icon-md mr-2"></i>
              <div className="text-left">
                <h6 className="mb-0">DATE</h6>
                <p className="mb-0">December-12-18</p>
              </div>
            </div>
          </li>
          <li className="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <i className="ti-time text-primary icon-md mr-2"></i>
              <div className="text-left">
                <h6 className="mb-0">TIME</h6>
                <p className="mb-0">04: 00 pm</p>
              </div>
            </div>
          </li>
          <li className="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
            <div className="d-flex align-items-center">
              <i className="ti-wallet text-primary icon-md mr-2"></i>
              <div className="text-left">
                <h6 className="mb-0">ENTRY FEE</h6>
                <p className="mb-0">From: $699</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 text-lg-right text-left">
        <a href="#" className="btn btn-primary">
          Apply now
        </a>
      </div>
      {/* border */}
      <div className="col-12 mt-4 order-4">
        <div className="border-bottom border-primary"></div>
      </div>
    </div>
    {/* event details */}
    <div className="row">
      <div className="col-12 mb-50">
        <h3>About Event</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>
    </div>
    {/* event speakers */}
    <div className="row">
      <div className="col-12">
        <h3 className="mb-4">Event Speakers</h3>
      </div>
      {/* speakers */}
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="media">
          <img
            className="mr-3 img-fluid"
            src={speak1}
            alt="speaker"
          />
          <div className="media-body">
            <h4 className="mt-0">Jack Mastio</h4>
            Teacher
          </div>
        </div>
      </div>
      {/* speakers */}
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="media">
          <img
            className="mr-3 img-fluid"
            src={speak2}
            alt="speaker"
          />
          <div className="media-body">
            <h4 className="mt-0">John Doe</h4>
            Teacher
          </div>
        </div>
      </div>
      {/* speakers */}
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="media">
          <img
            className="mr-3 img-fluid"
            src={speak3}
            alt="speaker"
          />
          <div className="media-body">
            <h4 className="mt-0">Randy Luis</h4>
            Teacher
          </div>
        </div>
      </div>
      {/* speakers */}
      <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
        <div className="media">
          <img
            className="mr-3 img-fluid"
            src={speak4}
            alt="speaker"
          />
          <div className="media-body">
            <h4 className="mt-0">Alfred Jin</h4>
            Teacher
          </div>
        </div>
      </div>
      {/* border */}
      <div className="col-12 mt-4 order-4">
        <div className="border-bottom border-primary"></div>
      </div>
    </div>
  </div>
</section>
{/* /event single */}

{/* more event */}


   </>
  )
}

export default Evdet