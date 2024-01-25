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

  return (
    <div>
      <div className="flex flex-col pt-20">
        <div className='flex bg-gray-200 font-bold text-2xl'>
          <h1 className='w-44 ps-5'>Id</h1>
          <h1 className='w-72 ps-5'>Name</h1>
          <h1 className='w-80 ps-5'>Email</h1>
          <h1 className='ps-5 w-64'>Phone Number</h1>
          <h1 className='w-32 ps-5'>Block</h1>
          <h1 className=''>Delete</h1>
        </div>

        {userData && userData.map(user => (
          <div key={user._id} className='flex text-xl font-semibold border-b-2 py-2 text-gray-800 bg-gray-50'>
            <h1 className='w-44 ps-5 overflow-x-hidden'>{user._id}</h1>
            <h1 className='w-72 ps-5 overflow-x-hidden'>{user.fullName}</h1>
            <h1 className='w-80 overflow-x-hidden ps-5'>{user.email}</h1>
            <h1 className='ps-5 w overflow-x-hidden w-64'>{user.mobile}</h1>
            <h1 className='w-32 ps-5'>{user.block}</h1>
            <MdDelete className='text-3xl ms-5 cursor-pointer' onClick={() => handleDelete(user._id)} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default User;
