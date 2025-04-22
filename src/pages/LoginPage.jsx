import React from "react";
import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
