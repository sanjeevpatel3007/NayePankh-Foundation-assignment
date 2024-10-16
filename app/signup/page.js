'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    // Handle signup logic here (e.g., sending data to backend)
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-lg "
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={`border ${errors.name ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email Field */}
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: { 
                value: /^\S+@\S+$/i, 
                message: 'Invalid email format' 
              } 
            })}
            className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { 
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Profile Image Field (Optional) */}
        <div className="mt-4">
          <label htmlFor="profileImage" className="block text-sm font-medium mb-1">Profile Image (optional)</label>
          <input
            type="file"
            id="profileImage"
            {...register('profileImage')}
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>

        <button type="submit" className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Sign Up</button>

        <p className="mt-4">
          Already have an account?{' '}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => router.push('/login')}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
