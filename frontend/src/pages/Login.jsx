
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
      const navigate = useNavigate();

  const handleLogin = () => {
    // Example: set auth token to simulate login
    localStorage.setItem("authToken", "your_token_here");
    navigate("/home");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome Back</h1>
        <p className="mb-6 text-center text-gray-600">
          Please log in to your account
        </p>

        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4 flex justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-900" />
              Remember me
            </label>
            <a href="#" className="hover:underline text-blue-700">
              Forgot Password?
            </a>
          </div>

          <div className="mb-4">
            <input
              type="submit"
              onClick={handleLogin}
              value="Login"
              className="w-full p-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
            />
          </div>

          <div className="text-center text-sm text-gray-600">
            <span>Don't have an account? </span>
            <NavLink to='/signup' className="text-blue-700 hover:underline">
              Sign Up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;