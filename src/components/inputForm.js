import React from "react";

export default function inputForm({ props, onChange, value }) {
  return (
    <div>
      <label
        for="form"
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {props.title}
      </label>
      <input
        type="number"
        onChange={onChange}
        // eslint-disable-next-line use-isnan
        value={value}
        id="form"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        required
      />
    </div>
  );
}
