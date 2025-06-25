import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold">IT Hub, Odisha Adarsha Vidyalaya, Surada</h3>
        <p className="text-sm mt-1">📍 At/Po-Surada, Block-Surada, Dist-Ganjam, Odisha - 761108</p>
        <p className="text-xs mt-2">© {new Date().getFullYear()} All rights reserved. Developed by Sanatan Kisku.</p>
      </div>
    </footer>
  );
}
