import React from "react";
import shoe from "../assets/j4.avif";

const Card = () => {
  return (
    <div className="card m-2 shadow-lg border-[0.5px] border-gray-100 h-[300px] w-[200px] rounded-sm hover:scale-105 hover:cursor-pointer transition-all">
      <div className="cardContent">
        <div className="cardImage flex justify-center items-center">
          <img src={shoe} alt="" className="" />
        </div>

        <div className="cardDetails h-max flex flex-col justify-between">
          <div className="cardInfo">
            <p className="mx-2">Nike Jordan 4 Kaws </p>
            <p className="mx-2 font-medium">$3149</p>
            <p className="mx-2 text-gray-400 text-sm">Nearest: 34km</p>
          </div>

          <div className="Buttons flex justify-evenly items-center mt-11">
            <button className="border-[0.5px] rounded-sm py-1 px-2 text-green-600 hover:bg-green-600 hover:text-white">
              BUY
            </button>
            <button className="border-[0.5px] rounded-sm py-1 px-2 text-red-600 hover:bg-red-600 hover:text-white">
              SELL
            </button>
            <button className="border-[0.5px] rounded-sm py-1 px-2 hover:bg-black hover:text-white">
              TRADE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
