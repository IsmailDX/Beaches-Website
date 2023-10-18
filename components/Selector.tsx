"use client";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const Selector = () => {
  const destinations = ["Grand Antigua", "Key West", "Maldives", "Cozumel"];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="w-full relative">
      <div
        className="bg-white w-full p-2 flex items-center justify-between border-2 border-gray-300 rounded whitespace-nowrap"
        onClick={() => setOpen(!open)}
      >
        {selected ? selected : "Select destination"}
        <BiChevronDown size={20} />
      </div>
      <ul
        className={`bg-white mt-2 absolute w-full overflow-y-auto max-h-40 border border-gray-300 rounded ${
          open ? "block" : "hidden"
        }`}
      >
        {destinations.map((destination, index) => (
          <li
            key={index}
            value={destination}
            className="p-2 text-sm hover:bg-gradient-to-r 
            from-[var(--primary-dark)] to-[var(--primary-light)] hover:text-white"
            onClick={() => {
              setOpen(false);
              setSelected(destination);
            }}
          >
            {destination}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
