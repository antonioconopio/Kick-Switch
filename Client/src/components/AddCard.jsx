import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const AddCard = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="card m-2 shadow-lg border-[0.5px] border-gray-100 h-[300px] w-[200px] rounded-sm hover:scale-105 hover:cursor-pointer transition-all flex justify-center items-center"
    >
      <CiCirclePlus className="text-2xl" />
    </div>
  );
};

export default AddCard;
