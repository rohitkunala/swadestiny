import React from "react";
import PackageCard from "./PackageCard";

const Package = () => {
  return (
    <section class="package" id="package">
      <div class="container">
        <p class="section-subtitle">Popular Packages</p>

        <h2 class="h2 section-title">Checkout Our Packages</h2>

        <p class="section-text">
          "Explore our curated packages – gateways to extraordinary adventures
          that promise unforgettable moments and unparalleled experiences."
        </p>

        <ul class="package-list">
          <li>
            <PackageCard
              img="nature"
              title="Sun-Kissed Sanctuaries: Beaches and Temples Await"
              description="Indulge in the serenity of sun-kissed beaches and delve into the spiritual richness of ancient temples. Our destinations blend coastal bliss with cultural treasures, offering a harmonious retreat for body and soul."
              location="Gokarna"
              pax="6-12"
              duration="3D/4N"
              price="7999"
            />
          </li>
          <li>
            <PackageCard
              img="nature-2"
              title="Elevated Wonders: Mountains and Waterfalls Expedition"
              description="Embark on a breathtaking journey to explore towering peaks and cascading water wonders. From majestic mountains to enchanting waterfalls, our curated expedition promises awe-inspiring vistas at every turn."
              location="Chikmagulur"
              pax="6-12"
              duration="3D/4N"
              price="5999"
            />
          </li>
        </ul>
        <button class="btn btn-primary">View All Packages</button>
      </div>
    </section>
  );
};

export default Package;
