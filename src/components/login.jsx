import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { FaTimes } from "react-icons/fa";

const Login = ({ onLoginSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const modalRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (modalRef.current && isModalOpen) {
      modalRef.current.showModal();
    }
  }, [isModalOpen]);

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4001/Users/login", userInfo);
      if (response.data && response.data.user) {
        toast.success('Successfully logged in!');
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        onLoginSuccess(); // Call the success handler
        setIsModalOpen(false); // Close modal

        // Close the dialog
        if (modalRef.current) {
          modalRef.current.close();
        }

        // Navigate to the intended route
        const from = location.state?.from?.pathname || '/course'; // Default to course page
        navigate(from, { replace: true });
      } else {
        toast.error('Login failed: Invalid credentials');
      }
    } catch (error) {
      toast.error(`Login failed: ${error.response?.data?.message || 'Network error. Please try again.'}`);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleSignupRedirect = () => {
    handleCancel(); // Close the login modal before navigating to the signup page
    navigate('/signup'); // Redirect to the signup page
  };

  return (
    <>
      {isModalOpen && (
        <dialog ref={modalRef} className="modal open">
          <div className="modal-box max-w-sm mx-auto relative">
            <FaTimes 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer" 
              size={24} 
              onClick={handleCancel} 
            />
            <h3 className="font-bold text-lg text-black">Welcome Back!</h3>
            <p className="py-4 text-black">Please login to your account.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="input input-bordered w-full text-black" 
                  {...register('email', { required: 'Email is required' })} 
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>
              <div className="mb-4">
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="input input-bordered w-full text-black" 
                  {...register('password', { required: 'Password is required' })} 
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>
              <button 
                type="submit" 
                className="btn w-full bg-pink-500 text-white rounded-md hover:bg-pink-800 duration-300"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-center text-blue-500 cursor-pointer">
              <span className="text-black">Don't have an account? </span>
              <Link to="/signup" onClick={handleSignupRedirect}>Sign up</Link>
            </p>
          </div>
        </dialog>
      )}
    </>
  );
};

export default Login;
