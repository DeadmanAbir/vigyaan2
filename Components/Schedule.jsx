    

function Schedule(){
    return (<>
    <section id="Schedule">
    <div className="bg-[#001736]" >
      <div className="flex justify-center py-12 px-10">
      <img src="../src/assets/schedule.jpg" alt="" />
      </div>
      <div className="py-10 bg-[#001736] flex justify-center">

        <a href="../src/assets/schedule.jpg" download className="bg-[#000] hover:bg-[#155e89] hover:text-white hover:border-[#1B1A55] text-[#9290C3] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline border border-[#535C91] ">
          Download Schedule
        </a>
      </div>
    </div>

    <div id="events" className="wow fadeInUp relative overflow-hidden pt-17.5 lg:pt-22.5 xl:pt-27.5 bg-[#001736] text-[#fff]">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="max-w-full mx-auto px-4 my-5 sm:px-8 xl:px-0">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-7.5 ">

          <div className="wow fadeInUp group bg-[#03396c] backdrop-filter backdrop-blur-sm rounded-lg " style={{ visibility: 'visible' }}>
              <div className="overflow-hidden rounded-xl ">
                <img loading="lazy" src="../src/assets/speaker.jpg" alt="image" className="ease-linear w-full duration-500 scale-100 group-hover:scale-125 h-80" />
              </div>

              <div className="p-4 h-60 flex flex-col justify-between">
                <h4  className="red-hat">
                  Inauguration
                </h4>
                <p className="font-medium opacity-80">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur inventore distinctio dignissimos, qui aut sequi delectus deleniti velit alias suscipit provident possimus cumque, placeat et! Sunt iste rem fugit laborum?
                </p>


              </div>
            </div>




          </div>

        </div>
        
      </div>
    </div>

    </section>

    
    </>)
}

export default Schedule;
