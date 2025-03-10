import React from "react";
import Header from "../../components/host/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";
function PaymentHost() {
  return (
    <>
      <Header />
      {/* this is for body */}

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
                      <img src="images/mobile/filters/filter.svg" alt="" />
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
              <div className="col-lg-9 col-md-6 order-lg-first">
                <div className="payment-history-header">
                  {/* <label className="daterange-btn">
                    <input
                      type="text"
                      readonly
                      className="input"
                      name="datefilter"
                      placeholder="Date range"
                    />
                    <img src="images/Host/date-range-host.svg" alt="" />
                  </label> */}
                  <div
                    className="filter-payment"
                    data-bs-toggle="modal"
                    data-bs-target="#filters-payment-history"
                  >
                    <img src="images/Host/filter-payment.svg" alt="" />
                    <p>Filter</p>
                  </div>
                </div>
                <div className="payment-wrap">
                  <div className="influ-table">
                    <div id="table-responsive-1" className="table-responsive">
                      <table>
                        <tbody>
                          <tr>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Guest Name</th>
                            <th>Date</th>
                          </tr>
                          <tr>
                            <td>$65.00</td>
                            <td>
                              <div className="pending-payment">Pending</div>
                            </td>
                            <td className="payment-img">
                              <img
                                src="images/Host/payment-guest-profile-pic.svg"
                                alt=""
                              />
                              Person Name
                            </td>
                            <td>May 10, 2023</td>
                          </tr>
                          <tr>
                            <td>$65.00</td>
                            <td>
                              <div className="pending-payment">Pending</div>
                            </td>
                            <td className="payment-img">
                              <img
                                src="images/Host/payment-guest-profile-pic.svg"
                                alt=""
                              />
                              Person Name
                            </td>
                            <td>May 10, 2023</td>
                          </tr>
                          <tr>
                            <td>$65.00</td>
                            <td>
                              <div className="completed-payment">Completed</div>
                            </td>
                            <td className="payment-img">
                              <img
                                src="images/Host/payment-guest-profile-pic.svg"
                                alt=""
                              />
                              Person Name
                            </td>
                            <td>May 10, 2023</td>
                          </tr>
                          <tr>
                            <td>$65.00</td>
                            <td>
                              <div className="completed-payment">Completed</div>
                            </td>
                            <td className="payment-img">
                              <img
                                src="images/Host/payment-guest-profile-pic.svg"
                                alt=""
                              />
                              Person Name
                            </td>
                            <td>May 10, 2023</td>
                          </tr>
                          <tr>
                            <td>$65.00</td>
                            <td>
                              <div className="completed-payment">Completed</div>
                            </td>
                            <td className="payment-img">
                              <img
                                src="images/Host/payment-guest-profile-pic.svg"
                                alt=""
                              />
                              Person Name
                            </td>
                            <td>May 10, 2023</td>
                          </tr>
                          <tr>
                            <td>$65.00</td>
                            <td>
                              <div className="completed-payment">Completed</div>
                            </td>
                            <td className="payment-img">
                              <img
                                src="images/Host/payment-guest-profile-pic.svg"
                                alt=""
                              />
                              Person Name
                            </td>
                            <td>May 10, 2023</td>
                          </tr>
                          <tr>
                            <td>$65.00</td>
                            <td>
                              <div className="">Canceled</div>
                            </td>
                            <td className="payment-img">
                              <img
                                src="images/Host/payment-guest-profile-pic.svg"
                                alt=""
                              />
                              Person Name
                            </td>
                            <td>May 10, 2023</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="influ-bottom">
                      <div className="chat-left-top-dropdown influ-drop dropdown">
                        <span
                          className="dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          10 per Page
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/dropdown.svg"
                            alt=""
                          />
                        </span>
                        <div
                          className="chat-left-top-dropdown-list dropdown-menu"
                          // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 25px);"
                          data-popper-placement="bottom-start"
                        >
                          <ul>
                            <li>
                              <a href="javascript:void(0);">10 per Page</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">20 per Page</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">30 per Page</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);">40 per Page</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="influ-pagi">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fas fa-chevron-left"></i>
                            </a>
                          </li>
                          <li className="active">
                            <a href="#">1</a>
                          </li>
                          <li>
                            <a href="#">2</a>
                          </li>
                          <li>
                            <a href="#">3</a>
                          </li>
                          <li>
                            <a href="#">4</a>
                          </li>
                          <li>
                            <a href="#">5</a>
                          </li>
                          <li>
                            <a href="#">6</a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-chevron-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="complete-your-profile-right next-payment-in">
                  <div className="complete-your-profile-right-top">
                    <div className="user-profile-upload-name">
                      <div className="next-payment-main">
                        <div className="next-payment-wrap">
                          <img src="images/Host/next-payment-icon.svg" alt="" />
                          <div className="next-payment-inner">
                            <p>Next Payment</p>
                            <h6>$2350.00</h6>
                          </div>
                        </div>
                        <h6>On May 15, 2023</h6>
                        <div className="withdraw-fundbtn">
                          <button
                            data-bs-toggle="modal"
                            data-bs-target="#withdraw-fund-popup"
                            type="button"
                          >
                            Withdraw Funds
                          </button>
                        </div>
                      </div>

                      <span className="info-wrap payment-info">
                        <img src="images/create-profile/info.svg" alt="" />
                        <span className="info-in">
                          For 'Standard' - 'Your Withdrawal has been initiated
                          successfully and will be deposited into your account
                          in 3-5 business days.'For 'Instant' - 'Your Withdrawal
                          has been initiated successfully and will be deposited
                          into your account in 30 minutes.'
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="addpayout-method">
                  <h6>Add payout Method</h6>
                </div>
                <div className="added-cards-detail-main">
                  <div className="debit-card-wrap">
                    <div className="">
                      <div className="chat-left-top-dropdown dropdown card-option">
                        <span
                          className="dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img src="images/Host/elipse.svg" alt="" />
                        </span>
                        <div className="chat-left-top-dropdown-list dropdown-menu">
                          <ul>
                            <li>
                              <a href="javascript:void(0);">Primary</a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                data-bs-target="#Delete-saved-property-popup"
                                data-bs-toggle="modal"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <img src="images/Host/Card-front.svg" alt="" />
                    <div className="debit-num">
                      <p>2296</p>
                      <div className="exp-date">
                        <p>
                          VALID <br /> THRU
                        </p>
                        <p>07/25</p>
                      </div>
                    </div>
                    <div className="debit-name">
                      <p>Cameron Williamson</p>
                    </div>
                  </div>
                  <div className="Bank-account-wrap">
                    <div className="">
                      <div className="chat-left-top-dropdown dropdown card-option">
                        <span
                          className="dropdown-toggle"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <img src="images/Host/elipse.svg" alt="" />
                        </span>
                        <div className="chat-left-top-dropdown-list dropdown-menu">
                          <ul>
                            <li>
                              <a href="javascript:void(0);">Primary</a>
                            </li>
                            <li>
                              <a
                                href="javascript:void(0);"
                                data-bs-target="#Delete-saved-property-popup"
                                data-bs-toggle="modal"
                              >
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <img src="images/Host/card-bank-account.svg" alt="" />
                    <div className="primary-mark">Primary</div>
                    <div className="bank-account-detail-main">
                      <div className="bankdetail">
                        <img src="images/Host/bank-name-icon.svg" alt="" />
                        <div className="bank-detail-inner">
                          <p>Bank Name</p>
                          <p>Bank of America</p>
                        </div>
                      </div>
                      <div className="bankdetail">
                        <img src="images/Host/account-number-icon.svg" alt="" />
                        <div className="bank-detail-inner">
                          <p>Account Number</p>
                          <p>**** **** **** ** 78</p>
                        </div>
                      </div>
                      <div className="bankdetail">
                        <img src="images/Host/routing-number-icon.svg" alt="" />
                        <div className="bank-detail-inner">
                          <p>Routing Number</p>
                          <p>xxxxxxxx6789</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
                          src="images/create-profile/mob-profile/1.svg"
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
                          src="images/create-profile/mob-profile/2.svg"
                          alt=""
                        />
                        Visit the Help Center
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="feedback.html">
                        <img
                          src="images/create-profile/mob-profile/3.svg"
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
                          src="images/create-profile/mob-profile/4.svg"
                          alt=""
                        />
                        Terms of services
                        <i className="fa-solid fa-chevron-right"></i>
                      </a>
                    </li>
                    <li>
                      <a href="privacy-policy.html">
                        <img
                          src="images/create-profile/mob-profile/4.svg"
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
                        src="images/create-profile/mob-profile/logout.svg"
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

      <Footer />
      <AuthModal />
    </>
  );
}

export default PaymentHost;
