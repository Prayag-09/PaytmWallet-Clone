function Appbar({label,profile,logo}) {
    return (
    <div>
        <div>
            {label}
        </div>
        <div>
            {profile}{logo}
        </div>
    </div>
    )
}
export default Appbar;