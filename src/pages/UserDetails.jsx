// User Table Component
import React from "react";
import TableComponent from "../components/TableComponent";

const UserTable = () => {
  const userColumns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "preferredName", header: "Preferred First Name" },
    { accessorKey: "mi", header: "MI" },
    { accessorKey: "phone", header: "Phone" },
    { accessorKey: "email", header: "Email Address" },
    { accessorKey: "businessId", header: "Business ID" },
    { accessorKey: "invitationTok", header: "Invitation Token" },
    { accessorKey: "lastLogin", header: "Last Login" },
    { accessorKey: "portalUserAcctId", header: "Portal User Account ID" },
    { accessorKey: "isVerified", header: "Is Verified" },
  ];

  const userData = [
    {
      name: "Paramveer Sahoo",
      preferredName: "Olivia",
      mi: "joo",
      phone: "+1 (865) 938-3515",
      email: "olivia@untitledui.com",
      businessId: "#2356",
      invitationTok: "#344",
      lastLogin: "19:05 PM 03/17/2025",
      portalUserAcctId: "#23435467",
      isVerified: "✔",
    },
    {
      name: "Phoenix Baker",
      preferredName: "Phoenix",
      mi: "JA",
      phone: "+1 (865) 938-3515",
      email: "phoenix@untitledui.com",
      businessId: "#2356",
      invitationTok: "#344",
      lastLogin: "Active",
      portalUserAcctId: "#23435467",
      isVerified: "✔",
    },
    {
      name: "Lana Steiner",
      preferredName: "Lana",
      mi: "MI",
      phone: "+1 (865) 938-3515",
      email: "lana@untitledui.com",
      businessId: "#2356",
      invitationTok: "#344",
      lastLogin: "19:05 PM 03/17/2025",
      portalUserAcctId: "#23435467",
      isVerified: "✔",
    },
    {
      name: "Demi Wilkinson",
      preferredName: "Demi",
      mi: "MI",
      phone: "+1 (865) 938-3515",
      email: "demi@untitledui.com",
      businessId: "#2356",
      invitationTok: "#344",
      lastLogin: "19:05 PM 03/17/2025",
      portalUserAcctId: "#23435467",
      isVerified: "✔",
    },
    {
      name: "Candice Wu",
      preferredName: "Candice",
      mi: "39849",
      phone: "+1 (865) 938-3515",
      email: "candice@untitledui.com",
      businessId: "#2356",
      invitationTok: "#344",
      lastLogin: "19:05 PM 03/17/2025",
      portalUserAcctId: "#23435467",
      isVerified: "✔",
    },
    {
      name: "Natalie Craig",
      preferredName: "Natalie",
      mi: "39849",
      phone: "+1 (865) 938-3515",
      email: "natalie@untitledui.com",
      businessId: "#2356",
      invitationTok: "#344",
      lastLogin: "Active",
      portalUserAcctId: "#23435467",
      isVerified: "✔",
    },
  ];

  return (
    <TableComponent
      columns={userColumns}
      data={userData}
      enablePagination={false}
      enableEditing={true}
    />
  );
};

export default UserTable;
