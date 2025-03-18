import { useNavigate } from "react-router-dom";
import React from "react";

import axios from "axios";
import { LogOutIcon } from "lucide-react";
import Cookies from "js-cookie";
import { useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("roles");
    navigate("/login");
  };

  const REGISTER_API =
    "https://g1oiifn719.execute-api.us-west-2.amazonaws.com/prod/user/registration";

  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        REGISTER_API,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // ✅ Ensures cookies are sent with the request
        }
      );

      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-4xl font-bold text-black mb-4">Welcome To RIoT</h1>
      <p className="text-gray-600 max-w-lg">
        Revolutionize the way you monitor and manage your resources with
        real-time insights and data-driven decisions. Enhance efficiency, reduce
        waste, and ensure optimal allocation at all times.
      </p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 mt-4 flex bg-blue-500 text-white rounded-md"
      >
        Logout <LogOutIcon className="w-4 h-6 ml-2" />
      </button>

      <form className="mt-6 space-y-6" onSubmit={handleSubmitRegister}>
        {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md">
          Register
        </button>
      </form>
    </div>
  );
}
