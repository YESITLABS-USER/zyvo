import React, { useEffect, useState } from "react";
import HomeHeader from "../../components/guest/HomeHeader";
import Footer from "../../components/guest/Footer";

import HeaderFilter from "../../components/guest/HeaderFilter";
import { Link } from "react-router-dom";

import Header from "../../components/host/Header";
import Constant, { KEYS, imageBase } from "../../config/Constant";
import useCommon from "../../hooks/useCommon";
import AddToWishlistModal from "../../components/guest/wishlistModals/AddToWishlistModal";
import Pagination from "../../components/guest/Pagination";
import ProductItem from "../../components/guest/ProductItem";
import Map from "../../components/guest/Map";
import { Button, Col, Container, Row } from "react-bootstrap";

const Home = () => {
  const { guestHomeData, guestWishlistData, showMap, setShowMap } = useCommon();
  let SelectedFlow = Constant?.selectedFlow;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [localHomeList, setLocalHomeList] = useState([]);
  const [wishlistArr, setWishlistArr] = useState([]);
  const [showAddWishlistModal, setShowAddWishlistModal] = useState(false);
  const [propertyId, setPropertyId] = useState(null);
  const [refresh, setRefresh] = useState(0);

  const handleClose = () => {
    setShowAddWishlistModal(false);
  }

  console.log("Home page", showMap);

  //get userType
  const [useTypes, setUserTypes] = useState(
    localStorage.getItem(KEYS.USER_TYPE)
  );
  // set data in userType & list
  useEffect(() => {
    const handleStorageChange = () => {
      setUserTypes(localStorage.getItem(KEYS.USER_TYPE));
    };

    const getWishlist = async () => {
      const wishlistData = await guestWishlistData({
        "user_id": 1
      })
      // console.log("wishlist data is", wishlistData);
      setWishlistArr(wishlistData?.data);
    }
    getWishlist();

    fetchList(); // fetch userlist
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    const getWishlist = async () => {
      const wishlistData = await guestWishlistData({
        "user_id": 1
      })
      // console.log("wishlist data is", wishlistData);
      setWishlistArr(wishlistData?.data);
    }
    getWishlist();
  }, [refresh]);

  //

  const fetchList = async () => {
    const response = await guestHomeData({
      user_id: 1,
      latitude: 22.572645,
      longitude: 88.363892,
    });
    if (response) {
      setLocalHomeList(response?.data);
    }
  };



  const totalPages = Math.ceil(localHomeList.length / itemsPerPage);

  // Get paginated data
  const paginatedData = localHomeList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  console.log('paginatedData',paginatedData)

  return (
    <>
      {useTypes == "guest" ? <HomeHeader /> : <Header />}

      {/* <HeaderFilter /> */}
      <main>
        {/* <!-- TOP-FILTERS-SECTION -->
         < !-- DESKTOP-&-TABLET --> */}
        {/* <div className="top-filter-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-md-8">
                <div className="top-filter-inner">
                  <ul>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/location.svg"
                        alt=""
                      />
                      <p>New York, US</p>
                      <button type="button">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/calendar-icon.svg"
                        alt=""
                      />
                      <p>October 22, 2023</p>
                      <button type="button">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/time.svg"
                        alt=""
                      />
                      <p>2 hours</p>
                      <button type="button">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </li>
                    <li>
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/price.svg"
                        alt=""
                      />
                      <p>$10 - $25</p>
                      <button type="button">
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="top-filter-inner">
                  <div className="top-filter-inner-btns">
                    <a
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#filters-popup"
                    >
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/filters.svg"
                        alt=""
                      />
                      Filters
                    </a>
                    <a href="javascript:void(0);" className="active">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/filters/show-map.svg"
                        alt=""
                      />
                      Show map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <!-- DESKTOP-&-TABLET -->
         <!-- MOBILE --> */}
        <div className="mob-search-filter border-start-0 border-end-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="mob-search-filter-in">
                  <div className="mob-search-in">
                    <ul>
                      <li>
                        <a href="mob-src-filter.html">Where</a>
                      </li>
                      <li>
                        <a
                          className="mob-search-in-time"
                          href="mob-src-filter.html"
                        >
                          Time
                        </a>
                      </li>
                      <li>
                        <a href="mob-src-filter.html">Activity</a>
                      </li>
                    </ul>
                    <a href="mob-src-filter.html" className="mob-search-button">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </a>
                  </div>
                  <div className="mob-filter-in">
                    <a href="mob-filter.html">
                      <img
                        src="https://design.yilstaging.com/ZYVO/assets/images/mobile/filters/filter.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- MOBILE -->
      <!-- TOP-FILTERS-SECTION -->

       <!-- LOCATION-GRID-&-MAP-SECTION --> */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}

        >
          <Container fluid>
            <Row className="justify-content-end mb-3">
              <Col xs="auto">
                <Button onClick={() => setShowMap(!showMap)}>
                  {showMap ? "Hide Map" : "Show Map"}
                </Button>
              </Col>
            </Row>

            <Row>
              <Col lg={showMap ? 7 : 12} md={showMap ? 8 : 12} sm={12}>
                <Row className="g-3">
                  {paginatedData?.map((item, index) => (
                    <Col
                      key={index}
                      xl={showMap ? 6 : 3} // 2 per row when map is open, 4 when hidden
                      lg={showMap ? 6 : 4} // 2 per row when map is open, 3 when hidden
                      md={6} // Always 2 per row on medium screens
                      sm={12} // Always full width on small screens
                    >
                      <ProductItem
                        hourly_rate={item?.hourly_rate}
                        distance_miles={item?.distance_miles}
                        images={item?.images}
                        is_instant_book={item?.is_instant_book}
                        property_id={item?.property_id}
                        rating={item?.rating}
                        title={item?.title}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>

              {showMap && (
                <Col lg={5} md={4} sm={12} style={{ height: "100vh", position: "sticky", top: 0, borderRadius: "500px" }}>
                  <Map lat="22.572645" lng="88.363892" />
                </Col>
              )}
            </Row>

            {/* <Row className="justify-content-center mt-4">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </Row> */}
          </Container>
        </div>

        {/* <!-- LOCATION-GRID-&-MAP-SECTION -->
            <!-- PAGINATION-SECTION --> */}
        <div className="home-pagination-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="time-and-pagination">
                  <div className="time-countdown">
                    <button
                      type="button"
                      className="need-more-time-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#need-more-time-popup"
                    >
                      {/* <!-- TIME-COUNTDOWN --> */}
                      <div className="time-countdown-inner desktop-tablet-countdown">
                        <div className="time-countdown-data">
                          <h2>Time Left</h2>
                          <div className="countdown" id="countdown1">
                            <div className="time-section">
                              <div className="hours">00</div>
                              <div className="label">Hour</div>
                            </div>
                            <div className="time-section">
                              <div className="minutes">00</div>
                              <div className="label">Min</div>
                            </div>
                            <div className="time-section">
                              <div className="seconds">00</div>
                              <div className="label">Sec</div>
                            </div>
                          </div>
                        </div>
                        <div id="icon-container">
                          <img
                            id="icon"
                            src="https://design.yilstaging.com/ZYVO/assets/images/time-countdown/timer-logo.svg"
                            alt="Icon"
                          />
                        </div>
                        <img
                          id="countdown-bg"
                          src="https://design.yilstaging.com/ZYVO/assets/images/time-countdown/timer.svg"
                          alt=""
                        />
                      </div>
                      {/* <!-- TIME-COUNTDOWN --> */}
                    </button>
                  </div>
                  <div className="home-pagination-wrap">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-12">
                          <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- PAGINATION-SECTION -->
             <!-- MOBILE-TIME-COUNTDOWN --> */}
        <button
          className="need-more-time-btn"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#need-more-time-popup"
        >
          <div className="time-countdown-inner mobile-countdown">
            <div className="time-countdown-data">
              <h2>Time Left</h2>
              <div className="countdown" id="countdown2">
                <div className="time-section">
                  <div className="hours">00</div>
                  <div className="label">Hour</div>
                </div>
                <div className="time-section">
                  <div className="minutes">00</div>
                  <div className="label">Min</div>
                </div>
                <div className="time-section">
                  <div className="seconds">00</div>
                  <div className="label">Sec</div>
                </div>
              </div>
            </div>
            <div id="icon-container">
              <img
                id="icon"
                src="https://design.yilstaging.com/ZYVO/assets/images/time-countdown/timer-logo.svg"
                alt="Icon"
              />
            </div>
            <img
              id="countdown-bg"
              src="https://design.yilstaging.com/ZYVO/assets/images/time-countdown/timer-mobile.svg"
              alt=""
            />
          </div>
        </button>
        {/* <!-- MOBILE-TIME-COUNTDOWN --> */}
      </main>

      <Footer />
      <AddToWishlistModal
        wishlistArr={wishlistArr}
        showAddWishlistModal={showAddWishlistModal}
        propertyId={propertyId}
        userId="1"
        handleClose={() => {
          setShowAddWishlistModal(false);
          setPropertyId(null);
        }} />
    </>
  );
};

export default Home;
