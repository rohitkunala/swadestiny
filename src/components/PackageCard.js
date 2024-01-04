import React from "react";
import {
  IoLocation,
  IoPeople,
  IoStar,
  IoStarOutline,
  IoTime,
} from "react-icons/io5";

const PackageCard = (props) => {
  const { img, title, description, duration, pax, location, price } = props;
  return (
    <div class="package-card">
      <figure class="card-banner">
        <img
          src={`./assets/images/${img}`}
          alt="Experience The Great Holiday On Beach"
          loading="lazy"
          style={{ width: 393, height: 316 }}
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

        <button class="btn btn-secondary">Book Now</button>
      </div>
    </div>
  );
};

export default PackageCard;
