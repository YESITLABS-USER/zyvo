import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import ForgotWithEmail from "./ForgotWithEmail";
import useAuth from "../../../hooks/useAuth";

import { useNavigate } from "react-router-dom";
import VerificationModal from "./VerificationModal";
import Loader from "../../Loader";
//

const EmailLoginModal = ({ show, handleClose, toggleModel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login_email, signup_email, isLoading } = useAuth();

  const [openForgotModal, setForgotModal] = useState(false);
  //
  const [createPassword, setCreatePassword] = useState(null);

  const [veriModal, setVerifyModl] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = toggleModel
        ? await login_email({
            email: data?.email,
            password: data?.password,
          })
        : await signup_email({
            email: data?.email,
            password: data?.password,
            fcm_token: "fg446654g6fdgg",
            device_type: "web",
          });
      if (response) {
        handleClose();

        if (toggleModel) {
          // console.log(response, "login api hitting response");
          navigate("/");
        } else {
          // console.log(response, "login for otp response");
          setVerifyModl(true);
          setCreatePassword(data?.password);
        }
      }
    } catch (error) {
      // console.log(error, "api error");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Loader visible={isLoading} />
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            {toggleModel ? "Login" : "Register"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h3>Welcome to Zyvo</h3>
          <p>
            Enter your Email to {toggleModel ? "Login" : "Register"} to your
            account.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="custom-modal-label position-relative d-flex align-items-center">
              <img
                src="https://design.yilstaging.com/ZYVO/assets/images/popups/mail-input.svg"
                alt="Email Icon"
                className="position-absolute ms-2"
                style={{ left: "10px", height: "20px" }}
              />
              <input
                type="email"
                placeholder="Enter your Email here"
                {...register("email", { required: "Email is required" })}
                className="form-control ps-5"
              />
            </div>
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}

            <div className="custom-modal-label position-relative d-flex align-items-center mt-3">
              <img
                src="https://design.yilstaging.com/ZYVO/assets/images/popups/lock-input.svg"
                alt="Password Icon"
                className="position-absolute ms-2"
                style={{ left: "10px", height: "20px" }}
              />
              <input
                type="password"
                placeholder={toggleModel ? "Enter password" : "Create password"}
                {...register("password", { required: "Password is required" })}
                className="form-control ps-5"
              />
            </div>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}

            <div className="custom-modal-label mt-3">
              <Button type="submit" className="w-50" variant="success">
                Login
              </Button>
            </div>
          </form>

          <div className="keep-me-forgot mt-3">
            <label>
              <input type="checkbox" /> Keep me logged in
            </label>
            <a
              href="#"
              onClick={() => {
                setForgotModal(true);
                handleClose();
              }}
            >
              <u>Forgot Password?</u>
            </a>
          </div>
          <hr />
          <p>Don't have an account?</p>
          <div className="bottom-btn">
            <Button variant="link" onClick={handleClose}>
              Register Now
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      <ForgotWithEmail
        show={openForgotModal}
        handleClose={() => {
          setForgotModal(false);
        }}
      />
      {/* <RegisterModal
        show={openRgmodl}
        onHide={() => setOpneRgmodl(false)}
        CallBack={(bool) => setOpneRgmodl(bool)}
        loginModal={true}
      /> */}

      <VerificationModal
        show={veriModal}
        onHide={() => setVerifyModl(true)}
        regiserMail={"regiserMail"}
        createPassword={createPassword}
      />
    </>
  );
};

export default EmailLoginModal;
