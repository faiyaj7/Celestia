import { footerMenu } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="sticky top-[100vh] bottom-0 px-3 bg-purple-300">
      <div className="flex flex-col lg:flex-row items-center justify-between px-5 gap-10">
        {/* Logo */}
        <div className=" w-[100px] mt-10">
          <Image
            src="/logo.png"
            alt="logo"
            width={757}
            height={496}
            className="rounded-full w-full"
          />
        </div>
        {/* Middle */}
        <div className="flex gap-6 lg:gap-10">
          {footerMenu.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className="hover:scale-105 hover:text-black transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Right Side */}
        <div className="flex gap-10 ">
          <BsFacebook className="hover:scale-125 transition-all duration-300" />
          <BsInstagram className="hover:scale-125 transition-all duration-300" />
          <BsTwitter className="hover:scale-125 transition-all duration-300" />
          <BsYoutube className="hover:scale-125 transition-all duration-300" />
        </div>
      </div>
      <hr className="border  border-slate-500 w-[90%] mx-auto mt-10 mb-5" />
      <div className="text-sm text-center pb-2">
        &copy; 2023 Celestia. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
