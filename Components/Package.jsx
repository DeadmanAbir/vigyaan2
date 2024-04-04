
import { Button } from "@/components/ui/button"

export default function Package() {
  return (
    <section id="Sponsorship" className="bg-black p-10 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">SPONSORSHIP PACKAGES</h1>
      <div className=" items-center justify-center h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10" >
        <SponsorshipCard
          title="Title Sponsor"
          price="60,000+"
          features={["2 Ads of 4-6 minutes.", "8 standees.", "Sponsor logo on official merchandise and banners.", "Permission to set up full size stall throughout the fest for free.", "Mention on Social Media", "Shout out on the official website.", "Max 2 hour workshop throughout the fest.", "We can share the full database of participants."]}
          description="Volunteer certificate with sponsors logo."
          image="../images/title-sponsor.jpg" />
      <SponsorshipCard title="Platinum Sponsor"
        price="40,000"
        features={["1 Ad of 3 minutes.", "5 standees.", "Sponsor logo on official merchandise and banners.", "Permission to set up full size stall throughout the fest for free.", "Mention on Social Media", "Shout out on the official website.", "Max 1 hour workshop throughout the fest.", "We can share the full database of participants."]}
        description="We can share the database of participants."
        image="images/platinum.png"/>
          <SponsorshipCard title="Gold Sponsor"
            price="28,000"
            features={["1 Ad of 2 minutes.", "3 standees.", "Permission to set up half size stall throughout the fest for free.", "Mention on Social Media", "Shout out on the official website.", "Max 1 hour workshop throughout the fest.", "We can share the half database of participants."]}
            description="Goodies or gift hampers to winners."
            image="images/gold.png" />
          <SponsorshipCard title="Silver Sponsor"
            price="15,000"
            features={["2 standees.", "Permission to set up stall throughout the fest on 50% - 60% discount.", "Mention on Social Media"]}
            description="Contacts of vendors of required materials."
            image="images/silver.png" />
        <SponsorshipCard
          title="Bronze Sponsor"
          price="8,000"
          features={["1 standee.", "Permission to set up stall throughout the fest on 30% - 40% discount."]}
          description="Publicity of Vigyaan 2024."
          image="../images/bronze.jpg" />



      </div>
    </section>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function SponsorshipCard({ title, price, features, description, image }) {

  //title, price should be string
  // features should be array of strings , so that we can map it
  /*return(
    <div className="bg-[#3c3c8c] p-6 rounded-lg">
    <div className="flex justify-center">
      <img
        alt="Black Tshirt"
        className="h-[200px] w-[200px] object-cover"
        height="200"
        src="/placeholder.svg"
        style={{
          aspectRatio: "200/200",
          objectFit: "cover",
        }}
        width="200"
      />
    </div>
    <h2 className="mt-4 text-center text-2xl font-bold">Tshirt</h2>
    <p className="mt-2 text-center text-4xl font-bold">₹ 499</p>
    <ul className="mt-4 space-y-2">
      <li className="flex items-center space-x-2">
        <CheckIcon className="text-blue-500" />
        <span>Pure Cotton Comfort</span>
      </li>
      <li className="flex items-center space-x-2">
        <CheckIcon className="text-blue-500" />
        <span>Diverse Size Range</span>
      </li>
      <li className="flex items-center space-x-2">
        <CheckIcon className="text-blue-500" />
        <span>Secure Online Transactions</span>
      </li>
    </ul>
    <div className="mt-6 flex justify-center">
      <Button className="bg-blue-500 hover:bg-blue-600">Order now</Button>
    </div>
  </div>
  )*/
  return (
    <div className="flex flex-col items-center justify-center min-h-[1200px] min-w-[275px] gap-7.5 " >
      <div className="wow fadeInUp rounded-3xl bg-gradient-45 relative z-20 overflow-hidden p-8 pricing-item-border min-h-[1100px] md:h-auto max-w-[400px]" style={{ visibility: 'visible', }}>
        <div className="w-full h-54 rounded-xl bg-white mb-8">
          <img loading="lazy" src={image} alt="merchandise" className="w-full h-full rounded-xl" />
        </div>

        <h3 className="font-semibold text-heading-6 text-white my-3">
          {title}
        </h3>

        <div className="flex items-center gap-3.5">
          <h2 className="font-bold text-custom-1 text-sky-300">₹ {price}</h2>
        </div>

        <div className="my-5 w-full h-[1px] pricing-gradient-divider"></div>

        <ul className="flex flex-col gap-4">
          {features ? features.map((feature, index) => (
            <li key={index} className="flex items-center gap-5">
              <img loading="lazy" src="images/tick-icon.svg" alt="icon" />
              <span className="font-medium">{feature}</span>
            </li>
          )) : null}
        </ul>

        <a href="../src/assets/Vigyaan 2024 brochure.pdf" target="_blank" className="mt-4 mb-12 flex items-center justify-center gap-1.5 font-medium text-sky-300 p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button w-full absolute bottom-0 left-1/2 transform -translate-x-1/2">
          Become a Sponsor
        </a>

        <p className="mt-12 mb-10 text-sm text-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
          {description}
        </p>


      </div>
    </div>



  )
}