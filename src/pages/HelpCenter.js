import React, { useEffect, useState } from "react";
import Header from "../components/guest/Header";
import Footer from "../components/guest/Footer";
import AuthModal from "../components/guest/authModal";
import { Link, useLocation } from "react-router-dom";
import useCommon from "../hooks/useCommon";
import { imageBase } from "../config/Constant";

function HelpCenter() {

  const location = useLocation();
  const type = location.state.type;

  const {
    getArticleList,
    getGuideList
  } = useCommon();

  const [articleArr, setArticleArr] = useState([]);
  const [guideArr, setGuideArr] = useState([]); 

  const fetchArticles = async () => {
    const result = await getArticleList({user_type:type});
    const sampleArticles = result.data.slice(0, 4);
    setArticleArr(sampleArticles);
  }

  const fetchGuides = async () => {
    const result = await getGuideList({user_type:type});
    const sampleGuides = result.data.slice(0, 4);
    setGuideArr(sampleGuides);
  }

  useEffect(()=>{
    fetchArticles();
    fetchGuides();
  }, [])

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
                    <a href="" className={type=="guest" ? "active" : ""}>
                      Guest
                    </a>
                    <a href="" className={type=="host" ? "active" : ""}>Host</a>
                    <span></span>
                  </div>
                  <h2>
                    Guides for Guests{" "}
                    <Link to="/exploreGuides" state={{type}}>
                      Browse all Guides{" "}
                      <i className="fa-regular fa-chevron-right"></i>
                    </Link>
                  </h2>
                </div>
              </div>

              {/* Guides Section */}
              {guideArr.map((guide, index) => (
                <div className="col-lg-3 col-6 col-md-3" key={index}>
                  <div className="help-center-guides">
                    <a href="guides-detail.html">
                      <img
                        src={`${imageBase}${guide.cover_image}`}
                        alt=""
                      />
                    </a>
                    <p>{guide.title}</p>
                  </div>
                </div>
              ))}

              {/* Top Articles Section */}
              <div className="col-lg-12 mt-4">
                <div className="help-center-mid mb-5">
                  <h2>
                    Top Articles{" "}
                    <Link to="/exploreArticles" state={{type}}>
                      Browse all Articles{" "}
                      <i className="fa-regular fa-chevron-right"></i>
                    </Link>
                  </h2>
                </div>
              </div>

              {/* Article List */}
              {articleArr.map((article, index) => (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <div className="help-center-articles">
                      <h4>
                        <a href="articles-detail.html">{article.title}</a>
                      </h4>
                      <p>
                        {article.description}
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

export default HelpCenter;
