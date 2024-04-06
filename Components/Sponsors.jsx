import React from "react";
import Sponsor1 from "../images/sponsors.png";
import Sponsor2 from "../images/sponsors2.jpg";
import ETHIndia from "../images/ethindia.png";
import Polygon from "../images/polygon.png";
import Devfolio from "../images/devfolio.png";
export default function Sponsors() {
  return (
    <div id="sponsors" className="bg-[#001736]">
      <div className="flex justify-center text-6xl text-white pt-10">
        <p>Sponsors</p>
      </div>

      <div className="flex flex-wrap w-full justify-center">
        <div className="p-10">
          <img src={Sponsor1} alt="image sponsors" className=" w-40" />
        </div>

        <div className="p-10">
          <img src={Sponsor2} alt="image sponsors" className="w-40" />
        </div>
        <div className="p-10">
          <img src={ETHIndia} alt="image sponsors" className="h-40" />
        </div>
        <div className="p-10">
          <img src={Polygon} alt="image sponsors" className="h-40" />
        </div>

        <div className="p-10">
          <img src={Devfolio} alt="image sponsors" className="h-40" />
        </div>
      </div>
    </div>
  );
}
