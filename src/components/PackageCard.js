import React from "react";
import {
  IoLocation,
  IoPeople,
  IoStar,
  IoStarOutline,
  IoTime,
} from "react-icons/io5";
import { WA_URL } from "../utils/constants";
import { isMobile } from "../utils/helpers";

const PackageCard = (props) => {
  let { img, title, description, duration, pax, location, price, id } = props;
  if (!title)
    title =
      id % 2 == 0
        ? "Sun-Kissed Sanctuaries: Beaches and Temples Await"
        : "Elevated Wonders: Mountains and Waterfalls Expedition";
  if (!description)
    description =
      id % 2 == 0
        ? "Indulge in the serenity of sun-kissed beaches and delve into the spiritual richness of ancient temples. Our destinations blend coastal bliss with cultural treasures, offering a harmonious retreat for body and soul."
        : "Embark on a breathtaking journey to explore towering peaks and cascading water wonders. From majestic mountains to enchanting waterfalls, our curated expedition promises awe-inspiring vistas at every turn.";
  return (
    <div class="package-card">
      <figure class="card-banner">
        <img
          src={`./assets/images/${img}`}
          alt="Experience The Great Holiday On Beach"
          loading="lazy"
          style={{ width: 393, height: isMobile() ? 270 : 350 }}
        />
      </figure>

      <div class="card-content">
        <h3 class="h3 card-title">{title}</h3>

        <p class="card-text">{description}</p>

        <ul class="card-meta-list">
          <li class="card-meta-item">
            <div class="meta-box">
              <IoTime name="time" />

              <p class="text">{duration}</p>
            </div>
          </li>

          <li class="card-meta-item">
            <div class="meta-box">
              <IoPeople name="people" />

              <p class="text">pax: {pax}</p>
            </div>
          </li>

          <li class="card-meta-item">
            <div class="meta-box">
              <IoLocation name="location" />

              <p class="text">{location}</p>
            </div>
          </li>
        </ul>
      </div>

      <div class="card-price">
        {false && (
          <div class="wrapper">
            <p class="reviews">(25 reviews)</p>

            <div class="card-rating">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStarOutline />
            </div>
          </div>
        )}

        <p class="price">
          ₹{price}
          <span>/ per person</span>
        </p>

        <button class="btn btn-secondary">
          <a
            href={`${WA_URL}?text=I would like to know more about trip to ${location} with a group of ${pax} people for ${duration}`}
          >
            Book Now
          </a>
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
