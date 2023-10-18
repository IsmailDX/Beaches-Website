"use client";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {loading ? (
        <LoadingScreen />
      ) : (
        <main>
          <Hero />
          <Destinations />
          <Search />
          <Selects />
          <Carousel />
          <Footer />
        </main>
      )}
    </main>
  );
};

export default page;
