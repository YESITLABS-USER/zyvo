import React, { useEffect, useRef, useState } from "react";
import GoogleMapReact from "google-map-react";

export default function Map({ lat, lng }) {
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const [address, setAddress] = useState("Fetching address...");
    const [markerPosition, setMarkerPosition] = useState({
        lat: lat ? parseFloat(lat) : 22.572645, 
        lng: lng ? parseFloat(lng) : 88.363892 
    });

    const defaultProps = {
        center: markerPosition,
        zoom: 13,
    };

    // Function to fetch address from lat/lng
    const fetchAddress = (latitude, longitude) => {
        if (!window.google || !window.google.maps) return;
        const geocoder = new window.google.maps.Geocoder();
        console.log(geocoder);
        const latlng = { lat: latitude, lng: longitude };

        geocoder.geocode({ location: latlng }, (results, status) => {
            console.log("Status",status);
            if (status === "OK" && results[0]) {
                setAddress(results[0].formatted_address);
            } else {
                setAddress("Address not found");
            }
        });
    };

    useEffect(() => {
        if (mapRef.current && window.google) {
            if (!markerRef.current) {
                markerRef.current = new window.google.maps.Marker({
                    position: markerPosition,
                    map: mapRef.current,
                    title: "Selected Location",
                    draggable: true, // Allow dragging
                });

                markerRef.current.addListener("dragend", (event) => {
                    const newLat = event.latLng.lat();
                    const newLng = event.latLng.lng();
                    setMarkerPosition({ lat: newLat, lng: newLng });
                    fetchAddress(newLat, newLng);
                });

            } else {
                markerRef.current.setPosition(markerPosition);
            }
            fetchAddress(markerPosition.lat, markerPosition.lng);
        }
    }, [markerPosition]);

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC9NuN_f-wESHh3kihTvpbvdrmKlTQurxw" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onGoogleApiLoaded={({ map, maps }) => {
                    mapRef.current = map;
                    markerRef.current = new maps.Marker({
                        position: markerPosition,
                        map,
                        title: "Selected Location",
                        draggable: true, // Allow dragging
                    });

                    // Drag to update marker position
                    markerRef.current.addListener("dragend", (event) => {
                        const newLat = event.latLng.lat();
                        const newLng = event.latLng.lng();
                        setMarkerPosition({ lat: newLat, lng: newLng });
                        fetchAddress(newLat, newLng);
                    });

                    fetchAddress(markerPosition.lat, markerPosition.lng);
                }}
                yesIWantToUseGoogleMapApiInternals
                onClick={({ lat, lng }) => {
                    setMarkerPosition({ lat, lng });
                }}
            />

            {/* Address Box */}
            <div style={{ 
                position: "absolute", 
                top: 20, 
                left: 20, 
                backgroundColor: "#fff", 
                padding: "10px", 
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)", 
                borderRadius: "5px" 
            }}>
                <strong>Selected Location</strong> <br />
                {address} <br />
            </div>
        </div>
    );
}
