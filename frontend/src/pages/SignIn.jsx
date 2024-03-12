import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Inputbox from "../components/InputBox";
import Button from "../components/Button";
import Warning from "../components/Warning";

function Signin() {
    return (
    <div className="grid justify-center h-screen text-center bg-slate-300">
        <div className="bg-white rounded-lg w-80 p-2 h-max px-4">

        <Heading label="Sign in" />
        <SubHeading label="Enter your credentials to access your account"/>
        <Inputbox label="Email" placeHolder="johndoe@gmail.com" />
        <Inputbox label="Password" placeHolder="" />
        <Button  label="Sign in"/>
        <Warning  label="Dont have an account?"  buttontext="Sign Up" to="/signup"/>
        
        </div>
    </div>
    )
}
export default Signin;