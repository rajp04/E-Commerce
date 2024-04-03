import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import { useLocation } from "react-router-dom";

function AddProduct() {
  const { state } = useLocation()
  // console.log(state);
  // State for form fields
  const [productName, setProductName] = useState(state?.productName);
  const [description, setDescription] = useState(state?.description);
  const [category, setCategory] = useState(state?.category);
  const [material, setMaterial] = useState(state?.material);
  const [styles, setStyles] = useState(state?.styles);
  const [size, setSize] = useState(state?.size);
  const [price, setPrice] = useState(state?.price);
  const [image, setImage] = useState(null);
  const [stock, setStock] = useState(state?.stock);

  const id = state?._id

  // Function to handle file upload
  const handleChange = (image) => {
    setImage(image);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      // Creating FormData object and appending form data
      const data = new FormData();
      data.append("productName", productName);
      data.append("description", description);
      data.append("category", category);
      data.append("material", material);
      data.append("styles", styles);
      data.append("size", size);
      data.append("price", price);
      data.append("image", image);
      data.append("stock", stock);

      // Making POST request using axios
      const response = await axios.patch(`http://localhost:5555/api/v1/product/updateproduct/${id}`, data);

      if (response.data.success === 1) {
        console.log("Product added successfully");
        // Resetting state variables to their initial values
        setProductName('');
        setDescription('');
        setCategory('Clothing');
        setMaterial('');
        setStyles('');
        setSize('S');
        setPrice('');
        setImage(null);
        setStock('');
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error(`Error adding the product: ${error}`);
    }
  };

  // Function to handle cancel button click
  const handleCancel = () => {
    // Resetting state variables to their initial values
    setProductName('');
    setDescription('');
    setCategory('Clothing');
    setMaterial('');
    setStyles('');
    setSize('S');
    setPrice('');
    setImage(null);
    setStock('')
  };

  return (
    <div className='pt-20 px-5 bg-gray-100'>
      <h1 className='my-8 text-4xl font-bold'>Edit Product</h1>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-6 bg-white rounded-xl p-5 mb-10'>
          <h1 className='font-medium text-2xl text-gray-800 pb-4'>Description</h1>
          <div className='border-2 border-gray-100 rounded-md p-5 flex flex-col'>
            <h1 className='pb-2'>Product Name</h1>
            <input type="text" placeholder='Enter Product Name' className='p-2 font-normal border-gray-100 border-2 outline-none rounded-md' value={productName} onChange={e => setProductName(e.target.value)} />
            <h1 className='pb-2 pt-3'>Product Description</h1>
            <input type="text" placeholder='Product Description' className='p-2 font-normal border-gray-100 border-2 outline-none rounded-md' value={description} onChange={e => setDescription(e.target.value)} />
          </div>
          <h1 className='font-medium text-2xl text-gray-800 py-4'>Categories</h1>
          <div className='border-2 border-gray-100 rounded-md p-5 flex flex-col'>
            <h1 className='pb-2'>Product Category</h1>
            <select className='border-2 rounded-md border-gray-100 p-2 outline-none' value={category} onChange={e => setCategory(e.target.value)}>
              <option>Clothing</option>
              <option>Electronics</option>
              <option>Kitchen</option>
              <option>Grocery</option>
              <option>Beauty</option>
              <option>Health</option>
            </select>
            <h1 className='pb-2 pt-3'>Material</h1>
            <input type="text" placeholder='Enter Product Material' className='p-2 font-normal border-gray-100 border-2 outline-none rounded-md' value={material} onChange={e => setMaterial(e.target.value)} />
            <h1 className='pb-2 pt-3'>Styles</h1>
            <input type="text" placeholder='Enter Product Style' className='p-2 font-normal border-gray-100 border-2 outline-none rounded-md' value={styles} onChange={e => setStyles(e.target.value)} />
          </div>
        </div>
        <div className='col-span-6 bg-white rounded-xl p-5 mb-10'>
          <h1 className='font-medium text-2xl text-gray-800 pb-4'>Product Image</h1>
          <div className='border-2 border-gray-100 rounded-md p-5 flex flex-col'>
            <FileUploader handleChange={handleChange} name="file" type="file" className='h-40' />
          </div>
          <h1 className='font-medium text-2xl text-gray-800 py-4'>Select Size</h1>
          <div className='border-2 border-gray-100 rounded-md p-5 flex flex-col'>
            <h1 className='pb-2'>Size</h1>
            <select className='border-2 rounded-md border-gray-100 p-2 outline-none' value={size} onChange={e => setSize(e.target.value)}>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>Xl</option>
              <option>XXL</option>
            </select>
            <h1 className='pb-2 pt-3'>Stock</h1>
            <input type="number" className='p-2 font-normal border-gray-100 border-2 outline-none rounded-md' value={stock} onChange={e => setStock(e.target.value)}/>
            <h1 className='pb-2 pt-3'>Price</h1>
            <input type="number" className='p-2 font-normal border-gray-100 border-2 outline-none rounded-md' value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <div className='py-5 space-x-5'>
            <button className='text-white bg-blue-600 rounded-full px-4 py-2 text-xl' onClick={handleSubmit}>Update</button>
            <button className='text-white bg-yellow-600 rounded-full px-4 py-2 text-xl' onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
