
import { Button } from "@/components/ui/button"

export default function Package() {
  return (
    <div className="bg-black p-10 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">SPONSORSHIP PACKAGES</h1>
      <div className="flex flex-col md:flex-row items-center justify-center h-auto md:grid md:grid-cols-4 gap-10" >
        <SponsorshipCard
          title="Co Sponsor"
          price="10000"
          features={["1 standee only", "Permission to set up stall only for one day in the fest", "We can share the database of participants."]}
          description="Become a co-sponsor and enjoy exclusive benefits."
          image="images/co-sponsor.png" />

        <SponsorshipCard title="Silver Sponsor"
          price="20000"
          features={["5 minute advertisement", "1 banner and 2 standees", "1 unpaid workshop", "We can share the database of participants"]}
          description="Permission to set up stall only for one day in the fest."
          image="images/silver.png" />

        <SponsorshipCard title="Gold Sponsor"
          price="30000"
          features={["10 minute advertisement", "2 banner and 4 standees", "1 unpaid workshop", "We can share the database of participants"]}
          description="Permission to set up stall through out the fest"
          image="images/gold.png" />

        <SponsorshipCard title="Platinum Sponsor"
          price="50000"
          features={["5 banner and 5 standees", "Advertisement for an appropriate time period", "Permission to set up stall through out the fest.", "1 unpaid workshop", "We can share the database of participants"]}
          description="Sponsor logo on official merchendise."
          image="images/platinum.png"/>

      </div>
    </div>
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
    <div className="flex flex-col items-center justify-center min-h-[900px] min-w-[300px] md:grid md:grid-cols-2 gap-7.5" style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', maxWidth: '400px' }}>
      <div className="wow fadeInUp rounded-3xl bg-gradient-45 relative z-20 overflow-hidden p-8 pricing-item-border min-h-[900px] md:h-auto " style={{ visibility: 'visible', }}>
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

        <a href="#" target="_blank" className="mt-8 flex items-center justify-center gap-1.5 font-medium text-sky-300 p-3 rounded-lg transition-all ease-in-out duration-300 relative pricing-button-gradient hover:shadow-button w-full absolute bottom-0 left-1/2 transform -translate-x-1/2">
          Become a Sponsor
        </a>

        <p className="mt-4 text-sm text-center absolute bottom-100 left-1/2 transform -translate-x-1/2">
          {description}
        </p>


      </div>
    </div>



  )
}