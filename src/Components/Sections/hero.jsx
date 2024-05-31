import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <section id="home">
      <div className="title">
      <div className="orange-circle" />
        <h1>
          Discover <br />
          Most Suitable <br />
          Properties
        </h1>
      </div>

      <div className="hero-right">
        <div className="image-container">
          <img src="./rent-sign.png" alt="" />
        </div>
      </div>
    </section>
  );
};
