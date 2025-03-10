import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { imageBase } from "../../config/Constant";
import { PiDotsThreeCircleFill } from "react-icons/pi";

const CustomCarousel = ({ images, onEdit, onDelete }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "350px",
        height: "350px",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* Three Dots Icon */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
          zIndex: 10,
          background: "rgba(0, 0, 0, 0.6)",
          padding: "5px",
          borderRadius: "50%",
        }}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <PiDotsThreeCircleFill color="#fff" size={24} />
      </div>

      {/* Dropdown Menu */}
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "10px",
            background: "#fff",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            overflow: "hidden",
            zIndex: 20,
          }}
        >
          <button
            style={dropdownItemStyle}
            onClick={() => {
              onEdit && onEdit(true);
              setShowDropdown(false);
            }}
          >
            Edit
          </button>
          <button
            style={dropdownItemStyle}
            onClick={() => {
              onDelete && onDelete();
              setShowDropdown(false);
            }}
          >
            Delete
          </button>
        </div>
      )}

      {/* Carousel */}
      <Carousel data-bs-theme="dark" style={{ width: "100%", height: "100%" }}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <div
              style={{
                width: "350px",
                height: "400px",
                overflow: "hidden",
              }}
            >
              <img
                className="d-block w-100"
                src={`${imageBase}${image}`}
                alt={`Slide ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <Carousel.Caption>
              <h5>{image.caption}</h5>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

// Dropdown item style
const dropdownItemStyle = {
  width: "100%",
  padding: "10px",
  background: "#fff",
  border: "none",
  textAlign: "left",
  cursor: "pointer",
  fontSize: "14px",
  borderBottom: "1px solid #ddd",
};

// Remove border from last item
dropdownItemStyle[":last-child"] = { borderBottom: "none" };

export default CustomCarousel;
