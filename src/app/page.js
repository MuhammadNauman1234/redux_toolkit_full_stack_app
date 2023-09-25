"use client"
import { deleteAgency, getUsers } from '@/redux/features/usersSlice';
import Link from 'next/link';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {

  const dispatch = useDispatch();
  const {users, loading} = useSelector((state) => {
    return state
  })

  useEffect(()=>{
    dispatch(getUsers());
  },[])

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      {loading? <><h1 className="text-2xl font-semibold mb-4">Loading</h1></>:<><h1 className="text-2xl font-semibold mb-4">Agency List</h1></>}
      <ul>
        {users && users.map((agency) => (
          <li
            key={agency._id}
            className="bg-white p-4 mb-4 rounded-lg shadow-md flex items-center justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{agency.agencyName}</h2>
              <p className="text-gray-600">{agency.ownerName}</p>
              <p className="text-gray-600">{agency.email}</p>
              <p className="text-gray-600">{agency.phone}</p>
            </div>
            <div>
              <Link href={`/adit/${agency._id}`}>
              <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Edit
              </button>
              </Link>
              <button className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={()=> dispatch(deleteAgency(agency._id))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
