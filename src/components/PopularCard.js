import React from "react";
import { IoStar } from "react-icons/io5";

const PopularCard = (props) => {
  const { img, country, title, description } = props;
  const { src, alt } = img;
  return (
    <div class="popular-card">
      <figure class="card-img">
        <img src={src} alt={alt} loading="lazy" />
      </figure>

      <div class="card-content">
        <div class="card-rating">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>

        <p class="card-subtitle">
          <a href="#">{country}</a>
        </p>

        <h3 class="h4 card-title">
          <a href="#">{title}</a>
        </h3>

        <p class="card-text">{description}</p>
      </div>
    </div>
  );
};

export default PopularCard;
