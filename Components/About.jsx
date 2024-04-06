import Linkedln from "../src/assets/linkedin.svg";
import ScienceClub from "../src/assets/Science Club New PNG logo.png";
import IPULogo from "../src/assets/IPU_LOGO.png";
import AICLogo from "../src/assets/aic.png";
import Harshit from "../src/assets/harshit.jpg";
import Rinki from "../src/assets/Rinki Vice President.jpg";
import Kartik from "../src/assets/Kartik Media Head.jpg";
import Yash from "../src/assets/Yash Technical head.jpg";
function RenderTeamMember({ name, role, imageSrc, linkedinUrl, description }) {
  return (
    <div className="shadow-[8px_8px_#000] min-h-[140px] flex content-center items-center w-full mx-2 rounded-2xl border-solid border-black bg-[#155e89]">
      <div className="flex flex-col items-center py-3 px-3">
        <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
          <img
            src={imageSrc}
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="red-hat font-semibold text-2xl mt-4">{name}</p>

        <div className="bg-black rounded-r-full rounded-l-full px-2 mt-4">
          <p className=" red-hat font-semibold text-white">{role}</p>
        </div>

        <p className="mt-4 red-hat font-extralight">{description}</p>

        <div className="mt-4">
          <a href={linkedinUrl} target="_blank">
            <img src={Linkedln} alt="LinkedIn Icon" className="invert" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="About" className="bg-[#001736] text-[#fff]">
<div className="h-screen flex flex-col justify-center items-center">
  <p className="text-center py-3 text-5xl md:6xl">Explore More</p>
  <p className="text-center text-1xl pb-3 opacity-80">Discover more sections of our website</p>
  <div className="container mx-[30em] py-8 w-full">
    <div class="block lg:flex lg:flex-wrap lg:justify-center">
      <div class="lg:w-5/12 w-11/12 mb-10 justify-center lg:mr-10" style={{ height: '100px' }}>
        <a href="https://www.instagram.com/srijan_science_club?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
          <div class="transition duration-200 ease-in-out hover:shadow-[8px_8px_#9aeadd] shadow-[2px_2px_#9aeadd] flex items-center w-full mx-2 rounded-[20px] border-[2px] border-[#155e89] bg-[#155e89] text-[#fff]" style={{ height: '100%' }}>
            <div class="flex" style={{ height: '100%' }}>
              <div class="sm:block lg:w-4/12 p-4 flex justify-center items-center" style={{ height: '100%' }}>
                <img class="h-20" src={ScienceClub} alt="Logo Science club" /> 
              </div>
              <div class="flex flex-col justify-center p-1" style={{ minHeight: '100px' }}>
                <p class="text-2xl red-hat font-bold">About Us</p>
                <p className="opacity-80 red-hat font-extralight">
                  Learn about the mission and vision of Srijan Science Club
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="lg:w-5/12 w-11/12 mb-10 justify-center lg:mr-10" style={{ height: '100px' }}>
        <a href="http://www.ipu.ac.in/" target="_blank">
          <div class="transition duration-200 ease-in-out hover:shadow-[8px_8px_#9aeadd] shadow-[2px_2px_#9aeadd] flex items-center w-full mx-2 rounded-[20px] border-[2px] border-[#155e89] bg-[#155e89] text-[#fff]" style={{ height: '100%' }}>
            <div class="flex" style={{ height: '100%' }}>
              <div class="sm:block lg:w-4/12 p-4 flex justify-center items-center" style={{ height: '100%' }}>
                <img class="h-20" src={IPULogo} alt="Logo Science club" /> 
              </div>
              <div class="flex flex-col justify-center p-1" style={{ minHeight: '100px' }}> 
                <p class="text-2xl red-hat font-bold">Our University</p>
                <p className="opacity-80 red-hat font-extralight">
                Explore the academic excellence of GGSIPU

                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="lg:w-5/12 w-11/12 mb-10 justify-center lg:mr-10" style={{ height: '100px' }}>
        <a href="https://aic-ggsipu.org/" target="_blank">
          <div class="transition duration-200 ease-in-out hover:shadow-[8px_8px_#9aeadd] shadow-[2px_2px_#9aeadd] flex items-center w-full mx-2 rounded-[20px] border-[2px] border-[#155e89] bg-[#155e89] text-[#fff]" style={{ height: '100%' }}>
            <div class="flex" style={{ height: '100%' }}>
              <div class="sm:block lg:w-4/12 p-4 flex justify-center items-center" style={{ height: '100%' }}>
                <img class="h-20" src={AICLogo} alt="Logo Science club" /> 
              </div>
              <div class="flex flex-col justify-center p-1" style={{ minHeight: '100px' }}> 
                <p class="text-2xl red-hat font-bold">About AIC</p>
                <p className="opacity-80 red-hat font-extralight">
                  Learn about the mission and vision of AIC Club
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
      



    </div>
  </div>
</div>


      <div
        id="meet-team"
        className="pb-5 flex flex-col justify-center items-center"
      >
        <p className="text-5xl py-6 md:6xl">Meet the Team</p>
        <p className="text-1xl pb-3 opacity-80">
          Meet the dedicated team behind Vigyaan
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-10/12">
          <RenderTeamMember
            name="Harshit Mittal"
            role="PRESIDENT"
            imageSrc={Harshit}
            linkedinUrl="https://www.linkedin.com/in/-harshitmittal/"
            description="Harshit, pursuing Btech in Chemical Engineering, is the President of Srijan Science Club of GGSIPU."
          />
          <RenderTeamMember
            name="Rinki Lodhi"
            role="VICE PRESIDENT"
            imageSrc={Rinki}
            linkedinUrl="https://www.linkedin.com/in/rinki-lodhi-4b75b3228/"
            description="Rinki, pursuing Btech in Chemical Engineering, is the Vice President of Srijan Science Club of GGSIPU."
          />

          <RenderTeamMember
            name="Kartik Garg"
            role="MEDIA HEAD"
            imageSrc={Kartik}
            linkedinUrl="https://www.linkedin.com/in/kartik-garg-99a754252/"
            description="Kartik is responsible for all the media related events and activities."
          />

          <RenderTeamMember
            name="Yash Gupta"
            role="TECHNICAL HEAD"
            imageSrc={Yash}
            linkedinUrl="https://www.linkedin.com/in/yash-gupta-73b9281b1"
            description="Yash is the technical head of Srijan Science Club of GGSIPU."
          />
        </div>
      </div>
    </section>
  );
}
