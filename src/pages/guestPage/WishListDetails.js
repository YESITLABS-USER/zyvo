import React, { useEffect, useState } from "react";
import Header from "../../components/guest/Header";
import Footer from "../../components/guest/Footer";
import AuthModal from "../../components/guest/authModal";
import { Link } from "react-router-dom";
import useCommon from "../../hooks/useCommon";
import { useLocation } from "react-router-dom";
import CustomCarouselGuest from "../../components/guest/CustomCarouselGuest";

const WishListDetails = () => {

  const {
    getSavedItemsInWishlist,
    removeItemFromWishlist
  } = useCommon();

  const location = useLocation();
  const wishlist_id = location.state?.wishlist_id;

  const [wishlistItemsArr, setWishlistItemsArr] = useState([]);

  const getSavedItems = async () => {
    const result = await getSavedItemsInWishlist({wishlist_id, user_id:"1"});
    console.log("result is", result);
    setWishlistItemsArr(result?.data);
  }

  const handleRemoveItemFromWishlist = async (propertyId) => {
    const result = await removeItemFromWishlist({property_id: propertyId, user_id:"1"})
    console.log("result from handleRemoveItemFromWishlist", result);
    if(result.success){
      await getSavedItems();
    }
  }

  useEffect(()=>{
    getSavedItems();
  }, [])


  return (
    <>
      <Header />

      {/*  */}

      <main>
        {/* <!-- MOBILE --> */}
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
    <!-- WISHLIST-PAGE --> */}
        <div className="notifications-wrap location-grid-map-wrap">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="notifications-in">
                  <h2>
                    <Link to="/wishlist">
                      <i className="fa-regular fa-arrow-left"></i>
                    </Link>
                    Sea view
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="location-grid-map-in">
                  <div className="location-grid-wrap">
                    {
                      wishlistItemsArr.map((item, index)=>(
                        <div className="location-grid-item">
                          <div
                            id="carouselExampleIndicators"
                            className="carousel slide"
                            data-bs-ride="carousel"
                          >
                            <div className="carousel-inner-top">
                              {
                                item?.is_instant_book ? <h3>
                                <i className="fa-solid fa-bolt"></i> Instant book </h3> : ""
                              }
                              <div className="carousel-inner-top-heart">
                                <a onClick={()=>handleRemoveItemFromWishlist(item?.property_id)}>
                                  <img src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg" className="active" alt="" />
                                </a>
                              </div>
                              {/* <!-- <div className="carousel-inner-top-heart">
                            <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-wishlist">
                              <img src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg" alt="" className="active">
                              <img src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg" alt="">
                            </a>
                          </div> --> */}
                            </div>
                            {/* <div className="carousel-indicators">
                              <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="0"
                                className="active"
                                aria-current="true"
                                aria-label="Slide 1"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                              ></button>
                              <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to="3"
                                aria-label="Slide 4"
                              ></button>
                            </div> */}
                            {/* <div className="carousel-inner">
                              <div className="carousel-item active">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/1.svg"
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/2.svg"
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/3.svg"
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                              <div className="carousel-item">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/4.svg"
                                  className="d-block w-100"
                                  alt="..."
                                />
                              </div>
                            </div> */}
                            {/* <button
                              className="carousel-control-prev"
                              type="button"
                              data-bs-target="#carouselExampleIndicators"
                              data-bs-slide="prev"
                            >
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Previous</span>
                            </button> */}
                            {/* <button
                              className="carousel-control-next"
                              type="button"
                              data-bs-target="#carouselExampleIndicators"
                              data-bs-slide="next"
                            >
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              ></span>
                              <span className="visually-hidden">Next</span>
                            </button> */}
                            <CustomCarouselGuest images={item?.images} propertyId={item?.property_id}/>
                            <div className="carousel-inner-bottom">
                              <div className="carousel-inner-bottom-image">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/1.png"
                                  alt=""
                                />
                                <span className="carousel-profile-batch"></span>
                              </div>
                              <h2>
                                <Link to="/host-listing">Hosted by Mia</Link> <br />
                                <span>Melbourne Beach, FL, US</span>
                              </h2>
                            </div>
                          </div>
                          <div className="carousel-inner-content">
                            <div className="carousel-inner-content-top">
                              <h1>
                                <Link to="/location" state={{property_id: item?.property_id}}>{item?.title}</Link>
                              </h1>
                              <p>
                                <i className="fa-solid fa-clock"></i> ${parseFloat(item?.hourly_rate)} / h
                              </p>
                            </div>
                            <ul>
                              <li className="align-items-start">
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                                  alt=""
                                />
                                <span>{item?.rating}</span> (1k+)
                              </li>
                              <li>
                                <img
                                  src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                                  alt=""
                                />{" "}
                                37 miles away
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                  <div className="location-map-wrap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.139268703457!2d-133.14340392403935!3d55.4776704131501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540e467f9dd315f3%3A0xf4eae0d4d7764524!2s245%20Cold%20Storage%20Rd%2C%20Craig%2C%20AK%2099921%2C%20USA!5e0!3m2!1sen!2sin!4v1723457458145!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      //   style="border:0;"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- WISHLIST-PAGE --> */}
      </main>

      {/*  */}
      <AuthModal />
      <Footer />
    </>
  );
};

export default WishListDetails;
