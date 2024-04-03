import React from 'react';

export default function Sponsors() {
    return (
        <div id='sponsors' className='bg-[#001736]'>
            <div className='flex justify-center text-6xl text-white pt-10'>
            <p >
                Sponsors
            </p>
            </div>

        <div className="flex flex-wrap w-full justify-center">
            <div className='p-10'>
                <img
                    src={`../images/sponsors.png`}
                    alt="image sponsors"
                    className=' w-40'
                />
            </div>

            <div className='p-10'>
                <img
                    src={`../images/sponsors2.jpg`}
                    alt="image sponsors"
                    className='w-40'
                />
            </div>
            <div className='p-10'>
                <img
                    src={`../images/ethindia.png`}
                    alt="image sponsors"
                    className='h-40'
                />
            </div>
            <div className='p-10'>
                <img
                    src={`../images/polygon.png`}
                    alt="image sponsors"
                    className='h-40'
                />
            </div>
            <div className='p-10'>
                <img
                    src={`../images/tba.png`}
                    alt="image sponsors"
                    className='h-40 invert'
                />
            </div>
            <div className='p-10'>
                <img
                    src={`../images/devfolio.png`}
                    alt="image sponsors"
                    className='h-40'
                />
            </div>
        </div>
        </div>
    );

};

