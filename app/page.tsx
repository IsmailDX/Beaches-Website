import React from "react";
import {
  Hero,
  Destinations,
  Search,
  Selects,
  Carousel,
  Footer,
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
