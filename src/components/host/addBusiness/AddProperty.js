import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Card, Form, Dropdown } from "react-bootstrap";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

//
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
//
// for activies
import image1 from "../../../assets/gallery/stay.png"; // Replace with your image path
import image2 from "../../../assets/gallery/event_spce.png";
import image3 from "../../../assets/gallery/photoShoot.png";
import image4 from "../../../assets/gallery/meeting.png";
//

//other activities

import party from "../../../assets/gallery/party.png"; // Replace with your image path
import flimShoot from "../../../assets/gallery/flim_shot.png";
import performance from "../../../assets/gallery/performance.png";
import workshop from "../../../assets/gallery/whats_app.png";

import corporate from "../../../assets/gallery/corpate_evnt.png"; // Replace with your image path
import wedding from "../../../assets/gallery/wedding.png";
import dinner from "../../../assets/gallery/diner.png";
import retrate from "../../../assets/gallery/retreat.png";

import popup from "../../../assets/gallery/popup.png"; // Replace with your image path
import networking from "../../../assets/gallery/networking.png";
import fitness from "../../../assets/gallery/fitness_clss.png";
import audio_recording from "../../../assets/gallery/audio_recording.png";
import swming from "../../../assets/swming.svg";
import { useDispatch } from "react-redux";
import { setAddPropertyDetails } from "../../../store/slices/hostuserSlice";
import { KEYS } from "../../../config/Constant";

const options = [
  { id: "Stays", image: image1, label: "Party" },
  { id: "Event Space", image: image2, label: "Event Space" },
  { id: "Photo shoot", image: image3, label: "Photo shoot" },
  { id: "Meeting", image: image4, label: "Meeting" },
];

const otherActiviy = [
  { id: "Party", image: party, label: "Stays" },
  { id: "Film Shoot", image: flimShoot, label: "Film Shoot" },
  { id: "Performance", image: performance, label: "Performance" },
  { id: "Workshop", image: workshop, label: "Workshop" },
  { id: "Corporate Event", image: corporate, label: "Corporate Event" },
  { id: "Wedding", image: wedding, label: "Wedding" },
  { id: "Dinner", image: dinner, label: "Dinner" },
  { id: "Retreat", image: retrate, label: "Retreat" },
  { id: "Pop-up", image: popup, label: "Pop-up" },
  { id: "Networking", image: networking, label: "Networking" },
  { id: "Fitness Class", image: fitness, label: "Fitness Class" },
  { id: "Audio Recording", image: audio_recording, label: "Audio Recording" },
  { id: "Swimming Pool", image: swming, label: "Swimming Pool" },
];

//

const amenitiesList = [
  "Wifi",
  "Kitchen",
  "Washer",
  "Dryer",
  "Air conditioning",
  "Heating",
  "Free Parking",
  "Meal Included",
  "Elevator/Lift Access",
  "Wheelchair Accessible",
  "Smoking Allowed",
  "Non-Smoking Property",
];
//
const AddProperty = ({ onCallBack, propertyData }) => {
  const dispatch = useDispatch();

  const [otherActivyShow, setOthActivyShow] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(
    propertyData?.activities != null && Array.isArray(propertyData.amenities)
      ? propertyData.activities
      : []
  ); // for activiites
  const [selectedAmenities, setSelectedAmenities] = useState(
    propertyData?.amenities != null && Array.isArray(propertyData.amenities)
      ? propertyData.amenities
      : []
  ); // for amentites
  const [selectedRoom, setSelectedRoom] = useState(
    propertyData?.space_type != null && propertyData?.space_type !== undefined
      ? propertyData.space_type
      : "entire_home"
  );
  const [showMore, setShowMore] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(
    propertyData?.property_size != null &&
      propertyData?.property_size !== undefined
      ? propertyData.property_size.toString()
      : "Any"
  ); // Default value

  //

  const [selectedOptionsOtherActivity, setSelectedOptionsOtherActivity] =
    useState(
      propertyData?.property_size != null &&
        propertyData?.property_size !== undefined
        ? propertyData.property_size.toString()
        : "Any"
    );

  const [customPrice, setCustomPrice] = useState(""); // For manual input

  const priceOptions = ["Any", "250", "350", "450", "550", "650", "750"];
  //

  // for guest

  const [selectedGuests, setSelectedGuests] = useState(
    propertyData?.max_guest_count != null &&
      propertyData?.max_guest_count !== undefined
      ? propertyData.max_guest_count.toString()
      : "Any"
  ); // Default value
  // console.log(selectedGuests, "selected guest counte");
  const [customGuests, setCustomGuests] = useState(""); // For manual input
  const guestOptions = ["Any", "3", "4", "5", "7", "8"];

  // for bedrooms
  const [selectedBedrooms, setSelectedBedrooms] = useState(
    propertyData?.bedroom_count != null &&
      propertyData?.bedroom_count !== undefined
      ? propertyData.bedroom_count.toString()
      : "Any"
  ); // Default value
  const [customBedrooms, setCustomBedrooms] = useState(""); // For manual input

  const bedroomOptions = ["Any", "1", "2", "3", "4", "5", "6", "7", "8"];
  //
  // for bedrooms

  const [selectedBathrooms, setSelectedBathrooms] = useState(
    propertyData?.bathroom_count != null &&
      propertyData?.bathroom_count !== undefined
      ? propertyData.bathroom_count.toString()
      : "Any"
  ); // Default value
  const [customBathrooms, setCustomBathrooms] = useState(""); // For manual input

  const bathroomOptions = ["Any", "1", "2", "3", "4", "5", "6", "7", "8"];

  //

  const [instantBook, setInstantBook] = useState(
    propertyData?.is_instant_book != null &&
      propertyData?.is_instant_book !== undefined
      ? propertyData?.is_instant_book.toString()
      : "0"
  );
  const [selfCheckIn, setSelfCheckIn] = useState(
    propertyData?.has_self_checkin != null &&
      propertyData?.has_self_checkin !== undefined
      ? propertyData?.has_self_checkin.toString()
      : "0"
  );
  const [allowsPets, setAllowsPets] = useState(
    propertyData?.allows_pets != null && propertyData?.allows_pets !== undefined
      ? propertyData?.allows_pets.toString()
      : "0"
  );
  const [selectedCancellation, setSelectedCancellation] = useState(
    propertyData?.cancellation_duration != null &&
      propertyData?.cancellation_duration !== undefined
      ? propertyData.cancellation_duration.toString()
      : ""
  );
  //

  const localSaved = JSON.parse(localStorage.getItem(KEYS.USER_INFO));
  const userId = localSaved?.user_id;
  console.log(userId, "log userID11111");

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
    setCustomPrice(""); // Reset custom input when a button is clicked
  };

  const handleCustomPriceChange = (e) => {
    setCustomPrice(e.target.value);
    setSelectedPrice(e.target.value); // Update selected price when typing
  };

  // for guest

  const handleGuestChange = (guest) => {
    setSelectedGuests(guest);
    setCustomGuests(""); // Reset custom input when a button is clicked
  };

  const handleCustomGuestChange = (e) => {
    setCustomGuests(e.target.value);
    setSelectedGuests(e.target.value); // Update selected guests when typing
  };
  // for bedrooms

  const handleBedroomChange = (bedroom) => {
    setSelectedBedrooms(bedroom);
    setCustomBedrooms(""); // Reset custom input when a button is clicked
  };

  const handleCustomBedroomChange = (e) => {
    setCustomBedrooms(e.target.value);
    setSelectedBedrooms(e.target.value); // Update selected bedrooms when typing
  };
  // for bedroom

  const handleBathroomChange = (bathroom) => {
    setSelectedBathrooms(bathroom);
    setCustomBathrooms(""); // Reset custom input when a button is clicked
  };

  const handleCustomBathroomChange = (e) => {
    setCustomBathrooms(e.target.value);
    setSelectedBathrooms(e.target.value); // Update selected bathrooms when typing
  };
  // calculate hours

  const handleCancellationChange = (value) => {
    const numericValue = value.includes("Days")
      ? (parseInt(value) * 24).toString() // Convert days to hours & store as string
      : parseInt(value).toString(); // Keep hours & store as string

    setSelectedCancellation(numericValue);
  };

  // for activites

  const handleSelection = (id) => {
    setSelectedOptions(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id) // Deselect if already selected
          : [...prevSelected, id] // Add to selection
    );
  };
  //other activity

  const handleOtherActiviy = (id) => {
    setSelectedOptionsOtherActivity((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  // for am
  const handleCheckboxChange = (amenity) => {
    setSelectedAmenities(
      (prev) =>
        prev.includes(amenity)
          ? prev.filter((item) => item !== amenity) // Remove if selected
          : [...prev, amenity] // Add if not selected
    );
  };

  // handle all data

  let params = {
    user_id: userId,
    space_type: selectedRoom,
    property_size: selectedPrice,
    max_guest_count: parseInt(selectedGuests),
    bedroom_count: selectedBedrooms,
    bathroom_count: selectedBathrooms,
    is_instant_book: instantBook,
    has_self_checkin: selfCheckIn,
    allows_pets: allowsPets,
    cancellation_duration: selectedCancellation,
    activities: [
      ...(selectedOptions || []),
      ...(selectedOptionsOtherActivity || []),
    ],
    amenities: selectedAmenities,
  };

  const validationHandling = () => {
    let flag = true;

    if (!selectedPrice || selectedPrice === "Any") {
      toast.error("Please select area of Property size (sq ft)!", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!selectedGuests || selectedGuests === "any") {
      toast.error("Please select Number of people", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!selectedBedrooms || selectedBedrooms === "any") {
      toast.error("Please select count of bedrooms", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!selectedBathrooms || selectedBathrooms === "any") {
      toast.error("Please select count bathrooms", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (selectedOptions.length === 0) {
      toast.error("Please select any activity", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (selectedAmenities.length === 0) {
      toast.error("Please select any amenities!", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!selectedCancellation) {
      toast.error("Please select a Cancellation option!", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    return flag;
  };

  const handleHomeSetup = async () => {
    if (!validationHandling()) return;

    dispatch(setAddPropertyDetails(params));
    console.log(params, "hello users data");

    // setActiveTab("gallery_location");
    onCallBack("gallery_location");
  };

  const clarAll = () => {
    setSelectedGuests("");
    setSelectedRoom("");
    setSelectedPrice("");
    setSelectedRoom("");
    setSelectedGuests("");
    setSelectedCancellation(null);
    setSelectedBedrooms(null);
    setSelectedAmenities([]);
    setSelectedBathrooms([]);
    setSelectedOptions([]);
    setAllowsPets(null);
    setSelfCheckIn(null);
    setInstantBook(null);
    setSelectedOptionsOtherActivity([]);
  };
  return (
    <>
      <hr style={{}} />

      <>
        <h4
          style={{
            marginTop: "20px",
            color: "#000000",

            fontSize: 28,
          }}
        >
          Type of place
        </h4>
        <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
          Setup places, availability, prices and more.
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
            // maxWidth: "500px",
            margin: "20px auto",
            backgroundColor: "#EBEDED",
            height: 55,
          }}
        >
          {["entire_home", "private_room"].map((room) => (
            <button
              key={room}
              onClick={() => setSelectedRoom(room)}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                backgroundColor:
                  selectedRoom === room ? "#FFFFFF" : "transparent",
                color: selectedRoom === room ? "#000000" : "#000",
                border:
                  selectedRoom === room
                    ? "2px solid #FFFFFF"
                    : "2px solid transparent",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease",
                width: "80%",
                height: 40,
              }}
            >
              {room}
            </button>
          ))}
        </div>

        <h4
          style={{
            marginTop: "20px",
            color: "#000000",

            fontSize: 28,
          }}
        >
          Availability
        </h4>
        <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
          Property size (sq ft)
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
            height: 55,
          }}
        >
          {priceOptions.map((price) => (
            <button
              key={price}
              onClick={() => handlePriceChange(price)}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                backgroundColor:
                  selectedPrice === price ? "#FFFFFF" : "transparent",
                color: selectedPrice === price ? "#000000" : "#000",
                border:
                  selectedPrice === price
                    ? "2px solid #FFFFFF"
                    : "2px solid transparent",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease",
                width: "12%",
                height: 40,
                textAlign: "center",
              }}
            >
              {price}
            </button>
          ))}

          {/* Custom Input Field */}
          <input
            type="text"
            placeholder="Type..."
            value={customPrice}
            onChange={handleCustomPriceChange}
            style={{
              padding: "10px",
              fontSize: "14px",
              width: "12%",
              height: "40px",
              border: "2px solid transparent",
              borderRadius: "20px",
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              color: "#000",
              fontWeight: "500",
              outline: "none",
            }}
          />
        </div>

        <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
          Number of people
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
            height: 55,
          }}
        >
          {guestOptions.map((guest) => (
            <button
              key={guest}
              onClick={() => handleGuestChange(guest)}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                backgroundColor:
                  selectedGuests === guest ? "#FFFFFF" : "transparent",
                color: selectedGuests === guest ? "#000000" : "#000",
                border:
                  selectedGuests === guest
                    ? "2px solid #FFFFFF"
                    : "2px solid transparent",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease",
                width: "12%",
                height: 40,
                textAlign: "center",
              }}
            >
              {guest}
            </button>
          ))}

          {/* Custom Input Field */}
          <input
            type="text"
            placeholder="Type..."
            value={customGuests}
            onChange={handleCustomGuestChange}
            style={{
              padding: "10px",
              fontSize: "14px",
              width: "12%",
              height: "40px",
              border: "2px solid transparent",
              borderRadius: "20px",
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              color: "#000",
              fontWeight: "500",
              outline: "none",
            }}
          />
        </div>

        <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
          Bedrooms
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
            height: 55,
          }}
        >
          {bedroomOptions.map((bedroom) => (
            <button
              key={bedroom}
              onClick={() => handleBedroomChange(bedroom)}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                backgroundColor:
                  selectedBedrooms === bedroom ? "#FFFFFF" : "transparent",
                color: selectedBedrooms === bedroom ? "#000000" : "#000",
                border:
                  selectedBedrooms === bedroom
                    ? "2px solid #FFFFFF"
                    : "2px solid transparent",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease",
                width: "12%",
                height: 40,
                textAlign: "center",
              }}
            >
              {bedroom}
            </button>
          ))}

          {/* Custom Input Field */}
          <input
            type="text"
            placeholder="Type..."
            value={customBedrooms}
            onChange={handleCustomBedroomChange}
            style={{
              padding: "10px",
              fontSize: "14px",
              width: "12%",
              height: "40px",
              border: "2px solid transparent",
              borderRadius: "20px",
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              color: "#000",
              fontWeight: "500",
              outline: "none",
            }}
          />
        </div>

        <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
          Bathrooms
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
            height: 55,
          }}
        >
          {bathroomOptions.map((bathroom) => (
            <button
              key={bathroom}
              onClick={() => handleBathroomChange(bathroom)}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                backgroundColor:
                  selectedBathrooms === bathroom ? "#FFFFFF" : "transparent",
                color: selectedBathrooms === bathroom ? "#000000" : "#000",
                border:
                  selectedBathrooms === bathroom
                    ? "2px solid #FFFFFF"
                    : "2px solid transparent",
                borderRadius: "20px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s ease",
                width: "12%",
                height: 40,
                textAlign: "center",
              }}
            >
              {bathroom}
            </button>
          ))}

          {/* Custom Input Field */}
          <input
            type="text"
            placeholder="Type..."
            value={customBathrooms}
            onChange={handleCustomBathroomChange}
            style={{
              padding: "10px",
              fontSize: "14px",
              width: "12%",
              height: "40px",
              border: "2px solid transparent",
              borderRadius: "20px",
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              color: "#000",
              fontWeight: "500",
              outline: "none",
            }}
          />
        </div>

        <hr />

        <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
          Activities
        </h6>
        <Container>
          <Row className="justify-content-center mt-4">
            {options.map((option) => {
              const isSelected = selectedOptions.includes(option.id);
              return (
                <Col key={option.id} xs={6} md={3} className="mb-3 ">
                  <Card
                    onClick={() => handleSelection(option.id)}
                    className="p-2 text-center shadow-sm"
                    style={{
                      cursor: "pointer",
                      borderRadius: "10px",
                      backgroundColor: isSelected ? "#4aeab1" : "transparent",
                      transition: "all 0.3s ease",
                      height: "150px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={option.image}
                        alt={option.label}
                        style={{
                          height: "60px",
                          width: "60px",
                          objectFit: "cover",
                          filter: isSelected
                            ? "brightness(0) invert(1)"
                            : "none", // Turns image white when selected
                          transition: "all 0.3s ease",
                        }}
                      />
                      <Card.Text
                        style={{
                          fontWeight: "500",
                          marginTop: "10px",
                          color: isSelected ? "white" : "black",
                        }}
                      >
                        {option.label}
                      </Card.Text>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <h6
          style={{
            marginTop: "20px",
            fontSize: 16,
            color: "#000000",
            cursor: "pointer",
          }}
          onClick={() => setOthActivyShow(!otherActivyShow)}
        >
          Other Activities{" "}
          {otherActivyShow ? <FaChevronUp /> : <FaChevronDown />}
        </h6>
        {otherActivyShow && (
          <Container>
            <Row className="justify-content-center mt-4">
              {otherActiviy.map((option) => {
                const isSelected = selectedOptionsOtherActivity.includes(
                  option.id
                );
                return (
                  <Col
                    key={option.id}
                    xs={6}
                    md={3}
                    className="mb-3 d-flex justify-content-center"
                  >
                    <Card
                      onClick={() => handleOtherActiviy(option.id)}
                      className="p-2 text-center shadow-sm"
                      style={{
                        cursor: "pointer",
                        borderRadius: "10px",
                        backgroundColor: isSelected ? "#4aeab1" : "transparent",
                        transition: "all 0.3s ease",
                        height: "150px",
                        width: "100%", // Ensure it takes full width of column
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={option.image}
                          alt={option.label}
                          style={{
                            height: "60px",
                            width: "60px",
                            objectFit: "cover",
                            filter: isSelected
                              ? "brightness(0) invert(1)"
                              : "none",
                            transition: "all 0.3s ease",
                          }}
                        />
                        <Card.Text
                          style={{
                            fontWeight: "500",
                            marginTop: "10px",
                            color: isSelected ? "white" : "black",
                          }}
                        >
                          {option.label}
                        </Card.Text>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        )}
        <hr></hr>

        <Container>
          <h4>Select Amenities</h4>
          <Row>
            {/* Show Only 1 Item Per Column When Collapsed */}
            {!showMore ? (
              <>
                <Col md={6}>
                  <Form.Check
                    type="checkbox"
                    label={amenitiesList[0]} // First item on left
                    checked={selectedAmenities.includes(amenitiesList[0])}
                    onChange={() => handleCheckboxChange(amenitiesList[0])}
                    className="custom-checkbox"
                  />
                </Col>
                <Col md={6}>
                  <Form.Check
                    type="checkbox"
                    label={amenitiesList[1]} // Second item on right
                    checked={selectedAmenities.includes(amenitiesList[1])}
                    onChange={() => handleCheckboxChange(amenitiesList[1])}
                    className="custom-checkbox"
                  />
                </Col>
              </>
            ) : (
              // Show Full List When Expanded
              <>
                <Col md={6}>
                  {amenitiesList.slice(0, 6).map((amenity, index) => (
                    <Form.Check
                      key={index}
                      type="checkbox"
                      label={amenity}
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => handleCheckboxChange(amenity)}
                      className="custom-checkbox"
                    />
                  ))}
                </Col>
                <Col md={6}>
                  {amenitiesList.slice(6).map((amenity, index) => (
                    <Form.Check
                      key={index + 6}
                      type="checkbox"
                      label={amenity}
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => handleCheckboxChange(amenity)}
                      className="custom-checkbox"
                    />
                  ))}
                </Col>
              </>
            )}
          </Row>

          {/* Show More / Show Less Button */}
          <div className="mt-3">
            <Button
              variant="link"
              onClick={() => setShowMore(!showMore)}
              style={{ color: "#3A4B4C", fontWeight: "600" }}
            >
              {showMore ? "Show Less" : "Show More"}
            </Button>
          </div>

          <style>
            {`
    .custom-checkbox .form-check-input {
      border-radius: 50%; /* Makes it circular */
      width: 18px;
      height: 18px;
      border: 2px solid #3A4B4C; /* Outline color */
    }

    .custom-checkbox .form-check-input:checked {
      background-color: #3A4B4C; /* Fill color when selected */
      border-color: #3A4B4C; /* Border color when selected */
    }
  `}
          </style>
        </Container>

        <hr />

        <Container className="mt-3">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h5>Instant Book</h5>
              <p className="text-muted">
                Listings you can book without waiting for host approval
              </p>
            </div>

            {/* Toggle Button */}
            <div
              onClick={() => setInstantBook(instantBook === "0" ? "1" : "0")}
              style={{
                cursor: "pointer",
                fontSize: "28px",
                color: "#3A4B4C",
              }}
            >
              {instantBook === "1" ? (
                <FaToggleOn size={40} />
              ) : (
                <FaToggleOff size={40} />
              )}
            </div>
          </div>
        </Container>

        <Container className="mt-3">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h5>Self Check-in</h5>
              <p className="text-muted">
                Easy access to the property once you arrive
              </p>
            </div>

            {/* Toggle Button */}
            <div
              onClick={() => setSelfCheckIn(selfCheckIn === "0" ? "1" : "0")}
              style={{
                cursor: "pointer",
                fontSize: "28px",
                color: "#3A4B4C",
              }}
            >
              {selfCheckIn === "1" ? (
                <FaToggleOn size={40} />
              ) : (
                <FaToggleOff size={40} />
              )}
            </div>
          </div>
        </Container>
        <Container className="mt-3">
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <h5>Allows Pets</h5>
            </div>

            {/* Toggle Button */}
            <div
              onClick={() => setAllowsPets(allowsPets === "0" ? "1" : "0")}
              style={{
                cursor: "pointer",
                fontSize: "28px",
                color: "#3A4B4C",
              }}
            >
              {allowsPets === "1" ? (
                <FaToggleOn size={40} />
              ) : (
                <FaToggleOff size={40} />
              )}
            </div>
          </div>
        </Container>
        <Container className="mt-3">
          <div className="d-flex align-items-center justify-content-between">
            {/* Left Side - Cancellation Text */}
            <h5>Cancellation</h5>

            {/* Right Side - Bootstrap Dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-dark"
                style={{ color: "#3A4B4C", borderColor: "#3A4B4C" }}
              >
                {selectedCancellation || "Select Dropdown"}{" "}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {["24 Hrs", "3 Days", "7 Days", "15 Days", "30 Days"].map(
                  (option, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleCancellationChange(option)}
                    >
                      {option}
                    </Dropdown.Item>
                  )
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Container>
        <hr />

        <Container className="mt-4 d-flex justify-content-between">
          {/* Clear All Button */}
          <Button
            variant="outline-success"
            onClick={clarAll}
            style={{
              color: "#4AEAB1",
              borderColor: "#4AEAB1",
              padding: "10px 20px",
              fontWeight: "500",

              borderRadius: "40px",
            }}
          >
            Clear All
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
            onClick={() => handleHomeSetup()}
          >
            Save and Continue
          </Button>
        </Container>
        <ToastContainer />
      </>
    </>
  );
};

export default AddProperty;
//

// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import { Container, Row, Col, Card, Form, Dropdown } from "react-bootstrap";

// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// //
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// //
// import { FaToggleOn, FaToggleOff } from "react-icons/fa";
// //
// // for activies
// import image1 from "../../../assets/gallery/stay.png"; // Replace with your image path
// import image2 from "../../../assets/gallery/event_spce.png";
// import image3 from "../../../assets/gallery/photoShoot.png";
// import image4 from "../../../assets/gallery/meeting.png";
// //

// //other activities

// import party from "../../../assets/gallery/party.png"; // Replace with your image path
// import flimShoot from "../../../assets/gallery/flim_shot.png";
// import performance from "../../../assets/gallery/performance.png";
// import workshop from "../../../assets/gallery/whats_app.png";

// import corporate from "../../../assets/gallery/corpate_evnt.png"; // Replace with your image path
// import wedding from "../../../assets/gallery/wedding.png";
// import dinner from "../../../assets/gallery/diner.png";
// import retrate from "../../../assets/gallery/retreat.png";

// import popup from "../../../assets/gallery/popup.png"; // Replace with your image path
// import networking from "../../../assets/gallery/networking.png";
// import fitness from "../../../assets/gallery/fitness_clss.png";
// import audio_recording from "../../../assets/gallery/audio_recording.png";
// import swming from "../../../assets/swming.svg";

// import PriceAvailblity from "../PriceAvailblity";
// import GalleryLocation from "../Gallery_location";
// import { useDispatch } from "react-redux";
// import { setAddPropertyDetails } from "../../../store/slices/hostuserSlice";
// import { KEYS } from "../../../config/Constant";

// const options = [
//   { id: "Stays", image: image1, label: "Party" },
//   { id: "Event Space", image: image2, label: "Event Space" },
//   { id: "Photo shoot", image: image3, label: "Photo shoot" },
//   { id: "Meeting", image: image4, label: "Meeting" },
// ];

// const otherActiviy = [
//   { id: "Party", image: party, label: "Stays" },
//   { id: "Film Shoot", image: flimShoot, label: "Film Shoot" },
//   { id: "Performance", image: performance, label: "Performance" },
//   { id: "Workshop", image: workshop, label: "Workshop" },
//   { id: "Corporate Event", image: corporate, label: "Corporate Event" },
//   { id: "Wedding", image: wedding, label: "Wedding" },
//   { id: "Dinner", image: dinner, label: "Dinner" },
//   { id: "Retreat", image: retrate, label: "Retreat" },
//   { id: "Pop-up", image: popup, label: "Pop-up" },
//   { id: "Networking", image: networking, label: "Networking" },
//   { id: "Fitness Class", image: fitness, label: "Fitness Class" },
//   { id: "Audio Recording", image: audio_recording, label: "Audio Recording" },
//   { id: "Swimming Pool", image: swming, label: "Swimming Pool" },
// ];

// //

// const amenitiesList = [
//   "Wifi",
//   "Kitchen",
//   "Washer",
//   "Dryer",
//   "Air conditioning",
//   "Heating",
//   "Free Parking",
//   "Meal Included",
//   "Elevator/Lift Access",
//   "Wheelchair Accessible",
//   "Smoking Allowed",
//   "Non-Smoking Property",
// ];
// //
// const AddProperty = (props) => {
//   const dispatch = useDispatch();

//   const [activeTab, setActiveTab] = useState("home_setup");
//   const [otherActivyShow, setOthActivyShow] = useState(false);
//   const [selectedOptions, setSelectedOptions] = useState([]); // for activiites
//   const [selectedAmenities, setSelectedAmenities] = useState([]); // for amentites
//   const [selectedRoom, setSelectedRoom] = useState("entire_home");
//   const [showMore, setShowMore] = useState(false);
//   const [selectedPrice, setSelectedPrice] = useState("Any"); // Default value

//   //

//   const [selectedOptionsOtherActivity, setSelectedOptionsOtherActivity] =
//     useState([]);

//   const [customPrice, setCustomPrice] = useState(""); // For manual input

//   const priceOptions = ["Any", "250", "350", "450", "550", "650", "750"];
//   //

//   // for guest

//   const [selectedGuests, setSelectedGuests] = useState("Any"); // Default value
//   const [customGuests, setCustomGuests] = useState(""); // For manual input
//   const guestOptions = ["Any", "3", "4", "5", "7", "8"];

//   // for bedrooms
//   const [selectedBedrooms, setSelectedBedrooms] = useState("Any"); // Default value
//   const [customBedrooms, setCustomBedrooms] = useState(""); // For manual input

//   const bedroomOptions = ["Any", "1", "2", "3", "4", "5", "6", "7", "8"];
//   //
//   // for bedrooms

//   const [selectedBathrooms, setSelectedBathrooms] = useState("Any"); // Default value
//   const [customBathrooms, setCustomBathrooms] = useState(""); // For manual input

//   const bathroomOptions = ["Any", "1", "2", "3", "4", "5", "6", "7", "8"];

//   //

//   const [instantBook, setInstantBook] = useState(false);
//   const [selfCheckIn, setSelfCheckIn] = useState("0");
//   const [allowsPets, setAllowsPets] = useState("0");
//   const [selectedCancellation, setSelectedCancellation] = useState("");
//   //

//   const localSaved = JSON.parse(localStorage.getItem(KEYS.USER_INFO));
//   const userId = localSaved?.user_id;
//   console.log(userId, "log userID11111");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const handlePriceChange = (price) => {
//     setSelectedPrice(price);
//     setCustomPrice(""); // Reset custom input when a button is clicked
//   };

//   const handleCustomPriceChange = (e) => {
//     setCustomPrice(e.target.value);
//     setSelectedPrice(e.target.value); // Update selected price when typing
//   };

//   // for guest

//   const handleGuestChange = (guest) => {
//     setSelectedGuests(guest);
//     setCustomGuests(""); // Reset custom input when a button is clicked
//   };

//   const handleCustomGuestChange = (e) => {
//     setCustomGuests(e.target.value);
//     setSelectedGuests(e.target.value); // Update selected guests when typing
//   };
//   // for bedrooms

//   const handleBedroomChange = (bedroom) => {
//     setSelectedBedrooms(bedroom);
//     setCustomBedrooms(""); // Reset custom input when a button is clicked
//   };

//   const handleCustomBedroomChange = (e) => {
//     setCustomBedrooms(e.target.value);
//     setSelectedBedrooms(e.target.value); // Update selected bedrooms when typing
//   };
//   // for bedroom

//   const handleBathroomChange = (bathroom) => {
//     setSelectedBathrooms(bathroom);
//     setCustomBathrooms(""); // Reset custom input when a button is clicked
//   };

//   const handleCustomBathroomChange = (e) => {
//     setCustomBathrooms(e.target.value);
//     setSelectedBathrooms(e.target.value); // Update selected bathrooms when typing
//   };
//   // calculate hours

//   const handleCancellationChange = (value) => {
//     const numericValue = value.includes("Days")
//       ? (parseInt(value) * 24).toString() // Convert days to hours & store as string
//       : parseInt(value).toString(); // Keep hours & store as string

//     setSelectedCancellation(numericValue);
//   };

//   // for activites

//   const handleSelection = (id) => {
//     setSelectedOptions(
//       (prevSelected) =>
//         prevSelected.includes(id)
//           ? prevSelected.filter((item) => item !== id) // Deselect if already selected
//           : [...prevSelected, id] // Add to selection
//     );
//   };
//   //other activity

//   const handleOtherActiviy = (id) => {
//     setSelectedOptionsOtherActivity((prevSelected) =>
//       prevSelected.includes(id)
//         ? prevSelected.filter((item) => item !== id)
//         : [...prevSelected, id]
//     );
//   };

//   // for am
//   const handleCheckboxChange = (amenity) => {
//     setSelectedAmenities(
//       (prev) =>
//         prev.includes(amenity)
//           ? prev.filter((item) => item !== amenity) // Remove if selected
//           : [...prev, amenity] // Add if not selected
//     );
//   };

//   // handle all data

//   let params = {
//     user_id: userId,
//     space_type: selectedRoom,
//     property_size: selectedPrice,
//     max_guest_count: selectedGuests,
//     bedroom_count: selectedBedrooms,
//     bathroom_count: selectedBathrooms,
//     is_instant_book: instantBook,
//     has_self_checkin: selfCheckIn,
//     allows_pets: allowsPets,
//     cancellation_duration: selectedCancellation,
//     activities: [
//       ...(selectedOptions || []),
//       ...(selectedOptionsOtherActivity || []),
//     ],
//     amenities: selectedAmenities,
//   };

//   const validationHandling = () => {
//     let flag = true;

//     if (!selectedPrice || selectedPrice === "Any") {
//       toast.error("Please select area of Property size (sq ft)!", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       flag = false;
//     }

//     if (!selectedGuests || selectedGuests === "any") {
//       toast.error("Please select Number of people", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       flag = false;
//     }

//     if (!selectedBedrooms || selectedBedrooms === "any") {
//       toast.error("Please select count of bedrooms", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       flag = false;
//     }

//     if (!selectedBathrooms || selectedBathrooms === "any") {
//       toast.error("Please select count bathrooms", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       flag = false;
//     }

//     if (selectedOptions.length === 0) {
//       toast.error("Please select any activity", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       flag = false;
//     }

//     if (selectedAmenities.length === 0) {
//       toast.error("Please select any amenities!", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       flag = false;
//     }

//     if (!selectedCancellation) {
//       toast.error("Please select a Cancellation option!", {
//         position: "top-center",
//         autoClose: 3000,
//       });
//       flag = false;
//     }

//     return flag;
//   };

//   const handleHomeSetup = async () => {
//     if (!validationHandling()) return;

//     dispatch(setAddPropertyDetails(params));
//     console.log(params, "hello users data");

//     setActiveTab("gallery_location");
//   };

//   const clarAll = () => {
//     setSelectedGuests("");
//     setSelectedRoom("");
//     setSelectedPrice("");
//     setSelectedRoom("");
//     setSelectedGuests("");
//     setSelectedCancellation(null);
//     setSelectedBedrooms(null);
//     setSelectedAmenities([]);
//     setSelectedBathrooms([]);
//     setSelectedOptions([]);
//     setAllowsPets(null);
//     setSelfCheckIn(null);
//     setInstantBook(null);
//     setSelectedOptionsOtherActivity([]);
//   };
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Body>
//         <div style={{ display: "flex", justifyContent: "flex-end" }}>
//           <button
//             onClick={props.onHide}
//             style={{
//               background: "transparent",
//               border: "none",
//               fontSize: "20px",
//               cursor: "pointer",
//             }}
//           >
//             ✖
//           </button>
//         </div>

//         {/* Form button grouping */}
//         <h4
//           style={{
//             marginTop: "20px",
//             color: "#000000",

//             fontSize: 28,
//           }}
//         >
//           Manage your place
//         </h4>
//         <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
//           Setup places, availability, prices and more.
//         </h6>

//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             alignItems: "center",
//             border: "2px solid #EBEDED",
//             borderRadius: "60px",
//             padding: "10px",
//             width: "100%",
//             // maxWidth: "500px",
//             margin: "20px auto",
//             backgroundColor: "#EBEDED",
//             height: 55,
//           }}
//         >
//           {[
//             { key: "home_setup", label: "Home Setup" },
//             { key: "gallery_location", label: "Gallery & Location" },
//             { key: "price_availability", label: "Price and Availability" },
//           ].map(({ key, label }) => (
//             <button
//               key={key}
//               disabled={true}
//               onClick={() => handleTabChange(key)}
//               style={{
//                 padding: "10px 20px",
//                 fontSize: "14px",
//                 backgroundColor: activeTab === key ? "#FFFFFF" : "transparent",
//                 color: activeTab === key ? "#000000" : "#000",
//                 border:
//                   activeTab === key
//                     ? "2px solid #FFFFFF"
//                     : "2px solid transparent",
//                 borderRadius: "20px",
//                 cursor: "pointer",
//                 fontWeight: "500",
//                 transition: "all 0.3s ease",
//                 width: "80%",
//                 height: 40,
//               }}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//         <hr style={{}} />

//         {activeTab === "home_setup" && (
//           <>
//             <h4
//               style={{
//                 marginTop: "20px",
//                 color: "#000000",

//                 fontSize: 28,
//               }}
//             >
//               Type of place
//             </h4>
//             <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
//               Setup places, availability, prices and more.
//             </h6>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 alignItems: "center",
//                 border: "2px solid #EBEDED",
//                 borderRadius: "60px",
//                 padding: "10px",
//                 width: "100%",
//                 // maxWidth: "500px",
//                 margin: "20px auto",
//                 backgroundColor: "#EBEDED",
//                 height: 55,
//               }}
//             >
//               {["entire_home", "private_room"].map((room) => (
//                 <button
//                   key={room}
//                   onClick={() => setSelectedRoom(room)}
//                   style={{
//                     padding: "10px 20px",
//                     fontSize: "14px",
//                     backgroundColor:
//                       selectedRoom === room ? "#FFFFFF" : "transparent",
//                     color: selectedRoom === room ? "#000000" : "#000",
//                     border:
//                       selectedRoom === room
//                         ? "2px solid #FFFFFF"
//                         : "2px solid transparent",
//                     borderRadius: "20px",
//                     cursor: "pointer",
//                     fontWeight: "500",
//                     transition: "all 0.3s ease",
//                     width: "80%",
//                     height: 40,
//                   }}
//                 >
//                   {room}
//                 </button>
//               ))}
//             </div>

//             <h4
//               style={{
//                 marginTop: "20px",
//                 color: "#000000",

//                 fontSize: 28,
//               }}
//             >
//               Availability
//             </h4>
//             <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
//               Property size (sq ft)
//             </h6>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 alignItems: "center",
//                 border: "2px solid #EBEDED",
//                 borderRadius: "60px",
//                 padding: "10px",
//                 width: "100%",
//                 margin: "20px auto",
//                 backgroundColor: "#EBEDED",
//                 height: 55,
//               }}
//             >
//               {priceOptions.map((price) => (
//                 <button
//                   key={price}
//                   onClick={() => handlePriceChange(price)}
//                   style={{
//                     padding: "10px 20px",
//                     fontSize: "14px",
//                     backgroundColor:
//                       selectedPrice === price ? "#FFFFFF" : "transparent",
//                     color: selectedPrice === price ? "#000000" : "#000",
//                     border:
//                       selectedPrice === price
//                         ? "2px solid #FFFFFF"
//                         : "2px solid transparent",
//                     borderRadius: "20px",
//                     cursor: "pointer",
//                     fontWeight: "500",
//                     transition: "all 0.3s ease",
//                     width: "12%",
//                     height: 40,
//                     textAlign: "center",
//                   }}
//                 >
//                   {price}
//                 </button>
//               ))}

//               {/* Custom Input Field */}
//               <input
//                 type="text"
//                 placeholder="Type..."
//                 value={customPrice}
//                 onChange={handleCustomPriceChange}
//                 style={{
//                   padding: "10px",
//                   fontSize: "14px",
//                   width: "12%",
//                   height: "40px",
//                   border: "2px solid transparent",
//                   borderRadius: "20px",
//                   textAlign: "center",
//                   backgroundColor: "#FFFFFF",
//                   color: "#000",
//                   fontWeight: "500",
//                   outline: "none",
//                 }}
//               />
//             </div>

//             <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
//               Number of people
//             </h6>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 alignItems: "center",
//                 border: "2px solid #EBEDED",
//                 borderRadius: "60px",
//                 padding: "10px",
//                 width: "100%",
//                 margin: "20px auto",
//                 backgroundColor: "#EBEDED",
//                 height: 55,
//               }}
//             >
//               {guestOptions.map((guest) => (
//                 <button
//                   key={guest}
//                   onClick={() => handleGuestChange(guest)}
//                   style={{
//                     padding: "10px 20px",
//                     fontSize: "14px",
//                     backgroundColor:
//                       selectedGuests === guest ? "#FFFFFF" : "transparent",
//                     color: selectedGuests === guest ? "#000000" : "#000",
//                     border:
//                       selectedGuests === guest
//                         ? "2px solid #FFFFFF"
//                         : "2px solid transparent",
//                     borderRadius: "20px",
//                     cursor: "pointer",
//                     fontWeight: "500",
//                     transition: "all 0.3s ease",
//                     width: "12%",
//                     height: 40,
//                     textAlign: "center",
//                   }}
//                 >
//                   {guest}
//                 </button>
//               ))}

//               {/* Custom Input Field */}
//               <input
//                 type="text"
//                 placeholder="Type..."
//                 value={customGuests}
//                 onChange={handleCustomGuestChange}
//                 style={{
//                   padding: "10px",
//                   fontSize: "14px",
//                   width: "12%",
//                   height: "40px",
//                   border: "2px solid transparent",
//                   borderRadius: "20px",
//                   textAlign: "center",
//                   backgroundColor: "#FFFFFF",
//                   color: "#000",
//                   fontWeight: "500",
//                   outline: "none",
//                 }}
//               />
//             </div>

//             <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
//               Bedrooms
//             </h6>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 alignItems: "center",
//                 border: "2px solid #EBEDED",
//                 borderRadius: "60px",
//                 padding: "10px",
//                 width: "100%",
//                 margin: "20px auto",
//                 backgroundColor: "#EBEDED",
//                 height: 55,
//               }}
//             >
//               {bedroomOptions.map((bedroom) => (
//                 <button
//                   key={bedroom}
//                   onClick={() => handleBedroomChange(bedroom)}
//                   style={{
//                     padding: "10px 20px",
//                     fontSize: "14px",
//                     backgroundColor:
//                       selectedBedrooms === bedroom ? "#FFFFFF" : "transparent",
//                     color: selectedBedrooms === bedroom ? "#000000" : "#000",
//                     border:
//                       selectedBedrooms === bedroom
//                         ? "2px solid #FFFFFF"
//                         : "2px solid transparent",
//                     borderRadius: "20px",
//                     cursor: "pointer",
//                     fontWeight: "500",
//                     transition: "all 0.3s ease",
//                     width: "12%",
//                     height: 40,
//                     textAlign: "center",
//                   }}
//                 >
//                   {bedroom}
//                 </button>
//               ))}

//               {/* Custom Input Field */}
//               <input
//                 type="text"
//                 placeholder="Type..."
//                 value={customBedrooms}
//                 onChange={handleCustomBedroomChange}
//                 style={{
//                   padding: "10px",
//                   fontSize: "14px",
//                   width: "12%",
//                   height: "40px",
//                   border: "2px solid transparent",
//                   borderRadius: "20px",
//                   textAlign: "center",
//                   backgroundColor: "#FFFFFF",
//                   color: "#000",
//                   fontWeight: "500",
//                   outline: "none",
//                 }}
//               />
//             </div>

//             <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
//               Bathrooms
//             </h6>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 alignItems: "center",
//                 border: "2px solid #EBEDED",
//                 borderRadius: "60px",
//                 padding: "10px",
//                 width: "100%",
//                 margin: "20px auto",
//                 backgroundColor: "#EBEDED",
//                 height: 55,
//               }}
//             >
//               {bathroomOptions.map((bathroom) => (
//                 <button
//                   key={bathroom}
//                   onClick={() => handleBathroomChange(bathroom)}
//                   style={{
//                     padding: "10px 20px",
//                     fontSize: "14px",
//                     backgroundColor:
//                       selectedBathrooms === bathroom
//                         ? "#FFFFFF"
//                         : "transparent",
//                     color: selectedBathrooms === bathroom ? "#000000" : "#000",
//                     border:
//                       selectedBathrooms === bathroom
//                         ? "2px solid #FFFFFF"
//                         : "2px solid transparent",
//                     borderRadius: "20px",
//                     cursor: "pointer",
//                     fontWeight: "500",
//                     transition: "all 0.3s ease",
//                     width: "12%",
//                     height: 40,
//                     textAlign: "center",
//                   }}
//                 >
//                   {bathroom}
//                 </button>
//               ))}

//               {/* Custom Input Field */}
//               <input
//                 type="text"
//                 placeholder="Type..."
//                 value={customBathrooms}
//                 onChange={handleCustomBathroomChange}
//                 style={{
//                   padding: "10px",
//                   fontSize: "14px",
//                   width: "12%",
//                   height: "40px",
//                   border: "2px solid transparent",
//                   borderRadius: "20px",
//                   textAlign: "center",
//                   backgroundColor: "#FFFFFF",
//                   color: "#000",
//                   fontWeight: "500",
//                   outline: "none",
//                 }}
//               />
//             </div>

//             <hr />

//             <h6 style={{ marginTop: "20px", fontSize: 16, color: "#000000" }}>
//               Activities
//             </h6>
//             <Container>
//               <Row className="justify-content-center mt-4">
//                 {options.map((option) => {
//                   const isSelected = selectedOptions.includes(option.id);
//                   return (
//                     <Col key={option.id} xs={6} md={3} className="mb-3 ">
//                       <Card
//                         onClick={() => handleSelection(option.id)}
//                         className="p-2 text-center shadow-sm"
//                         style={{
//                           cursor: "pointer",
//                           borderRadius: "10px",
//                           backgroundColor: isSelected
//                             ? "#4aeab1"
//                             : "transparent",
//                           transition: "all 0.3s ease",
//                           height: "150px",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         <div
//                           style={{
//                             textAlign: "center",
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <img
//                             src={option.image}
//                             alt={option.label}
//                             style={{
//                               height: "60px",
//                               width: "60px",
//                               objectFit: "cover",
//                               filter: isSelected
//                                 ? "brightness(0) invert(1)"
//                                 : "none", // Turns image white when selected
//                               transition: "all 0.3s ease",
//                             }}
//                           />
//                           <Card.Text
//                             style={{
//                               fontWeight: "500",
//                               marginTop: "10px",
//                               color: isSelected ? "white" : "black",
//                             }}
//                           >
//                             {option.label}
//                           </Card.Text>
//                         </div>
//                       </Card>
//                     </Col>
//                   );
//                 })}
//               </Row>
//             </Container>
//             <h6
//               style={{
//                 marginTop: "20px",
//                 fontSize: 16,
//                 color: "#000000",
//                 cursor: "pointer",
//               }}
//               onClick={() => setOthActivyShow(!otherActivyShow)}
//             >
//               Other Activities{" "}
//               {otherActivyShow ? <FaChevronUp /> : <FaChevronDown />}
//             </h6>
//             {otherActivyShow && (
//               <Container>
//                 <Row className="justify-content-center mt-4">
//                   {otherActiviy.map((option) => {
//                     const isSelected = selectedOptionsOtherActivity.includes(
//                       option.id
//                     );
//                     return (
//                       <Col
//                         key={option.id}
//                         xs={6}
//                         md={3}
//                         className="mb-3 d-flex justify-content-center"
//                       >
//                         <Card
//                           onClick={() => handleOtherActiviy(option.id)}
//                           className="p-2 text-center shadow-sm"
//                           style={{
//                             cursor: "pointer",
//                             borderRadius: "10px",
//                             backgroundColor: isSelected
//                               ? "#4aeab1"
//                               : "transparent",
//                             transition: "all 0.3s ease",
//                             height: "150px",
//                             width: "100%", // Ensure it takes full width of column
//                             display: "flex",
//                             alignItems: "center",
//                             justifyContent: "center",
//                           }}
//                         >
//                           <div
//                             style={{
//                               textAlign: "center",
//                               display: "flex",
//                               flexDirection: "column",
//                               alignItems: "center",
//                               justifyContent: "center",
//                             }}
//                           >
//                             <img
//                               src={option.image}
//                               alt={option.label}
//                               style={{
//                                 height: "60px",
//                                 width: "60px",
//                                 objectFit: "cover",
//                                 filter: isSelected
//                                   ? "brightness(0) invert(1)"
//                                   : "none",
//                                 transition: "all 0.3s ease",
//                               }}
//                             />
//                             <Card.Text
//                               style={{
//                                 fontWeight: "500",
//                                 marginTop: "10px",
//                                 color: isSelected ? "white" : "black",
//                               }}
//                             >
//                               {option.label}
//                             </Card.Text>
//                           </div>
//                         </Card>
//                       </Col>
//                     );
//                   })}
//                 </Row>
//               </Container>
//             )}
//             <hr></hr>

//             <Container>
//               <h4>Select Amenities</h4>
//               <Row>
//                 {/* Show Only 1 Item Per Column When Collapsed */}
//                 {!showMore ? (
//                   <>
//                     <Col md={6}>
//                       <Form.Check
//                         type="checkbox"
//                         label={amenitiesList[0]} // First item on left
//                         checked={selectedAmenities.includes(amenitiesList[0])}
//                         onChange={() => handleCheckboxChange(amenitiesList[0])}
//                         className="custom-checkbox"
//                       />
//                     </Col>
//                     <Col md={6}>
//                       <Form.Check
//                         type="checkbox"
//                         label={amenitiesList[1]} // Second item on right
//                         checked={selectedAmenities.includes(amenitiesList[1])}
//                         onChange={() => handleCheckboxChange(amenitiesList[1])}
//                         className="custom-checkbox"
//                       />
//                     </Col>
//                   </>
//                 ) : (
//                   // Show Full List When Expanded
//                   <>
//                     <Col md={6}>
//                       {amenitiesList.slice(0, 6).map((amenity, index) => (
//                         <Form.Check
//                           key={index}
//                           type="checkbox"
//                           label={amenity}
//                           checked={selectedAmenities.includes(amenity)}
//                           onChange={() => handleCheckboxChange(amenity)}
//                           className="custom-checkbox"
//                         />
//                       ))}
//                     </Col>
//                     <Col md={6}>
//                       {amenitiesList.slice(6).map((amenity, index) => (
//                         <Form.Check
//                           key={index + 6}
//                           type="checkbox"
//                           label={amenity}
//                           checked={selectedAmenities.includes(amenity)}
//                           onChange={() => handleCheckboxChange(amenity)}
//                           className="custom-checkbox"
//                         />
//                       ))}
//                     </Col>
//                   </>
//                 )}
//               </Row>

//               {/* Show More / Show Less Button */}
//               <div className="mt-3">
//                 <Button
//                   variant="link"
//                   onClick={() => setShowMore(!showMore)}
//                   style={{ color: "#3A4B4C", fontWeight: "600" }}
//                 >
//                   {showMore ? "Show Less" : "Show More"}
//                 </Button>
//               </div>

//               <style>
//                 {`
//     .custom-checkbox .form-check-input {
//       border-radius: 50%; /* Makes it circular */
//       width: 18px;
//       height: 18px;
//       border: 2px solid #3A4B4C; /* Outline color */
//     }

//     .custom-checkbox .form-check-input:checked {
//       background-color: #3A4B4C; /* Fill color when selected */
//       border-color: #3A4B4C; /* Border color when selected */
//     }
//   `}
//               </style>
//             </Container>

//             <hr />

//             <Container className="mt-3">
//               <div className="d-flex align-items-center justify-content-between">
//                 <div>
//                   <h5>Instant Book</h5>
//                   <p className="text-muted">
//                     Listings you can book without waiting for host approval
//                   </p>
//                 </div>

//                 {/* Toggle Button */}
//                 <div
//                   onClick={() =>
//                     setInstantBook(instantBook === "0" ? "1" : "0")
//                   }
//                   style={{
//                     cursor: "pointer",
//                     fontSize: "28px",
//                     color: "#3A4B4C",
//                   }}
//                 >
//                   {instantBook === "1" ? (
//                     <FaToggleOn size={40} />
//                   ) : (
//                     <FaToggleOff size={40} />
//                   )}
//                 </div>
//               </div>
//             </Container>

//             <Container className="mt-3">
//               <div className="d-flex align-items-center justify-content-between">
//                 <div>
//                   <h5>Self Check-in</h5>
//                   <p className="text-muted">
//                     Easy access to the property once you arrive
//                   </p>
//                 </div>

//                 {/* Toggle Button */}
//                 <div
//                   onClick={() =>
//                     setSelfCheckIn(selfCheckIn === "0" ? "1" : "0")
//                   }
//                   style={{
//                     cursor: "pointer",
//                     fontSize: "28px",
//                     color: "#3A4B4C",
//                   }}
//                 >
//                   {selfCheckIn === "1" ? (
//                     <FaToggleOn size={40} />
//                   ) : (
//                     <FaToggleOff size={40} />
//                   )}
//                 </div>
//               </div>
//             </Container>
//             <Container className="mt-3">
//               <div className="d-flex align-items-center justify-content-between">
//                 <div>
//                   <h5>Allows Pets</h5>
//                 </div>

//                 {/* Toggle Button */}
//                 <div
//                   onClick={() => setAllowsPets(allowsPets === "0" ? "1" : "0")}
//                   style={{
//                     cursor: "pointer",
//                     fontSize: "28px",
//                     color: "#3A4B4C",
//                   }}
//                 >
//                   {allowsPets === "1" ? (
//                     <FaToggleOn size={40} />
//                   ) : (
//                     <FaToggleOff size={40} />
//                   )}
//                 </div>
//               </div>
//             </Container>
//             <Container className="mt-3">
//               <div className="d-flex align-items-center justify-content-between">
//                 {/* Left Side - Cancellation Text */}
//                 <h5>Cancellation</h5>

//                 {/* Right Side - Bootstrap Dropdown */}
//                 <Dropdown>
//                   <Dropdown.Toggle
//                     variant="outline-dark"
//                     style={{ color: "#3A4B4C", borderColor: "#3A4B4C" }}
//                   >
//                     {selectedCancellation || "Select Dropdown"}{" "}
//                   </Dropdown.Toggle>

//                   <Dropdown.Menu>
//                     {["24 Hrs", "3 Days", "7 Days", "15 Days", "30 Days"].map(
//                       (option, index) => (
//                         <Dropdown.Item
//                           key={index}
//                           onClick={() => handleCancellationChange(option)}
//                         >
//                           {option}
//                         </Dropdown.Item>
//                       )
//                     )}
//                   </Dropdown.Menu>
//                 </Dropdown>
//               </div>
//             </Container>
//             <hr />

//             <Container className="mt-4 d-flex justify-content-between">
//               {/* Clear All Button */}
//               <Button
//                 variant="outline-success"
//                 onClick={clarAll}
//                 style={{
//                   color: "#4AEAB1",
//                   borderColor: "#4AEAB1",
//                   padding: "10px 20px",
//                   fontWeight: "500",

//                   borderRadius: "40px",
//                 }}
//               >
//                 Clear All
//               </Button>

//               {/* Save and Continue Button */}
//               <Button
//                 style={{
//                   backgroundColor: "#4AEAB1",
//                   borderColor: "#4AEAB1",
//                   padding: "10px 20px",
//                   fontWeight: "500",
//                   color: "black",
//                   borderRadius: "40px",
//                 }}
//                 onClick={() => handleHomeSetup()}
//               >
//                 Save and Continue
//               </Button>
//             </Container>
//             <ToastContainer />
//           </>
//         )}

//         {activeTab === "gallery_location" && (
//           <GalleryLocation switchToAddProperty={(val) => setActiveTab(val)} />
//         )}

//         {activeTab === "price_availability" && (
//           <PriceAvailblity
//             switchToGallery={(val) => setActiveTab(val)}
//             hideModal={props.onHide}
//           />
//         )}
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default AddProperty;
