import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUserType } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Constant, { KEYS } from "../../config/Constant";
import Dropdown from "react-bootstrap/Dropdown";
//

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userType } = useSelector(({ user }) => user);
  // console.log(userType, "userType data of userrrrr");
  const [switchTohost, setSwitchTohost] = useState(false);

  useEffect(() => {
    if (switchTohost) {
      dispatch(setUserType("host"));
      Constant.selectedFlow = "host";
      localStorage.setItem(KEYS.USER_TYPE, "host");
      navigate("/");
    }
  }, [switchTohost, dispatch, navigate]);

  const handleSwitch = (e) => {
    e.preventDefault(); // Prevents form refresh
    setSwitchTohost(true); // Update state to trigger useEffect
  };
  return (
    <>
      <header>
        {/* NAV - DESKTOP & TABLET */}
        <div className="nav-wrap">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/logo.svg"
                  alt=""
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="nav-inner">
                  <div className="nav-inner-right ms-auto">
                    <div className="nav-chat-time-wish">
                      <div className="nav-chat-time-wish-in">
                        <span>2</span>
                        <Link to="/booking">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/nav-section/bookings.svg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nav-chat-time-wish-in">
                        <span>2</span>
                        <a href="">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/nav-section/chat.svg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="nav-chat-time-wish-in">
                        <Link to="/wishlist">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/nav-section/wishlist.svg"
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className="nav-account-in">
                        <Dropdown>
                          {/* Profile Image as Dropdown Toggle */}
                          <Dropdown.Toggle
                            as="div"
                            id="dropdown-profile"
                            className="nav-account-in-profile"
                          >
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/nav-section/user-profile.png"
                              alt="User Profile"
                            />
                          </Dropdown.Toggle>

                          {/* Dropdown Menu */}
                          <Dropdown.Menu align="end">
                            <Dropdown.Item as="div">
                              <form onSubmit={handleSwitch}>
                                <button type="submit" className="dropdown-item">
                                  Switch to Host
                                </button>
                              </form>
                            </Dropdown.Item>
                            <Dropdown.Item as="a" href="">
                              Payment History
                            </Dropdown.Item>
                            <Dropdown.Item
                              // href="javascript:void(0);"
                              data-bs-target="#language-popup"
                              data-bs-toggle="modal"
                            >
                              Language
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/notifications" state={{type: "guest"}}>
                              Notifications
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/helpCenter" state={{type: "guest"}}>
                              Help Center
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/profile">
                              Settings
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to="/aboutUs">
                              About Us
                            </Dropdown.Item>
                            <Dropdown.Item
                              as={Link}
                              to="/"
                              data-bs-target="#logout-popup"
                              data-bs-toggle="modal"
                              onClick={() => navigate("/")}
                            >
                              Logout
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* MOBILE NAV */}
        <div className="mob-nav border-start-0 border-end-0">
          <div className="container-fluid">
            <ul>
              <li>
                <a href="home.html">
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/1.svg"
                    alt=""
                  />
                  Discover
                </a>
              </li>
              <li>
                <span>2</span>
                <a href="">
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/2.svg"
                    alt=""
                  />
                  Inbox
                </a>
              </li>
              <li>
                <span className="bookings">1</span>
                <a href="bookings.html">
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/3.svg"
                    alt=""
                  />
                  Bookings
                </a>
              </li>
              <li>
                <a href="wishlist.html">
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/4.svg"
                    alt=""
                  />
                  Wishlists
                </a>
              </li>
              <li>
                <a href="profile.html" className="active">
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/5.svg"
                    alt=""
                  />
                  Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
