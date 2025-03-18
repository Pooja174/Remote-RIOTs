import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Cookies from "js-cookie";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import Sidebar from "./components/Sidebar";
import Signup from "./pages/SignUp";
import UserDetails from "./pages/UserDetails";

function PrivateRoute({ children }) {
  const roles = Cookies.get("roles"); // Check if roles exist in cookies
  return roles ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <AppLayout>
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <Home />
                </div>
              </div>
            </AppLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <AppLayout>
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Signup />
              </div>
            </div>
          </AppLayout>
        }
      />
      <Route
        path="/modify-user"
        element={
          <PrivateRoute>
            <AppLayout>
              <div className="flex">
                <Sidebar />
                <div className="flex-1">
                  <UserDetails />
                </div>
              </div>
            </AppLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
