"use client";
import { imgMainDivVariant, menu, singleImg } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { FaSignInAlt, FaShoppingCart } from "react-icons/fa";
import CartQty from "./CartQty";
import CustomMenu from "./CustomMenu";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-5 lg:mx-10 mt-10 relative z-50">
      {/* Left Side */}
      <div className="flex gap-10 items-center">
        {/* Logo */}
        <div className=" w-[100px]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={757}
              height={496}
              className="rounded-full w-full"
            />
          </Link>
        </div>
        {/* Menu */}
        <div className="hidden lg:block ">
          <motion.div
            variants={imgMainDivVariant}
            initial="hidden"
            animate="show"
            className="flex items-center gap-10"
          >
            {menu.map((item) => (
              <motion.div variants={singleImg} key={item.id}>
                <Link
                  href={item.link}
                  className="hover:scale-105 hover:text-black transition-all duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* Right Side for large screen*/}
      <div className="hidden lg:block">
        <div className=" flex gap-5 items-center">
          <CartQty />

          <button className="border border-red-500 px-3 py-2 rounded-xl">
            <Link href="/">Contact</Link>
          </button>

          <button
            className="bg-[#FFB3B3] hover:bg-[#FF8080] text-black px-3 py-2 rounded-xl 
        border border-[#df9696] transition-all duration-300 "
          >
            <Link href="/signup" className="font-medium">
              Sign Up
            </Link>
          </button>
        </div>
      </div>

      {/* Right Side for small screen */}
      <div className="block lg:hidden ">
        <div className="flex gap-5 items-center ">
          <CartQty />
          <Link href="/signup">
            <FaSignInAlt size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
