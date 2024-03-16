import Appbar from "../components/AppBar"
import Balance from "../components/Balance"
import UsersList from "../components/ExistingUsers"
const Dashboard = () => {
    return (
        <div>
            <Appbar label="PayTM" profile="Prayag" logo="You" />
            <Balance label="10000" />
            <UsersList  />
        </div>
    )
}

export default Dashboard;
