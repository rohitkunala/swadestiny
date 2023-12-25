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

        <div className="new-card-content">

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


        {/* <div style={{display:'flex',flexWrap:'wrap',height:60}}>
          <div className="new-card-content-arrow-left" style={{width:'38%'}}>

          </div>
          <div className="arrow" style={{width:'24%'}}>
            <div className="new-arrow" style={{width:'100%'}}>
            kuefh
            </div>

          </div>
          <div className="new-card-content-arrow-right" style={{width:'38%'}}>

          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PopularCard;
