import React from "react";
import PackageCard from "./PackageCard";
import { isMobile } from "../utils/helpers";
import { Carousel } from "antd";

const packages = [
  {
    title: "",
    description: "",
    location: "Ananthagiri hills",
    pax: "3-4",
    duration: "2D/1N",
    price: "1999",
    departure: "Hyderabad",
    img: "Ananthagiri1.jpg",
  },
  {
    title: "",
    description: "",
    location: "Nandi hills",
    pax: "3-4",
    duration: "1D",
    price: "999",
    departure: "Banglore",
    img: "Nandi1.jpg",
  },
  {
    title: "",
    description: "",
    location: "Maredumilli",
    pax: "3-4",
    duration: "2D/1N",
    price: "1999",
    departure: "Hyderabad",
    img: "Maredumilli.jpg",
  },
  {
    title: "",
    description: "",
    location: "Mysore",
    pax: "3-4",
    duration: "2D/1N",
    price: "1999",
    departure: "Banglore",
    img: "Mysore3.jpg",
  },
  //2D packs
  {
    title: "",
    description: "",
    location: "Gokarna & Murdeshwar",
    pax: "3-4",
    duration: "2D/1N",
    price: "4999",
    departure: "Banglore",
    img: "murdeshwar3.jpg",
  },
  {
    title: "",
    description: "",
    location: "Coorg",
    pax: "3-4",
    duration: "2D/1N",
    price: "3999",
    departure: "Banglore",
    img: "Coorg3.jpg",
  },
  {
    title: "",
    description: "",
    location: "Chikkamagaluru",
    pax: "3-4",
    duration: "2D/1N",
    price: "3999",
    departure: "Banglore",
    img: "Chikmagalur2.jpg",
  },
  {
    title: "",
    description: "",
    location: "Hampi",
    pax: "3-4",
    duration: "2D/1N",
    price: "3999",
    departure: "Banglore",
    img: "Hampi1.jpg",
  },
  {
    title: "",
    description: "",
    location: "Mangalore",
    pax: "3-4",
    duration: "2D/1N",
    price: "4999",
    departure: "Banglore",
    img: "Mangalore.jpg",
  },
  {
    title: "",
    description: "",
    location: "Kabini",
    pax: "3-4",
    duration: "2D/1N",
    price: "4499",
    departure: "Banglore",
    img: "Kabini.jpg",
  },
  {
    title: "",
    description: "",
    location: "Ooty",
    pax: "3-4",
    duration: "2D/1N",
    price: "4999",
    departure: "Banglore",
    img: "Ooty4.jpg",
  },
  {
    title: "",
    description: "",
    location: "Kodaikanal",
    pax: "3-4",
    duration: "2D/1N",
    price: "4999",
    departure: "Banglore",
    img: "Kodaikanal2.jpg",
  },
  {
    title: "",
    description: "",
    location: "Pondi",
    pax: "3-4",
    duration: "2D/1N",
    price: "4999",
    departure: "Banglore",
    img: "Pondi1.jpg",
  },
  {
    title: "",
    description: "",
    location: "Rameswaram",
    pax: "3-4",
    duration: "2D/1N",
    price: "5499",
    departure: "Banglore",
    img: "Rameswaram1.jpg",
  },
  {
    title: "",
    description: "",
    location: "Kanyakumari",
    pax: "3-4",
    duration: "2D/1N",
    price: "5499",
    departure: "Banglore",
    img: "Kanyakumari1.jpg",
  },

  //3D packs
  
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
