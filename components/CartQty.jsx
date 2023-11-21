"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { toggleDelete } from "@/store/cartSlice";
const CartQty = () => {
  const totalQuantities = useSelector(
    (state) => state.cartSlice.totalQuantities
  );
  const cart = useSelector((state) => state.cartSlice.cart);
  const isDelete = useSelector((state) => state.cartSlice.isDelete);
  const dispatch = useDispatch();
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (mounted && !isDelete) {
      controls.start({
        x: [0, -10, 10],
        transition: { duration: 0.2, repeat: 1, repeatType: "reverse" },
      });
    }
  }, [totalQuantities, controls]);
  // after succesful delete the item we change isDelete to false so that when item added it can spring
  useEffect(() => {
    if (isDelete) dispatch(toggleDelete(false));
  }, [cart]);
  return (
    <Link href="/cart">
      <div className="relative">
        <button className="cursor-pointer">
          <FaShoppingCart size={20} />
        </button>
        <motion.span
          animate={controls}
          className="bg-red-500 absolute rounded-full -top-[10px] -right-[10px] w-5 h-5 text-center text-sm font-semibold"
        >
          {totalQuantities}
        </motion.span>
      </div>
    </Link>
  );
};

export default CartQty;
