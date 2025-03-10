import React, { useState, useEffect } from "react";
import Header from "../../components/guest/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useCommon from "../../hooks/useCommon";
import LocationImagesModal from "../../components/guest/LocationImagesModal";
import { KEYS, imageBase } from "../../config/Constant";
import LocationReviewStars from "../../components/guest/LocationReviewStars";
import CircularSlider from "@fseehawer/react-circular-slider";
import { DayPicker } from "react-day-picker";

//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//

import "react-day-picker/style.css";
import Accordion from "react-bootstrap/Accordion";
import Map from "../../components/guest/Map";
import TimeRangePicker from "../../components/guest/custom/TimeRangPicker";
import LocationShareModal from "../../components/guest/LocationShareModal";
import AddToWishlistModal from "../../components/guest/wishlistModals/AddToWishlistModal";
import { setGuestWishlistData } from "../../store/slices/commonSlice";

//
function Location() {
  const navigate = useNavigate();
  //
  const userData = JSON.parse(localStorage.getItem(KEYS.USER_INFO));
  const userId = String(userData?.user_id);

  const { getPropertyDetails, getPropertyReviews, guestWishlistData } =
    useCommon();

  const location = useLocation();

  const { id } = useParams();

  const propertyId = id;

  console.log(propertyId, typeof propertyId, "propertyIdpropertyIdpropertyId");

  const [showPropertyImages, setShowPropertyImages] = useState(false);
  const [propertyDetails, setPropertyDetails] = useState({});
  //
  const [showShareModal, setShowShareModal] = useState();
  const [showAddWishlistModal, setShowAddWishlistModal] = useState(false);
  const [wishlistArr, setWishlistArr] = useState([]);

  // console.log(JSON.stringify(propertyDetails, null, 2), "propertyDetails");
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedAddons, setSelectedAddons] = useState([]);
  console.log(selectedAddons, "assjdfhasdfhsfjk");
  //
  const [reviewsArr, setReviewsArr] = useState([]);
  const [reviewFilter, setReviewFilter] = useState("highest_review");
  const [currentPage, setCurrentPage] = useState(1);
  //
  const [hoursValue, setHoursValue] = useState(0);
  const [dateSelected, setDateSelected] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  //
  console.log(startTime, endTime, "totalPricetotalPrice");
  const [buttonText, setButtonText] = useState("Start Booking");
  const [showPropertyAddOns, setShowPropertyAddOns] = useState(false);

  const maxLines = 3;

  const fetchPropertyDetails = async () => {
    const result = await getPropertyDetails({
      user_id: userId,
      property_id: propertyId,
    });
    console.log("result is", result);
    setPropertyDetails(result.data);
  };

  const fetchPropertyReviews = async (page) => {
    const result = await getPropertyReviews({
      property_id: propertyId,
      filter: reviewFilter,
      page,
    });
    if (page == 1) {
      setReviewsArr(result.data);
    } else {
      setReviewsArr(reviewsArr.concat(result.data));
    }
  };

  const getWishlist = async () => {
    const wishlistData = await guestWishlistData({
      user_id: 1,
    });
    // console.log("wishlist data is", wishlistData);
    setWishlistArr(wishlistData?.data);
  };

  const calculateTotalPrice = (hours, hourlyRate) => {
    const result = parseInt(hours) * parseInt(hourlyRate);
    setTotalPrice(result);
  };

  useEffect(() => {
    fetchPropertyDetails();
    fetchPropertyReviews(1);
    getWishlist();
    console.log("fetched from first render use Effect.");
  }, []);

  useEffect(() => {
    if (currentPage != 1) {
      fetchPropertyReviews();
      console.log("fetched from current page use Effect.");
    }
  }, [currentPage]);

  const handleTimeRangeChange = (timeRange) => {
    console.log("Stored Time (24-hour format):", timeRange);
    setStartTime(timeRange.from);
    setEndTime(timeRange.to);
  };
  //handle wishlist

  const handleSubmit = (e) => {
    navigate("/wishlist");
  };

  // Handle item click
  const handleAddonClick = (item) => {
    setSelectedAddons((prev) => {
      const isAlreadySelected = prev.some((addon) => addon.name === item.name);
      if (isAlreadySelected) {
        return prev.filter((addon) => addon.name !== item.name); // Deselect if already selected
      } else {
        return [...prev, item]; // Select new item
      }
    });
  };
  //

  //   user_id:141
  // property_id:23
  // booking_start:2025-02-08 06:00:00
  // booking_end:2025-02-08 13:00:00
  // booking_date:2025-02-03
  // booking_hours:2
  // booking_amount:50
  // total_amount:68
  // customer_id:cus_RqlxqH00q5jnbb
  // card_id:pm_1Qx4PT2Nd862ZJtEbN5k2UnG
  // service_fee:10
  // discount_amount:10
  // tax:10

  const objectTobeNavigated = {
    property_id: propertyId,
    host_id: propertyDetails?.host_id,
    property_title: propertyDetails?.property_title,
    min_booking_hours: propertyDetails?.min_booking_hours,
    property_size: propertyDetails?.property_size,
    is_in_wishlist: propertyDetails?.is_in_wishlist,
    hourly_rate: propertyDetails?.hourly_rate,
    bulk_discount_hour: propertyDetails?.bulk_discount_hour,
    bulk_discount_rate:
      propertyDetails?.bulk_discount_hour > "2" ? (15 / 100) * totalPrice : 0,
    cleaning_fee: propertyDetails?.cleaning_fee,
    service_fee: (13 / 100) * totalPrice,
    tax: (5 / 100) * totalPrice,
    is_instant_book: propertyDetails?.is_instant_book,
    images: propertyDetails?.images,
    hosted_by: propertyDetails?.hosted_by,
    host_profile_image: propertyDetails?.host_profile_image,
    property_description: propertyDetails?.property_description,
    activities: propertyDetails?.activities,
    amenities: propertyDetails?.amenities,
    parking_rules: propertyDetails?.parking_rules,
    host_rules: propertyDetails?.host_rules,
    add_ons: selectedAddons,
    address: propertyDetails?.address,
    latitude: propertyDetails?.latitude,
    longitude: propertyDetails?.longitude,
    reviews_total_rating: propertyDetails?.reviews_total_rating,
    reviews_total_count: propertyDetails?.reviews_total_count,
    reviews: propertyDetails?.reviews,
    hoursValue: hoursValue,
    dateSelected: dateSelected,
    startTime: startTime,
    endTime: endTime,
    totalPrice: totalPrice,
  };

  const handleValidation = () => {
    // Validation
    if (!dateSelected) {
      toast.error("Please select a date.");
      return;
    }
    if (!startTime) {
      toast.error("Please select a start time.");
      return;
    }
    if (!endTime) {
      toast.error("Please select an end time.");
      return;
    }
    if (hoursValue <= 0) {
      toast.error("Hours must be greater than 0.");
      return;
    }

    // If everything is valid
    toast.success("Validation passed! Proceeding to checkout.");
    setButtonText("Proceed to Checkout"); // Change button text
    navigate("/checkoutPage", { state: objectTobeNavigated });
  };

  // params

  /*{
{
  "property_id": 21,
  "host_id": 64,
  "property_title": "Hotel Stay inn",
  "min_booking_hours": "3.00",
  "property_size": 550,
  "is_in_wishlist": 0,
  "hourly_rate": "10.00",
  "bulk_discount_hour": 2,
  "bulk_discount_rate": "15.00",
  "cleaning_fee": "10.00",
  "service_fee": "13.00",
  "tax": "5.00",
  "is_instant_book": 1,
  "images": [
    "/storage/property_images/property_1ba5c0ad-2300-4f94-a499-002b2881ef11.jpg",
    "/storage/property_images/property_25aeab0b-bdfa-4b9e-85ca-cac9cecfabc8.jpg",
    "/storage/property_images/property_553673e6-12d2-41b3-97e8-59da99963415.jpg"
  ],
  "hosted_by": "test new",
  "host_profile_image": "/storage/profile_images/1738048712_28_01_2025_12_48_31_PM.jpeg",
  "property_description": "Test new",
  "activities": [
    "Event Space",
    "Performance",
    "Dinner",
    "Wedding"
  ],
  "amenities": [
    "Free Parking",
    "Wheelchair Accessible",
    "BBQ/Grill Area",
    "Meal Included"
  ],
  "parking_rules": "Parking rule",
  "host_rules": "Host rule",
  "add_ons": [],
  "address": "test, Noida, Uttar Pradesh, 201301, India",
  "latitude": "28.5746700",
  "longitude": "77.3560500",
  "reviews_total_rating": "2.67",
  "reviews_total_count": "3",
  "reviews": [
    {
      "reviewer_name": "krish Khan",
      "profile_image": "/storage/profile_images/1739178099_10_02_2025_14_31_39_PM.jpeg",
      "review_rating": "3",
      "review_message": "Kkkk",
      "review_date": "Feb 14, 2025"
    },
    {
      "reviewer_name": "ram kumar",
      "profile_image": "/storage/profile_images/1740745496_image.jpg",
      "review_rating": "3",
      "review_message": "thabkd",
      "review_date": "Mar 04, 2025"
    },
    {
      "reviewer_name": "Satyam Dwivedi",
      "profile_image": "/storage/profile_images/1740637525_27_02_2025_11_55_24_AM.jpeg",
      "review_rating": "2",
      "review_message": "jjjj",
      "review_date": "Mar 05, 2025"
    }
  ]
}
    
  }*/

  return (
    <>
      <Header />

      {/* for main body */}

      <main className="mb-0">
        {/* <!-- MOBILE --> */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-search-bar-back">
                    <a href="home.html">
                      <i className="fa-regular fa-arrow-left"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE -->
          <!-- LOCATION-PAGE --> */}
        <div className="location-wrap location-detail">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="location-top">
                  <h1>
                    {propertyDetails?.property_title}
                    <ul>
                      <li>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />{" "}
                        <span>5.0</span> (30 reviews)
                      </li>
                    </ul>
                  </h1>
                  <ul>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                        alt=""
                      />{" "}
                      <span>{propertyDetails?.reviews_total_rating}</span> (
                      {propertyDetails?.reviews_total_count} reviews)
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/time.svg"
                        alt=""
                      />{" "}
                      {parseFloat(propertyDetails?.min_booking_hours)} hr min
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/size.svg"
                        alt=""
                      />{" "}
                      {propertyDetails?.property_size} sqft
                    </li>
                    {propertyDetails?.is_instant_book && (
                      <li>
                        <i className="fa-solid fa-bolt"></i> Instant book
                      </li>
                    )}
                    {/* <!-- RIGHT --> */}
                    <li className="location-top-share">
                      <a
                        onClick={() => setShowShareModal((prev) => !prev)}
                        href="javascript:void(0);"
                        // data-bs-target="#share-popup"
                        // data-bs-toggle="modal"
                      >
                        <i className="fa-solid fa-share-nodes"></i> Share
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="javascript:void(0);"
                        data-bs-toggle="modal"
                        data-bs-target="#add-wishlist"
                      >
                        <i className="fa-solid fa-heart"></i> Wishlist
                      </a>
                    </li> */}

                    <li>
                      <a
                        onClick={() => {
                          if (!propertyDetails?.is_in_wishlist) {
                            setShowAddWishlistModal(true);
                            setPropertyDetails((prev) => ({
                              ...prev,
                              is_in_wishlist: true, // ✅ Update wishlist state
                            }));
                          }
                        }}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <i
                          className="fa-solid fa-heart"
                          style={{
                            color: propertyDetails?.is_in_wishlist ? "red" : "", // ✅ Toggle color dynamically
                          }}
                        ></i>
                        Wishlist
                      </a>
                    </li>
                    {/* <!-- RIGHT --> */}
                  </ul>
                </div>
                <button
                  className="location-image-grid"
                  type="button"
                  onClick={() => setShowPropertyImages(true)}
                >
                  {propertyDetails?.images?.length >= 1 && (
                    <div className="location-image-grid-one">
                      <img
                        src={`https://zyvo.tgastaging.com/${propertyDetails.images[0]}`}
                        alt=""
                      />
                    </div>
                  )}
                  {propertyDetails.images?.map((item, index) => {
                    if (index > 0 && index < 4) {
                      return (
                        <img
                          key={index}
                          src={`https://zyvo.tgastaging.com/${item}`}
                          alt={`Property Image ${index}`}
                        />
                      );
                    }
                    return null; // Return null for items outside the range
                  })}
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="location-right">
                  <div className="location-right-top">
                    <h2>
                      $13/hr <br /> <span>1 hr minimum</span>
                    </h2>
                    <hr />
                    <div className="location-right-top-in">
                      <p>
                        4+ hour discount{" "}
                        <span className="info-wrap">
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/info.svg"
                            alt=""
                          />
                          <span className="info-in">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Earum quae iste voluptatem at labore fuga
                            commodi atque cum ut.
                          </span>
                        </span>
                      </p>
                      <p>15% off</p>
                    </div>
                  </div>
                  <div className="location-right-hour-day">
                    <ul
                      className="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-hourly-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-hourly"
                          type="button"
                          role="tab"
                          aria-controls="pills-hourly"
                          aria-selected="false"
                        >
                          Choose Hours
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-dates-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-dates"
                          type="button"
                          role="tab"
                          aria-controls="pills-dates"
                          aria-selected="true"
                        >
                          Choose Day
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane show active"
                        id="pills-hourly"
                        role="tabpanel"
                        aria-labelledby="pills-hourly-tab"
                      >
                        <div className="hour-slider-wrap">
                          <div id="slider">
                            <CircularSlider
                              progressColorFrom="#4aeab1"
                              progressColorTo="#4aeab1"
                              min={0}
                              max={24}
                              trackSize={40}
                              progressSize={40}
                              knobSize={40}
                              knobColor="#fff"
                              label="Hours"
                              labelColor="#212121"
                              onChange={(value) => {
                                setHoursValue(value);
                                calculateTotalPrice(
                                  value,
                                  parseFloat(propertyDetails?.hourly_rate)
                                );
                                console.log(value);
                              }}
                            />
                          </div>
                          <div className="hour-slider-in">
                            <p>
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/filters/time.svg"
                                alt=""
                              />
                              {hoursValue == 1
                                ? "1 hour"
                                : `${hoursValue} hours`}
                            </p>
                            <p>
                              <img
                                src="https://design.yilstaging.com/ZYVO/assets/images/location/price.svg"
                                alt=""
                              />
                              {}
                              {isNaN(totalPrice) ? `$ ${0}` : `$ ${totalPrice}`}
                            </p>
                          </div>
                          <button
                            type="button"
                            className="location-right-btn"
                            onClick={handleValidation}
                          >
                            {buttonText}
                          </button>
                        </div>
                      </div>
                      <div
                        className="tab-pane"
                        id="pills-dates"
                        role="tabpanel"
                        aria-labelledby="pills-dates-tab"
                      >
                        <div id="daypicker">
                          <DayPicker
                            mode="single"
                            selected={dateSelected}
                            onSelect={setDateSelected}
                            footer={
                              dateSelected
                                ? `Selected: ${dateSelected.toLocaleDateString()}`
                                : "Pick a day."
                            }
                          />
                        </div>
                        <div className="time-slot">
                          <div className="time-slot-inner">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/filters/datepicker/time.svg"
                              alt=""
                            />

                            <div>
                              <TimeRangePicker
                                timeSelected={hoursValue}
                                onChange={handleTimeRangeChange}
                              />
                            </div>
                          </div>
                          <div className="time-slot-inner">
                            <img
                              src="https://design.yilstaging.com/ZYVO/assets/images/filters/datepicker/time.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <>
                          <button
                            type="submit"
                            className="location-right-btn"
                            onClick={handleValidation}
                          >
                            {buttonText}
                          </button>
                        </>
                      </div>
                    </div>
                    <h4>Cancel for free within 24 hours</h4>
                  </div>
                  <div className="location-right-shield">
                    <span className="info-wrap">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/create-profile/info.svg"
                        alt=""
                      />
                      <span className="info-in">
                        Your safety and peace of mind are our top priorities.
                        ZYVO is proud to provide comprehensive liability
                        insurance coverage for all bookings
                      </span>
                    </span>
                    <h2>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/location/zyvo-shield.svg"
                        alt=""
                      />
                      ZYVO Shield
                    </h2>
                    <p>
                      Our Commitment to Your Safety and <br /> Protection on
                      Zyvo.
                    </p>
                  </div>
                  <div className="chat-right-top">
                    <div className="chat-right-top-mob-left">
                      <h3>Hosted by</h3>
                      <div className="chat-right-top-profile">
                        <img
                          className="chat-right-top-profile-image"
                          src={`${imageBase}${propertyDetails?.host_profile_image}`}
                          alt=""
                        />
                        <h2>{propertyDetails?.hosted_by}</h2>
                        <img
                          className="chat-right-top-batch-image"
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/batch.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <hr />
                    <div className="chat-right-top-mob-right">
                      <a href="chat.html">Message the host</a>
                      <p>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/guides-articles/time.svg"
                          alt=""
                        />
                        Typically respond within 1 hr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 order-md-first order-lg-first">
                <div className="location-left">
                  <h2>About the Space</h2>
                  <div className="location-about">
                    <p
                      className={`clamped-text ${isExpanded ? "expanded" : ""}`}
                      style={{ "--max-lines": maxLines }}
                    >
                      {propertyDetails?.property_description}
                    </p>
                    <a onClick={() => setIsExpanded(!isExpanded)}>
                      {isExpanded ? "Read Less" : "Read More"}
                    </a>
                  </div>
                  <hr />
                  <h2>Included in your booking</h2>
                  <div className="location-included">
                    <ul>
                      {propertyDetails?.amenities?.map((item, index) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                  <h2>Rules</h2>
                  <div className="location-rules">
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/location/included/1.svg"
                            alt=""
                          />{" "}
                          Parking
                        </Accordion.Header>
                        <Accordion.Body>
                          {propertyDetails?.parking_rules}
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          <img
                            src="https://design.yilstaging.com/ZYVO/assets/images/location/included/7.svg"
                            alt=""
                          />{" "}
                          Host rules
                        </Accordion.Header>
                        <Accordion.Body>
                          {propertyDetails?.host_rules}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>

                  <hr />
                  <h2>Add-ons from the host</h2>
                  <div className="location-addons">
                    <p>
                      Host provided services, items or options. Available at
                      checkin.
                    </p>
                    <div className="location-addons-in">
                      {propertyDetails?.add_ons?.map((item, index) => {
                        if (index <= 3) {
                          const isSelected = selectedAddons.some(
                            (addon) => addon.name === item.name
                          );

                          return (
                            <div
                              className="location-addons-item"
                              key={index}
                              onClick={() => handleAddonClick(item)}
                              style={{
                                cursor: "pointer",
                                border: isSelected
                                  ? "1px solid blue"
                                  : "2px solid transparent", // Border changes when selected
                                padding: "10px",
                                borderRadius: "8px",
                                transition: "border 0.2s ease-in-out",
                              }}
                            >
                              <div className="location-addons-item-image">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/1.svg"
                                  alt=""
                                />
                              </div>
                              <h4>
                                {`${item.name}`} <br />
                                <span>
                                  ${`${parseFloat(item.price)}`} / Item
                                </span>
                              </h4>
                            </div>
                          );
                        }
                      })}
                    </div>
                    <div
                      className={
                        showPropertyAddOns ? "" : "location-hidden-addons"
                      }
                    >
                      <div className="location-addons-in">
                        {propertyDetails?.add_ons?.map((item, index) => {
                          if (index > 3) {
                            return (
                              <div className="location-addons-item" key={index}>
                                <div className="location-addons-item-image">
                                  <img
                                    src="https://design.yilstaging.com/ZYVO/assets/images/location/add-ons/1.svg"
                                    alt=""
                                  />
                                </div>
                                <h4>
                                  {`${item.name}`} <br />{" "}
                                  <span>
                                    ${`${parseFloat(item.price)}`} / Item
                                  </span>
                                </h4>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                    <a onClick={() => setShowPropertyAddOns((prev) => !prev)}>
                      {showPropertyAddOns ? "Show less" : "Show More"}
                    </a>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="address-location">
                  <div className="location-left">
                    <h2>Address & Location</h2>
                    <p>
                      <u>{propertyDetails?.address}</u>
                    </p>
                  </div>
                  {propertyDetails?.latitude && propertyDetails?.longitude && (
                    <div className="address-location-map">
                      <Map
                        lat={propertyDetails?.latitude}
                        lng={propertyDetails?.longitude}
                      />
                    </div>
                  )}
                </div>
                <div className="location-reviews">
                  <div className="location-reviews-top">
                    <h1>
                      Reviews ({propertyDetails?.reviews_total_count})
                      <span>
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                          alt=""
                        />{" "}
                        <b>{propertyDetails?.reviews_total_rating}</b> Rating
                      </span>
                    </h1>
                    <p className="ms-auto me-1">Sort by:</p>
                    <div className="chat-left-top-dropdown dropdown">
                      <span
                        className="dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Highest Review
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/dropdown.svg"
                          alt=""
                        />
                      </span>
                      <div className="chat-left-top-dropdown-list dropdown-menu">
                        <ul>
                          <li>
                            <a>Highest Review</a>
                          </li>
                          <li>
                            <a>Lowest Review</a>
                          </li>
                          <li>
                            <a>Recent Reviews</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {reviewsArr.map((item, index) => (
                    <div key={index} className="location-reviews-list">
                      <div className="location-reviews-list-left">
                        <img
                          src={`${imageBase}${item?.profile_image}`}
                          alt=""
                        />
                        <h2>
                          {item?.reviewer_name} <br />{" "}
                          <span>{item?.review_message}</span>
                        </h2>
                      </div>
                      <div className="location-reviews-list-right location-reviews-list-right-mob">
                        <div className="location-reviews-list-right-star">
                          <LocationReviewStars rating={item?.review_rating} />
                        </div>
                        <p>{item?.review_date}</p>
                      </div>
                    </div>
                  ))}
                  <button className="location-reviews-btn" type="button">
                    Show More Reviews
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- LOCATION-PAGE --> */}
      </main>
      {/* share with friends */}

      <div
        className="modal fade custom-modal"
        id="share-popup"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <h2>Share with friends</h2>
              <div className="share-in">
                <ul>
                  <li>
                    <a>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/1.svg"
                        alt=""
                      />{" "}
                      Copy Link
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/2.svg"
                        alt=""
                      />{" "}
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/3.svg"
                        alt=""
                      />{" "}
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/4.svg"
                        alt=""
                      />{" "}
                      Email
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/5.svg"
                        alt=""
                      />{" "}
                      X
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/6.svg"
                        alt=""
                      />{" "}
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/7.svg"
                        alt=""
                      />{" "}
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/popups/share/8.svg"
                        alt=""
                      />{" "}
                      Message
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add a wishlist */}

      <div
        className="modal fade"
        id="add-wishlist"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Add to Wishlist</h2>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body px-4 py-4">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="explore-guides-articles-in">
                    <a>
                      <div className="explore-guides-articles-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                          alt=""
                        />
                      </div>
                      <h3>Sea view</h3>
                      <p>4 saved</p>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="explore-guides-articles-in">
                    <a>
                      <div className="explore-guides-articles-image">
                        <img
                          src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                          alt=""
                        />
                      </div>
                      <h3>Cabin in Peshastin</h3>
                      <p>4 saved</p>
                    </a>
                  </div>
                </div>
                <div className="explore-guides-articles-wrap-btn">
                  <a
                    href="javascript:void(0);"
                    data-bs-dismiss="modal"
                    data-bs-target="#create-wishlist"
                    data-bs-toggle="modal"
                  >
                    Create Wishlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* create wishlist */}

      <div
        className="modal fade custom-modal"
        id="create-wishlist"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Create Wishlist</h2>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body px-4 py-4">
              <form onSubmit={handleSubmit}>
                <p>Please Enter the name</p>
                <label>
                  <input type="text" className="ps-3" placeholder="Name" />
                </label>
                <textarea disabled value="Description" />
                <p>
                  {/* style="color: #808080; font-weight: 400;" */}
                  Max 50 characters
                </p>
                <div className="custom-modal-label d-flex gap-3">
                  <input type="submit" value="Create" data-bs-dismiss="modal" />
                  <input type="reset" className="cancel-btn" value="Clear" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <AddToWishlistModal
        wishlistArr={wishlistArr}
        showAddWishlistModal={showAddWishlistModal}
        propertyId={propertyId}
        userId="1"
        handleClose={() => {
          setShowAddWishlistModal(false);
        }}
      />

      <LocationImagesModal
        show={showPropertyImages}
        handleClose={() => setShowPropertyImages(false)}
        images={propertyDetails?.images}
      />
      <LocationShareModal
        show={showShareModal}
        handleClose={() => setShowShareModal(false)}
        url={window.location.href}
      />
      <AuthModal />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Location;
