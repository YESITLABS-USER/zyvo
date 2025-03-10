import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterModal from "./authModalGuest/RegisterModal";

const Footer = () => {
  const [regModl, setRegModl] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return (
    <>
      <footer>
        <div className="footer-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-inner">
                  <div className="footer-inner-item">
                    <h2>Join Newsletter</h2>
                    <form>
                      <label>
                        <input type="text" placeholder="Enter email address" />
                        <button type="submit">
                          <i className="fa-solid fa-paper-plane"></i>
                        </button>
                      </label>
                    </form>
                  </div>
                  <div className="footer-inner-item">
                    <h2>Company</h2>
                    <h3>
                      <Link to="/faq">Faq</Link>
                    </h3>
                    <h3>
                      <Link to="/whyus">Why Us</Link>
                    </h3>
                    <h3>
                      <Link to="/contactUs">Contact Us</Link>
                    </h3>
                  </div>
                  <div className="footer-inner-item">
                    <h2>Account</h2>
                    <h3>
                      <a
                        href="#"
                        // data-bs-toggle="modal"
                        // data-bs-target="#register-phone-popup"
                        onClick={() => setRegModl(true)}
                      >
                        Register
                      </a>
                    </h3>
                    <h3>
                      <a
                        href="#"
                        // data-bs-toggle="modal"
                        // data-bs-target="#login-phone-popup"
                        onClick={() => setLoginModal(true)}
                      >
                        Login
                      </a>
                    </h3>
                  </div>
                  <div className="footer-inner-item">
                    <h2>Resources</h2>
                    <h3>
                      <a href="#">Become a host</a>
                    </h3>
                    <h3>
                      <Link to="/explore-articles">Blog Articles</Link>
                    </h3>
                    <h3>
                      <a href="#">Explore Now</a>
                    </h3>
                  </div>
                  <div className="footer-inner-item">
                    <h2>Follow Us</h2>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-payment-icons">
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/footer/payments.svg"
                    alt="Payment Methods"
                  />
                </div>
                <div className="footer-inner-bottom">
                  <p>Zyvo © Copyright 2024</p>
                  <div className="logo">
                    <a href="home.html">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/fevicon.svg"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <ul>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>|</li>
                    <li>
                      <Link to="/terms-condn">Terms of Service</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RegisterModal
          show={regModl}
          onHide={() => setRegModl(false)}
          CallBack={(bool) => setRegModl(bool)}
          loginModal={true}
        />

        <RegisterModal
          show={loginModal}
          onHide={() => setLoginModal(false)}
          CallBack={(bool) => setLoginModal(bool)}
          loginModal={false}
        />
      </footer>
    </>
  );
};

export default Footer;
