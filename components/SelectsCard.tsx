import React from "react";
import { CardProps } from "@/types";

const SelectsCard = ({ bg, text }: CardProps) => {
  return (
    <div className="relative">
      <img src={bg} alt="Maldives" className="w-full h-full object-cover" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-xl absolute font-bold text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
