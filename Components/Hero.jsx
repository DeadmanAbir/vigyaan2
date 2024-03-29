import React, { useState, useEffect } from 'react';


const MyVideo = () => {
  // const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      window.location.reload();
      setViewportHeight(window.innerHeight);
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isSmallScreen = viewportWidth < 640;


  return (
    <video
      autoPlay
      loop
      muted
      className={`z-0 ${isSmallScreen ? 'rotate-90 scale-x-200 scale-y-200' : 'scale-100 scale-y-100'}`}
    >
      <source src="../src/assets/space.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};


export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



    

  return (
    <div className='relative'>
      <div className='fixed z-50 w-screen'>
      <nav className="flex justify-between items-center bg-gray-800 bg-opacity-0 text-white px-4 py-3 ">
        {/* Navbar items */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/" className="hover:text-gray-300">Speakers</a>
          <a href="/" className="hover:text-gray-300">Events</a>
          <a href="/" className="hover:text-gray-300">About us</a>
        </div>





        <div className="md:hidden">
        <button
      onClick={toggleMenu}
      className="focus:outline-none"
      aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
    >
      <svg
        className={`w-6 h-6 text-white transition-transform duration-300 transform ${isOpen ? 'rotate-90' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18 18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
      </svg>
    </button>
        </div>




        <div className="flex items-center">
          <img src="../src/assets/Science Club New PNG logo.png" alt="Logo" className="w-12 h-12 sm:mx-4 sm:w-16 sm:h-16" />
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-16 rounded left-0 right-0 bg-gray-800 my-2 mx-4 py-2 z-50 flex justify-end">
          <div className="flex flex-col w-full items-start">
            <a href="/" className="px-8 py-2 text-white hover:bg-gray-700">Home</a>
            <a href="/" className="px-8 py-2 text-white hover:bg-gray-700">Speakers</a>
            <a href="/" className="px-8 py-2 text-white hover:bg-gray-700">Events</a>
            <a href="/" className="px-8 py-2 text-white hover:bg-gray-700">About us</a>

          </div>
        </div>
        )}
      </nav>
      </div>

      <div className="relative overflow-hidden h-[25em] xs:h-[30em] sm:h-auto">
        <MyVideo />

        <div className="absolute inset-0 flex items-center justify-center">
          <img src='../src/assets/VIGYAAN.png' className=' absolute z-10' />
        </div>
      </div>
    </div>
  );
  
}
