import Image from "next/image";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

import gradientPNG from "../public/gradient.png"; // Import the PNG gradient image

export default function Home() {
  return (
    <main
      className="bg-black bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${gradientPNG})` }}
    >
      <div className="w-screen flex justify-center mt-6">
        <div>
          <Navbar />
          <MainContent />
        </div>
      </div>
    </main>
  );
}
