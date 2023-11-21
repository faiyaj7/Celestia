"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { imgMainDivVariant, singleImg } from "@/constants";
export const SecondHeroBanner = () => {
  const MotionImage = motion(Image);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("show");
    }
  }, [isInView, controls]);
  return (
    <section
      className="w-full flex flex-col lg:flex-row items-center justify-evenly mt-[150px] px-2 "
      ref={ref}
    >
      {/* Left Side */}
      <motion.div
        variants={imgMainDivVariant}
        initial="hidden"
        animate={controls}
        // animate="show"
        className="w-full lg:w-[35%] grid grid-cols-2 gap-2"
      >
        <MotionImage
          variants={singleImg}
          src="/racial1.png"
          alt="secondbanner"
          width={500}
          height={500}
          className="w-full object-cover rounded-full"
        />
        <MotionImage
          variants={singleImg}
          src="/racial2.png"
          alt="secondbanner"
          width={500}
          height={500}
          className="w-full object-cover rounded-full"
        />
        <MotionImage
          variants={singleImg}
          src="/racial3.png"
          alt="secondbanner"
          width={500}
          height={500}
          className="w-full object-cover rounded-full"
        />
        <MotionImage
          variants={singleImg}
          src="/racial4.png"
          alt="secondbanner"
          width={500}
          height={500}
          className="w-full object-cover rounded-full"
        />
      </motion.div>
      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.9 }}
        className="w-full lg:w-[30%]"
      >
        <h4 className="font-merriweather-sans font-medium text-sm">
          Re<span className="text-red-600 text-lg font-semibold">V</span>italize
        </h4>
        <div className="mt-2">
          {" "}
          <h1 className="font-merriweather-sans font-semibold text-4xl">
            Discover the Power of Natural Skincare
          </h1>
        </div>

        <div className="mt-2">
          {" "}
          <p className="font-merriweather-sans font-regular text-xs">
            Experience the unique benefits of our skincare products, formulated
            with Natural ingredients and designed to be gentle on sensitive
            skin. Acheive a healthy, radiant complexion with our effective and
            nourshing solutions.
          </p>
        </div>

        <div className="mt-5">
          <Link href="/" className="button">
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
