import React from 'react'
import footerlogo from "../../Images/logo.png"
const Footer = () => {
  return (
    <footer>
    
    <div className="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-md-9 ml-auto bg-primary py-5 newsletter-block">
            <h3 className="text-white">Subscribe Now</h3>
            <form action="#">
              <div className="input-wrapper">
                <input
                  type="email"
                  className="form-control border-0"
                  id="newsletter"
                  name="newsletter"
                  placeholder="Enter Your Email..."
                />
                <button type="submit" value="send" className="btn btn-primary">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="footer bg-footer section border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-8 mb-5 mb-lg-0">
            {/* logo */}
            <a className="logo-footer" href="#">
              <img className="img-fluid mb-4" src={footerlogo} alt="logo" />
            </a>
            <ul className="list-unstyled">
              <li className="mb-2">
                23621 15 Mile Rd #C104, Clinton MI, 48035, New York, USA
              </li>
              <li className="mb-2">+1 (2) 345 6789</li>
              <li className="mb-2">+1 (2) 345 6789</li>
              <li className="mb-2">contact@yourdomain.com</li>
            </ul>
          </div>
          {/* company */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
            <h4 className="text-white mb-5">COMPANY</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a className="text-color" href="#">
                  About Us
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#">
                  Our Teacher
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#">
                  Contact
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* links */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
            <h4 className="text-white mb-5">LINKS</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a className="text-color" href="#">
                  Courses
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#">
                  Events
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#">
                  Notice
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#">
                  Scholarship
                </a>
              </li>
            </ul>
          </div>
          {/* support */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
            <h4 className="text-white mb-5">SUPPORT</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a className="text-color" href="#">
                  Forums
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#">
                  Documentation
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#!">
                  Language
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#!">
                  Release Status
                </a>
              </li>
            </ul>
          </div>
          {/* recommend */}
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 mb-5 mb-md-0">
            <h4 className="text-white mb-5">RECOMMEND</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a className="text-color" href="#">
                  WordPress
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#">
                  LearnPress
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#">
                  WooCommerce
                </a>
              </li>
              <li className="mb-3">
                <a className="text-color" href="#">
                  bbPress
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/* copyright */}
    <div className="copyright py-4 bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-7 text-sm-left text-center">
            <p className="mb-0">© 2024 Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer