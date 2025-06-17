"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { FaEnvelope, FaMapMarkerAlt, FaMoneyBill, FaSearch } from "react-icons/fa";

export default function SplendoursOldHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if a link is active
  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 w-screen z-50">
      {/* Upper Bar - Always Fixed */}
      <div className={"bg-color h-[45px] flex justify-center items-center gap-3 px-4 w-full relative"}>
        <p className="text-xs-custom leading-tight-custom text-customColor font-semibold text-center">
          REGISTER YOUR INFORMATION FOR FREE STONE SAMPLES SENT EXPRESS TO YOU!
        </p>
        <Link
          href={"https://staging.splendourinstone.com.au/walling/#free-stone-samples"}
          className="bg-customColor border border-customColor text-color w-[90px] h-[30px] rounded-full text-xs-custom leading-tight-custom font-medium flex items-center justify-center hover:bg-white"
        >
          Click Here
        </Link>
        <Link
          href={"https://www.splendourinstone.com.au/trade-credit/"}
          className="border border-customColor h-[30px] px-5 text-customColor flex items-center justify-center gap-2 rounded-full text-xs-custom leading-tight-custom font-semibold transition duration-300 hover:text-color hover:bg-customColor">
          <FaMoneyBill className="w-4 h-4" /> Trade Credit
        </Link>
      </div>

      {/* Main Navigation Bar - Positioned Below Upper Bar */}
      <nav
        className={`bg-secondary h-[45px] flex items-center justify-between px-6 w-full border border-border transition-all duration-300 ${isScrolled ? "fixed top-12 shadow-lg" : "relative"}`}
      >
        <div className="flex items-center gap-6">
          <FaEnvelope className="text-customColor" />
          <Link href={`http://46.202.166.36:3000/contact`} className="text-xs-custom leading-tight-custom text-customColor">
            AUSTRALIA'S NUMBER 1 HIGH-END STONE SUPPLIER - AUSTRALIA WIDE DELIVERY
          </Link>
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
        className={`flex items-center justify-between px-6 w-full h-[120px] transition-all duration-300 ${isScrolled ? "fixed top-[45px] bg-color backdrop-blur-md shadow-lg" : "bg-color relative"}`}
      >
        {/* Left Side Links */}
        <div className="flex space-x-8 p-[10px] relative z-10">
            <div className="flex items-center justify-center gap-[3vw] relative">
            {/* <div className="flex flex-col items-start space-y-2 relative"> */}
            <Link
              href="/"
              className={`relative inline-block text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-[2px] after:bg-customColor after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive("/") ? "after:scale-x-100 font-bold" : ""
                }`}
            >
              HOME
            </Link>
            {/* </div> */}

            <Link
              href="https://staging.splendourinstone.com.au/walling/"
              className={`relative inline-block text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-[2px] after:bg-customColor after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive("https://staging.splendourinstone.com.au/walling/") ? "after:scale-x-100 font-bold" : ""
                }`}
            >
              WALLING
            </Link>
            <Link
              href="https://staging.splendourinstone.com.au/paving/"
              className={`relative inline-block text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-[2px] after:bg-customColor after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive("https://staging.splendourinstone.com.au/paving/") ? "after:scale-x-100 font-bold" : ""
                }`}
            >
              PAVING
            </Link>
            <Link
              href="https://staging.splendourinstone.com.au/cobble-stones/"
              className={`relative inline-block text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-[2px] after:bg-customColor after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive("https://staging.splendourinstone.com.au/cobble-stones/") ? "after:scale-x-100 font-bold" : ""
                }`}
            >
              COBBLESTONE
            </Link>

            <Link
              href="https://staging.splendourinstone.com.au/reclaimed-bricks/"
              className={`relative inline-block text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-[2px] after:bg-customColor after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive("https://staging.splendourinstone.com.au/reclaimed-bricks/") ? "after:scale-x-100 font-bold" : ""
                }`}
            >
              BRICKS
            </Link>
          </div>
        </div>

        {/* Center Logo */}
        <div className="flex justify-center items-center w-full absolute left-[50vw] transform -translate-x-1/2 z-0">
          <Link href={`/`}>
          <Image src="/images/splendour logo.svg" alt="Main Logo" style={{ width: "17vw" }} width={250} height={92} />
          </Link>
        </div>

        {/* Right Side Links */}
        <div className="flex space-x-[2vw] text-xs-custom leading-tight-custom items-center p-[10px] z-10">
          <Link
            href="/about"
            className={`relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-[2px] after:bg-customColor after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive("https://staging.splendourinstone.com.au/about/") ? "after:scale-x-100 font-bold" : ""
              }`}
          >
            ABOUT
          </Link>
          {/* <div className="flex flex-col items-start space-y-2 relative"> */}
          <Link
            href="https://staging.splendourinstone.com.au/gallery/"
            className={`relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-[2px] after:bg-customColor after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive("https://staging.splendourinstone.com.au/gallery/") ? "after:scale-x-100 font-bold" : ""
              }`}
          >
            GALLERY
          </Link>
          <Link
            href="/contact"
            className={`relative text-xs-custom leading-tight-custom text-customColor after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-[2px] after:bg-customColor after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive("https://staging.splendourinstone.com.au/contact/") ? "after:scale-x-100 font-bold" : ""
              }`}
          >
            CONTACT
          </Link>
          {/* </div> */}
          <Link
            style={{
              fontFamily: "inherit",
              fontStyle: "inherit",
              fontWeight: "750"
            }}
            href={"https://staging.splendourinstone.com.au/quote/"}
            className="bg-customColor flex text-center items-center justify-center font-semibold text-color px-4 w-[200px] h-[50px] py-2 rounded-[30px]"
          >
            FREE MEASURE
            <br></br>
            & QUOTE!
          </Link>
        </div>
      </div>
    </header>
  );
}