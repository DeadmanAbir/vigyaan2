import React from 'react';

const EventCard = ({ imageSrc, title, description }) => {
  return (
<div className="wow fadeInUp group bg-[#03396c] backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden h-auto" style={{ visibility: 'visible' }}>
  <div className="overflow-hidden">
    <img loading="lazy" src={imageSrc} alt="Event" className="ease-linear w-full duration-500 scale-100 group-hover:scale-125 h-80" />
  </div>

  <div className="p-4 h-70 flex flex-col justify-between">
    <h4 className="red-hat text-4xl font-black transition-opacity duration-300 ease-in-out hover:opacity-60">{title}</h4>
    <p className=" font-extralight opacity-80">{description}</p>
  </div>

  <div className='w-full flex justify-center pb-10'>
    <a href="../src/assets/Rules.pdf" target="_blank" className="bg-white text-[#000] flex justify-center items-center p-2 w-9/12 rounded-md">
      <p className="text-center text-1xl sm:2xl"> Download Rules</p>
    </a>
  </div>
</div>

  );
};

export default EventCard;