import {Heading , SubHeading} from '../components'
import Inputbox from '../components/InputBox';
import Warning from '../components/Warning';
function Signin() {
    return (
    <div>
        <Heading label="Sign IN" />
        <SubHeading label="Enter your credentials to access your account"/>

        <Inputbox label="Email" placeHolder="johndoe@gmail.com" />
        <Inputbox label="Password" placeHolder="" />
        <Warning  label="Dont have an account?"  buttontext="Sign Up" to="/signup"/>
    </div>
    )
}
export default Signin;