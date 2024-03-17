import Appbar from "../components/AppBar"
import Balance from "../components/Balance"
import Users from "../components/Users"

const Dashboard = () => {
    return (
        <div>
            <Appbar label="PayTM" profile="Prayag" logo="You" />
            <Balance label="10000" />
            <Users  />
        </div>
    )
}
export default Dashboard;
