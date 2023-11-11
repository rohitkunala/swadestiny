import React from "react";
import {
  IoCalendarClearSharp,
  IoLocationSharp,
  IoPeople,
  IoSearch,
} from "react-icons/io5";
import { GiMountainClimbing } from "react-icons/gi";
import { PHONE_NUMBER_1 } from "../utils/constants";

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
    <form
      class="showcase-search"
      onSubmit={(e) => {
        e.preventDefault();
        const location = e.target[0].value;
        const activity = e.target[1].value;
        const date = e.target[2].value;
        const guests = e.target[3].value;
        const data = { location, activity, date, guests };
        console.log({ data });
        window.open(
          `https://wa.me/${PHONE_NUMBER_1}?text=Hello Swadestiny, I would like start from ${location} interested for ${activity} on ${date} for ${guests} members`, "_blank"
        );
      }}
    >
      <div class="filters">
        <div class="filter">
          <div class="search-icon">
            <IoLocationSharp />
          </div>
          <div class="search-text">
            {/* <h4>Location</h4> */}
            {/* <div class="relative z-0 w-full mb-5"> */}

            <select
              placeholder="Location"
              name="location"
              id="location"
              class="text-white pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-white border-gray-200"
            >
              <option value="" default>
                Location
              </option>
              <option value="bengaluru">Bengaluru</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </div>
        </div>
        <div class="filter">
          <div class="search-icon">
            <GiMountainClimbing />
          </div>
          <div class="search-text">
            {/* <h4>Activity</h4>
              <h2>All Activities</h2> */}
            <select
              name="activity"
              id="activity"
              class="text-white pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-white border-gray-200"
            >
              <option value="" disabled selected>
                Activity
              </option>
              <option value="trekking">Trekking</option>
              <option value="beach">Beach</option>
            </select>
          </div>
        </div>
        <div class="filter">
          <div class="search-icon">
            <IoCalendarClearSharp />
          </div>
          <div class="search-text">
            {/* <h4>When</h4>
              <h2>Chose a date</h2> */}
            <input
              type="date"
              placeholder="When"
              class="text-white w-36 pb-2 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-white border-gray-200"
            />
          </div>
        </div>
        <div class="filter" flex>
          <div class="search-icon">
            <IoPeople />
          </div>
          <div class="search-text">
            {/* <h4>Guests</h4>
              <h2>1 guest</h2> */}
            <input
              type="text"
              placeholder="No. of Guests"
              class="text-white w-28 pb-2 inline px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-white border-gray-200"
            />
          </div>
        </div>
      </div>
      <button class="search-button-icon">
        <IoSearch />
      </button>
    </form>
  );
};

export default TourSearch;
