import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import Autocomplete from "react-google-autocomplete";
import { GOOGLE_KEY, KEYS } from "../../config/Constant";
import { CloseButton, Col, Container, Row, Form, Button, Tabs, Tab, Modal, Dropdown, ToggleButtonGroup, ToggleButton, InputGroup, Image } from "react-bootstrap";
import RegisterModal from "./authModalGuest/RegisterModal";
import CircularSlider from '@fseehawer/react-circular-slider';
import { format } from "date-fns";
import { FaRedo } from "react-icons/fa";
import { Clock, Pencil } from "lucide-react";
import { Range } from "react-range";
import useCommon from "../../hooks/useCommon";

// Helper function to generate time options in 30-minute intervals
const generateTimeOptions = () => {
  const times = [];
  for (let i = 0; i < 48; i++) {
    let totalMinutes = i * 30;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    if (hours === 0) hours = 12;
    let formattedMinutes = minutes === 0 ? "00" : minutes;
    times.push(`${hours}:${formattedMinutes}${period}`);
  }
  return times;
};

const HomeHeader = () => {
  const [regModl, setRegModl] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedActivity, setSelectedActivity] = useState("");
  const [key, setKey] = useState("dates");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [hour, setHour] = useState('');
  const [show, setShow] = useState(false);
  const [filterShow, setFilterShow] = useState(false)
  const [newDate, setNewDate] = useState();
  const [flexibleDate, setFlexibleDate] = useState('');
  const [openInput, setOpenInput] = useState(true)
  const timeOptions = generateTimeOptions();
  const locationData = ["Alaska, US", "California, US", "Delaware, US", "Florida, US", "New York, US"];
  const activities = ["Stays", "Event Space", "Photo Shoot", "Music Video", "Birthday Party", "Wedding", "Meeting", "Baby Shower", "Pool"];

  // 2nd Model Code
  const [selectedPlace, setSelectedPlace] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [isCleaned, setIsCleaned] = useState(false);
  const [filterLocation, setFilterLocation] = useState('');
  const [preferences, setPreferences] = useState({});
  const [showOtherActivities, setShowOtherActivities] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [removeFilter, setRemoveFilter] = useState(false);

  const [selectedActivitiesFilter, setSelectedActivitiesFilter] = useState([]); // Default selected activities
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedValue, setSelectedValue] = useState("any_type");
  const [showMoreLanguages, setShowMoreLanguages] = useState(false);
  const [values, setValues] = useState([50, 150]); // "Min" and Max values
  const [togglesBooking, setTogglesBooking] = useState([
    { title: "Instant Book", name:"instant_booking", description: "Listings you can book without waiting for host approval", toggle: false },
    { title: "Self check-in", name:"self_check_in", description: "Easy access to the property once you arrive", toggle: false },
    { title: "Allows pets", name:"allows_pets", description: "", toggle: false, info: true }
  ]);

    const localSaved = JSON.parse(localStorage.getItem(KEYS.USER_INFO));
    const login_id = String(localSaved?.user_id);

  const [finalDate, setFinalDate] = useState(null);

  const { setShowMap, showMap,homeDataFilters, guestHomeData } = useCommon();

  const handleShowMap = () => {
    console.log("Hello Clicked");
    setShowMap(!showMap)
    console.log(showMap);
  }


  const handleCleanAll = () => {
    setValues([50, 150])
    setFilterLocation('')
    setSelectedDuration(0)
    setPreferences({})
    setFinalDate(null)
    setSelectedActivitiesFilter([])
    setSelectedAmenities([])
    setTogglesBooking([
      { title: "Instant Book", description: "Listings you can book without waiting for host approval", toggle: false },
      { title: "Self check-in", description: "Easy access to the property once you arrive", toggle: true },
      { title: "Allows pets", description: "", toggle: false, info: true }
    ])
    setSelectedLanguages([])
    setIsCleaned(true);
    setSelectedValue(1)
    setTimeout(() => setIsCleaned(false), 1000);
  };


  const handleInputChangeMinMax = (index, event) => {
    let newValue = Number(event.target.value);
    if (index === 0) {
      newValue = Math.min(newValue, values[1] - 1); // Ensure min < max
    } else {
      newValue = Math.max(newValue, values[0] + 1); // Ensure max > min
    }
    setValues((prev) => (index === 0 ? [newValue, prev[1]] : [prev[0], newValue]));
  };


  const toggleActivity = (name) => {
    setSelectedActivitiesFilter((prevSelected) => {
      const isAlreadySelected = prevSelected.includes(name);
      if (isAlreadySelected) {
        return prevSelected.filter((activity) => activity !== name); // Unselect if already selected
      } else {
        return [...prevSelected, name]; // Add to selected list
      }
    });
  };



  const handleToggleBooking = (index) => {
    setTogglesBooking((prevToggles) =>
      prevToggles.map((item, i) =>
        i === index ? { ...item, name:item.name, toggle: !item.toggle } : item
      )
    );
  };

  const handleSelection = (language) => {
    setSelectedLanguages((prev) =>
      prev.includes(language)
        ? prev.filter((item) => item !== language) // Remove if already selected
        : [...prev, language] // Add if not selected
    );
  };


  const toggleAmenity = (amenity) => {
    setSelectedAmenities((prevSelected) =>
      prevSelected.includes(amenity)
        ? prevSelected.filter((item) => item !== amenity) // Unselect
        : [...prevSelected, amenity] // Select
    );
  };

  const basicAmenities = [
    "Wifi",
    "Washer",
    "Air conditioning",
    "Free Parking",
    "Elevator/Lift Access",
    "Smoking Allowed",
  ];

  const moreAmenities = [
    "Kitchen",
    "Dryer",
    "Heating",
    "Meal Included",
    "Wheelchair Accessible",
    "Non-Smoking Property",
  ];


  const activities1 = [
    { name: "Stays", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/1.svg" },
    { name: "Event Space", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/2.svg" },
    { name: "Photo shoot", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/3.svg" },
    { name: "Meeting", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/4.svg" },
  ];

  const otherActivities = [
    { name: "Party", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/5.svg" },
    { name: "Film Shoot", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/6.svg" },
    { name: "Performance", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/7.svg" },
    { name: "Workshop", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/8.svg" },
    { name: "Corporate Event", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/9.svg" },
    { name: "Wedding", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/10.svg" },
    { name: "Dinner", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/11.svg" },
    { name: "Retreat", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/12.svg" },
    { name: "Pop-up", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/13.svg" },
    { name: "Networking", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/14.svg" },
    { name: "Fitness Class", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/15.svg" },
    { name: "Audio Recording", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/16.svg" },
    { name: "Swimming Pool", icon: "https://design.yilstaging.com/ZYVO/assets/images/filters/activities/17.svg" },
  ];

  const handleRemoveData = (setValue) => {
    if (setValue === setFlexibleDate) {
      setNewDate('')
    }
    setValue('')
  }
  const handleClose = () => setShow(false);
  const handleShow = () => { console.log("Hello clicked"); setShow(true) }

  const handleDate = (e) => {
    setSelectedDate(e.toLocaleDateString())
  }

  const handleTimeChange = (type, value) => {
    let updatedFromTime = fromTime;
    let updatedToTime = toTime;

    if (type === "from") {
      updatedFromTime = value;
      setFromTime(value);

      // Reset "toTime" if it's earlier than "fromTime"
      if (toTime && timeOptions.indexOf(value) >= timeOptions.indexOf(toTime)) {
        updatedToTime = "";
        setToTime("");
      }
    } else {
      updatedToTime = value;
      setToTime(value);
    }

    // Check if we need to move to the next day
    let updatedDate = new Date(newDate); // Clone the date
    if (updatedFromTime && updatedToTime && timeOptions.indexOf(updatedToTime) <= timeOptions.indexOf(updatedFromTime)) {
      updatedDate.setDate(updatedDate.getDate() + 1);
    }

    // Format and update flexibleDate state
    let formattedDate = `${updatedDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} | ${updatedFromTime || "Not Selected"} - ${updatedToTime || "Not Selected"}`;
    setFlexibleDate(formattedDate);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSelectedPlace('');
    setSelectedDate('');
    setSelectedActivity('');
    setHour('');
    setFlexibleDate('')
    setOpenInput(false);


  }


  const handleHourChange = (value) => {
    let newHour = parseInt(value);
    setHour(newHour)
    // Prevent sudden jumps between 0 → 11 or 11 → 0
    if (Math.abs(newHour - hour) > 1 && !(newHour === 0 && hour === 11) && !(newHour === 11 && hour === 0)) {
      return; // Ignore the change if it's a sudden jump
    }

    setHour(newHour);
  };

  const sections = [
    { title: "Number of people", name: "people_count", options: ["Any", 3, 4, 5, 7, "8+"] },
    { title: "Property size (sq ft)",name: "property_size", options: ["Any", 250, 350, 450, 550, 650, 750] },
    { title: "Parking space capacity",name: "parking_space", options: ["Any", 1, 2, 3, 4, 5, 6, 7, "8+"] },
    { title: "Bedrooms",name: "bedroom", options: ["Any", 1, 2, 3, 4, 5, 6, 7, "8+"] },
    { title: "Bathrooms", name: "bathroom", options: ["Any", 1, 2, 3, 4, 5, 6, 7, "8+"] }
  ];

  const handleSelect = (section, option) => {
    setPreferences({ ...preferences, [section]: option });
  };

  const handleInputChange = (section, value) => {
    let newValue = parseInt(value)
    setPreferences({ ...preferences, [section]: newValue });
    console.log(preferences);
  };


  const handleSearch = async () => {
    const payload = {
      place_type: selectedValue,
      minimum_price: values[0],
      maximum_price: values[1],
      location: filterLocation,
      ...(selectedDuration && {time: selectedDuration}),
      ...preferences,
      instant_booking: togglesBooking?.[0]?.toggle ? 1 : 0,
      self_check_in: togglesBooking?.[1]?.toggle ? 1 : 0,
      allows_pets: togglesBooking?.[2]?.toggle ? 1 : 0,
      date: finalDate,
      ...(selectedActivitiesFilter?.length > 0 && { activities: selectedActivitiesFilter }),
      ...(selectedAmenities?.length > 0 && { amenities: selectedAmenities }),
      ...(selectedLanguages?.length > 0 && { languages: selectedLanguages }),
    };
    // console.log(payload, 'pay')

    const response = await homeDataFilters(payload)
    // console.log(response, 'res')
    if(response.success) {
      setFilterShow(false)
      setRemoveFilter(true)
    }
    // alert("Search button clicked!");
  };

  const handleClearFilter = async() => {
    const response = await guestHomeData({
      user_id: login_id,
         latitude: 22.572645,
         longitude: 88.363892,
    })
    
    setRemoveFilter(false)
  }

  return (
    <>
      <header>
        {/* <!-- NAV -->
    <!-- DESKTOP-&-TABLET --> */}
        <div className="nav-wrap">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img src="https://design.yilstaging.com/ZYVO/assets/images/logo.svg" alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="nav-inner w-100 d-flex justify-content-between position-relative align-items-center">
                  <div className='nav-inner-mid'>
                    <Form
                      className=" d-flex align-items-center"
                      style={{ padding: "10px 15px", gap: "15px", border: "none" }}
                      onSubmit={handleFormSubmit}
                    >
                      <div className="input-group" style={{ width: "100%", justifyContent: 'space-evenly' }}>
                        {
                          openInput ? (
                            <div className="d-flex align-items-center gap-3" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                              {/* Location Filter */}
                              <Dropdown className="input-group">
                                <Dropdown.Toggle
                                  variant="light"
                                  id="dropdown-where"
                                  style={{ border: "none", padding: "8px 16px" }}
                                >
                                  {selectedPlace || "Where"}
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{ padding: "8px", minWidth: "250px" }}>
                                  {/* Show Autocomplete input inside dropdown menu */}
                                  <div style={{ padding: "8px" }}>
                                    <Autocomplete
                                      apiKey={GOOGLE_KEY}
                                      onPlaceSelected={(place) => {
                                        setSelectedPlace(place.formatted_address);
                                      }}
                                      options={{ types: ["(cities)"] }}
                                      placeholder="Search for a place..."
                                      className="google-autocomplete"
                                      style={{
                                        width: "100%",
                                        padding: "8px",
                                        border: "1px solid #ccc",
                                        borderRadius: "4px",
                                      }}
                                    />
                                  </div>

                                  {/* List of predefined locations */}
                                  {locationData.map((loc, index) => (
                                    <Dropdown.Item key={index} onClick={() => setSelectedPlace(loc)}>
                                      {loc}
                                    </Dropdown.Item>
                                  ))}
                                </Dropdown.Menu>
                              </Dropdown>
                              {/* Time Filter */}
                              <Button
                                variant="light"
                                className="shadow-sm input-group"
                                style={{ border: "none", padding: "8px 16px", borderRadius: "8px" }}
                                onClick={handleShow}
                              >
                                Time
                              </Button>

                              {/* Activity Filter */}
                              <Dropdown className="input-group">
                                <Dropdown.Toggle
                                  variant="light"
                                  id="activity-dropdown"
                                  className="shadow-sm"
                                  style={{ border: "none", padding: "8px 16px", borderRadius: "8px" }}
                                >
                                  {selectedActivity || "Activity"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  {activities.map((act, index) => (
                                    <Dropdown.Item key={index} onClick={() => setSelectedActivity(act)}>
                                      {act}
                                    </Dropdown.Item>
                                  ))}
                                </Dropdown.Menu>
                              </Dropdown>

                              {/* Submit Button */}

                            </div>) : (<div className="w-full form-control p-0 m-1">
                              <input
                                type="text"
                                className="form-control w-full"
                                placeholder="Search"
                              // value={searchQuery}
                              // onChange={(e) => setSearchQuery(e.target.value)}
                              />
                            </div>
                          )
                        }
                      </div>
                      {/* <GoogleMap /> */}
                      <Button
                        type="submit"
                        className="btn btn-primary d-flex align-items-right justify-content-center shadow-sm"
                        style={{ border: "none", padding: "8px 16px", borderRadius: "8px" }}
                      >
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </Button>
                    </Form>

                  </div>

                  {/* Right Side Links */}
                  {/* Right Side Links */}
                  <div className="nav-inner-right position-static ms-auto">
                    <ul className="list-unstyled d-flex mb-0">
                      <li className="me-3">
                        <Link to="/aboutUs" className="active text-decoration-none">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => setRegModl(true)}
                          className="btn btn-link p-0 text-decoration-none"
                        >
                          Register
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div >
        {/* <!-- DESKTOP-&-TABLET -->
    <!-- MOBILE --> */}
        <div class="mob-nav border-start-0 border-end-0">
          <div class="container-fluid">
            <ul class="gap-5">
              <li>
                <a href="#" class="active">
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/1.svg"
                    alt=""
                  />
                  Discover
                </a>
              </li>
              {/* <!-- <li><a href="#"><img src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/2.svg" alt="">Inbox</a></li> --> */}
              {/* <!-- <li><a href="#"><img src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/3.svg" alt="">Bookings</a></li> --> */}
              <li>
                <a href="wishlist.html">
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/4.svg"
                    alt=""
                  />
                  Wishlists
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#register-phone-popup"
                >
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/mobile/nav/5.svg"
                    alt=""
                  />
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- MOBILE -->
    <!-- NAV -->
    <!-- MAP-BUTTON --> */}
        <div class="mob-show-map animate__animated animate__backInUp animate__delay-1s" onClick={handleShowMap}>
          <a href="m  ob-map.html">
            <img
              src="https://design.yilstaging.com/ZYVO/assets/images/filters/show-map.svg"
              alt=""
            />
            Show Map
          </a>
        </div>
        {/* <!-- MAP-BUTTON --> */}
      </header>
      <RegisterModal
        show={regModl}
        onHide={() => setRegModl(false)}
        CallBack={(bool) => setRegModl(bool)}
        loginModal={true}
      />

      <div className="top-filter-wrap py-3">
        <Container fluid>
          <Row className="align-items-center flex-wrap">

            {/* Location Filter */}
            {selectedPlace && (
              <Col
                xs="auto"
                className="d-flex align-items-center bg-white rounded-pill shadow-sm border"
                style={{
                  padding: selectedDate && flexibleDate && hour ? "4px 8px" : "8px 16px",
                  fontSize: selectedDate && flexibleDate && hour ? "0.85rem" : "1rem",
                }}
              >
                <img src="https://design.yilstaging.com/ZYVO/assets/images/filters/location.svg" alt="Location" className="me-2" style={{ width: 20, height: 20 }} />
                <span className="fw-semibold">{selectedPlace}</span>
                <CloseButton aria-label="Clear" onClick={() => handleRemoveData(setSelectedPlace)} className="ms-2" />
              </Col>
            )}

            {/* Activity Filter */}
            {selectedActivity && (
              <Col
                xs="auto"
                className="d-flex align-items-center bg-white rounded-pill shadow-sm border"
                style={{
                  padding: selectedDate && flexibleDate && hour ? "4px 8px" : "8px 16px",
                  fontSize: selectedDate && flexibleDate && hour ? "0.85rem" : "1rem",
                }}
              >
                <img src="https://design.yilstaging.com/ZYVO/assets/images/filters/filters.svg" alt="Activity" className="me-2" style={{ width: 20, height: 20 }} />
                <span className="fw-semibold">{selectedActivity}</span>
                <CloseButton aria-label="Clear" onClick={() => handleRemoveData(setSelectedActivity)} className="ms-2" />
              </Col>
            )}

            {/* Date Filter */}
            {selectedDate && (
              <Col
                xs="auto"
                className="d-flex align-items-center bg-white rounded-pill shadow-sm border"
                style={{
                  padding: selectedDate && flexibleDate && hour ? "4px 8px" : "8px 16px",
                  fontSize: selectedDate && flexibleDate && hour ? "0.85rem" : "1rem",
                }}
              >
                <img src="https://design.yilstaging.com/ZYVO/assets/images/filters/calendar-icon.svg" alt="Calendar" className="me-2" style={{ width: 20, height: 20 }} />
                <span className="fw-semibold">{selectedDate}</span>
                <CloseButton aria-label="Clear" onClick={() => handleRemoveData(setSelectedDate)} className="ms-2" />
              </Col>
            )}

            {/* Flexible Date Filter */}
            {flexibleDate && (
              <Col
                xs="auto"
                className="d-flex align-items-center bg-white rounded-pill shadow-sm border"
                style={{
                  padding: selectedDate && flexibleDate && hour ? "4px 8px" : "8px 16px",
                  fontSize: selectedDate && flexibleDate && hour ? "0.85rem" : "1rem",
                }}
              >
                <img src="https://design.yilstaging.com/ZYVO/assets/images/filters/calendar-icon.svg" alt="Flexible Date" className="me-2" style={{ width: 20, height: 20 }} />
                <span className="fw-semibold">{flexibleDate}</span>
                <CloseButton aria-label="Clear" onClick={() => handleRemoveData(setFlexibleDate)} className="ms-2" />
              </Col>
            )}

            {/* Hour Filter */}
            {hour && (
              <Col
                xs="auto"
                className="d-flex align-items-center bg-white rounded-pill shadow-sm border"
                style={{
                  padding: selectedDate && flexibleDate && hour ? "4px 8px" : "8px 16px",
                  fontSize: selectedDate && flexibleDate && hour ? "0.85rem" : "1rem",
                }}
              >
                <img src="https://design.yilstaging.com/ZYVO/assets/images/filters/time.svg" alt="Time" className="me-2" style={{ width: 20, height: 20 }} />
                <span className="fw-semibold">{hour} hours</span>
                <CloseButton aria-label="Clear" onClick={() => handleRemoveData(setHour)} className="ms-2" />
              </Col>
            )}

            {/* Right Side Buttons */}
            <Col md="auto" className="ms-auto d-flex gap-2">
              {/* Filters Button */}
              {removeFilter && <Button onClick={handleClearFilter} variant="outline-secondary" className="d-flex align-items-center">
                Clear Filter
              </Button>}
              <Button onClick={() => setFilterShow(true)} variant="outline-secondary" className="d-flex align-items-center">
                <img src="https://design.yilstaging.com/ZYVO/assets/images/filters/filters.svg" alt="Filters" className="me-2" style={{ width: 20, height: 20 }} />
                Filters
              </Button>

              {/* Show Map Button */}
              <Button variant="primary" className="d-flex align-items-center" onClick={() => handleShowMap()}>
                <img src="https://design.yilstaging.com/ZYVO/assets/images/filters/show-map.svg" alt="Show Map" className="me-2" style={{ width: 20, height: 20 }} />
                Show Map
              </Button>
            </Col>

          </Row>
        </Container>
      </div>
      {/* Location Time and Activites Popup  */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            id="time-filter-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="nav-pills mb-3"
          >
            {/* Dates Tab */}
            <Tab eventKey="dates" title="Dates">
              <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(e) => setSelectedDate(e ? format(e, "MMMM d, yyyy") : '')}
                onChange={(e) => handleDate(e)}
                footer={
                  selectedDate ? `Selected: ${selectedDate}` : "Pick a day."
                }
              />
            </Tab>

            {/* Hourly Tab */}
            <Tab eventKey="hourly" title="Hourly">
              {/* <Container className="d-flex flex-column align-items-center justify-content-center vh-100"> */}
              <CircularSlider
                label="Hour"
                labelColor="#005a58"
                knobColor="#005a58"
                progressColorFrom="#00bfbd"
                progressColorTo="#009c9a"
                progressSize={35} // Smaller progress ring
                trackColor="#eeeeee"
                trackSize={0} // Smaller track
                size={2} // Adjusted size
                direction={1} // Ensures clockwise movement
                min={0} // Starts at 1
                max={12} // Stops at 12
                data={Array.from({ length: 12 }, (_, i) => `${i + 1}`)} // Generates 1-12 hours
                // dataIndex={hour} // Keeps slider index in sync
                onChange={(value) => { handleHourChange(value) }}
              />
              {/* </Container> */}
            </Tab>

            {/* Flexible Tab */}
            <Tab eventKey="flexible" title="Flexible">
              <DayPicker
                mode="single"
                selected={newDate}
                onSelect={(e) => setNewDate(e ? format(e, "MMMM d, yyyy") : '')}
              />
              <div className="time-slot d-flex mt-2">
                <Form.Select value={fromTime} onChange={(e) => handleTimeChange("from", e.target.value)}>
                  <option value="">From</option>
                  {timeOptions.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </Form.Select>
                <Form.Select value={toTime} onChange={(e) => handleTimeChange("to", e.target.value)} disabled={!fromTime}>
                  <option value="">To</option>
                  {timeOptions.map((time, index) => (
                    <option key={index} value={time} disabled={fromTime && timeOptions.indexOf(time) <= timeOptions.indexOf(fromTime)}>
                      {time}
                    </option>
                  ))}
                </Form.Select>
              </div>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Filter button pop up */}
      <Modal show={filterShow} onHide={handleClose} centered dialogClassName="custom-modal" size="lg">
        <Modal.Header closeButton onClick={() => setFilterShow(false)}>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Type of Place */}
          <div className="justify-content-between p-3">
            <div className="align-items-center">
              <h5>Type of Place</h5>
              <p>Search rooms, entire homes, or any type of place.</p>

              <ToggleButtonGroup
                type="radio"
                name="options"
                value={selectedValue}
                onChange={(val) => setSelectedValue(val)}
                className="d-flex w-100 rounded-pill"
                style={{ backgroundColor: "#D1D4D4", padding: "5px" }}
              >
                {[
                  { id: "tbg-btn-1", value: "any_type", label: "Any Type" },
                  { id: "tbg-btn-2", value: "room", label: "Room" },
                  { id: "tbg-btn-3", value: "entire_home", label: "Entire Home" },
                ].map((btn) => (
                  <ToggleButton
                    key={btn.id}
                    id={btn.id}
                    value={btn.value}
                    className="flex-grow-1 border-0"
                    style={{
                      backgroundColor: selectedValue === btn.value ? "white" : "transparent",
                      color: selectedValue === btn.value ? "black" : "black",
                      fontWeight: "500",
                      padding: "10px",
                      borderRadius: "50px",
                    }}
                  >
                    {btn.label}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </div>
            {/* Price Range Section */}
            <div className="align-items-center p-2 mt-4">
              <h5>Price Range</h5>
              <p>Hourly prices before fees and taxes</p>
              <Container className="d-flex flex-column align-items-center w-100">
                {/* Histogram Image */}
                <div className="d-flex w-100 justify-content-center mb-3">
                  <Image
                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/price-range.svg"
                    alt="Price Range"
                    className="w-100"
                    fluid
                  />
                </div>

                {/* Range Slider */}
                <div className="w-100">
                  <Range
                    step={1}
                    min={50}
                    max={150}
                    values={values}
                    onChange={(newValues) => setValues(newValues)}
                    renderTrack={({ props, children }) => (
                      <div {...props} style={{ ...props.style, height: "6px", background: "#ddd", borderRadius: "3px", position: "relative" }}>
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div {...props} style={{ ...props.style, height: "16px", width: "16px", background: "#fff", border: "2px solid #000", borderRadius: "50%" }} />
                    )}
                  />
                </div>
              </Container>
              {/* Min-Max Input Fields */}
              <div className="d-flex justify-content-between align-items-center p-1">
                <Form.Group className="w-50 p-2">
                  <Form.Label>Minimum</Form.Label>
                  <Form.Control type="number" onChange={(e) => handleInputChangeMinMax(0, e)} value={values[0]} style={{ borderRadius: "50px" }} />
                </Form.Group>
                <Form.Group className="30px p-3 mt-4">
                  —
                </Form.Group>
                <Form.Group className="w-50 mr-2">
                  <Form.Label className="text-muted small" >Maximum</Form.Label>
                  <Form.Control type="number" onChange={(e) => handleInputChangeMinMax(0, e)} value={values[1]} style={{ borderRadius: "50px" }} />
                </Form.Group>
              </div>
            </div>
            {/* Filters: Location, Date, Time */}
            <div className="d-flex p-2 justify-conten">
              {/* Location Dropdown */}
              <Dropdown className="p-2">
                <Dropdown.Toggle
                  as="button"
                  variant="light"
                  id="dropdown-basic"
                  className="d-flex align-items-center bg-white rounded-pill shadow-sm border"
                  style={{
                    padding: "12px 16px",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    font: "caption",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "1px solid #ddd",
                  }}
                >
                  <img
                    src="https://design.yilstaging.com/ZYVO/assets/images/filters/location.svg"
                    alt="Location"
                    style={{ width: 20, height: 20 }}
                  />
                  {filterLocation || "Location"}
                  <span
                    style={{
                      backgroundColor: "#50E3C2",
                      borderRadius: "50%",
                      width: "22px",
                      height: "22px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginLeft: "10px",
                    }}
                  >
                    <Pencil size={12} color="white" />
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {locationData.map((loc, index) => (
                    <Dropdown.Item key={index} onClick={() => setFilterLocation(loc)}>
                      {loc}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {/* Location Dropdown */}
              <Dropdown className="p-2">
                <Dropdown.Toggle
                  variant="light"
                  id="dropdown-basic"
                  className="d-flex align-items-center bg-white rounded-pill shadow-sm border"
                  style={{
                    padding: '12px 16px',
                    fontSize: '1.2rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: '1px solid #ddd',
                  }}
                >
                  <img src="https://design.yilstaging.com/ZYVO/assets/images/filters/calendar-icon.svg" alt="calendar icon"
                    style={{ width: 20, height: 20, padding: '2px' }}
                  />
                  {finalDate ? format(finalDate, 'yyyy-MM-dd') : 'Date'}
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    padding: '15px',
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
                    borderRadius: '12px',
                    border: 'none',
                    minWidth: '240px',
                  }}
                >
                  <DayPicker
                    mode="single"
                    selected={finalDate}
                    onSelect={(date) => {
                      setFinalDate(format(date || new Date(), 'yyyy-MM-dd'));
                      setSelectedDate(false);
                    }}
                    
                  />

                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* Time Filter */}
            <div className="d-flex align-items-center justify-content-between p-3">
              <Dropdown className="mt-3">
                <Dropdown.Toggle
                  variant="light"
                  className="d-flex align-items-center bg-white rounded-pill shadow-sm border"
                  style={{
                    padding: "12px 16px",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    font: "caption",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "1px solid #ddd",
                  }}
                >
                  <Clock size={18} className="me-2" />
                  {selectedDuration > 0 ? `${selectedDuration} hours` : "Time"}
                  <div
                    className="d-flex align-items-center justify-content-center ms-2"
                    style={{
                      backgroundColor: "#50E3C2",
                      borderRadius: "50%",
                      width: "22px",
                      height: "22px",
                    }}
                  >
                    <Pencil size={12} color="white" />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    padding: "15px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    borderRadius: "12px",
                    border: "none",
                    minWidth: "240px",
                  }}
                >
                  {/* Duration Selector */}
                  <Form.Select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      padding: "8px 10px",
                      fontSize: "14px",
                    }}
                  >
                    <option value={0} > Select Hours </option>
                    {[2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22].map((duration) => (
                      <option key={duration} value={duration}>
                        {duration} hours
                      </option>
                    ))}
                  </Form.Select>

                  {/* Save Button */}
                  {/* <Button

                  variant="dark"
                  className="w-100 mt-3"
                  style={{
                    borderRadius: "8px",
                    padding: "10px",
                    fontWeight: "500",
                    backgroundColor: "#2D3E3F",
                    border: "none",
                  }}
                >
                  Save Changes
                </Button> */}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* Preferences */}
            <div className="m-2">
              <h2 className="text-dark">Preferences</h2>
              {sections.map((section, index) => (
                <div key={index} className="mb-3">
                  <p className="fw-bold">{section.title}</p>
                  <div
                    className="d-flex align-items-center justify-content-between p-2"
                    style={{
                      backgroundColor: "#D1D4D4",
                      borderRadius: "50px",
                      padding: "8px",
                    }}
                  >
                    {/* Toggle Buttons */}
                    <ToggleButtonGroup
                      type="radio"
                      name={section.name}
                      value={preferences[section.name] || ""}
                      onChange={(value) => handleSelect(section.name, value)}
                      className="d-flex flex-wrap gap-2"
                    >
                      {section.options.map((option, idx) => (
                        <ToggleButton
                          key={idx}
                          id={`${section.name}-${idx}`}
                          value={option}
                          variant="light"
                          className="border-0 rounded-pill px-3 py-2"
                          style={{
                            backgroundColor: preferences[section.name] === option ? "#50E3C2" : "transparent",
                            fontWeight: "500",
                            cursor: "pointer",
                          }}
                        >
                          {option}
                        </ToggleButton>
                      ))}
                    </ToggleButtonGroup>

                    {/* Custom Input + Check Button */}
                    <div className="d-flex align-items-center justify-content-right ms-2 ">
                      <InputGroup style={{ width: "180px", position: "relative" }}>
                        <Form>
                          <Form.Control
                            type="number"
                            placeholder="Type..."
                            // value={customInputs[section.name] || ""}
                            onChange={(e) => handleInputChange(section.name, e.target.value)}
                            className="text-center border-0"
                            style={{
                              height: "40px",
                              paddingRight: "45px", // Ensures text doesn’t overlap the button
                              borderRadius: "50px",
                              background: "#F0F2F2",
                              border: "1px solid #D1D4D4",
                            }}
                          />
                          <Button
                            variant="success"
                            className="position-absolute"
                            style={{
                              right: "5px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                              background: "#50E3C2",
                              border: "none",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <i className="fa-solid fa-check text-dark"></i>
                          </Button>
                        </Form>
                      </InputGroup>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Activites  */}

            <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "12px" }}>
              <h4 style={{ marginBottom: "20px" }}>Activities</h4>

              {/* Main Activities */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                  gap: "12px",
                }}
              >
                {activities1.map((activity) => (
                  <div
                    key={activity.name}
                    onClick={() => toggleActivity(activity.name)}
                    style={{
                      backgroundColor: selectedActivitiesFilter.includes(activity.name) ? "#50E3C2" : "white",
                      border: "1px solid #ccc",
                      padding: "20px",
                      borderRadius: "12px",
                      textAlign: "center",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "24px",
                        marginBottom: "8px",
                        color: selectedActivitiesFilter.includes(activity.name) ? "white" : "black",
                      }}
                    >
                      <img src={activity.icon} />
                    </div>
                    <span style={{ color: selectedActivitiesFilter.includes(activity.name) ? "white" : "black" }}>
                      {activity.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Toggle for Other Activities */}
              <h6
                style={{
                  marginTop: "20px",
                  marginBottom: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
                onClick={() => setShowOtherActivities(!showOtherActivities)}
              >
                Other Activities {showOtherActivities ? "⬆" : "⬇"}
              </h6>

              {/* Other Activities (Initially Visible) */}
              {showOtherActivities && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                    gap: "12px",
                  }}
                >
                  {otherActivities.map((activity) => (
                    <div
                      key={activity.name}
                      onClick={() => toggleActivity(activity.name)}
                      style={{
                        backgroundColor: selectedActivitiesFilter.includes(activity.name) ? "#50E3C2" : "white",
                        border: "1px solid #ccc",
                        padding: "20px",
                        borderRadius: "12px",
                        textAlign: "center",
                        fontWeight: "500",
                        cursor: "pointer",
                        transition: "0.3s",
                      }}
                    >
                      {/* <div
                        style={{
                          fontSize: "24px",
                          marginBottom: "8px",
                          color: selectedActivitiesFilter.includes(activity.name) ? "white" : "black",
                        }}
                      >
                        <img src={activity.icon} />
                      </div> */}

                      <div
                        className="d-flex justify-content-center align-items-center p-2 rounded"
                        style={{
                          fontSize: "24px",
                          marginBottom: "8px",
                          color: selectedActivitiesFilter.includes(activity.name) ? "black" : "white",
                        }}
                      >
                        <Image
                          src={activity.icon}
                          alt={activity.name}
                          fluid
                          rounded
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "contain",
                          }}
                        />
                      </div>

                      <span style={{ color: selectedActivitiesFilter.includes(activity.name) ? "white" : "black" }}>
                        {activity.name}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Amenities */}
            <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "12px" }}>
              <h4 style={{ marginBottom: "20px" }}>Amenities</h4>
              {/* Basic Amenities */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                {basicAmenities.map((amenity) => (
                  <label key={amenity} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={selectedAmenities.includes(amenity)}
                      onChange={() => toggleAmenity(amenity)}
                      style={{ marginRight: "8px" }}
                    />
                    {amenity}
                  </label>
                ))}
              </div>

              {/* More Amenities (Initially Hidden) */}
              {showMore && (
                <div style={{ marginTop: "10px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    {moreAmenities.map((amenity) => (
                      <label key={amenity} style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={selectedAmenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          style={{ marginRight: "8px" }}
                        />
                        {amenity}
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Show More / Show Less Toggle */}
              <p
                style={{ marginTop: "10px", cursor: "pointer", color: "blue" }}
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show Less" : "Show More"}
              </p>
            </div>

            {/* Booking */}
            <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "12px" }}>
              <h4 style={{ marginBottom: "20px" }}>Booking</h4>

              {togglesBooking.map((item, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                  <div>
                    <strong>{item.title}</strong>
                    {item.info && <span style={{ fontSize: "12px", marginLeft: "5px", cursor: "pointer" }}>ℹ️</span>}
                    {item.description && <p style={{ margin: "5px 0", fontSize: "14px", color: "#666" }}>{item.description}</p>}
                  </div>
                  <div
                    onClick={() => handleToggleBooking(index)}
                    style={{
                      width: "40px",
                      height: "20px",
                      borderRadius: "10px",
                      backgroundColor: item.toggle ? "#2C3E41" : "#ccc",
                      display: "flex",
                      alignItems: "center",
                      padding: "2px",
                      cursor: "pointer",
                      transition: "0.3s",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#fff",
                        transform: item.toggle ? "translateX(20px)" : "translateX(0px)",
                        transition: "0.3s",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Language */}
            <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "12px" }}>
              <h4 style={{ marginBottom: "20px" }}>Language</h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {["English", "German", "French", "Japanese"].map((language, index) => (
                  <label key={index} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <input
                      type="checkbox"
                      checked={selectedLanguages.includes(language)}
                      onChange={() => handleSelection(language)}
                    />
                    {language}
                  </label>
                ))}
              </div>
              {showMoreLanguages && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "10px" }}>
                  {["English", "German", "French", "Japanese", "English", "German"].map((language, index) => (
                    <label key={index + 4} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <input
                        type="checkbox"
                        checked={selectedLanguages.includes(language)}
                        onChange={() => handleSelection(language)}
                      />
                      {language}
                    </label>
                  ))}
                </div>
              )}
              <div
                onClick={() => setShowMoreLanguages(!showMoreLanguages)}
                style={{ marginTop: "10px", cursor: "pointer", color: "black", textDecoration: "underline" }}
              >
                {showMore ? "Show Less" : "See More"}
              </div>
            </div>
          </div>
        </Modal.Body >
        <Modal.Footer style={{ padding: "16px", borderTop: "1px solid #ddd" }}>
          <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
            {/* Clean All Button */}
            <button
              onClick={handleCleanAll}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#fff",
                border: "2px solid #ddd",
                borderRadius: "25px",
                padding: "10px 18px",
                cursor: "pointer",
                fontWeight: "bold",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.7)",
                transition: "0.3s",
              }}
            >
              Clean All
              <FaRedo
                style={{
                  color: isCleaned ? "#2F3E46" : "#ddd",
                  fontSize: "20px",
                  backgroundColor: "#f1f1f1",
                  borderRadius: "50%",
                }}
              />
            </button>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              style={{
                width: "145px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: "#50E3C2",
                border: "none",
                borderRadius: "25px",
                padding: "10px 18px",
                cursor: "pointer",
                fontWeight: "bold",
                color: "#fff",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.8)",
                transition: "0.3s",
              }}
            >
              Search
              <Container className="d-flex justify-content-end">
                <div
                  className="search-icon d-flex align-items-center justify-content-center"
                  style={{
                    height: "45px",
                    width: "45px",
                    backgroundColor: "#3A4B4C",
                    borderRadius: "50%",
                    color: "#fff",
                    fontSize: "16px", // Ensure visibility
                  }}
                >
                  <i class="fa-regular fa-magnifying-glass" style={{
                    color: "#FFFFFF",
                    fontSize: "25px",
                    borderRadius: "50%",
                  }}></i>

                </div>
              </Container>
            </button>
          </div>
        </Modal.Footer >
      </Modal >

    </>
  );
};

export default HomeHeader;
