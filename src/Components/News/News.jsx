import React from 'react'
import news1 from "../../Images/news1.jpg"
import news2 from "../../Images/news2.jpg"
import news3 from "../../Images/news3.jpg"
import "./News.css"
import { HashLink as NavLink } from 'react-router-hash-link';

const News = () => {
  return (
    <section className="section pt-0">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h2 className="section-title">Latest News</h2>
      </div>
    </div>
    <div className="row justify-content-center">
  
      <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
        <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
          <img className="card-img-top rounded-0" src={news1} alt="Post thumb"/>
          <div className="card-body">
            <ul className="list-inline mb-3">
              <li className="list-inline-item mr-3 ml-0">August 28, 2018</li>
              <li className="list-inline-item mr-3 ml-0">By Somrat Sorkar</li>
            </ul>
            <a href="blog-single.html">
              <h4 className="card-title tittt" >Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
            </a>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
            
            <NavLink className='btn btn-primary btn-sm' smooth to="/blogdetails#top">read more</NavLink>
          </div>
        </div>
      </article>
  
      <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
        <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
          <img className="card-img-top rounded-0" src={news2} alt="Post thumb"/>
          <div className="card-body">
            <ul className="list-inline mb-3">
              <li className="list-inline-item mr-3 ml-0">August 13, 2018</li>
              <li className="list-inline-item mr-3 ml-0">By Jonathon Drew</li>
            </ul>
            <a href="blog-single.html">
              <h4 className="card-title tittt">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
            </a>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
            <NavLink className='btn btn-primary btn-sm' smooth to="/blogdetails#top">read more</NavLink>
          </div>
        </div>
      </article>

      <article className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
        <div className="card rounded-0 border-bottom border-primary border-top-0 border-left-0 border-right-0 hover-shadow">
          <img className="card-img-top rounded-0" src={news3} alt="Post thumb"/>
          <div className="card-body">
            <ul className="list-inline mb-3">
              <li className="list-inline-item mr-3 ml-0">August 24, 2018</li>
              <li className="list-inline-item mr-3 ml-0">By Alex Pitt</li>
            </ul>
            <a href="blog-single.html">
              <h4 className="card-title tittt">Lorem ipsum dolor amet, adipisicing eiusmod tempor.</h4>
            </a>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicin</p>
            <NavLink className='btn btn-primary btn-sm' smooth to="/blogdetails#top">read more</NavLink>
          </div>
        </div>
      </article>
      
    </div>
  </div>
</section>

  )
}

export default News