import React from "react";
import PopularCard from "./PopularCard";

const Popular = () => {
  return (
    <section class="popular" id="destination">
      <div class="container">
        <p class="section-subtitle">Uncover place</p>

        <h2 class="h2 section-title">Popular destination</h2>

        <p class="section-text">
          "Discover hidden gems and breathtaking landscapes as you explore our curated collection of nature escapes, each destination a testament to the Earth's boundless beauty."
        </p>

        <ul class="popular-list">
          <li>
            <PopularCard
              img={{
                src: "./assets/images/popular-1.jpg",
                alt: "San miguel, italy",
              }}
              country="Kerala"
              title="Wayanad | Munnar | Varakala"
              description="Go Dive into Heaven"
            />
          </li>
          <li>
            <PopularCard
              img={{
                src: "./assets/images/popular-2.jpg",
                alt: "San miguel, italy",
              }}
              country="Karnataka"
              title="Chikmagulur | Coorg"
              description="Heaven on Earth"
            />
          </li>
          <li>
            <PopularCard
              img={{
                src: "./assets/images/popular-1.jpg",
                alt: "San miguel, italy",
              }}
              country="Karnataka"
              title="Gokarna | Dandeli"
              description="Siva's Own Place"
            />
          </li>
        </ul>
        <button class="btn btn-primary">More destintion</button>
      </div>
    </section>
  );
};

export default Popular;
