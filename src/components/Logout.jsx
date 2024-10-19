import React from 'react';
import { useAuth } from '../context/AuthProvider'; // Ensure this path is correct
import { toast } from 'react-toastify';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth(); // Get authentication user and state

    const handleLogout = () => {
        try {
            setAuthUser(null); // Clear the authenticated user state
            localStorage.removeItem('Users'); // Clear user data from localStorage
            toast.success("Logged out successfully");
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    // Render nothing if there's no authenticated user
    if (!authUser) {
        return null; // Optionally return a Login button here if desired
    }

    return (
        <button 
            className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-800 transition-all duration-300 
                       inline-flex justify-center items-center text-sm w-24 h-9 sm:ml-4"
            onClick={handleLogout}
        >
            Log Out
        </button>
    );
};

export default Logout;
