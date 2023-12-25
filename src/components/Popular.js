import React from "react";
import PopularCard from "./PopularCard";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
const Popular = () => {
  return (
    <section class="popular" id="destination">
      <div class="container">
        <p class="section-subtitle">Uncover place</p>

        <h2 class="h2 section-title">Popular destinations</h2>

        <p class="section-text">
          "Discover hidden gems and breathtaking landscapes as you explore our curated collection of nature escapes, each destination a testament to the Earth's boundless beauty."
        </p>

        <ul class="popular-list">
          <li>
            <FadeInSection>
            <PopularCard
              img={{
                src: "./assets/images/munnar.jpg",
                alt: "San miguel, italy",
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
                alt: "San miguel, italy",
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
                alt: "San miguel, italy",
              }}
              country="Karnataka"
              title="Gokarna | Dandeli"
              description="Siva's Own Place"
            />
            </FadeInSection>
          </li>
        </ul>
        <button class="btn btn-primary">More destintion</button>
      </div>
    </section>
  );
};

export default Popular;
