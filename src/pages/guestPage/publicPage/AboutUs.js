import React from "react";
import Header from "../../../components/guest/Header";
import Footer from "../../../components/guest/Footer";
import AuthModal from "../../../components/guest/authModal";

function AboutUs() {
  return (
    <div>
      {/*  for header */}
      <Header />

      {/*  for body */}

      <main>
        {/* <!-- MOBILE --> */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-search-in">
                    <ul>
                      <li>
                        <a href="mob-src-filter.html">Where</a>
                      </li>
                      <li>
                        <a
                          className="mob-search-in-time"
                          href="mob-src-filter.html"
                        >
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="mob-src-filter.html">Activity</a>
                      </li>
                    </ul>
                    <a href="mob-src-filter.html" className="mob-search-button">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </a>
                  </div>
                  <div className="mob-filter-in">
                    <a href="mob-filter.html">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/mobile/filters/filter.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE --> */}
        <div className="about-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="about-heading">
                  <h1>Meet Zyvo</h1>
                  <p>The Leading Platform for hourly rentals</p>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="about-welcome">
                  <div className="about-welcome-in">
                    <h2>Welcome to Zyvo</h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                  <div className="about-welcome-image">
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/about-page/welcome.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="bg-light">
                <div className="col-lg-12">
                  <div className="about-mission-wrap">
                    <div className="about-mission-in">
                      <h2>Our Mission</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                    </div>
                    <div className="about-mission-image">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/about-page/mission.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white pt-3 pb-3">
                <div className="col-lg-12">
                  <div className="about-vision">
                    <h2>Vision</h2>
                    <hr />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-4">
                <div className="about-bottom">
                  <div className="about-bottom-in">
                    <h3>A World of Possibilities</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                  <div className="about-bottom-image">
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/about-page/possibilities.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-4">
                <div className="about-bottom">
                  <div className="about-bottom-image about-flexibility p-0">
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/about-page/flexibility.svg"
                      alt=""
                    />
                  </div>
                  <div className="about-bottom-in">
                    <h3>Flexibility Your Way</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AuthModal />
      <Footer />
    </div>
  );
}

export default AboutUs;
