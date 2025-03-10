import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";

import PriceAvailblity from "./PriceAvailblity";
import AddProperty from "./AddProperty";
import { useSelector } from "react-redux";
import GalleryLocation from "./Gallery_location";
import useHome from "../../../hooks/host/useHome";

function AddPropertyModal(props) {
  const DataUser = useSelector((state) => state?.hostuser?.propertyId);

  const { updateProperyDetails, getPropertyDetails } = useHome();
  const [propertyData, setPropertyData] = useState();

  const propertyID = props?.property_id;
  console.log(propertyID, typeof propertyID, "propertyIDpropertyIDpropertyID");

  const [activeTab, setActiveTab] = useState("home_setup");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    if (propertyID) {
      fetchPropertyDetails();
    }
  }, [props?.show]);

  //
  const fetchPropertyDetails = async () => {
    if (propertyID) {
      const response = await getPropertyDetails({
        property_id: propertyID,
      });
      if (response) {
        if (propertyID) {
          setPropertyData(response?.data);
        }
        console.log(
          JSON.stringify(response?.data, null, 2),
          "data fetch property"
        );
      }
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={props.onHide}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>
        </div>

        <h4
          style={{
            marginTop: "20px",
            color: "#000000",

            fontSize: 28,
          }}
        >
          Manage your place
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
          {[
            { key: "home_setup", label: "Home Setup" },
            { key: "gallery_location", label: "Gallery & Location" },
            { key: "price_availability", label: "Price and Availability" },
          ].map(({ key, label }) => (
            <button
              key={key}
              disabled={true}
              onClick={() => handleTabChange(key)}
              style={{
                padding: "10px 20px",
                fontSize: "14px",
                backgroundColor: activeTab === key ? "#FFFFFF" : "transparent",
                color: activeTab === key ? "#000000" : "#000",
                border:
                  activeTab === key
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
              {label}
            </button>
          ))}
        </div>

        {/* code for add modal */}
        {activeTab === "home_setup" && (
          <AddProperty
            onCallBack={(val) => setActiveTab(val)}
            propertyData={propertyData}
          />
        )}

        {activeTab === "gallery_location" && (
          <GalleryLocation
            switchToAddProperty={(val) => setActiveTab(val)}
            propertyData={propertyData}
            isEdited={props?.property_id}
          />
        )}

        {activeTab === "price_availability" && (
          <PriceAvailblity
            switchToGallery={(val) => setActiveTab(val)}
            hideModal={props.onHide}
            propertyData={propertyData}
            propertyID={propertyID}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default AddPropertyModal;
