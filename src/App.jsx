import Map from "./components/map";
import Navbar from "./components/navbar";
import RouteInput from "./components/routeinput";

export default function App() {
  console.log("App", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
  return (
    <div>
      <Navbar />
      <div className="flex sm:flex-row flex-col">
        <RouteInput />
        <Map />
      </div>
    </div>
  );
}
