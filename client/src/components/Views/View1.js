import React from 'react'
import { FaCheck } from 'react-icons/fa'

function View1() {
    return (
        <div className='my-5 grid grid-cols-12'>
            <div className='lg:col-span-9 md:col-span-8 sm:col-span-7 col-span-12 border-2 border-gray-300 bg-white rounded-md'>
                <div className='flex flex-wrap text-gray-500 space-x-5 py-2 '>
                    <h1 className='ps-5 text-blue-600 font-semibold'>Description</h1>
                    <h1>Reviews</h1>
                    <h1>Shipping</h1>
                    <h1>About seller</h1>
                </div>
                <hr />
                <div className='px-5 py-3'>
                    <h1 className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rerum nemo cum dolor consectetur ut consequuntur ab maxime iusto harum magni possimus atque id nihil tempore veritatis, ipsa est aperiam reprehenderit repudiandae incidunt. Beatae quasi reiciendis velit veritatis nam tempora dolores? Fugit et, possimus voluptatem eos vel cum fuga repudiandae soluta, quaerat magni mollitia, dolor neque ab. Voluptates illo dolores, est debitis at corporis reiciendis iste error autem. Perspiciatis veritatis repellat, ipsa delectus sit dolorum.</h1>
                    <table className='border-2 border-gray-300 rounded-md text-gray-500 my-3'>
                        <tr className='border-b-2 border-gray-300'>
                            <th className='px-3 bg-gray-200 text-start py-1'>Model</th>
                            <th className='px-2 text-start py-1'>#8786867</th>
                        </tr>
                        <tr className='border-b-2 border-gray-300'>
                            <th className='px-3 bg-gray-200 text-start py-1'>Style</th>
                            <th className='px-2 text-start py-1'>Classic style</th>
                        </tr>
                        <tr className='border-b-2 border-gray-300'>
                            <th className='px-3 bg-gray-200 text-start py-1'>Certificate</th>
                            <th className='px-2 text-start py-1'>ISO-898921212</th>
                        </tr>
                        <tr className='border-b-2 border-gray-300'>
                            <th className='px-3 bg-gray-200 text-start py-1'>Size</th>
                            <th className='px-2 text-start py-1'> 34mm * 450mm * 19mm </th>
                        </tr>
                        <tr className='border-b-2 border-gray-300'>
                            <th className='px-3 bg-gray-200 text-start py-1'>Memory</th>
                            <th className='px-2 text-start py-1'>36GB RAM</th>
                        </tr>
                    </table>
                    <div className='flex items-center text-gray-500 my-3'>
                        <FaCheck className='me-3' />
                        <h1>Some great feature name here </h1>
                    </div>
                    <div className='flex items-center text-gray-500 my-3'>
                        <FaCheck className='me-3' />
                        <h1>Lorem ipsum dolor consectetur adipisicing. </h1>
                    </div>
                    <div className='flex items-center text-gray-500 my-3'>
                        <FaCheck className='me-3' />
                        <h1>Provident repellendus laboriosam ducimus! </h1>
                    </div>
                    <div className='flex items-center text-gray-500 my-3'>
                        <FaCheck className='me-3' />
                        <h1>Some great feature name here </h1>
                    </div>
                </div>
            </div>


            <div className='border-2 border-gray-300 rounded-md sm:ms-5 ms-0 sm:mt-0 mt-5 lg:col-span-3 col-span-12 md:col-span-4 sm:col-span-5 bg-white p-3'>
                <h1 className='font-bold'>You may like</h1>
                <div className='flex my-3'>
                    <div className='border-2 border-gray-300 p-2 rounded-md me-2'>
                        <img src={require('../Views/image/image 30.png')} alt="" />
                    </div>
                    <div>
                        <h1>Men Blazers Sets Elegant Formal</h1>
                        <h1 className='text-gray-500'>$7.00 - $99.50</h1>
                    </div>
                </div>
                <div className='flex my-3'>
                    <div className='border-2 border-gray-300 p-2 rounded-md me-2'>
                        <img src={require('../Views/image/Bitmap.png')} alt="" />
                    </div>
                    <div>
                        <h1>Men Shirt Sleeve Polo Contrast</h1>
                        <h1 className='text-gray-500'>$7.00 - $99.50</h1>
                    </div>
                </div>
                <div className='flex my-3'>
                    <div className='border-2 border-gray-300 p-2 rounded-md me-2'>
                        <img src={require('../Views/image/2 1.png')} alt="" />
                    </div>
                    <div>
                        <h1>Apple Watch Series Space Gray</h1>
                        <h1 className='text-gray-500'>$7.00 - $99.50</h1>
                    </div>
                </div>
                <div className='flex my-3'>
                    <div className='border-2 border-gray-300 p-2 rounded-md me-2'>
                        <img src={require('../Views/image/image 25.png')} alt="" />
                    </div>
                    <div>
                        <h1>Basketball Crew Socks Long Stuff</h1>
                        <h1 className='text-gray-500'>$7.00 - $99.50</h1>
                    </div>
                </div>
                <div className='flex my-3'>
                    <div className='border-2 border-gray-300 p-2 rounded-md me-2'>
                        <img src={require('../Views/image/image 26.png')} alt="" />
                    </div>
                    <div>
                        <h1>New Summers Men's castrol T-Shirts</h1>
                        <h1 className='text-gray-500'>$7.00 - $99.50</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View1
