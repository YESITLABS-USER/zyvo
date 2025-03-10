import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

import { CountryDropdown } from "react-country-region-selector";
import VerificationModal from "./VerificationModal";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ForgotWithEmail from "./ForgotWithEmail";
import EmailLoginModal from "./LoginWithEmail";
import Loader from "../../Loader";
import countries from "world-countries";


function RegisterModal(props) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, numOtpVerify, LoginWithPhone, isLoading } = useAuth();
  const [selectedCountryFlag, setSelectedCountryFlag] = useState('')
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const [switchLogin, setSwitchLogin] = useState(false);

  //
  const [logigWithEmailModle, setLoingWithEmailModle] = useState(false);


  const [selectedCountry, setSelectedCountry] = useState(""); // Default country

  const [forgotEmailModal, setForgotemailModal] = useState(false);

  const [vefiModl, setVefiModl] = useState(false);
  const [LoginVerification, setloginVerification] = useState(false);
  //
  const countryCodes = {
    India: "+91",
    USA: "+1",
    UK: "+44",
    Canada: "+1",
    Australia: "+61",
  };

  function getCountryInfo(countryName) {
    const country = countries.find(c => c.name.common.toLowerCase() === countryName.toLowerCase());
    if (!country) return "Country not found";

    setSelectedCountryFlag(`https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`)
    setSelectedCountryCode(`${country.idd.root}${country.idd.suffixes ? country.idd.suffixes[0] : ""}`)
    setSelectedCountry(countryName)
  }

  console.log(selectedCountry)
  console.log(selectedCountryCode)
  console.log(selectedCountryFlag)
  const onSubmit = async (data, event) => {
    event?.preventDefault();

    // Only proceed if there are no errors
    if (Object.keys(errors)?.length === 0) {
      try {
        const response = props?.loginModal
          ? await registerUser({
            phone_number: data?.phoneNumber, // Use dynamic value
            country_code: selectedCountryCode,
            fcm_token: "bfbfb498b4644",
            device_type: "web",
          })
          : await LoginWithPhone({
            phone_number: data?.phoneNumber, // Use dynamic value
            country_code: selectedCountryCode,
            fcm_token: "bfbfb498b4644",
            device_type: "web",
          });
          // console.log(response);
        if (response) {
          if (props?.loginModal) {
            console.log(response, "response of register modal");
            props?.CallBack(false);
            setVefiModl(true);
          } else {
            setloginVerification(true);
            props?.CallBack(false);
            setVefiModl(true);
            console.log(response, "response of user phone number");
            // navigate("/create-profile");
          }
        }
      } catch (error) {
        alert("Wrong phone number");
        console.error("Login error:", error);
      }
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}
        style={{
          padding: "20px !importent"
        }}
        {...props}
        size={548}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Loader visible={isLoading} />
        <Modal.Header closeButton style={{ border: "none", paddingBottom: "0px" }} />
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="w-100 text-center"
          style={{ fontWeight: "400", fontSize: "28px", color: '#000000', marginBottom: "10px", fontFamily: "sans-serif poppins" }}
        >
          {props?.loginModal ? "Register Now" : "Login"}
        </Modal.Title>
        <hr
          style={{
            width: "93%",
            display: "block",
            margin: "5px auto",
            border: "2px",
            borderTop: "1px solid #ddd",
            opacity: "1"
          }}
        />

        <Modal.Body className="text-center" style={{ fontFamily: "sans-serif" }}>
          <h3 style={{ fontSize: "22px", fontWeight: "530", color: '#000000', marginBottom: "20px", fontFamily: "sans-serif" }}>
            Welcome to Zyvo
          </h3>
          <p style={{ fontSize: "14px", color: '#000000' }}>
            {props?.loginModal
              ? "Enter your phone number to register your account."
              : "Enter your phone number to login your account."}
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Phone Input Section */}
            <div
              className="custom-modal-label d-flex align-items-center gap-2"
              style={{
                marginBottom: "15px",
                width: "100%",
                backgroundColor: "#fff",
                border: "2px solid #ccc",
                borderRadius: "50px",
                padding: "5px 15px",
                height: "45px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* Country Dropdown */}
              <CountryDropdown
                value={selectedCountry}
                onChange={(val) => getCountryInfo(val)}
                style={{
                  width: "30%",
                  fontSize: "14px",
                  padding: "10px",
                  borderRadius: "40px",
                  border: "none",
                  height: "45px",
                  textAlign: "center",
                  background: "transparent",
                  outline: "none",
                  flexShrink: 0,
                }}
              />

              {/* Vertical Divider */}
              <div style={{ width: "1.5px", height: "60%", backgroundColor: "#ccc" }} />

              {/* Phone Input Section with Flag */}
              <div style={{ position: "relative", flex: 1, display: "flex", alignItems: "center" }}>
                {/* Country Flag */}
                {selectedCountryFlag && (
                  <img
                    src={selectedCountryFlag}
                    alt="Country Flag"
                    style={{
                      width: "25px",
                      height: "18px",
                      borderRadius: "3px",
                    }}
                  />
                )}
                {/* Phone Number Input */}
                <input
                  type="tel"
                  id="mobile_code"
                  placeholder="Enter your number here"
                  {...register("phoneNumber", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Phone number must be exactly 10 digits",
                    },
                  })}
                  className="form-control"
                  style={{
                    flex: 1,
                    height: "45px",
                    borderRadius: "40px",
                    border: "none",
                    fontSize: "14px",
                    outline: "none",
                    background: "transparent",
                    padding: "10px",
                    boxShadow: "none",
                  }}
                />
              </div>
            </div>

            {/* Error Message */}
            {errors.phoneNumber && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "-10px" }}>
                {errors.phoneNumber.message}
              </p>
            )}

            {/* Continue Button */}
            <div className="custom-modal-label mt-3">
              <Button
                type="submit"
                style={{
                  backgroundColor: "#4AEAB1",
                  borderRadius: "30px",
                  border: "none",
                  padding: "12px 0",
                  width: "100%",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Continue
              </Button>
            </div>

            {/* Remember Me & Forgot Password */}
            {!props?.loginModal && (
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <label style={{ display: "flex", alignItems: "center", fontSize: "14px", color: "#555" }}>
                  <input
                    type="checkbox"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginRight: "5px",
                      cursor: "pointer",
                      accentColor: "#4AEAB1",
                    }}
                  />Remember me
                </label>
                <span
                  style={{ fontSize: "14px", color: "#007bff", cursor: "pointer" }}
                  onClick={() => {
                    setForgotemailModal(true);
                    props?.onHide();
                  }}
                >
                  Forgot password?
                </span>
              </div>
            )}
          </form>


          <hr />
          <p>-OR-</p>
          <p>Login with</p>
          <div className="login-with-icons d-flex justify-content-center">
            {/* <ul className="list-unstyled d-flex gap-3">
              {["google", "facebook", "apple", "mail"].map((provider) => (
                <li key={provider}>
                  <a href="#">
                    <img
                      src={`https://design.yilstaging.com/ZYVO/assets/images/popups/${provider}.svg`}
                      alt={`${provider} Login`}
                      width="40"
                    />
                  </a>
                </li>
              ))}
            </ul> */}

            <ul className="list-unstyled d-flex gap-3">
              {["google", "facebook", "apple", "mail"].map((provider) => (
                <li key={provider}>
                  <a
                    href="#"
                    onClick={(e) => {
                      if (provider === "mail") {
                        e.preventDefault();

                        if (props?.loginModal) {
                          setLoingWithEmailModle(true);

                          props?.onHide();
                          setSwitchLogin(false);
                        } else {
                          setLoingWithEmailModle(true);

                          props?.onHide();
                          setSwitchLogin(true);
                        }
                      }
                    }}
                  >
                    <img
                      src={`https://design.yilstaging.com/ZYVO/assets/images/popups/${provider}.svg`}
                      alt={`${provider} Login`}
                      width="40"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          <div>
            {props?.loginModal
              ? (<div>
                <p>Already have an account?</p>
                <div className="bottom-btn">
                  <Button
                    variant="link"
                    onClick={() => {
                      props.onHide();
                    }}
                  >
                    Login Here
                  </Button>
                </div>
              </div>)
              : (<div>
                <p>Don't have an account?</p>
                <div className="bottom-btn">
                  <Button
                    variant="link"
                    onClick={() => {
                      props.onHide();
                    }}
                  >
                    Register Now
                  </Button>
                </div>
              </div>)}
          </div>
        </Modal.Body>
      </Modal>

      <VerificationModal
        show={vefiModl}
        onHide={() => setVefiModl(false)}
        LoginVerification={LoginVerification}
      />
      <ForgotWithEmail
        show={forgotEmailModal}
        handleClose={() => setForgotemailModal(false)}
      />
      <EmailLoginModal
        show={logigWithEmailModle}
        handleClose={() => {
          setLoingWithEmailModle(false);
        }}
        toggleModel={switchLogin}
      />
    </>
  );
}

export default RegisterModal;
