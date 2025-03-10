import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import VerificationModal from "./OtpVerification";
import Loader from "../../Loader";

function EmailVerification({ show, handleClose }) {
  const { forgot_password_email, send_email_verification_otp, isLoading } = useAuth();
  const [verificationByEmailModal, setVerifictionByEmailModal] = useState(false);

  const [error, setError] = useState(null);
  //

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await send_email_verification_otp({
        user_id: "1",
        email: data?.email,
      });
      console.log("resposne is", response);
      if (response) {
        console.log(response, "hello response user data");
        handleClose();
        setVerifictionByEmailModal(true);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.log(error, "error code");
      setError(error.message);
    }
  };

  const handleModalClose = () => {
    setError(null);  // Clear error state
    reset(); // Reset form fields
    handleClose(); // Close modal
  };

  return (
    <>
      <Modal show={show} onHide={handleModalClose} centered>
        <Loader visible={isLoading} />
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">
            Verification
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
            {error && (
              <p style={{ color: "red" }}>{error}</p>
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
        verificationBy={"verificationByEmail"}
      />
    </>
  );
}

export default EmailVerification;
