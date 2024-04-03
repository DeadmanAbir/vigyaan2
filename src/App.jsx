import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "../Components/Hero";
// import Speakers from "../Components/Speakers";
import Package from "../Components/Package";
import Schedule from "../Components/Schedule";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Sponsors from "../Components/Sponsors.jsx";
import Speakers from "../Components/SpeakersTemp";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Speakers />
      <Schedule />
      <Sponsors />
      <Package />
      <About />

      <Footer />

    </>
  );
}

export default App;
