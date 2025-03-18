import Cookies from "js-cookie";
import React from "react";

import { useState } from "react";
import { loginFormFields } from "../utils/FormData";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL =
  "https://g1oiifn719.execute-api.us-west-2.amazonaws.com/prod/login";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateField = (name, value) => {
    let errorMsg = "";
    if (!value.trim()) {
      errorMsg = `${name} is required`;
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key] || "");
    });

    if (Object.values(errors).some((err) => err !== "")) {
      return;
    }

    try {
      const response = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log("API Response:", response.data);
      const data = response.data;

      if (response.status === 200 && data.roles) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);

        Cookies.set("roles", data.roles, {
          secure: true,
          sameSite: "Strict",
          expires: 0.5,
        });
        Cookies.set("username", data.username, {
          secure: true,
          sameSite: "Strict",
          expires: 0.5,
        });

        console.log("Roles:", Cookies.get("roles"));
        console.log("Username:", Cookies.get("username"));

        navigate("/home");
      } else {
        setErrorMessage(data.error || "Login failed.");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error || "An error occurred.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen px-4 lg:px-16 xl:px-24 overflow-auto">
      <div
        className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center p-6 lg:p-12 relative rounded-4xl bg-[url('/construct-background.png')] bg-cover bg-center before:absolute before:bottom-0 before:left-0 before:bg-gradient-to-r before:from-white/30 before:to-transparent before:backdrop-blur-lg"
        style={{ backgroundImage: "url('/bg-blurred.png')" }}
      >
        <h1 className="text-black text-4xl md:text-7xlxl font-bold font-[Poppins]">
          Get Started Now
        </h1>
        <p className="text-black mt-2 text-md md:text-lg mb-4 font-[Poppins]">
          Enter your details to create a new account and get started.
        </p>
        <img
          src="/company-logo.png"
          alt="Company Logo"
          className="w-48 h-44 md:w-64 md:h-52 mb-4 sm:h-48"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="bg-white px-6 py-8 rounded-xl w-full max-w-md">
          <h2 className="text-4xl md:text-3xl font-bold text-center font-[Poppins]">
            Sign in to your account
          </h2>
          <p className="text-gray-500 text-center text-sm md:text-md mt-2 font-[Poppins]">
            Hey, Enter your details to sign in to your account
          </p>

          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}
            {loginFormFields.map((field) => (
              <div key={field.name}>
                <label className="block text-md font-medium mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">{errors[field.name]}</p>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-[#0000FE] text-white py-3 rounded-lg hover:bg-blue-700 transition font-[Poppins] font-semibold"
            >
              Login
            </button>
          </form>

          <div className="mt-4 lg:mt-6 text-center">
            <div className="flex items-center justify-center my-4">
              <hr className="w-1/3 border-gray-300" />
              <span className="mx-2 text-gray-500">or</span>
              <hr className="w-1/3 border-gray-300" />
            </div>
            <button className="flex items-center justify-center w-full mt-2 bg-white text-md lg:text-md text-gray-700 border border-gray-300 py-3 lg:py-3 cursor-pointer rounded-md hover:bg-gray-100">
              <img
                src="/google-icon.svg"
                alt="Google"
                className="h-5 w-5 lg:h-5 lg:w-5 mr-2"
              />
              Log in with Google
            </button>
          </div>
        </div>
      </div>

      {showSuccess && (
        <div className="fixed flex bottom-4 right-4 bg-green-500 text-white py-4 px-12 rounded-lg shadow-lg md:text-sm lg:text-sm font-semibold">
          <CheckCircleIcon className="w-7 h-7 text-white mr-4" />
          Login Successful!
        </div>
      )}
    </div>
  );
}
