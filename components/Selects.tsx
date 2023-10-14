import React from "react";
import { SelectsCard } from "@/components";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg="/borabora.jpg" text="Bora Bora" />
      <SelectsCard bg="/borabora2.jpg" text="Maldives" />
      <SelectsCard bg="/maldives.jpg" text="Antigua" />
      <SelectsCard bg="/maldives2.jpg" text="Cozumel" />
      <SelectsCard bg="/maldives3.jpg" text="Jamaica" />
      <SelectsCard bg="/keywest.jpg" text="Key West" />
    </div>
  );
};

export default Selects;
