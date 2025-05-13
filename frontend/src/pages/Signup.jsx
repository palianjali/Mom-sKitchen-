import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-center">Create Account</h1>
        <p className="mb-6 text-center text-gray-600">
          Please sign up to create a new account
        </p>

        <form action="#">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
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
          <div className="mb-4">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="submit"
              value="Sign Up"
              className="w-full p-2 bg-blue-900 text-white rounded hover:bg-blue-800 transition"
            />
          </div>

          <div className="text-center text-sm text-gray-600">
            <span>Already have an account? </span>
            <NavLink to="/login" className="text-blue-600 hover:underline">
              Log In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;