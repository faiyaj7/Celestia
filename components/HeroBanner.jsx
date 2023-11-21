"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { letterVariants, wordVariants } from "@/constants";
const HeroBanner = () => {
  let title = " Discover The Power of";
  title = title.split("");
  let spanTitle = "Healthy Skin.";
  spanTitle = spanTitle.split("");

  let secondTitle =
    "Experince the difference with our natural and effective skincare products.";
  secondTitle = secondTitle.split("");
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-around mt-20 gap-4">
      {/* Left Side */}
      <div className="w-full lg:w-1/3 px-2">
        {/* First Title */}
        <motion.p
          variants={wordVariants}
          initial="hidden"
          animate="show"
          className="font-merriweather-sans font-semibold text-4xl "
        >
          {title.map((item) => (
            <motion.span key={item} variants={letterVariants}>
              {item}
            </motion.span>
          ))}{" "}
          {spanTitle.map((item) => (
            <motion.span
              key={item}
              variants={letterVariants}
              className="text-red-400"
            >
              {item}
            </motion.span>
          ))}{" "}
        </motion.p>
        {/* Second Title */}
        <motion.div
          variants={wordVariants}
          initial="hidden"
          animate="show"
          className="mt-2 mb-5"
        >
          {secondTitle.map((item) => (
            <motion.span
              variants={letterVariants}
              className="font-merriweather-sans font-medium text-sm mt-16"
              key={item}
            >
              {item}
            </motion.span>
          ))}
        </motion.div>

        <div className="flex gap-5">
          <button
            className="bg-[#FFB3B3] hover:bg-[#FF8080] text-black px-3 py-2 rounded-xl 
        border border-[#df9696] transition-all duration-300"
          >
            <Link href="/menu">Shop now</Link>
          </button>
          <button className="button">
            <Link href="/">Learn More</Link>
          </button>
        </div>
      </div>
      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="order-first lg:order-last w-full lg:w-[35%]"
      >
        <Image
          src="/herobanner2.png"
          alt="heroBanner"
          width={500}
          height={500}
          className="w-full"
        />
      </motion.div>
    </section>
  );
};

export default HeroBanner;
