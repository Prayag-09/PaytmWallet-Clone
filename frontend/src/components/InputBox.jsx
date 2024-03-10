/* eslint-disable react/prop-types */
function Inputbox({boxHead, placeHolder}) {
    return <div>
        <h2 className="font-bold">{boxHead}</h2>
        <input className="rounded" type='text' placeholder={placeHolder}/>
    </div>
}
export default Inputbox;