import React from "react";

export default function MainContent() {
  return (
    <div className="bg-black mt-52 flex justify-center items-center">
      <div className="max-w-[500px] flex flex-col gap-8 items-center">
        <div className="text-center">
          <div
            className="text-[#54C0A0] text-sm font-poppins"
            style={{
              textAlign: "center",
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            JET PROTOCOL
          </div>
          <h1
            className="text-white font-medium font-poppins text-center"
            style={{
              color: "#FFF",
              fontSize: "48px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "126%",
              maxWidth: "500px",
            }}
          >
            <span className="font-semibold">the next generation of</span>
            <br />
            <span
              className="font-playfair whitespace-pre-wrap inline"
              style={{
                color: "#FFF",
                fontFamily: "Playfair Display",
                fontSize: "48px",
                fontStyle: "italic",
                fontWeight: 600,
                lineHeight: "126%",
              }}
            >
              defi governance
            </span>
          </h1>
        </div>
        <p
          className="text-white text-center text-base"
          style={{
            color: "rgba(255, 255, 255, 0.60)",
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          <span>
            experience open source, transparent, and efficient borrowing and
            lending on Solana.
          </span>
        </p>

        <div className="flex justify-center gap-4">
          <div
            className="py-2 px-6 rounded-full shadow-inner text-black font-semibold text-sm"
            style={{
              borderRadius: "100px",
              border: "1px solid rgba(255, 255, 255, 0.24)",
              background: "#64AE9D",
              boxShadow:
                "0px 2px 2px 0px rgba(255, 255, 255, 0.48) inset, 0px -2px 2px 0px rgba(0, 0, 0, 0.48) inset",
            }}
          >
            read docs
          </div>
          <div
            className="py-2 px-6 rounded-full shadow-inner text-white font-medium text-sm"
            style={{
              borderRadius: "100px",
              border: "1px solid rgba(255, 255, 255, 0.48)",
              background: "rgba(0, 0, 0, 0.12)",
              boxShadow:
                "0px 2px 2px 0px rgba(255, 255, 255, 0.48) inset, 0px -2px 2px 0px rgba(0, 0, 0, 0.48) inset",
              backdropFilter: "blur(6px)",
            }}
          >
            how it works
          </div>
        </div>
      </div>
    </div>
  );
}
