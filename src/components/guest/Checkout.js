import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaBed, FaCalendarAlt, FaClock } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import CheckOutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";
import { KEYS } from "../../config/Constant";
import moment from "moment";
import useCommon from "../../hooks/useCommon";
//

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader";
import Header from "./Header";
//

const Checkout = () => {
  const { bookHostProverty, isLoading } = useCommon();
  const [nights, setNights] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selected, setSelected] = useState(false);
  const [customer_id, setCustomerId] = useState("");
  const [card_id, setCardId] = useState("");
  //
  const location = useLocation();
  const checkoutData = location.state;

  //

  const userData = JSON.parse(localStorage.getItem(KEYS.USER_INFO));
  const userId = String(userData?.user_id);
  //

  //   console.log(
  //     JSON.stringify(checkoutData, null, 2),
  //     "checkoutDatacheckoutData"
  //   );

  //

  const booking_amount = checkoutData?.totalPrice; // Assuming totalPrice is the booking amount
  const service_fee = checkoutData?.service_fee;
  const tax = checkoutData?.tax;
  const discount_amount = checkoutData?.bulk_discount_hour;

  const totalAmnt = booking_amount + service_fee + tax - discount_amount;

  //

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const addOns = [
    {
      src: "https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/1.svg",
      name: "Firewood",
      price: 10,
    },
    {
      src: "https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/2.svg",
      name: "Extra Sheets",
      price: 12,
    },
    {
      src: "https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/3.svg",
      name: "BBQ Logs",
      price: 7,
    },
    {
      src: "https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/4.svg",
      name: "Extra Blanket",
      price: 8,
    },
  ];

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prev) =>
      prev.includes(addOn)
        ? prev.filter((item) => item !== addOn)
        : [...prev, addOn]
    );
  };

  const params = {
    user_id: userId, // Make sure to define userId
    property_id: checkoutData?.property_id,
    booking_date: moment().format("YYYY-MM-DD"), // Assuming dateSelected contains the correct date
    booking_start: checkoutData?.startTime,
    booking_end: checkoutData?.endTime,
    booking_amount: checkoutData?.totalPrice.toString(), // Convert to string if required
    total_amount: totalAmnt,
    customer_id: customer_id, // Define customerId variable
    card_id: card_id, // Define cardId variable
    service_fee: checkoutData?.service_fee.toString(), // Convert percentage value
    tax: checkoutData?.tax.toString(),
    discount_amount: checkoutData?.bulk_discount_hour.toString(),
    addons: checkoutData?.add_ons, // Convert add-ons to a key-value map
  };
  console.log(JSON.stringify(params, null, 2), "paramsdsadfsadfsfsfsf");

  const handleBooking = async () => {
    try {
      const response = await bookHostProverty(params);
      if (response) {
        console.log(response, "response of bookHostProverty");
        toast.success("booked success.");
      }
    } catch (error) {
      console.log(error, "error while booking");
      toast.error("Hours must be greater than 0.");
    }
  };

  return (
    <Container
      fluid
      className="p-5"
      style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
    >
      <Header />
      <Loader visible={isLoading} />
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow">
            <Row>
              {/* Left Section: Booking Details, Add-ons, Payment */}
              <Col md={8} className="p-4">
                <h4 className="mb-4">Checkout &amp; Payment</h4>

                {/* Booking Details */}
                <Card className="mb-3 p-3">
                  <h6>Booking Details</h6>
                  <div className="d-flex align-items-center justify-content-between gap-3 flex-wrap">
                    {/* Nights Selection */}
                    <div className="d-flex align-items-center flex-grow-1">
                      <FaBed className="me-2" />
                      <Form.Select
                        value={nights}
                        onChange={(e) => setNights(Number(e.target.value))}
                        style={{ minWidth: "120px" }}
                      >
                        {[...Array(10).keys()].map((n) => (
                          <option key={n + 1} value={n + 1}>
                            {n + 1} hours
                          </option>
                        ))}
                      </Form.Select>
                    </div>

                    {/* Date Selection */}
                    <div className="d-flex align-items-center flex-grow-1">
                      <FaCalendarAlt className="me-2" />
                      <input
                        type="date"
                        className="form-control"
                        style={{ minWidth: "150px" }}
                      />
                    </div>

                    {/* Time Selection */}
                    <div className="d-flex align-items-center flex-grow-1">
                      <FaClock className="me-2" />
                      <div>
                        <input
                          type="time"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          className="border rounded p-1 mb-2"
                        />
                        <input
                          type="time"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          className="border p-1 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Add-ons Section */}
                <Row>
                  {addOns.map((addOn, index) => (
                    <Col xs={12} md={6} className="mb-2" key={index}>
                      <div
                        className="card d-flex flex-row align-items-center p-3 border rounded-3"
                        style={{
                          width: "18rem",
                          border: "1px solid #ddd",
                          boxShadow: "none",
                          background: "transparent",
                        }}
                        onClick={() => toggleAddOn(addOn)}
                      >
                        <img
                          src={addOn.src}
                          className="img-fluid"
                          alt={addOn.name}
                          style={{
                            width: "40px",
                            height: "40px",
                            marginRight: "10px",
                          }}
                        />
                        <div>
                          <h4
                            className="card-title text-dark mb-1"
                            style={{ fontSize: "1rem", fontWeight: "600" }}
                          >
                            {addOn.name}
                          </h4>
                          <p
                            className="card-text text-muted"
                            style={{ fontSize: "0.9rem" }}
                          >
                            ${addOn.price} / Item
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>

                {/* Payment Method */}
                <Card className="mb-3 p-3">
                  <h6>Payment Method</h6>
                  <div className="d-flex gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                      alt="Visa"
                      height="40px"
                      width="40px"
                    />
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                      alt="MasterCard"
                      height="40px"
                      width="40px"
                    />
                  </div>
                  <Button
                    variant="primary"
                    className="w-100 mt-3"
                    style={{
                      backgroundColor: "#198754",
                      borderColor: "#198754",
                    }}
                    onClick={handleBooking}
                  >
                    Pay Now
                  </Button>

                  {/* Show Checkout Form on Selection */}

                  <Button
                    // variant="outline-primary "
                    className="w-100 mt-3 border border-secondary rounded-5 bg-transparent text-dark "
                    onClick={() => setSelected((prev) => !prev)}
                  >
                    Credit or Debit Card
                  </Button>
                  <div className="m-3 w-100">
                    {selected && (
                      <CheckOutForm
                        getStripId={(txt) => setCustomerId(txt)}
                        getcard_id={(txt) => setCardId(txt)}
                        selected={selected}
                      />
                    )}
                  </div>
                </Card>
              </Col>

              {/* Right Section: Booking Summary */}
              <Col md={4} className="bg-light p-4">
                <Card className="d-flex flex-row align-items-center p-3">
                  <img
                    src="https://images.pexels.com/photos/30495756/pexels-photo-30495756/free-photo-of-rustic-wooden-chairs-in-lush-antalya-field.jpeg"
                    alt="Demo"
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="ms-3">
                    <h5 className="fs-4">Cabin in Pinetrails</h5>
                    <h6 className="fs-6">3 Nights: $228</h6>
                    <h6 className="fs-6">Service Fee: $25</h6>
                    <h6 className="fs-6">Taxes: $20</h6>
                    <h5>Total: $253</h5>
                    <Button
                      variant="primary"
                      className="w-100 mt-3"
                      style={{
                        backgroundColor: "#198754",
                        borderColor: "#198754",
                      }}
                    >
                      Message the Host
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Checkout;
