/* eslint-disable react/prop-types */
export function Button({ label, onClick }) {
    return (
        <button
            onClick={onClick}
            type="button"
            className="w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 mt-2"
        >
            {label}
        </button>
    );
}
