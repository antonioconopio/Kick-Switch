import React from "react";
import { CiCirclePlus } from "react-icons/ci";

const AddListing = ({ onClose, listing }) => {
  return (
    <div
      className={
        listing
          ? "fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          : "hidden left-[100%]"
      }
    >
      <div className="bg-white h-[700px] w-[90%] sm:w-[60%] rounded-lg shadow-lg border-gray-200 border-[1px] flex flex-col items-center p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
        >
          ×
        </button>
        <h1 className="font-bold text-2xl mb-4">ADD A LISTING</h1>
        <div className="m-4 shadow-lg border-[0.5px] border-gray-100 h-[300px] w-[400px] rounded-sm hover:scale-105 hover:cursor-pointer transition-all flex justify-center items-center">
          <CiCirclePlus className="text-2xl" />
        </div>
        <form
          className="flex flex-col space-y-4 w-full px-4 sm:px-12"
          method="POST"
        >
          <input
            type="text"
            placeholder="Title"
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-black"
          />
          <textarea
            placeholder="Description"
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-black resize-none"
            rows="3"
          ></textarea>
          <input
            type="number"
            placeholder="Price"
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-black"
          />
          <select
            name="Condition"
            className="p-3 border border-gray-300 rounded-md outline-none focus:border-black"
          >
            <option value="">Select Condition</option>
            <option value="Brand New">Brand New</option>
            <option value="Like New">Like New</option>
            <option value="Used">Used</option>
          </select>
          <button
            type="submit"
            className="mt-6 p-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition-colors"
          >
            Add Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
