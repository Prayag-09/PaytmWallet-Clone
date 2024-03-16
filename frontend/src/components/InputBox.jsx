/* eslint-disable react/prop-types */
function Inputbox({label, placeHolder, onChange}) {
    return <div className="pt-2 text-sm font-medium text-left py-1">
        <h2>{label}</h2>
        <input onChange={onChange} className="w-full px-2 py-1 rounded border border-slate-400" type='text' placeholder={placeHolder}/>
    </div>
}
export default Inputbox;