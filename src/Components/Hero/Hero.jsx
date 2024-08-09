import React from 'react'
import { useEffect } from 'react';
import $ from 'jquery';
import banner from "../../Images/banner.jpg";
import feature from "../../Images/banner-feature.png"
import { GoBook } from "react-icons/go";
import { TfiBlackboard } from "react-icons/tfi";
import { SlNotebook } from "react-icons/sl";
import { SlNote } from "react-icons/sl";
import education from "../../Images/education.jpg"

const Hero = () => {
    useEffect(() => {
       
    
        // Background-images
        $('[data-background]').each(function () {
          $(this).css({
            'background-image': `url(${ $(this).data('background') })`,
          });
        });
    
       
       
      }, []);
  return (
    <>
     <section
      className="hero-section bg-cover" 
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        position: 'relative',
      }}
    >
      {/* Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#1a1a37', // Change the opacity and color as needed
          zIndex: 1,
          opacity:0.8,
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-slider">
          <div className="hero-slider-item">
            <div className="row">
              <div className="col-md-8">
                <h1 className="text-white">Your bright future is our mission</h1>
                <p className="text-muted mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exer
                </p>
                <a href="#" className="btn btn-primary">
                  Apply now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-green overflow-md-hidden " style={{zIndex:3, position:"relative"}}>
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-xl-4 col-lg-5 align-self-end">
            <img
              className="img-fluid w-100"
              src={feature}
              alt="banner-feature"
            />
          </div>
          <div className="col-xl-8 col-lg-7 mt-6">
            <div className="row feature-blocks bg-gray justify-content-between">
              <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                <i className="ti-book mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                <GoBook 
      style={{
        fontSize: '100px',       // Increases the icon size
        color: '#ffbc3b',         // Sets the inside color to white
         // Adds a yellow outline
        borderRadius: '5px',    // Optional: To make the border smoother
        padding: '10px',         // Optional: To add space inside the border
        backgroundColor: 'transparent' // Ensures the inside remains white
      }} 
    />

                <h3 className="mb-xl-4 mb-lg-3 mb-4">Scholorship News</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad
                </p>
              </div>
              <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                <i className="ti-blackboard mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                <TfiBlackboard style={{
        fontSize: '100px',       // Increases the icon size
        color: '#ffbc3b',         // Sets the inside color to white
         // Adds a yellow outline
        borderRadius: '5px',    // Optional: To make the border smoother
        padding: '10px',         // Optional: To add space inside the border
        backgroundColor: 'transparent' // Ensures the inside remains white
      }}  />
                <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Notice Board</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad
                </p>
              </div>
              <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                <i className="ti-agenda mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                <SlNotebook style={{
        fontSize: '100px',       // Increases the icon size
        color: '#ffbc3b',         // Sets the inside color to white
         // Adds a yellow outline
        borderRadius: '5px',    // Optional: To make the border smoother
        padding: '10px',         // Optional: To add space inside the border
        backgroundColor: 'transparent' // Ensures the inside remains white
      }}  />
                <h3 className="mb-xl-4 mb-lg-3 mb-4">Our Achievements</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad
                </p>
              </div>
              <div className="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                <i className="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                <SlNote style={{
        fontSize: '100px',       // Increases the icon size
        color: '#ffbc3b',         // Sets the inside color to white
         // Adds a yellow outline
        borderRadius: '5px',    // Optional: To make the border smoother
        padding: '10px',         // Optional: To add space inside the border
        backgroundColor: 'transparent' // Ensures the inside remains white
      }}  />
                <h3 className="mb-xl-4 mb-lg-3 mb-4">Admission Now</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 order-2 order-md-1">
            <h2 className="section-title">About Educenter</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat
            </p>
            <p>
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem
            </p>
            <a
              href="#"
              className="btn btn-primary"
              data-animation-out="fadeOutRight"
              data-delay-out="5"
              data-duration-in=".3"
              data-animation-in="fadeInLeft"
              data-delay-in=".7"
            >
              Learn more
            </a>
          </div>
          <div className="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
            <img
              className="img-fluid w-100"
              src={education}
              alt="about"
            />
          </div>
        </div>
      </div>
    </section>




    </>
  )
}

export default Hero