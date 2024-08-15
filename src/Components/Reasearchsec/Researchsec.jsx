import React from 'react'
import res1 from "../../Images/research1.jpg"
import res2 from "../../Images/research2.jpg"
import res3 from "../../Images/research3.jpg"
import res4 from "../../Images/research4.jpg"
import res5 from "../../Images/research5.jpg"
import res6 from "../../Images/research6.jpg"
const Researchsec = () => {
  return (
    <>
    <section className="section">
  <div className="container">
    <div className="row">
      {/* research item */}
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
          <img className="card-img-top rounded-0" src={res1} alt="research thumb" />
          <div className="card-body">
            <h4 className="card-title">Geography</h4>
            <p className="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      {/* research item */}
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
          <img className="card-img-top rounded-0" src={res2} alt="research thumb" />
          <div className="card-body">
            <h4 className="card-title">Mathematical</h4>
            <p className="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      {/* research item */}
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
          <img className="card-img-top rounded-0" src={res3} alt="research thumb" />
          <div className="card-body">
            <h4 className="card-title">Humanities</h4>
            <p className="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      {/* research item */}
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
          <img className="card-img-top rounded-0" src={res4} alt="research thumb" />
          <div className="card-body">
            <h4 className="card-title">Physical & Sciences</h4>
            <p className="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      {/* research item */}
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
          <img className="card-img-top rounded-0" src={res5} alt="research thumb" />
          <div className="card-body">
            <h4 className="card-title">Biological Sciences</h4>
            <p className="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      {/* research item */}
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card rounded-0 hover-shadow border-top-0 border-left-0 border-right-0">
          <img className="card-img-top rounded-0" src={res6} alt="research thumb" />
          <div className="card-body">
            <h4 className="card-title">Archaeology</h4>
            <p className="card-text">
              Some quick example text to build on the card title
              and make up the bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Researchsec