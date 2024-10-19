import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Signup = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data) => {
    const UserInfo = {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    };

    try {
      const response = await axios.post("http://localhost:4001/Users/signup", UserInfo);
      console.log(response.data);
      if (response.data) {
        toast.success("Signup successful!");
        localStorage.setItem("Users", JSON.stringify(response.data));
        setTimeout(() => {
          navigate(from);
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      toast.error("Signup Error: " + (error.response?.data?.message || "An unexpected error occurred."));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full sm:max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Create Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              {...register('fullName', { required: 'Full Name is required' })}
              className={`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 ${errors.fullName ? 'focus:ring-red-500' : 'focus:ring-pink-400'}`}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Email is not valid' } })}
              className={`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 ${errors.email ? 'focus:ring-red-500' : 'focus:ring-pink-400'}`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                className={`w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 ${errors.password ? 'focus:ring-red-500' : 'focus:ring-pink-400'}`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(!passwordVisible)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600 hover:text-gray-800"
              >
                <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold p-3 rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
