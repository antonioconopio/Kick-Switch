import React from "react";
import heroImage from "../assets/wallpaperflare.com_wallpaper.jpg";

const Hero = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden h-[550px] w-full">
      <img src={heroImage} alt="Hero Image" className="object-fill" />
      <div className="absolute">
        <p className=" text-white text-5xl font-bold text-center">
          BUY, SELL, TRADE
        </p>
        <p className=" text-white text-lg text-center">
          THE WORLDS LARGEST SHOE MARKETPLACE
        </p>

        <div className="flex justify-center">
          <button className=" bg-gray-200 border-gray-800 border-[1px] py-2 px-4 rounded-md mx-2">
            BROWSE
          </button>
          <button className=" bg-gray-800 text-white py-2 px-4 rounded-md">
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
