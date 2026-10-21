import React from "react";

function StudentDetails({ student, onReset }) {
  if (!student) return null;

  const details = [
    ["Full Name", student.name],
    ["Email Address", student.email],
    ["Phone Number", student.phone],
    ["Course", student.course],
    ["Gender", student.gender],
    ["Address", student.address],
  ];

  return (
    <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold">
          {student.name.charAt(0).toUpperCase()}
        </div>

        <h2 className="text-2xl font-bold text-indigo-900 mt-3">
          Registration Successful
        </h2>

        <p className="text-gray-600 mt-1">
          Student details are displayed below.
        </p>
      </div>

      <div className="space-y-3">
        {details.map(([label, value]) => (
          <div
            key={label}
            className="bg-white rounded-lg p-3 border border-indigo-100"
          >
            <p className="text-sm text-gray-500">{label}</p>
            <p className="font-semibold text-gray-800 break-words">
              {value}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={onReset}
        type="button"
        className="w-full mt-5 bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 rounded-xl transition"
      >
        Register Another Student
      </button>
    </div>
  );
}

export default StudentDetails;