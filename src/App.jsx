import React, { useState, useEffect } from "react";
import Home from "./home/home"; // Ensure the path is correct
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Courses from "./Course/courses"; // Ensure the path is correct
import Signup from "./components/signup"; // Ensure the path is correct
import Login from "./components/login"; // Ensure you have this component
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider"; // Ensure the path is correct
import LabManuals from "./components/Labmanual"; // Import LabManuals component
import Modelpapper from "./components/Modelpapper";


function App() {
  const { authUser } = useAuth(); // Ensure you're destructuring correctly
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for modal

  const handleLoginSuccess = () => {
    setIsLoginModalOpen(false); // Close the modal on success
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true); // Open the modal when trying to access /course
  };

  // Effect to open login modal if user tries to access /course
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/course" && !authUser) {
      openLoginModal(); // Open the login modal if not authenticated
    }
  }, [location.pathname, authUser]); // Run effect when path or authUser changes

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login/>} /> {/* Pass success handler */}
          <Route path="/labmanuals" element={<LabManuals />} /> {/* Add LabManuals route */}
          <Route path="/login" element={<Login/>} /> {/* Pass success handler */}
          <Route path="/Modelpapper" element={<Modelpapper/>} /> 
        </Routes>
        <Toaster />

        {isLoginModalOpen && <Login onLoginSuccess={handleLoginSuccess} />} {/* Show modal if open */}
      </div>
    </>
  );
}

export default App;
