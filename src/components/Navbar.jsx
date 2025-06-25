// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-yellow-400 px-6 py-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-3">
        <img src="/images/ithublogo.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-2xl font-bold text-blue-900">IT Hub, OAV Surada</h1>
      </div>

      <ul className="flex space-x-6 text-blue-900 font-semibold">
        <li><Link to="/" className="hover:text-white">Home</Link></li>
        <li><Link to="/classwork" className="hover:text-white">Classwork</Link></li>
        <li><Link to="/activities" className="hover:text-white">Activities</Link></li>
        <li><Link to="/leaderboard" className="hover:text-white">Leaderboard</Link></li>
        <li><Link to="/student-corner" className="hover:text-white">Student Corner</Link></li>
      </ul>
    </nav>
  );
}
