"use client";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice.js";
const AddToCart = ({ item, qty = 0, title = "" }) => {
  const disabledButton =
    item.stock <= 0 ? "disabled:cursor-not-allowed" : "cursor-pointer";
  const dispatch = useDispatch();
  return title === "" ? (
    <button
      className={`mr-5 p-2 button rounded-full bg-slate-400 absolute top-[20px] right-0 ${disabledButton}`}
      onClick={() => dispatch(addToCart({ item, qty }))}
      disabled={item.stock <= 0}
    >
      <FaPlus />
    </button>
  ) : (
    <button
      className={`${disabledButton} button`}
      disabled={item.stock <= 0}
      onClick={() => dispatch(addToCart({ item, qty }))}
    >
      {title}
    </button>
  );
};

export default AddToCart;
