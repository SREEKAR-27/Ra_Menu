import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // New state for "Remember Me"
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if form is submitted

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both email and password are required!");
      return;
    }

    setError(""); // Reset error if form is valid
    setLoading(true); // Set loading to true

    // Simulate an async operation (like API call)
    setTimeout(() => {
      console.log(
        "Email:",
        email,
        "Password:",
        password,
        "Remember Me:",
        rememberMe
      );
      setLoading(false); // Set loading to false after submission
      setFormSubmitted(true);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {formSubmitted && !error && (
        <div className="text-green-500 mb-4">Successfully logged in!</div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>

      {/* Remember Me Checkbox */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
          className="mr-2"
        />
        <label className="text-gray-700">Remember me</label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        disabled={loading} // Disable button while loading
      >
        {loading ? (
          <div className="spinner-border animate-spin h-5 w-5 border-t-2 border-blue-500 rounded-full"></div> // Spinner while loading
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default Login;
