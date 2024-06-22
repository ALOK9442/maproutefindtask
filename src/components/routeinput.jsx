import {
  faBicycle,
  faCab,
  faCircle,
  faCross,
  faDeleteLeft,
  faLocation,
  faLocationDot,
  faMap,
  faPlus,
  faTrash,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import InputBox from "./common/inputbox";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DistanceDisplay from "./common/distanceDisplay";

export default function RouteInput({
  setOrigin,
  setDestination,
  setTravelMode,
  stopPoints,
  setStopPoints,
  handleSearch,
  originDisplay,
  destinationDisplay,
  distanceDisplay,
  routeNameDisplay,
}) {
  const [stopPointInput, setStopPointInput] = useState("");
  const [selectedMode, setSelectedMode] = useState("DRIVING");
  const originRef = useRef(null);
  const destinationRef = useRef(null);
  const stopPointRefs = useRef(null);
  const stopPointRef = useRef(null);

  const handleOriginSelect = (place) => {
    if (place) {
      const values = Object.values(place.gm_accessors_.place);
      setOrigin(values[0].formattedPrediction);
    }
  };

  const handleDestinationSelect = (place) => {
    if (place) {
      const values = Object.values(place.gm_accessors_.place);
      setDestination(values[0].formattedPrediction);
    }
  };

  const handleWaypointSelect = (place) => {
    const values = Object.values(place.gm_accessors_.place);
    if (values !== null) {
      setStopPointInput(values[0].formattedPrediction);
    }
  };

  const handleAddWaypoint = () => {
    if (stopPointInput && stopPointInput.trim() !== "") {
      setStopPoints([...stopPoints, stopPointInput]);
      setStopPointInput("");
      stopPointRef.current.value = "";
    } else {
      window.alert("Please enter a valid stop point");
    }
  };

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
    setTravelMode(mode);
  };

  return (
    <div className="w-full flex flex-col p-4">
      <div className="w-full flex sm:flex-row flex-col p-4">
        <div className="flex flex-col space-y-6 w-full sm:w-1/2">
          <div className="w-full">
            <InputBox
              label="Origin"
              name="origin"
              placeholder="Enter origin"
              originRef={originRef}
              onPlaceChanged={() => handleOriginSelect(originRef.current)}
              onLoad={(autocomplete) => (originRef.current = autocomplete)}
              font={faCircle}
              fontColor="blue"
              onChange={() => {}}
            />
          </div>
          <div className="w-full">
            <InputBox
              label="Add stop"
              name="waypoints"
              placeholder="Enter stop"
              onPlaceChanged={() => handleWaypointSelect(stopPointRefs.current)}
              onLoad={(autocomplete) => (stopPointRefs.current = autocomplete)}
              font={faCircle}
              fontColor="gray"
              onChange={() => {}}
            />
            <div
              onClick={handleAddWaypoint}
              className="flex text-sm justify-end cursor-pointer mt-2 text-right items-center"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2 text-blue-500" />{" "}
              Add another stops
            </div>
          </div>
          <ul className="overflow-y-auto mb-1 md:h-12 h-10">
            {stopPoints.map((stop, index) => (
              <li key={index} className="flex items-center">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="text-blue-500 mr-2"
                />
                <p>{stop}</p>
                <button
                  onClick={() => {
                    setStopPoints(stopPoints.filter((_, i) => i !== index));
                  }}
                  className="text-red-500 ml-2"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
          <div className="w-full">
            <InputBox
              label="Destination"
              name="destination"
              placeholder="Enter destination"
              onLoad={(autocomplete) => (destinationRef.current = autocomplete)}
              onPlaceChanged={() =>
                handleDestinationSelect(destinationRef.current)
              }
              font={faLocationDot}
              fontColor="red"
              onChange={() => {}}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-1 md:w-1/2">
          <div className="md:w-2/3 w-full border-2 space-x-1 bg-white p-2 shadow-xl rounded-xl h-fit flex justify-around mb-4">
            <button
              onClick={() => handleModeChange("DRIVING")}
              className={`flex h-fit items-center md:px-3 p-2 md:py-3 rounded-full ${
                selectedMode === "DRIVING"
                  ? "bg-blue-600 text-white ring-2 duration-500 ring-blue-200"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <FontAwesomeIcon
                icon={faCab}
                className=" xl:text-2xl lg:text-lg text-sm"
              />
            </button>
            <button
              onClick={() => handleModeChange("TWO_WHEELER")}
              className={`flex h-fit items-center md:px-3 p-2 md:py-3 rounded-full ${
                selectedMode === "TWO_WHEELER"
                  ? "bg-blue-600 text-white ring-2 duration-500 ring-blue-200"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <FontAwesomeIcon
                icon={faBicycle}
                className=" xl:text-2xl lg:text-lg text-sm"
              />
            </button>
            <button
              onClick={() => handleModeChange("WALKING")}
              className={`flex h-fit items-center md:px-3 p-2 md:py-3 rounded-full ${
                selectedMode === "WALKING"
                  ? "bg-blue-600 text-white ring-2 duration-500 ring-blue-200"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              <FontAwesomeIcon
                icon={faWalking}
                className="xl:text-2xl lg:text-lg text-sm"
              />
            </button>
          </div>
          <button
            onClick={handleSearch}
            className="md:mt-4 bg-[#1B31A8] sm:w-1/2 w-full text-white h-fit rounded-full p-4 m-auto"
          >
            Calculate
          </button>
        </div>
      </div>
      <DistanceDisplay
        originDisplay={originDisplay}
        destinationDisplay={destinationDisplay}
        distanceDisplay={distanceDisplay}
        routeNameDisplay={routeNameDisplay}
      />
    </div>
  );
}
