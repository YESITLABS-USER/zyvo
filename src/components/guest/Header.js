import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setUserType } from "../../store/slices/userSlice";
import Constant, { KEYS } from "../../config/Constant";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userType } = useSelector(({ user }) => user);
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
    e.preventDefault();
    setSwitchTohost(true);
  };

  return (
    <header>
      {/* NAV - DESKTOP & TABLET */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white"
        style={{
          position: "relative",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#f0f2f5",
          padding: "15px 20px",
          zIndex: 1000,
          width: "100%",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* LOGO */}
          <div
            className="navbar-brand"
            style={{ fontSize: "1.5rem", margin: "0 15px" }}
          >
            <Link to="/">
              <img
                src="https://design.yilstaging.com/ZYVO/assets/images/logo.svg"
                alt="Logo"
                style={{ height: "40px" }}
              />
            </Link>
          </div>

          {/* NAV ITEMS */}
          <Nav className="d-flex align-items-center">
            {/* Bookings Icon */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/booking"
                style={{ position: "relative", padding: "5px" }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "8px",
                    backgroundColor: "#2CD5A4",
                    color: "black",
                    borderRadius: "50%",
                    fontSize: "12px",
                    fontWeight: "bold",
                    padding: "4px 7px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "18px",
                    minHeight: "18px",
                    lineHeight: "1",
                  }}
                >
                  2
                </span>
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/nav-section/bookings.svg"
                  alt="Bookings"
                  style={{
                    marginRight: "10px",
                    height: "25px",
                    filter:
                      "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                  }}
                />
              </Nav.Link>
            </Nav.Item>

            {/* Chat Icon */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/location"
                style={{ position: "relative", padding: "5px" }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "10px",
                    backgroundColor: "#2CD5A4",
                    color: "black",
                    borderRadius: "50%",
                    fontSize: "12px",
                    fontWeight: "bold",
                    padding: "4px 7px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: "18px",
                    minHeight: "18px",
                    lineHeight: "1",
                  }}
                >
                  2
                </span>
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/nav-section/chat.svg"
                  alt="Chat"
                  style={{
                    marginRight: "10px",
                    height: "25px",
                    filter:
                      "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                  }}
                />
              </Nav.Link>
            </Nav.Item>

            {/* Wishlist Icon */}
            <Nav.Item>
              <Nav.Link as={Link} to="/wishlist" style={{ padding: "5px" }}>
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/nav-section/wishlist.svg"
                  alt="Wishlist"
                  style={{
                    marginRight: "10px",
                    height: "25px",
                    filter:
                      "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                  }}
                />
              </Nav.Link>
            </Nav.Item>
            {/* Profile Dropdown */}
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  as="div"
                  id="dropdown-profile"
                  className="nav-account-in-profile"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/nav-section/user-profile.png"
                    alt="User Profile"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "2px solid #D1D1D1",
                    }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  align="end"
                  style={{
                    minWidth: "200px",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    border: "none",
                    overflow: "hidden", // Prevents shadow overflow
                    padding: "5px", // Ensures internal spacing
                  }}
                >
                  <Dropdown.Item
                    as="div"
                    style={{
                      padding: "3px",
                      borderRadius: "10px",
                      transition: "0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#8195b8";
                      e.currentTarget.style.boxShadow =
                        "inset 0px 0px 10px rgba(0, 0, 0, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <form onSubmit={handleSwitch}>
                      <button
                        type="submit"
                        className="dropdown-item"
                        style={{
                          border: "none",
                          background: "none",
                          width: "100%",
                          textAlign: "left",
                          borderRadius: "10px",
                        }}
                      >
                        Switch to Host
                      </button>
                    </form>
                  </Dropdown.Item>
                  {[
                    { label: "Payment History", to: "/payment-history" },
                    {
                      label: "Language",
                      dataTarget: "#language-popup",
                      dataToggle: "modal",
                    },
                    {
                      label: "Notifications",
                      to: "/notifications",
                      state: { type: "guest" },
                    },
                    {
                      label: "Help Center",
                      to: "/helpCenter",
                      state: { type: "guest" },
                    },
                    { label: "Settings", to: "/profile" },
                    { label: "About Us", to: "/aboutUs" },
                    {
                      label: "Logout",
                      to: "/",
                      dataTarget: "#logout-popup",
                      dataToggle: "modal",
                      action: () => navigate("/"),
                    },
                  ].map((item, index) => (
                    <Dropdown.Item
                      key={index}
                      as={item.to ? Link : "div"}
                      to={item.to}
                      state={item.state}
                      data-bs-target={item.dataTarget}
                      data-bs-toggle={item.dataToggle}
                      onClick={item.action}
                      style={{
                        padding: "8px",
                        borderRadius: "10px",
                        transition: "0.3s",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#8195b8";
                        e.currentTarget.style.boxShadow =
                          "inset 0px 0px 10px rgba(0, 0, 0, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {item.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </div>
      </nav>
      {/* MOBILE NAV */}
      <div
        className="mob-nav border-start-0 border-end-0"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
          padding: "10px 0",
          zIndex: 1000,
        }}
      >
        <div className="container-fluid">
          <ul className="d-flex justify-content-around align-items-center list-unstyled m-0 p-0">
            <li>
              <Link to="/home">
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/1.svg"
                  alt="Discover"
                />
                Discover
              </Link>
            </li>
            <li>
              <span className="badge">2</span>
              <Link to="/inbox">
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/2.svg"
                  alt="Inbox"
                />
                Inbox
              </Link>
            </li>
            <li>
              <span className="bookings">1</span>
              <Link to="/bookings">
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/3.svg"
                  alt="Bookings"
                />
                Bookings
              </Link>
            </li>
            <li>
              <Link to="/wishlist">
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/4.svg"
                  alt="Wishlists"
                />
                Wishlists
              </Link>
            </li>
            <li>
              <Link to="/profile" className="active">
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/5.svg"
                  alt="Profile"
                />
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
