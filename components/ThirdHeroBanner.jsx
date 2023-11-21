"use client";
import { bannerMenu, imgMainDivVariant, singleImg } from "@/constants";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BsBoxSeamFill } from "react-icons/bs";
import { AiOutlineRight } from "react-icons/ai";
import { motion, useAnimation, useInView } from "framer-motion";
const ThirdHeroBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) controls.start("show");
  }, [isInView, controls]);
  return (
    <section
      className="flex flex-col items-center justify-center gap-24 mt-[150px] px-2"
      ref={ref}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1.4 }}
        className="font-merriweather-sans font-semibold text-4xl"
      >
        Discover the Power of Eco-Friendly Packaging.
      </motion.h1>
      <motion.div
        variants={imgMainDivVariant}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center"
      >
        {bannerMenu.map((item) => (
          <motion.div
            variants={singleImg}
            className="w-[80%] shadow-xl shadow-slate-500 border flex flex-col items-start gap-3 p-5 rounded-xl"
            key={item.id}
          >
            <span>
              <BsBoxSeamFill size={30} />
            </span>
            <h1 className="font-merriweather-sans font-medium text-xl">
              {item.title}
            </h1>
            <h5 className="font-merriweather-sans font-regular text-xs">
              {item.desc}
            </h5>
            <Link href="/" className="button flex items-center gap-1 text-xs">
              {item.linkName}
              <AiOutlineRight size={10} />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ThirdHeroBanner;
