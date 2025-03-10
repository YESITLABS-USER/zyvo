import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { useSelector } from "react-redux";
import Loader from "../../Loader";

const ChangePassword = ({ show, handleClose }) => {
  const user = useSelector((state) => state?.user?.userInfo);
  const { reset_password, isLoading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");

  const onSubmit = async (data) => {
    try {
      const response = await reset_password({
        user_id: user?.user_id,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });
      console.log("Password reset successful:", response);
      handleClose();
    } catch (error) {
      console.error("Password reset failed:", error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Loader visible={isLoading} />
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">New Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p>Enter your new password here</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="custom-modal-label">
              <label>
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/popups/lock-input.svg"
                  alt="Password Icon"
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="form-control"
                />
              </label>
            </div>
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}

            <div className="custom-modal-label">
              <label>
                <img
                  src="https://design.yilstaging.com/ZYVO/assets/images/popups/lock-input.svg"
                  alt="Confirm Password Icon"
                />
                <input
                  type="password"
                  placeholder="Enter Confirm password"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="form-control"
                />
              </label>
            </div>
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
            )}

            <div className="custom-modal-label mt-3">
              <Button type="submit" className="w-50" variant="success">
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChangePassword;
