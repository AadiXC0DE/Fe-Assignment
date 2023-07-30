import React from "react";
import Image from "next/image";
import image1 from "../../public/image 17.png";
import image2 from "../../public/image 18.png";
import image3 from "../../public/image 19.png";
import image4 from "../../public/image 20.png";
import image5 from "../../public/image 21.png";
import image6 from "../../public/image 22.png";
import image7 from "../../public/image 23.png";
import image8 from "../../public/image 24.png";
import image9 from "../../public/image 25.png";
import image10 from "../../public/image 26.png";
import image11 from "../../public/image 27.png";

export default function Brands() {
  return (
    <div className="bg-transparent flex justify-center w-full mt-20">
      <div className="w-[1566.82px] relative flex gap-12 overflow-hidden">
        <div className="w-80 h-full absolute left-0 top-0 bg-gradient-to-r from-black"></div>
        <Image src={image1} alt="ex-brand-1" />
        <Image src={image2} alt="ex-brand-2" />
        <Image src={image3} alt="ex-brand-3" />
        <Image src={image4} alt="ex-brand-4" />
        <Image src={image5} alt="ex-brand-5" />
        <Image src={image6} alt="ex-brand-6" />
        <Image src={image7} alt="ex-brand-7" />
        <Image src={image8} alt="ex-brand-8" />
        <Image src={image9} alt="ex-brand-9" />
        <Image src={image10} alt="ex-brand-10" />
        <Image src={image11} alt="ex-brand-11" />
        <div className="w-80 h-full absolute right-0 top-0 bg-gradient-to-l from-black"></div>
      </div>
    </div>
  );
}
