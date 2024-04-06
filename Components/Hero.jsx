import React, { useState, useEffect } from "react";
import ScienceLogo from "../src/assets/Science Club New PNG logo.png";
import AICLogo from "../src/assets/aic.png";
import VIGYAAN from "../src/assets/VIGYAAN.png";
import Space from "../src/assets/space.mp4";
const MyVideo = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = viewportWidth < 640;

  // Custom styles for scaling
  const customScalingStyles = isSmallScreen
    ? { transform: "rotate(90deg) scaleX(2) scaleY(2)" }
    : {};

  return (
    <video autoPlay loop muted className="z-0" style={customScalingStyles}>
      <source src={Space} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="Home" className="relative">
      <div className="fixed z-50 w-screen">
        <nav
          className={`flex justify-between items-center text-white px-4 py-3 bg-opacity-80 backdrop-blur ${
            isScrolled ? "bg-gray-800" : "bg-opacity-0 backdrop-blur-none"
          }`}
        >
          {/* Navbar items */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#Home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#Speakers" className="hover:text-gray-300">
              Speakers
            </a>
            <a href="#Schedule" className="hover:text-gray-300">
              Schedule
            </a>
            <a href="#Sponsorship" className="hover:text-gray-300">
              Sponsorship
            </a>
            <a href="#About" className="hover:text-gray-300">
              About Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <svg
                className={`w-6 h-6 text-white transition-transform duration-300 transform ${
                  isOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen
                      ? "M6 18 18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Logo (on the right side) */}
          <div className="flex items-center">
            <a href="#Home">
              <img
                src={ScienceLogo}
                alt="Logo"
                className="w-12 h-12 sm:mx-4 sm:w-16 sm:h-16"
              />
            </a>
            <a href="#Home">
              <img
                src={AICLogo}
                alt="Logo"
                className="w-12 h-12 sm:mx-4 sm:w-16 sm:h-16"
              />
            </a>
          </div>

          {/* Mobile menu (shown on mobile screens) */}
          {isOpen && (
            <div className="md:hidden absolute top-16 rounded left-0 right-0 bg-gray-800 my-2 mt-6 mx-4 py-2 z-50 flex justify-end">
              <div className="flex flex-col w-full items-start">
                <a
                  href="#Home"
                  className="px-8 py-2 text-white hover:bg-gray-700"
                >
                  Home
                </a>
                <a
                  href="#Speakers"
                  className="px-8 py-2 text-white hover:bg-gray-700"
                >
                  Speakers
                </a>
                <a
                  href="#Schedule"
                  className="px-8 py-2 text-white hover:bg-gray-700"
                >
                  Schedule
                </a>
                <a
                  href="#Sponsorship"
                  className="px-8 py-2 text-white hover:bg-gray-700"
                >
                  Sponsorship
                </a>
                <a
                  href="#About"
                  className="px-8 py-2 text-white hover:bg-gray-700"
                >
                  About us
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Video section */}
      <div className="relative overflow-hidden h-[30em] xs:h-[2em] sm:h-auto bg-[#0c0c0c]">
        {/* Video */}
        {/* <video autoPlay loop muted className="w-full h-auto rotate-90 sm:rotate-360"> */}
        <MyVideo />

        {/* Overlay content (optional) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={VIGYAAN} className=" absolute z-10" />
        </div>
      </div>
    </section>
  );
}
