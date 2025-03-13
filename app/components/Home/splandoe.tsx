"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaMoneyBill, FaSearch } from "react-icons/fa";

export default function SplendoursOldHeader() {
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
      <nav
        className={`bg-secondary h-[45px] flex items-center justify-between px-6 w-full border border-border transition-all duration-300 ${isScrolled ? "fixed top-12 shadow-lg" : "relative"}`}
      >
        <div className="flex items-center gap-6">
          <FaEnvelope className="text-customColor" />
          <p className="text-xs-custom leading-tight-custom text-customColor">
            AUSTRALIA'S NUMBER 1 HIGH-END STONE SUPPLIER - AUSTRALIA WIDE DELIVERY
          </p>
        </div>
        <div className="flex items-center gap-6">
          <FaMapMarkerAlt className="text-customColor" />
          <p className="text-xs-custom leading-tight-custom text-customColor">
            SHOWROOM: 10/21 COOK ROAD, MITCHAM VIC 3132 TEL: 03 9873 4941
          </p>
        </div>
        <div className="flex items-center border-l-2 border-border rounded overflow-hidden">
          <div className="w-full h-[45px] flex justify-center items-center bg-secondary cursor-pointer">
            <FaSearch className="text-gray-700 ml-1" />
          </div>
          <input type="text" placeholder="Search..." className="w-[160px] h-[45px] px-3 bg-secondary outline-none" />
        </div>
      </nav>

      {/* Lower Navigation Bar - Stays Below Upper Bar When Scrolled */}
      <div
        className={`flex items-center justify-between px-6 w-full h-[120px] transition-all duration-300 ${isScrolled ? "fixed top-[50px] bg-color backdrop-blur-md shadow-lg" : "bg-transparent relative"}`}
      >
        {/* Left Side Links */}
        <div className="flex space-x-8 p-[10px]">
          <div className="flex flex-col items-start">
            <Link href="/" className="relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+4px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              HOME
            </Link>
            <Link href="https://staging.splendourinstone.com.au/reclaimed-bricks/" className="relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+4px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              BRICKS
            </Link>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href="https://staging.splendourinstone.com.au/walling/" className="relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+2px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              WALLING
            </Link>
            <Link href="https://staging.splendourinstone.com.au/paving/" className="relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+2px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              PAVING
            </Link>
            <Link href="https://staging.splendourinstone.com.au/cobble-stones/" className="relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+2px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              COBBLESTONE
            </Link>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center items-center w-full absolute left-1/2 transform -translate-x-1/2">
          <Image src="/images/main.png" alt="Main Logo" style={{ width: "17vw" }} width={250} height={92} />
        </div>

        {/* Right Side Links */}
        <div className="flex space-x-8 text-xs-custom leading-tight-custom items-center p-[10px]">
          <Link href="https://staging.splendourinstone.com.au/about/" className="relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+4px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            ABOUT
          </Link>
          <div className="flex flex-col items-start">
            <Link href="https://staging.splendourinstone.com.au/gallery/" className="relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+2px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              GALLERY
            </Link>
            <Link href="https://staging.splendourinstone.com.au/contact/" className="relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px] after:bg-customColor after:top-[calc(100%+4px)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              CONTACT
            </Link>
          </div>
          <Link href={"https://staging.splendourinstone.com.au/quote/"} className="bg-customColor flex items-center justify-center font-semibold text-color px-4 w-[210px] h-[75px] py-2 rounded-[30px]">
            FREE<br></br>
            MEASURE &
            <br></br>
            QUOTE!
          </Link>
        </div>
      </div>
    </header>
  );
}
