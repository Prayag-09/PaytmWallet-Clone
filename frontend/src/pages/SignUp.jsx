import Heading from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import Inputbox from "../components/InputBox";
function Signup() {
    return (
    <div>
        <div>
            <Heading label="Signup"/>
            <SubHeading label="Enter your information to create an account" />
        </div>

        <div>
            <Inputbox boxHead="First" placeHolder="John"/>

            <h3>Last Name</h3>
            <input type="text" placeholder="Doe" />

            <h3>Email</h3>
            <input type="text" placeholder=" johndoe@gmail.com " />

            <h3>Password</h3>
            <input type="text"  />
        </div>

        <br />
        <button className="bg-black-500">Sign Up</button>
    </div>
    )
}
export default Signup;