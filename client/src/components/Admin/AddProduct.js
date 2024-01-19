import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function AddProduct() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  console.log(file);
  return (
    <div className='pt-20 px-5 bg-gray-100'>
      <h1 className='my-8 text-4xl font-bold'>Add Product</h1>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-6 bg-white rounded-xl p-5 mb-10'>
          <h1 className='font-medium text-2xl text-gray-800 pb-4'>Description</h1>
          <div className='border-2 border-gray-100 rounded-md p-5 flex flex-col'>
            <h1 className='pb-2'>Product Name</h1>
            <input type="text" placeholder='Enter Product Name' className='p-2 font-normal border-gray-100 border-2 outline-none rounded-md' />
            <h1 className='pb-2 pt-3'>Product Description</h1>
            <input type="text" placeholder='Product Description' className='p-2 font-normal border-gray-100 border-2 outline-none rounded-md' />
          </div>
          <h1 className='font-medium text-2xl text-gray-800 py-4'>Categories</h1>
          <div className='border-2 border-gray-100 rounded-md p-5 flex flex-col'>
            <h1 className='pb-2'>Product Category</h1>
            <select className='border-2 rounded-md border-gray-100 p-2 outline-none'>
              <option>Man's Shirt</option>
              <option>Man's T-Shirt</option>
              <option>Man's Jeans</option>
              <option>Women T-Shirt</option>
              <option>Women Skirt</option>
            </select>
            <h1 className='pb-2 pt-3'>Material</h1>
            <select className='border-2 rounded-md border-gray-100 p-2 outline-none'>
              <option>Cotton</option>
              <option>Silk</option>
              <option>Polyester</option>
              <option>Leather</option>
              <option>Chiffon</option>
              <option>Denim</option>
            </select>
            <h1 className='pb-2 pt-3'>Fit Types</h1>
            <select className='border-2 rounded-md border-gray-100 p-2 outline-none'>
              <option>Classic fit</option>
              <option>Silm Fit</option>
              <option>Tapered Fit</option>
              <option>Athletic Fit</option>
            </select>
          </div>
        </div>
        <div className='col-span-6 bg-white rounded-xl p-5 mb-10'>
          <h1 className='font-medium text-2xl text-gray-800 pb-4'>Product Image</h1>
          <div className='border-2 border-gray-100 rounded-md p-5 flex flex-col'>
            <FileUploader handleChange={handleChange} name="file" types={fileTypes} className='h-40'/>
          </div>
          <h1 className='font-medium text-2xl text-gray-800 py-4'>Select Size</h1>
          <div className='border-2 border-gray-100 rounded-md p-5 flex flex-col'>
            <h1 className='pb-2'>Size</h1>
            <select className='border-2 rounded-md border-gray-100 p-2 outline-none'>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>Xl</option>
              <option>XXL</option>
            </select>
            <h1 className='pb-2 pt-3'>Price</h1>
            <input type="number" className='p-2 font-normal border-gray-100 border-2 outline-none rounded-md' />
          </div>
          <div className='py-5 space-x-5'>
            <button className='text-white bg-blue-600 rounded-full px-4 py-2 text-xl'>ADD</button>
            <button className='text-white bg-yellow-600 rounded-full px-4 py-2 text-xl'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct