import React from "react";
import Header from "../../components/host/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";
import { Link } from "react-router-dom";
function HelpCenterHost() {
  return (
    <>
      <Header />

      <main>
        {/* MOBILE */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-search-bar-back">
                    <a href="profile.html">
                      <i className="fa-regular fa-arrow-left"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE */}

        {/* HELP-CENTER-PAGE */}
        <div className="help-center-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="help-center-top">
                  <h1>Hi Katelyn, how can we help?</h1>
                  <form>
                    <label>
                      <input type="text" placeholder="Search question" />
                      <button type="submit">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </label>
                  </form>
                </div>
                <div className="help-center-mid">
                  <div className="help-center-btn">
                    <a href="" className="active">
                      Guest
                    </a>
                    <a href="">Host</a>
                    <span></span>
                  </div>
                  <h2>
                    Guides for Guests{" "}
                    <a href="explore-guides.html">
                      Browse all Guides{" "}
                      <i className="fa-regular fa-chevron-right"></i>
                    </a>
                  </h2>
                </div>
              </div>

              {/* Guides Section */}
              {[
                "Booking",
                "Payments",
                "Security & Safety",
                "Cancelations & Refunds",
              ].map((guide, index) => (
                <div className="col-lg-3 col-6 col-md-3" key={index}>
                  <div className="help-center-guides">
                    <a href="guides-detail.html">
                      <img
                        src={`https://design.yilstaging.com/ZYVO/assets/images/help-center/guides/${
                          index + 1
                        }.png`}
                        alt=""
                      />
                    </a>
                    <p>{guide}</p>
                  </div>
                </div>
              ))}

              {/* Top Articles Section */}
              <div className="col-lg-12 mt-4">
                <div className="help-center-mid mb-5">
                  <h2>
                    Top Articles{" "}
                    <a href="explore-articles.html">
                      Browse all Articles{" "}
                      <i className="fa-regular fa-chevron-right"></i>
                    </a>
                  </h2>
                </div>
              </div>

              {/* Article List */}
              {Array(6)
                .fill()
                .map((_, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="help-center-articles">
                      <h4>
                        <a href="articles-detail.html">Article Topic Title</a>
                      </h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                ))}

              {/* Contact Us Section */}
              <div className="col-lg-12">
                <div className="help-center-touch">
                  <h4>Need to get in touch?</h4>
                  <p>
                    We’ll start with some questions and get you to the right
                    place.
                  </p>
                  <Link to="/contactUs">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* HELP-CENTER-PAGE */}
      </main>

      <AuthModal />
      <Footer />
    </>
  );
}

export default HelpCenterHost;
