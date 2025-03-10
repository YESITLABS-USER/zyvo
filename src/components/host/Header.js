import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { setUserType } from "../../store/slices/userSlice";
import Constant, { KEYS } from "../../config/Constant";
//

import Dropdown from "react-bootstrap/Dropdown";
import { Nav } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const images = [
    "/images/Host/home-icon-hostsvg.svg",
    "/images/nav-section/chat.svg",
    "/images/nav-section/wishlist.svg",
  ];

  const dispatch = useDispatch();
  const { userType } = useSelector(({ user }) => user);

  const links = ["/homeHost", "/booking-host", "/host-chat"];
  const [switchToGuest, setSwitchToGuest] = useState(false);

  useEffect(() => {
    if (switchToGuest) {
      dispatch(setUserType("guest"));
      Constant.selectedFlow = "guest";
      localStorage.setItem(KEYS.USER_TYPE, "guest");
      navigate("/profile");
    }
  }, [switchToGuest, dispatch, navigate]);

  const handleSwitch = (e) => {
    e.preventDefault(); // Prevents form refresh
    setSwitchToGuest(true); // Update state to trigger useEffect
  };

  return (
    <header>
      {/* DESKTOP & TABLET NAV */}

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
          <div className="navbar-brand" style={{ fontSize: "1.5rem", margin: "0 15px" }}>
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

            {links.map((link, index) => (
              <Nav.Item key={index} style={{ position: "relative", display: "inline-block", marginRight: "15px" }}>
                <Nav.Link as={Link} to={link} style={{ padding: "5px", display: "flex", alignItems: "center" }}>
                  <div style={{ position: "relative" }}>
                    <img
                      src={images[index]}
                      alt={`Icon ${index + 1}`}
                      style={{
                        height: "25px",
                        filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "-5px",
                        right: "-5px",
                        backgroundColor: "#2CD5A4",
                        color: "black",
                        borderRadius: "50%",
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "4px 6px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        minWidth: "18px",
                        minHeight: "18px",
                        lineHeight: "1",
                        zIndex: 10, // Ensures it stays on top
                      }}
                    >
                      2
                    </span>
                  </div>
                </Nav.Link>
              </Nav.Item>
            ))}

            {/* Dropdown Menu */}
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
                    overflow: "hidden",  // Prevents shadow overflow
                    padding: "5px"       // Ensures internal spacing
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
                      e.currentTarget.style.boxShadow = "inset 0px 0px 10px rgba(0, 0, 0, 0.1)";
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
                        Switch to Guest
                      </button>
                    </form>
                  </Dropdown.Item>
                  {[
                    { label: "Payment History", to: "/payment-host" },
                    { label: "Language", dataTarget: "#language-popup", dataToggle: "modal" },
                    { label: "Notifications", to: "/notifications", state: { type: "guest" } },
                    { label: "Help Center", to: "/helpCenter", state: { type: "guest" } },
                    { label: "Settings", to: "/profile-host" },
                    { label: "About Us", to: "/aboutUs" },
                    { label: "Logout", to: "/", dataTarget: "#logout-popup", dataToggle: "modal", action: () => navigate("/") }
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
                        e.currentTarget.style.boxShadow = "inset 0px 0px 10px rgba(0, 0, 0, 0.1)";
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
      <div className="mob-nav border-start-0 border-end-0">
        <div className="container-fluid">
          <ul>
            <li>
              <a href="My-places.html">
                <img src="images/Host/properties-mobile-icon.png" alt="" />
                Properties
              </a>
            </li>
            <li>
              <span>2</span>
              <a href="chat.html">
                <img src="images/mobile/nav/2.svg" alt="" /> Inbox
              </a>
            </li>
            <li>
              <span className="bookings">1</span>
              <a href="bookings-host.html">
                <img src="images/mobile/nav/3.svg" alt="" /> Bookings
              </a>
            </li>
            <li>
              <a href="profile-host.html" className="active">
                <img src="images/mobile/nav/5.svg" alt="" /> Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
