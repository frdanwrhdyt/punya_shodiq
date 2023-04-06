import React from "react";
import { Outlet, Link } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Dashboard() {
  return (
    <div className="w-screen h-screen ">
      <div className="w-full h-full flex items-center">
        <div>
          <div className="flex justify-end mx-auto w-3/4 divide-x-2 divide-black py-3">
            <div className=" hover:text-red-800 text-black font-semibold duration-300 p-1 ">
              {/* <Link to="/">Penjelasan</Link> */}
            </div>
            <div className=" hover:text-red-800 text-black font-semibold duration-300 p-1">
              <Link to="/counting">Kalkulator</Link>
            </div>
          </div>
          <div className="w-3/4 h-4/6 mx-auto  rounded-md shadow-lg bg-[#F4F8FB] p-5">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
