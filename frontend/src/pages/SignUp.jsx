import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(`http://localhost:3000/api/v1/user/signup`, {
        firstName,
        lastName,
        username,
        password,
      });

      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <Heading label="Sign Up" className="text-2xl mb-4 text-center text-black" />
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-4">
            <InputBox
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              label="First Name"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
            />
            <InputBox
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              label="Last Name"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
            />
            <InputBox
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
              label="Email"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
            />
            <InputBox
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              label="Password"
              required
              className="border border-gray-300 rounded-md p-2 focus:outline-none"
            />
            {error && <p className="text-red-500">{error}</p>}
            <Button
              type="submit"
              label={loading ? "Signing Up..." : "Sign Up"}
              disabled={loading}
              className="bg-black text-white rounded-md py-2 px-4 transition duration-300 hover:bg-gray-800"
            />
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
