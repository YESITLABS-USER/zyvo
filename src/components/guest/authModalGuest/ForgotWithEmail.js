import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import VerificationModal from "./VerificationModal";
import Loader from "../../Loader";

function ForgotWithEmail({ show, handleClose }) {
  const { forgot_password_email, isLoading } = useAuth();
  const [verificationByEmailModal, setVerifictionByEmailModal] =
    useState(false);
  //

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await forgot_password_email({
        email: data?.email,
      });
      if (response) {
        // console.log(response, "hello response user data");
        handleClose();
        setVerifictionByEmailModal(true);
      }
    } catch (error) {
      // console.log(error, "error code");
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Loader visible={isLoading} />
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            Forgot Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>
            Enter your email for the verification process, we will send a
            4-digit code to your email.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="custom-modal-label">
              <label>
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/popups/mail-input.svg"
                  alt="Email Icon"
                />
                <input
                  type="text"
                  placeholder="Enter your Email here"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="form-control"
                />
              </label>
            </div>
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}

            <div className="custom-modal-label mt-3">
              <Button type="submit" className="w-50" variant="success">
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <VerificationModal
        show={verificationByEmailModal}
        onHide={setVerifictionByEmailModal}
        veficationByEmailOpen={"veficationByEmailOpen"}
      />
    </>
  );
}

export default ForgotWithEmail;
