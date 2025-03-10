import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import ItemSelector from "./ItemSelector";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAddPropertyDetails,
  setAddPropertyDetails,
  setPropertyId,
} from "../../../store/slices/hostuserSlice";
import useHome from "../../../hooks/host/useHome";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const monthsRange = [
  { id: "00", label: "All" },
  { id: "01", label: "Jan" },
  { id: "02", label: "Feb" },
  { id: "03", label: "Mar" },
  { id: "04", label: "Apr" },
  { id: "05", label: "May" },
  { id: "06", label: "Jun" },
  { id: "07", label: "Jul" },
  { id: "08", label: "Aug" },
  { id: "09", label: "Sep" },
  { id: "10", label: "Oct" },
  { id: "11", label: "Nov" },
  { id: "12", label: "Dec" },
];

const daysRange = [
  { label: "All" },
  { label: "Only Working Days" },
  { label: "Only Weekends" },
];

const PriceAvailblity = ({
  switchToGallery,
  hideModal,
  propertyData,
  propertyID,
}) => {
  const dispatch = useDispatch();
  const { addPropertyHost, updateProperyDetails } = useHome();
  const GallerySelect = useSelector(
    (state) => state?.hostuser?.addPropertyDetails
  );
  console.log(GallerySelect, "gallery select location ");
  const [minHour, setMinHour] = useState(
    propertyData?.min_booking_hours != null &&
      propertyData?.min_booking_hours !== undefined
      ? String(parseInt(propertyData?.min_booking_hours)) // Ensures it's a string
      : ""
  );

  console.log(minHour, "min hours of thie data");
  const [pricing, setPricing] = useState(
    propertyData?.hourly_rate != null && propertyData?.hourly_rate !== undefined
      ? String(propertyData?.hourly_rate)
      : ""
  );
  const [bulkHour, setBulkHour] = useState(
    propertyData?.bulk_discount_hour != null &&
      propertyData?.bulk_discount_hour !== undefined
      ? String(propertyData?.bulk_discount_hour)
      : ""
  );
  const [bulkDiscount, setBulkDiscount] = useState(
    propertyData?.bulk_discount_rate != null &&
      propertyData?.bulk_discount_rate !== undefined
      ? String(propertyData?.bulk_discount_rate)
      : ""
  );
  const [showCleaningFee, setShowCleaningFee] = useState(false);
  const [cleaningFee, setCleaningFee] = useState(
    propertyData?.cleaning_fee != null &&
      propertyData?.cleaning_fee !== undefined
      ? propertyData?.cleaning_fee
      : ""
  );
  //

  const convertTo12HourFormat = (timeString) => {
    const [hour, minute] = timeString.split(":");
    const date = new Date();
    date.setHours(hour, minute, 0);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };
  //
  const [fromTime, setFromTime] = useState(
    propertyData?.available_from != null &&
      propertyData?.available_from !== undefined
      ? convertTo12HourFormat(propertyData?.available_from)
      : "00"
  );

  const [toTime, setToTime] = useState(
    propertyData?.available_to != null &&
      propertyData?.available_to !== undefined
      ? convertTo12HourFormat(propertyData?.available_to)
      : "00"
  );

  const [monthselect, setMonthsSelect] = useState(
    propertyData?.available_month != null &&
      propertyData?.available_month !== undefined
      ? propertyData?.available_month
      : "00"
  );
  const [selcteAvailiblity, setSelectAvailiblity] = useState(
    propertyData?.available_day != null &&
      propertyData?.available_day !== undefined
      ? propertyData?.available_day
      : "All"
  );
  //

  const handleSelectMonths = (id) => {
    setMonthsSelect(id); // Set selected month as a single string
  };
  //
  const handleSelectAvailblity = (label) => {
    setSelectAvailiblity(label);
  };

  //
  const [selectedItems, setSelectedItems] = useState([]); // Store selected items
  console.log(selectedItems, "************");

  // Function to update selected items
  const handleItemsUpdate = (items) => {
    setSelectedItems(items);
  };

  let params = {
    min_booking_hours: minHour,
    hourly_rate: pricing,
    bulk_discount_hour: bulkHour,
    bulk_discount_rate: bulkDiscount,
    cleaning_fee: cleaningFee,
    available_month: monthselect,
    available_day: selcteAvailiblity,
    available_from: fromTime ? moment(fromTime, "hh:mm A").format("HH:mm") : "", // Convert to 24-hour format
    available_to: toTime ? moment(toTime, "hh:mm A").format("HH:mm") : "",
    add_ons: selectedItems,
    ...GallerySelect,
  };

  ///

  const validatePricAvaility = () => {
    let flag = true;

    if (!minHour?.trim()) {
      toast.error("Please enter minimum booking hours", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!pricing?.trim()) {
      toast.error("Please enter hourly rate", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!bulkHour?.trim()) {
      toast.error("Please enter bulk discount hours", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }
    if (!cleaningFee?.trim()) {
      toast.error("Please add cleaning fee", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!bulkDiscount?.trim()) {
      toast.error("Please enter bulk discount rate", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }
    if (selectedItems.length === 0) {
      toast.error("Please add selectedItems", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (showCleaningFee && !cleaningFee.trim()) {
      toast.error("Please enter cleaning fee", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (monthselect === "00") {
      toast.error("Please select available month", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!selcteAvailiblity?.trim()) {
      toast.error("Please select availability", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!fromTime.trim()) {
      toast.error("Please select available from time", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!toTime.trim()) {
      toast.error("Please select available to time", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    return flag; // If any validation fails, flag will be false
  };

  const handlePriceAvailbity = async () => {
    if (!validatePricAvaility()) return;

    // dispatch(setAddPropertyDetails(params));
    if (propertyID != null && propertyID !== undefined) {
      console.log("this is call for upate");
      handleUpdate();
    } else {
      console.log("this is call for add new");
      handleStoreDetails();
    }
  };

  const handleStoreDetails = async () => {
    try {
      console.log(params, "handel update paramsss");
      const response = await addPropertyHost(params);
      console.log(params, "params of this data api");

      if (response) {
        console.log(response?.message, "Property details added successfully");
        toast.success("Property added successful", {
          position: "top-center",
          autoClose: 3000,
        });
        switchToGallery("home_setup");
        hideModal();
        dispatch(clearAddPropertyDetails());
        dispatch(setPropertyId(response?.data?.property_id));
      }
    } catch (error) {
      console.error("Error adding property details:", error);
    }
  };

  // handle update profile

  const handleUpdate = async () => {
    try {
      const updatedParams = { ...params, property_id: propertyID }; // Add property_id
      console.log(updatedParams, "updated params data comes form this");

      const response = await updateProperyDetails(updatedParams);
      if (response) {
        toast.success("Property updated successfully", {
          position: "top-center",
          autoClose: 3000,
        });
        hideModal();
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <div className="p-3">
      {/* Minimum Hour & Pricing */}
      <h5>Minimum hour & Pricing</h5>
      <Row className="mb-3">
        <Col md={4}>
          <Form.Select
            value={minHour}
            onChange={(e) => setMinHour(e.target.value)}
          >
            <option value="">Select hour</option>
            <option value="1">1 Hour</option>
            <option value="2">2 Hours</option>
            <option value="3">3 Hours</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
          >
            <option value="">Select rate per hour</option>
            <option value="10">$10 per hour</option>
            <option value="20">$20 per hour</option>
            <option value="30">$30 per hour</option>
          </Form.Select>
        </Col>
      </Row>
      <hr />

      {/* Bulk Discount */}
      <h5>Bulk Discount</h5>
      <Row className="mb-3">
        <Col md={4}>
          <Form.Select
            value={bulkHour}
            onChange={(e) => setBulkHour(e.target.value)}
          >
            <option value="">Select hours</option>
            <option value="4">4 Hours</option>
            <option value="6">6 Hours</option>
            <option value="8">8 Hours</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select
            value={bulkDiscount}
            onChange={(e) => setBulkDiscount(e.target.value)}
          >
            <option value="">Select discount</option>
            <option value="15">15% Discount</option>
            <option value="20">20% Discount</option>
            <option value="25">25% Discount</option>
          </Form.Select>
        </Col>
      </Row>
      <hr />
      <h5>Add-ons from the host</h5>
      <Row className="mb-3">
        <Col md={4}>
          <ItemSelector
            onItemsUpdate={handleItemsUpdate}
            propertyData={propertyData}
          />
        </Col>
      </Row>
      <hr />
      {/* Cleaning Fee */}
      <h5>Cleaning Fee</h5>
      <Row className="mb-3">
        <Col md={4}>
          <Button
            variant="light"
            onClick={() => setShowCleaningFee(true)}
            style={{
              border: "1px solid inherit", // Default border color same as text color
              borderRadius: "30px",
              transition: "border-color 0.3s ease",
            }}
            onMouseDown={(e) => (e.target.style.borderColor = "#007BFF")} // Active state: Blue border
            onMouseUp={(e) => (e.target.style.borderColor = "inherit")} // Revert after click
          >
            <FaPlus /> Add Cleaning Fee
          </Button>
        </Col>
        {showCleaningFee && (
          <Col md={2}>
            <Form.Control
              type="text"
              placeholder="Enter Fee"
              value={cleaningFee}
              onChange={(e) => setCleaningFee(e.target.value)}
            />
          </Col>
        )}
      </Row>
      <hr />
      <h6
        style={{
          marginTop: "20px",
          fontSize: 16,
          color: "#000000",
          marginLeft: "10px",
        }}
      >
        Availability - Days
      </h6>
      <h6 style={{ marginLeft: "10px", color: "black" }}>months</h6>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          border: "2px solid #EBEDED",
          borderRadius: "60px",
          padding: "10px",
          width: "100%",
          margin: "20px auto",
          backgroundColor: "#EBEDED",
          height: 55,
        }}
      >
        {monthsRange.map((month) => (
          <button
            key={month.id}
            onClick={() => handleSelectMonths(month.id)}
            style={{
              // padding: "10px 20px",
              fontSize: "14px",
              backgroundColor:
                monthselect === month.id ? "#FFFFFF" : "transparent",
              color: monthselect === month.id ? "#000000" : "#000",
              border:
                monthselect === month.id
                  ? "2px solid #FFFFFF"
                  : "2px solid transparent",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              width: "7%",
              height: 40,
              textAlign: "center",
            }}
          >
            {month.label}
          </button>
        ))}
      </div>

      <h6
        style={{
          marginTop: "20px",
          fontSize: 16,
          color: "#000000",
          marginLeft: "10px",
        }}
      >
        {" "}
        Days
      </h6>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          border: "2px solid #EBEDED",
          borderRadius: "60px",
          padding: "10px",
          width: "100%",
          margin: "20px auto",
          backgroundColor: "#EBEDED",
          height: 48,
        }}
      >
        {daysRange.map((label) => (
          <button
            key={label.id}
            onClick={() => handleSelectAvailblity(label.label)}
            style={{
              // padding: "10px 20px",
              fontSize: "14px",
              backgroundColor:
                selcteAvailiblity === label.label ? "#FFFFFF" : "transparent",
              color: selcteAvailiblity === label.label ? "#000000" : "#000",
              border:
                selcteAvailiblity === label.label
                  ? "2px solid #FFFFFF"
                  : "2px solid transparent",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              width: "28%",
              height: 40,
              textAlign: "center",
            }}
          >
            {label.label}
          </button>
        ))}
      </div>
      {/* Availability - Hours */}
      <h5>Availability - Hours</h5>
      <Row>
        <Col md={4}>
          <Form.Select
            value={fromTime}
            onChange={(e) => setFromTime(e.target.value)}
          >
            <option value="">Select start time</option>
            <option value="6:00 AM">6:00 AM</option>
            <option value="7:00 AM">7:00 AM</option>
            <option value="8:00 AM">8:00 AM</option>
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
          >
            <option value="">Select end time</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="2:00 PM">2:00 PM</option>
          </Form.Select>
        </Col>
      </Row>

      <Container className="mt-4 d-flex justify-content-between">
        {/* Clear All Button */}
        <Button
          variant="outline-success"
          onClick={() => switchToGallery("gallery_location")}
          style={{
            color: "#4AEAB1",
            borderColor: "#4AEAB1",
            padding: "10px 20px",
            fontWeight: "500",

            borderRadius: "40px",
          }}
        >
          Go back
        </Button>

        {/* Save and Continue Button */}
        <Button
          style={{
            backgroundColor: "#4AEAB1",
            borderColor: "#4AEAB1",
            padding: "10px 20px",
            fontWeight: "500",
            color: "black",
            borderRadius: "40px",
          }}
          onClick={handlePriceAvailbity}
        >
          Save and Continue
        </Button>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default PriceAvailblity;
