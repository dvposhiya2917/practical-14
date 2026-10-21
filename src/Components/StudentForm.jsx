import React, { useState } from "react";

function StudentForm({ onRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="student@example.com"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          pattern="[0-9]{10}"
          maxLength={10}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Select Course
        </label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Choose a course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Com">B.Com</option>
          <option value="B.Sc IT">B.Sc IT</option>
          <option value="MCA">MCA</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold text-gray-700 mb-3">
          Gender
        </label>

        <div className="flex flex-wrap gap-6">
          {["Male", "Female", "Other"].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 text-gray-700"
            >
              <input
                type="radio"
                name="gender"
                value={item}
                checked={formData.gender === item}
                onChange={handleChange}
                required
                className="accent-indigo-600"
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block font-semibold text-gray-700 mb-2">
          Address
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          rows="3"
          required
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-md transition"
      >
        Register Student
      </button>
    </form>
  );
}

export default StudentForm;