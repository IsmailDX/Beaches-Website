"use client";
import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <nav>
      <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
        <div>
          <h1 className={logo ? "hidden" : "block"}>BEACHES.</h1>
        </div>
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>
            <a href="#Destinations">Destinations</a>
          </li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
        </ul>
        <div className="hidden md:flex">
          <BiSearch className="mr-2" size={20} />
          <BsPerson size={20} />
        </div>
        <div className="md:hidden z-10" onClick={handleNav}>
          {nav ? (
            <AiOutlineClose className="text-black" size={20} />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed text-black left-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col md:hidden
          transition-all ease-in-out duration-300 ${
            nav ? "top-0" : "-top-[100%]"
          }`}
        >
          <ul>
            <h1 className="mx-auto">BEACHES.</h1>
            <li className="border-b">Home</li>
            <li className="border-b">
              <a href="#Destinations">Destinations</a>
            </li>
            <li className="border-b">Travel</li>
            <li className="border-b">View</li>
            <li className="border-b">Book</li>
            <div className="flex flex-col">
              <button className="my-6">Search</button>
              <button>Account</button>
            </div>
            <div className="flex justify-between my-6">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
              <FaPinterest className="icon" />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
