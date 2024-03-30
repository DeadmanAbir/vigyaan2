export default function Footer() {
    return(
        <section id="Footer" className="bg-[#0c0c0c] text-white lg:h-screen">
            <div className="h-1/2 pt-2 lg:h-3/4 lg:pt-10 ">
            <div className="pt-10 flex flex-col justify-center items-center">
            <p className="text-6xl py-3 w-9/12">
            Our Story
            </p>
            <p className="text-1xl py-3 w-9/12">
            Welcome to The Srijan Science Club, where exploration meets global consciousness! We are dedicated to fostering a deep understanding of scientific principles while promoting global neutralization and related topics. Our club provides a dynamic platform for members to engage in thought-provoking discussions, collaborative experiments, and initiatives that transcend borders. <br/> <br/> Successfully hosted 5 impactful events ,Among these, a special collaboration stands out a dynamic event with the prestigious NIT,our commitment to fostering growth and connection continues to drive us forward.
            </p>
            <a href="https://www.instagram.com/srijan_science_club?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" className="text-1xl py-3 w-9/12" target="_blank">Read More...</a>
            </div>

            </div>





            <div className="flex flex-col justify-center items-center">


<div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 w-10/12">
    <div >
        <div className="flex py-10 ">
        <img className="h-12 transition-opacity duration-300 hover:opacity-70" src="../src/assets/Science Club New PNG logo.png" alt="" />

        </div>
        © 2024 Srijan Science Club. All rights reserved.
    </div>

    <div>
        <p className="pb-8 text-2xl">Quick Links</p>
        <a  href="#Home"><p className="transition-opacity duration-300 hover:opacity-80 transform">Home</p></a>
        <a href="#About"><p className="transition-opacity duration-300 hover:opacity-80 transform">About Us</p></a>
        <a href="#Speakers"><p className="transition-opacity duration-300 hover:opacity-80 transform">Speakers</p></a>
        <a href="#meet-team"><p className="transition-opacity duration-300 hover:opacity-80 transform">Meet The Team</p></a>
    </div>

    <div>
    <p className="pb-8 text-2xl">Resources</p>
        <a href="#Schedule" className="transition-opacity duration-300 hover:opacity-80 transform"><p>Schedule</p></a>
        <a href="#Sponsorship" className="transition-opacity duration-300 hover:opacity-80 transform"><p>Sponsorship</p></a>

    </div>


    <div>
        <p>Follow Us</p>
        <div className="flex">
        <a href="https://www.instagram.com/srijan_science_club/" target="_blank"><img className="w-14 p-2 transition-opacity duration-300 hover:opacity-80" src="../src/assets/FooterI.png" alt="" /></a>
        
        <a href="https://www.linkedin.com/company/ssc-ggsipu/" target="_blank"><img className="w-14 p-2 transition-opacity duration-300 hover:opacity-80 invert" src="../src/assets/linkedin.svg" alt="" /></a>

        </div>
    </div>
</div>

                
</div>


        </section >
        

    )
}
