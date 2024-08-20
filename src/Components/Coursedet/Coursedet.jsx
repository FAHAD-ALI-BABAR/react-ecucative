import React from 'react'
import coursesingle from "../../Images/coursesingle.jpg"
import teachers from "../../Images/teacherrr.jpg"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Coursedet = () => {
  return (
    <>
    <section className="section-sm">
  <div className="container">
    <div className="row">
      <div className="col-12 mb-4">
        {/* course thumb */}
        <img src={coursesingle} className="img-fluid w-100" alt="Course" />
      </div>
    </div>
    {/* course info */}
    <div className="row align-items-center mb-5">
      <div className="col-xl-3 order-1 col-sm-6 mb-4 mb-xl-0">
        <h2>Photography</h2>
      </div>
      <div className="col-xl-6 order-sm-3 order-xl-2 col-12 order-2">
        <ul className="list-inline text-xl-center">
          <li className="list-inline-item mr-4 mb-3 mb-sm-0">
            <div className="d-flex align-items-center">
              <i className="ti-book text-primary icon-md mr-2"></i>
              <div className="text-left">
                <h6 className="mb-0">COURSES</h6>
                <p className="mb-0">06 Month</p>
              </div>
            </div>
          </li>
          <li className="list-inline-item mr-4 mb-3 mb-sm-0">
            <div className="d-flex align-items-center">
              <i className="ti-alarm-clock text-primary icon-md mr-2"></i>
              <div className="text-left">
                <h6 className="mb-0">DURATION</h6>
                <p className="mb-0">03 Hours</p>
              </div>
            </div>
          </li>
          <li className="list-inline-item mr-4 mb-3 mb-sm-0">
            <div className="d-flex align-items-center">
              <i className="ti-wallet text-primary icon-md mr-2"></i>
              <div className="text-left">
               
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-xl-3 text-sm-right text-left order-sm-2 order-3 order-xl-3 col-sm-6 mb-4 mb-xl-0">
        <a href="#" className="btn btn-primary">Apply now</a>
      </div>
      {/* border */}
      <div className="col-12 mt-4 order-4">
        <div className="border-bottom border-primary"></div>
      </div>
    </div>
    {/* course details */}
    <div className="row">
      <div className="col-12 mb-4">
        <h3>About Course</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
      <div className="col-12 mb-4">
        <h3 className="mb-3">Requirements</h3>
        <div className="col-12 px-0">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-styled">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="list-styled">
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mb-4">
        <h3 className="mb-3">How to Apply</h3>
        <ul className="list-styled">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum
            dolor. Lorem, ipsum.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum
            dolor. Lorem, ipsum.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum
            dolor. Lorem, ipsum.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum
            dolor. Lorem, ipsum.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati unde nulla? Lorem, ipsum
            dolor. Lorem, ipsum.</li>
        </ul>
      </div>
      <div className="col-12 mb-5">
        <h3>Fees and Funding</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
          labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>
      {/* teacher */}
      <div className="col-12">
        <h5 className="mb-3">Teacher</h5>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="media mb-2 mb-sm-0">
            <img className="mr-4 img-fluid" src={teachers} alt="Teacher" />
            <div className="media-body">
              <h4 className="mt-0">Sam Somrat</h4>
              Photographer
            </div>
          </div>
          <div className="social-link">
            <h6 className="d-none d-sm-block">Social Link</h6>
            <ul className="list-inline">
              <li className="list-inline-item"><a className="d-inline-block text-light p-1" href="#"> <FaFacebook /></a></li>
              <li className="list-inline-item"><a className="d-inline-block text-light p-1" href="#"> <FaTwitter /></a></li>
              <li className="list-inline-item"><a className="d-inline-block text-light p-1" href="#"> <RiInstagramFill /></a></li>
              
            </ul>
          </div>
        </div>
        <div className="border-bottom border-primary mt-4"></div>
      </div>
    </div>
  </div>
</section>
{/* /section */}

{/* related course */}

      

    </>
  )
}

export default Coursedet