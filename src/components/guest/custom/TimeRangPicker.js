import React, { useState } from "react";
import TimePicker from "react-time-picker";
import { Form, Row, Col, Card } from "react-bootstrap";
import moment from "moment";
import "react-time-picker/dist/TimePicker.css";
// import "react-clock/dist/Clock.css";

const TimeRangePicker = ({ timeSelected, onChange }) => {
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  // Convert 24-hour format (HH:mm) to 12-hour format (AM/PM) for display
  //   const convertTo12HourFormat = (time) => {
  //     return time ? moment(time, "HH:mm").format("h:mm A") : null;
  //   };

  // Add hours to a given time (in 24-hour format)
  const addHoursToTime = (time, hoursToAdd) => {
    return time
      ? moment(time, "HH:mm").add(hoursToAdd, "hours").format("HH:mm")
      : null;
  };

  const handleFromTimeChange = (time) => {
    setFromTime(time); // TimePicker already gives HH:mm format
    const newToTime = addHoursToTime(time, timeSelected);
    setToTime(newToTime);
    if (onChange) onChange({ from: time, to: newToTime });
  };
  //

  return (
    <Card className="p-3 shadow-sm border-0 w-auto">
      <Row className="g-3 align-items-center flex-nowrap">
        {/* From Time */}
        <Col className="d-flex align-items-center">
          <Form.Label className="fw-semibold text-dark me-2">From:</Form.Label>
          <TimePicker
            className="form-control"
            value={fromTime}
            onChange={handleFromTimeChange}
            format="HH:mm" // Ensures 24-hour format
            disableClock
          />
        </Col>

        {/* To Time (Auto-filled) */}
        <Col className="d-flex align-items-center">
          <Form.Label className="fw-semibold text-dark me-2">To:</Form.Label>
          <TimePicker
            className="form-control"
            value={toTime}
            onChange={(time) => setToTime(time)}
            format="HH:mm" // Ensures 24-hour format
            disableClock
          />
        </Col>
      </Row>
    </Card>
  );
};

export default TimeRangePicker;
