import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomCarouselGuest from "./CustomCarouselGuest";
import useCommon from "../../hooks/useCommon";
import AddToWishlistModal from "./wishlistModals/AddToWishlistModal";

const ProductItem = ({ hourly_rate, distance_miles, images = [], is_instant_book, property_id, rating, title }) => {
  const { setPropertyId, propertyId, setShowAddWishlistModal, wishlistArr, setRefresh, showAddWishlistModal } = useCommon();

  const [isWishlisted, setIsWishlisted] = useState(false);
  const handleWishlistClick = () => {
    setIsWishlisted((prev) => !prev);
    setRefresh((prev) => prev + 1);
    setShowAddWishlistModal(true);
    setPropertyId(property_id);
  };


  return (
    <>
      {/* <div className="location-grid-item" style={{ padding:"25px" }}> */}
      <div
        className="w-full h-full"
        style={{
          padding: "2px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Image Carousel & Wishlist */}
        <div
          className="carousel slide"
          data-bs-interval="1000000"
          data-bs-ride="carousel"
          style={{
            borderRadius: "25px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Top Section - Instant Book & Wishlist */}
          <div
            className="carousel-inner-top"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              right: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              zIndex: 10,
            }}
          >
            {is_instant_book && (
              <h3
                style={{
                  color: "#fff",
                  background: "#00000080",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  margin: 0,
                }}
              >
                <i className="fa-solid fa-bolt"></i> Instant book
              </h3>
            )}
            <div
              className="carousel-inner-top-heart"
              onClick={handleWishlistClick}
              style={{
                position: "relative",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center the icon
                gap: "5px",
                backgroundColor: "transparent", // Ensure visibility
                padding: "5px",
                borderRadius: "5px",
                zIndex: 10, // Ensure it's above other elements
              }}
            >
              {isWishlisted !== null && ( // Ensure state is defined before rendering
                <img
                  src={
                    isWishlisted
                      ? "https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart-fill.svg"
                      : "https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/heart.svg"
                  }
                  alt="Wishlist"
                  style={{
                    width: "24px",
                    display: "block", // Ensures it's visible
                    zIndex: 11, // Higher than background
                  }}
                  onError={(e) => {
                    e.target.style.display = "none"; // Hide if image fails to load
                  }}
                />
              )}
            </div>

          </div>

          {/* Main Carousel */}
          <div
            className="carousel-inner"
            style={{
              width: "100%",
              maxHeight: "300px", // Set max height to prevent oversized images
              overflow: "hidden",
            }}
          >
            <CustomCarouselGuest images={images} propertyId={property_id} />
          </div>

          {/* Host Information */}
          <div
            className="carousel-inner-bottom"
            style={{
              position: "absolute",
              bottom: "10px",
              left: "10px",
              right: "10px",
              display: "flex",
              alignItems: "center",
              background: "#ffffffd9",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <div className="carousel-inner-bottom-image">
              <img
                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/profile/1.png"
                alt="Host"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  objectFit: "cover", // Ensures image doesn't stretch
                }}
              />
            </div>
            <h2 style={{ fontSize: "16px", margin: 0 }}>
              Hosted by Mia <br />
              <span style={{ fontSize: "14px", color: "#555" }}>
                Melbourne Beach, FL, US
              </span>
            </h2>
          </div>
        </div>

        {/* Property Details */}
        <div
          className="carousel-inner-content"
          style={{
            marginTop: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="carousel-inner-content-top">
            <h1>
              <Link to={`/location/${property_id}`}>
                {title}
              </Link>
            </h1>
            <p style={{ margin: "5px 0", fontSize: "16px", fontWeight: "bold" }}>
              <i className="fa-solid fa-clock"></i> ${parseFloat(hourly_rate)} / h
            </p>
          </div>
          <ul
            style={{
              padding: 0,
              listStyle: "none",
              display: "flex",
              gap: "15px",
              justifyContent: "center",
            }}
          >
            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/star-icon.svg"
                alt="Star"
                style={{ width: "16px" }}
              />
              <span>{rating}</span> (1k+)
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <img
                src="https://design.yilstaging.com/ZYVO/assets/images/locations-grid/location-icon.svg"
                alt="Location"
                style={{ width: "16px" }}
              />
              {distance_miles} miles away
            </li>
          </ul>
        </div>
      </div>

      {/* Wishlist Modal */}
      <AddToWishlistModal
        wishlistArr={wishlistArr}
        showAddWishlistModal={showAddWishlistModal}
        propertyId={propertyId}
        userId="1"
        handleClose={() => {
          setShowAddWishlistModal(false);
          setPropertyId(null);
        }}
      />
    </>
  );
};

export default ProductItem;
