import React from "react";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import { GMAIL_ID, PHONE_NUMBER_1 } from "../utils/constants";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="footer-brand">
            <a href="#" class="logo">
              <img src="./assets/images/logo.svg" alt="swadestiny logo" />
            </a>

            <p class="footer-text">
            "Embark on a journey with SWADESTINY, where every destination is a chapter in your adventure. Explore captivating landscapes, cultural gems, and hidden wonders curated just for you. Your extraordinary journey begins here."
            </p>
          </div>

          <div class="footer-contact">
            <h4 class="contact-title">Contact Us</h4>

            <p class="contact-text">Feel free to contact and reach us !!</p>

            <ul>
              <li class="contact-item">
                <IoCallOutline />

                <a href="tel:+01123456790" class="contact-link">
                  {PHONE_NUMBER_1}
                </a>
              </li>

              <li class="contact-item">
                <IoMailOutline />

                <a href={`mailto:${GMAIL_ID}`} class="contact-link">
                  {GMAIL_ID}
                </a>
              </li>

              <li class="contact-item">
                <IoLocationOutline />

                <address>Namma Bengaluru</address>
              </li>
            </ul>
          </div>
          {false && (
            <div class="footer-form">
              <p class="form-text">
                Subscribe our newsletter for more update & news !!
              </p>

              <form action="" class="form-wrapper">
                <input
                  type="email"
                  name="email"
                  class="input-field"
                  placeholder="Enter Your Email"
                  required
                />

                <button type="submit" class="btn btn-secondary">
                  Subscribe
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <p class="copyright">
            &copy; 2023 <a href="">swadestiny</a>. All rights reserved
          </p>

          <ul class="footer-bottom-list">
            <li>
              <a href="#" class="footer-bottom-link">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" class="footer-bottom-link">
                Term & Condition
              </a>
            </li>

            <li>
              <a href="#" class="footer-bottom-link">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
