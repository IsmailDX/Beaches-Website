"use client";
import React, { useEffect, useState } from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Selector } from "./index";

const Search = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  // Function to format the date as "yyyy-MM-dd"
  const formatDate = (date: Date) => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  // Function to get today's date in the desired format
  const getTodayDate = () => {
    const today = new Date();
    return formatDate(today);
  };

  useEffect(() => {
    // Set the default values to today's date
    const today = getTodayDate();
    setCheckInDate(today);
    setCheckOutDate(today);
  }, []);

  // Event handler to set the check-in date
  const handleCheckInChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCheckInDate(e.target.value);
  };

  // Event handler to set the check-out date
  const handleCheckOutChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCheckOutDate(e.target.value);
  };

  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
        <p className="py-4">
          Come experience the very pinnacle of luxury Caribbean all-inclusive
          vacations for couples at BEACHES Resorts. Our luxury beach resorts,
          set along the most gorgeous tropical settings and exquisite beaches in
          Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
          Curaçao, feature unlimited gourmet dining, unique bars serving premium
          liquors and wines, and every land and water sport, including
          complimentary green fees at our golf resorts and certified scuba
          diving at most resorts. If you are planning a wedding, BEACHES is the
          leader in Caribbean destination weddings and honeymoon packages.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="uppercase py-2">Leading Service</h3>
              <p className="uppercase py-1 px-2">
                All-inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="uppercase py-2">Leading Service</h3>
              <p className="uppercase py-1 px-2">
                All-inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border text-center">
        <div>
          <p className="uppercase pt-2">Get an Addition 10% off</p>
          <p className="uppercase py-4">12 hours left</p>
          <p className="uppercase bg-gray-800 text-gray-200 py-2">
            book now and save
          </p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label htmlFor="destination">Destination</label>
            <Selector />
          </div>
          <div className="flex flex-col my-4">
            <label htmlFor="check-in">Check-In</label>
            <input
              id="check-in"
              type="date"
              value={checkInDate}
              onChange={handleCheckInChange}
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="check-out">Check-Out</label>
            <input
              id="check-out"
              type="date"
              value={checkOutDate}
              onChange={handleCheckOutChange}
            />
          </div>

          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
