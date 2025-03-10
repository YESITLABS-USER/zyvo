import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import VerificationModal from "./OtpVerification";
import Loader from "../../Loader";

function PhoneVerification({ show, handleClose }) {
    const { send_phone_verification_otp, isLoading } = useAuth();
    const [verificationByEmailModal, setVerifictionByEmailModal] = useState(false);

    const [error, setError] = useState(null);
    //

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const countryCodes = ["+91", "+1"];

    const onSubmit = async (data) => {
        try {
            const response = await send_phone_verification_otp({
                user_id: "1",
                phone_number: data?.phone_number,
                country_code: data?.country_code
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
                        Enter your phone number for the verification process, we will send a
                        4-digit code to your phone.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="custom-modal-label">
                            <label>
                                <select name="country_code"
                                    {...register("country_code", { required: "Country code is required" })}
                                >
                                    <option value="" disabled selected>Select country code</option>
                                    {countryCodes.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    placeholder="Enter your Phone Number here"
                                    {...register("phone_number", {
                                        required: "Phone number is required",
                                        pattern: {
                                            value: /^\d{10}$/, // Ensures exactly 10 digits
                                            message: "Phone number must be exactly 10 digits",
                                        },
                                    })}
                                    className="form-control"
                                />
                            </label>
                        </div>
                        {errors.phone_number && (
                            <p style={{ color: "red" }}>{errors.phone_number.message}</p>
                        )}
                        {errors.country_code && (
                            <p style={{ color: "red" }}>{errors.country_code.message}</p>
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
                verificationBy={"verificationByPhone"}
            />
        </>
    );
}

export default PhoneVerification;
