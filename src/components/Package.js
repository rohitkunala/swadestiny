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
  {
    title: "",
    description: "",
    location: "Goa",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Goa2.jpg",
  },

  {
    title: "",
    description: "",
    location: "Ooty",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Ooty1.jpg",
  },

  {
    title: "",
    description: "",
    location: "Kodaikanal",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Kodaikanal1.jpg",
  },

  {
    title: "",
    description: "",
    location: "Pondi",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Pondi2.jpg",
  },

  {
    title: "",
    description: "",
    location: "Araku",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Hyderabad",
    img: "Araku2.jpg",
  },

  {
    title: "",
    description: "",
    location: "Wayanad",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Wayanad3.jpg",
  },

  {
    title: "",
    description: "",
    location: "Munnar",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Munnar3.jpg",
  },

  {
    title: "",
    description: "",
    location: "Kochi",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Kochi1.jpg",
  },

  {
    title: "",
    description: "",
    location: "Chikkamagaluru",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Chikmagalur1.jpg",
  },

  {
    title: "",
    description: "",
    location: "Hampi",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Hampi2.jpg",
  },

  {
    title: "",
    description: "",
    location: "Coorg",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Coorg1.jpg",
  },

  {
    title: "",
    description: "",
    location: "Coorg & Chikmangulur",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Coorg2.jpg",
  },

  {
    title: "",
    description: "",
    location: "Mysore & Coorg",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Mysore2.jpg",
  },

  {
    title: "",
    description: "",
    location: "Ooty & Kodaikanal",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Ooty3.jpg",
  },

  {
    title: "",
    description: "",
    location: "Rameswaram & Kanyakumari",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Rameswaram2.jpg",
  },

  {
    title: "",
    description: "",
    location: "Araku & Lambasingi",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Hyderabad",
    img: "Araku3.jpg",
  },

  {
    title: "",
    description: "",
    location: "Alleppey & Varkala",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Varkala2.jpg",
  },

  {
    title: "",
    description: "",
    location: "Alleppey & Kochi",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Alleppey2.jpg",
  },

  {
    title: "",
    description: "",
    location: "Varkala & Munnar",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Varkala1.jpg",
  },

  {
    title: "",
    description: "",
    location: "Kochi & Munnar",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Munnar3.jpg",
  },

  {
    title: "",
    description: "",
    location: "Kochi & Varkala",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Kochi1.jpg",
  },

  {
    title: "",
    description: "",
    location: "Gokarna & Murudheswar",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Gokarna1.jpg",
  },

  {
    title: "",
    description: "",
    location: "Gokarna & Dhandeli",
    pax: "3-4",
    duration: "3D/2N",
    price: "7999",
    departure: "Banglore",
    img: "Gokarna3.jpg",
  },

  //4D packs
  {
    title: "",
    description: "",
    location: "Gokarna, Murudheswar, Dhandeli & Jog falls",
    pax: "3-4",
    duration: "4D/3N",
    price: "12999",
    departure: "Banglore",
    img: "Jogfalls.jpg",
  },
  {
    title: "",
    description: "",
    location: "Coorg & Chikkamagaluru",
    pax: "3-4",
    duration: "4D/3N",
    price: "11999",
    departure: "Banglore",
    img: "Chikmagalur3.jpg",
  },
  {
    title: "",
    description: "",
    location: "Hampi & Chikmangulur",
    pax: "3-4",
    duration: "4D/3N",
    price: "11999",
    departure: "Banglore",
    img: "Hampi4.jpg",
  },
  {
    title: "",
    description: "",
    location: "Shivmoga & Chikkmagaluru",
    pax: "3-4",
    duration: "4D/3N",
    price: "11999",
    departure: "Banglore",
    img: "Chikmagalur4.jpg",
  },
  {
    title: "",
    description: "",
    location: "Wayanad & Munnar",
    pax: "10-12",
    duration: "4D/3N",
    price: "12999",
    departure: "Banglore",
    img: "Wayanad2.jpg",
  },
  {
    title: "",
    description: "",
    location: "Alleppey & Varkala & Munnar",
    pax: "3-4",
    duration: "4D/3N",
    price: "13999",
    departure: "Cochin",
    img: "Alleppey1.jpg",
  },
  {
    title: "",
    description: "",
    location: "Alleppey & Varkala & Munnar",
    pax: "10-12",
    duration: "4D/3N",
    price: "12999",
    departure: "Cochin",
    img: "Alleppey4.jpg",
  },
  {
    title: "",
    description: "",
    location: "Munnar & Kochi & Alleppey",
    pax: "3-4",
    duration: "4D/3N",
    price: "13999",
    departure: "Cochin",
    img: "Kochi4.jpg",
  },
  {
    title: "",
    description: "",
    location: "Munnar & Kochi & Alleppey",
    pax: "10-12",
    duration: "4D/3N",
    price: "12999",
    departure: "Cochin",
    img: "Munnar5.jpg",
  },
  {
    title: "",
    description: "",
    location: "Kochi & Alleppey & Varkala",
    pax: "3-4",
    duration: "4D/3N",
    price: "13999",
    departure: "Cochin",
    img: "Varkala3.jpg",
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
            {packages.map((_package, id) => (
              <PackageCard {...{ ..._package, id }} />
            ))}
          </Carousel>
        ) : (
          <Carousel class="popular-list" slidesToShow={1}>
            {twoPackagesEachTime.map((twoPackages, id) => {
              if (id !== 0) id *= 2;
              return (
                <ul class="package-list">
                  <li>
                    <PackageCard {...{ ...twoPackages[0], id }} />
                  </li>
                  {twoPackages?.[1] && (
                    <li>
                      <PackageCard {...{ ...twoPackages?.[1], id: id + 1 }} />
                    </li>
                  )}
                </ul>
              );
            })}
          </Carousel>
        )}
        {false && <button class="btn btn-primary">View All Packages</button>}
      </div>
    </section>
  );
};

export default Package;
