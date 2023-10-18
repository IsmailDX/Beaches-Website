"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { LoadingScreen } from ".";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {
        <div className="w-full h-screen relative">
          <video
            src="/beachVid.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gray-900/40">
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center p-4">
              <h1 className="text-white">First Class Travel</h1>
              <h2 className="text-white py-4">Top 1% Locations Worldwide</h2>
              <form
                className="flex justify-between items-center max-w-[700px] mx-auto
               w-full border p-1 rounded-md text-black bg-gray-100/90 overflow-hidden"
              >
                <div>
                  <input
                    className="bg-transparent w-auto sm:w-[400px] focus:outline-none"
                    type="text"
                    placeholder="Search Destinations"
                  />
                </div>
                <div>
                  <button>
                    <AiOutlineSearch
                      size={20}
                      className="icon"
                      style={{ color: "white" }}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Hero;
