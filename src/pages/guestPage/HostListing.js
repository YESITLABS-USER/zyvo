import React from "react";
import Header from "../../components/guest/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";

function HostListing() {
  return (
    <>
      <Header />

      {/*  */}

      <main className="mb-0">
        {/* <!-- MOBILE --> */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-search-bar-back">
                    <a href="home.html">
                      <i className="fa-regular fa-arrow-left"></i>
                    </a>
                    <form action="">
                      <label>
                        <input type="text" placeholder="Search..." />
                        <button type="submit">
                          <i className="fa-regular fa-magnifying-glass"></i>
                        </button>
                      </label>
                    </form>
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
        {/* <!-- MOBILE -->
    <!-- HOST-LISTING-PAGE --> */}
        <div className="host-listing-wrap help-center-wrap location-grid-map-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <div className="host-listing-left">
                  <div className="host-listing-left-image">
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/chat/profile/1.svg"
                      alt=""
                    />
                    <img
                      className="host-batch-icon"
                      src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/batch.svg"
                      alt=""
                    />
                  </div>
                  <hr />
                  <h2>Mia J.</h2>
                  <p>Host</p>
                </div>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="host-listing-right">
                  <h3>About Host</h3>
                  <ul>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/work.svg"
                        alt=""
                      />{" "}
                      Lawyer
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/location.svg"
                        alt=""
                      />{" "}
                      New York, US
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/languages.svg"
                        alt=""
                      />{" "}
                      English & Hindi
                    </li>
                  </ul>
                  <div className="location-about">
                    <p className="active">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only. Lorem Ipsum
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      spec.
                    </p>
                    <a href="javascript:void(0);">Read more</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mt-4 mb-4">
                  <hr />
                </div>
                <div className="help-center-mid">
                  <h2>
                    Mia’s Listings{" "}
                    <a
                      href="javascript:void(0);"
                      data-bs-target="#listing-popup"
                      data-bs-toggle="modal"
                    >
                      View more <i className="fa-regular fa-chevron-right"></i>
                    </a>
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="location-grid-map-in">
                  <div className="location-grid-wrap">
                    {/* <!-- 1-LINE -->
                <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <div className="carousel-inner-top-heart">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                              alt=""
                              className="active"
                            />
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <a href="location.html">Cabin in Peshastin</a>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
                <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-2"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          {/* <!-- <h3><i className="fa-solid fa-bolt"></i> Instant book</h3> --> */}
                          <div className="carousel-inner-top-heart">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                              alt=""
                              className="active"
                            />
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-2"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-2"
                            data-bs-slide-to="1"
                            className="active"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-2"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-2"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item active">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-2"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-2"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <a href="location.html">Cabin in Peshastin</a>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
                <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-3"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <div className="carousel-inner-top-heart">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                              alt=""
                              className="active"
                            />
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-3"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-3"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-3"
                            data-bs-slide-to="2"
                            className="active"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-3"
                            data-bs-slide-to="3"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item active">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-3"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-3"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <a href="location.html">Cabin in Peshastin</a>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
                <!-- ITEM --> */}
                    <div className="location-grid-item">
                      <div
                        id="carouselExampleIndicators-4"
                        className="carousel slide"
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner-top">
                          <div className="carousel-inner-top-heart">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                              alt=""
                              className="active"
                            />
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="carousel-indicators">
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-4"
                            data-bs-slide-to="0"
                            aria-current="true"
                            aria-label="Slide 1"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-4"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-4"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                          ></button>
                          <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators-4"
                            data-bs-slide-to="3"
                            className="active"
                            aria-label="Slide 4"
                          ></button>
                        </div>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                          <div className="carousel-item">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        </div>
                        <button
                          className="carousel-control-prev"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-4"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                          className="carousel-control-next"
                          type="button"
                          data-bs-target="#carouselExampleIndicators-4"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                      <div className="carousel-inner-content">
                        <div className="carousel-inner-content-top">
                          <h1>
                            <a href="location.html">Cabin in Peshastin</a>
                          </h1>
                          <p>
                            <i className="fa-solid fa-clock"></i> $12 / h
                          </p>
                        </div>
                        <ul>
                          <li className="align-items-start">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                              alt=""
                            />
                            <span>5.0</span> (1k+)
                          </li>
                          <li>
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                              alt=""
                            />{" "}
                            37 miles away
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- ITEM -->
                <!-- 1-LINE --> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="location-reviews">
                  <div className="location-reviews-top">
                    <h1>
                      Reviews (30)
                      <span>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />{" "}
                        <b>4.9</b> Rating
                      </span>
                    </h1>
                    <p className="ms-auto me-1">Sort by:</p>
                    <div className="chat-left-top-dropdown dropdown">
                      <span
                        className="dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Highest Review
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/dropdown.svg"
                          alt=""
                        />
                      </span>
                      <div className="chat-left-top-dropdown-list dropdown-menu">
                        <ul>
                          <li>
                            <a href="javascript:void(0);">Highest Review</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Lowest Review</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Recent Reviews</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- LIST --> */}
                  <div className="location-reviews-list">
                    <div className="location-reviews-list-left">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/reviews/1.svg"
                        alt=""
                      />
                      <h2>
                        Emily James <br />{" "}
                        <span>Host was very helpful. thank you so much</span>
                      </h2>
                    </div>
                    <div className="location-reviews-list-right location-reviews-list-right-mob">
                      <div className="location-reviews-list-right-star">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                      </div>
                      <p>Mar 09, 22</p>
                    </div>
                  </div>
                  {/* <!-- LIST -->
              <!-- LIST --> */}
                  <div className="location-reviews-list">
                    <div className="location-reviews-list-left">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/reviews/2.svg"
                        alt=""
                      />
                      <h2>
                        Emily James <br />{" "}
                        <span>Host was very helpful. thank you so much</span>
                      </h2>
                    </div>
                    <div className="location-reviews-list-right">
                      <div className="location-reviews-list-right-star">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon-blank.svg"
                          alt=""
                        />
                      </div>
                      <p>Mar 09, 22</p>
                    </div>
                  </div>
                  {/* <!-- LIST -->
              <!-- LIST --> */}
                  <div className="location-reviews-list">
                    <div className="location-reviews-list-left">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/reviews/3.svg"
                        alt=""
                      />
                      <h2>
                        James Kristen <br />{" "}
                        <span>Host was very helpful. thank you so much</span>
                      </h2>
                    </div>
                    <div className="location-reviews-list-right">
                      <div className="location-reviews-list-right-star">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                      </div>
                      <p>Mar 09, 22</p>
                    </div>
                  </div>
                  {/* <!-- LIST -->
              <!-- LIST --> */}
                  <div className="location-reviews-list">
                    <div className="location-reviews-list-left">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/reviews/4.svg"
                        alt=""
                      />
                      <h2>
                        Michael Kenny <br />{" "}
                        <span>Host was very helpful. thank you so much</span>
                      </h2>
                    </div>
                    <div className="location-reviews-list-right">
                      <div className="location-reviews-list-right-star">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />
                      </div>
                      <p>Mar 09, 22</p>
                    </div>
                  </div>
                  {/* <!-- LIST --> */}
                  <button className="location-reviews-btn" type="button">
                    Show More Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- HOST-LISTING-PAGE --> */}
      </main>
      {/*  */}

      <AuthModal />
      <Footer />
    </>
  );
}

export default HostListing;
