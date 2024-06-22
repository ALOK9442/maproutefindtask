export default function DistanceDisplay({
  originDisplay,
  destinationDisplay,
  distanceDisplay,
  routeName,
}) {
  console.log(routeName);
  return (
    <div className="w-full border border-gray-500">
      <div className=" flex justify-between w-full md:text-2xl items-center font-extrabold px-3 py-2  bg-white h-1/2">
        <span>Distance: {routeName}</span>
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
