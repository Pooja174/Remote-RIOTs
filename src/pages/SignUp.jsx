import { useState } from "react";
import { signUpFormFields } from "../utils/FormData";
import React from "react";

export default function Signup() {
  const [formData, setFormData] = useState(
    (signUpFormFields || []).reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {})
  );

  const [errors, setErrors] = useState({});

  const validateField = (name, value, tempErrors = null) => {
    let errorMsg = "";

    if (!value.trim() && signUpFormFields.find((f) => f.name === name)?.required) {
      errorMsg = `${name} is required`;
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      errorMsg = "Invalid email format";
    } else if (name.startsWith("phone") && value && !/^\+?\d{10,15}$/.test(value)) {
      errorMsg = "Invalid phone number";
    } else if (
      name === "password" &&
      !/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(value)
    ) {
      errorMsg =
        "Password must be at least 8 characters, include one uppercase letter, one number, and one special character";
    } else if (name === "confirmPassword" && value !== formData.password) {
      errorMsg = "Passwords do not match";
    }

    if (tempErrors) {
      tempErrors[name] = errorMsg;
    } else {
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    Object.keys(formData).forEach((key) => validateField(key, formData[key] || "", newErrors));

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== "")) return;

    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex h-screen w-full">
      {/* Form Section */}
      <main className="flex-1 p-10">
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          {signUpFormFields.map((field) => (
            <div key={field.name} className="col-span-1 flex flex-col">
              <label className="font-medium text-gray-700">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                required={field.required}
              />
              {errors[field.name] && <p className="text-red-500 text-sm">{errors[field.name]}</p>}
            </div>
          ))}
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="w-1/3 bg-blue-600 text-white py-2 rounded-md text-lg font-bold hover:bg-blue-700"
            >
              Sign-Up
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
