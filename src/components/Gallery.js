import React from 'react'


function FadeInSection(props) {
  const side=props.side
  const sign=props.sign
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
      className={`fade-in-section-${side}-${sign} ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Gallery = () => {
  return (
    <section class="gallery" id="gallery">
          <div class="container">
            <p class="section-subtitle">Photo Gallery</p>

            <h2 class="h2 section-title">Photo's From Travellers</h2>

            {/* <p class="section-text">
              Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
              nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
              tenetur, aptent.
            </p> */}

            

            <ul class="gallery-list">
              <li class="gallery-item">
              <FadeInSection side='y' sign='negative'>
                <figure class="gallery-image">
                  <img
                    src="./assets/images/gallery-3.png"
                    accept="image/*, .heic"
                    alt="Gallery image"
                  />
                </figure>
                </FadeInSection>
              </li>

              <li class="gallery-item">
              <FadeInSection side='x' sign='positive'>
                <figure class="gallery-image">
                  <img
                    src="./assets/images/gallery-2.jpg"
                    accept="image/*, .heic"
                    alt="Gallery image"
                  />
                </figure>
                </FadeInSection>
              </li>
              <li class="gallery-item">
              <FadeInSection side='x' sign='negative'>
                <figure class="gallery-image">
                  <img
                    src="./assets/images/gallery-1.jpg"
                    alt="Gallery image"
                  />
                </figure>
                </FadeInSection>
              </li>
              <li class="gallery-item">
              <FadeInSection side='x' sign='negative'>
                <figure class="gallery-image">
                  <img
                    src="./assets/images/gallery-6.jpg"
                    alt="Gallery image"
                  />
                </figure>
                </FadeInSection>
              </li>

              <li class="gallery-item">
              <FadeInSection side='y' sign='positive'>
                <figure class="gallery-image">
                  <img
                    src="./assets/images/gallery-4.jpg"
                    accept="image/*, .heic"
                    alt="Gallery image"
                  />
                </figure>
                </FadeInSection>
              </li>

              <li class="gallery-item">
              <FadeInSection side='x' sign='positive'>
                <figure class="gallery-image">
                  <img
                    src="./assets/images/gallery-5.jpg"
                    accept="image/*, .heic"
                    alt="Gallery image"
                  />
                </figure>
                </FadeInSection>
              </li>
            </ul>
          </div>
        </section>
  )
}

export default Gallery