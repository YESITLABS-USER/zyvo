import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setAddPropertyDetails } from "../../../store/slices/hostuserSlice";
import { imageBase } from "../../../config/Constant";
// import { setAddPropertyDetails } from "../../store/slices/hostuserSlice";
//
const GalleryLocation = ({ switchToAddProperty, propertyData, isEdited }) => {
  const dispatch = useDispatch();
  const GallerySelect = useSelector((state) => state?.hostuser);
  const [images, setImages] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]); // Track deleted image IDs

  const [displayImg, setDisplayImg] = useState(
    Array.isArray(propertyData?.property_images)
      ? propertyData.property_images.map((img) => ({
          id: img.id, // Store ID for tracking deleted images
          image_url: `${imageBase}${img.image_url}`,
        }))
      : []
  );
  console.log(images, "images test");
  console.log(displayImg, "displaying image");
  console.log(deletedImages, "deleteing image");

  const [location, setLocation] = useState({ lat: null, long: null });

  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title:
      propertyData?.title != null && propertyData?.title !== undefined
        ? propertyData.title
        : "",
    description:
      propertyData?.property_description != null &&
      propertyData?.property_description !== undefined
        ? propertyData?.property_description
        : "",
    street:
      propertyData?.street_address != null &&
      propertyData?.street_address !== undefined
        ? propertyData?.street_address
        : "",
    city:
      propertyData?.city != null && propertyData?.city !== undefined
        ? propertyData?.city
        : "",
    state:
      propertyData?.state != null && propertyData?.state !== undefined
        ? propertyData?.state
        : "",
    country:
      propertyData?.country != null && propertyData?.country !== undefined
        ? propertyData?.country
        : "",
    zipCode:
      propertyData?.zip_code != null && propertyData?.zip_code !== undefined
        ? propertyData?.zip_code
        : "",
    parking_rules:
      propertyData?.parking_rules != null &&
      propertyData?.parking_rules !== undefined
        ? propertyData?.parking_rules
        : "",
    host_rules:
      propertyData?.host_rules != null && propertyData?.host_rules !== undefined
        ? propertyData?.host_rules
        : "",
  });
  const [errors, setErrors] = useState({});

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64String = reader.result; // Get the Base64 string

        setImages((prevImages) => [...prevImages, base64String]); // Store in images
        setDisplayImg((prevImages) => [
          ...prevImages,
          { id: null, image_url: base64String }, // New image has no ID
        ]);
      };

      reader.readAsDataURL(file); // Convert file to Base64
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleImageDelete = (index) => {
    const deletedImage = displayImg[index]; // Get the deleted image data

    if (deletedImage.id) {
      setDeletedImages((prev) => [...prev, deletedImage.id]); // Store only the ID
    }

    setImages(images.filter((_, i) => i !== index)); // Remove from images
    setDisplayImg(displayImg.filter((_, i) => i !== index)); // Remove from display
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";
    if (!formData.street.trim()) newErrors.street = "Street is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    // if (!formData.parking_rules.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "state is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip Code is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //
  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };
  //

  let params = {
    title: formData?.title,
    description: formData?.description,
    street_address: formData?.street,
    city: formData?.city,
    zip_code: formData?.zipCode,
    country: formData?.country,
    state: formData?.state,
    latitude: location?.lat || "28.7",
    longitude: location?.long || "77.1",
    images: images,
    parking_rules: formData?.parking_rules,
    host_rules: formData?.host_rules,
  };
  if (isEdited) {
    params.delete_images = deletedImages; // Append new uploaded images
  }
  const GalleryValidation = () => {
    let flag = true;

    if (!formData.title.trim()) {
      toast.error("Please enter a title", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!formData.description.trim()) {
      toast.error("Please enter a description", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!formData.street.trim()) {
      toast.error("Please enter a street address", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }
    if (images.length === 0) {
      toast.error("Please select at least one image", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!formData.city.trim()) {
      toast.error("Please enter a city", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!formData.zipCode.trim()) {
      toast.error("Please enter a zip code", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!formData.country.trim()) {
      toast.error("Please select a country", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    if (!formData.state.trim()) {
      toast.error("Please enter a state", {
        position: "top-center",
        autoClose: 3000,
      });
      flag = false;
    }

    return flag; // Returns false if any validation fails
  };

  const handleGalleryLocation = (async) => {
    if (!GalleryValidation()) return;
    dispatch(setAddPropertyDetails(params));
    switchToAddProperty("price_availability");
  };

  return (
    <Container className="mt-4">
      {/* Gallery Section */}
      <h4>Gallery</h4>
      <Row>
        {displayImg.map((img, index) => (
          <Col key={index} xs={3} className="mb-2 position-relative">
            <img
              src={
                img?.image_url != null && img?.image_url !== undefined
                  ? img?.image_url
                  : img
              }
              alt="Selected"
              className="img-fluid rounded border"
              style={{ width: "200px", height: "200px", objectFit: "cover" }} // Set fixed size
            />

            <MdDelete
              className="position-absolute top-0 end-0 bg-white rounded-circle p-1"
              style={{ cursor: "pointer" }}
              onClick={() => handleImageDelete(index)}
              size={25}
              color={"black"}
            />
          </Col>
        ))}

        <Col xs={3} className="mb-2">
          <label
            className="d-flex justify-content-center align-items-center border rounded p-3"
            style={{ width: "100px", height: "100px", cursor: "pointer" }}
          >
            <AiOutlinePlus size={40} />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </label>
        </Col>
      </Row>
      <hr />

      {/* About the Space Section */}
      <h4>About the Space</h4>
      <Form.Control
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="mb-2"
        style={{ width: "90%", borderRadius: "8px" }}
      />
      {errors.title && <Alert variant="danger">{errors.title}</Alert>}
      <Form.Control
        as="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="mb-2"
        style={{ width: "90%", height: "100px", borderRadius: "4px" }}
      />
      {errors.description && (
        <Alert variant="danger">{errors.description}</Alert>
      )}
      <hr />
      <h4>Parking Rules</h4>
      <Form.Control
        as="textarea"
        name="parking_rules"
        value={formData.parking_rules}
        onChange={handleChange}
        placeholder="(Optional)"
        className="mb-2"
        style={{ width: "90%", height: "100px", borderRadius: "4px" }}
      />
      {errors.parking_rules && (
        <Alert variant="danger">{errors.parking_rules}</Alert>
      )}
      <hr />
      <h4>Host rules</h4>
      <Form.Control
        as="textarea"
        name="host_rules"
        value={formData.host_rules}
        onChange={handleChange}
        placeholder="(Optional)"
        className="mb-2"
        style={{ width: "90%", height: "100px", borderRadius: "4px" }}
      />
      {errors.host_rules && <Alert variant="danger">{errors.host_rules}</Alert>}
      {/* Address Section */}
      <h4>Address</h4>
      <Form.Control
        type="text"
        name="street"
        value={formData.street}
        onChange={handleChange}
        placeholder="Street"
        className="mb-2"
        style={{ width: "90%", borderRadius: "8px", borderColor: "blue" }}
      />
      {errors.street && <Alert variant="danger">{errors.street}</Alert>}
      <Form.Control
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        className="mb-2"
        style={{ width: "90%", borderRadius: "8px", borderColor: "blue" }}
      />
      {errors.city && <Alert variant="danger">{errors.city}</Alert>}

      <Form.Control
        type="text"
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="state"
        className="mb-2"
        style={{ width: "90%", borderRadius: "8px", borderColor: "blue" }}
      />
      {errors.state && <Alert variant="danger">{errors.state}</Alert>}
      <Row>
        <Col>
          <Form.Control
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            className="mb-2"
            style={{ width: "100%", borderRadius: "8px", borderColor: "blue" }}
          />
          {errors.zipCode && <Alert variant="danger">{errors.zipCode}</Alert>}
        </Col>
        <Col>
          <Form.Control
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
            className="mb-2"
            style={{ width: "100%", borderRadius: "8px", borderColor: "blue" }}
          />
          {errors.country && <Alert variant="danger">{errors.country}</Alert>}
        </Col>
      </Row>

      <Container className="mt-4 d-flex justify-content-between">
        {/* Clear All Button */}
        <Button
          variant="outline-success"
          onClick={() => switchToAddProperty("home_setup")}
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
          onClick={handleGalleryLocation}
        >
          Save and Continue
        </Button>
      </Container>
      <ToastContainer />
    </Container>
  );
};

export default GalleryLocation;
////

//

// //code written by rajan for future
// import React, { useState } from "react";
// import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
// import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
// import axios from "axios";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "90%",
//   height: "300px",
// };

// const center = {
//   lat: 37.7749,
//   lng: -122.4194,
// };

// const SpaceForm = () => {
//   const [images, setImages] = useState([]);
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     street: "",
//     city: "",
//     zipCode: "",
//     country: ""
//   });
//   const [errors, setErrors] = useState({});

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImages([...images, imageUrl]);
//     }
//   };

//   const handleImageDelete = (index) => {
//     setImages(images.filter((_, i) => i !== index));
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.title.trim()) newErrors.title = "Title is required";
//     if (!formData.description.trim()) newErrors.description = "Description is required";
//     if (!formData.street.trim()) newErrors.street = "Street is required";
//     if (!formData.city.trim()) newErrors.city = "City is required";
//     if (!formData.zipCode.trim()) newErrors.zipCode = "Zip Code is required";
//     if (!formData.country.trim()) newErrors.country = "Country is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;
//     try {
//       const response = await axios.post("https://your-api-endpoint.com/submit", {
//         ...formData,
//         images
//       });
//       console.log("Data submitted successfully:", response.data);
//     } catch (error) {
//       console.error("Error submitting data:", error);
//     }
//   };

//   return (
//     <Container className="mt-4">
//       {/* Gallery Section */}
//       <h4>Gallery</h4>
//       <Row>
//         {images.map((img, index) => (
//           <Col key={index} xs={3} className="mb-2 position-relative">
//             <img src={img} alt="Selected" className="img-fluid rounded border" />
//             <AiOutlineClose
//               className="position-absolute top-0 end-0 bg-white rounded-circle p-1"
//               style={{ cursor: "pointer" }}
//               onClick={() => handleImageDelete(index)}
//             />
//           </Col>
//         ))}
//         <Col xs={3} className="mb-2">
//           <label className="d-flex justify-content-center align-items-center border rounded p-3" style={{ width: "100px", height: "100px", cursor: "pointer" }}>
//             <AiOutlinePlus size={40} />
//             <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: "none" }} />
//           </label>
//         </Col>
//       </Row>
//       <hr />

//       {/* About the Space Section */}
//       <h4>About the Space</h4>
//       <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="mb-2" style={{ width: "90%", borderRadius: "8px" }} />
//       {errors.title && <Alert variant="danger">{errors.title}</Alert>}
//       <Form.Control as="textarea" name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="mb-2" style={{ width: "90%", height: "100px", borderRadius: "4px" }} />
//       {errors.description && <Alert variant="danger">{errors.description}</Alert>}
//       <hr />

//       {/* Address Section */}
//       <h4>Address</h4>
//       <Form.Control type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Street" className="mb-2" style={{ width: "90%", borderRadius: "8px", borderColor: "blue" }} />
//       {errors.street && <Alert variant="danger">{errors.street}</Alert>}
//       <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="mb-2" style={{ width: "90%", borderRadius: "8px", borderColor: "blue" }} />
//       {errors.city && <Alert variant="danger">{errors.city}</Alert>}
//       <Row>
//         <Col>
//           <Form.Control type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} placeholder="Zip Code" className="mb-2" style={{ width: "100%", borderRadius: "8px", borderColor: "blue" }} />
//           {errors.zipCode && <Alert variant="danger">{errors.zipCode}</Alert>}
//         </Col>
//         <Col>
//           <Form.Control type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="mb-2" style={{ width: "100%", borderRadius: "8px", borderColor: "blue" }} />
//           {errors.country && <Alert variant="danger">{errors.country}</Alert>}
//         </Col>
//       </Row>

//       {/* Google Map Section */}
//       <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//         <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
//           <Marker position={center} />
//         </GoogleMap>
//       </LoadScript>

//       <Button onClick={handleSubmit} className="mt-3">Submit</Button>
//     </Container>
//   );
// };

// export default SpaceForm;
