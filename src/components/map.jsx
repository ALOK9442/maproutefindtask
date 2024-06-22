import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  DirectionsService,
  DirectionsRenderer,
  Marker,
} from "@react-google-maps/api";

const Map = ({
  origin,
  destination,
  waypoints,
  fetchDirections,
  resetFetchDirections,
  setDestinationDisplay,
  setOriginDisplay,
  setDistanceDisplay,
  setRouteNameDisplay,
  travelMode,
}) => {
  const [directions, setDirections] = useState(null);
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    if (fetchDirections) {
      if (origin && destination) {
        // Reset directions
        setDirections(null);
        setMapKey((prevKey) => prevKey + 1);
        resetFetchDirections();
      }
    }
  }, [fetchDirections, origin, destination, waypoints, resetFetchDirections]);

  const directionsCallback = (response) => {
    if (response !== null && response.status === "OK") {
      setOriginDisplay(response.request.origin.query);
      setDestinationDisplay(response.request.destination.query);
      setDistanceDisplay(response.routes[0].legs[0].distance.text);
      setRouteNameDisplay(response.routes[0].summary);
      setDirections(response);
      resetFetchDirections();
    } else {
      console.error("Directions request failed:", response);
    }
  };

  return (
    <div
      style={{
        height: "100%",
        padding: "8px",
      }}
    >
      <GoogleMap
        mapContainerStyle={{ height: "100%", width: "100%" }}
        center={{ lat: 28.7041, lng: 77.5025 }}
        zoom={13}
      >
        {origin && destination && fetchDirections && (
          <DirectionsService
            options={{
              origin: origin,
              destination: destination,
              waypoints: waypoints.map((location) => ({
                location,
                stopover: true,
              })),
              travelMode: travelMode,
            }}
            callback={directionsCallback}
          />
        )}
        {directions && (
          <DirectionsRenderer
            options={{
              directions: directions,
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default Map;
