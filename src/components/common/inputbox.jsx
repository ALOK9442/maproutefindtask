import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";

export default function InputBox({
  label,
  name,
  placeholder,
  value,
  onChange,
  onLoad,
  onPlaceChanged,
  font,
  fontColor,
}) {
  return (
    <div className="relative">
      <label className="block font-mono text-sm ml-3 font-medium text-gray-700">{label}</label>
      <FontAwesomeIcon
        icon={font}
        className={`text-${fontColor}-500 absolute top-9 left-3`}
      />

      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="mt-1 p-2 pl-9 border rounded-md border-gray-300 w-full"
        />
      </Autocomplete>
    </div>
  );
}
