import React, { useState } from "react";
import Login from "../components/Login";

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm dark:bg-gray-800">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <Login />
        </div>
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default LoginPage;
