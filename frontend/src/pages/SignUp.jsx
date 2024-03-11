import Heading from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import Inputbox from "../components/InputBox";
import Button from "../components/Button";
import Warning from "../components/Warning";

function Signup() {
    return (
    <div className="grid justify-center w-100 h-screen  border border-black-500 rounded-lg bg-slate-300">
        <div className="flex justify-center text-center py-20 h-max">
            <div className="bg-white w-90 px-5 rounded-lg py-8 ">

            <Heading label="Signup"/>
            <SubHeading label="Enter your information to create an account" />
            <Inputbox label="First Name" placeHolder="John"/>
            <Inputbox label="Last Name" placeHolder="Doe"/>
            <Inputbox label="Email" placeHolder="johndoe@gmail.com "/>
            <Inputbox label="Password" placeHolder="123456"/>
            <div className="pt-4">
                <Button label="Sign Up"/>
            </div>
            <Warning label="Already have account ?" buttontext="Sign in" to={"/signin"} />

            </div>
        </div>
    </div>
    )
}
export default Signup;