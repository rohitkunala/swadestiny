import { Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TourSearch from "./components/TourSearch";
import Popular from "./components/Popular";
import Package from "./components/Package";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


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

function App() {
  return (
    <>
      <div className="App"></div>
      <Header />
      <Hero />
      <FadeInSection><TourSearch /></FadeInSection>
      <FadeInSection>
      <Popular />
      </FadeInSection>
      <Package />
      <Gallery />
      <Contact />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
