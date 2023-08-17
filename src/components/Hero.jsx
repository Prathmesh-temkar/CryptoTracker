import { Link } from "react-router-dom";
import React from "react";

const Hero = () => {
  return (
    <div class="hero-image">
      <div class="hero-text">
        <h1>LATEST TRENDS & NEWS ABOUT CRYPTOCURRENCIES</h1>
        <a
          style={{
            margin: "40px",
            backgroundColor: "#001529",
            padding: "20px",
            color: "#fff",
            borderRadius: "20px",
          }}
          href="#news"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Hero;
