"use client";
import React, { useState, useEffect } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const sliderData = [
  {
    url: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    if (slide === 0) setSlide(length - 1);
    else setSlide(slide - 1);
  };

  const nextSlide = () => {
    if (slide === length - 1) setSlide(0);
    else setSlide(slide + 1);
  };

  useEffect(() => {
    const preloadImages = () => {
      sliderData.forEach((item) => {
        new Image().src = item.url;
      });
    };
    preloadImages();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 relative flex justify-center items-center overflow-hidden">
      <BsFillArrowLeftCircleFill
        onClick={prevSlide}
        className="absolute top-1/2 left-8 text-3xl text-white cursor-pointer"
      />
      <BsFillArrowRightCircleFill
        onClick={nextSlide}
        className="absolute top-1/2 right-8 text-3xl text-white cursor-pointer"
      />

      {sliderData.map((item, index) => (
        <div
          key={index}
          className={
            index === slide
              ? "opacity-100 transition ease-in-out duration-300"
              : "opacity-0"
          }
        >
          {index === slide && (
            <img
              src={item.url}
              alt=""
              className="w-full h-full rounded-md object-cover"
            />
          )}
        </div>
      ))}
      <div className="absolute bottom-16 py-4 flex justify-center gap-3 w-full">
        {sliderData.map((s, i) => (
          <div
            onClick={() => {
              setSlide(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer ${
              i === slide ? "bg-white border border-gray-500" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
