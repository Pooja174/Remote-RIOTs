/* *******************************************************************************************
 * COPYRIGHT (C) 2025 Remote IOT Security Limited
 *   The reproduction, transmission, or use of this document/file or its
 *   contents is not permitted without written authorization.
 *   Offenders will be liable for damages. All rights reserved.
 *----------------------------------------------------------------------------
 *   Purpose: FormData.jsx
 *   Project: RIoTS
 *   IDE: Visual Studio Code
 *   Version: 1.97.2
 *   Build id: 10982180
 * ****************************************************************************************** */
export const loginFormFields = [
  {
    label: "Username",
    name: "username",
    type: "text",
    placeholder: "Enter your username",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
  },
];

export const signUpFormFields = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    placeholder: "Jane",
    max: 45,
  },
  {
    label: "Middle Name",
    name: "middleName",
    type: "text",
    placeholder: "",
    max: 2,
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    placeholder: "Doe",
    required: true,
    max: 45,
  },
  {
    label: "Preferred First Name",
    name: "preferredFirstName",
    type: "text",
    placeholder: "Smith",
    max: 45,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "example@gmail.com",
    max: 45,
  },
  {
    label: "Phone 1",
    name: "phone1",
    type: "text",
    placeholder: "+1 1234567890",
    max: 15,
  },
  { label: "Phone 2", name: "phone2", type: "text", placeholder: "", max: 15 },
  { label: "Phone 3", name: "phone3", type: "text", placeholder: "", max: 15 },
  {
    label: "Address 1",
    name: "address1",
    type: "text",
    placeholder: "15205 North Kierland",
    required: true,
    fullWidth: true,
    max:50
  },
  {
    label: "Address 2",
    name: "address2",
    type: "text",
    placeholder: "",
    fullWidth: true,
    max:50
  },
  { label: "City", name: "city", type: "text", placeholder: "Kingston", max:50 },
  { label: "State", name: "state", type: "text", placeholder: "" },
  { label: "Country", name: "country", type: "text", placeholder: "" , max:50},
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "********",
    required: true,
    fullWidth: true,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "********",
    required: true,
    fullWidth: true,
  },
];
