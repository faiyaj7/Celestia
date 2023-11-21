"use client";
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import AddToCart from "./AddToCart";
import { useSelector, useDispatch } from "react-redux";
import { incQty, decQty, qty } from "@/store/cartSlice";
const SingleItemFunctionality = ({ item }) => {
  const qty = useSelector((state) => state.cartSlice.qty);

  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center border border-red-500 p-3 gap-3">
        <h1>Qty</h1>
        <FaMinus
          onClick={() => dispatch(decQty())}
          className="cursor-pointer"
        />
        <span>{qty}</span>
        <FaPlus onClick={() => dispatch(incQty())} className="cursor-pointer" />
      </div>
      <div>
        <AddToCart item={item} title={"Add to Cart"} qty={qty} />
      </div>
    </>
  );
};

export default SingleItemFunctionality;
