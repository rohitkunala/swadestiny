import React from "react";
import PopularCard from "./PopularCard";
import { Carousel } from "antd";
import { Link } from "react-router-dom";
import { isMobile } from "../utils/helpers";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section-x-positive ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const allDestinations = [
  {
    img: "./assets/images/munnar.jpg",
    country: "Kerala",
    title: "Wayanad | Munnar | Varakala",
    description: "Go Dive into Heaven",
  },
  {
    img: "./assets/images/hebbeyfalls.jpg",
    country: "Karnataka",
    title: "Chikmagulur | Coorg",
    description: "Heaven on Earth",
  },
  {
    img: "./assets/images/gokarna.jpg",
    country: "Karnataka",
    title: "Gokarna | Dandeli",
    description: "Siva's Own Place",
  },
  {
    img: "./assets/images/alleppey.jpg",
    country: "Kerala",
    title: "Kochi | Alleppey",
    description: "",
  },
  {
    img: "./assets/images/kodaikanal.jpg",
    country: "Tamil Nadu",
    title: "Ooty | Kodaikanal",
    description: "",
  },
  {
    img: "./assets/images/pondi.jpg",
    country: "Tamil Nadu",
    title: "Pondicherry",
    description: "",
  },
  {
    img: "./assets/images/araku.jpg",
    country: "Andhra Pradesh",
    title: "Araku | Lambasingi",
    description: "",
  },
  {
    img: "./assets/images/rameshwaram.jpg",
    country: "Tamil Nadu",
    title: "Rameshwaram | Kanyakummari",
    description: "",
  },
  {
    img: "./assets/images/goa.jpg",
    country: "Goa",
    title: "",
    description: "",
  },
];

const Popular = () => {
  return (
    <div className="container-img">
      {/* <div>
        <img
          className="parallax-img"
          src="./assets/images/newmain.png"
          alt="Gallery image"
        />
      </div> */}
      <section class="popular" id="destination">
        <div class="container">
          <p class="section-subtitle">Uncover place</p>

          <h2 class="h2 section-title">Popular destinations</h2>

          <p class="section-text">
            "Discover hidden gems and breathtaking landscapes as you explore our
            curated collection of nature escapes, each destination a testament
            to the Earth's boundless beauty."
          </p>

          <Carousel
            class="popular-list"
            autoplay
            slidesToShow={isMobile() ? 1 : 3}
          >
            {allDestinations.map((item, index) => {
              if (index == 0) {
                return (
                  <div style={{ margin: 30 }}>
                    <PopularCard
                      img={{
                        src: item.img,
                        alt: "",
                      }}
                      country={item.country}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                );
              } else {
                return (
                  <div style={{ margin: 30 }}>
                    <FadeInSection>
                      <PopularCard
                        img={{
                          src: item.img,
                          alt: "",
                        }}
                        country={item.country}
                        title={item.title}
                        description={item.description}
                      />
                    </FadeInSection>
                  </div>
                );
              }
            })}
            {/* <div>
              <FadeInSection>
                <PopularCard
                  img={{
                    src: "./assets/images/munnar.jpg",
                    alt: "",
                  }}
                  country="Kerala"
                  title="Wayanad | Munnar | Varakala"
                  description="Go Dive into Heaven"
                />
              </FadeInSection>
            </div> */}
            {/* <div>
              <FadeInSection>
                <PopularCard
                  img={{
                    src: "./assets/images/hebbeyfalls.jpg",
                    alt: "",
                  }}
                  country="Karnataka"
                  title="Chikmagulur | Coorg"
                  description="Heaven on Earth"
                />
              </FadeInSection>
            </div>
            <div>
              <FadeInSection>
                <PopularCard
                  img={{
                    src: "./assets/images/gokarna.jpg",
                    alt: "",
                  }}
                  country="Karnataka"
                  title="Gokarna | Dandeli"
                  description="Siva's Own Place"
                />
              </FadeInSection>
            </div> */}

            {/* <div>
        <h3 style={contentStyle}>4</h3>
      </div> */}
          </Carousel>
          {/* <ul class="popular-list">
            <li>
              <FadeInSection>
                <PopularCard
                  img={{
                    src: "./assets/images/munnar.jpg",
                    alt: "",
                  }}
                  country="Kerala"
                  title="Wayanad | Munnar | Varakala"
                  description="Go Dive into Heaven"
                />
              </FadeInSection>
            </li>
            <li>
              <FadeInSection>
                <PopularCard
                  img={{
                    src: "./assets/images/hebbeyfalls.jpg",
                    alt: "",
                  }}
                  country="Karnataka"
                  title="Chikmagulur | Coorg"
                  description="Heaven on Earth"
                />
              </FadeInSection>
            </li>
            <li>
              <FadeInSection>
                <PopularCard
                  img={{
                    src: "./assets/images/gokarna.jpg",
                    alt: "",
                  }}
                  country="Karnataka"
                  title="Gokarna | Dandeli"
                  description="Siva's Own Place"
                />
              </FadeInSection>
            </li>
          </ul> */}
          {/* <button class="btn btn-primary"><Link to={'./destinations'}>More destintions</Link></button> */}
        </div>
      </section>
    </div>
  );
};

export default Popular;
