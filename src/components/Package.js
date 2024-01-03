import React from "react";
import PackageCard from "./PackageCard";
import { isMobile } from "../utils/helpers";
import { Carousel } from "antd";

const packages = [
  {
    img: "nature",
    title: "Sun-Kissed Sanctuaries: Beaches and Temples Await",
    description:
      "Indulge in the serenity of sun-kissed beaches and delve into the spiritual richness of ancient temples. Our destinations blend coastal bliss with cultural treasures, offering a harmonious retreat for body and soul.",
    location: "Gokarna",
    pax: "6-12",
    duration: "3D/4N",
    price: "7999",
  },
  {
    img: "nature-2",
    title: "Elevated Wonders: Mountains and Waterfalls Expedition",
    description:
      "Embark on a breathtaking journey to explore towering peaks and cascading water wonders. From majestic mountains to enchanting waterfalls, our curated expedition promises awe-inspiring vistas at every turn.",
    location: "Chikmagulur",
    pax: "6-12",
    duration: "3D/4N",
    price: "5999",
  },
  {
    img: "nature-2",
    title: "Elevated Wonders: Mountains and Waterfalls Expedition",
    description:
      "Embark on a breathtaking journey to explore towering peaks and cascading water wonders. From majestic mountains to enchanting waterfalls, our curated expedition promises awe-inspiring vistas at every turn.",
    location: "Chikmagulur",
    pax: "6-12",
    duration: "3D/4N",
    price: "5999",
  },
];

const twoPackagesEachTime = packages.reduce((acc, currVal, currIdx) => {
  if (currIdx % 2 == 0) acc.push(packages.slice(currIdx, currIdx + 2));
  return acc;
}, []);
console.log({ twoPackagesEachTime });

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
        {isMobile() ? (
          <Carousel class="popular-list" slidesToShow={1}>
            {packages.map((_package) => (
              <PackageCard {..._package} />
            ))}
          </Carousel>
        ) : (
          <Carousel class="popular-list" slidesToShow={1}>
            {twoPackagesEachTime.map((twoPackages) => (
                <ul class="package-list">
                  <li>
                    <PackageCard {...twoPackages[0]} />
                  </li>
                  {twoPackages?.[1] && (
                    <li>
                      <PackageCard {...twoPackages?.[1]} />
                    </li>
                  )}
                </ul>
            ))}
          </Carousel>
        )}
        {false && <button class="btn btn-primary">View All Packages</button>}
      </div>
    </section>
  );
};

export default Package;
