import React from 'react'

function Profile() {
    return (
        <div className='flex justify-center items-center bg-gray-100 p-20 '>
            <div className='border-2 flex flex-col justify-center rounded-md py-10 px-5 border-gray-300'>
                <h1 className='font-semibold text-3xl '>Profile</h1>
                <div className='flex items-center mt-5'>
                    <h1 className='text-xl font-semibold'>Name: </h1>
                    <h1 className='ps-2 text-lg font-medium'>Raj Patel</h1>
                </div>
                <div className='flex items-center mt-5'>
                    <h1 className='text-xl font-semibold'>Email: </h1>
                    <h1 className='ps-2 text-lg font-medium'>Raj Patel</h1>
                </div>
                <div className='flex items-center mt-5'>
                    <h1 className='text-xl font-semibold'>Mobile Number: </h1>
                    <h1 className='ps-2 text-lg font-medium'>Raj Patel</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile


