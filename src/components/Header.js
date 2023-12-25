import React, { useEffect, useRef } from "react";
import {
  IoCallOutline,
  IoCloseOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoYoutube,
  IoMenuOutline,
  IoSearch,
  IoChevronUpOutline,
  IoLogoInstagram,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { INSTA_URL, FB_URL, WA_URL, PHONE_NUMBER_1 } from "../utils/constants";

const HeaderTop = () => {
  const overlayRef = useRef(null);
  const navOpenBtnRef = useRef(null);
  const navbarRef = useRef(null);
  const navCloseBtnRef = useRef(null);
  const navLinksRef = useRef(null);

  const headerRef = useRef(null); //document.querySelector("[data-header]");
  const goTopBtnRef = useRef(null); //document.querySelector("[data-go-top]");

  const onClickHandler = () => {
    navbarRef.current.classList.toggle("active");
    overlayRef.current.classList.toggle("active");
  };

  useEffect(() => {
    function stickyHeader() {
      if (window.scrollY >= 200) {
        headerRef.current?.classList.add("active");
        goTopBtnRef.current?.classList.add("active");
      } else {
        headerRef.current?.classList.remove("active");
        goTopBtnRef.current?.classList.remove("active");
      }
    }

    window.addEventListener("scroll", stickyHeader);

    return () => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return (
    <div class="header" ref={headerRef}>
      <div
        class="overlay"
        data-overlay
        ref={overlayRef}
        onClick={onClickHandler}
      ></div>
      <div class="header-top">
        <div class="container">
          <a href={`tel:${PHONE_NUMBER_1}`} class="helpline-box">
            <div class="icon-box">
              <IoCallOutline name="call-outline" />
            </div>

            <div class="wrapper">
              <p class="helpline-title">For Further Inquires :</p>

              <p class="helpline-number">{PHONE_NUMBER_1}</p>
            </div>
          </a>

          <a href="#" class="logo">
            <img src="./assets/images/swadestiny_logo.png" alt="Swadestiny logo" className="w-10 sm:w-14" />
          </a>

          <div class="header-btn-group">
            <button class="search-btn" aria-label="Search">
              <IoSearch name="search" />
            </button>

            <button
              class="nav-open-btn"
              aria-label="Open Menu"
              data-nav-open-btn
              ref={navOpenBtnRef}
              onClick={onClickHandler}
            >
              <IoMenuOutline name="menu-outline" />
            </button>
          </div>
        </div>
      </div>

      <div class="header-bottom">
        <div class="container">
          <ul class="social-list">
            <li>
              <a href={INSTA_URL} target="_blank" class="social-link">
                <IoLogoInstagram name="logo-instagram" />
              </a>
            </li>
            <li>
              <a href={FB_URL} target="_blank" class="social-link">
                <IoLogoFacebook name="logo-facebook" />
              </a>
            </li>
            <li>
              <a href={WA_URL} target="_blank" class="social-link">
                <IoLogoWhatsapp name="logo-whatsapp" />
              </a>
            </li>

            {/* <li>
              <a href="#" class="social-link">
                <IoLogoTwitter name="logo-twitter" />
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <IoLogoYoutube name="logo-youtube" />
              </a>
            </li> */}
          </ul>

          <nav class="navbar" data-navbar ref={navbarRef}>
            <div class="navbar-top">
              <a href="#" class="logo">
                <img
                  src="./assets/images/swadestiny_logo.png"
                  alt="Swadestiny logo"
                />
              </a>

              <button
                class="nav-close-btn"
                aria-label="Close Menu"
                data-nav-close-btn
                ref={navCloseBtnRef}
                onClick={onClickHandler}
              >
                <IoCloseOutline name="close-outline" />
              </button>
            </div>

            <ul class="navbar-list">
              <li>
                <a href="#home" class="navbar-link" data-nav-link>
                  home
                </a>
              </li>

              <li>
                <a href="#" class="navbar-link" data-nav-link>
                  about us
                </a>
              </li>

              <li>
                <a href="#destination" class="navbar-link" data-nav-link>
                  destination
                </a>
              </li>

              <li>
                <a href="#package" class="navbar-link" data-nav-link>
                  packages
                </a>
              </li>

              <li>
                <a href="#gallery" class="navbar-link" data-nav-link>
                  gallery
                </a>
              </li>

              <li>
                <a href="#contact" class="navbar-link" data-nav-link>
                  contact us
                </a>
              </li>
            </ul>
          </nav>

          <button class="btn btn-primary">Book Now</button>
        </div>
      </div>
      <a href="#top" class="go-top" data-go-top ref={goTopBtnRef}>
        <IoChevronUpOutline />
      </a>
    </div>
  );
};
const Header = () => {
  return (
    <div>
      <HeaderTop />
    </div>
  );
};

export default Header;
