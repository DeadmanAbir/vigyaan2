
import { Button } from "@/components/ui/button"

export default function Package() {
  return (
    <div className="bg-black p-10 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">SPONSORSHIP PACKAGES</h1>
      <div className="flex justify-center gap-10">
       <SponsorshipCard />
      
       <SponsorshipCard />

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


function SponsorshipCard(title, price, features){

  //title, price should be string
  // features should be array of strings , so that we can map it
  return(
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
  )
}