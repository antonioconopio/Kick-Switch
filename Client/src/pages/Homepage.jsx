import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Carousel name="POPULAR" />
      <Carousel name="RECCOMENDED" />
      <Carousel name="NEW" />
    </>
  );
};

export default Homepage;
