function renderTeamMember(name, role, imageSrc, linkedinUrl, description) {
  return (
    <div className="shadow-[8px_8px_#000] min-h-[140px] flex content-center items-center w-full mx-2 rounded-2xl border-solid border-black bg-[#155e89]">
      <div className="flex flex-col items-center py-3 px-3">
        <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center">
          <img src={imageSrc} alt="Image" className="w-full h-full object-cover" />
        </div>

        <p className="red-hat font-semibold text-2xl mt-4">{name}</p>

        <div className="bg-black rounded-r-full rounded-l-full px-2 mt-4">
          <p className=" red-hat font-semibold text-white">{role}</p>
        </div>

        <p className="mt-4 red-hat font-extralight">{description}</p>

        <div className="mt-4">
          <a href={linkedinUrl}><img src="../src/assets/linkedin.svg" alt="LinkedIn Icon" className="invert"/></a>
        </div>
      </div>
    </div>
  );
}



export default function About() {
    return (
      <section id="About" className="bg-[#001736] text-[#fff]">
        <div className="h-screen flex flex-col justify-center items-center">
            <p className="text-center text-6xl py-3">
            Explore More
            </p>
            <p className="text-center text-1xl pb-3 opacity-80">
            Discover more sections of our website
            </p>
            <div className="w-40">


            </div>

            <div class="container mx-[30em] py-8 w-full">
            <div class="block lg:flex lg:flex-wrap lg:justify-center">
  <div class="lg:w-5/12 w-11/12 mb-10 justify-center lg:mr-10">
    <a href="https://www.instagram.com/srijan_science_club?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank">
      <div class="transition duration-200 ease-in-out hover:shadow-[8px_8px_#9aeadd] shadow-[2px_2px_#9aeadd] min-h-140 flex items-center w-full mx-2 rounded-[20px] border-[2px] border-[#155e89] bg-[#155e89] text-[#fff]">
        <div class="flex">
          <div class=" sm:block  lg:w-4/12 p-4">
            <img class="w-[10em]" src="../src/assets/Science Club New PNG logo.png" alt="Logo Science club" />
          </div>
          <div class="flex flex-col justify-center p-1">
            <p class="text-2xl red-hat font-bold">About Us</p>
            <p className="opacity-80 red-hat font-extralight">Learn about the mission and vision of Srijan Science Club</p>
          </div>
        </div>
      </div>
    </a>
  </div>
  <div class="lg:w-5/12 w-11/12 justify-center">
    <a href="http://www.ipu.ac.in/" target="_blank">
    <div class="transition duration-200 ease-in-out hover:shadow-[8px_8px_#9aeadd] shadow-[2px_2px_#9aeadd] min-h-140 flex items-center w-full mx-2 rounded-[20px] border-[2px] border-[#155e89] bg-[#155e89] text-[#fff]">
        <div class="flex">
          <div class=" sm:block  lg:w-4/12 p-4">
            <img class="w-[10em]" src="../src/assets/IPU_LOGO.png" alt="Logo Science club" />
          </div>
          <div class="flex flex-col justify-center p-1">
            <p class="text-2xl red-hat font-bold">Our University</p>
            <p className="opacity-80 red-hat font-extralight">Explore the academic excellence of GGSIPU</p>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

        </div>

        </div>

        <div id="meet-team" className="pb-5 flex flex-col justify-center items-center">
      <p className="text-6xl py-6">Meet the Team</p>
      <p className="text-1xl pb-3 opacity-80">Meet the dedicated team behind Vigyaan</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-10/12">
        {renderTeamMember(
          "Harshit Mittal",
          "PRESIDENT",
          "../src/assets/harshit.jpg",
          "https://www.linkedin.com/in/-harshitmittal/",
          "Harshit, pursuing Btech in Chemical Engineering, is the President of Srijan Science Club of GGSIPU."
        )}

        {renderTeamMember(
          "Rinki Lodhi",
          "VICE PRESIDENT",
          "../src/assets/Rinki Vice President.jpg",
          "https://www.linkedin.com/in/rinki-lodhi-4b75b3228/",
          "Rinki, pursuing Btech in Chemical Engineering, is the Vice President of Srijan Science Club of GGSIPU."
        )}

        {renderTeamMember(
          "Kartik Garg",
          "MEDIA HEAD",
          "../src/assets/Kartik Media Head.jpg",
          "https://www.linkedin.com/in/kartik-garg-99a754252/",
          "Kartik is responsible for all the media related events and activities."
        )}

        {renderTeamMember(
          "Yash Gupta",
          "TECHNICAL HEAD",
          "../src/assets/Yash Technical head.jpg",
          "https://www.linkedin.com/in/yash-gupta-73b9281b1",
          "Yash is the technical head of Srijan Science Club of GGSIPU."
        )}
      </div>
    </div>

      </section>
    );
  }
  
