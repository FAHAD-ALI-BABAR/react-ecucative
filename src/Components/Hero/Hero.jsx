import React from 'react'
import { useEffect } from 'react';
import $ from 'jquery';
import banner from "../../Images/banner.jpg"
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
    </>
  )
}

export default Hero