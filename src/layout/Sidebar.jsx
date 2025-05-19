import React, { useContext, useState } from "react";
import {
  FaUserMd,
  FaBriefcaseMedical,
  FaFileAlt,
  FaCapsules,
  FaUserGraduate,
} from "react-icons/fa";
import {
  MdDashboard,
  MdApartment,
  MdPerson,
  MdCalendarToday,
  MdPeopleAlt,
  MdAttachMoney,
  MdLocalPharmacy,
  MdSms,
} from "react-icons/md";
import { Outlet, Link } from "react-router-dom";
import { ThemeContext } from "../colors/Thems";
import { IoChevronDown, IoChevronUp } from "react-icons/io5"; // Chevron icons

const Sidebar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [showPaymentDropdown, setShowPaymentDropdown] = useState(false);
  const [showAppointmentDropdown, setShowAppointmentDropdown] = useState(false);

  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard />, href: "/admin/dash" },
    { label: "Departments", icon: <MdApartment />, href: "/admin/department" },
    { label: "Doctor", icon: <FaUserMd />, href: "/admin/doctor" },
    { label: "Patient", icon: <MdPerson />, href: "/admin/list" },
    { label: "Student", icon: <FaUserGraduate />, href: "/admin/student" },
    { label: "Human Resources", icon: <MdPeopleAlt />, href: "/admin/human" },
    { label: "Financial Activities", icon: <MdAttachMoney />, href: "/admin/finance" },
    { label: "Prescription", icon: <FaBriefcaseMedical />, href: "/prescription" },
    { label: "Medicine", icon: <FaCapsules />, href: "/medicine" },
    { label: "Report", icon: <FaFileAlt />, href: "/admin/report" },
    { label: "SMS", icon: <MdSms />, href: "/admin/sms" },
  ];

  return (
    <div className="flex h-screen font-sans">
      {/* Top Navbar */}
      <div className="fixed top-0 left-64 right-0 h-16 shadow flex justify-between items-center px-6 z-10 bg-white dark:bg-gray-800">
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 px-4 py-1 rounded text-sm text-black dark:text-white"
        >
          {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-700 dark:text-white">
              John Doe
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-300">
              Administrator
            </div>
          </div>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-blue-500 shadow"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 text-black dark:text-white p-4 overflow-y-auto">
        <div className="flex justify-center mb-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWWbQToNUShJSUfC14XOM3QXCJf4BalOfIRQ&s"
            alt="Dentist Logo"
            className="w-20 h-20 object-contain rounded-full"
          />
        </div>
        <h1 className="text-2xl font-bold mb-8 text-left">
          <span className="text-blue-400">SBC</span>{" "}
          <span className="text-red-400">SOLUTION</span>
        </h1>

        <ul className="space-y-2">
          {/* Static Menu Items */}
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.href}
                className="flex items-center gap-2 p-2 hover:bg-blue-700 hover:text-white rounded transition-all"
              >
                {item.icon} {item.label}
              </Link>
            </li>
          ))}

          {/* Appointment Dropdown */}
          <li>
            <button
              onClick={() => setShowAppointmentDropdown(prev => !prev)}
              className="w-full flex items-center justify-between p-2 hover:bg-blue-700 hover:text-white rounded transition-all"
            >
              <span className="flex items-center gap-2">
                <MdCalendarToday /> Appointment
              </span>
              {showAppointmentDropdown ? <IoChevronUp /> : <IoChevronDown />}
            </button>
            {showAppointmentDropdown && (
              <ul className="pl-6 mt-1 space-y-1 text-sm">
                <li>
                  <Link
                    to="/admin/appoint/patient"
                    className="block p-2 hover:bg-blue-600 hover:text-white rounded"
                  >
                    Appointment for Patient
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/appoint/student"
                    className="block p-2 hover:bg-blue-600 hover:text-white rounded"
                  >
                    Appointment for Student
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Payment Dropdown */}
          <li>
            <button
              onClick={() => setShowPaymentDropdown((prev) => !prev)}
              className="w-full flex items-center justify-between p-2 hover:bg-blue-700 hover:text-white rounded transition-all"
            >
              <span className="flex items-center gap-2">
                <MdLocalPharmacy /> Payment
              </span>
              {showPaymentDropdown ? <IoChevronUp /> : <IoChevronDown />}
            </button>
            {showPaymentDropdown && (
              <ul className="pl-6 mt-1 space-y-1 text-sm">
                <li>
                  <Link
                    to="/admin/payment/patient"
                    className="block p-2 hover:bg-blue-600 hover:text-white rounded"
                  >
                    Payment for Patient
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/payment/student"
                    className="block p-2 hover:bg-blue-600 hover:text-white rounded"
                  >
                    Payment for Student
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 text-black dark:text-white pt-20 px-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
