import { useState } from "react";
import Heading from "../components/Heading";
import Inputbox from "../components/InputBox";
import Button from "../components/Button";
import Warning from "../components/Warning";
import SubHeading from "../components/SubHeading";
import axios from 'axios';
// import { useNavigate } from "react-router-dom"

function Signup() {

    const [firstName , setFirstName] = useState("");
    const [lastName , setLastname] = useState("");
    const [username , setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    return (
    <div className="grid justify-center w-100 h-screen  border border-black-500 rounded-lg bg-slate-300">
        <div className="flex justify-center text-center py-20 h-max">
            <div className="bg-white w-90 px-5 rounded-lg py-8 ">

            <Heading label="Signup"/>
            <SubHeading label="Enter your information to create an account" />

            <Inputbox onChange={e =>(
                setFirstName(e.target.value)
                )} label="First Name" placeHolder="John"/>
            <Inputbox onChange={e =>(
                setLastname(e.target.value)
                )} label="Last Name" placeHolder="Doe"/>
            <Inputbox onChange={e =>(
                setUsername(e.target.value)
                )} label="Email" placeHolder="johndoe@gmail.com "/>
            <Inputbox onChange={e =>(
                setPassword(e.target.value)
                )} label="Password" placeHolder="******"/>

            <div className="pt-4">
                <Button onClick={async () =>{
                    await axios.post("http://localhost:3000/api/v1/user/signup" , {firstName,lastName,username,password})
                }} label="Sign Up"/>
            </div>
            <Warning label="Already have account ?" buttontext="Sign in" to={"/signin"} />
            </div>
        </div>
    </div>
    )
}
export default Signup;