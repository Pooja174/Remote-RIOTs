import React, { useEffect, useState } from "react";
//import { ColumnDef } from "@tanstack/react-table";
import TableComponent from "../components/TableComponent";

const UserDetails = () => {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/users"); // Replace with your API
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Define Table Columns
  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Name" },
    { accessorKey: "preferredFirstname", header: "Preferred Firstname" },
    { accessorKey: "age", header: "Age" },
  ];

  if (loading) return <p>Loading data...</p>;

  return (
    <div className="p-6 space-y-6">
      <TableComponent columns={columns} data={usersData} title="Users Table" />
    </div>
  );
};

export default UserDetails;
