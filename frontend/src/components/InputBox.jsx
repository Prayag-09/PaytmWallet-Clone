/* eslint-disable react/prop-types */
export function InputBox({ label, placeholder, onChange }) {
  return (
      <div className="mb-4">
          <label className="block text-sm font-medium text-black">
              {label}
          </label>
          <input
              onChange={onChange}
              placeholder={placeholder}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
          />
      </div>
  );
}
