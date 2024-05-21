import { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Inputbox from "../components/InputBOX";
import Button from "../components/Button";
import Warning from "../components/Warning";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignin = async () => {
    if (!email || !password) {
      setError("Both email and password are required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signin",
        {
          email,
          password,
        }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid justify-center h-screen text-center bg-slate-300">
      <div className="bg-white rounded-lg w-80 p-2 h-max px-4">
        <Heading label="Sign in" />
        <SubHeading label="Enter your credentials to access your account" />
        <Inputbox
          label="Email"
          placeHolder="johndoe@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Inputbox
          label="Password"
          type="password"
          placeHolder="********"
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500 mt-2">{error}</div>}
        <div className="pt-4">
          <Button
            onClick={handleSignin}
            label={loading ? "Signing in..." : "Sign in"}
            disabled={loading}
          />
        </div>
        <Warning
          label="Don't have an account?"
          buttonText="Sign Up"
          to="/signup"
        />
      </div>
    </div>
  );
}

export default Signin;
