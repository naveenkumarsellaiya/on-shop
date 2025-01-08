import React, { useState } from 'react';
import logo from "../Assests/loginside.png";
import { Link } from 'react-router-dom';

const Register = ({toggle}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password || !confirmPassword) {
      setError('Please fill out all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful!');
    window.location.href = '/login';
  };

  return (
    <div className={` px-6 py-8 flex items-center  text-gray-800 ${toggle?"text-white":" bg-white"}`}>

      <div className=" p-8 rounded-lg shadow-lg w-full md:w-[80%] flex flex-col md:flex-row transform transition-all duration-500 md:hover:scale-105">
        <div className="text-center mb-6 flex-1">
          <img
            src={logo}
            alt="Logo"
            className="w-96 mx-auto md:border-r pr-1 md:border-r-gray-600 animate-slide-right"
          />
        </div>
        <div className="flex-1 p-6">
          <h2 className="text-2xl font-semibold text-center mb-4 animate-fade-up">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 animate-fade-up">
              <input
                type="text"
                id="username"
                placeholder="Username/Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:shadow-lg"
              />
            </div>
            <div className="mb-4 animate-fade-up">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:shadow-lg"
              />
            </div>
            <div className="mb-4 animate-fade-up">
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 hover:shadow-lg"
              />
            </div>
            {error && (
              <p className="text-red-500 text-center mb-4 animate-pulse">
                {error}
              </p>
            )}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors animate-fade-up"
            >
              Register
            </button>
            <div className="text-center mt-4">
              <Link
                to="/login"
                className="text-blue-600 hover:text-blue-800 transition-colors animate-fade-up"
              >
                I already have an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
