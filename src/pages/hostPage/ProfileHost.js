import React from "react";
import Header from "../../components/host/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";

function ProfileHost() {
  return (
    <>
      <Header />

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

        <div className="complete-your-profile">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="complete-your-profile-right">
                  <div className="complete-your-profile-right-top">
                    <div className="user-profile-upload-name">
                      <div className="user-profile-upload">
                        <div className="user-profile-upload-image">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/profile.png"
                            alt=""
                          />
                        </div>
                        <button
                          data-bs-toggle="modal"
                          data-bs-target="#add-profile-picture-popup"
                          type="button"
                        >
                          <i className="fa-solid fa-pen"></i>
                        </button>
                      </div>
                      <div className="user-profile-name">
                        <h2>
                          Hey Katelyn!
                          <button type="button">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                          <span className="user-name-dropdown">
                            <form>
                              <label>
                                <input type="text" placeholder="First name*" />
                                <input type="text" placeholder="Last name*" />
                              </label>
                              <input type="submit" value="Save Changes" />
                            </form>
                          </span>
                        </h2>
                        <p>
                          {" "}
                          Guest
                          <span className="info-wrap">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/info.svg"
                              alt=""
                            />
                            <span className="info-in">
                              Before you can book or host on the platform the
                              name on Id must match verification documents.
                            </span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="complete-your-profile-right-bottom">
                    <div className="complete-your-profile-right-bottom-in">
                      <div className="complete-your-profile-right-bottom-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mail.svg"
                          alt=""
                        />
                      </div>
                      <div className="complete-your-profile-right-bottom-data">
                        <h1>Email Address</h1>
                        <p>
                          Verified <i className="fa-solid fa-badge-check"></i>
                        </p>
                        {/* <!-- <a href="javascript:void(0);" data-bs-toggle="modal"
                      data-bs-target="#confirm-email-popup"><u>Confirm now</u></a> --> */}
                      </div>
                    </div>
                    <div className="complete-your-profile-right-bottom-in">
                      <div className="complete-your-profile-right-bottom-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/call.svg"
                          alt=""
                        />
                      </div>
                      <div className="complete-your-profile-right-bottom-data">
                        <h1>Phone Number</h1>
                        <p>
                          Verified <i className="fa-solid fa-badge-check"></i>
                        </p>
                        {/* <!-- <a href="javascript:void(0);" data-bs-toggle="modal"
                      data-bs-target="#confirm-phone-popup"><u>Confirm now</u></a> --> */}
                      </div>
                    </div>
                    <div className="complete-your-profile-right-bottom-in">
                      <div className="complete-your-profile-right-bottom-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/identity.svg"
                          alt=""
                        />
                      </div>
                      <div className="complete-your-profile-right-bottom-data">
                        <h1>Verify identity</h1>
                        <p>
                          Verified <i className="fa-solid fa-badge-check"></i>
                        </p>
                        {/* <!-- <a href="javascript:void(0);"><u>Confirm now</u></a> --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 order-lg-first">
                <div className="complete-your-profile-left">
                  <form action="">
                    <h2>
                      About Me{" "}
                      <button type="button">
                        <i className="fa-solid fa-pen"></i>
                      </button>
                    </h2>
                    <div className="about-me">
                      <textarea
                        disabled
                        value="
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took. Lorem Ipsum is simply
                        dummy text of the printing and typesetting industry."
                      />
                    </div>
                    <div className="user-data-list-wrap">
                      <h2>Where I live*</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item">
                          <input
                            type="text"
                            placeholder="New York, US"
                            id="where-search"
                          />
                          <button type="button">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                          <div className="user-data-list-dropdown">
                            <ul>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                    alt=""
                                  />
                                  Alaska, US
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                    alt=""
                                  />
                                  California, US
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                    alt=""
                                  />
                                  Delaware, US
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                    alt=""
                                  />
                                  Florida, US
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/where-icons.svg"
                                    alt=""
                                  />
                                  New York, US
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <h2>My work</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item my-work">
                          <input type="text" placeholder="Lawyer" />
                          <button type="button" className="check">
                            <i className="fa-solid fa-check"></i>
                          </button>
                          <div className="user-data-list-dropdown">
                            <ul>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/work.svg"
                                    alt=""
                                  />
                                  Lawyer
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/work.svg"
                                    alt=""
                                  />
                                  Lawyer
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <h2>Languages I speak*</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item languages">
                          <input type="text" placeholder="English" />
                          <button type="button">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                          <div className="user-data-list-dropdown">
                            <ul>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/languages.svg"
                                    alt=""
                                  />
                                  English
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/languages.svg"
                                    alt=""
                                  />
                                  English
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <h2>Hobbies</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item hobbies">
                          <input type="text" placeholder="Hobbies" />
                          <button type="button" className="check">
                            <i className="fa-solid fa-check"></i>
                          </button>
                          <div className="user-data-list-dropdown">
                            <ul>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/hobbies.svg"
                                    alt=""
                                  />
                                  Sports
                                </a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/list-icons/hobbies.svg"
                                    alt=""
                                  />
                                  Sports
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <h2>Pets</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item pets">
                          <input type="text" placeholder="Pets" />
                          <button type="button">
                            <i className="fa-solid fa-xmark"></i>
                          </button>
                          <div className="user-data-list-dropdown">
                            <ul>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">Dog</a>
                              </li>
                              <li className="where-src-item">
                                <a href="javascript:void(0);">Dog</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button type="button" className="add-new-btn">
                          Add New <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <h2>Email</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item input-field">
                          <input
                            type="text"
                            placeholder="Enter Your Email"
                            value="Katelyncris@email.com"
                          />
                          <button type="button" className="edit-field">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                      <h2>Phone Number</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item input-field">
                          <input
                            type="text"
                            placeholder="Enter Your Phone Number"
                            value="***********4567"
                          />
                          <button type="button" className="edit-field">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                      </div>
                      <h2>Password</h2>
                      <div className="user-data-list-inner">
                        <div className="user-data-list-item input-field">
                          <input
                            type="password"
                            placeholder="Enter Your Password"
                            value="***********"
                          />
                          <button
                            type="button"
                            data-bs-target="#confirm-email-popup"
                            data-bs-toggle="modal"
                            className="edit-field"
                          >
                            <i className="fa-solid fa-check"></i>
                          </button>
                        </div>
                      </div>
                      <h2>Mailing Address</h2>
                      <div className="user-data-list-inner mailing-address-wrap">
                        {/* <!-- ITEM --> */}
                        <div className="user-data-list-item input-field">
                          <input type="text" placeholder="Street" />
                          <button type="button" className="edit-field">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                        {/* <!-- ITEM -->
                    <!-- ITEM --> */}
                        <div className="user-data-list-item input-field">
                          <input type="text" placeholder="City" />
                          <button type="button" className="edit-field">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                        {/* <!-- ITEM -->
                    <!-- ITEM --> */}
                        <div className="user-data-list-item input-field">
                          <input type="text" placeholder="State" />
                          <button type="button" className="edit-field">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                        {/* <!-- ITEM -->
                    <!-- ITEM --> */}
                        <div className="user-data-list-item input-field">
                          <input type="text" placeholder="Zip Code" />
                          <button type="button" className="edit-field">
                            <i className="fa-solid fa-pen"></i>
                          </button>
                        </div>
                        {/* <!-- ITEM --> */}
                      </div>
                      <h2 className="payment-method">
                        Payment Methods{" "}
                        <span className="payment-method-dropdown-btn">
                          <i className="fa-solid fa-chevron-down"></i>
                        </span>
                        <div className="saved-cards">
                          <div className="saved-cards-in">
                            <div className="saved-cards-list">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/payment-methods/visa.svg"
                                alt=""
                              />
                              <h4>....365890</h4>
                              <p>Preferred</p>
                              <div className="card-control-btn">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                <span className="card-control-dropdown">
                                  <span className="card-control-dropdown-in">
                                    <a href="javascript:void(0);">Remove</a>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="saved-cards-list">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/payment-methods/visa.svg"
                                alt=""
                              />
                              <h4>....365890</h4>
                              <div className="card-control-btn">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                <span className="card-control-dropdown">
                                  <span className="card-control-dropdown-in">
                                    <a href="javascript:void(0);">
                                      Make as Preferred
                                    </a>
                                    <a href="javascript:void(0);">Remove</a>
                                  </span>
                                </span>
                              </div>
                            </div>
                            <div className="saved-cards-list">
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/payment-methods/visa.svg"
                                alt=""
                              />
                              <h4>....365890</h4>
                              <div className="card-control-btn">
                                <i className="fa-solid fa-ellipsis-vertical"></i>
                                <span className="card-control-dropdown">
                                  <span className="card-control-dropdown-in">
                                    <a href="javascript:void(0);">
                                      Make as Preferred
                                    </a>
                                    <a href="javascript:void(0);">Remove</a>
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </h2>
                      <div className="user-data-list-inner">
                        <button type="button" className="add-new-btn add-card">
                          Add Card <i className="fa-solid fa-plus"></i>
                        </button>
                        <div className="add-card-details">
                          <h5>Add Card Details</h5>
                          <input type="text" placeholder="Name" />
                          <input type="text" placeholder="Card Number" />
                          <input type="text" placeholder="CVV Number" />
                          <div className="add-card-details-in">
                            <select>
                              <option value="1">Month</option>
                              <option value="2">Jan</option>
                              <option value="3">Feb</option>
                              <option value="4">Mar</option>
                              <option value="5">Apr</option>
                            </select>
                            <select>
                              <option value="1">Year</option>
                              <option value="2">2020</option>
                              <option value="3">2021</option>
                              <option value="4">2022</option>
                              <option value="5">2023</option>
                            </select>
                          </div>
                          <h5 className="mt-2">Add Billing Address</h5>
                          <input type="text" placeholder="Street" />
                          <input type="text" placeholder="City" />
                          <input type="text" placeholder="State" />
                          <input type="text" placeholder="Zip Code" />
                          <label>
                            {" "}
                            <input type="checkbox" /> Same as Mailing Address{" "}
                          </label>
                          <input
                            type="button"
                            value="Submit"
                            data-bs-target="#card-added-successfully-popup"
                            data-bs-toggle="modal"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="user-data-btn">
                      <button type="submit">Save Changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE --> */}
        <div className="mob-profile-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-profile-bottom-in">
                  <h2>Useful Pages</h2>
                  <ul>
                    <li>
                      <a href="notifications.html">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/1.svg"
                          alt=""
                        />
                        Notifications
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="help-center.html">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/2.svg"
                          alt=""
                        />
                        Visit the Help Center
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="feedback.html">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/3.svg"
                          alt=""
                        />
                        Give us feedback
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                  <h2>Legal</h2>
                  <ul>
                    <li>
                      <a href="terms-of-services.html">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/4.svg"
                          alt=""
                        />
                        Terms of services
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/4.svg"
                          alt=""
                        />
                        Privacy policy
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                  </ul>
                  <div className="mob-profile-bottom-in-btns">
                    <button
                      type="button"
                      data-bs-target="#logout-popup"
                      data-bs-toggle="modal"
                    >
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/mob-profile/logout.svg"
                        alt=""
                      />
                      Logout
                    </button>
                    <a href="">Switch to Host</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE --> */}
      </main>
      <AuthModal />
      <Footer />
    </>
  );
}

export default ProfileHost;
