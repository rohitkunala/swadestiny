import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TourSearch from "./components/TourSearch";
import Popular from "./components/Popular";
import Package from "./components/Package";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App"></div>
      <Header />
      <Hero />
      <TourSearch />
      <Popular />
      <Package />
      <Gallery />
      <Contact />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
