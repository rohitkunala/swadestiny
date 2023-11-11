import React from "react";
import { ShowCaseSearch } from "./TourSearch";

const Hero = () => {
  return (
    <section class="hero" id="home">
      <div class="container">
        <h2 class="h1 hero-title">Journey to explore world</h2>

        <p class="hero-text">
          Let's make your journey memorable with us. We are here to let you know about the best places to visit in India. Explore the huge collection of places and choose your favourite one. We are here to help you to make your journey memorable.
        </p>

        <div class="btn-group">
          <button class="btn btn-primary">Learn more</button>

          <button class="btn btn-secondary">Book now</button>
        </div>
      </div>
      <ShowCaseSearch />
    </section>
  );
};

export default Hero;
