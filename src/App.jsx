import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Hero from "../Components/Hero";
import Speakers from "../Components/Speakers";
import Package from "../Components/Package";
import Accordion from "../Components/Accordian";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Speakers />
      <Package />
      <Accordion/>
    </>
  );
}

export default App;
