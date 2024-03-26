
import { AvatarImage, Avatar } from "@/components/ui/avatar"

export default function Speakers() {
  return (
    <div className="bg-[#0c0c0c] py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white text-4xl font-semibold mb-10">Speakers</h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <Avatar>
              <AvatarImage alt="Nitin Gadkari" 
              src="https://png.pngtree.com/png-clipart/20210321/original/pngtree-golden-megaphone-speaker-png-image_6145812.jpg"
              
               />
            </Avatar>
            <h3 className="text-white text-xl font-semibold mt-4">Nitin Gadkari</h3>
            <p className="text-white text-opacity-70">Hon'ble Minister of Road Transport & Highways of India</p>
          </div>
          <div className="text-center">
            <Avatar>
              <AvatarImage alt="Raghuram Rajan"  src="https://png.pngtree.com/png-clipart/20210321/original/pngtree-golden-megaphone-speaker-png-image_6145812.jpg"
               />
            </Avatar>
            <h3 className="text-white text-xl font-semibold mt-4">Raghuram Rajan</h3>
            <p className="text-white text-opacity-70">Professor, Chicago's Booth University, Ex Governor RBI</p>
          </div>
          <div className="text-center">
            <Avatar>
              <AvatarImage alt="Vijay Shekhar Sharma"  src="https://png.pngtree.com/png-clipart/20210321/original/pngtree-golden-megaphone-speaker-png-image_6145812.jpg"
               />
            </Avatar>
            <h3 className="text-white text-xl font-semibold mt-4">Vijay Shekhar Sharma</h3>
            <p className="text-white text-opacity-70">Founder, PayTM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

