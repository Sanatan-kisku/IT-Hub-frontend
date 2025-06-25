// src/components/HeroSection.jsx
import React from 'react';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-yellow-100 via-blue-100 to-white py-12 px-6 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-800 mb-4">
        Welcome to IT Hub, OAV Surada
      </h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        This is the official Information Technology portal for students of Odisha Adarsha Vidyalaya, Surada. Here you will find all updates, activities, learning resources, leaderboards and announcements related to IT classes. Stay connected and keep learning!
      </p>
    </section>
  );
}
