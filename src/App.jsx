import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import StudentForm from "./Components/StudentForm";
import StudentDetails from "./Components/StudentDetails";

function App() {
  const [student, setStudent] = useState(null);

  const handleRegister = (formData) => {
    setStudent(formData);
  };

  const handleReset = () => {
    setStudent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-slate-50 to-purple-100">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10">
          {!student ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Student Registration
                </h2>
                <p className="text-gray-500 mt-2">
                  Fill in your details to register.
                </p>
              </div>

              <StudentForm onRegister={handleRegister} />
            </>
          ) : (
            <StudentDetails
              student={student}
              onReset={handleReset}
            />
          )}
        </div>
      </main>

      <footer className="text-center text-gray-500 py-5 text-sm">
        Student Portal | Built with React and Tailwind CSS
      </footer>
    </div>
  );
}

export default App;