import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ResetPassword from "./ResetPassword";
import Loader from "../../Loader";

function VerificationModal({
  show,
  onHide,
  LoginVerification,
  veficationByEmailOpen,
  regiserMail,
  createPassword,
}) {
  //
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //
  const {
    numOtpVerify,
    registerUser,
    otp_verify_login_phone,
    otp_verify_forgot_password,
    otp_verify_signup_email,
    signup_email,
    forgot_password_email,
    isLoading,
  } = useAuth();
  //
  const [error, setError] = useState(null);

  const [otp, setOtp] = useState(["", "", "", ""]);

  const [canResend, setCanResend] = useState(false);
  //
  const [timeLeft, setTimeLeft] = useState(59);

  const [resentModal, setResentModal] = useState(false);

  const user = useSelector((state) => state?.user?.userInfo);

  // console.log(user, createPassword, "hello user comes form usr output");

  //

  const handleOTPSubmit = async (data) => {
    const otp = `${data?.otp0}${data?.otp1}${data?.otp2}${data?.otp3}`;
    // console.log(otp, "jdfkjashdsdssd");

    const param = {
      temp_id: user?.temp_id,
      otp: otp,
    };

    // console.log(param, "params ssssss");

    // console.log(user?.otp === otp, "otp tru or false");
    // Validate OTP format (must be exactly 4 digits and numeric)
    if (!/^\d{4}$/.test(otp)) {
      setError("Please enter a valid 4-digit numeric OTP.");
      return;
    }

    // Check if OTP matches the expected one
    if (otp != user?.otp) {
      setError("Incorrect OTP. Please try again.");
      return;
    }
    // console.log(LoginVerification, "get data sdfashfdksahfd");

    try {
      if (regiserMail === "regiserMail") {
        const responseMail = await otp_verify_signup_email({
          temp_id: user?.temp_id,
          otp: otp,
        });
        if (responseMail) {
          // console.log(responseMail, "response *** of verifiy otp");
          onHide();
          navigate("/create-profile");
        }
      } else if (veficationByEmailOpen === "veficationByEmailOpen") {
        const emailResponse = await otp_verify_forgot_password({
          user_id: user?.user_id,
          otp: otp,
        });
        if (emailResponse) {
          // console.log(emailResponse, "hello user data");
          setResentModal(true);
          onHide();
        }
      } else {
        const response = LoginVerification
          ? await otp_verify_login_phone({
              user_id: user?.user_id,
              otp: otp,
            })
          : await numOtpVerify({
              temp_id: user?.temp_id,
              otp: otp,
            });

        if (response) {
          if (LoginVerification) {
            navigate("/");
            // console.log("API Response: of logn verification", response);
            setError(""); // Clear error on success
            onHide();
          } else {
            navigate("/create-profile");
            // console.log("API Response:", response);
            setError(""); // Clear error on success
          }
        }
      }
    } catch (error) {
      console.error("Error submitting OTP:", error);
      setError("Failed to verify OTP. Please try again.");
    }
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    let newOtp = [...otp];

    // Allow only digits (0-9) and prevent more than one character
    if (!/^\d?$/.test(value)) return;

    // Update OTP array
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next field if a digit is entered
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    // Handle backspace: Move to previous field if empty
    if (
      e.nativeEvent.inputType === "deleteContentBackward" &&
      index > 0 &&
      !value
    ) {
      newOtp[index] = "";
      setOtp(newOtp);
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleResend = () => {
    if (!canResend) return;
    // console.log("Resend OTP");
    setTimeLeft(59);
    setCanResend(false);
    resendApi();
    // Add resend OTP logic here
  };

  // Timer for resend button
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  // api hit resend

  const resendApi = async () => {
    try {
      // let user_num = user?.otp_send_to; // "+919958717309"
      // let clean_num = user_num.replace(/^(\+91)/, "");

      let user_num = user?.otp_send_to; // Example: "+919958717309", "+11234567890", "+441234567890"

      // List of possible country codes
      const countryCodes = ["+91", "+1", "+44", "+61", "+971"]; // Add more as needed

      // Find matching country code
      let country_code =
        countryCodes.find((code) => user_num.startsWith(code)) || "";

      // Remove the country code to get the clean number
      let clean_num = country_code
        ? user_num.replace(country_code, "")
        : user_num;

      // console.log("Country Code:", country_code); // Output: "+91"
      // console.log("Clean Number:", clean_num); // Output: "9958717309"

      if (regiserMail === "regiserMail") {
        const emailResponse = await signup_email({
          email: user?.otp_send_to,
          password: createPassword,
          fcm_token: "fg446654g6fdgg",
          device_type: "web",
        });
        if (emailResponse) {
          // console.log(
          //   emailResponse,
          //   "resent otp response on the email login verification"
          // );
        }
      } else if (veficationByEmailOpen === "veficationByEmailOpen") {
        const emailResponse = await forgot_password_email({
          email: user?.email,
        });
        // console.log(emailResponse, "email response data comes");
      } else {
        const response = await registerUser({
          phone_number: clean_num, // Use dynamic value
          country_code: country_code,
          fcm_token: "bfbfb498b4644",
          device_type: "web",
        });
        // console.log(response, "resend with phone numbers");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Loader visible={isLoading} />
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            OTP Verification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <p className="mb-3">
            Please type the verification code sent to{" "}
            <b>{user?.otp_send_to || user?.email}</b>
          </p>
          <form
            className="mb-3"
            onSubmit={handleSubmit(handleOTPSubmit)}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="otp-verification-code"
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              {[0, 1, 2, 3]?.map((index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="number"
                  className="otp-verification-code-in"
                  style={{
                    width: "50px",
                    height: "50px",
                    textAlign: "center",
                    fontSize: "20px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                  {...register(`otp${index}`)}
                  onInput={(e) => handleInput(e, index)}
                />
              ))}
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="custom-modal-label" style={{ marginTop: "10px" }}>
              <input
                type="submit"
                value="Submit"
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  border: "none",
                  background: "#007bff",
                  color: "#fff",
                  cursor: "pointer",
                }}
              />
            </div>
          </form>
          <p>
            Didn't receive the verification code?{" "}
            <a
              href="javascript:void(0);"
              onClick={handleResend}
              style={{
                color: canResend ? "blue" : "gray",
                cursor: canResend ? "pointer" : "not-allowed",
              }}
            >
              Resend
            </a>
          </p>
          <p className="mb-0">
            Resend verification code in <span>{timeLeft}</span> sec
          </p>
        </Modal.Body>
      </Modal>
      <ResetPassword
        show={resentModal}
        handleClose={() => setResentModal(false)}
      />
    </>
  );
}

export default VerificationModal;
