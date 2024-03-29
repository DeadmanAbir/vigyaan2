import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 640); // Adjust the breakpoint as needed
      };
  
      checkScreenSize();
  
      const handleResize = () => {
        checkScreenSize();
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white -z-30">
      <header className="absolute top-0 left-0 flex justify-between items-center p-4 w-[100vw]">
        <div className="flex items-center space-x-4">
          {isSmallScreen ? (
            <div className="cursor-pointer flex justify-center align-middle " onClick={toggleMenu}>
              <AiOutlineMenu className="w-6 h-6 text-gray-300" />
              <img
                src="../src/assets/Science Club New PNG logo.png"
                alt="logo"
                className="size-10 relative left-[77vw]"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
              />
              <img
                src="../src/assets/aic.png"
                alt="logo"
                className="size-10 relative left-[55vw]"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
              />
            </div>
          ) : (
            <nav className="flex space-x-4 align-middle w-full items-center text-center">
              <div className="flex items-center space-x-4 justify-center">
                <a className="hover:text-gray-300" href="#">
                  Home
                </a>
                <a className="hover:text-gray-300" href="#">
                  Schedule
                </a>
                <a className="hover:text-gray-300" href="#">
                  Speakers
                </a>
                <a className="hover:text-gray-300" href="#">
                  Events
                </a>
                <a className="hover:text-gray-300" href="#">
                  Merchandise
                </a>
                <a className="hover:text-gray-300" href="#">
                  About
                </a>
                <a className="hover:text-gray-300" href="#">
                  Startup Expo
                </a>
              </div>
              <img
                src="../src/assets/Science Club New PNG logo.png"
                alt="logo"
                className="size-20 relative left-[53vw]"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
              />
              <img
                src="../src/assets/aic.png"
                alt="logo"
                className="size-20 relative left-[55vw]"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
              />
            </nav>
          )}
        </div>
      </header>
      <main className="flex flex-col items-center justify-center px-4 text-center">
        <img src='../src/assets/VIGYAAN.png' className=' absolute z-10'/>
        <video 
          src='../src/assets/space.mp4' 
          autoPlay loop muted 
          className={`-z-10 ${isSmallScreen ? 'rotate-90 scale-x-150 scale-y-200' : ' scale-125 scale-y-125'}`}
        ></video>
      </main>
      {isOpen && (
        <div className="absolute top-5 mt-8 bg-[#1010107a] shadow-lg rounded z-10 w-[100vw] ">
          <ul>
              <li><a className="hover:text-gray-300" href="#">
                Home
              </a></li>
              <li><a className="hover:text-gray-300" href="#">
                Schedule
              </a></li>
              <li><a className="hover:text-gray-300" href="#">
                Speakers
              </a></li>
              <li><a className="hover:text-gray-300" href="#">
                Events
              </a></li>
              <li><a className="hover:text-gray-300" href="#">
                Merchandise
              </a></li>
              <li><a className="hover:text-gray-300" href="#">
                About
              </a></li>
          </ul>
        </div>
      )}
    </div>
  );
}
