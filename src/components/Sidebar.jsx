import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHome,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import Cookies from "js-cookie";

const menuItems = [
  { name: "Home", path: "/home", icon: faHome },
  { name: "Account Summary", path: "/account-summary", icon: faList },
  {
    name: "User Accounts",
    icon: faUsers,
    submenu: [
      { name: "Create User", path: "/create-user" },
      { name: "Modify User Details", path: "/modify-user" },
    ],
  },
  {
    name: "eDude Inventory",
    path: "/edude-inventory",
    icon: "/edude-inventory.svg",
  },
  { name: "SIM Inventory", path: "/sim-inventory", icon: "/sim-inventory.svg" },
  { name: "Network Info", path: "/network-info", icon: "/network-info.svg" },
  { name: "Contacts", path: "/contacts", icon: "/contact.svg" },
  { name: "Businesses", path: "/businesses", icon: "/business.svg" },
  {
    name: "Account Details",
    path: "/account-details",
    icon: "/account-details.svg",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState(true);
  const location = useLocation();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = Cookies.get("username");
    if (storedName) {
      setUserName(storedName);
    }
  });
  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSubmenu = (menu) =>
    setOpenSubmenu(openSubmenu === menu ? null : menu);

  return (
    <div
      className={`h-screen flex flex-col bg-white shadow-4xxl shadow-amber-500 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-around py-4 px-2 border-b border-b-blue-200">
        <div className="flex items-center">
          <img
            src="/company-logo.png"
            alt="Logo"
            className={`h-14 transition-all duration-300  ${
              isOpen ? "w-16" : "w-24"
            }`}
          />
          {isOpen && (
            <h1 className="text-sm font-semibold ml-1">Remote IoT Security</h1>
          )}
        </div>
        <button onClick={toggleSidebar} className="relative -right-7 transform">
          <img
            src="/expand-icon.svg"
            alt="expand"
            className={` cursor-pointer  ${isOpen ? "w-8" : "w-20"}`}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col p-4 flex-grow">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`w-full flex items-center gap-3 p-2 rounded-4xl transition-all ${
                      openSubmenu === item.name
                        ? "bg-[#EEF2FF] text-[#4F46E5] font-bold"
                        : "hover:bg-[#EEF2FF] hover:font-semibold hover:text-[#4F46E5]"
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    {isOpen && <span>{item.name}</span>}
                  </button>
                  {openSubmenu === item.name && isOpen && (
                    <ul className="ml-6">
                      {item.submenu.map((sub) => (
                        <li key={sub.name}>
                          <Link
                            to={sub.path}
                            className={`block p-2 text-sm rounded-4xl transition-all ${
                              location.pathname === sub.path
                                ? "bg-[#EEF2FF] text-[#4F46E5] font-bold"
                                : "hover:bg-[#EEF2FF] hover:font-semibold hover:text-[#4F46E5]"
                            }`}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 p-2 rounded-4xl transition-all ${
                    location.pathname === item.path
                      ? "bg-[#EEF2FF] text-[#4F46E5] font-bold"
                      : "hover:bg-[#EEF2FF] hover:font-semibold hover:text-[#4F46E5]"
                  }`}
                >
                  {typeof item.icon === "string" ? (
                    <img src={item.icon} alt={item.name} className="w-5 h-5" />
                  ) : (
                    <FontAwesomeIcon icon={item.icon} />
                  )}
                  {isOpen && <span>{item.name}</span>}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="mt-auto py-4 px-2 border-t flex items-center gap-3">
        <FontAwesomeIcon icon={faUser} className="border-1 p-2 rounded-full" />
        {isOpen && (
          <div className="flex flex-col">
            <span className="text-gray-500 font-medium">Welcome back 👋</span>
            <span className="font-semibold text-black">
              {userName ? userName : "Guest"}
            </span>
          </div>
        )}
        {/* <FontAwesomeIcon
          icon={faChevronRight}
          className="text-gray-500 ml-auto"
        /> */}
      </div>
    </div>
  );
};

export default Sidebar;
