"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { imgMainDivVariant, singleImg } from "@/constants";

const Explore = () => {
  const MotionImage = motion(Image);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);
  return (
    <section
      className="w-full flex flex-col lg:flex-row items-center justify-around mt-[150px] px-2 gap-10"
      ref={ref}
    >
      {/* Left part */}
      <motion.div
        className="w-full lg:w-[45%] grid grid-cols-2 gap-2"
        variants={imgMainDivVariant}
        initial="hidden"
        animate={controls}
      >
        <MotionImage
          variants={singleImg}
          src="/set1.png"
          alt="hero"
          width={500}
          height={500}
          className="w-full rounded-lg hover:scale-105 transition-all duration-300"
        />{" "}
        <MotionImage
          variants={singleImg}
          src="/set2.png"
          alt="hero"
          width={500}
          height={500}
          className="w-full rounded-lg hover:scale-105 transition-all duration-300"
        />{" "}
        <MotionImage
          variants={singleImg}
          src="/set3.png"
          alt="hero"
          width={500}
          height={500}
          className="w-full rounded-lg hover:scale-105 transition-all duration-300"
        />{" "}
        <MotionImage
          variants={singleImg}
          src="/set4.png"
          alt="hero"
          width={500}
          height={500}
          className="w-full rounded-lg hover:scale-105 transition-all duration-300"
        />
      </motion.div>
      {/* Right part */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.4 }}
        className="w-full lg:w-[35%]"
      >
        <h1 className="font-merriweather-sans font-semibold text-4xl">
          Discover Our Amazing Product Range
        </h1>
        <h4 className="font-merriweather-sans text-sm my-3">
          Experince the benefits of Our High-Quality Skincare Products
        </h4>
        <div className="flex items-center gap-5 mt-2">
          <Link href="/" className="button">
            Explore
          </Link>
          <Link href="/" className="button">
            Shop Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
