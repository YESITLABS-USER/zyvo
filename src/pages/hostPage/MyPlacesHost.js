import React, { useEffect, useState } from "react";
import CustomCarousel from "../../components/host/CustomCarousel";
import useHome from "../../hooks/host/useHome";
import { FaInfo } from "react-icons/fa"; // Added FaPlus for the new place icon
import { Dropdown, Tooltip, OverlayTrigger, Card } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import { HiMiniInformationCircle } from "react-icons/hi2";

import AddPropertyModal from "../../components/host/addBusiness/AddPropertyModal";
import { KEYS } from "../../config/Constant";

import { BsFilterLeft } from "react-icons/bs";

function MyPlacesHost() {
  const [getList, setGetList] = useState([]);
  const [addProperyShow, setAddPropertyShow] = useState(false);
  const [property_id, setPropertyId] = useState(null);
  // console.log(getList, "host list get from this");
  const localSaved = JSON.parse(localStorage.getItem(KEYS.USER_INFO));
  const userId = localSaved?.user_id;

  const [location, setLocation] = useState({ lat: null, long: null });

  const [error, setError] = useState(null);
  //
  const { getHomeList, isLoading } = useHome();
  useEffect(() => {
    getDataList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //
  useEffect(() => {
    getLocation();
  }, []);

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
  const getDataList = async () => {
    try {
      const response = await getHomeList({
        user_id: userId,
        latitude: 22.572645,
        longitude: 88.363892,
      });
      if (response) {
        setGetList(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const tooltip = (
    <Tooltip
      id="info-tooltip"
      style={{
        backgroundColor: "white", // Light background color
        color: "black", // Black text color
        border: "1px solid gray", // Optional gray border for better visibility
        padding: "8px",
        borderRadius: "6px",
      }}
    >
      Future Earnings - This filter dynamically calculates and updates the
      amount shown to reflect the total revenue that hosts are expected to earn
      from existing future bookings over the next 90 days. It provides hosts
      with a real-time snapshot of their anticipated earnings from confirmed
      bookings during the specified timeframe.
    </Tooltip>
  );

  return (
    <>
      <div style={{ height: "150px" }}>
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            {/* Left Section - My Places text with margin */}
            <div className="col-auto">
              <h1>My Places</h1>
            </div>

            {/* Right Section - Grouped Dropdown and Info Icon */}
            <div className="col-auto d-flex align-items-center">
              {/* Info Icon with Tooltip */}
              <OverlayTrigger placement="bottom" overlay={tooltip}>
                <span
                  style={{
                    cursor: "pointer",
                    backgroundColor: "#f8f9fa", // Light background color
                    color: "black",
                    padding: "8px 12px",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: "bold",
                    border: "1px solid gray", // Gray border
                    marginRight: "10px", // Added margin-right
                  }}
                >
                  $12000{" "}
                  <HiMiniInformationCircle
                    style={{ color: "#4AEAB1" }}
                    size={30}
                  />
                </span>
              </OverlayTrigger>

              {/* Dropdown */}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <BsFilterLeft />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Total Earnings
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Future Earnings
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      {/*  for list with "Add New Place" Card */}
      <div
        style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}
        className="container"
      >
        {getList?.map((item, index) => {
          // console.log(item?.property_id, "hello item user");
          return (
            <div
              key={index}
              style={{ flex: "1 1 calc(25% - 20px)", marginBottom: "20px" }}
            >
              <CustomCarousel
                images={item?.property_images}
                onEdit={(bool) => {
                  setAddPropertyShow(bool);
                  setPropertyId(item?.property_id);
                }}
              />
            </div>
          );
        })}

        {/* Add New Place Card */}
        <div
          style={{
            flex: "1 1 calc(25% - 20px)",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Card
            style={{
              width: "100%",
              cursor: "pointer",
              border: "2px dashed #B1B1B1", // Dashed border for the add card
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <FaCirclePlus
              style={{ fontSize: "50px", color: "#3A4B4C" }}
              onClick={() => {
                setAddPropertyShow(true);
                setPropertyId(null);
              }}
            />
            <div
              onClick={() => {
                setAddPropertyShow(true);
                setPropertyId(null);
              }}
            >
              Add New Place
            </div>
          </Card>
        </div>
      </div>

      <div style={{ height: "300px" }}></div>
      <AddPropertyModal
        show={addProperyShow}
        onHide={() => setAddPropertyShow(false)}
        property_id={property_id}
      />
    </>
  );
}

export default MyPlacesHost;
