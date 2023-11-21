"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { SiHashicorp } from "react-icons/si";
import { motion, useInView } from "framer-motion";
const CustomerOpinion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-around mt-[150px] px-2 gap-6"
      ref={ref}
    >
      {/* Left Part */}{" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2 }}
        className="w-full lg:w-[35%]"
      >
        <div className="flex items-center mb-3">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h3 className="font-merriweather-sans font-semibold text-2xl">
          Celestia Skincare products have truly tranformed my skin. I can&apos;t
          imagine using anything else now.
        </h3>
        <div className="grid grid-cols-2 gap-3 mt-5 divide-x divide-black">
          <div className="">
            <h1 className="font-merriweather-sans font-light text-sm">
              Emily Johnson
            </h1>
            <span className="font-merriweather-sans font-light text-sm">
              Marketing Manager, ABC Corp.
            </span>
          </div>
          <div className="">
            <SiHashicorp size={30} className="ml-3 text-center mt-1" />
          </div>
        </div>
      </motion.div>
      {/* Right Part */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2 }}
        className="order-first lg:order-last"
      >
        <Image
          src="/customer_praise.png"
          alt="hero"
          width={500}
          height={500}
          className="rounded-full shadow-xl shadow-slate-500"
        />
      </motion.div>
    </section>
  );
};

export default CustomerOpinion;
