/* eslint-disable react/prop-types */
export default function Balance({label}) {
    return (
    <div className="flex flex-row">
        <div className=" font-bold text-lg">
            Your balance :
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs{label}
        </div>
    </div>    
    )
}