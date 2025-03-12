"use client";
import React, { ReactNode, useState } from "react";



export default function NavBarAceternity({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("sticky top-8 inset-x-0 max-w-5xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <SimpleMenuItem href="/" item="Home" />


        <MenuItem setActive={setActive} active={active} item="Bricks">
          <div className="  text-xs-custom leading-tight-custom grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="clayburn-brick"
              href="https://www.splendourinstone.com.au/product/clayburn-brick/"
              src="/images/navbarImages/bricks/bricks1.jpg"
              description="Clayburn Brick offers a timeless appeal for sustainable design and recycled materials projects. These reclaimed bricks, aged between 80 and 120 years, are environmentally friendly and exude a rich history that adds character to any space."
            />
            <ProductItem
              title="Midnight-Ash-Brick"
              href="https://www.splendourinstone.com.au/product/midnight-ash-brick/"
              src="/images/navbarImages/bricks/bricks2.jpg"
              description="Midnight Ash Brick offers a sleek and modern aesthetic, showcasing rich dark grey and black tones and natural texture. It is perfect for both contemporary and classic designs. "
            />
            <ProductItem
              title="Ashbury-Brick"
              href="https://www.splendourinstone.com.au/product/ashbury-brick/"
              src="/images/navbarImages/bricks/bricks3.jpg"
              description="Combining rich earthy tones with a beautifully weathered texture, Ashbury Brick offers a perfect balance of warmth and character."
            />
            <ProductItem
              title="All Bricks"
              href="https://www.splendourinstone.com.au/reclaimed-bricks/"
              src="/images/navbarImages/bricks/bricks4.jpg"
              description="FIND THE Bricks PRODUCT INSPIRATION FOR YOUR PROJECT"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Walling">
          <div className="  text-xs-custom leading-tight-custom grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Jamieson | Limestone"
              href="https://www.splendourinstone.com.au/product/jamieson/"
              src="/images/navbarimages/walling/product1.png"
              description="Searching for a high-quality, natural stone that combines beauty and durability for your building projects? "
            />
            <ProductItem
              title="Loch"
              href="https://www.splendourinstone.com.au/product/loch/"
              src="/images/navbarimages/walling/product2.png"
              description="Elevate Your Outdoors with Splendour's Natural Stone Paving"
            />
            <ProductItem
              title="Buffalo | Granite"
              href="https://www.splendourinstone.com.au/product/buffalo/"
              src="/images/navbarimages/walling/product3.png"
              description="Renowned for its durability and striking beauty, this premium natural stone enhances both modern and traditional designs."
            />
            <ProductItem
              title="All Walling products"
              href="https://www.splendourinstone.com.au/walling/"
              src="/images/navbarImages/walling/product4.png"
              description="FIND All Walling PRODUCT INSPIRATION FOR YOUR PROJECT"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Paving">
          <div className="   text-xs-custom leading-tight-custom grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Tuscan | Limestone"
              href="https://www.splendourinstone.com.au/product/tuscan-limestone/"
              src="/images/navbarimages/paving/product1.png"
              description="The Tuscan Limestone brings a rustic charm to your outdoor spaces with its natural pits and texture, evoking the timeless beauty of the Italian countryside"
            />
            <ProductItem
              title="Stamford | Limestone"
              href="https://www.splendourinstone.com.au/product/stamford-limestone/"
              src="/images/navbarimages/paving/product2.png"
              description="
Stamford Limestone exudes warmth with its sandy beige tones and rustic charm. This natural stone, with its brushed and tumbled finish, offers a beautifully aged look that enhances both modern and traditional spaces"
            />
            <ProductItem
              title="Himalayan | Limestone"
              href="https://www.splendourinstone.com.au/product/himalayan-limestone/"
              src="/images/navbarimages/paving/product3.png"
              description="
The Himalayan Limestone is a versatile paver that embodies natural elegance and durability. With its soft, warm tones of cream and beige,"
            />
            <ProductItem
              title="All Stone"
              href="https://www.splendourinstone.com.au/paving/"
              src="/images/navbarimages/paving/product4.png"
              description="Here is a collection of All Pavving Stone "
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Cobble Stone">
          <div className="   text-xs-custom leading-tight-custom grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Birkshire-limestone"
              href="https://www.splendourinstone.com.au/product/birkshire-limestone/"
              src="/images/navbarimages/stone/product1.png"
              description="Outdoor spaces should be as refined and enduring as the home they surround. Yet, many paving options fade, crack, or demand constant upkeep, leaving patios, pathways, and driveways looking tired and neglected"
            />
            <ProductItem
              title="Antline-Bluestone"
              href="https://www.splendourinstone.com.au/product/antline-bluestone/"
              src="/images/navbarimages/stone/product2.png"
              description="Antiline Bluestone—Cobblestones are a reliable choice for outdoor paving, offering a blend of durability and aesthetic appeal"
            />
            <ProductItem
              title="Porphyry-Cobblestone"
              href="https://www.splendourinstone.com.au/product/porphyry-cobblestone/"
              src="/images/navbarimages/stone/product3.png"
              description="Regarding outdoor paving, Porphyry offers the perfect blend of rugged durability and sophisticated beauty. Known for its unique texture and rich, earthy tones, this stone creates a striking foundation for any landscape"
            />
            <ProductItem
              title="All CobbleStone"
              href="https://staging.splendourinstone.com.au/cobble-stones/"
              src="/images/navbarimages/stone/stone.jpg"
              description="Find All Products related to Cobble Stone "
            />
          </div>
        </MenuItem>
        <SimpleMenuItem href="/services" item="Service" />

        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="   text-xs-custom leading-tight-custom grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Out Door"
              href="https://staging.splendourinstone.com.au/walling/"
              src="/images/navbarimages/portfolio/product1.png"
              description="Create Stunning Features with Our Natural Stone Walling"
            />
            <ProductItem
              title="Fire Place"
              href="https://staging.splendourinstone.com.au/pavving/"
              src="/images/navbarimages/portfolio/product2.png"
              description="Elevate Your Outdoors with Splendour's Natural Stone Paving"
            />
            <ProductItem
              title="Dinnig Room"
              href="https://staging.splendourinstone.com.au/cobble-stones/"
              src="/images/navbarimages/portfolio/product3.png"
              description="YOUR STONE DESIGN JOURNEY AT SPLENDOUR IN STONE"
            />
            <ProductItem
              title="All Project"
              href="https://staging.splendourinstone.com.au/projects"
              src="/images/navbarimages/portfolio/product4.png"
              description="FIND INSPIRATION FOR YOUR PROJECT"
            />
          </div>
        </MenuItem>
        <SimpleMenuItem href="/about" item="About" />
        <SimpleMenuItem href="/contact" item="CONTACT US" />
        <SimpleMenuItem href="/faq" item="Consultation" />


      </Menu>
    </div>
  );
}

import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-transparent dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative dark:bg-transparent dark: bg-transparent shadow-input flex justify-center space-x-4 px-8 py-6  "
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={150}
        height={50}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white dark:text-white">
          {title}
        </h4>
        <p className="text-white text-xs-custom leading-tight-custom max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

interface HoveredLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}
export const HoveredLink = ({ children, ...rest }: HoveredLinkProps) => {
  return (
    <Link
      {...rest}
      className="text-white dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const SimpleMenuItem = ({
  item,
  href,
}: {
  item: string;
  href: string;
}) => {
  return (
    <a href={href} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-white hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
    </a>
  );
};