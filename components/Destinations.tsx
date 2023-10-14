import React from "react";
import BoraBora from "../public/borabora.jpg";
import BoraBora2 from "../public/borabora2.jpg";
import Maldives from "../public/maldives.jpg";
import Maldives2 from "../public/maldives2.jpg";
import KeyWest from "../public/keywest.jpg";
import Image from "next/image";

const Destinations = () => {
  return (
    <div className="max-w-[1240px] mx-autp py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <Image
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={BoraBora}
          alt="Borabora"
        />
        <Image
          className="w-full h-full object-cover"
          src={BoraBora2}
          alt="BoraBora2"
        />
        <Image
          className="w-full h-full object-cover"
          src={Maldives}
          alt="Maldives"
        />
        <Image
          className="w-full h-full object-cover"
          src={Maldives2}
          alt="Maldives2"
        />
        <Image
          className="w-full h-full object-cover"
          src={KeyWest}
          alt="KeyWest"
        />
      </div>
    </div>
  );
};

export default Destinations;
