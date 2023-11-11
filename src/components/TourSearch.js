import React from "react";
import {
  IoCalendarClearSharp,
  IoLocationSharp,
  IoPeople,
  IoSearch,
} from "react-icons/io5";
import { GiMountainClimbing } from "react-icons/gi";

const TourSearch = () => {
  return (
    <section class="tour-search">
      <div class="container">
        <form action="" class="tour-search-form">
          <div class="input-wrapper">
            <label for="destination" class="input-label">
              Search Destination*
            </label>

            <input
              type="text"
              name="destination"
              id="destination"
              required
              placeholder="Enter Destination"
              class="input-field"
            />
          </div>

          <div class="input-wrapper">
            <label for="people" class="input-label">
              Pax Number*
            </label>

            <input
              type="number"
              name="people"
              id="people"
              required
              placeholder="No.of People"
              class="input-field"
            />
          </div>

          <div class="input-wrapper">
            <label for="checkin" class="input-label">
              Checkin Date**
            </label>

            <input
              type="date"
              name="checkin"
              id="checkin"
              required
              class="input-field"
            />
          </div>

          <div class="input-wrapper">
            <label for="checkout" class="input-label">
              Checkout Date*
            </label>

            <input
              type="date"
              name="checkout"
              id="checkout"
              required
              class="input-field"
            />
          </div>

          <button type="submit" class="btn btn-secondary">
            Inquire now
          </button>
        </form>
      </div>
    </section>
  );
};

export const ShowCaseSearch = () => {
  return (
    <div class="showcase-search">
      <div class="filters">
        <div class="filter">
          <div class="search-icon">
            <IoLocationSharp />
          </div>
          <div class="search-text">
            <h4>Location</h4>
            <h2>Explore nearby </h2>
          </div>
        </div>
        <div class="filter">
          <div class="search-icon">
            {/* <img src="/Imgs/icons/activities.png" alt="" /> */}
            <GiMountainClimbing />
          </div>
          <div class="search-text">
            <h4>Activity</h4>
            <h2>All Activities</h2>
          </div>
        </div>
        <div class="filter">
          <div class="search-icon">
            <IoCalendarClearSharp />
          </div>
          <div class="search-text">
            <h4>When</h4>
            <h2>Chose a date</h2>
          </div>
        </div>
        <div class="filter">
          <div class="search-icon">
            <IoPeople />
          </div>
          <div class="search-text">
            <h4>Guests</h4>
            <h2>1 guest</h2>
          </div>
        </div>
      </div>
      <div class="search-button-icon">
        <IoSearch />
      </div>
    </div>
  );
};

export default TourSearch;
