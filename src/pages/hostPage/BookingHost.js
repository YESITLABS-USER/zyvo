import React, { useEffect, useMemo, useState } from "react";
import {
  Card,
  ListGroup,
  Badge,
  Button,
  Image,
  Dropdown,
  FormControl,
  InputGroup,
  Container,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { MdOutlineMyLocation } from "react-icons/md";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaCheckCircle,
  FaSearch,
  FaCaretDown,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import userImage from "../../assets/profile.jpeg";
import cabinImage from "../../assets/hostdetails.avif"; // Assuming you have a cabin image
import Header from "../../components/host/Header";

import Footer from "../../components/guest/Footer";
import useBook from "../../hooks/host/useBook";
import { imageBase } from "../../config/Constant";
import { formatProdErrorMessage } from "@reduxjs/toolkit";
import { FaShareAlt, FaHeart } from "react-icons/fa";

//images import fro grid

import Img1 from "../../assets/gallery/1.png";
import Img2 from "../../assets/gallery/2.png";
import Img3 from "../../assets/gallery/3.png";
import Img4 from "../../assets/gallery/4.png";
import Img5 from "../../assets/gallery/5.png";
import Loader from "../../components/Loader";
import LocationReviewStars from "../../components/guest/LocationReviewStars";
import ReportBookingModal from "../../components/host/ReportBookingModal";

//
const BookingHost = () => {
  const { getBookingHost, getBookingDetails, FilterPropertyReview, isLoading } = useBook();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [getList, setGetList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [viewDetails, setViewDetails] = useState();
  // console.log(JSON.stringify(viewDetails, null, 2), "*******");

  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [reviewFilter, setReviewFilter] = useState("highest_review");
  const [propertyId, setPropertyId] = useState(null);
  const [count, setCount] = useState(0);
  const [showReportModal, setShowReportModal] = useState(false);

  const filterLabel = {
    "recent_review": "Recent Reviews",
    "highest_review": "Highest Review",
    "lowest_review": "Lowest Review"
  }


  

  useEffect(() => {
    if(page!=1){
      const fetchPropertyReviews = async() => {
        const reviewsResp = await FilterPropertyReview({ property_id: propertyId, filter: reviewFilter, page });
        const updatedReviews = reviews.concat(reviewsResp.data);
        setReviews(updatedReviews);
        setPage(1);
      }
      console.log("fetched from current page use Effect.");
      fetchPropertyReviews();
    }
  }, [page]);


  useEffect(() => {
    if(count>0){
      setPage(1);
      const fetchPropertyReviews = async() => {
        const reviewsResp = await FilterPropertyReview({ property_id: propertyId, filter: reviewFilter, page });
        setReviews(reviewsResp.data);
        setPage(1);
      }
      fetchPropertyReviews();
      console.log("Fetched reviews after review filter change:", reviewFilter);
    }
  }, [reviewFilter]);

  //
  // handle booking list
  useEffect(() => {
    const fetchBookingList = async () => {
      try {
        const response = await getBookingHost({ user_id: 78 });
        if (response) {
          setGetList(response?.data);
        }
      } catch (error) {
        console.error("Error fetching booking list:", error);
      }
    };

    fetchBookingList();
    fetchDetailsData(getList[0].booking_id);
  }, []);
  //searching
  const filteredBookings = useMemo(() => {
    return getList.filter((booking) =>
      booking.guest_name.toLowerCase().includes(searchQuery?.toLowerCase())
    );
  }, [getList, searchQuery]);

  // handle details

  const fetchDetailsData = async (id) => {
    try {
      const response = await getBookingDetails({
        booking_id: id,
        latitude: 22.572645,
        longitude: 88.363892,
      });
      if (response) {
        console.log("response is", response);
        let view_details = response?.data;
        let property_id = view_details?.property_id;
        setViewDetails(view_details);
        setPropertyId(property_id);
        console.log("viewDetails?.property_id", view_details, property_id);
        const reviewsResp = await FilterPropertyReview({ property_id, filter: reviewFilter, page:1 });
        console.log("reviewsResp is", reviewsResp);
        setReviews(reviewsResp.data);
        setPage(1);
      }
    } catch (error) {
      console.log(error, "error response");
    }
  };

  return (
    <>
      <Header />
      <Loader visible={isLoading} />
      <div className="container-fluid mt-4 d-flex justify-content-center">
        <div style={{ width: "95%", display: "flex", height: "100vh" }}>
          <div style={{ width: "25%", overflowY: "auto" }}>
            {!showSearch ? (
              <div className="d-flex align-items-center justify-content-between ">
                <div className="d-flex align-items-center ">
                  <div>All Bookings</div>
                  <FaCaretDown
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowDropdown(!showDropdown)}
                  />
                </div>
                <FaSearch
                  onClick={() => setShowSearch(true)}
                  style={{ marginRight: 20 }}
                />
                {showDropdown && (
                  <Dropdown.Menu show>
                    <Dropdown.Item>All Bookings</Dropdown.Item>
                    <Dropdown.Item>Confirmed</Dropdown.Item>
                    <Dropdown.Item>Pending</Dropdown.Item>
                    <Dropdown.Item>Finished</Dropdown.Item>
                    <Dropdown.Item>Cancelled</Dropdown.Item>
                  </Dropdown.Menu>
                )}
              </div>
            ) : (
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowSearch(false)}
                >
                  X
                </Button>
              </InputGroup>
            )}
            {filteredBookings?.map((booking) => (
              <Card
                key={booking.booking_id}
                className={`mt-4 ${selectedBooking?.booking_id === booking.booking_id
                    ? "border border-primary"
                    : ""
                  }`} // Add blue border when selected
                style={{ width: "90%", cursor: "pointer" }}
                onClick={() => {
                  setSelectedBooking(booking);
                  fetchDetailsData(booking?.booking_id);
                  setReviewFilter("highest_review");
                }} // Store full booking data
              >
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <Image
                      src={`${imageBase}${booking.guest_avatar}`}
                      roundedCircle
                      width="50"
                      height="50"
                      className="me-3"
                      alt={booking.guest_name}
                    />
                    <div>
                      <Card.Title>{booking.guest_name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {booking.booking_date}
                      </Card.Subtitle>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center mt-2">
                    <Badge
                      bg={
                        booking.booking_status === "pending"
                          ? "warning"
                          : booking.booking_status === "confirmed"
                            ? "primary"
                            : booking.booking_status === "cancelled"
                              ? "danger"
                              : "success"
                      }
                      className="me-2"
                    >
                      <FaCheckCircle /> {booking.booking_status}
                    </Badge>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
          {/* second row */}
          <div
            style={{
              width: "50%",
              overflowY: "auto",
            }}
          >
            <Container className="border border-2 p-3">
              <Row className="  p-2" style={{ height: "60px" }}>
                <div className="d-flex align-items-center justify-content-between ">
                  <span>
                    {viewDetails?.property_title}
                    <Button
                      variant="success"
                      className="rounded-pill "
                      style={{ height: "40px" }}
                    >
                      Finished
                    </Button>
                  </span>
                  <div>
                    <FaShareAlt
                      style={{ marginRight: "10px", cursor: "pointer" }}
                    />{" "}
                    Share
                    <FaHeart
                      style={{ marginLeft: "10px", cursor: "pointer" }}
                    />{" "}
                    Favorite
                  </div>
                </div>
              </Row>

              <Row style={{ height: "250px" }}>
                <Col
                  md={6}
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={
                      Array.isArray(viewDetails?.images) &&
                        viewDetails.images.length > 0
                        ? imageBase + viewDetails?.images[0]
                        : Img1
                    }
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      padding: "10px",
                      borderTopLeftRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  />
                </Col>
                <Col
                  md={6}
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Row style={{ height: "125px" }}>
                    {/* Nested Columns inside the Parent Column */}
                    <Col md={6} style={{ padding: "10px" }}>
                      <img
                        src={
                          Array.isArray(viewDetails?.images) &&
                            viewDetails.images.length > 0
                            ? imageBase + viewDetails?.images[1]
                            : Img2
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                    <Col md={6} style={{ padding: "10px" }}>
                      <img
                        src={
                          Array.isArray(viewDetails?.images) &&
                            viewDetails.images.length > 0
                            ? imageBase + viewDetails?.images[2]
                            : Img3
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                  </Row>
                  {/* seond row */}

                  <Row style={{ height: "125px" }}>
                    {/* Nested Columns inside the Parent Column */}
                    <Col md={6} style={{ padding: "10px" }}>
                      <img
                        src={
                          Array.isArray(viewDetails?.images) &&
                            viewDetails.images.length > 0
                            ? imageBase + viewDetails?.images[3]
                            : Img4
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                    <Col md={6} style={{ padding: "10px" }}>
                      <img
                        src={
                          Array.isArray(viewDetails?.images) &&
                            viewDetails.images.length > 0
                            ? imageBase + viewDetails?.images[4]
                            : Img5
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>

              <Row className="border-top border-2 mt-3">
                <h5 className="mt-4">Booking Details</h5>

                <Row className="w-100">
                  <Col
                    xs={12}
                    md={4}
                    className="d-flex justify-content-center my-2"
                  >
                    <Button
                      className="d-flex align-items-center justify-content-center border rounded-pill bg-light text-dark"
                      style={{ width: "180px", height: "40px" }}
                    >
                      <FaCalendarAlt className="me-2" />{" "}
                      {viewDetails?.booking_date}
                    </Button>
                  </Col>

                  <Col
                    xs={12}
                    md={4}
                    className="d-flex justify-content-center my-2"
                  >
                    <Button
                      className="d-flex align-items-center justify-content-center border rounded-pill bg-light text-dark"
                      style={{ width: "180px", height: "40px" }}
                    >
                      <FaCalendarAlt className="me-2" />
                      {viewDetails?.booking_hour} | From{" "}
                      {viewDetails?.booking_start_time} to{" "}
                      {viewDetails?.booking_end_time}
                    </Button>
                  </Col>

                  <Col
                    xs={12}
                    md={4}
                    className="d-flex justify-content-center my-2"
                  >
                    <Button
                      className="d-flex align-items-center justify-content-center border rounded-pill bg-light text-dark"
                      style={{ width: "180px", height: "40px" }}
                    >
                      <FaCalendarAlt className="me-2" /> October 22, 2023
                    </Button>
                  </Col>
                </Row>
              </Row>

              <Row className="border-top border-2 mt-3">
                <h5 className="mt-4">Included in your booking</h5>

                <Row className="w-100">
                  <Col
                    xs={6}
                    md={3}
                    className="d-flex justify-content-center my-2"
                  >
                    <Button
                      className="d-flex align-items-center justify-content-center border bg-light text-dark"
                      style={{ width: "150px", height: "40px" }}
                    >
                      <FaCalendarAlt className="me-2" /> Parking
                    </Button>
                  </Col>

                  <Col
                    xs={6}
                    md={3}
                    className="d-flex justify-content-center my-2"
                  >
                    <Button
                      className="d-flex align-items-center justify-content-center border bg-light text-dark"
                      style={{ width: "150px", height: "40px" }}
                    >
                      <FaCalendarAlt className="me-2" /> Wifi
                    </Button>
                  </Col>

                  <Col
                    xs={6}
                    md={3}
                    className="d-flex justify-content-center my-2"
                  >
                    <Button
                      className="d-flex align-items-center justify-content-center border bg-light text-dark"
                      style={{ width: "150px", height: "40px" }}
                    >
                      <FaCalendarAlt className="me-2" /> 2 Rooms
                    </Button>
                  </Col>

                  <Col
                    xs={6}
                    md={3}
                    className="d-flex justify-content-center my-2"
                  >
                    <Button
                      className="d-flex align-items-center justify-content-center border bg-light text-dark"
                      style={{ width: "150px", height: "40px" }}
                    >
                      <FaCalendarAlt className="me-2" /> Kitchen
                    </Button>
                  </Col>

                  <Col
                    xs={6}
                    md={3}
                    className="d-flex justify-content-center my-2"
                  >
                    <Button
                      className="d-flex align-items-center justify-content-center border bg-light text-dark"
                      style={{ width: "150px", height: "40px" }}
                    >
                      <FaCalendarAlt className="me-2" /> Tables
                    </Button>
                  </Col>

                  <Col
                    xs={6}
                    md={3}
                    className="d-flex justify-content-center my-2"
                  >
                    <Button
                      className="d-flex align-items-center justify-content-center border bg-light text-dark"
                      style={{ width: "150px", height: "40px" }}
                    >
                      <FaCalendarAlt className="me-2" /> Chairs
                    </Button>
                  </Col>
                </Row>
              </Row>

              <Row>
                <h5 className="mt-4">Rules</h5>
                <Col xs={12} md={12}>
                  <Accordion className="w-100">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Parking</Accordion.Header>
                      <Accordion.Body>
                        This is the first item's accordion body. It is shown by
                        default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes
                        control the overall appearance, as well as the showing
                        and hiding via CSS transitions. You can modify any of
                        this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any
                        HTML can go within the, though the transition does limit
                        overflow.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>

                <Col xs={12} md={12}>
                  <Accordion className="w-100">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Host rules</Accordion.Header>
                      <Accordion.Body>
                        This is the first item's accordion body. It is shown by
                        default, until the collapse plugin adds the appropriate
                        classes that we use to style each element. These classes
                        control the overall appearance, as well as the showing
                        and hiding via CSS transitions. You can modify any of
                        this with custom CSS or overriding our default
                        variables. It's also worth noting that just about any
                        HTML can go within the, though the transition does limit
                        overflow.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
              <Row>
                <h5 className="mt-4">Address & Location </h5>
              </Row>

              <Row>
                <div className="location-reviews mt-4">
                  <div className="location-reviews-top">
                    <h5>
                      Reviews ({viewDetails?.reviews_total_count}) {viewDetails?.reviews_total_rating} <FaStar /> Rating
                    </h5>
                    <p className="ms-auto me-1">Sort by:</p>
                    <Dropdown onSelect={(eventKey) => {
                        setReviewFilter(eventKey);
                        setCount(prev=>prev+1);
                      }} className="chat-left-top-dropdown">
                      <Dropdown.Toggle variant="light" className="dropdown-toggle">
                        {filterLabel[reviewFilter]}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="chat-left-top-dropdown-list">
                        <Dropdown.Item eventKey="highest_review">Highest Review</Dropdown.Item>
                        <Dropdown.Item eventKey="lowest_review">Lowest Review</Dropdown.Item>
                        <Dropdown.Item eventKey="recent_review">Recent Reviews</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                {reviews.map((review, index) => (
                  <Row className="border p-3 rounded align-items-center" key={index}>
                    {/* Left Side: Image, Name, Description */}
                    <Col xs={8} className="d-flex align-items-center">
                      <Image
                        src={`${imageBase}${review?.profile_image}`}
                        roundedCircle
                        width="50"
                        height="50"
                        className="me-3"
                      />
                      <div>
                        <h6 className="mb-1">{review?.reviewer_name}</h6>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: "14px" }}
                        >
                          {review?.review_message}
                        </p>
                      </div>
                    </Col>

                    {/* Right Side: Rating & Date */}
                    <Col xs={4} className="text-end">
                      {/* <div>
                        {[...Array(5)].map((_, index) => (
                          <FaStar key={index} className="text-warning" />
                        ))}
                      </div> */}
                      <LocationReviewStars rating={review?.review_rating}/>
                      <small className="text-muted">{review?.review_date}</small>
                    </Col>
                  </Row>
                ))}
                <button className="location-reviews-btn" type="button" onClick={()=>setPage(prev=>prev+1)}>
                  Show More Reviews
                </button>
              </Row>
            </Container>
          </div>
          {/* third row */}
          <div style={{ width: "25%", overflowY: "auto" }}>
            <Container className="border">
              <h5 className="mt-3 text-center">Guest by</h5>

              <Row className="m-3">
                <Col
                  xs={8}
                  className="d-flex align-items-center border-bottom border-2 mt-3 w-100 pb-2"
                >
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbTOxk5mr0FZbuyX9htlwSpsdBPz-32lyXQ&s"
                    roundedCircle
                    width="50"
                    height="50"
                    className="me-3"
                  />
                  <div>
                    <h6 className="mb-1">John Doe</h6>
                  </div>
                  <FaStar className="text-warning m-1" /> 4.9
                </Col>
              </Row>
              <Row className="m-3">
                <Button variant="success m-1">Review Guest</Button>
                <Button className="m-1 border border-2" variant="light">
                  Message the guest
                </Button>
                <Button className="m-1 border border-2" variant="light" onClick={()=>setShowReportModal(true)}>
                  Report an issue
                </Button>
              </Row>
            </Container>

            <Container className="border m-1">
              <Row>
                <Col className="d-flex align-item-center m-3  border-bottom pb-3">
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbTOxk5mr0FZbuyX9htlwSpsdBPz-32lyXQ&s"
                    width="60"
                    height="70"
                    className="me-3"
                  />
                  <div>
                    <h6>Cabin in Peshastin</h6>
                    <FaStar className="text-warning" />
                    <span>5.0 (1k+)</span>
                    <div>
                      <MdOutlineMyLocation className="text-secondary" />
                      <span>37 miles away</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Container>
                <Row>
                  <Col>2 Hours</Col>
                  <Col className="text-end ">$300</Col>
                </Row>
                <Row>
                  <Col>Cleaning Fee</Col>
                  <Col className="text-end ">$20</Col>
                </Row>
                <Row>
                  <Col>Zyvo Service Fee</Col>
                  <Col className="text-end ">$2</Col>
                </Row>
                <Row>
                  <Col>Taxes </Col>
                  <Col className="text-end ">$10</Col>
                </Row>
                <Row className="border-bottom border-2 pb-3">
                  <Col>Add-on</Col>
                  <Col className="text-end ">$2</Col>
                </Row>
                <Row className="mt-3">
                  <Col className="fw-bold text-black">Add-on</Col>
                  <Col className="text-end fw-bold text-black">$322</Col>
                </Row>
              </Container>
            </Container>
          </div>
        </div>
      </div>
      <Footer />
      <ReportBookingModal
        show={showReportModal} 
        handleClose={()=>setShowReportModal(false)}
        user_id={viewDetails?.user_id}
        booking_id={viewDetails?.booking_id}
        property_id={viewDetails?.property_id}
      />
    </>
  );
};

export default BookingHost;
