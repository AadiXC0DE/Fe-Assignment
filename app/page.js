import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Brands from "./components/Brands";
import gradientPNG from "../public/gradient.png"; // Import the PNG gradient image

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-[-100px] left-0 w-full h-full bg-transparent">
        <Image
          src={gradientPNG}
          layout="fill"
          objectFit="none" // Set objectFit to "none" to prevent image expansion
          objectPosition="center"
        />
      </div>
      <main className="bg-black bg-center bg-no-repeat">
        <div className="w-screen flex justify-center mt-6">
          <div className="z-50">
            <Navbar />
            <div className="bg-transparent">
              <MainContent style={{ backgroundColor: "transparent" }} />
            </div>
          </div>
        </div>
        <Brands />
      </main>
    </div>
  );
}
