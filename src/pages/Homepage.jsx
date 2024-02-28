import React from "react";
import Hero from "../components/Hero/Hero";
import Sections from "../components/Sections/Sections";
import Requirements from "../components/Requirements/Requirements";
import Support from "../components/Support/Support";

const Homepage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Sections />
      <Requirements />
      <Support />
    </div>
  );
};
export default Homepage;
