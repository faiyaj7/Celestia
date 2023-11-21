"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import AddToCart from "./AddToCart";
import { imgMainDivVariant, singleImg } from "@/constants";
import Image from "next/image";
const Menu = ({ product }) => {
  return (
    <motion.div
      variants={imgMainDivVariant}
      initial="hidden"
      animate="show"
      className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 px-5 my-[100px] "
    >
      {product.map((item) => (
        <motion.div
          variants={singleImg}
          className="w-full relative  shadow-md rounded-2xl shadow-slate-600 hover:scale-105 transition-all duration-300"
          key={item.id}
        >
          <Link href={`/product/${item.id}`}>
            <Image
              src={item.image.public_url}
              alt={item.image}
              width={400}
              height={400}
              className="rounded-t-2xl"
            />
            <div className="flex flex-row items-center justify-between gap-1 my-4 mx-2">
              <div className="">
                {" "}
                <h1 className="font-merriweather-sans font-medium text-xs lg:text-lg">
                  {item.title[0].toUpperCase() + item.title.slice(1)}
                </h1>
                <h4 className="font-merriweather-sans font-medium text-xs lg:text-sm">
                  {item.price} BDT
                </h4>
              </div>

              {item.stock <= 0 && (
                <div className="lg:bg-red-400 rounded-full p-1  text-xs font-merriweather-sans text-center text-red-400 lg:text-black">
                  Out of Stock
                </div>
              )}
            </div>
          </Link>
          <AddToCart item={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Menu;
