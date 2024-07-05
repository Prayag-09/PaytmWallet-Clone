/* eslint-disable react/prop-types */
export const Balance = ({ value }) => {
    return (
        <div className="flex items-center">
            <div className="font-bold text-lg">
                Your balance:
            </div>
            <div className="ml-2 text-lg">
                Rs {value}
            </div>
        </div>
    );
};
