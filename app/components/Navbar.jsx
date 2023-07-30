//navbar
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-2 border-gray-800 rounded-full p-3 bg-black">
      <div className="flex justify-between items-center px-10 rounded-full w-[1042px] bg-black bg-opacity-50 backdrop-blur-md">
        <img className="object-cover" alt="Image" src="logo.png" />
        <div className="flex gap-10">
          <div
            className="text-white text-base font-normal"
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            products
          </div>
          <div
            className="text-white text-base font-normal"
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            dao
          </div>
          <div
            className="text-white text-base font-normal"
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            build
          </div>
          <div
            className="text-white text-base font-normal"
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            docs
          </div>
        </div>
        <button
          className="rounded-full px-5 py-2 text-black font-semibold text-sm shadow-inner"
          style={{
            background: "#64AE9D",
            borderRadius: "100px",
            border: "1px solid rgba(255, 255, 255, 0.24)",
            boxShadow:
              "0px 2px 2px 0px rgba(255, 255, 255, 0.48) inset, 0px -2px 2px 0px rgba(0, 0, 0, 0.48) inset",
          }}
        >
          <Link legacyBehavior href="/auth">
            <a>Launch App</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
