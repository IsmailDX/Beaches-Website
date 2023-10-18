import React, { useEffect, useState } from "react";
import {
  Hero,
  Destinations,
  Search,
  Selects,
  Carousel,
  Footer,
  LoadingScreen,
} from "@/components";

const page = () => {
  return (
    <main>
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <Carousel />
      <Footer />
    </main>
  );
};

export default page;
