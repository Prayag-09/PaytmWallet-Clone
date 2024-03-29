/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
function Warning({label,buttontext,to}) {
    return (
    <div className=" py-2 font-normal text-sm flex justify-center">
        <div>
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer" to={to}>{buttontext}</Link>
    </div>
    )
}
export default Warning;