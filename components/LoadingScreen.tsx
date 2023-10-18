import React from "react";

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="flex space-x-2 justify-center items-center bg-white h-screen ">
        <div className="h-8 w-8 bg-[#5651e5] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-[#709dff] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-blue-700 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
