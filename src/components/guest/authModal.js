import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Modal } from "bootstrap";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";

const AuthModal = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const { loginUser, numOtpVerify } = useAuth();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(59);
  const [canResend, setCanResend] = useState(false);

  const user = useSelector((state) => state?.user?.userInfo);
  // console.log(user, "hello user data");

  const onSubmit = async (data, event) => {
    event?.preventDefault(); // Prevent default form behavior

    // Only proceed if there are no errors
    if (Object.keys(errors).length === 0) {
      try {
        const response = await loginUser({
          phone_number: data?.phoneNumber, // Use dynamic value
          country_code: "+91",
          fcm_token: "bfbfb498b4644",
          device_type: "web",
        });
        if (response) {
          const currentModalEl = document.getElementById(
            "register-phone-popup"
          );
          if (currentModalEl) {
            const currentModal =
              Modal.getInstance(currentModalEl) || new Modal(currentModalEl);
            currentModal.hide();
          }
          // Remove modal backdrop manually
          document
            .querySelectorAll(".modal-backdrop")
            .forEach((backdrop) => backdrop.remove());
          // navigate("/create-profile");
          const otpModal = new Modal(
            document.getElementById("phone-otp-verification-popup")
          );
          otpModal.show();
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  //

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);
  // for verification
  const handleOTPSubmit = async (data) => {
    const otp = `${data.otp0}${data.otp1}${data.otp2}${data.otp3}`;
    // console.log(otp.length, "jdfkjashdsdssd");
    // Check if any field is empty
    if (otp.length !== 4) {
      setError("Please enter a valid 4-digit OTP.");
      return;
    }

    try {
      const response = await numOtpVerify({
        temp_id: user?.temp_id,
        otp: otp,
      });

      if (response) {
        navigate("/create-profile");
        // console.log("API Response:", response);
        setError(""); // Clear error on success

        const currentModalEl = document.getElementById(
          "phone-otp-verification-popup"
        );
        if (currentModalEl) {
          const currentModal =
            Modal.getInstance(currentModalEl) || new Modal(currentModalEl);
          currentModal.hide();
        }
      }
    } catch (error) {
      console.error("Error submitting OTP:", error);
      setError("Failed to verify OTP. Please try again.");
    }
  };
  const handleResend = () => {
    if (canResend) {
      resendApi(); // Call the resend function passed as a prop
      setTimeLeft(59); // Restart the timer
      setCanResend(false);
    }
  };

  const resendApi = async () => {
    try {
      let user_num = user?.otp_send_to; // "+919958717309"
      let clean_num = user_num.replace(/^(\+91)/, "");

      const response = await loginUser({
        phone_number: clean_num, // Use dynamic value
        country_code: "+91",
        fcm_token: "bfbfb498b4644",
        device_type: "web",
      });
      // console.log(response, "resend user name");
    } catch (error) {
      // console.log(error);
    }
  };

  const handleInput = (e, index) => {
    const { value } = e.target;
    const isBackspace = e.nativeEvent.inputType === "deleteContentBackward"; // Detect backspace

    // Allow only a single digit
    e.target.value = value.replace(/\D/g, "").slice(0, 1);
    setValue(`otp${index}`, e.target.value);

    // Move to the next field if a digit is entered
    if (e.target.value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    // Move to the previous field if backspace is pressed and field is empty
    if (isBackspace && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handlelogout = () => {
    navigate("/");
  };
  return (
    <>
      {/* for register  */}

      <div
        className="modal fade custom-modal"
        id="register-phone-popup"
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
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>Register Now</h2>
              <hr />
              <h3>Welcome to Zyvo</h3>
              <p className="mb-3">
                Enter your phone number to register your account.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="custom-modal-label">
                  <input
                    type="tel"
                    id="mobile_code"
                    placeholder="Enter your number here"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{10}$/, // Ensures exactly 10 digits
                        message: "Phone number must be exactly 10 digits",
                      },
                    })}
                    style={{ paddingLeft: "10px" }}
                  />
                  {errors.phoneNumber && (
                    <p style={{ color: "red" }}>{errors.phoneNumber.message}</p>
                  )}
                </div>

                <div className="custom-modal-label">
                  <input type="submit" value="Continue" />
                </div>
              </form>

              <hr />
              <p>-OR-</p>
              <p>Login with</p>
              <div className="login-with-icons">
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/google.svg"
                        alt="Google Login"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/facebook.svg"
                        alt="Facebook Login"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/apple.svg"
                        alt="Apple Login"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      data-bs-toggle="modal"
                      data-bs-target="#login-mail-popup"
                    >
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/mail.svg"
                        alt="Email Login"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <hr />
              <p>Already have an account?</p>
              <div className="bottom-btn">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#login-phone-popup"
                >
                  Login Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* for register */}

      {/* for login  */}

      <div
        className="modal fade custom-modal"
        id="login-phone-popup"
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
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>Login</h2>
              <hr />
              <h3>Welcome to Zyvo</h3>
              <p className="mb-3">
                Enter your phone number to log in to your account.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="custom-modal-label">
                  <input
                    type="tel"
                    id="mobile_code-2"
                    placeholder="Enter your number here"
                  />
                </div>
                <div className="custom-modal-label">
                  <input
                    type="button"
                    value="Continue"
                    data-bs-dismiss="modal"
                    data-bs-toggle="modal"
                    data-bs-target="#register-phone-popup"
                  />
                </div>
                <div className="keep-me-forgot">
                  <label>
                    <input type="checkbox" /> Keep me logged in
                  </label>
                  <a
                    href="#"
                    data-bs-dismiss="modal"
                    data-bs-toggle="modal"
                    data-bs-target="#forgot-password-popup"
                  >
                    <u>Forgot Password?</u>
                  </a>
                </div>
              </form>
              <hr />
              <p>-OR-</p>
              <p>Login with</p>
              <div className="login-with-icons">
                <ul>
                  <li>
                    <a href="#">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/google.svg"
                        alt="Google Login"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/facebook.svg"
                        alt="Facebook Login"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/apple.svg"
                        alt="Apple Login"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      data-bs-dismiss="modal"
                      data-bs-toggle="modal"
                      data-bs-target="#login-mail-popup"
                    >
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/mail.svg"
                        alt="Email Login"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <hr />
              <p>Don't have an account?</p>
              <div className="bottom-btn">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#register-phone-popup"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* for login */}

      {/* forgot password */}

      <div
        className="modal fade custom-modal"
        id="forgot-password-popup"
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
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>Forgot Password</h2>
              <hr />
              <p className="mb-3">
                Enter your phone number/email for the verification process, we
                will send a 4-digit code to your email.
              </p>
              <form>
                <div className="custom-modal-label">
                  <input
                    type="tel"
                    id="mobile_code-3"
                    placeholder="Enter your number here"
                  />
                </div>
                <p className="mb-0">-OR-</p>
                <div className="custom-modal-label">
                  <label>
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/popups/mail-input.svg"
                      alt="Email Icon"
                    />
                    <input type="text" placeholder="Enter your Email here" />
                  </label>
                </div>
                <div className="custom-modal-label">
                  <input
                    type="button"
                    value="Submit"
                    data-bs-dismiss="modal"
                    data-bs-toggle="modal"
                    data-bs-target="#phone-otp-verification-popup"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* forgot password */}

      {/* PHONE-OTP-VERIFICATIO */}
      <div
        className="modal fade custom-modal"
        id="phone-otp-verification-popup"
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
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>OTP Verification</h2>
              <hr />
              <p className="mb-3">
                Please type the verification code sent <br /> to{" "}
                <b> {user?.otp_send_to}</b>
              </p>

              <form className="mb-3" onSubmit={handleSubmit(handleOTPSubmit)}>
                <div className="otp-verification-code">
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="number"
                      className="otp-verification-code-in inputs"
                      {...register(`otp${index}`)}
                      onInput={(e) => handleInput(e, index)}
                    />
                  ))}
                </div>
                {error && (
                  <p className="error-message" style={{ color: "red" }}>
                    {error}
                  </p>
                )}
                <div className="custom-modal-label">
                  <input type="submit" value="Submit" />
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
            </div>
          </div>
        </div>
      </div>

      {/* PHONE-OTP-VERIFICATIO */}

      {/* mail verification code */}

      <div
        className="modal fade custom-modal"
        id="mail-otp-verification-popup"
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
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>OTP Verification</h2>
              <hr />
              <p className="mb-3">
                Please type the verification code sent <br /> to{" "}
                <b>abc@gmail.com</b>
              </p>
              <form className="mb-3">
                <div className="otp-verification-code">
                  <input
                    type="number"
                    className="otp-verification-code-in inputs"
                    maxLength="1"
                    onInput={(e) =>
                      (e.target.value = e.target.value.slice(0, 1))
                    }
                  />
                  <input
                    type="number"
                    className="otp-verification-code-in inputs"
                    maxLength="1"
                    onInput={(e) =>
                      (e.target.value = e.target.value.slice(0, 1))
                    }
                  />
                  <input
                    type="number"
                    className="otp-verification-code-in inputs"
                    maxLength="1"
                    onInput={(e) =>
                      (e.target.value = e.target.value.slice(0, 1))
                    }
                  />
                  <input
                    type="number"
                    className="otp-verification-code-in inputs"
                    maxLength="1"
                    onInput={(e) =>
                      (e.target.value = e.target.value.slice(0, 1))
                    }
                  />
                </div>
                <div className="custom-modal-label">
                  <input
                    type="button"
                    value="Submit"
                    data-bs-dismiss="modal"
                    data-bs-toggle="modal"
                    data-bs-target="#new-password-popup"
                  />
                </div>
              </form>
              <p>
                Didn't receive the verification code?{" "}
                <a href="javascript:void(0);">Resend</a>
              </p>
              <p className="mb-0">
                Resend verification code in <span>00:59</span> sec
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* mail verification code */}

      {/* new password pop-up */}

      <div
        className="modal fade custom-modal"
        id="new-password-popup"
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
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>New Password</h2>
              <hr />
              <p className="mb-3">Enter your new password here</p>
              <form>
                <div className="custom-modal-label">
                  <label>
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/popups/lock-input.svg"
                      alt=""
                    />
                    <input
                      type="password"
                      placeholder="Enter password"
                      onChange={() => {}}
                    />
                    <span className="password-check correct"></span>
                  </label>
                </div>
                <div className="custom-modal-label">
                  <label>
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/popups/lock-input.svg"
                      alt=""
                    />
                    <input
                      type="password"
                      placeholder="Enter Confirm password"
                      onChange={() => {}}
                    />
                    <span className="password-check wrong"></span>
                  </label>
                </div>
                <div className="custom-modal-label">
                  <input
                    type="button"
                    value="Submit"
                    data-bs-dismiss="modal"
                    data-bs-toggle="modal"
                    data-bs-target="#password-changed-successfully-popup"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* new password pop-up */}
      {/* PASSWORD-CHANGED-SUCCESSFULLY-POPUP */}
      <div
        className="modal fade custom-modal"
        id="password-changed-successfully-popup"
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
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>Success</h2>
              <div className="password-changed-successfully-icon">
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/popups/success-icon.svg"
                  alt=""
                />
              </div>
              <p className="mb-3">
                Your password has been changed successfully.
              </p>
              <form>
                <div className="custom-modal-label">
                  <input type="button" value="Okay" data-bs-dismiss="modal" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* LOGIN-BY-MAIL-POPUP */}
      <div
        className="modal fade custom-modal"
        id="login-mail-popup"
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
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>Login</h2>
              <hr />
              <h3>Welcome to Zyvo</h3>
              <p className="mb-3">Enter your Email to login your account.</p>
              <form>
                <div className="custom-modal-label">
                  <label>
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/popups/mail-input.svg"
                      alt=""
                    />
                    <input type="text" placeholder="Enter your Email here" />
                  </label>
                </div>
                <div className="custom-modal-label">
                  <label>
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/popups/lock-input.svg"
                      alt=""
                    />
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="password"
                    />
                    <div className="password-eye">
                      <div className="eye eye-close"></div>
                    </div>
                    {/* <span className="password-check correct"></span> */}
                  </label>
                </div>
                <div className="custom-modal-label">
                  <input
                    type="button"
                    value="Login"
                    data-bs-dismiss="modal"
                    data-bs-toggle="modal"
                    data-bs-target="#login-mail-popup"
                  />
                </div>
                <div className="keep-me-forgot">
                  <label>
                    <input type="checkbox" /> Keep me logged
                  </label>
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    data-bs-toggle="modal"
                    data-bs-target="#forgot-password-popup"
                  >
                    <u>Forgot Password?</u>
                  </a>
                </div>
              </form>
              <hr />
              <p>Don't have an account?</p>
              <div className="bottom-btn">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#register-mail-popup"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REGISTER-MAIL-POPUP */}
      <div
        className="modal fade custom-modal"
        id="register-mail-popup"
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
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>Register Now</h2>
              <hr />
              <form action="create-profile.html" method="post">
                <div className="custom-modal-label">
                  <label>
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/popups/mail-input.svg"
                      alt=""
                    />
                    <input type="text" placeholder="Enter your Email here" />
                  </label>
                </div>
                <div className="custom-modal-label">
                  <label>
                    <img
                      src="https://design.yilstaging.com/ZYVO/assets/images/popups/lock-input.svg"
                      alt=""
                    />
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="password"
                    />
                    <div className="password-eye">
                      <div className="eye eye-close"></div>
                    </div>
                    <span className="password-check correct"></span>
                  </label>
                </div>
                <div className="custom-modal-label">
                  <input
                    type="submit"
                    value="Create Account"
                    data-bs-dismiss="modal"
                  />
                </div>
                <div className="keep-me-forgot">
                  <label>
                    <input type="checkbox" /> Keep me logged
                  </label>
                  {/* <a
              href="javascript:void(0);"
              data-bs-dismiss="modal"
              data-bs-toggle="modal"
              data-bs-target="#forgot-password-popup"
            >
              <u>Forgot Password?</u>
            </a> */}
                </div>
              </form>
              <hr />
              <p>Already have an account?</p>
              <div className="bottom-btn">
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  data-bs-toggle="modal"
                  data-bs-target="#login-mail-popup"
                >
                  Login Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* REGISTER-MAIL-POPUP */}

      {/* LOGOUT-POPUP */}
      <div
        className="modal fade custom-modal"
        id="logout-popup"
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
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>Logout</h2>
              <div className="password-changed-successfully-icon">
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/popups/logout.svg"
                  alt=""
                />
              </div>
              <p className="mb-3">Are you sure you want to logout?</p>
              <form onSubmit={handlelogout}>
                <div className="custom-modal-label d-flex gap-3">
                  <input type="submit" value="Yes" data-bs-dismiss="modal" />
                  <input
                    type="button"
                    className="cancel-btn"
                    value="Cancel"
                    data-bs-dismiss="modal"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* LOGOUT-POPUP */}

      {/* LANGUAGE-POPUP */}
      <div
        className="modal fade"
        id="language-popup"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h2>
                Choose a Language and Region
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </h2>
              <form action="home.html" method="post">
                <button type="submit" className="active">
                  English <span>USA</span>
                </button>
                <button type="submit">
                  English <span>United Kingdom</span>
                </button>
                <button type="submit">
                  Chinese <span>China</span>
                </button>
                <button type="submit">
                  Dansk <span>Denmark</span>
                </button>
                <button type="submit">
                  Arabic <span>United Arab Emirates</span>
                </button>
                <button type="submit">
                  English <span>USA</span>
                </button>
                <button type="submit">
                  English <span>United Kingdom</span>
                </button>
                <button type="submit">
                  Chinese <span>China</span>
                </button>
                <button type="submit">
                  Dansk <span>Denmark</span>
                </button>
                <button type="submit">
                  Arabic <span>United Arab Emirates</span>
                </button>
                <button type="submit">
                  English <span>USA</span>
                </button>
                <button type="submit">
                  English <span>United Kingdom</span>
                </button>
                <button type="submit">
                  Chinese <span>China</span>
                </button>
                <button type="submit">
                  Dansk <span>Denmark</span>
                </button>
                <button type="submit">
                  Arabic <span>United Arab Emirates</span>
                </button>
                <button type="submit">
                  English <span>USA</span>
                </button>
                <button type="submit">
                  English <span>United Kingdom</span>
                </button>
                <button type="submit">
                  Chinese <span>China</span>
                </button>
                <button type="submit">
                  Dansk <span>Denmark</span>
                </button>
                <button type="submit">
                  Arabic <span>United Arab Emirates</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* LANGUAGE-POPUP */}
    </>
  );
};

export default AuthModal;
