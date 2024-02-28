import React from "react";
import Hero from "../components/Hero/Hero";
import Sections from "../components/Sections/Sections";
import Requirements from "../components/Requirements/Requirements";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Sections />
      <Requirements />
    </div>
  );
};
export default Homepage;
