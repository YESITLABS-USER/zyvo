import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../Loader";

function VerificationDone({ show, onHide }) {
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

    const handleModalClose = () => {
        setError(null);  // Clear error state
        reset(); // Reset form fields
        onHide(); // Close modal
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
                    <img width={200} src="https://zyvo.tgastaging.com/admin/images/ZYVO-images/all-icons/verification_done.png"></img>
                    <p>Verification done successfully</p>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default VerificationDone;
