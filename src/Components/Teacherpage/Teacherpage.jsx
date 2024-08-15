import React from 'react'

const Teacherpage = () => {
  return (
    <>
     <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Teacher category list */}
            <ul className="list-inline text-center filter-controls mb-5">
              <li className="list-inline-item m-3 text-uppercase active" data-filter="all">
                All
              </li>
              <li className="list-inline-item m-3 text-uppercase" data-filter="arts">
                arts
              </li>
              <li className="list-inline-item m-3 text-uppercase" data-filter="bio-science">
                biological science
              </li>
              <li className="list-inline-item m-3 text-uppercase" data-filter="business-study">
                business studies
              </li>
              <li className="list-inline-item m-3 text-uppercase" data-filter="law">
                law
              </li>
              <li className="list-inline-item m-3 text-uppercase" data-filter="pharmacy">
                pharmacy
              </li>
              <li className="list-inline-item m-3 text-uppercase" data-filter="science">
                science
              </li>
              <li className="list-inline-item m-3 text-uppercase" data-filter="social-science">
                social science
              </li>
            </ul>
          </div>
        </div>

        {/* Teacher list */}
        <div className="row filtr-container">
          {/* Teacher */}
          <div data-category="arts, law" className="col-lg-4 col-sm-6 mb-5 filtr-item">
            <div className="card border-0 rounded-0 hover-shadow">
              <img
                className="card-img-top rounded-0"
                src="images/teachers/teacher-1.jpg"
                alt="teacher"
              />
              <div className="card-body">
                <a href="teacher-single.html">
                  <h4 className="card-title">Jacke Masito</h4>
                </a>
                <p>Teacher</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-google"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teacher */}
          <div data-category="bio-science" className="col-lg-4 col-sm-6 mb-5 filtr-item">
            <div className="card border-0 rounded-0 hover-shadow">
              <img
                className="card-img-top rounded-0"
                src="images/teachers/teacher-2.jpg"
                alt="teacher"
              />
              <div className="card-body">
                <a href="teacher-single.html">
                  <h4 className="card-title">Clark Malik</h4>
                </a>
                <p>Teacher</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-google"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Teacher */}
          <div data-category="business-study" className="col-lg-4 col-sm-6 mb-5 filtr-item">
            <div className="card border-0 rounded-0 hover-shadow">
              <img
                className="card-img-top rounded-0"
                src="images/teachers/teacher-3.jpg"
                alt="teacher"
              />
              <div className="card-body">
                <a href="teacher-single.html">
                  <h4 className="card-title">John Doe</h4>
                </a>
                <p>Teacher</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-google"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Teacher */}
          <div data-category="bio-science, science, arts" className="col-lg-4 col-sm-6 mb-5 filtr-item">
            <div className="card border-0 rounded-0 hover-shadow">
              <img
                className="card-img-top rounded-0"
                src="images/teachers/teacher-1.jpg"
                alt="teacher"
              />
              <div className="card-body">
                <a href="teacher-single.html">
                  <h4 className="card-title">Jacke Masito</h4>
                </a>
                <p>Teacher</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-twitter-alt"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-google"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-color" href="#">
                      <i className="ti-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Teacherpage