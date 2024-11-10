import React from "react";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col shadow-md p-3 rounded-sm items-center border-[0.5px] border-gray-100">
        <h1 className="text-2xl font-bold">SIGN UP</h1>
        <p className="font-thin">Create your account</p>
        <form action="POST" className="flex flex-col m-8">
          <input
            type="text"
            placeholder="Name"
            className="px-3 py-1 mx-2 my-1 border-gray-150 border-[1px] rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            className="px-3 py-1 mx-2 my-1 border-gray-150 border-[1px] rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="px-3 py-1 mx-2 my-1 border-gray-150 border-[1px] rounded-md"
          />
          <button className="bg-black text-white rounded-md px-3 py-1 mx-2 my-1">
            Sign Up
          </button>
          <p className="text-sm mb-2">
            Already have an account?{" "}
            <a href="" className="text-blue-500">
              Login
            </a>
          </p>
        </form>

        <p className="text-[0.8rem] w-[100%] text-center border-b-[1px] border-gray-400 leading-[0.1em] m-[10px 0 20px]">
          <span className="bg-white px-2">or</span>
        </p>
        <button className="flex justify-between items-center px-3 py-1 mx-2 my-5 border-gray-150 border-[1px] rounded-md">
          <FcGoogle className="mx-2" /> Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
