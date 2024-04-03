import React from 'react';

const EventCard = ({ imageSrc, title, description }) => {
  return (
    <div className="wow fadeInUp group bg-[#03396c] backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden h-[36em]" style={{ visibility: 'visible' }}>
      <div className="overflow-hidden">
        <img loading="lazy" src={imageSrc} alt="Event" className="ease-linear w-full duration-500 scale-100 group-hover:scale-125 h-80" />
      </div>

      <div className="p-4 h-70 flex flex-col justify-between">
        <h4 className="red-hat text-4xl font-black transition-opacity duration-300 ease-in-out hover:opacity-60">{title}</h4>
        <p className=" font-extralight opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;