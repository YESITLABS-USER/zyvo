import { useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import useBook from "../../hooks/host/useBook";


const ReportBookingModal = ({ show, handleClose, user_id, booking_id, property_id }) => {

    const {
        hostReportViolation
    } = useBook();

    const [selectedReason, setSelectedReason] = useState("Select");
    const [additionalDetails, setAdditionalDetails] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const reportReasonIdMap = {
        "Inappropriate Content":1, 
        "Misleading Information":2, 
        "Spam or Scam":3, 
        "Harassment":4, 
        "Discrimination":5, 
        "Other Issue":6
    }

    const handleSelect = (reason) => {
        setSelectedReason(reason);
    };

    const handleSubmit = async () => {
        console.log("Report Submitted:", { selectedReason, additionalDetails });
        const submitResponse = await hostReportViolation({
            user_id,
            booking_id,
            property_id,
            report_reasons_id: reportReasonIdMap[selectedReason],
            additionalDetails
        });
        if(submitResponse){
            setSelectedReason("Select");
            setAdditionalDetails("");
            setSubmitted(true);
        }
    };

    return (
        <>
            <Modal id="report-issue-popup" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="w-100 text-center">
                        Report Violation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="mt-1">
                        <p className="mb-0 text-start"><b>Please select a reason for reporting this user.</b></p>
                        {/* <Dropdown onSelect={handleSelect}>
                            <Dropdown.Toggle variant="light">
                                {selectedReason} <img src="../assets/images/dropdown.svg" alt="" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {["Inappropriate Content", "Misleading Information", "Spam or Scam", "Harassment", "Discrimination", "Other Issue"].map((reason) => (
                                    <Dropdown.Item key={reason} eventKey={reason}>
                                        {reason}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown> */}
                        <Form.Select value={selectedReason} onChange={(e)=>setSelectedReason(e.target.value)}>
                            {["Inappropriate Content", "Misleading Information", "Spam or Scam", "Harassment", "Discrimination", "Other Issue"].map((reason) => (
                                <option value={reason}>{reason}</option>
                            ))}
                        </Form.Select>

                        <p className="mb-0 text-start"><b>Add Additional Details</b></p>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="You can also add additional details to help us investigate further."
                            value={additionalDetails}
                            onChange={(e) => setAdditionalDetails(e.target.value)}
                        />

                        <div className="custom-modal-label d-flex gap-3 mt-3">
                            <Button variant="primary" onClick={handleSubmit}>
                                Submit Report
                            </Button>
                        </div>

                        {submitted && (
                            <p className="mt-2">
                                "Your report has been submitted. Thank you for helping us maintain a safe and respectful community."
                            </p>
                        )}
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ReportBookingModal