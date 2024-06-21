import { LoadScript } from "@react-google-maps/api";
import Map from "./components/map";
import Navbar from "./components/navbar";
import RouteInput from "./components/routeinput";
import { useState } from "react";

export default function App() {
  const libraries = ["places"];

  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [stopPoints, setStopPoints] = useState([]);
  const [fetchDirections, setFetchDirections] = useState(false);
  const [originDisplay, setOriginDisplay] = useState("origin");
  const [destinationDisplay, setDestinationDisplay] = useState("destination");
  const [distanceDisplay, setDistanceDisplay] = useState("NA");
  const [routeNameDisplay, setRouteNameDisplay] = useState("route");

  const handleSearch = () => {
    setFetchDirections(true);
  };

  const resetFetchDirections = () => {
    setFetchDirections(false);
  };

  console.log("App", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
  return (
    <LoadScript
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      libraries={libraries}
    >
      <div className="">
        <Navbar />
        <div className="flex sm:flex-row flex-col bg-blue-200">
          <RouteInput
            setOrigin={setOrigin}
            setDestination={setDestination}
            stopPoints={stopPoints}
            setStopPoints={setStopPoints}
            handleSearch={handleSearch}
            setFetchDirections={setFetchDirections}
            originDisplay={originDisplay}
            destinationDisplay={destinationDisplay}
            distanceDisplay={distanceDisplay}
            routeNameDisplay={routeNameDisplay}
          />
          <Map
            origin={origin}
            destination={destination}
            stopPoints={stopPoints}
            fetchDirections={fetchDirections}
            resetFetchDirections={resetFetchDirections}
            setDestinationDisplay={setDestinationDisplay}
            setOriginDisplay={setOriginDisplay}
            setDistanceDisplay={setDistanceDisplay}
            setRouteNameDisplay={setRouteNameDisplay}
          />
        </div>
      </div>
    </LoadScript>
  );
}
