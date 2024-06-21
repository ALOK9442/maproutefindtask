import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ origin, destination, waypoints }) => {
  const defaultCenter = {
    lat: 28.6139,
    lng: 77.209,
  };
  const defaultZoom = 8;

  const renderMarkers = () => {
    const markers = [];

    if (origin) {
      markers.push(
        <Marker
          key="origin"
          lat={origin.latLng.lat}
          lng={origin.latLng.lng}
          text="Origin"
        />
      );
    }

    if (destination) {
      markers.push(
        <Marker
          key="destination"
          lat={destination.latLng.lat}
          lng={destination.latLng.lng}
          text="Destination"
        />
      );
    }

    if (Array.isArray(waypoints)) {
      waypoints.forEach((waypoint, index) => {
        markers.push(
          <Marker
            key={`waypoint-${index}`}
            lat={waypoint.latLng.lat}
            lng={waypoint.latLng.lng}
            text={`Waypoint ${index + 1}`}
          />
        );
      });
    }

    return markers;
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyA1Rz_xGPNYMO7WyP1wYdVzVoMOCO_UUtQ",
          libraries: ["places"],
          language: "en",
        }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
        options={(maps) => ({
          mapTypeControlOptions: {
            mapTypeIds: ["roadmap", "satellite", "terrain"],
          },
          zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_BOTTOM,
          },
          streetViewControl: true,
        })}
      >
        {renderMarkers()}
      </GoogleMapReact>
    </div>
  );
};

const Marker = ({ text }) => <div style={{ color: "red" }}>{text}</div>;

export default Map;
