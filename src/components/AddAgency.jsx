'use client'

import React, { useState } from 'react';
import styles from "../styles/Login.module.css"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { agency } from '@/redux/features/usersSlice';

const SignUpForm = () => {

  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    agencyName: '',
    ownerName:'',
    email: '',
    phone: '',
    password: '',
    confirmPassword:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData)
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(agency(formData))
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="agencyName"
              placeholder="Agency Name"
              value={formData.agencyName}
              onChange={handleChange}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="ownerName"
              placeholder="Owner Name"
              value={formData.ownerName}
              onChange={handleChange}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              id="confrimPassword"
              name="confirmPassword"
              placeholder="confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* The rest of your form */}

          <div className="mb-6">
            <button
              type="submit"
              className={`w-full border rounded-xl ${styles.button}`}
            >
              <span>Sign Up</span>
            </button>
          </div>
          <div className="mb-6">
            <Link href="/login/agency">
            <p className="">Already have an account? Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;