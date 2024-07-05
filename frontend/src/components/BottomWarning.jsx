/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export function BottomWarning({ label, buttonText, to }) {
    return (
        <div className="py-2 text-sm flex justify-center text-gray-600">
            <div>{label}</div>
            <Link className="ml-1 underline cursor-pointer" to={to}>
                {buttonText}
            </Link>
        </div>
    );
}
