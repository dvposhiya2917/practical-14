import React from "react";

function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white px-6 py-5 shadow-lg">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold">
          Student Portal
        </h1>
        <p className="text-indigo-200 text-sm mt-1">
          Student Registration System
        </p>
      </div>
    </nav>
  );
}

export default Navbar;