"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/Login.module.css";

function page({ params }) {
  const { id } = params;
  const [updateData, setUpdateData] = useState();

  const { users, loading } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    if (id) {
      const singleAgency = users.filter((ele) => ele._id === id);
      setUpdateData(singleAgency[0]);
    }
  }, []);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateAgency(updateData));
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Update Agency Data</h2>

        <form>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="agencyName"
              placeholder="Agency Name"
              value={updateData && updateData.agencyName}
              onChange={newData}
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
              value={updateData && updateData.ownerName}
              onChange={newData}
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
              value={updateData && updateData.email}
              onChange={newData}
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
              value={updateData && updateData.phone}
              onChange={newData}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          {/* <div className="mb-6">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={newData}
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
              onChange={newData}
              className="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div> */}
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
}

export default page;
