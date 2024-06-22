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
  const [travelMode, setTravelMode] = useState("DRIVING");

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
      loadingElement={<div>Loading...</div>}
    >
      <div className="">
        <Navbar />
        <div className="flex font-worksans justify-center h-full items-center bg-blue-100">
          <div className="container w-full md:p-4">
            <h3 className="text-center text-[#1B31A8] md:text-xl text-base my-4">
              Let's calculate <strong>distance</strong> from Google maps
            </h3>
            <div className="flex md:flex-row h-full w-full flex-col-reverse md:h-[70vh] md:space-x-12">
              <div className="md:w-1/2 md:mt-0 mt-1 w-full md:space-x-1">
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
                  setTravelMode={setTravelMode}
                />
              </div>
              <div className="md:w-1/2 w-full h-[400px] md:h-full">
                <Map
                  origin={origin}
                  destination={destination}
                  waypoints={stopPoints}
                  fetchDirections={fetchDirections}
                  resetFetchDirections={resetFetchDirections}
                  setDestinationDisplay={setDestinationDisplay}
                  setOriginDisplay={setOriginDisplay}
                  setDistanceDisplay={setDistanceDisplay}
                  setRouteNameDisplay={setRouteNameDisplay}
                  travelMode={travelMode}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadScript>
  );
}
