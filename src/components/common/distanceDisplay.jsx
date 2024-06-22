export default function DistanceDisplay({
  originDisplay,
  destinationDisplay,
  distanceDisplay,
  routeNameDisplay,
}) {
  console.log(routeNameDisplay);
  return (
    <div className="w-full border border-gray-500">
      <div className=" flex justify-between w-full md:text-2xl text-base items-center font-extrabold px-2 py-3 md:px-3 md:py-6 bg-white h-1/2">
        <span>Distance: {routeNameDisplay}</span>
        <span className=" text-[#0079FF] text-base md:text-2xl">
          {distanceDisplay}
        </span>
      </div>
      <div className="md:text-sm text-xs h-1/2 flex justify-center items-center px-4 py-2 overflow-auto">
        <div>
          The distance between{" "}
          <span className=" font-bold">{originDisplay}</span> and{" "}
          <span className=" font-bold">{destinationDisplay}</span> via the
          seleted route is <span className=" font-bold">{distanceDisplay}</span>
        </div>
      </div>
    </div>
  );
}
