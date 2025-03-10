import React from "react";
import Header from "../../components/guest/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";
import { Link } from "react-router-dom";

function Bookings() {
  return (
    <>
      <Header />

      {/* bookings */}

      <main>
        {/* <!-- MOBILE --> */}
        <div className="mob-search-filter border-start-0 border-end-0 mob-booking-filter">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-filter-in ms-auto dropdown">
                    <a
                      href="javascript:void(0);"
                      className="dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/mobile/filters/filter.svg"
                        alt=""
                      />
                    </a>
                    <div className="dropdown-menu">
                      <ul>
                        <li>
                          <a href="javascript:void(0);">All Bookings</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Confirmed</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Pending</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Finished</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Cancelled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE -->
    <!-- MY-MOB-BOOKINGS --> */}
        <div className="mob-bookings-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-bookings-in">
                  <a href="mob-booking-details.html">
                    <div className="mob-bookings-in-image">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                        alt=""
                      />
                    </div>
                    <div className="mob-bookings-in-content">
                      <h1>Cabin in Peshastin</h1>
                      <div className="mob-bookings-in-content-bottom">
                        <div className="booking-tag">Finished</div>
                        <h2>October 22, 2023</h2>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="mob-bookings-in">
                  <a href="mob-booking-details.html">
                    <div className="mob-bookings-in-image">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                        alt=""
                      />
                    </div>
                    <div className="mob-bookings-in-content">
                      <h1>Cabin in Peshastin</h1>
                      <div className="mob-bookings-in-content-bottom">
                        <div className="booking-tag confirmed">Confirmed</div>
                        <h2>October 22, 2023</h2>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="mob-bookings-in">
                  <a href="mob-booking-details.html">
                    <div className="mob-bookings-in-image">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                        alt=""
                      />
                    </div>
                    <div className="mob-bookings-in-content">
                      <h1>Cabin in Peshastin</h1>
                      <div className="mob-bookings-in-content-bottom">
                        <div className="booking-tag waiting">
                          Waiting payment
                        </div>
                        <h2>October 22, 2023</h2>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="mob-bookings-in">
                  <a href="mob-booking-details.html">
                    <div className="mob-bookings-in-image">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                        alt=""
                      />
                    </div>
                    <div className="mob-bookings-in-content">
                      <h1>Cabin in Peshastin</h1>
                      <div className="mob-bookings-in-content-bottom">
                        <div className="booking-tag canceled">Canceled</div>
                        <h2>October 22, 2023</h2>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MY-MOB-BOOKINGS -->

    <!-- BOOKING-PAGE --> */}
        <div className="booking-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="chat-left">
                  <div className="chat-left-top">
                    <form action="">
                      <div className="chat-left-top-dropdown dropdown">
                        <span
                          className="dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          All Bookings
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/dropdown.svg"
                            alt=""
                          />
                        </span>
                        <div className="chat-left-top-dropdown-list dropdown-menu">
                          <ul>
                            <li>
                              <a href="javascript:void(0);">All Bookings</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Confirmed</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Pending</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Finished</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">Cancelled</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <button type="button">
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                  <div
                    className="chat-list"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="chat-list-in nav-link active"
                      id="v-pills-1-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-1"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-1"
                      aria-selected="true"
                    >
                      <div className="chat-list-in-image h-100 p-0 border-0 rounded-1">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                          className="rounded-3"
                          alt=""
                        />
                      </div>
                      <div className="chat-list-in-content">
                        <h1>Cabin in Peshastin</h1>
                        <h2>October 22, 2023</h2>
                        <div className="booking-tag">Finished</div>
                      </div>
                    </button>
                    <button
                      className="chat-list-in nav-link"
                      id="v-pills-2-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-2"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-2"
                      aria-selected="true"
                    >
                      <div className="chat-list-in-image h-100 p-0 border-0 rounded-1">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                          className="rounded-3"
                          alt=""
                        />
                      </div>
                      <div className="chat-list-in-content">
                        <h1>Cabin in Peshastin</h1>
                        <h2>October 22, 2023</h2>
                        <div className="booking-tag confirmed">Confirmed</div>
                      </div>
                    </button>
                    <button
                      className="chat-list-in nav-link"
                      id="v-pills-3-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-3"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-3"
                      aria-selected="true"
                    >
                      <div className="chat-list-in-image h-100 p-0 border-0 rounded-1">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                          className="rounded-3"
                          alt=""
                        />
                      </div>
                      <div className="chat-list-in-content">
                        <h1>Cabin in Peshastin</h1>
                        <h2>October 24, 2023</h2>
                        <div className="booking-tag waiting">
                          Waiting payment
                        </div>
                      </div>
                    </button>
                    <button
                      className="chat-list-in nav-link"
                      id="v-pills-4-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-4"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-4"
                      aria-selected="true"
                    >
                      <div className="chat-list-in-image h-100 p-0 border-0 rounded-1">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                          className="rounded-3"
                          alt=""
                        />
                      </div>
                      <div className="chat-list-in-content">
                        <h1>Cabin in Peshastin</h1>
                        <h2>October 22, 2023</h2>
                        <div className="booking-tag canceled">Canceled</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="chat-mid">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-1"
                      role="tabpanel"
                      aria-labelledby="v-pills-1-tab"
                      tabindex="0"
                    >
                      <div className="booking-mid-section">
                        <div className="booking-mid-top location-top">
                          <h2>
                            Cabin in Peshastin{" "}
                            <div className="booking-tag">Finished</div>
                          </h2>
                          <ul>
                            {/* <!-- RIGHT --> */}
                            <li className="location-top-share">
                              <a
                                href="javascript:void(0);"
                                data-bs-target="#share-popup"
                                data-bs-toggle="modal"
                              >
                                <i className="fa-solid fa-share-nodes"></i>{" "}
                                Share
                              </a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#add-wishlist"
                              >
                                <i className="fa-solid fa-heart"></i> Wishlist
                              </a>
                            </li>
                            {/* <!-- RIGHT --> */}
                          </ul>
                        </div>
                        <div className="location-image-grid">
                          <div className="location-image-grid-one">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/1.svg"
                              alt=""
                            />
                          </div>
                          <div className="location-image-grid-four">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/2.svg"
                              alt=""
                            />
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/3.svg"
                              alt=""
                            />
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/4.svg"
                              alt=""
                            />
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/5.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="location-left">
                          <h2>Booking Details</h2>
                          <div className="booking-details">
                            <ul>
                              <li>
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/filters/calendar-icon.svg"
                                  alt=""
                                />{" "}
                                October 22, 2023
                              </li>
                              <li>
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/filters/time.svg"
                                  alt=""
                                />{" "}
                                2 hours | From 01pm to 03pm
                              </li>
                              <li>
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/filters/price.svg"
                                  alt=""
                                />{" "}
                                $30
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="location-left">
                          <h2>Included in your booking</h2>
                          <div className="location-included">
                            <ul>
                              <li>
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                                  alt=""
                                />{" "}
                                Parking
                              </li>
                              <li>
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/location/included/2.svg"
                                  alt=""
                                />{" "}
                                Wifi
                              </li>
                              <li>
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/location/included/3.svg"
                                  alt=""
                                />{" "}
                                2 Rooms
                              </li>
                              <li>
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/location/included/4.svg"
                                  alt=""
                                />{" "}
                                Kitchen
                              </li>
                              <li>
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/location/included/5.svg"
                                  alt=""
                                />{" "}
                                Tables
                              </li>
                              <li>
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/location/included/6.svg"
                                  alt=""
                                />{" "}
                                Chairs
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="location-left">
                          <h2>Rules</h2>
                          <div className="location-rules">
                            <div className="accordion" id="accordionExample">
                              <div className="accordion-item">
                                <h3
                                  className="accordion-header"
                                  id="headingOne"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                                      alt=""
                                    />{" "}
                                    Parking
                                  </button>
                                </h3>
                                <div
                                  id="collapseOne"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    This is the first item's accordion body. It
                                    is shown by default, until the collapse
                                    plugin adds the appropriate classNamees that
                                    we use to style each element. These
                                    classNamees control the overall appearance,
                                    as well as the showing and hiding via CSS
                                    transitions. You can modify any of this with
                                    custom CSS or overriding our default
                                    variables. It's also worth noting that just
                                    about any HTML can go within the, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h3
                                  className="accordion-header"
                                  id="headingTwo"
                                >
                                  <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/location/included/7.svg"
                                      alt=""
                                    />{" "}
                                    Host rules
                                  </button>
                                </h3>
                                <div
                                  id="collapseTwo"
                                  className="accordion-collapse collapse"
                                  aria-labelledby="headingTwo"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="accordion-body">
                                    This is the first item's accordion body. It
                                    is shown by default, until the collapse
                                    plugin adds the appropriate classNamees that
                                    we use to style each element. These
                                    classNamees control the overall appearance,
                                    as well as the showing and hiding via CSS
                                    transitions. You can modify any of this with
                                    custom CSS or overriding our default
                                    variables. It's also worth noting that just
                                    about any HTML can go within the, though the
                                    transition does limit overflow.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="location-left">
                          <h2>Address &amp; Location</h2>
                          <p>
                            <u>Midtown Manhattan, New York, NY</u>
                          </p>
                          <div className="address-location-map">
                            <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.139268703457!2d-133.14340392403935!3d55.4776704131501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540e467f9dd315f3%3A0xf4eae0d4d7764524!2s245%20Cold%20Storage%20Rd%2C%20Craig%2C%20AK%2099921%2C%20USA!5e0!3m2!1sen!2sin!4v1723457458145!5m2!1sen!2sin"
                              width="600"
                              height="450"
                              // style="border:0;"
                              allowfullscreen=""
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                          </div>
                        </div>
                        <div className="location-left">
                          <div className="location-reviews">
                            <div className="location-reviews-top">
                              <h1>
                                Reviews (30)
                                <span>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                                    alt=""
                                  />{" "}
                                  <b>4.9</b>
                                  Rating
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
                                      <a href="javascript:void(0);">
                                        Highest Review
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">
                                        Lowest Review
                                      </a>
                                    </li>
                                    <li>
                                      <a href="javascript:void(0);">
                                        Recent Reviews
                                      </a>
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
                                  <span>
                                    Host was very helpful. thank you so much
                                  </span>
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
                                  <span>
                                    Host was very helpful. thank you so much
                                  </span>
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
                                  <span>
                                    Host was very helpful. thank you so much
                                  </span>
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
                                  <span>
                                    Host was very helpful. thank you so much
                                  </span>
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
                            <button
                              className="location-reviews-btn"
                              type="button"
                            >
                              Show More Reviews
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-2"
                      role="tabpanel"
                      aria-labelledby="v-pills-2-tab"
                      tabindex="0"
                    >
                      <div className="chat-mid-top">
                        <div className="booking-mid-section">
                          <div className="booking-mid-top location-top">
                            <h2>
                              Cabin in Peshastin{" "}
                              <div className="booking-tag confirmed">
                                Confirmed
                              </div>
                            </h2>
                            <ul>
                              {/* <!-- RIGHT --> */}
                              <li className="location-top-share">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-target="#share-popup"
                                  data-bs-toggle="modal"
                                >
                                  <i className="fa-solid fa-share-nodes"></i>{" "}
                                  Share
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <i className="fa-solid fa-heart"></i> Wishlist
                                </a>
                              </li>
                              {/* <!-- RIGHT --> */}
                            </ul>
                          </div>
                          <div className="location-image-grid">
                            <div className="location-image-grid-one">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/1.svg"
                                alt=""
                              />
                            </div>
                            <div className="location-image-grid-four">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/2.svg"
                                alt=""
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/3.svg"
                                alt=""
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/4.svg"
                                alt=""
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/5.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Booking Details</h2>
                            <div className="booking-details">
                              <ul>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/calendar-icon.svg"
                                    alt=""
                                  />{" "}
                                  October 22, 2023
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/time.svg"
                                    alt=""
                                  />{" "}
                                  2 hours | From 01pm to 03pm
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/price.svg"
                                    alt=""
                                  />{" "}
                                  $30
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Included in your booking</h2>
                            <div className="location-included">
                              <ul>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                                    alt=""
                                  />{" "}
                                  Parking
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/2.svg"
                                    alt=""
                                  />{" "}
                                  Wifi
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/3.svg"
                                    alt=""
                                  />{" "}
                                  2 Rooms
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/4.svg"
                                    alt=""
                                  />{" "}
                                  Kitchen
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/5.svg"
                                    alt=""
                                  />{" "}
                                  Tables
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/6.svg"
                                    alt=""
                                  />{" "}
                                  Chairs
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Rules</h2>
                            <div className="location-rules">
                              <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h3
                                    className="accordion-header"
                                    id="headingOne"
                                  >
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      <img
                                        src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                                        alt=""
                                      />{" "}
                                      Parking
                                    </button>
                                  </h3>
                                  <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      This is the first item's accordion body.
                                      It is shown by default, until the collapse
                                      plugin adds the appropriate classNamees
                                      that we use to style each element. These
                                      classNamees control the overall
                                      appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify
                                      any of this with custom CSS or overriding
                                      our default variables. It's also worth
                                      noting that just about any HTML can go
                                      within the, though the transition does
                                      limit overflow.
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3
                                    className="accordion-header"
                                    id="headingTwo"
                                  >
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                      aria-expanded="false"
                                      aria-controls="collapseTwo"
                                    >
                                      <img
                                        src="https://design.yilstaging.com/ZYVO/assets/images/location/included/7.svg"
                                        alt=""
                                      />{" "}
                                      Host rules
                                    </button>
                                  </h3>
                                  <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      This is the first item's accordion body.
                                      It is shown by default, until the collapse
                                      plugin adds the appropriate classNamees
                                      that we use to style each element. These
                                      classNamees control the overall
                                      appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify
                                      any of this with custom CSS or overriding
                                      our default variables. It's also worth
                                      noting that just about any HTML can go
                                      within the, though the transition does
                                      limit overflow.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Address &amp; Location</h2>
                            <p>
                              <u>Midtown Manhattan, New York, NY</u>
                            </p>
                            <div className="address-location-map">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.139268703457!2d-133.14340392403935!3d55.4776704131501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540e467f9dd315f3%3A0xf4eae0d4d7764524!2s245%20Cold%20Storage%20Rd%2C%20Craig%2C%20AK%2099921%2C%20USA!5e0!3m2!1sen!2sin!4v1723457458145!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                // style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </div>
                          </div>
                          <div className="location-left">
                            <div className="location-reviews">
                              <div className="location-reviews-top">
                                <h1>
                                  Reviews (30)
                                  <span>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                                      alt=""
                                    />{" "}
                                    <b>4.9</b>
                                    Rating
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
                                        <a href="javascript:void(0);">
                                          Highest Review
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Lowest Review
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Recent Reviews
                                        </a>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                              <button
                                className="location-reviews-btn"
                                type="button"
                              >
                                Show More Reviews
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-3"
                      role="tabpanel"
                      aria-labelledby="v-pills-3-tab"
                      tabindex="0"
                    >
                      <div className="chat-mid-top">
                        <div className="booking-mid-section">
                          <div className="booking-mid-top location-top">
                            <h2>
                              Cabin in Peshastin{" "}
                              <div className="booking-tag waiting">
                                Waiting payment
                              </div>
                            </h2>
                            <ul>
                              {/* <!-- RIGHT --> */}
                              <li className="location-top-share">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-target="#share-popup"
                                  data-bs-toggle="modal"
                                >
                                  <i className="fa-solid fa-share-nodes"></i>{" "}
                                  Share
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <i className="fa-solid fa-heart"></i> Wishlist
                                </a>
                              </li>
                              {/* <!-- RIGHT --> */}
                            </ul>
                          </div>
                          <div className="location-image-grid">
                            <div className="location-image-grid-one">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/1.svg"
                                alt=""
                              />
                            </div>
                            <div className="location-image-grid-four">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/2.svg"
                                alt=""
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/3.svg"
                                alt=""
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/4.svg"
                                alt=""
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/5.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Booking Details</h2>
                            <div className="booking-details">
                              <ul>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/calendar-icon.svg"
                                    alt=""
                                  />{" "}
                                  October 22, 2023
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/time.svg"
                                    alt=""
                                  />{" "}
                                  2 hours | From 01pm to 03pm
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/price.svg"
                                    alt=""
                                  />{" "}
                                  $30
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Included in your booking</h2>
                            <div className="location-included">
                              <ul>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                                    alt=""
                                  />{" "}
                                  Parking
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/2.svg"
                                    alt=""
                                  />{" "}
                                  Wifi
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/3.svg"
                                    alt=""
                                  />{" "}
                                  2 Rooms
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/4.svg"
                                    alt=""
                                  />{" "}
                                  Kitchen
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/5.svg"
                                    alt=""
                                  />{" "}
                                  Tables
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/6.svg"
                                    alt=""
                                  />{" "}
                                  Chairs
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Rules</h2>
                            <div className="location-rules">
                              <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h3
                                    className="accordion-header"
                                    id="headingOne"
                                  >
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      <img
                                        src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                                        alt=""
                                      />{" "}
                                      Parking
                                    </button>
                                  </h3>
                                  <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      This is the first item's accordion body.
                                      It is shown by default, until the collapse
                                      plugin adds the appropriate classNamees
                                      that we use to style each element. These
                                      classNamees control the overall
                                      appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify
                                      any of this with custom CSS or overriding
                                      our default variables. It's also worth
                                      noting that just about any HTML can go
                                      within the, though the transition does
                                      limit overflow.
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3
                                    className="accordion-header"
                                    id="headingTwo"
                                  >
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                      aria-expanded="false"
                                      aria-controls="collapseTwo"
                                    >
                                      <img
                                        src="https://design.yilstaging.com/ZYVO/assets/images/location/included/7.svg"
                                        alt=""
                                      />{" "}
                                      Host rules
                                    </button>
                                  </h3>
                                  <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      This is the first item's accordion body.
                                      It is shown by default, until the collapse
                                      plugin adds the appropriate classNamees
                                      that we use to style each element. These
                                      classNamees control the overall
                                      appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify
                                      any of this with custom CSS or overriding
                                      our default variables. It's also worth
                                      noting that just about any HTML can go
                                      within the, though the transition does
                                      limit overflow.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Address &amp; Location</h2>
                            <p>
                              <u>Midtown Manhattan, New York, NY</u>
                            </p>
                            <div className="address-location-map">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.139268703457!2d-133.14340392403935!3d55.4776704131501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540e467f9dd315f3%3A0xf4eae0d4d7764524!2s245%20Cold%20Storage%20Rd%2C%20Craig%2C%20AK%2099921%2C%20USA!5e0!3m2!1sen!2sin!4v1723457458145!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                // style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </div>
                          </div>
                          <div className="location-left">
                            <div className="location-reviews">
                              <div className="location-reviews-top">
                                <h1>
                                  Reviews (30)
                                  <span>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                                      alt=""
                                    />{" "}
                                    <b>4.9</b>
                                    Rating
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
                                        <a href="javascript:void(0);">
                                          Highest Review
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Lowest Review
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Recent Reviews
                                        </a>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                              <button
                                className="location-reviews-btn"
                                type="button"
                              >
                                Show More Reviews
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-4"
                      role="tabpanel"
                      aria-labelledby="v-pills-4-tab"
                      tabindex="0"
                    >
                      <div className="chat-mid-top">
                        <div className="booking-mid-section">
                          <div className="booking-mid-top location-top">
                            <h2>
                              Cabin in Peshastin{" "}
                              <div className="booking-tag canceled">
                                Canceled
                              </div>
                            </h2>
                            <ul>
                              {/* <!-- RIGHT --> */}
                              <li className="location-top-share">
                                <a
                                  href="javascript:void(0);"
                                  data-bs-target="#share-popup"
                                  data-bs-toggle="modal"
                                >
                                  <i className="fa-solid fa-share-nodes"></i>{" "}
                                  Share
                                </a>
                              </li>
                              <li>
                                <a href="javascript:void(0);">
                                  <i className="fa-solid fa-heart"></i> Wishlist
                                </a>
                              </li>
                              {/* <!-- RIGHT --> */}
                            </ul>
                          </div>
                          <div className="location-image-grid">
                            <div className="location-image-grid-one">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/1.svg"
                                alt=""
                              />
                            </div>
                            <div className="location-image-grid-four">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/2.svg"
                                alt=""
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/3.svg"
                                alt=""
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/4.svg"
                                alt=""
                              />
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/grid/5.svg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Booking Details</h2>
                            <div className="booking-details">
                              <ul>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/calendar-icon.svg"
                                    alt=""
                                  />{" "}
                                  October 22, 2023
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/time.svg"
                                    alt=""
                                  />{" "}
                                  2 hours | From 01pm to 03pm
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/price.svg"
                                    alt=""
                                  />{" "}
                                  $30
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Included in your booking</h2>
                            <div className="location-included">
                              <ul>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                                    alt=""
                                  />{" "}
                                  Parking
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/2.svg"
                                    alt=""
                                  />{" "}
                                  Wifi
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/3.svg"
                                    alt=""
                                  />{" "}
                                  2 Rooms
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/4.svg"
                                    alt=""
                                  />{" "}
                                  Kitchen
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/5.svg"
                                    alt=""
                                  />{" "}
                                  Tables
                                </li>
                                <li>
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/included/6.svg"
                                    alt=""
                                  />{" "}
                                  Chairs
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Rules</h2>
                            <div className="location-rules">
                              <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                  <h3
                                    className="accordion-header"
                                    id="headingOne"
                                  >
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    >
                                      <img
                                        src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                                        alt=""
                                      />{" "}
                                      Parking
                                    </button>
                                  </h3>
                                  <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      This is the first item's accordion body.
                                      It is shown by default, until the collapse
                                      plugin adds the appropriate classNamees
                                      that we use to style each element. These
                                      classNamees control the overall
                                      appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify
                                      any of this with custom CSS or overriding
                                      our default variables. It's also worth
                                      noting that just about any HTML can go
                                      within the, though the transition does
                                      limit overflow.
                                    </div>
                                  </div>
                                </div>
                                <div className="accordion-item">
                                  <h3
                                    className="accordion-header"
                                    id="headingTwo"
                                  >
                                    <button
                                      className="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseTwo"
                                      aria-expanded="false"
                                      aria-controls="collapseTwo"
                                    >
                                      <img
                                        src="https://design.yilstaging.com/ZYVO/assets/images/location/included/7.svg"
                                        alt=""
                                      />{" "}
                                      Host rules
                                    </button>
                                  </h3>
                                  <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                  >
                                    <div className="accordion-body">
                                      This is the first item's accordion body.
                                      It is shown by default, until the collapse
                                      plugin adds the appropriate classNamees
                                      that we use to style each element. These
                                      classNamees control the overall
                                      appearance, as well as the showing and
                                      hiding via CSS transitions. You can modify
                                      any of this with custom CSS or overriding
                                      our default variables. It's also worth
                                      noting that just about any HTML can go
                                      within the, though the transition does
                                      limit overflow.
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="location-left">
                            <h2>Address &amp; Location</h2>
                            <p>
                              <u>Midtown Manhattan, New York, NY</u>
                            </p>
                            <div className="address-location-map">
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.139268703457!2d-133.14340392403935!3d55.4776704131501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540e467f9dd315f3%3A0xf4eae0d4d7764524!2s245%20Cold%20Storage%20Rd%2C%20Craig%2C%20AK%2099921%2C%20USA!5e0!3m2!1sen!2sin!4v1723457458145!5m2!1sen!2sin"
                                width="600"
                                height="450"
                                // style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                              ></iframe>
                            </div>
                          </div>
                          <div className="location-left">
                            <div className="location-reviews">
                              <div className="location-reviews-top">
                                <h1>
                                  Reviews (30)
                                  <span>
                                    <img
                                      src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                                      alt=""
                                    />{" "}
                                    <b>4.9</b>
                                    Rating
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
                                        <a href="javascript:void(0);">
                                          Highest Review
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Lowest Review
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Recent Reviews
                                        </a>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                                    <span>
                                      Host was very helpful. thank you so much
                                    </span>
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
                              <button
                                className="location-reviews-btn"
                                type="button"
                              >
                                Show More Reviews
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="chat-right">
                  <div className="chat-right-top">
                    <h3>Hosted by</h3>
                    <div className="chat-right-top-profile">
                      <img
                        className="chat-right-top-profile-image"
                        src="https://design.yilstaging.com/ZYVO/assets/images/chat/profile/1.svg"
                        alt=""
                      />
                      <h2>Mia J.</h2>
                      <img
                        className="chat-right-top-batch-image"
                        src="https://design.yilstaging.com/ZYVO/assets/images/bookings/verify-star.svg"
                        alt=""
                      />
                    </div>
                    <hr />
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#review-booking-popup"
                      className="mb-2 review-btn"
                    >
                      Review Booking
                    </a>
                    <Link to="/chathost" className="mb-2">
                      Message the Host
                    </Link>
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#report-violation-popup"
                    >
                      Report an Issue
                    </a>
                  </div>
                  <div className="chat-right-bottom bg-white">
                    <div className="chat-right-bottom-in">
                      <div className="chat-right-bottom-in-image h-100">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                          alt=""
                        />
                      </div>
                      <div className="chat-right-bottom-in-text">
                        <h1>Cabin in Peshastin</h1>
                        <p>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                            alt=""
                          />{" "}
                          <span>5.0</span>(1k+)
                        </p>
                        <p>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                            alt=""
                          />{" "}
                          37 miles away
                        </p>
                      </div>
                    </div>
                    <hr />
                    <ul>
                      <li>
                        2 Hours <span>$300</span>
                      </li>
                      <li>
                        Cleaning Fee <span>$20</span>
                      </li>
                      <li>
                        Zyvo Service Fee <span>$2</span>
                      </li>
                      <li>
                        Taxes <span>$10</span>
                      </li>
                      <li>
                        Add-on <span>$2</span>
                      </li>
                      <li className="total-cost">
                        Total <span>$322</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BOOKING-PAGE --> */}

        {/* for booking modal or review modal */}
        <div
          className="modal fade custom-modal"
          id="review-booking-popup"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
                <h2>Review Booking</h2>
                <form className="mt-4">
                  {["Response Rate", "Communication", "Property"].map(
                    (category, index) => (
                      <div className="full-stars-example-two" key={index}>
                        <h4>{category}</h4>
                        <div className="rating-group">
                          <input
                            disabled
                            defaultChecked
                            className="rating__input rating__input--none"
                            name={`rating${index + 1}`}
                            id={`rating${index + 1}-none`}
                            value="0"
                            type="radio"
                          />
                          {[...Array(5)].map((_, i) => (
                            <React.Fragment key={i}>
                              <input
                                className="rating__input"
                                name={`rating${index + 1}`}
                                id={`rating${index + 1}-${i + 1}`}
                                value={i + 1}
                                type="radio"
                              />
                              <label
                                aria-label={`${i + 1} star`}
                                className="rating__label"
                                htmlFor={`rating${index + 1}-${i + 1}`}
                              >
                                <img
                                  className="rating__icon rating__icon--star"
                                  src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon-blank.svg"
                                  alt="star blank"
                                />
                                <img
                                  className="rating__icon rating__icon-blank-star"
                                  src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                                  alt="star filled"
                                />
                              </label>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                  <textarea
                    placeholder="Message.."
                    className="form-control mt-3"
                  />
                  <div className="custom-modal-label d-flex gap-3 mt-3">
                    <input
                      type="submit"
                      value="Publish Review"
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/* report voilation */}

        <div
          className="modal fade custom-modal"
          id="report-violation-popup"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="modal-body">
                <h2>Report Violation</h2>
                <hr />
                <form className="mt-1 align-items-start">
                  <p className="mb-0 text-start">
                    <b>Please select a reason for reporting this user.</b>
                  </p>
                  <div className="chat-left-top-dropdown dropdown">
                    <span
                      className="dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/dropdown.svg"
                        alt="dropdown icon"
                      />
                    </span>
                    <div className="chat-left-top-dropdown-list dropdown-menu">
                      <ul>
                        {[
                          "Inappropriate Content",
                          "Misleading Information",
                          "Spam or Scam",
                          "Harassment",
                          "Discrimination",
                          "Other Issue",
                        ].map((reason, index) => (
                          <li key={index}>
                            <a href="javascript:void(0);">{reason}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <p className="mb-0 text-start">
                    <b>Add Additional Details</b>
                  </p>
                  <textarea defaultValue="You can also add additional details to help us investigate further." />
                  <div className="custom-modal-label d-flex gap-3">
                    <input
                      type="button"
                      value="Submit Report"
                      data-bs-dismiss="modal"
                      data-bs-target="#password-changed-successfully-popup"
                      data-bs-toggle="modal"
                    />
                  </div>
                  <p>
                    Your report has been submitted. Thank you for helping us
                    maintain a safe and respectful community.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <AuthModal />
      <Footer />
    </>
  );
}

export default Bookings;
