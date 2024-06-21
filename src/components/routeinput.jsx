export default function RouteInput() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <label className="block text-sm font-medium text-gray-700">
          Origin
        </label>
        <input
          type="text"
          name="origin"
          id="origin"
          placeholder="Enter origin"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
      <div className="w-1/2">
        <label className="block text-sm font-medium text-gray-700">
          Destination
        </label>
        <input
          type="text"
          name="destination"
          id="destination"
          placeholder="Enter destination"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>
    </div>
  );
}
