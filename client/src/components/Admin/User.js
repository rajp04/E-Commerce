/* eslint-disable eqeqeq */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserData } from '../../thunks/UserThunk.js';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';

function User() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(UserData());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5555/api/v1/users/deleteuser/${id}`);

      if (response.status == 200) {
        console.log('Product deleted successfully');
        window.location.reload();
      } else {
        console.error('Failed to delete product. Server responded with:', response.data);
      }
    } catch (error) {
      console.error('An error occurred while deleting the product:', error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(userData);

  const handleBlock = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:5555/api/v1/users/userblock/${id}`)
      if (response.status == 200) {
        console.log('Product Block successfully');
        window.location.reload();
      } else {
        console.error('Failed to delete product. Server responded with:', response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="flex flex-col pt-20">
        <div className='flex bg-gray-200 font-bold text-2xl'>
          <h1 className='w-72 ps-2'>Id</h1>
          <h1 className='w-72 ps-5'>Name</h1>
          <h1 className='w-80 ps-5'>Email</h1>
          <h1 className='w-48 ps-5'>Phone Number</h1>
          <h1 className='w-28 ps-5'>Block</h1>
          <h1 className=''>Delete</h1>
        </div>

        {userData && userData.map(user => (
          <div key={user._id} className='flex text-lg font-semibold border-b-2 py-2 text-gray-800 bg-gray-50'>
            <h1 className='w-72 ps-2 overflow-x-hidden'>{user._id}</h1>
            <h1 className='w-72 ps-5 overflow-x-hidden'>{user.fullName}</h1>
            <h1 className='w-80 overflow-x-hidden ps-5'>{user.email}</h1>
            <h1 className='w-48 ps-5 overflow-x-hidden '>{user.mobile}</h1>
            {user.block == true ? (
              <button className='py-1 px-2 ms-5 text-white me-3 bg-green-500 rounded-md' onClick={() => handleBlock(user._id)}>unblock</button>
            ) : (
              <button className='py-1 px-4 ms-5 text-white me-3 bg-red-500 rounded-md' onClick={() => handleBlock(user._id)}>Block</button>
            )}

            <MdDelete className='text-3xl ms-5 cursor-pointer' onClick={() => handleDelete(user._id)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default User;
