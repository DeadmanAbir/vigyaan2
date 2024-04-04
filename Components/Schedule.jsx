import React from 'react';
import EventCard from './EventCard';
import scheduleImage from '../src/assets/schedule.jpg';
import speakerImage from '../src/assets/speaker.jpg';


function Schedule() {
  return (<>
    <section id="Schedule">
      <div className="bg-[#001736]" >
        <div className="flex justify-center py-12 px-10">
          <img src="../src/assets/schedule.jpg" alt="" />
        </div>
        <div className="py-10 bg-[#001736] flex justify-center">

          <a href={scheduleImage} download className="bg-[#000] hover:bg-[#155e89] hover:text-white hover:border-[#1B1A55] text-[#9290C3] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-[#535C91] ">
            Download Schedule
          </a>
        </div>
      </div>

      <div id="events" className="wow fadeInUp relative overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 bg-[#001736] text-[#fff]">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="max-w-full mx-auto px-4 my-5 sm:px-8 xl:px-0">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-7.5 ">

              <div className="wow fadeInUp group bg-[#03396c] backdrop-filter backdrop-blur-sm rounded-lg overflow-hidden h-[36em]" style={{ visibility: 'visible' }}>
                <div className="overflow-hidden">
                  <img loading="lazy" src="../images/events/hackathon.jpg" alt="Event" className="ease-linear w-full duration-500 scale-100 group-hover:scale-125 h-80" />
                </div>

                <div className="p-4 h-60 flex flex-col justify-between">
                  <h4 className="red-hat text-4xl font-black transition-opacity duration-300 ease-in-out hover:opacity-60">Hackathon</h4>
                  <p className="font-extralight opacity-80">Unleash your inner Coder! Collaborate in teams and code, design, and build ingenious solutions to real-world problems. Witness the power of teamwork and unfold the innovation</p>
                  <div className='w-full flex justify-center'>
                    <a href="https://vigyaan.devfolio.co/" target="_blank" className="bg-white text-[#000] flex justify-center items-center p-2 w-9/12 rounded-md">

                      <div className='w-5 mr-2 invert'>
                        <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.46 123.46" fill="#fff">
                          <path d="M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 
            12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 
            13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 
            2.18.08 3.34z"></path>
                          <path d="M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 
            104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 
            55.41 0 0 1 50.58 55.34z"></path>
                        </svg>
                      </div>
                      
                      <p className="text-center text-1xl sm:2xl"> Apply with Devfolio</p>

                    </a>

                  </div>

                </div>
              </div>

              <EventCard
                imageSrc="../images/events/vaad_vivaad.png"
                title="Vaad Vivaad"
                description="Sharpen your arguments and defend your scientific stance. Witness a battle of wits in the Vaad Vivaad as participants engage in thought-provoking debates on scientific issues"
              />


              <EventCard
                imageSrc="../images/events/sciencetopia.avif"
                title="Sciencetopia "
                description="On a serious  note, English dictionary  is quite timid to explain how Evolutionary,Exceptional and Excellent it is ! We welcome  you to the most gorgeous  blend of Science and fiction,Activities, dj , surprises and list goes on"
              />

              <EventCard
                imageSrc="../images/events/science_exhibition.png"
                title="Science Exhibition"
                description="Be amazed by the ingenuity of your peers! Witness a dazzling array of science projects and inventions displayed in the grand Science Exhibition. Engage with the creators and delve deeper into their scientific explorations."
              />

              <EventCard
                imageSrc="../images/events/photography.png"
                title="Photography Competition"
                description="Showcase your scientific perspective through captivating photographs. Let creativity and knowledge converge in these esteemed competitions. "
              />

              <EventCard
                imageSrc="../images/events/paper_comp.png"
                title="Paper Presentation"
                description="It seems to be monotonous to most of us , Sadly It's the exact opposite  , Witness the most thrilling , Exclusive  15 research  paper already in the mix  with an interactive  QnA session.So when are you presenting  your paper?"
              />

              <EventCard
                imageSrc="../images/events/Poster_competition.jpeg"
                title="Poster Competition"
                description="Pull up your creativity  socks and showcase the creativity , Imagination  and Intelligence    in making of the most mindful poster, Empty white sheets are waiting for you!"
              />
              <EventCard
                imageSrc="../images/events/quiz_showdown.png"
                title="Quiz Competition"
                description="Test your scientific knowledge in a thrilling quiz competition. Put your brainpower to the test and vie for the coveted champion's title."
              />
              <EventCard
                imageSrc="../images/events/stand-up.jpeg"
                title="Stand-Up"
                description="Prepare to be laugh like crazy and entertained! Laughter is after all, the best medicine (except maybe actual medicine!). "
              />





            </div>

          </div>

        </div>
      </div>

    </section>


  </>)
}

export default Schedule;
