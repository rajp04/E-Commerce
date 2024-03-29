import React, { useEffect, useState } from "react";
import Banner from "../image/banner.png";
import Main from "./Main";
import Main1 from "./Main1";
import Service from "./Service";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const id = localStorage.getItem("id")
  const navigate = useNavigate()
  const [userData, setUserData] = useState()
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:5555/api/v1/users/userdata/${id}`);

          if (response.data) {
            setUserData(response.data.data);
          } else {
            console.log("Invalid data");
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [id]);

  // console.log(userData);

  return (
    <>
      <Header />
      <div className="xl:px-28 lg:px-16 md:px-6 sm:px-2 bg-gray-100 py-5" onClick={()=> navigate("/filter")}>
        {/* only for hiiden */}
        <div
          className="xl:col-span-7 col-span-6 p-10 bg-no-repeat bg-cover bg-center block md:hidden"
          style={{ backgroundImage: `url(${Banner})` }}
        >
          <h1 className="text-3xl">Latest tranding</h1>
          <h1 className="text-4xl pb-3 font-bold">Electronic items</h1>
          <button className="py-1 px-3 font-medium bg-white rounded-md">
            Learn more
          </button>
        </div>

        <div className="grid-cols-6 min-[430px]:grid-cols-12 grid gap-5 border-2 mb-7 border-gray-300 p-6 justify-center bg-white rounded-md">
          <div className="md:col-span-3 col-span-6 space-y-2 text-xl">
            <h1 className="bg-blue-200 rounded-md">Automobiles</h1>
            <h1>Clothes and wear</h1>
            <h1>Home interiors</h1>
            <h1>Computer and tech</h1>
            <h1>Tools, equipments</h1>
            <h1>Sports and outdoor</h1>
            <h1>Animal and pets</h1>
            <h1>Machinery tools</h1>
            <h1>More category</h1>
          </div>
          <div
            className="xl:col-span-7 col-span-6 p-10 bg-no-repeat bg-cover bg-center hidden md:block"
            style={{ backgroundImage: `url(${Banner})` }}
          >
            <h1 className="text-3xl">Latest tranding</h1>
            <h1 className="text-4xl pb-3 font-bold">Electronic items</h1>
            <button className="py-1 px-3 font-medium bg-white rounded-md">
              Learn more
            </button>
          </div>
          <div className="xl:col-span-2 lg:col-span-3 md:col-span-3 col-span-6">
            {id ? (
              < div className="bg-blue-100 p-2 flex flex-col rounded-md mb-2">
                {userData &&
                  <div className="flex mb-2">
                    <img
                      src={userData.avatar}
                      alt=""
                      className="h-14 w-14 rounded-full"
                    />
                    <div className="ps-2">
                      <h1 className="font-semibold text-2xl">Hi, {userData.fullName}</h1>
                      <h1>Let's get started</h1>
                    </div>
                  </div>
                }
                <button
                  className="bg-white text-blue-500 text-lg py-1 rounded-md"
                  onClick={() => { localStorage.removeItem("id"); window.location.reload(); }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="bg-blue-100 p-2 flex flex-col rounded-md mb-2">
                <div className="flex mb-2">
                  <img
                    src={require("../image/avatar=pic1@2x.png")}
                    alt=""
                    className="h-14 pe-2"
                  />
                  <div>
                    <h1>Hi, User</h1>
                    <h1>Let's get started</h1>
                  </div>
                </div>
                <button
                  className="bg-white text-blue-500 text-lg py-1 rounded-md"
                  onClick={() => navigate("/login")}
                >
                  Log in
                </button>
              </div>
            )}
            <div className="bg-orange-400 rounded-md mb-2 p-5 text-white">
              <h1>Get US $10 off with a new supplier</h1>
            </div>
            <div className="bg-cyan-300 rounded-md p-5 text-white">
              <h1>Send quotes with suppiler perferences</h1>
            </div>
          </div>
        </div>

        {/* Deals Session */}

        <div className="grid grid-cols-2 md:grid-cols-7 sm:grid-cols-4 min-[450px]:grid-cols-3 border-2 border-gray-300 rounded-md mb-5">
          <div className="col-span-2 bg-white p-3 border-e-2 border-b-2">
            <h1 className="text-2xl font-semibold">Deals and offers</h1>
            <p className="text-gray-500 pb-2">Hygiene equipment</p>
            <div className="flex text-white items-center space-x-2">
              <h1 className="bg-gray-600 rounded-md lg:p-2 p-1 lg:w-14 w-12 text-center">
                04 Days
              </h1>
              <h1 className="bg-gray-600 rounded-md lg:p-2 p-1 lg:w-14 w-12 text-center">
                13 Hour
              </h1>
              <h1 className="bg-gray-600 rounded-md lg:p-2 p-1 lg:w-14 w-12 text-center">
                34 Min
              </h1>
              <h1 className="bg-gray-600 rounded-md lg:p-2 p-1 lg:w-14 w-12  text-center">
                {" "}
                56 Sec
              </h1>
            </div>
          </div>
          <div className="col-span-1 bg-white justify-center items-center border-e-2 border-b-2 flex flex-col py-5">
            <img
              src={require("../image/image 35.png")}
              alt=""
              className="mt-2"
            />
            <h1 className="py-1">Smart watches</h1>
            <button className="bg-red-200 text-red-500 font-semibold rounded-xl px-2">
              -25%
            </button>
          </div>
          <div className="col-span-1 bg-white justify-center items-center border-e-2 border-b-2 flex flex-col py-5">
            <img
              src={require("../image/image 34.png")}
              alt=""
              className="mt-8"
            />
            <h1 className="py-1">Laptops</h1>
            <button className="bg-red-200 text-red-500 font-semibold rounded-xl px-2 ">
              -15%
            </button>
          </div>
          <div className="col-span-1 bg-white justify-center items-center border-e-2 border-b-2 flex flex-col py-5">
            <img
              src={require("../image/image 28.png")}
              alt=""
              className="mt-10"
            />
            <h1 className="py-1 whitespace-nowrap">GoPro cameras</h1>
            <button className="bg-red-200 text-red-500 font-semibold rounded-xl px-2">
              40%
            </button>
          </div>
          <div className="col-span-1 bg-white justify-center items-center border-e-2 border-b-2 flex flex-col py-5">
            <img src={require("../image/image 29.png")} alt="" className="" />
            <h1 className="py-1">Headphones</h1>
            <button className="bg-red-200 text-red-500 font-semibold rounded-xl px-2">
              -25%
            </button>
          </div>
          <div className="col-span-1 bg-white justify-center items-center border-e-2 border-b-2 flex flex-col py-5">
            <img
              src={require("../image/image 23.png")}
              alt=""
              className="mt-1"
            />
            <h1 className="py-1">Phones</h1>
            <button className="bg-red-200 text-red-500 font-semibold rounded-xl px-2">
              -25%
            </button>
          </div>
        </div>

        <Main />
        <Main1 />
        <Service />
      </div >
      <Footer />
    </>
  );
}

export default Home;
