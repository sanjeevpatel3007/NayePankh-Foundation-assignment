"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = (data) => {
    // Handle login logic here
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-lg "
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">Email is required</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true })}
            className={`border ${errors.password ? 'border-red-500' : 'border-gray-300'} p-2 rounded w-full`}
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">Password is required</p>}
        </div>

        <button type="submit" className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Login</button>

        <p className="mt-4">
          Don't have an account?{' '}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => router.push('/signup')}
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
