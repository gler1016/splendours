"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";
import { FaMoneyBill } from "react-icons/fa";

export default function SplendoursOldHeaders() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-screen z-50">
      {/* Upper Bar - Always Fixed */}
      <div className="bg-color h-8 flex justify-center items-center gap-3 px-4 w-full">
        <p className="text-xs-custom leading-tight-custom text-customColor font-semibold text-center">
          REGISTER YOUR INFORMATION FOR FREE STONE SAMPLES SENT EXPRESS TO YOU!
        </p>
        <button className="bg-white border border-customColor text-color w-[110px] h-[30px] rounded-full text-xs-custom leading-tight-custom font-medium flex items-center justify-center">
          Click Here
        </button>
        <button className="border border-customColor h-[30px] px-5 text-customColor flex items-center justify-center gap-2 rounded-full text-xs-custom leading-tight-custom font-semibold transition duration-300">
          <FaMoneyBill className="w-4 h-4" /> Trade Credit
        </button>
      </div>

      {/* Main Navigation Bar - Positioned Below Upper Bar */}
     

      {/* Lower Navigation Bar - Stays Below Upper Bar When Scrolled */}
      <div
        className={`flex items-center bg-color justify-between px-6 w-full h-[100px] transition-all duration-300 ${isScrolled ? "fixed top-[50px] bg-color backdrop-blur-md shadow-lg" : " relative"}`}
      >
      

        {/* Center Logo */}
        <div className="flex justify-center items-center w-full absolute left-1/2 transform -translate-x-1/2">
          <Image src="/images/main.png" alt="Main Logo" style={{ width: "17vw" }} width={250} height={92} />
        </div>

      </div>
    </header>
  );
}
