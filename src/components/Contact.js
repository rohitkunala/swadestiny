import React from "react";
import { PHONE_NUMBER_1 } from "../utils/constants";

const Contact = () => {
  return (
    <section class="cta" id="contact">
      <div class="container">
        <div class="cta-content">
          <p class="section-subtitle">Call To Action</p>

          <h2 class="h2 section-title">
            Ready For Unforgatable Travel. Remember Us!
          </h2>

          <p class="section-text">
            "Connect with us to transform your travel dreams into reality. Our
            team at SWADESTINY is dedicated to crafting wonderful experiences
            tailored to your desires. Reach out and let's embark on your next
            unforgettable journey together."
          </p>
        </div>

        <button
          class="btn btn-secondary"
          onClick={() =>
            window.open(
              `https://wa.me/${PHONE_NUMBER_1}?text=Hi there! Would like to know more about Swadestiny..`
            )
          }
        >
          Contact Us !
        </button>
      </div>
    </section>
  );
};

export default Contact;
