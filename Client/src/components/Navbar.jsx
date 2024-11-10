import { PiUserCircleFill } from "react-icons/pi";
import React from "react";
import logo from "../assets/KickSwitchLogo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const onToggleMenu = () => {
    setNav(!nav);
  };

  return (
    <nav className="sticky top-0 flex justify-between items-center font-thin mx-auto w-[100%] px-[2%] bg-white z-50">
      <NavLink to="/">
        <img
          src={logo}
          alt="Logo"
          className="size-40 hover:scale-125 transition-all cursor-pointer"
        />
      </NavLink>
      <input
        type="text"
        placeholder="Search"
        className="bg-white border border-gray-300 focus:border-black rounded-sm h-10 w-[50%] px-3 my-0 mx-10 text-center"
      />
      <ul className="md:flex md:items-center md:gap-4 md:text-xl p-0 m-0 hidden">
        <li className="px-5 hover:scale-125 transition-all cursor-pointer">
          <NavLink to="/buy">BUY</NavLink>
        </li>
        <li className="px-5 hover:scale-125 transition-all cursor-pointer">
          <NavLink to="/sell">SELL</NavLink>
        </li>
        <li className="px-5 hover:scale-125 transition-all cursor-pointer">
          <NavLink to="/trade">TRADE</NavLink>
        </li>
        <li>
          <NavLink to="/login">
            <PiUserCircleFill className="size-10 hover:scale-125 transition-all cursor-pointer" />
          </NavLink>
        </li>
      </ul>

      <div onClick={onToggleMenu} className="md:hidden flex items-center gap-6">
        {!nav ? (
          <IoIosClose className="close text-5xl cursor-pointer transition-all" />
        ) : (
          <RxHamburgerMenu className="burg text-3xl cursor-pointer transition-all" />
        )}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full bg-white z-50 font-thin ease-in-out duration-500 md:hidden p-4 flex flex-col items-center"
            : "fixed left-[-100%] md:hidden"
        }
      >
        <NavLink to="/">
          <img
            src={logo}
            alt="Logo"
            className="size-40 hover:scale-125 transition-all cursor-pointer"
          />
        </NavLink>
        <ul className="flex flex-col items-center gap-4 text-xl p-0 m-0">
          <li>
            <NavLink to="/login">
              <PiUserCircleFill className="size-10 hover:scale-125 transition-all cursor-pointer" />
            </NavLink>
          </li>
          <li className="px-5 hover:scale-125 transition-all cursor-pointer">
            <NavLink to="/buy">BUY</NavLink>
          </li>
          <li className="px-5 hover:scale-125 transition-all cursor-pointer">
            <NavLink to="/sell">SELL</NavLink>
          </li>
          <li className="px-5 hover:scale-125 transition-all cursor-pointer">
            <NavLink to="/trade">TRADE</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
