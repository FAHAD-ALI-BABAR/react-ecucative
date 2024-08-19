import React from 'react'
import "./Header.css"
import { useEffect, useRef, useState } from 'react';
import Slick from 'react-slick';
import Venobox from 'venobox';
import 'venobox/dist/venobox.min.css';
import logo from "../../Images/logo.png"
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import banner from "../../Images/banner.jpg"
import { HashLink as NavLink } from 'react-router-hash-link';
import { IoIosCloseCircle } from "react-icons/io";
import { BiColor, BiFontSize } from 'react-icons/bi';
import { WiDayCloudy } from 'react-icons/wi';

const btnstyle={
  color:"#ffbc3b",
  fontsize:"20px",
  height:"20px",
  width:"20px"

}

const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  
  

 

  const toggleLoginModal = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const toggleSignupModal = () => {
    setIsSignupOpen(!isSignupOpen);
  };
  
    const [isSticky, setIsSticky] = useState(false);
    const countRef = useRef(null);
  
    useEffect(() => {
      // Preloader simulation
      
  
      // Sticky Menu
      const handleScroll = () => {
        const height = document.querySelector('.top-header').clientHeight;
        const offsetTop = document.querySelector('header').offsetTop;
  
        if (offsetTop >= 10) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
  
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    useEffect(() => {
      // Background-images
      document.querySelectorAll('[data-background]').forEach((element) => {
        element.style.backgroundImage = `url(${element.dataset.background})`;
      });
  
      // Venobox popup
      new Venobox();
  
      // Slick slider
      
  
      // Filterizr
      const containerEl = document.querySelector('.filtr-container');
      if (containerEl) {
        const filterizd = new Filterizr('.filtr-container');
      }
  
      // Counter
      const handleCounterScroll = () => {
        if (countRef.current) {
          const oTop = countRef.current.offsetTop - window.innerHeight;
          if (window.pageYOffset > oTop) {
            document.querySelectorAll('.count').forEach((element) => {
              const countTo = element.getAttribute('data-count');
              $({ countNum: element.innerText }).animate(
                { countNum: countTo },
                {
                  duration: 1000,
                  easing: 'swing',
                  step: function () {
                    element.innerText = Math.floor(this.countNum);
                  },
                  complete: function () {
                    element.innerText = this.countNum;
                  },
                }
              );
            });
          }
        }
      };
  
      window.addEventListener('scroll', handleCounterScroll);
  
      // Cleanup event listener on unmount
      return () => {
        window.removeEventListener('scroll', handleCounterScroll);
      };
    }, []);
  return (
    <>
    <header className={`fixed-top header ${isSticky ? 'sticky' : ''}`}>
      <div className="top-header py-2 bg-white">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-lg-4 text-center text-lg-left">
              <a className="text-color mr-3" href="tel:+443003030266">
                CALL : 00 111 222 3333
              </a>
              <ul className="list-inline d-inline">
                <li className="list-inline-item mx-0">
                  <a className="d-inline-block p-2 text-color" href="#">
                  <FaFacebook />
                  </a>
                </li>
                <li className="list-inline-item mx-0">
              <a className="d-inline-block p-2 text-color" href="#"><FaTwitter /></a>
            </li>
            <li className="list-inline-item mx-0">
              <a className="d-inline-block p-2 text-color" href="#"><FaDiscord /></a>
            </li>
            <li className="list-inline-item mx-0">
              <a className="d-inline-block p-2 text-color" href="#"><RiInstagramFill /></a>
            </li>
              </ul>
            </div>
            <div className= "col-lg-8 text-center text-lg-right">
              <ul className="list-inline">
                <li className="list-inline-item">
                <NavLink className="nav-link text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" smooth to="/notice#top">NOTICE</NavLink>
                </li>
                <li className="list-inline-item">
                <NavLink className="nav-link text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" smooth to="/research#top">RESEARCH</NavLink>
            </li>
            <li className="list-inline-item">
            <NavLink className="nav-link text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" smooth to="/scholarship#top">SCHOLARSHIP</NavLink>
            </li>
            <li className="list-inline-item">
              <a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" onClick={toggleLoginModal} href="#" >login</a>
            </li>
            <li className="list-inline-item">
              <a className="text-uppercase text-color p-sm-2 py-2 px-0 d-inline-block" onClick={toggleSignupModal} href="#">register</a>
            </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation w-100">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark p-0">
            <a className="navbar-brand" href="index.html">
              <img src= {logo}alt="logo" />
            </a>
            <button
              className="navbar-toggler rounded-0"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
              
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navigation" >
              <ul className="navbar-nav ml-auto text-center" >
                <li className="nav-item ">
                  <NavLink className="nav-link" smooth to="/#top">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" smooth to="/about#top">About</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" smooth to="/course#top">Courses</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" smooth to="/events#top">Event</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" smooth to="/blogs#top">Blogs</NavLink>
            </li>
            <li className="nav-item dropdown view">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"  data-toggle="dropdown"  aria-expanded="false">
                Pages <IoIosArrowDown />
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" smooth to="/teachers#top">Teacher</NavLink></li>
                <li> <NavLink className="dropdown-item" smooth to="/teachersingle#top">Teacher-single</NavLink></li>
                <li><NavLink className="dropdown-item" smooth to="/notice#top">Notice</NavLink></li>
                <li><NavLink className="dropdown-item" smooth to="/noticedetails#top">Notice Details</NavLink></li>
                <li><NavLink className="dropdown-item" smooth to="/research#top">Research</NavLink></li>
                <li><NavLink className="dropdown-item" smooth to="/scholarship#top">Scholarship</NavLink></li>
                <li><NavLink className="dropdown-item" smooth to="/coursedetails#top">Course Details</NavLink></li>
                <li><NavLink className="dropdown-item" smooth to="/eventdetails#top">Event Details</NavLink></li>
                <li><NavLink className='dropdown-item' smooth to="/blogdetails#top">Blog Details</NavLink></li>
                
                <li className="dropdown-item dropdown dropleft">
                  <a className="dropdown-toggle" href="#" id="navbarDropdownSubmenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sub Menu
                  </a>
                  <ul className="dropdown-menu dropdown-submenu" aria-labelledby="navbarDropdownSubmenu">
                    <li><a className="dropdown-item" href="#!">Sub Menu 01</a></li>
                    <li><a className="dropdown-item" href="#!">Sub Menu 02</a></li>
                    <li><a className="dropdown-item" href="#!">Sub Menu 03</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" smooth to="/contact#top">Contact</NavLink>
            </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div>
      {/* Trigger Buttons */}
     

      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content rounded-0 border-0 p-4">
              <div className="modal-header border-0">
                <h3>Login</h3>
                
                <IoIosCloseCircle type="button" className="close" onClick={toggleLoginModal} aria-label="Close" style={btnstyle} />
                 
                
              </div>
              <div className="modal-body">
                <form action="#" className="row">
                  <div className="col-12">
                    <input type="text" className="form-control mb-3" id="loginPhone" name="loginPhone" placeholder="Phone" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control mb-3" id="loginName" name="loginName" placeholder="Name" />
                  </div>
                  <div className="col-12">
                    <input type="password" className="form-control mb-3" id="loginPassword" name="loginPassword" placeholder="Password" />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">LOGIN</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content rounded-0 border-0 p-4">
              <div className="modal-header border-0">
                <h3>Register</h3>
                <IoIosCloseCircle type="button" className="close" onClick={toggleSignupModal} aria-label="Close" style={btnstyle} />

              </div>
              <div className="modal-body">
                <form action="#" className="row">
                  <div className="col-12">
                    <input type="text" className="form-control mb-3" id="signupPhone" name="signupPhone" placeholder="Phone" />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control mb-3" id="signupName" name="signupName" placeholder="Name" />
                  </div>
                  <div className="col-12">
                    <input type="email" className="form-control mb-3" id="signupEmail" name="signupEmail" placeholder="Email" />
                  </div>
                  <div className="col-12">
                    <input type="password" className="form-control mb-3" id="signupPassword" name="signupPassword" placeholder="Password" />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">SIGN UP</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Overlay for Blurring Background */}
      {(isLoginOpen || isSignupOpen) && <div className="modal-backdrop fade show" style={{ opacity: 0.5 }}></div>}
    </div>
    </header>

    

    
     


    

    
    </>
  )
}

export default Header